import { cn } from '@/functions/cn';

type FormErrorProps = {
  message?: string;
  className?: string;
};

const FormError = ({ message, className = '', ...rest }: FormErrorProps) => {
  return (
    message && (
      <span className={cn('text-xs text-red-500', className)} {...rest}>
        {message}
      </span>
    )
  );
};

export default FormError;
