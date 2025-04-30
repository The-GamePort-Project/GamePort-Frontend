import { Link } from "react-router-dom";
interface Item {
  label: string;
  link: string;
}

export default function HeaderMenuOption({ item }: { item: Item }) {
  return <Link to={item.link}>{item.label}</Link>;
}
