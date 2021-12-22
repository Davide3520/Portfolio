import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-4xl">
            Davide Lepri
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white text-2xl">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white text-2xl">
            Skills
          </a>
          <a className="mr-5 hover:text-white" href="https://www.linkedin.com/in/davide-lepri-03/"
          target="_blank"
          rel="noreferrer">
            <FaLinkedin className="w-9 h-12 ml-1" />
          </a>
          <a className="mr-5 hover:text-white" href="https://github.com/Davide3520"
          target="_blank"
          rel="noreferrer">
          <FaGithub className="w-9 h-12 ml-1"/>
          </a>
          <div className="flex justify-center">
          <a href="./Davide Lepri_Resume.pdf" className="inline-flex inherit bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 text-white rounded text-lg" download>
            My Resume
          </a>
          </div>
        </nav>
        <div className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
      </div>
      </div>
    </header>
  );
}
