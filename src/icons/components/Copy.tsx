import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    viewBox='0 0 20 20'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#copy_svg__a)'>
      <path
        stroke='#475467'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.667}
        d='M6.667 6.667V4.333c0-.933 0-1.4.181-1.756.16-.314.415-.569.729-.729.356-.181.823-.181 1.756-.181h6.333c.934 0 1.4 0 1.757.181.314.16.569.415.729.729.181.356.181.823.181 1.756v6.334c0 .933 0 1.4-.181 1.756-.16.314-.415.569-.729.729-.356.181-.823.181-1.756.181h-2.334m-9 5h6.333c.934 0 1.4 0 1.757-.181.314-.16.569-.415.729-.729.181-.356.181-.823.181-1.756V9.333c0-.933 0-1.4-.181-1.756a1.67 1.67 0 0 0-.729-.729c-.356-.181-.823-.181-1.757-.181H4.333c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729-.181.356-.181.823-.181 1.756v6.334c0 .933 0 1.4.181 1.756.16.314.415.569.729.729.356.181.823.181 1.756.181'
      />
    </g>
    <defs>
      <clipPath id='copy_svg__a'>
        <path
          fill='currentcolor'
          d='M0 0h20v20H0z'
        />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgCopy);
const Memo = memo(ForwardRef);
export default Memo;
