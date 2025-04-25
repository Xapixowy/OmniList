import { cn } from '@/functions/cn';
import { ReactElement, useEffect, useState } from 'react';
import { TbAlertTriangle, TbCircleCheck, TbExclamationCircle, TbHelpCircle, TbX } from 'react-icons/tb';
import { ToastContentProps, ToastOptions } from 'react-toastify';

const TOAST_DEFAULT_TYPE: ToastOptions['type'] = 'default';
const TOAST_CLASSES: {
  type: {
    [key in ToastClassType]: string;
  };
} = {
  type: {
    success:
      'text-success-text outline-success-background shadow-success-background hover:outline-success-background-hover hover:text-success-text-hover hover:shadow-success-background-hover',
    error:
      'text-danger-text outline-danger-background shadow-danger-background hover:outline-danger-background-hover hover:text-danger-text-hover hover:shadow-danger-background-hover',
    info: 'text-info-text outline-info-background shadow-info-background hover:outline-info-background-hover hover:text-info-text-hover hover:shadow-info-background-hover',
    warning:
      'text-warning-text outline-warning-background shadow-warning-background hover:outline-warning-background-hover hover:text-warning-text-hover hover:shadow-warning-background-hover',
    default: '',
  },
};
const TOAST_PROGRESS_BAR_CLASSES: {
  type: {
    [key in ToastClassType]: string;
  };
} = {
  type: {
    success: 'bg-success-background group-hover:bg-success-background-hover',
    error: 'bg-danger-background group-hover:bg-danger-background-hover',
    info: 'bg-info-background group-hover:bg-info-background-hover',
    warning: 'bg-warning-background group-hover:bg-warning-background-hover',
    default: '',
  },
};

type ToastClassType = Exclude<ToastOptions['type'], undefined>;

export type ToastData = {
  type: ToastOptions['type'];
  message: string;
  title: string;
};

const getToastIcon = (type: ToastOptions['type']): ReactElement | null => {
  switch (type) {
    case 'success':
      return <TbCircleCheck />;
    case 'error':
      return <TbExclamationCircle />;
    case 'info':
      return <TbHelpCircle />;
    case 'warning':
      return <TbAlertTriangle />;
    default:
      return null;
  }
};

const ToastProgressBar = ({
  progress,
  type = TOAST_DEFAULT_TYPE,
}: {
  progress: number;
  type: ToastOptions['type'];
}) => {
  return (
    <div className='absolute bottom-0 left-0 h-2 w-full overflow-hidden'>
      <div className={cn('h-full w-full transition-colors', TOAST_PROGRESS_BAR_CLASSES.type[type])}></div>
    </div>
  );
};

const Toast = ({ closeToast, isPaused, data, toastProps: { autoClose } }: ToastContentProps<ToastData>) => {
  const icon = getToastIcon(data.type);
  const [progress, setProgress] = useState(1);

  const progressFraction: number | null =
    typeof autoClose === 'number' && autoClose > 0 ? parseFloat((progress / autoClose).toFixed(4)) : null;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (progressFraction === null) {
      return;
    }

    if (interval !== null && isPaused) {
      clearInterval(interval);
      return;
    }

    interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(interval!);
          closeToast();
          return 0;
        }
        return prevProgress - progressFraction;
      });
    }, 1);
  }, [isPaused, progress]);

  return (
    <div
      className={cn(
        'group relative h-full w-full overflow-hidden rounded-lg bg-zinc-950 p-4 pb-6 shadow outline transition-colors',
        TOAST_CLASSES.type[data.type || 'default'],
      )}
    >
      <span
        className='text-default-text hover:text-default-text-hover absolute top-0 right-0 grid h-8 w-8 cursor-pointer place-items-center transition-colors'
        onClick={closeToast}
      >
        <TbX />
      </span>
      <p className='mb-1 flex items-center gap-2 font-semibold'>
        <span className='text-lg'>{icon}</span>
        <span>{data.title}</span>
      </p>
      <p className='text-sm text-zinc-200'>{data.message}</p>
      {typeof autoClose === 'number' && <ToastProgressBar progress={progress} type={data.type} />}
    </div>
  );
};

export default Toast;
