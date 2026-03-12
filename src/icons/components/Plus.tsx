import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    viewBox='0 0 24 24'
    ref={ref}
    {...props}
  >
    <path
      stroke='currentcolor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 5v14m-7-7h14'
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlus);
const Memo = memo(ForwardRef);
export default Memo;
