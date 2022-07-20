import  React ,{useEffect}from 'react';
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
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteModel from '../Utils/DeleteModel';
import ViewModelSlide from '../Utils/ViewModel';
import { getUserList } from '../API/Api';
import { userSelector } from '../redux/slice';

export default function UserList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector(userSelector);
  const [openDeleteModel, setOpenDeleteModel] = React.useState(false);
  const [openViewModel, setOpenViewModel] = React.useState(false);
  const [userDeleteID, setuserDeleteID] = React.useState()
  const [userViewData, setuserViewData] =React.useState()

  useEffect(() => {
    console.log("jhh");
    dispatch(getUserList())
  }, [])
  console.log("users",users ,userViewData);
  const handleCloseDeleteModel = () => {
    setOpenDeleteModel(false);
  };
  const userDelete = (val) => {
    setuserDeleteID(val)
    setOpenDeleteModel(true);
  };
  const userView = (val) => {
    setuserViewData(val)
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
            <TableCell >Number</TableCell>
            <TableCell >Status</TableCell>
            <TableCell >Role</TableCell>
            <TableCell >Photo</TableCell>
            <TableCell >Actions</TableCell>
          </TableRow>
        </TableHead>
        {users && 
         <TableBody>
         {users?.data?.map((row) => (
           <TableRow
             key={row.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" s>
               {row.firstname  +""+  row.lastname}
             </TableCell>
             <TableCell >{row.email}</TableCell>
             <TableCell >{row.mobile}</TableCell>
             {row.status === true ?<TableCell > True</TableCell> : <TableCell > False</TableCell>}
             <TableCell >{row.role}</TableCell>
             <TableCell ><img src={`${row.photoUrl}`} alt=""  style={{width:50,height:50}}/></TableCell>             
             <TableCell >
               <Button onClick={(e)=>{userView(row)}} > <VisibilityIcon/></Button>
               <Button  disabled
               onClick={e => {
                 userEdit('/adminuseredit', { row });
             }}
               >
                 <EditIcon/></Button>
               <Button onClick={(e)=>{userDelete(row)}}><DeleteIcon/></Button>
             </TableCell>
           </TableRow>         
         ))}
       </TableBody>  
        }
        
     
      </Table>      
    </TableContainer>
    <ViewModelSlide open={openViewModel} handleClose={handleCloseViewModel} userViewData={userViewData} />
    <DeleteModel open={openDeleteModel} handleClose={handleCloseDeleteModel} userDeleteID={userDeleteID} />
    </div>

  );
}
