import React from 'react';
import html from "/html.png";
import css from "/css.jpg";
import java from "/java.png";
import javascript from "/javascript.png";
import oracle from "/oracle.png";
import spring from "/spring.png";
import springBoot from "/springBoot.jpg";

const Experience = () => {
    const cardItem = [
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:java,
            name:"Java"
        },
        {
            id:4,
            logo:javascript,
            name:"JavaScript"
        },
        {
            id:5,
            logo:oracle,
            name:"Oracle"
        },
        {
            id:6,
            logo:spring,
            name:"Spring"
        },
        {
            id:7,
            logo:springBoot,
            name:"Spring Boot"
        },
    ];
    return (
        <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <div>
                <h1 className="text-3xl font-bold mb-5">Experience</h1>
                <p>
                    I have more than 2 years of experience in below technologies.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div 
                                className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-105 duration-300" 
                                key={id}
                            >
                                <img 
                                    src={logo} 
                                    className="w-[150px] rounded-full" 
                                    alt=""
                                />
                                <div>
                                    <div className="">{name}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience
