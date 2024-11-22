import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-6 my-8">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-semibold">
          No.1 Job Hunt Website...
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p>
          Find your dream job effortlessly with personalized matches and
          advanced search tools!
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto bg-white">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full py-2 bg-transparent text-gray-700"
          />
          <Button className="rounded-r-full bg-[#6A38C2]">
            <Search className="h-5 w-5"/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
