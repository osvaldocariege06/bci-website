import { SVGProps } from "react";
const BCIIconSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 7.466v1.723h23.743V32h2.437V10.166l-1.764-2.212-1.764-2.21H0z"
      fill="url(#a)"
    />
    <path
      d="M0 13.199v1.773l8.917.004 8.916.006.014 4.897c.008 2.694.02 6.523.028 8.51L17.887 32h2.493V15.948l-1.746-2.261-1.748-2.26-8.442-.001H0z"
      fill="url(#b)"
    />
    <path
      d="M0 22.797v5.507l1.756 1.848L3.514 32H14.54V21.826l-1.746-2.267-1.748-2.27H0zm12.798 2.654v4.645H3.534l-.006-4.625c-.002-2.543 0-4.637.006-4.65.006-.021.945-.025 4.636-.021l4.628.006z"
      fill="url(#c)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={13.09}
        y1={32}
        x2={13.09}
        y2={5.743}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#e72a87" />
        <stop offset={1} stopColor="#093a37" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={10.19}
        y1={32}
        x2={10.19}
        y2={11.426}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#e72a87" />
        <stop offset={1} stopColor="#093a37" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={7.27}
        y1={32}
        x2={7.27}
        y2={17.29}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#e72a87" />
        <stop offset={1} stopColor="#093a37" />
      </linearGradient>
    </defs>
  </svg>
);
export default BCIIconSvg;
