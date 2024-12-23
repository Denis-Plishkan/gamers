import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton } from '@mui/material';

function SocialMediaIcons() {
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        aria-label="Twitter"
        sx={{
          color: '#1DA1F2',
          '&:hover': {
            color: '#0d95e8',
          },
        }}
        href="https://twitter.com"
        target="_blank"
      >
        <TwitterIcon />
      </IconButton>

      <IconButton
        aria-label="Facebook"
        sx={{
          color: '#1877F2',
          '&:hover': {
            color: '#1469c7',
          },
        }}
        href="https://facebook.com"
        target="_blank"
      >
        <FacebookIcon />
      </IconButton>

      <IconButton
        aria-label="YouTube"
        sx={{
          color: '#FF0000',
          '&:hover': {
            color: '#e60000',
          },
        }}
        href="https://youtube.com"
        target="_blank"
      >
        <YouTubeIcon />
      </IconButton>

      <IconButton
        aria-label="Instagram"
        sx={{
          color: '#E1306C',
          '&:hover': {
            color: '#c13584',
          },
        }}
        href="https://instagram.com"
        target="_blank"
      >
        <InstagramIcon />
      </IconButton>

      <IconButton
        aria-label="LinkedIn"
        sx={{
          color: '#0077B5',
          '&:hover': {
            color: '#005b8f',
          },
        }}
        href="https://linkedin.com"
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
}

export default SocialMediaIcons;
