import React from "react";
import FaqItem from "./FaqItem";

const Faq = () => {
  const faq_items = [
    {
      id: "headingOne",
      controls: "collapseOne",
      expanded: true,
      btnClass: "",
      contentClass: "show",
      title: "What are $IDEX tokenomics?",
      details: `Initially 100M IDEX tokens were in existence. Liquidity has been deployed to the Uniswap protocol (original Uniswap LP token will be burned), to Arbitrum, Optimism and Polygon to provide layer 2 liquidity. 20M (20%) is added on Gnosis, a multi-signature wallet.Initially 100M IDEX tokens were in existence. Liquidity will be deployed to the Uniswap protocol (original Uniswap LP token will be burned), to Arbitrum, Optimism and Polygon to provide layer 2 liquidity. 20M (20%) is added on Gnosis, a multi-signature wallet.`,
    },
    {
      id: "headingTwo",
      controls: "collapseTwo",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Is $IDEX token a utility token?",
      details: `Yes! $IDEX is a utility token as it is used to pay the fee for all InstaDEX limit orders and end-to-end usage of gasless mode (optional feature, coming very soon).
      You can also use our swap aggregator, for this you only need to hold ETH in your wallet to cover gasfees. Again use normal or pro-mode to fill out your swap and click swap. Your swap is executed in a heartbeat!`,
    },
    {
      id: "headingThree",
      controls: "collapseThree",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "How do I use InstaDEX?",
      details: `Connect your wallet. Depending on whether you wish to use the swap or the limit order feature, you will need $ETH and $IDEX in your wallet. The interface is just as straightforward as using Uniswap for example, but with our limit order feature. Use normal or pro-mode to set your limit order and click trade. When the market conditions match your order, InstaDEX will execute the trade automatically.`,
    },
    {
      id: "headingFour",
      controls: "collapseFour",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Why and how much $IDEX do I have to pay a fee for limit orders?",
      details: `The fee is dependent on the current gas fee. The maximum fee is calculated as follows: base fee * gas fee * protocol fee. As you can see, we don’t take the amount that is being traded into consideration. This offers you the opportunity to trade at a very interesting, fixed price. Fixed, as in not depending on your amount traded. We refer to our docs for more details on the exact calculation.`,
    },
    {
      id: "headingFive",
      controls: "collapseFive",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Is the $IDEX token code audited?",
      details: `No! IDEX token is a non-mintable ERC 20 token and will be audited by OpenZeppelin, MythX and Cyberscope.`,
    },
    {
      id: "headingFive",
      controls: "collapseFive",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Do I have to own $IDEX tokens to use InstaDEX?",
      details: `Yes and no :) If you wish to use only the swap aggregator, you don’t need to own $IDEX. However, if you wish to use our limit order feature, you will need $IDEX to cover the service fee..`,
    },
    {
      id: "headingFive",
      controls: "collapseFive",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Why do I have to pay a fee for limit orders?",
      details: `InstaDEX requires a fee to cover the cost of the trade processor (ChainLink Keepers). When a trade is processed $IDEX is deducted from the protocol user’s balance on the dapp and sent to the trade processor to cover the gas cost. Hence, the $IDEX tokens are circulating: DEX Liquidity Pool -> User -> InstaDEX Protocol -> DEX Liquidity Pool.`,
    },
    {
      id: "headingFive",
      controls: "collapseFive",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Is InstaDEX code open-source?",
      details: `Yes! InstaDEX entire codebase is open-sourced and published on Github under the MIT and GPL-3.0 license. Anybody can see how it was developed, built and who are the code contributors. Developers are encouraged to submit a PR if they are willing to contribute.`,
    },
  ];

  return (
    <section id="faq" className="faq-area">
      <div className="container custom-container-four">
        <div className="faq-shape-wrap">
          <img src={"/img/images/faq_shape01.png"} alt="" className="img-one" />
          <img
            src={"/img/images/faq_shape02.png"}
            alt=""
            className="img-two rotateme"
          />
          <img
            src={"/img/images/faq_shape03.png"}
            alt=""
            className="img-three"
          />
        </div>

        <div className="row color: #fffff">
          <div className="col-lg-12 color: #fffff">
            <div className="section-title section-title-two text-center mb-60 color: #fffff">
            </div>

            <div className="faq-wrap wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion" id="accordionExample">
                {faq_items.map((x, index) => (
                  <FaqItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
