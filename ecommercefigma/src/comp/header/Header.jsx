import Carousel from "./navbar/Carousel";
import Headercat from "./headercat/Headercat";
import Navbar from "./navbar/Navbar";
import Search from "./navbar/Search";

const Header = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Headercat />
      <Carousel />
    </div>
  );
};
export default Header;
