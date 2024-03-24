"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

const tabs = [
  {
    icon: (
      <PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-md" />
    ),
    name: "AI",
    feature: "Now with Q&A",
    description: "Ask literally anything. Bird Will answer.",
    more: (
      <div className="text-purple-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    icon: (
      <PiBookOpenTextLight className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-md" />
    ),
    name: "Wikis",
    description: "Centralize your knowledge. Make it accessible.",
    more: (
      <div className="text-red-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },

  {
    icon: (
      <PiTargetLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-md" />
    ),
    name: "Projects",
    description: "Manage complex projects without the chaos",
    more: (
      <div className="text-blue-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: (
      <PiFileThin className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-md" />
    ),
    name: "Docs",
    description: "Simple, powerfulm beautiful. Next-gen notes & docs.",
    more: (
      <div className="text-yellow-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/RunningDoodle.svg",
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="md:items-center flex flex-col ">
      <div className="font-medium  2xl:w-1/3 md:w-2/3 xl:w-1/2 lg:px-0  px-8 text-5xl xl:text-6xl  flex justify-center xl:font-medium xl:pt-14 text-center  pt-6">
        Write, plan, share. With AI at your side.
      </div>
      <p className="text-2xl pt-4 text-center w-2/3 mx-auto">
        Bird is the connected workspace where better, faster work happens.
      </p>

      <div className="flex gap-4 pt-6 items-center justify-center">
          <Link href="/">
            <Button className="py-1 ">
              <div className="flex items-center justify-center">
                <div className="text-lg">Get bird free</div>
                <div>
                  <PiArrowRight className="ml-2 " />
                </div>
              </div>
            </Button>
          </Link>
        </div>

        <div className="pt-10 xl:pt-20 items-center justify-center">
          <Image
            src="/assets/ReadingSideDoodle.svg"
            alt="hero image"
            width={1000}
            height={1000}
            className="flex items-center justify-center mx-auto w-60 xl:w-80"
          />
        </div>
    </div>
  );
};

export default HeroSection;
