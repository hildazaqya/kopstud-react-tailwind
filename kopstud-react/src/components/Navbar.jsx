import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar flex flex-row bg-darkbrown justify-between p-[20px]">
                    <h1 className="navbar-logo cursor-pointer text-xl tracking-wide text-[#e0c097] font-bold text-[26px] ml-[50px]">Kopi Studio 20</h1>
                    <input id="menu-toggle" type="checkbox" className="hidden"/>
                    <label className="menu-button-container" htmlFor="menu-toggle">
                        <div className="menu-button"></div>
                    </label>
                    <ul className="flex flex-row text-sm text-[#ffff] mr-[50px] list-none items-center gap-5 cursor-pointer tracking-wider">
                        <li className="px-[10px]"><a href="">Home</a></li>
                        <li className="px-[10px]"><a href="">About</a></li>
                        <li className="px-[10px]"><a href="">Menu</a></li>
                        <li className="px-[10px]"><a href="">Benefit</a></li>
                        <li className="px-[10px]"><a href="">Contact</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;