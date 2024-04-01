import React from "react";

class Socmed extends React.Component {
    render() {
        const socmedItem = [
            {
                title: 'Instagram',
                icon: 'M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z',
                idsocmed: '@Kopistudio20',
                link: 'https://instagram.com'
            },
            {
                title: 'Facebook',
                icon: 'M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z',
                idsocmed: 'Kopi Studio 20',
                link: ''
            },
            {
                title: 'Twitter',
                icon: 'M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z',
                idsocmed: '@kopistudio20',
                link: ''
            },
            {
                title: 'Email',
                icon: ' M12,23.403v-0.013v-13.001l-0.12,-0.089h-0.01l-2.73,-2.02c-1.67,-1.24 -4.05,-1.18 -5.53,0.28c-0.99,0.98 -1.61,2.34 -1.61,3.85v3.602zM38,23.39v0.013l10,-7.391v-3.602c0,-1.49 -0.6,-2.85 -1.58,-3.83c-1.46,-1.457 -3.765,-1.628 -5.424,-0.403l-2.876,2.123l-0.12,0.089zM14,24.868l10.406,7.692c0.353,0.261 0.836,0.261 1.189,0l10.405,-7.692v-13.001l-11,8.133l-11,-8.133zM38,25.889v15.111c0,0.552 0.448,1 1,1h6.5c1.381,0 2.5,-1.119 2.5,-2.5v-21.003zM12,25.889l-10,-7.392v21.003c0,1.381 1.119,2.5 2.5,2.5h6.5c0.552,0 1,-0.448 1,-1z',
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
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 256 256">
                                <g fill="#2d2424" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                    <g transform="scale(5.12,5.12)">
                                        <path d={item.icon}></path>
                                    </g>
                                </g>
                            </svg>
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