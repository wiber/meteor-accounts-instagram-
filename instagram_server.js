Accounts.oauth.registerService('instagram');

Accounts.addAutopublishFields({
  // publish all fields including access token, which can legitimately
  // be used from the client (if transmitted over ssl or on
  // localhost). https://developers.facebook.com/docs/concepts/login/access-tokens-and-types/,
  // "Sharing of Access Tokens"
  forLoggedInUser: ['services.instagram'],
  forOtherUsers: [
    // https://www.facebook.com/help/167709519956542
    'services.instagram.id', 'services.instagram.username', 'services.instagram.gender'
  ]
});
