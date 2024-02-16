import React from "react";
import { Box } from "@mui/material";
import ApexCharts from "react-apexcharts";

export default function SalesByCity() {
  const donutOption = {
    labels: ["Thane", "Palghar", "Kalyan", "Boisar"],
    legend: {
      position: "right",
      fontSize: "14",

      customLegendItems: [
        "Thane <b>30.3%</b>",
        "Palghar <b>37.9%</b>",
        "Kalyan <b>9.0%</b>",
        "Boisar <b>22.8%</b>",
      ],
    },
    title: {
      text: "Sales By City",
    },
  };
  const donutSeries = [44, 55, 13, 33];

  return (
    <Box
      sx={{
        margin: 3,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "100%",
      }}
    >
      <ApexCharts
        options={donutOption}
        series={donutSeries}
        type="pie"
        width="100%"
      />
    </Box>
  );
}
