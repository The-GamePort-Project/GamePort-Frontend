import { Outlet } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "../../components/loadingSpinner";
import { useGetGenres, useGetAllGames, useSearchGames } from "./hooks/useGames";
import {
  VerticalSidebar,
  PageLayoutContainer,
  NavigationButton,
  FlexResponsiveContainer,
} from "../../components";
import { useNavigator } from "../../hooks/useNavigator";
import { useParams } from "react-router-dom";
import GameCard from "./components/gameCard/gameCard";
import { IGame } from "./models/interfaces";
import Input from "../../components/inputs/Input/input";
import SmallForm from "../../components/formLayouts/SmallForm/SmallForm";
const Games = () => {
  const { slug, name } = useParams();

  const showOutlet = !!name || !!slug || (!!name && !!slug);
  const { loading, error, genres } = useGetGenres();
  const [searchTerm, setSearchTerm] = useState("");
  const {
    searchGames,
    loading: searchLoading,
    data: searchData,
    error: searchError,
  } = useSearchGames();
  const {
    loading: gamesLoading,
    error: gamesError,
    data: gamesData,
  } = useGetAllGames();
  const { goToGenre } = useNavigator();
  if (loading || gamesLoading) {
    return (
      <LoadingSpinner
        loading={loading}
        error={false}
        loadingMessage="Getting games ready..."
      />
    );
  }
  if (error || gamesError) {
    return <div>error</div>;
  }

  const handleSearch = () => {
    if (searchTerm.trim()) {
      searchGames({
        variables: { data: { searchTerm } },
      });
    }
  };

  return (
    <>
      <PageLayoutContainer variant="dark">
        <div className="w-full">
          <SmallForm>
            <div className="w-[30%]">
              <Input
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>
          </SmallForm>
          {showOutlet ? (
            <Outlet />
          ) : (
            <FlexResponsiveContainer>
              {gamesData.games.map((game: IGame) => {
                return <GameCard key={game.id} game={game} />;
              })}
            </FlexResponsiveContainer>
          )}
        </div>
        <VerticalSidebar>
          {genres.map((genre: { name: string; id: string }, index: number) => (
            <NavigationButton
              key={index}
              label={genre.name}
              onClick={() => {
                goToGenre(genre.name);
              }}
              noUnderLine
            />
          ))}
        </VerticalSidebar>
      </PageLayoutContainer>
    </>
  );
};
export default Games;
