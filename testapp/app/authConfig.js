const msalConfig = {
    auth: {
      clientId: "ada98fc4-52c1-4236-a0d9-8d296c1c62cf",
      authority: "https://login.microsoftonline.com/22a9871f-edb5-491e-95ba-e2f20d9b7dc5",
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  const loginRequest = {
   scopes: ["openid", "profile", "User.Read"]
  };
  
  // Add scopes here for access token to be used at Microsoft Graph API endpoints.
  const tokenRequest = {
   scopes: ["User.Read", "Mail.Read"]
  };