import { useState } from "react";
import NavLogo from "../assets/logo-text.png"
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] =useState(false);
    return (
        <nav className="w-full px-6 py-3 bg-gray-50 sticky top-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex justify-between items-center">
                <div><img className="w-32 md:w-36" src={NavLogo} alt="" /></div>
                <ul className="hidden md:flex gap-7 text-gray-700">
                    <li className="hover:text-pink-600 cursor-pointer">Home</li>
                    <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
                    <li className="hover:text-pink-600 cursor-pointer">Projects</li>
                    <li className="hover:text-pink-600 cursor-pointer">About</li>
                    <li className="hover:text-pink-600 cursor-pointer">Contact</li>
                </ul>
                <div className="hidden md:flex gap-4">
                    <button className="btn rounded-3xl hover:bg-pink-600 hover:text-white">Sign In</button>
                    <button className="btn rounded-3xl bg-pink-600 text-white hover:bg-pink-700">Sign Up</button>
                </div>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-2xl text-gray-700 md:hidden"
                    >
                {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}

                </button>
            </div>
{isMenuOpen && (
          <div className="mt-4 border-t border-gray-200 pt-4 md:hidden">

            <ul className="flex flex-col gap-4 text-gray-700">

              <li className="cursor-pointer hover:text-pink-600">
                Home
              </li>

              <li className="cursor-pointer hover:text-pink-600">
                Technologies
              </li>

              <li className="cursor-pointer hover:text-pink-600">
                Projects
              </li>

              <li className="cursor-pointer hover:text-pink-600">
                About
              </li>

              <li className="cursor-pointer hover:text-pink-600">
                Contact
              </li>

            </ul>


            {/* Mobile Buttons */}
            <div className="mt-5 flex gap-3">

              <button className="btn flex-1 rounded-3xl hover:bg-pink-600 hover:text-white">
                Sign In
              </button>

              <button className="btn flex-1 rounded-3xl bg-pink-600 text-white hover:bg-pink-700">
                Sign Up
              </button>

            </div>

          </div>
        )}

     
</div>

        </nav>
    );
};

export default NavBar;

