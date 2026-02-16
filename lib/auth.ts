const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://affectionate-magenta-kangaroo.39-61-46-46.cpanel.site';

export interface AuthUser {
  id: number;
  email: string;
  name: string;
}

export interface AuthData {
  user: AuthUser;
  token: string;
}

export const AUTH_STORAGE_KEY = 'nexium_admin_auth';
export const TOKEN_STORAGE_KEY = 'nexium_admin_token';

export const authService = {
  login: async (email: string, password: string): Promise<boolean> => {
    try {
      console.log('🔍 Login API URL:', `${API_URL}/api/login`);
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('📥 Login Response:', { status: response.status, data });

      if (response.ok && data.success) {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data.data.user));
        localStorage.setItem(TOKEN_STORAGE_KEY, data.data.token);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  },

  logout: async (): Promise<void> => {
    const token = authService.getToken();

    if (token) {
      try {
        await fetch(`${API_URL}/api/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
        });
      } catch (error) {
        console.error('Logout error:', error);
      }
    }

    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  },

  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    return !!token;
  },

  getUser: (): AuthUser | null => {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem(AUTH_STORAGE_KEY);
    return user ? JSON.parse(user) : null;
  },

  getToken: (): string | null => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  },
};
