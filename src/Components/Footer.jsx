import React from "react";
import Navbar from "./Navbar";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4 text-xs list-none">
          <Navbar  />
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-8">
            <a
              href="https://www.facebook.com/wubcs"
              target="_blank"
              className="bg-white p-1 rounded-md"
            >
              <FaFacebook className="text-blue-600 text-3xl" />
            </a>
            <a
              // href={linkedin}
              target="_blank"
              className="bg-white p-1 rounded-md"
            >
              {" "}
              <FaLinkedin className="text-blue-600 text-3xl" />
            </a>
            <a
              href={`mailto:wubcs2022@gmail.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-1 rounded-md"
            >
              <img
                className="h-7 w-7"
                src="https://i.ibb.co/4dM2Kkj/png-transparent-mail-google-gmail-google-s-logo-icon-thumbnail.png"
                alt="Email Icon"
              />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by WUB
            Computer Society
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
