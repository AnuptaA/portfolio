"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React, { useState } from "react";
import Image from "next/image";
import AboutContent from "./components/AboutContent";
import ProjectContent from "./components/ProjectContent";
import CourseworkContent from "./components/CourseworkContent";

// About -> 0
// Projects -> 1
// Coursework -> 2
// Experience (future) -> 3

type Page = 0 | 1 | 2;

export default function Home() {
  const [currPage, setCurrPage] = useState<Page>(0);

  const changePage = (page: Page): void => {
    setCurrPage(page);
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-center mt-6">
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mx-16">
        {/* Headshot - Appears first on small screens */}
        <div className="w-48 h-48 lg:w-80 lg:h-80 order-1 lg:order-2">
          <Image
            className="rounded-full border border-white border-4"
            src="website-photo-2.png"
            width={320}
            height={320}
            quality={100}
            alt="Headshot"
          />
        </div>

        {/* Name, Title, Contact */}
        <div className="flex flex-col justify-center items-center lg:items-start mx-6 order-2 lg:order-1 mt-2">
          <h1 className="text-6xl font-crimson font-semibold text-gray-800 text-center">
            Anupta Argo
          </h1>
          <h2 className="text-xl text-center">Junior Software Developer</h2>

          <div className="flex space-x-6 mt-4">
            <a
              href="mailto:anupta22@gmail.com"
              className="text-gray-600 hover:text-red-600 transition-colors duration-150"
            >
              <SiGmail size={30} />
            </a>
            <a
              href="https://github.com/anuptaa"
              target="_blank"
              className="text-gray-600 hover:text-black transition-colors duration-150"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/anupta-argo"
              target="_blank"
              className="text-gray-600 hover:text-blue-700 transition-colors duration-150"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-4/5 h-2 bg-blue-600 border border-white rounded-lg my-8"></div>

      {/* Navigation Tabs */}
      <div className="w-full px-4">
        <div className="flex flex-row justify-center mb-4 mx-2 space-x-4">
          <button
            onClick={() => changePage(0)}
            className={`text-2xl font-crimson font-semibold hover:text-blue-600 ${
              currPage === 0
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-800"
            } transition duration-300`}
          >
            About
          </button>
          <button
            onClick={() => changePage(1)}
            className={`text-2xl font-crimson font-semibold hover:text-blue-600 ${
              currPage === 1
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-800"
            } transition duration-300`}
          >
            Projects
          </button>
          <button
            onClick={() => changePage(2)}
            className={`text-2xl font-crimson font-semibold hover:text-blue-600 ${
              currPage === 2
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-800"
            } transition duration-300`}
          >
            Coursework
          </button>
        </div>

        {/* Dynamic Content Section */}
        <div className="w-4/5 max-w-4xl mx-auto px-4 mt-4 text-lg text-gray-700">
          {currPage === 0 && <AboutContent />}
          {currPage === 1 && <ProjectContent />}
          {currPage === 2 && <CourseworkContent />}
        </div>
      </div>
    </div>
  );
}
