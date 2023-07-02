import React from "react";

const ProductCardsData = [
  {
    id: 1,
    title: "Websites",
    desc: "He adds certain special hidden recipes and making his websites look enticing.",
    customClass:
      "z-10 bg-violet shadow-violet -left-16 md:-left-14 lg:left-0 -top-[160px] md:-top-10 lg:top-0",
  },
  {
    id: 2,
    title: "Responsive",
    desc: "The art of creating some awesome Responsive smartphone applications.",
    customClass:
      "z-20 bg-pink shadow-pink -right-[70px] md:-right-5 lg:right-10 -top-[25px] md:top-[25%] lg:top-1/4 md:w-[65%] lg:w-64 xl:!h-[200px] xl:justify-center",
  },
  {
    id: 3,
    title: "UI/UX",
    desc: "He uses his outstanding engineering abilities to provide users an awesome interface and experience.",
    customClass:
      "z-30 bg-violet shadow-violet -left-16 md:-left-14 lg:left-0 -bottom-[165px] md:-bottom-[16%] lg:bottom-0",
  },
];

const ProductCards = () => {
  return (
    <div className="w-full h-full relative flex flex-col gap-2 font-poppins scale-75 md:scale-90 lg:scale-100">
      {ProductCardsData.map((card, i) => (
        <div
          key={i}
          className={`w-64 h-auto border flex flex-col gap-3 rounded-xl p-5 shadow-light-xl hover:shadow-light-3xl cursor-pointer hover:scale-110 transition-all duration-300 absolute ${card.customClass} xl:!w-[350px]`}
        >
          <p className="font-bold text-2xl underline">{card.title}</p>
          <p>{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
