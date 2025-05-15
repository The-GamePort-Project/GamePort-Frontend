import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../models/Constants/PageRoutes";

export const useNavigator = () => {
  const navigate = useNavigate();
  return {
    goToGame: (slug: string) => navigate(pageRoutes.games(slug)),
    goToLogin: () => navigate(pageRoutes.auth("login")),
    goHome: () => navigate("/"),
    goBack: () => navigate(-1),
    goToGenre: (genre: string) => navigate(pageRoutes.genres(genre)),
    goToReview: (slug: string) => navigate(pageRoutes.new_review(slug)),
  };
};
