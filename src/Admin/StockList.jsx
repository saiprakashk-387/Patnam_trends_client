import React from 'react'
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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import DeleteModel from '../Utils/DeleteModel';
import ViewModelSlide from '../Utils/ViewModel';



function createData(name, calories, fat ) {
    return { name, calories, fat  };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  
  ];
const StockList = () => {
  const navigate = useNavigate();
    const [openDeleteModel, setOpenDeleteModel] = React.useState(false);
    const [openViewModel, setOpenViewModel] = React.useState(false);

    const handleCloseDeleteModel = () => {
      setOpenDeleteModel(false);
    };
    const stockDelete = () => {
      setOpenDeleteModel(true);
    };
    const stockView = () => {
        setOpenViewModel(true);
      };
 const handleCloseViewModel = () => {
        setOpenViewModel(false);
    };
    const stockEdit = (url, ids )=> {
       let val = ids?.row
      navigate(url, { state: val });
    };
  return (
    <div style={{marginBottom:"4rem" ,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}><Strong>Stock List</Strong>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Product Name</TableCell>
            <TableCell >Material Type</TableCell>
            <TableCell >Price</TableCell>
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
              <TableCell >
                <Button onClick={stockView} > <VisibilityIcon/></Button>
                <Button 
                 onClick={e => {
                  stockEdit('/stockedit', { row })}}
                ><EditIcon/></Button>
                <Button onClick={stockDelete} ><DeleteIcon/></Button>
              </TableCell>
            </TableRow>         
          ))}
        </TableBody>    
      </Table>      
    </TableContainer>
    <ViewModelSlide open={openViewModel} handleClose={handleCloseViewModel} value={"Stock"} />
    <DeleteModel open={openDeleteModel} handleClose={handleCloseDeleteModel} value={"stock"} />
    </div>
  )
}

export default StockList