import React from "react";
import BionicText from "../BionicText/BionicText";

const Navbar = () => {
  return (
    <nav className="flex justify-center md:justify-between pl-6 py-4 bg-slate-200">
      <h1 className="text-4xl">
        <BionicText text="Bionic Reader" />
      </h1>
    </nav>
  );
};

export default Navbar;
