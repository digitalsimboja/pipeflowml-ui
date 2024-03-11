// Import React at the top of your file if not already done
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" text-white p-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">EXPLORE</h3>
          <p>Home</p>
          <p>Blog</p>
          <p>About Us</p>
          <p>AI Platform</p>
          <p>Contact Us</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">AI SERVICES</h3>
          <p>Custom AI Agents</p>
          <p>Chatbot Deployment</p>
          <p>Virtual Assistants</p>
          <p>API Documentation</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">RESOURCES</h3>
          <p>Knowledge Base</p>
          <p>Developer API</p>
          <p>Community Forum</p>
          <p>Legal</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">CONNECT WITH US</h3>
          <div className="flex items-center mb-2">
          <img
              src="/images/twitter.png"
              alt="Twitter Icon"
              className="w-9 h-7 mr-2"
            />
            {/* <img
              src="/images/facebook.png"
              alt="Facebook Icon"
              className="w-12 h-10 mr-2"
            />
            
            <img
              src="/images/instagram.jpeg"
              alt="Instagram Icon"
              className="w-12 h-10 mr-2"
            />
            <img
              src="/images/pinterest.png"
              alt="Pinterest Icon"
              className="w-8 h-8"
            /> */}
          </div>
          <p>Sign up to receive updates and exclusive offers</p>
          <Link href="/signup">
          <button className="py-2 px-4 rounded-full bg-green-200 text-black">
                Signup
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
