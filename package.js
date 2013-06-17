Package.describe({
  summary: "Login service for Instagram accounts"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('instagram', ['client', 'server']);

  api.add_files('facebook_login_button.css', 'client');

  api.add_files('instagram_common.js', ['client', 'server']);
  api.add_files('instagram_server.js', 'server');
  api.add_files('instagram_client.js', 'client');
});
