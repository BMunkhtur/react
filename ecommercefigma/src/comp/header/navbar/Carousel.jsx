const Carousel = () => {
  return (
    <div className="container  relative">
      <div className="row oneblock">
        <div className="col">
          <div className="block">
            <h1 className="">Canon camera</h1>
          </div>
          <button className="carbutton ">shop now</button>
          <button className="carbuttontwo">View more</button>
          <div className="col">
            <button className="jijigone"></button>
            <button className="jijig"></button>
            <button className="jijig"></button>
          </div>
        </div>
        <div className="col-4">
          <img src="./zurag/camer.png" alt="" />
          <button className="booronhii ">
            <p>Only $89</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
