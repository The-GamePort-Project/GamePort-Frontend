export const pageRoutes = {
  dashboard: "/",
  error: "error",
  settings: "/settings",

  review: "/review",
  my_profile: "/users/me",
  games: (slug?: string) => `/games/${slug}`,
  new_review: (slug: string) => `/games/${slug}/review`,
  users: (username?: string) => `/users/${username}`,
  auth: (type?: "login" | "register") => `/auth/${type}`,
};

//ROUTER PATHS
export const routerPaths = {
  dashboard: "/",
  login: "login",
  error: "error",
  profile: "/profile/:slug",
  settings: "/settings",
  register: "register",
  slug: ":slug",
  review_slug: ":slug/review",
  review: "/review",
  my_profile: "/my-profile",
  users: "/users",
  auth: "/auth",
};
