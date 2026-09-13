import NavLogo from "../assets/logo-text.png"
const NavBar = () => {
    return (
        <nav className="container mx-auto px-6 py-3 bg-gray-50 sticky top-0">
            <div className="flex justify-between items-center">
                <div><img src={NavLogo} alt="" /></div>
                <ul className="flex gap-7 text-gray-700">
                    <li className="hover:text-pink-600 cursor-pointer">Home</li>
                    <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
                    <li className="hover:text-pink-600 cursor-pointer">Projects</li>
                    <li className="hover:text-pink-600 cursor-pointer">About</li>
                    <li className="hover:text-pink-600 cursor-pointer">Contact</li>
                </ul>
                <div className="flex gap-4">
                    <button className="btn rounded-3xl hover:bg-pink-600 hover:text-white">Sign In</button>
                    <button className="btn rounded-3xl bg-pink-600 text-white hover:bg-pink-700">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

