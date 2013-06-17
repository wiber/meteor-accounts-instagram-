Meteor.loginWithInstagram = function(options, callback) {
  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Instagram.requestCredential(options, credentialRequestCompleteCallback);
};
