'use client'

import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {

  // simple arrow function to alert

  const handleClick = () => {
    alert('My teacher is Sir Ashrib😍😍')
  }
  return (
    <div className="f;lex flex justify-center items-center flex-col p-56 ">
      <h1 className="text-7xl font-bold m-8">Event Handling</h1>
      <p>Q:  Who is the teacher on Monday? Click the button to check."</p>
     {/* event Handle */}

      <Button variant={"destructive"} onClick={handleClick} className="border border-black m-8">Click Me</Button>
      </div> 
  );
}
