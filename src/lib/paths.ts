export const withBase = (p = '/') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${p.startsWith('/') ? p : `/${p}`}`;
