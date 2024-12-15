export const envConfig = {
  api_host: process.env.NEXT_PUBLIC_BASE_URL,
  access_token_secret: process.env.JWT_ACCESS_SECRET,
  stripe_pk: process.env.NEXT_PUBLIC_STRIPE_PK,
} as const;
