import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { navLinks } from '@/data/HeaderData';
import { NavLink } from "react-router-dom";
import Typography from '@mui/material/Typography';
import './MobileNav.scss';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const MobileNav = ({ onClose, isOpen }: Props) => {
  return (
    <AppBar>
      <Drawer
        sx={{
          width: 250,
          '& .MuiDrawer-paper': { width: 250 },
        }}
        anchor="right"
        open={isOpen}
        onClose={onClose}
      >
        <div className='mobile-nav'>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Divider />
          <div>
            <ul>
              {navLinks.map((link) => (
                <Typography key={link.path}>
                  <li>
                    <NavLink to={link.path}>{link.name}</NavLink>
                  </li>
                </Typography>
              ))}
            </ul>
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default MobileNav;
