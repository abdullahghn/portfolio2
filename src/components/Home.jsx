import React from 'react';
import pic from "../../public/photo.avif";
import { FaSquareFacebook, FaNodeJs } from "react-icons/fa6";
import { FaLinkedin, FaTelegram, FaReact } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div className="flex flex-col md:flex-row">
                    {/* Left Side */}
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <span className="text-xl">Welcome To My Page</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1>Hello, I'm a</h1>
                            {/* <span className="text-red-700 font-bold">Developer</span> */}
                            <ReactTyped
                                className="text-red-700 font-bold"
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className="text-sm md:text-md text-justify">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Nihil possimus tempora mollitia, deleniti blanditiis, 
                            ipsam odio quo, tenetur tempore illo est laudantium. Similique, 
                            officia fuga distinctio, minima cum omnis magni molestiae quia 
                            dolores corrupti quis, asperiores veritatis aut illum assumenda.
                        </p>

                        <br />

                        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                            {/* Social Media Icons */}
                            <div className="space-y-2">
                                <h1 className="font-bold">Available On</h1>
                                <ul className="flex space-x-5">
                                    <li>
                                        <a href="https://facebook.com" target="_blank">
                                            <FaSquareFacebook className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com" target="_blank">
                                            <FaLinkedin className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://youtube.com" target="_blank">
                                            <IoLogoYoutube className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://telegram.org" target="_blank">
                                            <FaTelegram className="text-2xl cursor-pointer" />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Skill Icons */}
                            <div className="space-y-2">
                                <h1 className="font-bold">Currently Working On</h1>
                                <div className="flex space-x-5">
                                    <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                                    <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                                    <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                                    <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                        <img 
                            src={pic} 
                            className="rounded-full md:w-[450px] md:h-[450px]" 
                            alt=""
                        />
                    </div>
                </div>
            </div>
            
            <hr/>
        </>
    )
}

export default Home
