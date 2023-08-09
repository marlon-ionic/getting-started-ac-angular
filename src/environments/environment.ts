// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

import { ProviderOptions } from "@ionic-enterprise/auth";

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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
