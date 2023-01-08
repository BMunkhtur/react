import Carousel from "./navbar/Carousel";
import Headercat from "./headercat/Headercat";
import Navbar from "./navbar/Navbar";
import Search from "./navbar/Search";
import Carouselthree from "./navbar/Carouselthree";
import Carouseltwo from "./navbar/Carouseltwo";
import Carbuttonone from "./navbar/Carouselone";

const Header = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Headercat />
      <Carousel />
      <Carouseltwo />
      <Carbuttonone />
      <Carouselthree />
    </div>
  );
};
export default Header;
