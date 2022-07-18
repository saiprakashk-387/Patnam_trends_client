import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Strong from "@mui/material/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteModel from '../Utils/DeleteModel';
import ViewModelSlide from '../Utils/ViewModel';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function UserList() {
  const navigate = useNavigate();
  const [openDeleteModel, setOpenDeleteModel] = React.useState(false);
  const [openViewModel, setOpenViewModel] = React.useState(false);
  const handleCloseDeleteModel = () => {
    setOpenDeleteModel(false);
  };
  const userDelete = () => {
    setOpenDeleteModel(true);
  };
  const userView = () => {
    setOpenViewModel(true);
  };
const handleCloseViewModel = () => {
    setOpenViewModel(false);
};

const userEdit = (url, ids )=> {
  let val = ids?.rows
  navigate(url, { state: val });
};
  return (    
    <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",marginBottom:"4rem"}}>
    <Strong>Users</Strong>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Location</TableCell>
            <TableCell >Number</TableCell>
            <TableCell >Photo</TableCell>
            <TableCell >Status</TableCell>
            <TableCell >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" s>
                {row.name}
              </TableCell>
              <TableCell >{row.calories}</TableCell>
              <TableCell >{row.fat}</TableCell>
              <TableCell >{row.carbs}</TableCell>
              <TableCell >{row.protein}</TableCell>
              <TableCell >{''}</TableCell>
              <TableCell >
                <Button onClick={userView} > <VisibilityIcon/></Button>
                <Button  disabled
                onClick={e => {
                  userEdit('/adminuseredit', { rows });
              }}
                >
                  <EditIcon/></Button>
                <Button onClick={userDelete}><DeleteIcon/></Button>
              </TableCell>
            </TableRow>         
          ))}
        </TableBody>    
      </Table>      
    </TableContainer>
    <ViewModelSlide open={openViewModel} handleClose={handleCloseViewModel} />
    <DeleteModel open={openDeleteModel} handleClose={handleCloseDeleteModel} />
    </div>

  );
}
