
import { Link, NavLink } from 'react-router-dom';
import './index.css';
import Box from '@mui/material/Box';

const objLinks=[
  {
    routePath:"/",
    label:"Home"
  },
  {
    routePath:"/about",
    label:"AboutUs"
  },
  {
    routePath:"/services",
    label:"Services"
  },
  {
    routePath:"/contactus",
    label:"ContactUs"
  },
  {
    routePath:"/portfolio",
    label:"Portfolio"
  },
]
function Header() {
  return (
    <div className="Header">
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}>
      <nav>
        <ul>
          {objLinks.map((e)=><li>
            <NavLink to={e.routePath} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>
              {e.label}</NavLink>
          </li>)}  
        </ul>
      </nav>
     </Box>
    </div>
  );
}

export default Header;
