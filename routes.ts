/**
 * An array of public routes that do not require authentication.
 * These routes are accessible to all users.
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes that require authentication.
 * These routes are only accessible to authenticated users.
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
