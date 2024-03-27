"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight } from "react-icons/pi";
import { Lora } from "next/font/google";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const tabs = [
  {
    icon: <TbSwitch3 className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "Visualize, filter & sort any way you want",
    subheading:
      "Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that is most helpful to you.",
    images: [
      { title: "Board", picture: "/assets/ZombieingDoodle.svg" },
      { title: "Table", picture: "/assets/SprintingDoodle.svg" },
      { title: "Goal", picture: "/assets/UnboxingDoodle.svg" },
      { title: "AI", picture: "/assets/RollingDoodle.svg" },
      { title: "Note", picture: "/assets/DogJumpDoodle.svg" },
      { title: "List", picture: "/assets/RunningDoodle.svg" },
    ],
    description: "Choose from a variety of colors",
  },
  {
    icon: <PiEyeLight className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "Customize the info you track",
    subheading:
      "Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.",

    image: "/assets/DumpingDoodle.svg",
  },
  {
    icon: <PiPaletteLight className="text-3xl mr-2 text-sky-600 rounded-md" />,
    header: "Choose from a variety of colors",
    subheading:
      "Everything is customizable. Choose your own colors, icons, and more to make Bird work for you.",
    image: "/assets/CoffeeDoddle.svg",
  },
];

type Tab = {
  icon: JSX.Element;
  header: string;
  subheading: string;
  images?: { title: string; picture: string }[];
  description?: string;
  image?: string;
};


const FourthSection = () => {
    return (
        <div>this is fourth section</div>
    )
}

export default FourthSection