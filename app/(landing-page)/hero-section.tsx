"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef , useState} from "react";
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
    return ( <div>this is hero</div> );
}
 
export default HeroSection;