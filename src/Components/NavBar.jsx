import React from "react";
import {navLinks} from "../constats/index";

function NavBar() {
  return (
    <header className=" bg-black">
      <nav className="p-4 flex justify-between items-center w-[90%] mx-auto">
        <img src="/logo.svg" alt="logo" />

        <ul className=" flex gap-5 text-amber-50  ">
            {
           navLinks.map((item, idx) => (
              <li key={idx}>{item.label}</li>
               
            ))
            }
        </ul>
        
        <div className="flex items-center gap-3">
            <button>
                <img src="/search.svg" alt="search"/>

            </button>
            <button>
               <img src="/cart.svg" alt="card"  />
            </button>

        </div>
      </nav>
    </header>
  )        
}

export default NavBar;
