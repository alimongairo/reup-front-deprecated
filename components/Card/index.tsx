import React, { useState } from "react";
import { ICard } from "@/components/Card/models";

interface CardProps {
  cardProducts: ICard
}

export function Card ( {cardProducts}: CardProps) {
  return (
    <div className="card__container">
      <img src={cardProducts.image} alt={cardProducts.title} />
      <p>{cardProducts.title}</p>
      <span>{cardProducts.price}</span>
    </div>
  )
}

