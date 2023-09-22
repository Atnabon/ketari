import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import ScrollToTop from "react-scroll-to-top";
import {
  AiOutlineGooglePlus,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* ......scroll to top button..... */}
      <ScrollToTop
        smooth
        color="white"
        width="25px"
        height="25px"
        style={{
          backgroundColor: "tomato",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <div className="bg-[#F9FCFF] py-16">
        <div className="grid px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 container mx-auto text-base-100">
          {/* .......footer info start........ */}
          <div>
            <div>
              <div>
                <figure className="mb-4">
                  <img src="/ketari.png" alt="logo" className="shrink-0 w-44" />
                </figure>
                <p className="mb-5 text-neutral">
                  Contact us today to discover how our talent recruitment
                  solutions can benefit your company.
                </p>
              </div>
              <div className="flex justify-start items-center gap-1">
                <div className="bg-primary p-3 rounded-full cursor-pointer hover:bg-white border-primary border-2 hover:text-primary">
                  <GrFacebookOption />
                </div>
                <div className="bg-primary p-3 rounded-full cursor-pointer  hover:bg-white border-primary border-2 hover:text-primary">
                  <AiOutlineGooglePlus />
                </div>
                <div className="bg-primary p-3 rounded-full cursor-pointer  hover:bg-white border-primary border-2 hover:text-primary">
                  <AiOutlineTwitter />
                </div>
                <div className="bg-primary p-3 rounded-full cursor-pointer  hover:bg-white border-primary border-2 hover:text-primary">
                  <FiInstagram />
                </div>
              </div>
            </div>
          </div>
          {/* .......footer info end........ */}

          {/* .......footer Job Categories start........ */}
          <div>
            <h2 className="text-2xl font-bold text-primary">Job Categories</h2>
            <ul className="mt-5">
              <li className="flex justify-start items-center text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Web, Mobile, & Software Development</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Sales and Marketing</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Engineering and Architecture</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Accounting and Consulting</Link>
              </li>
            </ul>
          </div>
          {/* .......footer Job Categories end........ */}

          {/* .......footer Resources start........ */}
          <div>
            <h2 className="text-2xl font-bold text-primary">Resources</h2>
            <ul className="mt-5">
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">How it work</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Support</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Our Team</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">FAQ</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Privacy & policy</Link>
              </li>
            </ul>
          </div>
          {/* .......footer Resources end........ */}

          {/* .......footer quick link start........ */}
          <div>
            <h2 className="text-2xl font-bold text-primary">Quick Links</h2>
            <ul className="mt-5">
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="/home">Home</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="/about">About Us</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="/">Services</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* .......footer quick link end........ */}

          {/* .......footer contact us start........ */}
          <div>
            <h2 className="text-2xl font-bold mb-5 text-primary">Contact Us</h2>
            <div className="flex justify-start items-center gap-3 mb-3">
              <div className="text-white text-2xl bg-primary p-2 rounded">
                <MdLocationOn />
              </div>
              <div className="text-neutral">
                <h4>Addis Ababa, Ethiopia</h4>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 mb-3">
              <div className="text-2xl text-white bg-primary p-2 rounded">
                <BsFillTelephoneFill />
              </div>
              <div className="text-neutral">
                <h4>+251-999-99-99-99</h4>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 mb-3">
              <div className="text-white text-2xl bg-primary p-2 rounded">
                <AiOutlineMail />
              </div>
              <div className="text-neutral">
                <h4>help@example.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ......copyright section..... */}
      <div className="p-4 bg-[#fdb82c] text-base-100">
        <div className="flex justify-center items-center">
          <p className="text-xs">
            Copyright © 2023- All right reserved: team-eagle
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
