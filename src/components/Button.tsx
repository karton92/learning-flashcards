import React from "react";
import "./Button.scss";
import { ListButtonProps } from "../types/types";

const Button = ({ id, title, setCardType }: ListButtonProps) => {
  return (
    <button
      key={id}
      onClick={() => {
        setCardType(id);
      }}
    >
      {title}
    </button>
  );
};

export default Button;
