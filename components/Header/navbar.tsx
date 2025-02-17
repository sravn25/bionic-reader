"use client";

import React from "react";
import BionicText from "../BionicText/BionicText";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Files, Home } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const isPdfPage = pathname === "/pdf";

  return (
    <nav className="flex justify-center md:justify-between px-6 py-4 bg-slate-200">
      <h1 className="text-4xl">
        <BionicText text="Bionic Reader" />
      </h1>
      <div>
        <Button asChild variant="ghost" className="border border-black">
          <Link href={isPdfPage ? "/" : "/pdf"}>
            {isPdfPage ? <Home /> : <Files />}
            <span>{isPdfPage ? "Home" : "PDF"}</span>
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
