import Image from "next/image";
import Header from "./components/Header";
import Analytics from "./components/Analytics";
import About from "./components/About";
import OurService from "./components/OurService";
import Portfolio from "./components/Portfolio";
import { TabContent1 } from "./components/TabContent";
import { TAB_BUTTON } from "./utils/Const";
import HowIWork from "./components/HowIWork";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";

export default function Home() {
  const tabs = [
    { label: "Tab 1", content: <TabContent1 /> },
    { label: "Tab 2", content: <p>Content for Tab 2</p> },
    { label: "Tab 3", content: <p>Content for Tab 3</p> },
  ];
  return (
    <>
      <Header />
      <Analytics />
      <About />
      <OurService />
      <Portfolio tabs={TAB_BUTTON} />
      <HowIWork />
      <Faq />
      <GetInTouch />
      <Footer />
    </>
  );
}
