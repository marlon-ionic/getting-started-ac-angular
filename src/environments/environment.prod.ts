import { ProviderOptions } from "@ionic-enterprise/auth";
export const environment = {
  production: true
};


export const baseConfig: ProviderOptions = {
  clientId: 'ed8cb65d-7bb2-4107-bc36-557fb680b994',
  scope: 'openid offline_access email profile https://dtjacdemo.onmicrosoft.com/ed8cb65d-7bb2-4107-bc36-557fb680b994/demo.read',
  discoveryUrl:
    'https://dtjacdemo.b2clogin.com/dtjacdemo.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_te',
  audience: 'ed8cb65d-7bb2-4107-bc36-557fb680b994',
  logoutUrl: 'msauth.com.ionic.acprovider://auth',
  redirectUri: 'msauth.com.ionic.acprovider://auth',
};

export const otherApiConfig: ProviderOptions = {
  ...baseConfig,
  audience: 'https://dtjacdemo.onmicrosoft.com/acdemo',
  clientId: '0419356f-ef13-4954-9bd0-c09431a66d4d',
  scope: 'openid email profile https://dtjacdemo.onmicrosoft.com/acdemo/demo.read https://dtjacdemo.onmicrosoft.com/acdemo/demo.write',
};

export const otherOtherApiConfig: ProviderOptions = {
  ...baseConfig,
  audience: '0419356f-ef13-4954-9bd0-c09431a66d4d',
  clientId: '0419356f-ef13-4954-9bd0-c09431a66d4d',
  scope: 'openid email profile https://dtjacdemo.onmicrosoft.com/acdemo/demo.read https://dtjacdemo.onmicrosoft.com/acdemo/demo.write',
};
