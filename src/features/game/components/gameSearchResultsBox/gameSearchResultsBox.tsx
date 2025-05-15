import { IGame } from "../../models/interfaces";
import styles from "./gameSearchResultsBox.module.scss";
import { useNavigator } from "../../../../hooks/useNavigator";
interface IGameSearchResultsBoxProps {
  searchResults: IGame[];
  loading: boolean;
  error: boolean;
}

const GameSearchResultsBox = ({
  searchResults,
  loading,
  error,
}: IGameSearchResultsBoxProps) => {
  const { goToGame } = useNavigator();
  return (
    <div className={`${styles.searchResultsBox} absolute z-50 w-full`}>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading search results</p>}
      {!loading && !error && searchResults.length === 0 && (
        <p>No results found</p>
      )}
      {!loading &&
        !error &&
        searchResults.map((game) => (
          <div
            key={game.id}
            className={styles.gameItem}
            onClick={() => goToGame(game.slug)}
          >
            <h3>{game.title}</h3>
          </div>
        ))}
    </div>
  );
};
export default GameSearchResultsBox;
