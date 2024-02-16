import { Box } from "@mui/material";
import React from "react";
import ApexCharts from "react-apexcharts";

export default function TotalSales() {
  const options = {
    title: {
      text: "Total Sales",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    subtitle: {
      text: "Sales over time",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    markers: {
      size: 4,
      strokeWidth: 2,
      hover: {
        size: 9,
      },
    },
    theme: {
      mode: "light",
    },
    chart: {
      height: 328,
      type: "line",
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 0.2,
      },
      
    },
    xaxis: {
      categories: ["Mon", "Thu", "Wed", "The", "Fri", "Sat", "Sun"],
    },
  };
  const series = [
    {
      name: "series-2",
      data: [1500, 1900, 1800, 2900, 2600, 3200, 2200],
    },
  ];
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
        options={options}
        series={series}
        height={300}
        type="line"
        width="100%"
      />
    </Box>
  );
}
