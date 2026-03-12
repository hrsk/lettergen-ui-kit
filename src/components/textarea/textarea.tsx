// import { memo, type ComponentPropsWithRef, type KeyboardEvent, type ReactNode } from "react";
// import clsx from "clsx";
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { clsx } from "clsx";
import { forwardRef, type TextareaHTMLAttributes } from "react";
import { useId } from "react";
import styles from "./textarea.module.scss";
export interface TextareaProperties extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  showCounter?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProperties>(
  (
    { label, error, fullWidth = true, showCounter = true, className, id, maxLength, value, ...properties },
    reference,
  ) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const currentLength = value ? String(value).length : 0;

    return (
      <div className={clsx(styles.wrapper, fullWidth && styles.fullWidthWrapper)}>
        {label && (
          <label
            htmlFor={textareaId}
            className={styles.label}
          >
            {label}
          </label>
        )}
        <textarea
          ref={reference}
          id={textareaId}
          value={value}
          className={clsx(styles.textarea, [error && styles.isError, fullWidth && styles.fullWidth], className)}
          {...properties}
        />
        {showCounter && (
          <div className={styles.footer}>
            <span className={clsx(styles.length, [error && styles.lengthError])}>
              {currentLength}
              {maxLength && ` / ${maxLength}`}
            </span>
          </div>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
