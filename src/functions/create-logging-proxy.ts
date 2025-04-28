import { APP_CONFIG } from '@/configs/app';

export const createLoggingProxy = <T extends object>(target: T, prefix: string, omit?: string[]): T =>
  APP_CONFIG.debug
    ? new Proxy(target, {
        get(target, prop, receiver) {
          const origProperty = Reflect.get(target, prop, receiver);

          if (typeof origProperty === 'function') {
            if (omit?.includes(prop.toString())) {
              return origProperty.bind(target);
            }

            return async (...args: any[]) => {
              const result = await origProperty.apply(target, args);

              if (typeof result === 'function') {
                return result;
              }

              if (result instanceof Promise) {
                return result
                  .then((data) => {
                    console.log(`[${prefix}] ${String(prop)}:`, data);
                    return data;
                  })
                  .catch((error) => {
                    console.error(`[${prefix}] ${String(prop)}:`, error);
                    throw error;
                  });
              }

              console.log(`[${prefix}] ${String(prop)}:`, result);
              return result;
            };
          }
        },
      })
    : target;
