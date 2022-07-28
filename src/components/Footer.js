import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="h-[50px] p-4 flex items-center justify-center text-white font-bold">
      <p>
        Copyrights &copy; all rights reserved{" "}
        <a
          className="text-red-700"
          href="https://github.com/a7mdmo74"
          target="_blank"
          rel="noopener noreferrer"
        >
          a7mdmo74
        </a>
      </p>
    </div>
  );
};

export default Footer;
