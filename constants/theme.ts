export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

export const TRANSITIONS = {
  default: 'transition-all duration-300',
  slow: 'transition-all duration-500',
  fast: 'transition-all duration-150',
} as const;

export const COLORS = {
  primary: 'orange-500',
  secondary: 'blue-600',
  accent: 'purple-500',
} as const;

export const SIZES = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  navHeight: 'h-16',
} as const;