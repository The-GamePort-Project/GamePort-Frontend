import NavigationButton from "../../../components/buttons/navigationButton/navigationButton";
import { useNavigate } from "react-router-dom";

interface Item {
  label: string;
  link: string;
  disabled?: boolean;
}
interface HeaderMenuOptionProps {
  item: Item;
  onClickDisabled?: () => void;
  needsAuth?: boolean;
  hideWhenLoggedIn?: boolean;
  disabled?: boolean;
  isLoggedIn?: boolean;
  logout?: () => void;
}

export default function HeaderMenuOption(props: HeaderMenuOptionProps) {
  const navigate = useNavigate();
  if (props.item.disabled) {
    return (
      <NavigationButton
        label={props.item.label}
        onClick={props.onClickDisabled}
      />
    );
  }
  return (
    <NavigationButton
      label={props.item.label}
      onClick={() => navigate(props.item.link)}
    />
  );
}
