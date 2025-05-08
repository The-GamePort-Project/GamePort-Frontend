import { Outlet } from "react-router-dom";
import LoadingSpinner from "../../components/loadingSpinner";
const Games = () => {
  return (
    <>
      <LoadingSpinner
        loading={false}
        error={false}
        loadingMessage="Getting games ready..."
      />
      <Outlet />
    </>
  );
};
export default Games;
