import { LabelHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type LabelProps = {
  className?: string;
  children?: ReactNode;
};

const Label = ({ className = '', children, ...rest }: LabelProps & LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className={twMerge('text-sm font-bold', className)} {...rest}>
      {children}
    </label>
  );
};

export default Label;
