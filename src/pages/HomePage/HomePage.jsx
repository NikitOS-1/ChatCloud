import Form from "components/Form/Form";
import Slider from "components/Slider/Slider";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="slider">
        <Slider />
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
};
export default HomePage;
