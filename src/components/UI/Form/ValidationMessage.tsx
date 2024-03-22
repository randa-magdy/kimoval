import { FC } from 'react';

interface ValidationMessageProps {
  message: string;
}
const ValidationMessage: FC<ValidationMessageProps> = ({ message }) => {
  return <span className="text-medium text-red-700 px-2">{message}</span>;
};

export default ValidationMessage;
