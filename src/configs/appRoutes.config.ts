export const appRoutesConfig = {
  default: '/',
  wildcard: '*',

  about: 'about',
  uiTester: 'ui-tester',

  auth: 'auth',
  authRoutes: {
    login: 'login',
    register: 'register',
    verifyEmail: 'verify-email',
    forgotPassword: 'forgot-password',
    resetPassword: 'reset-password',
  },
};
