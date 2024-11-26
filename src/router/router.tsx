import { About, Basket, Contact, Home, Shop } from "@/pages";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Layout } from "@/layout";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={<Basket />} />
      </Route>
    </Routes>
  );
};

const Routers = () => {
  return <AppRoutes />;
};

export default Routers;
