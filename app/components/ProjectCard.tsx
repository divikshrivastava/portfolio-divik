"use client";
import Link from "next/link";
import { GithubSVG, LinkSVG } from "./ui/icons";
import { ProjectType } from "../types";

export const ProjectCard = (project: ProjectType) => {
  const { description, title, imgUrl, githubUrl, websiteUrl } = project;

  return (
    <div className="w-full rounded-lg overflow-hidden border border-gray-300">
      {/* Image section with hover overlay */}
      <div className="relative w-full h-40 group">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="px-2 text-xs text-center">{description}</p>
          <div className="flex gap-1 mt-2">
            {websiteUrl !== "NONE" && (
              <Link
                href={websiteUrl}
                target="_blank"
                className="w-5 h-5 flex items-center justify-center border border-white rounded-full"
              >
                <LinkSVG />
              </Link>
            )}
            <Link
              href={githubUrl}
              target="_blank"
              className="w-5 h-5 flex items-center justify-center border border-white rounded-full"
            >
              <GithubSVG />
            </Link>
          </div>
        </div>
      </div>
      {/* Title below the image */}
      <div className="mt-1 text-center text-xs font-bold text-white bg-gray-800 p-1">
        {title}
      </div>
    </div>
  );
};
