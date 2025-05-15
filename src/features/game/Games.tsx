import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
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
import { useDebounce } from "../../hooks/useDebounce";
import GameSearchResultsBox from "./components/gameSearchResultsBox/gameSearchResultsBox";
const Games = () => {
  const { slug, name } = useParams();

  const showOutlet = !!name || !!slug || (!!name && !!slug);
  const [searchTerm, setSearchTerm] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const { loading, error, genres } = useGetGenres();
  const {
    searchGames,
    searchData,
    loading: loadingSearch,
    error: loadingError,
  } = useSearchGames();
  const {
    loading: gamesLoading,
    error: gamesError,
    data: gamesData,
  } = useGetAllGames();
  const { goToGenre } = useNavigator();

  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      searchGames({ variables: { data: { searchTerm: debouncedSearchTerm } } });
    }
  }, [debouncedSearchTerm, searchGames, searchData]);

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

  return (
    <>
      <PageLayoutContainer variant="dark">
        <div className="w-full">
          <SmallForm>
            <div className="w-[30%] relative">
              <Input
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                onBlur={() => setTimeout(() => setIsInputFocused(false), 150)}
                onFocus={() => {
                  console.log("focused");
                  setIsInputFocused(true);
                }}
              />

              {isInputFocused && searchData?.length > 0 && (
                <GameSearchResultsBox
                  searchResults={searchData}
                  loading={!!loadingSearch}
                  error={!!loadingError}
                />
              )}
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
