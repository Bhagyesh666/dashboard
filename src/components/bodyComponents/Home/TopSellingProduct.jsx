import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
export default function TopSellingProduct() {
  const products = [
    { slno: 1, pname: "test", pe: "test"},
    {
      slno: 2,
      pname: "test",
      pe: "test",
      
    },
    { slno: 3, pname: "test", pe: "test"},
    { slno: 4, pname: "test", pe: "test"},
    { slno: 5, pname: "test", pe: "test"},
  ];
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
      <Typography variant="h8" fontWeight={"bold"} sx={{ mx: 3 }}>
        PROSPECTIVE BUSINESS ENGAGEMENT(sample data)
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bolder" }}>SL No</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Project Name</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Prospective Engagement</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, id) => {
              return (
                <TableRow key={id}>
                  <TableCell>{product.slno}</TableCell>
                  <TableCell>{product.pname}</TableCell>
                  <TableCell>{product.pe}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
