export class AppConsts {
 // static remoteServiceBaseUrl = 'http://172.20.3.201:22888';
 // static remoteServiceBaseUrl = 'http://172.20.3.201:4000';
  // static remoteServiceBaseUrl = 'http://localhost:22742';
 // static remoteServiceBaseUrl = 'https://localhost:44383';
 // static remoteServiceBaseUrl = 'http://192.168.1.214:22897';
  static remoteServiceBaseUrl = 'http://115.79.137.105:9006';
  static appBaseUrl: string;
  static appBaseHref: string; // returns angular's base-href parameter value if used during the publish

  static localeMappings: any = [];

  static readonly userManagement = { defaultAdminUserName: 'admin' };

  static readonly localization = { defaultLocalizationSourceName: 'GuardForce' };

  static readonly authorization = { encrptedAuthTokenName: 'enc_auth_token' };
}
