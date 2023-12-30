import Image from "next/image";
import cfx from "cfx-api";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Chip,
  LinearProgress,
  Stack,
} from "@mui/material";
import pic1 from "@/assets/pic1.png";
import { useEffect, useState } from "react";
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import { get } from "http";
import axios from "axios";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

export default function Home() {
  const [currentTime, setCurrentTime] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [serverStatus, setServerStatus] = useState("");
  const [serverClients, setServerClients] = useState(0);
  async function getServerPlayers() {
    const server = await axios.get(
      "https://servers-frontend.fivem.net/api/servers/single/567mjd"
    );
    console.log("====================================");
    console.log(server);
    console.log("====================================");
    if (server.status != 200) {
      console.log("Server is offline");
      return;
    }
    console.log(
      `Server: ${server.data.Data.hostname} has ${server.data.Data.clients} players online`
    );
    setServerClients(server.data.Data.clients);
  }
  useEffect(() => {
    if (isMounted) {
      const interval = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    getServerPlayers();
  }, [isMounted]);

  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        spacing={10}
        justifyContent={"space-around"}
        margin={"0px"}
      >
        <Grid item>
          <Typography variant="h1" fontFamily={"fantasy"}>
            GTA 5
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            fontFamily={"fantasy"}
            color={"#EF3C42"}
          >
            ROLEPLAY
          </Typography>
          <Typography variant="h5" component="h2">
            Step into the ultimate immersive reality <br />
            And rewrite the history of GTA 5 Roleplay like never before!
          </Typography>
        </Grid>

        <Grid item>
          <Image src={pic1} alt="" />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ backgroundColor: "rgba(16, 19, 27, 0.4)", zIndex: "2" }}
        minHeight={"280px"}
        height={"fit-content"}
        marginTop={"-70px"}
        justifyContent={"space-evenly"}
      >
        <Stack
          direction={"column"}
          spacing={3}
          width={"380px"}
          height={"200px"}
          margin={1}
          bgcolor={"rgb(33,37,50,0.3)"}
          borderTop={"3px solid red"}
        >
          <Typography
            variant="h3"
            component="h2"
            fontFamily={"fantasy"}
            color={"#EF3C42"}
          >
            {currentTime}
          </Typography>
          <Typography variant="h5" component="h2">
            Server Overview <br />
            status: <Chip label="Online" color="success" />
          </Typography>
        </Stack>

        <Stack
          direction={"column"}
          spacing={3}
          width={"380px"}
          height={"200px"}
          margin={1}
          bgcolor={"rgb(33,37,50,0.3)"}
          borderTop={"3px solid cyan"}
        >
          <Typography
            variant="h3"
            component="h2"
            fontFamily={"fantasy"}
            color={"cyan"}
          >
            Discord
          </Typography>
          <Typography variant="h5" component="h2">
            Server Overview <br />
            Memebers: <Chip label="470" color="primary" />
          </Typography>
        </Stack>
        <Stack
          direction={"column"}
          spacing={3}
          width={"380px"}
          height={"200px"}
          margin={1}
          bgcolor={"rgb(33,37,50,0.3)"}
          borderTop={"3px solid orange"}
        >
          <Typography
            variant="h3"
            component="h2"
            fontFamily={"fantasy"}
            color={"orange"}
          >
            FIVE M
          </Typography>
          <Typography variant="h5" component="h2">
            Server Overview <br />
            Players:{" "}
            <Chip
              label={serverClients + " / 128"}
              color="success"
              size="large"
            />
          </Typography>
        </Stack>
      </Grid>
    </Box>
  );
}
