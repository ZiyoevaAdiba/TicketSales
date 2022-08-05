import React from "react";
import "./BuyBtn.css";

interface BuyBtnProps {
  price: number;
}

export const BuyBtn = ({ price }: BuyBtnProps) => {
  const makeThousand = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  return (
    <button className="buy_btn">
      Купить <br />
      за {makeThousand(price)} ₽
    </button>
  );
};
