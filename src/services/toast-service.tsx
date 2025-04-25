import Toast, { ToastData } from '@/components/libraries/toast';
import { toast, ToastContentProps, ToastOptions } from 'react-toastify';

export class ToastService {
  static options: ToastOptions = {
    closeButton: false,
    customProgressBar: true,
    position: 'top-right',
    autoClose: 5000,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
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

  private static toast(title: string, message: string, type: ToastOptions['type'], options: ToastOptions = {}): void {
    const toastData: ToastData = {
      type,
      message,
      title,
    };

    const toastOptions = {
      ...this.options,
      ...options,
      data: toastData,
    };

    toast((props: ToastContentProps<ToastData>) => <Toast {...props} />, toastOptions);
  }
}
