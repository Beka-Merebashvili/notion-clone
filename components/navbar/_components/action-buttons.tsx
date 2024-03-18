"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { X, AlignJustify } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div className="pr-2">
      <div className=" items-center justify-center flex ">
        <div className="flex xl:space-x-4">
          <Link
            href={"/contact-sales"}
            className="
            lg:flex
            items-center
            hidden"
          >
            <div className="">Request a demo</div>
          </Link>
          <div
            className="font-thin     
        lg:flex
            items-center
            hidden"
          >
            |
          </div>
        </div>

        <div className="flex lg:space-x-4 items-center pr-4">
          <Link href={"/free"}>
            <Button
              variant={"outline"}
              className="
            lg:flex
            items-center
            hidden
                border-none 
                text-md
                
                "
            >
              Log in
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button className="hidden lg:block">Get Bird free</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
