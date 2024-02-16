import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { Box } from "@mui/material";
export default function Channels() {

  const [channelData, setChannelData] = useState([]);
  useEffect(() => {
    setChannelData([
      {
        name: "RFQs",
        data: [14, 25, 21, 17, 12, 13],
      },
      {
        name: "ORDER RECEIVED",
        data: [13, 23, 20, 8, 13, 27],
      },
    ]);

    return () => {
      setChannelData([]);
    };
  }, []);

  let totalArray = [];
  const total = channelData.forEach((value) => {
    const data = value.data;
    if (totalArray.length === 0) totalArray = [...data];
    else {
      data.forEach((val, index) => (totalArray[index] += val));
    }
  });

  const options3 = {
    chart: {
      id: "basic-bar",
      type: "bar",
      stacked: true,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "right",
      horizontalAlign: "center",
      offsetY: 0,
    },
    title: {
      text: "RFQs VS ORDER RECEIVED(sample data)",
    },
    plotOptions: {
      bar: {
        columnWidth: "10%",
        horizontal: false,
      },
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
    },
  };
  return (
    <Box
      sx={{
        margin: 3,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "95%",
      }}
    >
      <ApexCharts
        options={options3}
        series={channelData}
        type="bar"
        width="100%"
        height="320"
      />
    </Box>
  );
}
