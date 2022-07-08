
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from '@mui/icons-material/Group';

export const customer = [
    {
        id: 1,
        path: "/dashboard",
        name: "Dashboard",
        icon: <DashboardIcon />,
      },
      {
        id: 2,
        path: "/cart",
        name: "Cart",
        icon: <ShoppingCartIcon />,
      },
      {
        id: 3,
        path: "/myorders",
        name: "Orders",
        icon: <WorkIcon />,
      },
]
export const admin =[
    {
        id: 1,
        path: "/admindashboard",
        name: "Dashboard",
        icon: <DashboardIcon />,
      },
      {
        id: 2,
        path: "/adminuserlist",
        name: "Users",
        icon: <GroupIcon/>,
      },
    //   {
    //     id: 3,
    //     path: "/myorders",
    //     name: "Orders",
    //     icon: <WorkIcon />,
    //   },
]