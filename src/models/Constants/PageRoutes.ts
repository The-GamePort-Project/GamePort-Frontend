export const pageRoutes = {
  dashboard: "/",
  error: "error",
  settings: "/settings",
  login: "auth/login",
  review: "/review",
  my_profile: "/users/me",
  genres: (id?: string) => `/games/genres/${id}`,
  games: (slug?: string) => `/games/${slug}`,
  new_review: (slug: string) => `/reviews/new-review/${slug}`,
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
  new_review: "new-review/:slug",
  review_slug: ":slug/review",
  review: "/review",
  my_profile: "/my-profile",
  users: "/users",
  auth: "/auth",
  id: ":id",
  genres: "genres/:name",
  genres_base: "genres",
};
