import React from "react";

const TopPartners = () => {
  const partners_list = [
    { src: "/img/partner/psalms.png", title: "" },
    { src: "/img/partner/aimails.png", title: "" },
  ];

  return (
    <div className="partner-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">As seen on</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                  <li key="">
                    <img src="/img/partner/dexvie.png" alt="" />
                  </li>
                  <li key="coinscope">
                    <a href="https://www.coinscope.co/coin/idex">
                    <img src="/img/partner/coinscope.png"alt="" />
                    </a>
                  </li>
                  <li key="">
                    <img src="/img/partner/cyberscope.png" alt="" />
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Built on</span>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                  <li key="">
                    <img src="/img/partner/arbitrum.svg" alt="" />
                  </li>
                  <li key="coinscope">
                    <img src="/img/partner/optimism.svg"alt="" />
                  </li>
                  <li key="">
                    <img src="/img/partner/ethereum.png" alt="" />
                  </li>
                  <li key="">
                    <img src="/img/partner/polygon.svg" alt="" />
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">powered by</span>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                  <li key="">
                    <img src="/img/partner/chainlink.svg" alt="" />
                  </li>
                  <li key="coinscope">
                    <img src="/img/partner/uniswap.svg"alt="" />
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Offical partners</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                {partners_list.map((item, index) => (
                  <li key={index}>
                    <img src={item.src} alt={item.title} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default TopPartners;
