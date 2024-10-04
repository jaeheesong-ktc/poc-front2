export interface ButtonProps {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
    backgroundColor: string;
    onClick?: () => void;
}
export declare const Button: ({ primary, size, label, backgroundColor, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
