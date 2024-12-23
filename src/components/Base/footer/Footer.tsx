import { Logo } from "../logo";
import './Footer.scss';
import { TextField, Button } from "@mui/material";
import { SocialMediaIcons } from "../media-icons";
import { Nav } from "../nav";
import { HelpLinks, ShopLinks } from "@/data/FooterData";

const logoPath = {
  png: './images/logo.png'
}

const cooperatePath = {
  png: './images/cooperate.png'
}

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container-footer">
      <div className="footer__content">
        <div className="footer__content-left footer-left">
          <Logo src={logoPath.png} />

          <p className="footer-left__text">
            Subscribe to email alerts. We promise not to spam your
            inbox.
          </p>

          <div className="footer-left__input">
          <TextField
          sx={{
            maxWidth: '273px',
            height: '38px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '5px',
              height: '38px',
              background: '#000',
              border: '1px solid #787878',
            },
              '& .MuiOutlinedInput-input': {
              color: '#787878',
              '&::placeholder': {
              color: '#787878',
              opacity: 1,
              },
            },
            '& .MuiInputAdornment-root': {
              color: 'gray',
            },
          }}
            placeholder="Email Address*"
            variant="outlined"
          />

            <Button
              variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#787878',
                    '&:hover': {
                      borderColor: '#fb2e86',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
              >
              SUBSCRIBE
            </Button>
          </div>

          <SocialMediaIcons />

        </div>
        <div className="footer__content-center footer-center">
          <h4 className="links-title">SHOP</h4>
          
          <div className="footer-nav">
            <Nav navLinks={ShopLinks}/>
          </div>
          
        </div>
        <div className="footer__content-right footer-right">
          <h4 className="links-title">HELP</h4>

        <div className="footer-nav">
          <Nav navLinks={HelpLinks}/>
        </div>        
          
        </div>
      </div>

      <div className="footer-left__cooperate">
        <img src={cooperatePath.png} alt="Cooperate" />
      </div>

      <p className="footer-copyright">
        © 2022 Imagine Marketing Private Limited. All Rights Reserved.
      </p>
    </div>
    </div>
    
  )
}

export default Footer;