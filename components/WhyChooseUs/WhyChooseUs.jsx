import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: "/img/icon/choose_icon03.svg",
      alt: "",
      link: "/",
      title: "Protocol Token",
      description: "$IDEX is the utility and governance token of the InstaDEX protocol. It is a non-mintable ERC20 token deployed on Ethereum with a fixed total supply of 100 million tokens. The tokenomic model of $IDEX is deflationary by design since the tokens will  be burnt.",
    },
    {
      src: "/img/icon/choose_icon03.svg",
      alt: "",
      link: "/",
      title: <>Off-chain keepers at work</>,
      description: "The InstaDEX protocol utilizes the Chainlink Keepers to make sure orders are collected as soon as the price target of the limit order is reached. This service is provided off-chain, fully decentralized.",
    },
    {
      src: "/img/icon/choose_icon04.svg",
      alt: "",
      link: "/",
      title: "Secure audited smart contracts",
      description: "The dapp will be audited in multiple iterations in both internal and external testing environments. The external testing was performed by Cyberscope, Mythx and OpenZeppelin.",
    },
    {
      src: "/img/icon/choose_icon03.svg",
      alt: "",
      link: "/",
      title: <>High utility $IDEX token</>,
      description: "$IDEX is a utility token which is used for paying limit order fees and end-to-end usage of gasless mode (optional feature, coming very soon). For every limit order, the InstaDEX protocol user only pays a service fee in $IDEX, of the amount traded",
    },
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old == 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">why Choose us </span>
              <h2 className="title">
                Why choose our <span>$IDEX</span> Token
              </h2>
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        <div className="slide-progressbar">
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
        </div>

        {/* <div
          className="slide-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only"></span>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
