import React from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import aboutImage from "@/assets/pic3.png";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
}));

const AboutUs = () => {
  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h3" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus nunc vitae lectus faucibus
              malesuada. Ut posuere dui vel scelerisque condimentum.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent={{ xs: "center", md: "flex-end" }}>
            <Image src={aboutImage} alt="About Us" width={500}  />
          </Box>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default AboutUs;