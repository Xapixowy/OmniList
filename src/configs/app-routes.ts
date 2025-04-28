type AppRouteTitlesConfig<T> = {
  [Key in keyof T]?: T[Key] extends string ? string : AppRouteTitlesConfig<T[Key]>;
};

export const APP_ROUTE_TITLE_KEY = 'title';

export const APP_ROUTES_CONFIG = {
  default: '/',
  wildcard: '*',

  uiTester: 'ui-tester',

  about: 'about',
  aboutRoutes: {
    dependencies: 'dependencies',
  },

  auth: 'auth',
  authRoutes: {
    login: 'login',
    register: 'register',
    verifyEmail: 'verify-email',
    forgotPassword: 'forgot-password',
    resetPassword: 'reset-password',
  },
} as const;

export const APP_ROUTE_TITLES_CONFIG: AppRouteTitlesConfig<typeof APP_ROUTES_CONFIG> = {
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
