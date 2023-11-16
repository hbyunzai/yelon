export interface YunzaiBusinessConfig {
  baseUrl?: string;
  systemCode?: string;
  loginForm?: FormData | null;
  refreshTokenEnabled?: boolean;
  refreshTokenType?: 're-request' | 'auth-refresh';
  nav?: {
    mine?: boolean;
    all?: boolean;
  };
}
