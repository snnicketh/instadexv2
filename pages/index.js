import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import Roadmap from "@/components/Roadmap/Roadmap";
import Sales from "@/components/Sales/Sales";
import TopPartners from "@/components/TopPartners/TopPartners";
import WhitePaper from "@/components/WhitePaper/WhitePaper";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "@/layouts/LayoutOne";
import Faq from "@/components/Faq/Faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>InstaDEX Protocol | NEXT GEN DEX TRADEING</title>
        <meta name="description" content="" />
      </Head>

      <LayoutOne>
        <main className="fix">
          <Banner />
          <WhoWeAre />

          <TopPartners />
          <WhyChooseUs />
          <Sales />

          <div className="area-bg">
            <Roadmap />
            <WhitePaper />
            <Faq />
          </div>
        </main>
      </LayoutOne>
    </>
  );
}
