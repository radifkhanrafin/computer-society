import { FaArrowRightToBracket } from "react-icons/fa6";
import ActiveLink from "./ActiveLink";
const Navbar = () => {
  return (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/mission">Our Mission</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/team">Committee </ActiveLink>
      </li>
      <li>
        <ActiveLink to="/success">Our Success</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/join_us">Join Us</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/alumni">Alumni</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact">Contact Us</ActiveLink>
      </li>
      {/* <li>
        <ActiveLink to="/login">
          {" "}
          <span className="flex justify-center items-center gap-2">
            {" "}
            Admin Login <FaArrowRightToBracket />{" "}
          </span>{" "}
        </ActiveLink>
      </li> */}
    </>
  );
};

export default Navbar;
