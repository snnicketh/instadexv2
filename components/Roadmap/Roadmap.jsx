import { useHorizontalScroll } from "@/lib/hooks/useHorizontalScroll";
import React from "react";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Q4 2023",
      title: "Phase 1",
      info: [
        "Launching InstaDEX.Finance website",
        "Launching the InstaDEX protocol on Ethereum Mainnet (audit completion)",
      ],
    },
    {
      roadmapTitle: "Q1 2024",
      title: "Phase 2",
      info: [
        "Launching the InstaDEX protocol on Arbitrum Layer2 network.",
        "Launching the InstaDEX protocol on the Polygon network.",
      ],
    },

    {
      roadmapTitle: "Mid of Q1 2024",
      title: "Phase 2",
      info: [
        "Enabling Gasless limit trading feature.",
        "Liquidity farming rewards for IDEX liquidity providers on Celer bridge.",
      ],
    },

    {
      roadmapTitle: "Q2 2024",
      title: "Phase 3",
      info: [
        "Liquidity farming rewards for IDEX liquidity providers on Uniswap on all networks.",
      ],
    },
    {
      roadmapTitle: "Mid of Q2 2024",
      title: "Phase 3",
      info: [
        "CEX listing.",
        "InstaDEX v2 (new features, modern UI, hybrid DEX).",
      ],
    },
    {
      roadmapTitle: "Q3 2024",
      title: "Phase 4",
      info: [
        "InstaDEX DAO governance launch",
        "Create IDEX/OP liquidity pool.",
        "Liquidity mining program for IDEX/OP",
      ],
    },
    {
      roadmapTitle: "Q4 2024 & Q1 2025",
      title: "Phase 5",
      info: [
        "Launch referral program on Optimism.",
        "Gas refund program on Optimism.",
      ],
    },
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">OUr Roadmap</span>
              <h2 className="title">
                InstaDEX Strategy and <br /> Project <span>Build Plan</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
