import { Avatar, Box, Button, MenuItem, TextField } from "@mui/material";
import { H1, Paragraph } from "../Typography";
import { Link } from "react-router-dom";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const Form = () => {
  const TextFieldStyle = {
    borderRadius: "10px",
    width: "495px",
    height: "55px",
    textTransform: "none",
    color: "inherit",
  };
  return (
    <Box>
      <div>
        <H1>let's create your account</H1>
        <Paragraph>
          Choose your username and photo to personalize your account
        </Paragraph>
      </div>
      <div>
        <Avatar alt="ava" />
        <Link>Change Photo</Link>
      </div>
      <Box>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          InputProps={{
            style: TextFieldStyle,
          }}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          InputProps={{
            style: TextFieldStyle,
          }}
          helperText="Please select your currency">
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Button variant="contained">Next</Button>
    </Box>
  );
};
export default Form;
