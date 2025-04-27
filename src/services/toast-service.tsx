import Toast, { ToastType } from '@/components/libraries/toast';
import toast, { ToastOptions } from 'react-hot-toast';

export class ToastService {
  static options: ToastOptions = {
    position: 'top-right',
    duration: 4000,
  };

  public static success(title: string, message: string, options?: ToastOptions): void {
    this.toast(title, message, 'success', options);
  }

  public static error(title: string, message: string, options?: ToastOptions): void {
    this.toast(title, message, 'error', options);
  }

  public static info(title: string, message: string, options?: ToastOptions): void {
    this.toast(title, message, 'info', options);
  }

  public static warning(title: string, message: string, options?: ToastOptions): void {
    this.toast(title, message, 'warning', options);
  }

  private static toast(title: string, message: string, type: ToastType, options: ToastOptions = {}): string {
    const toastOptions = { ...this.options, ...options };

    return toast.custom(
      <Toast title={title} message={message} type={type} duration={toastOptions.duration} />,
      toastOptions,
    );
  }
}
