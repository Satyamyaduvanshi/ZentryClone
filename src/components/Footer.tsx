import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaX } from "react-icons/fa6"

const links = [
    {
        href:'https://github.com/Satyamyaduvanshi',
        icon: <FaGithub/>
    },
    {
        href:'https://x.com/ysatyaa',
        icon: <FaX/>
    },
    {
        href:'https://www.linkedin.com/in/satyam-yadav-868375203/',
        icon: <FaLinkedin/>
    }

]


const Footer = ()=>{

    return (
        <footer className=" w-screen bg-violet-300 py-4 text-back ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {links.map((link,index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
    )
}

export default Footer