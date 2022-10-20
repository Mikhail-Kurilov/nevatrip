import React, { ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import "./Button.scss";


export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<IButtonProps> = ({ className, onClick, ...rest }) => {
  return (
    <button 
      className="Button"
      onClick={onClick}
      {...rest}
    ></button>
  )
}