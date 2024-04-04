import React from "react";
import { FaInstagram } from "react-icons/fa";

class Socmed extends React.Component {
    render() {
        const socmedItem = [
            {
                title: 'Instagram',
                icon: '<FaInstagram />',
                idsocmed: '@Kopistudio20',
                link: 'https://instagram.com'
            },
            {
                title: 'Facebook',
                idsocmed: 'Kopi Studio 20',
                link: ''
            },
            {
                title: 'Twitter',
                idsocmed: '@kopistudio20',
                link: ''
            },
            {
                title: 'Email',
                idsocmed: 'kopistudio20@gmail.com',
                link: ''
            },
        ]
        return (
            <section className="flex flex-col items-center justify-center">
                <div className="w-full text-center bg-[#797160] py-[20px]">
                    <p className="text-white">Get Up and Close Personal</p>
                    <h1 className="flex flex-col items-center text-center tracking-wide text-4xl font-bold text-[#2d2424] ">
                        CONTACT US
                        <div className="bg-white w-[250px] h-[3px] flex items-center justify-center"></div>
                    </h1>
                </div>
                <div className="grid mt-[40px] grid-cols-4 justify-center">
                    {socmedItem.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center mb-[20px] tracking-wide cursor-pointer max-w-[280px] h-[250px] overflow-hidden p-[35px] border-r-3 border-[#797160]">
                            <FaInstagram />
                            <h3 className="mt-[20px] text-2xl font-bold">{item.title}</h3>
                            <p className="text-sm text-chocobrown"><a href={item.link}>{item.idsocmed}</a></p>
                        </div>
                    ))
                    }
                </div>
            </section>
        )
    }
}

export default Socmed;