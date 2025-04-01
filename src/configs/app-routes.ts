export const appRoutesConfig = {
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
};
