import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFCC55",
    color: "#26404E",
    fontSize: 12,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  nameOfTheEstablishment: string,
  address: string,
  category: string,
  assessment: string,
  status: number
) {
  return { nameOfTheEstablishment, address, category, assessment, status };
}

const rows = [
  createData(
    "Delícias da Terra",
    "Rua das Flores, 123 - Centro, Cidade A",
    "Restaurante",
    "Aberto",
    4.5
  ),
  createData(
    "Moda Elegante",
    "Avenida Principal, 456 - Bairro Novo, Cidade B",
    "Loja de Roupas",
    "Aberto",
    4.2
  ),
  createData(
    "Café Aroma",
    "Praça Central, 789 - Centro, Cidade C",
    "Cafeteria",
    "Fechado",
    4.7
  ),
];

export function DataTable() {
  return (
    <TableContainer component={Paper} sx={{ marginLeft: 3 }}>
      <Table sx={{ width: 1210 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome do Estabelecimento</StyledTableCell>
            <StyledTableCell align="right">Endereço</StyledTableCell>
            <StyledTableCell align="right">Categoria</StyledTableCell>
            <StyledTableCell align="right">Avaliação</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.nameOfTheEstablishment}>
              <StyledTableCell component="th" scope="row">
                {row.nameOfTheEstablishment}
              </StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.assessment}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
