import classNames from 'classnames';
import Image from 'next/image';
import React, { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  name: string;
  error?: string;
  theme?: 'primary' | 'secondary';
  icon?: any;
  note?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  (
    { className, label, name, error, theme = 'primary', icon, note, ...rest },
    ref
  ) => {
    return (
      <div className={className}>
        <div className="flex items-center">
          <input
            id={name}
            name={name}
            type="checkbox"
            ref={ref}
            className="checkbox w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            {...rest}
          />

          <label
            htmlFor={name}
            className={classNames(
              'text-body text-less-medium px-2 flex items-center text-dark-gray font-medium',
              {
                primary: theme === 'primary',
                secondary: theme === 'secondary',
              }
            )}
          >
            {icon && (
              <Image
                src={icon}
                alt={label}
                width={30}
                height={14}
                className="me-2"
              />
            )}
            {label}
            {note && (
              <span className="text-light-gray text-less-medium px-3">
                {note}
              </span>
            )}
          </label>
        </div>

        {error && (
          <p className="my-2 text-xs ltr:text-right rtl:text-left text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
