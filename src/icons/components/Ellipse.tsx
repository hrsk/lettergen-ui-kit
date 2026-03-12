import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEllipse = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 -10 80 100'
    ref={ref}
    {...props}
  >
    <style>{"@keyframes floatBall{0%,to{transform:translateY(0)}50%{transform:translateY(10px)}}"}</style>
    <g
      filter='url(#ellipse_svg__filter0_i_4_10793)'
      style={{
        animation: "floatBall 2s ease-in-out infinite",
        transformOrigin: "center",
      }}
    >
      <circle
        cx={40}
        cy={40}
        r={40}
        fill='url(#ellipse_svg__paint0_radial_4_10793)'
      >
        <animate
          attributeName='opacity'
          dur='2s'
          repeatCount='indefinite'
          values='0.5;0.2;0.5'
        />
      </circle>
      <circle
        cx={40}
        cy={40}
        r={40}
        fill='url(#ellipse_svg__paint1_radial_4_10793)'
      >
        <animate
          attributeName='opacity'
          dur='2s'
          repeatCount='indefinite'
          values='0.5;0.2;0.5'
        />
      </circle>
    </g>
    <defs>
      <radialGradient
        id='ellipse_svg__paint0_radial_4_10793'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='rotate(45)scale(113.137)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' />
        <stop
          offset={1}
          stopColor='#D0D5DD'
        />
      </radialGradient>
      <radialGradient
        id='ellipse_svg__paint1_radial_4_10793'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='rotate(111.93 23.778 28.8)scale(51.8788)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentcolor' />
        <stop
          offset={1}
          stopColor='currentcolor'
          stopOpacity={0.16}
        />
      </radialGradient>
      <filter
        id='ellipse_svg__filter0_i_4_10793'
        width={80}
        height={82}
        x={0}
        y={-2}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood
          floodOpacity={0}
          result='BackgroundImageFix'
        />
        <feBlend
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={-2} />
        <feGaussianBlur stdDeviation={16} />
        <feComposite
          in2='hardAlpha'
          k2={-1}
          k3={1}
          operator='arithmetic'
        />
        <feColorMatrix values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0' />
        <feBlend
          in2='shape'
          result='effect1_innerShadow_4_10793'
        />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgEllipse);
const Memo = memo(ForwardRef);
export default Memo;
