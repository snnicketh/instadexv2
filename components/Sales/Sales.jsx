import React from "react";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";

const Token = () => {
  const chart_info_list = [
    "Seed: 5%",
    "Private: 5%",
    "Strategic: 6",
    "Public (IDO): 3%",
    "Liquidity: 35%",
    "Treasury: 6%",
    "Ecosystem Fund: 10%",
    "Bounty and Events: 2%",
    "Marketing: 10%",
    "Team: 11%",
    "Advisors: 2%",
    "Community Rewards: 5%",
  ];

  return (
    <section id="sales" className="chart-area chart-bg ">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="chart-wrap wow fadeInRight" data-wow-delay=".2s">
                <img src={"/img/images/chart.png"} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <SalesTabButton
                    title="Funding Allocation"
                    className="active"
                    id="funding-tab"
                    target="#funding"
                    ariaControls="funding"
                    ariaSelected={true}
                  />

                  <SalesTabButton
                    title="Listing Allocation"
                    className=""
                    id="token-tab"
                    target="#token"
                    ariaControls="token"
                    ariaSelected={false}
                  />
                </ul>

                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title="1 USDT = 45 $IDEX"
                    description=" $IDEX is the utility and governance token of the InstaDEX protocol. It is a non-mintable ERC20 token deployed on Ethereum with a fixed total supply of 100 million tokens. The tokenomic model of $IDEX is deflationary by design since the tokens will  be burnt.$IDEX is the utility and governance token of the InstaDEX protocol. It is a non-mintable ERC20 token deployed on Ethereum with a fixed total supply of 100 million tokens. The tokenomic model of $IDEX is deflationary by design since the tokens will be burnt."
                    link="/"
                  />

                  <SalesTabContent
                    className={""}
                    id="token"
                    ariaLabel="token-tab"
                    title="1 USDT = 10 $IDEX"
                    description=" $IDEXis the token that pays the service fee to unlock the limit order feature of InstaDEX protocol. This means that by using IDEX tokens, you not only get access to cost efficient limit orders on the DEX, but you will also get LP fees on every trade thanks to the innovative approach to providing liquidity."
                    link="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
