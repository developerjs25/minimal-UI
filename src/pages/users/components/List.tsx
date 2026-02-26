import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  TablePagination,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { invoices, getStatusStyle } from "./Contant";

const List: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRows = invoices.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Grid sx={{ maxWidth: 900 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent sx={{ p: 0 }}>
          <Typography variant="h6" fontWeight={600} p={3}>
            New Invoices
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#F4F6F8" }}>
                  <TableCell sx={{ fontWeight: 600 }}>
                   Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>
                    Phone number
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>
                   Company
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>
                   Role
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>
                    Status
                  </TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedRows.map((invoice) => (
                  <TableRow
                    key={invoice.name}
                    hover
                    sx={{
                      "&:hover": {
                        backgroundColor: "#f9fafb",
                      },
                    }}
                  >
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.number}</TableCell>
                    <TableCell>{invoice.company}</TableCell>
                    <TableCell>{invoice.role}</TableCell>
                    <TableCell>
                      <Chip
                        label={invoice.status}
                        size="small"
                        sx={{
                          borderRadius: 1,
                          fontWeight: 600,
                          ...getStatusStyle(invoice.status),
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small">
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={invoices.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default List;