export const constants = {
  UserPoolId: process.env.COGNITO_USER_POOL_ID,
  Region: process.env.AWS_CONFIG_CLIENT_REGION,
  AccessKeyId: process.env.AWS_CONFIG_CLIENT_ACCESS_KEY_ID,
  SecretAccessKey: process.env.AWS_CONFIG_CLIENT_SECRET_KEY,
  appClientId: process.env.AWS_CONFIG_CLIENT_APP_CLIENT_ID,
  appClientSecret: process.env.AWS_CONFIG_CLIENT_APP_SECRET,
  cognitoRefreshTokenCookieAge: parseInt(process.env.COGNITO_REFRESH_TOKEN_COOKIE_AGE as string, 10),

  general: {
    appName: process.env.GENERAL_APP_NAME,
    companyName: process.env.GENERAL_COMPANY_NAME,
  },

  mailerSend: {
    templateId: process.env.MAILER_SEND_TEMPLATE_ID,
    fromEmail: process.env.MAILER_SEND_FROM_EMAIL,
    fromName: process.env.MAILER_SEND_FROM_NAME,
    apiKey: process.env.MAILER_SEND_API_KEY,
  },
};
