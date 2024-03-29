import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MovingIcon from "@mui/icons-material/Moving";
import SettingsIcon from "@mui/icons-material/Settings";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StackedChart from "./Charts/StackedChart";
import PieChart from "./Charts/PieChart";
import FooterCards from "./Cards/FooterCards";

export default function AdminDashboard() {
 
  return (
    <Box>
      <Box sx={{ display: "flex", columnGap: 5 ,width:"100%", justifyContent:"space-between"}}>
        <Card sx={{ display: "flex", backgroundColor: "#a8b18e3b" }}>
          <PeopleAltIcon sx={{ width: 50, height: 100, color: "#215b64" }} />
          <CardContent sx={{ backgroundColor: "#f3e7e700" }}>
            <Typography sx={{ fontSize: 20 }} color="#215b64" gutterBottom>
              <strong> Users</strong>
            </Typography>
            <Typography variant="body2">well meaning and kindly.</Typography>
          </CardContent>
        </Card>
        <Card sx={{ display: "flex", backgroundColor: "#84cbaa6b" }}>
          <MovingIcon sx={{ width: 50, height: 100, color: "burlywood" }} />
          <CardContent sx={{ backgroundColor: "#f3e7e700" }}>
            <Typography sx={{ fontSize: 20 }} color="burlywood" gutterBottom>
              <strong>Stock</strong>
            </Typography>
            <Typography variant="body2">well meaning and kindly.</Typography>
          </CardContent>
        </Card>
        <Card sx={{ display: "flex", backgroundColor: "#b8cde36b" }}>
          <CurrencyRupeeIcon
            sx={{ width: 50, height: 100, color: "rebeccapurple" }}
          />
          <CardContent sx={{ backgroundColor: "#f3e7e700" }}>
            <Typography
              sx={{ fontSize: 20 }}
              color="rebeccapurple"
              gutterBottom
            >
              <strong>Price Details</strong>
            </Typography>
            <Typography variant="body2">well meaning and kindly.</Typography>
          </CardContent>
        </Card>
        <Card sx={{ display: "flex", backgroundColor: "#d9cc8a6b" }}>
          <SettingsIcon sx={{ width: 50, height: 100, color: "green" }} />
          <CardContent sx={{ backgroundColor: "#f3e7e700" }}>
            <Typography sx={{ fontSize: 20 }} color="green" gutterBottom>
              <strong>Settings</strong>
            </Typography>
            <Typography variant="body2">well meaning and kindly.</Typography>
          </CardContent>
        </Card>
      </Box>{" "}
      <br />
      <Box sx={{ display: "flex" }}>
        {/* /////two charts */}
        <Box sx={{ width: "50%" }}>
          <StackedChart />
        </Box>
        <Box sx={{ width: "45%" }}>
          <PieChart />
        </Box>
      </Box>     
      <br />
      <FooterCards />
    </Box>
  );
}
