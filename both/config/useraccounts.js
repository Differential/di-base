AccountsTemplates.configure({
  enablePasswordChange: true,
  showForgotPasswordLink: true,
  onLogoutHook: function() {
    Router.go('home');
  }
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('ensureSignedIn');
