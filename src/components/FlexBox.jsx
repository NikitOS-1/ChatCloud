const { Box } = require("@mui/material");

const FlexBox = ({ children, ...props }) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);
export default FlexBox;
