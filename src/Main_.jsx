import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";

const Main_ = () => {
  return (
    <>
      <Header />
      <div className="min-h-[100vh]">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default Main_;
