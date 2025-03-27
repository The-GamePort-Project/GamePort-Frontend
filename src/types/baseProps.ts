export interface IBaseButtonProps {
    label: string;
    route?: string | null;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}