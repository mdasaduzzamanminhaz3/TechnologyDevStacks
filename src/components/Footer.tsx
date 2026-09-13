import BrandLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-6 py-10">

        <div className="grid grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
               <img src={BrandLogo} alt="" />
            </div>

            <p className="mt-3 text-gray-500 text-sm">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-4 flex gap-4 text-gray-700">
              <a href="#" className="hover:text-purple-600 hover:font-semibold">
                GitHub
              </a>
              <a href="#" className="hover:text-purple-600 hover:font-semibold">
                Twitter
              </a>
              <a href="#" className="hover:text-purple-600 hover:font-semibold">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold uppercase text-gray-800">
              Product
            </h3>

            <ul className="mt-3 space-y-2 text-gray-500">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase text-gray-800">
              Company
            </h3>

            <ul className="mt-3 space-y-2 text-gray-500">
              <li>
                <a href="#" className="hover:text-purple-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase text-gray-800">
              Legal
            </h3>

            <ul className="mt-3 space-y-2 text-gray-500">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-100 pt-5">
          <div className="flex justify-between gap-3 text-sm text-gray-400">
            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-5">
              <a href="#" className="hover:text-gray-600">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-600">
                Terms
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;