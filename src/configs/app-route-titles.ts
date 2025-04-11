import { appRoutesConfig } from './app-routes';

type AppRouteTitlesConfig<T> = {
  [Key in keyof T]?: T[Key] extends string ? string : AppRouteTitlesConfig<T[Key]>;
};

export const APP_ROUTE_TITLE_KEY = 'title';

export const appRouteTitlesConfig: AppRouteTitlesConfig<typeof appRoutesConfig> = {
  aboutRoutes: {
    dependencies: 'Dependencies',
  },
  authRoutes: {
    login: 'Login',
    register: 'Register',
    verifyEmail: 'Verify email',
    forgotPassword: 'Forgot password',
    resetPassword: 'Reset passsword',
  },
};
