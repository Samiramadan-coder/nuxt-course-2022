export const useCart = () => useState(() => []);
export const useAuth = () => useState(() => ({
  isAuthenticated: false,
}));

export const useCountPages = () => useState(() => 0)
