import { clsx } from "clsx";
import { forwardRef, type InputHTMLAttributes } from "react";
import { useId } from "react";

import styles from "./input.module.scss";

export interface InputProperties extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProperties>(
  ({ label, error, fullWidth = false, className, id, ...properties }, reference) => {
    const generatedId = useId();

    const inputId = id || generatedId;

    return (
      <div className={clsx(styles.wrapper, [fullWidth && styles.fullWidthContainer])}>
        {label && (
          <label
            htmlFor={inputId}
            className={styles.label}
          >
            {label}
          </label>
        )}

        <input
          ref={reference}
          id={inputId}
          className={clsx(styles.input, [error && styles.isError, fullWidth && styles.fullWidth], className)}
          {...properties}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
