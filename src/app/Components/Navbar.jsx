import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="Logo">
        <Image src="/Images/logo.png" alt="" height={30} width={30} />
      </div>
      <div>
        <h6>Home</h6>
        <h6>Categories</h6>
        <h6>Cart</h6>
        <h6>Contact</h6>
      </div>
      <div>
        <Search className="h-8 w-8 " />
      </div>
    </div>
  );
};

export default Navbar;
