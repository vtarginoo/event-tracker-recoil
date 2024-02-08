import React, { ReactNode } from "react";
import style from "./Card.module.scss";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={style.Card}>{children}</div>;
};

export default Card;
