import "./App.css";
import BrandsContainer from "./components/BrandsContainer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SectionCoffeeWorld from "./components/SectionCoffeeWorld";
import SectionTopHome from "./components/SectionTopHome";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <SectionTopHome></SectionTopHome>
      <SectionCoffeeWorld></SectionCoffeeWorld>
      <BrandsContainer></BrandsContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
