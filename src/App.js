import Area from "./components/area";
import Banner from "./components/banner";
import Blog from "./components/blog";
import Brand from "./components/brand";
import Company from "./components/company";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Service from "./components/service";
import Supplier from "./components/supplier";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <Service />
      <Company />
      <Brand />
      <Blog />
      <Area />
      <Footer />
    </>
  );
}

export default App;
