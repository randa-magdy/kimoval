import { IconProps } from '@/types';

export const Share = (props: IconProps) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="128"
        cy="256"
        r="48"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
      <circle
        cx="384"
        cy="112"
        r="48"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
      <circle
        cx="384"
        cy="400"
        r="48"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="m169.83 279.53 172.34 96.94m0-240.94-172.34 96.94"
      ></path>
    </svg>
  );
};
