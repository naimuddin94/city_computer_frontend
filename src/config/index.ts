export const envConfig = {
  api_host: process.env.API_HOST,
  access_token_secret: process.env.JWT_ACCESS_SECRET,
  stripe_pk: process.env.NEXT_PUBLIC_STRIPE_PK,
} as const;
