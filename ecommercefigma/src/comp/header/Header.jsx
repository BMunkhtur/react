import Carousel from "./navbar/Carousel";
import Headercat from "./headercat/Headercat";
import Navbar from "./navbar/Navbar";
import Search from "./navbar/Search";
// import Carouselone from "./navbar/Carouselone";
import Carouseltwo from "./navbar/Carouseltwo";

const Header = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Headercat />
      <Carousel />
      {/* <Carouselone /> */}
      <Carouseltwo />
    </div>
  );
};
export default Header;
