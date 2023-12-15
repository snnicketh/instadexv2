import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={"/img/images/about_img01.png"} alt="" />
              <img
                src={"/img/images/about_img02.png"}
                alt=""
                className="img-two"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Learn about our protocol</span>
                <h2 className="title">
                  The World’s <span>1st Multichain</span> metadex aggregator
                </h2>
              </div>
              <p>
              InstaDEX utilizes smart contracts to tackle issues encountered daily by blockchain users. We aim to contribute to the core blockchain values of trust, decentralization and innovation while reducing costs to users while doing so. We are constantly working to become an indispensable part of the decentralized community.
              </p>
              <Link href="/" className="btn">
                Purchase Tokens
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
