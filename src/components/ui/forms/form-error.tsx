import { cn } from '@/functions/cn';
import { useTranslation } from 'react-i18next';

type FormErrorProps = {
  message?: string;
  translate?: boolean;
  className?: string;
};

const FormError = ({ message, translate = true, className = '', ...rest }: FormErrorProps) => {
  const { t } = useTranslation();

  return (
    message && (
      <span className={cn('text-xs text-red-500', className)} {...rest}>
        {translate ? t(message) : message}
      </span>
    )
  );
};

export default FormError;
