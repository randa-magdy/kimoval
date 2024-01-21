import { IconProps } from '@/types';

export const Mobile = (props: IconProps) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      ></path>
    </svg>
  );
};
