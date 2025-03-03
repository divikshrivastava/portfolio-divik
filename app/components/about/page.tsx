"use client";
import { useEffect } from "react";
import Image from "next/image";
import { ProjectList } from "@/app/utils";
import { ProjectType } from "@/app/types";
import { ProjectCard } from "../ProjectCard";
import { Avatar } from "@nextui-org/avatar";
// import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";

import { Education } from "../Education";
import { iconType, educationType } from "@/app/types";
import { educationList, techonologyIconList, whoAmIData } from "@/app/utils";
import aboutAnimation from "../../utils/aboutSectionAnimations";
import IconComponent from "../ui/IconComponent";

const { fullName, profession, whoAmI, quote } = whoAmIData;

export default function About() {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    if (mq.matches) {
      aboutAnimation.whoAmIAnimation();
      aboutAnimation.professionAnimation();
      aboutAnimation.quoteAnimation();
      aboutAnimation.techonologyIconListAnimation();
      aboutAnimation.verticalImageAnimation();
      aboutAnimation.educationContentAnimation();
    } else {
      aboutAnimation.mobileAnimation();
    }
  }, []);

  return (
    <div className="grid grid-rows-8 grid-cols-4 lg:grid-cols-5 gap-5">
      {/* <Card className="col-span-full lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-1">
        <CardBody className="flex-col items-center justify-center gap-2">
          <Avatar
            name="LM"
            src="https://res.cloudinary.com/dbzv9xfjp/image/upload/v1700603685/portfolio/avatar-profile_lb9hd9.jpg"
            className="w-24 h-24 text-large brightness-90"
          />
          <h1 className="text-4xl font-bold">{fullName}</h1>
        </CardBody>
      </Card> */}

      <Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-4 opacity-0 mobile-animation whoAmICard">
  <CardBody className="flex flex-col md:flex-row justify-between gap-8">
    {/* Left Section: Welcome Text & Social Handles */}
    <div className="flex flex-col">
      <div className="text-3xl font-bold">Welcome!</div>
      <div className="text-lg text-gray-400 mt-2">
  Hi, I'm <span className="text-white font-bold">Divik Shrivastava,</span> a homosapien, grad student and software developer, with a knack of developing curiously awesome projects!
</div>
      {/* Social Handles (with ~2 lines spacing using mt-6) */}
      <div className="flex items-center gap-4 mt-6">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/divikshrivastava" target="_blank" rel="noopener noreferrer">
        <div className="social-button">
    <button className="relative w-12 h-12 rounded-full group">
      <div
        className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full"
      >
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:fill-[#171543] fill-white duration-300"
            d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </button>
  </div>
        </a>
        {/* Github */}
        <a href="https://github.com/divikshrivastava" target="_blank" rel="noopener noreferrer">
          <button className="relative w-12 h-12 rounded-full group">
            <div className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
            <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full">
              <svg height="24" width="24" viewBox="0 0 16 16" fill="white">
                <path className="group-hover:fill-[#171543] duration-300" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
                  0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
                  1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
                  0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.68 7.68 0 012-.27c.68 0 
                  1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 
                  0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 
                  8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </div>
          </button>
        </a>
        {/* Twitter */}
        <a href="https://twitter.com/divik1" target="_blank" rel="noopener noreferrer">
        <div className="social-button">
    <button className="relative w-12 h-12 rounded-full group">
      <div
        className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full"
      >
        <svg
          fill="none"
          viewBox="0 0 22 22"
          height="22"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8115 9.3155L20.8253 0H18.9263L11.9679 8.08852L6.41015 0H0L8.40433 12.2313L0 22H1.89914L9.24745 13.4583L15.1168 22H21.5269L12.811 9.3155H12.8115ZM10.2103 12.339L9.35878 11.1211L2.58343 1.42964H5.5004L10.9682 9.25094L11.8197 10.4689L18.9272 20.6354H16.0102L10.2103 12.3395V12.339Z"
            className="group-hover:fill-[#171543] fill-white duration-300"
          ></path>
        </svg>
      </div>
    </button>
  </div>
        </a>
        {/* Medium */}
        <a href="https://medium.com/@divikshrivastava" target="_blank" rel="noopener noreferrer">
          <button className="relative w-12 h-12 rounded-full group">
            <div className="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
            <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full">
              <svg height="24" width="24" viewBox="0 0 24 24" fill="white">
                <path className="group-hover:fill-[#171543] duration-300" d="M30.955 16c0 3.951-0.661 7.166-1.483 7.166s-1.483-3.215-1.483-7.166 0.661-7.166 1.483-7.166 1.483 3.215 1.483 7.166zM27.167 16c0 4.412-1.882 8.001-4.212 8.001s-4.225-3.589-4.225-8.001 1.894-8.001 4.225-8.001 4.212 3.589 4.212 8.001zM17.919 16c-0.014 4.67-3.803 8.45-8.475 8.45-4.68 0-8.475-3.794-8.475-8.475s3.794-8.475 8.475-8.475c2.351 0 4.479 0.957 6.014 2.504l0.001 0.001c1.521 1.531 2.46 3.641 2.46 5.97 0 0.009 0 0.018-0 0.026v-0.001z"></path>
              </svg>
            </div>
          </button>
        </a>
      </div>
    </div>
    {/* Right Section: Virtual Card Component with Download CV */}
    
    <div className="relative duration-300 hover:-rotate-0 [transform:rotate3d(1,-1,1,60deg)] group border border-sky-900 border-4 overflow-hidden rounded-2xl h-52 w-96 p-5 flex flex-col">
  {/* Background Image with initial blur and clear on hover */}
  <div className="absolute inset-0">
    <img 
      src="https://res.cloudinary.com/dwi27ks8b/image/upload/v1740993123/IMG_8022_2_lizml3.png" 
      alt="Divik" 
      className="w-full h-full object-cover blur-lg transition-all duration-300 group-hover:blur-0"
    />
  </div>
  {/* Button positioned at bottom */}
  <div className="relative z-10 mt-auto w-full">
    <a href="/Divik_Resume.pdf" download="Divik_Resume.pdf" className="w-full">
      <button className="w-full duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex items-center justify-center gap-3 rounded-full">
        Download CV
        <svg xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-6 h-6 fill-current">
          <path fillRule="evenodd" d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" />
        </svg>
      </button>
    </a>
  </div>
</div>



  </CardBody>
</Card>


      {/* <Card className="col-span-full row-start-2 row-end-3 lg:row-start-2 lg:col-start-1 lg:col-span-1 bg-blue opacity-0 mobile-animation professionCard">
        <CardBody className="justify-center items-center">
          <h2 className="text-2xl lg:text-3xl font-bold  text-center">
            {profession}
          </h2>
        </CardBody>
      </Card> */}

      {/* <Card className="hidden lg:flex col-span-2 lg:row-start-3 lg:row-span-1 lg:col-start-3 lg:col-span-1 bg-blue opacity-0 mobile-animation quoteCard">
        <CardBody className="justify-center items-center lg:row-start-2 lg:cols-start-4">
          <div className="text-3xl font-bold text-center">
            &#34;{quote}&#34;
          </div>
        </CardBody>
      </Card> */}

      <Card className="col-span-full lg:row-start-2 lg:row-span-2 lg:col-start-1 lg:col-span-1 opacity-0 mobile-animation technologyIconList">
        <CardBody className="gap-4">
          <h2 className="text-3xl font-bold">
            Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center lg:justify-center gap-x-10 gap-y-6">
            {techonologyIconList.map(({ name, icon }: iconType) => (
              <Tooltip
                key={`technology-item-${name}`}
                content={name}
              >
                <IconComponent icon={icon} />
                {/* <Chip variant="flat">{name}</Chip> */}
              </Tooltip>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-3 opacity-0 mobile-animation technologyIconList">
  <CardBody className="flex flex-col gap-4">
    <h2 className="text-3xl mb-4 font-bold">Latest Projects</h2>

    <div className="flex gap-4">
      {ProjectList.slice(0, 3).map((project: ProjectType) => (
        <ProjectCard key={`project-item-${project.title}`} {...project} />
      ))}
    </div>
  </CardBody>
</Card>

      {/* vertical img */}
      {/* <div className="hidden lg:block lg:row-start-1 lg:row-span-2 lg:col-start-3  lg:h-[350px] rounded-xl relative opacity-0 mobile-animation verticalImage">
        <Image
          src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          priority={true}
          alt="profile image"
          fill
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      </div> */}

      <Card className="col-span-full lg:row-start-1 lg:row-span-2 lg:col-start-5 lg:col-span-1 opacity-0 mobile-animation educationContent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block icon icon-tabler icon-tabler-timeline absolute top-0 -right-7"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#232323"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          ></path>
          <path d="M4 16l6 -7l5 5l5 -6"></path>
          <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
        <CardBody className="gap-2 flex-wrap">
          <h2 className="text-3xl font-bold ">Experience</h2>

          <div className="flex flex-col lg:flex-col gap-2">
            {educationList.map((education: educationType) => (
              <Education
                key={`education-item-${education.career}`}
                career={education.career}
                years={education.years}
                description={education.description}
              />
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className="col-span-full lg:row-start-3 lg:row-span-1 lg:col-start-5 lg:col-span-1 bg-blue opacity-0 mobile-animation professionCard">
      <CardBody className="justify-center items-center">
  <div className="flex">
  <h2 className="text-xl lg:text-xl font-bold text-center">
    Life Updates&nbsp;
  </h2> <div className="w-3 h-3 mt-2 rounded-full bg-[#69ffa8] animate-customPulse" />
  </div>
  <div className="text-xs mt-2">
    <ul className="list-disc max-h-24 overflow-y-scroll" style={{ scrollbarGutter: "stable" }}>
    <li>
        <a
          href="https://www.sjsu.edu/svic/winners/2024-winners.php"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          • 3 Dec, Won Silicon Valley Innovation Challenge!🏆
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@divikshrivastava/revolutionizing-access-control-introducing-role-based-context-control-rbcc-for-llms-b8c2887e5021"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          • 27 Nov, Published an article on RBCC📝
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/siliconxhacks/p/C6mRJl5PJ8F/?img_index=1"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          • 5 Apr, Won SiliconXHacks Hackathon!🏆
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/spartupsjsu/p/C57PAhOxqff/?img_index=3"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          • 24 May, Won Pitch Jam!🏆
        </a>
      </li>
      {/* Additional items will trigger scrolling */}
      
      {/* More list items can be added as needed */}
    </ul>
  </div>
</CardBody>
      </Card>
    </div>
  );
}
