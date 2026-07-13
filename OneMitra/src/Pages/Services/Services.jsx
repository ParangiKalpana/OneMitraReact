// Services.jsx starter
// Replace your existing file and continue with additional sections.
import { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import {
  CodeBracketIcon,PaintBrushIcon,MegaphoneIcon,MagnifyingGlassIcon,
  BriefcaseIcon,CpuChipIcon,ArrowRightIcon,CheckCircleIcon,
  ChevronDownIcon,ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// (See chat for full arrays and remaining sections.)
export default function Services(){
  const [openIndex,setOpenIndex]=useState(0);
  return <div className="p-10 text-center">
    <h1 className="text-4xl font-bold">Services.jsx Starter</h1>
    <p>Use the code parts from chat to complete this file.</p>
  </div>
}
