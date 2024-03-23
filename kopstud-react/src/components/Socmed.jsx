import React from "react";

class Socmed extends React.Component {
    render() {
        const socmedItem = [
            {
                title: 'Instagram',
                icon: '<img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCI+CiAgICA8cGF0aCBkPSJNIDkuOTk4MDQ2OSAzIEMgNi4xMzkwNDY5IDMgMyA2LjE0MTk1MzEgMyAxMC4wMDE5NTMgTCAzIDIwLjAwMTk1MyBDIDMgMjMuODYwOTUzIDYuMTQxOTUzMSAyNyAxMC4wMDE5NTMgMjcgTCAyMC4wMDE5NTMgMjcgQyAyMy44NjA5NTMgMjcgMjcgMjMuODU4MDQ3IDI3IDE5Ljk5ODA0NyBMIDI3IDkuOTk4MDQ2OSBDIDI3IDYuMTM5MDQ2OSAyMy44NTgwNDcgMyAxOS45OTgwNDcgMyBMIDkuOTk4MDQ2OSAzIHogTSAyMiA3IEMgMjIuNTUyIDcgMjMgNy40NDggMjMgOCBDIDIzIDguNTUyIDIyLjU1MiA5IDIyIDkgQyAyMS40NDggOSAyMSA4LjU1MiAyMSA4IEMgMjEgNy40NDggMjEuNDQ4IDcgMjIgNyB6IE0gMTUgOSBDIDE4LjMwOSA5IDIxIDExLjY5MSAyMSAxNSBDIDIxIDE4LjMwOSAxOC4zMDkgMjEgMTUgMjEgQyAxMS42OTEgMjEgOSAxOC4zMDkgOSAxNSBDIDkgMTEuNjkxIDExLjY5MSA5IDE1IDkgeiBNIDE1IDExIEEgNCA0IDAgMCAwIDExIDE1IEEgNCA0IDAgMCAwIDE1IDE5IEEgNCA0IDAgMCAwIDE5IDE1IEEgNCA0IDAgMCAwIDE1IDExIHoiPjwvcGF0aD4KPC9zdmc+"/>',
                idsocmed: '@Kopistudio20',
                link: 'https://instagram.com'
            },
            {
                title: 'Facebook',
                icon: '',
                idsocmed: 'Kopi Studio 20',
                link: ''
            },
            {
                title: 'Twitter',
                icon: '',
                idsocmed: '@kopistudio20',
                link: ''
            },
            {
                title: 'Email',
                icon: '',
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
                            <img src={item.icon} alt={item.title} className="w-[200px]"/>
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