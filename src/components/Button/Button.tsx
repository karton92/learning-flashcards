import React from "react";
import "./Button.scss";

type ListButtonProps = {
  title: string;
  setCardType: React.Dispatch<React.SetStateAction<string>>;
};

const Button = ({ title, setCardType }: ListButtonProps) => {
  return (
    <button
      onClick={() => {
        setCardType(title);
      }}
    >
      {title}
    </button>
  );
};

export default Button;
