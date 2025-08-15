import React from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

export default function CardPreview({cardData}) {
  return (
    <section className="relative flex flex-col h-200  items-center gap-8 w-95 bg-gradient-to-tl from-purple-950 via-purple-700 to-purple-500 p-50 pl-0">
      {/* front card */}
      <FrontCard
        cardNumber={cardData.cardNumber}
        cardHolderName={cardData.cardHolderName}
        expMonth={cardData.expMonth}
        expYear={cardData.expYear}
      />

      {/* back card */}
      <BackCard cvc={cardData.cvc} />
    </section>
  );
}
