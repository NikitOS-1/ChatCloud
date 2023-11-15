import Form from "components/Form/Form";
import Slider from "components/Slider/Slider";
import {
  ContainerForm,
  ContainerHomePage,
  ContainerSlider,
} from "./styledComponentsHomePage";

const HomePage = () => {
  return (
    <ContainerHomePage>
      <ContainerSlider>
        <Slider />
      </ContainerSlider>
      <ContainerForm>
        <Form />
      </ContainerForm>
    </ContainerHomePage>
  );
};

export default HomePage;
