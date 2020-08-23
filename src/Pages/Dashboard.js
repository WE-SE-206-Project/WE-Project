import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

const columns = [
  {
    id: 'firstName',
    label: 'First Name',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'lastName',
    label: 'Last Name',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'reason',
    label: 'Reason',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'schedule_at',
    label: 'Scheduled At',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'orgName',
    label: 'Organization Name',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toFixed(2),
  },
];



const useStyles = makeStyles((theme) => ({
  body: {
    paddingRight: '20px',
    paddingLeft: '20px',
  },
  head: {
    marginTop: theme.spacing(15)
  },
  root: {
    width: '100%',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  container: {
    maxHeight: '380px',
  },
}));

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const appointments = useSelector(state => state.dashboard.appointments);

  const auth = useSelector(state => state.auth);
  const [role, setRole] = useState(auth.company.id ? "org" : "user");
  const [rows, setRows] = useState([]);
  const company = useSelector(state => state.auth.company);
  const companies = useSelector(state => state.dashboard.companies);

  const findName = () => {
    // console.log({ companies, id: Number(id) })
    // let newArr = appointments.map(a => {
    //   return { ...a, orgName: companies.filter(c => c.id === Number(a.id))[0].name }
    // })
    let newArr;
    if (role === 'org') {
      newArr = appointments.map(a => {
        return { ...a, orgName: company.name }
      });
    }
    else if (role === 'user') {
      newArr = appointments.map(a => {
        return { ...a, orgName: companies.filter(c => c.id === Number(a.orgId))[0].name }
      });
    }
    setRows(newArr);
  }

  useEffect(() => {
    findName();
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.body}>
      <Typography variant="h3" className={classes.head}>Dashboard</Typography>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}