import {
  Box,
  Container,
  Grid,
  Paper
}

from "@mui/material";
import FlexBox from "components/FlexBox";
import Form from "components/Form/Form";
import Slider from "components/Slider/Slider";

const LoginPage=()=> {
  return (<FlexBox sx= {
        {
        backgroundColor: "white"
      }
    }

    > <Slider /> <Form /> </FlexBox>);
}

;
export default LoginPage;