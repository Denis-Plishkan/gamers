import { Nav } from "../Nav";
import BaseIcon from "../BaseIcon";
import PictureComponent from "@/components/PictureComponent";

const picture = {
  webp: './images/content/data/1.webp',
  png: './images/content/data/1.png'
};

const Header = () => {
  return (
    <div>
      <Nav />
      <BaseIcon id="sign" />
      <PictureComponent 
        srcset={picture.webp} 
        src={picture.png} 
        alt="picture" 
      />
    </div>
  );
};

export default Header;
