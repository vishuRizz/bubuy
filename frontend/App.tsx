import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Layout from "./Layout";
import TopNavBar from "./components/TopNavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";
import WhyGlobuy from "./components/WhyGlobuy";
import BusinessStrategy from "./components/BusinessStrategy";

function App() {
  const { connected } = useWallet();

  return (
    <Layout>
      <TopNavBar />
      <HeroSection />
      <WhyGlobuy />
      <BusinessStrategy />
      <FaqSection />
      <Footer />
    </Layout>
  );
}

export default App;
