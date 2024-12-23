import { Nav } from "../nav";
import { Logo } from "../logo";
import './Header.scss';
import { useState, useEffect } from 'react';
import IconButton from "@mui/material/IconButton";
import { ShoppingCart } from '@mui/icons-material';
import { TextField } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { MobileNav } from "../mobile-nav";
import { navLinks } from "@/data/HeaderData";

const logoPath = {
  png: './images/logo.png'
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isScrolled ? 'header--transparent' : ''}`}>
      <div className="header__container-header">
        <div className="header__left">
          <Logo src={logoPath.png} />
          <Nav navLinks={navLinks}/>
        </div>

        <div className="header__right">
        <TextField
          sx={{
            maxWidth: '245px',
            width: '100%',
            height: '35px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '18px',
              height: '35px',
              background: '#fff',
            },
            '& .MuiInputAdornment-root': {
              color: 'gray',
            },
          }}
          placeholder="Search..."
          variant="outlined"
        />

        <div className="header__right-icons">
        <IconButton>
          <ShoppingCart />
        </IconButton>
        <div className="header__right-burger">
        <IconButton
          edge='start'
          color='inherit'
          aria-labelledby='open-mobile-menu'
          aria-label='open mobile menu'
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        </div>
       
        </div>
        </div>
        
      </div>
      <MobileNav 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
  
};

export default Header;
