import Form from "components/Form/Form";
import Slider from "components/Slider/Slider";
import "./style.scss";

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
