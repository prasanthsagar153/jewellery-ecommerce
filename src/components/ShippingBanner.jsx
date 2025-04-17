import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

function ShippingBanner() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm py-3 px-4 bg-[#CFB484] font-lato gap-2 text-center md:text-left">
      <div className="hidden md:flex justify-start space-x-4">
        <span className="text-[#1877F2] text-xl">
          <FaFacebook />
        </span>
        <span className="text-[#E1306C] text-xl">
          <FaInstagram />
        </span>
        <span className="text-[#E60023] text-xl">
          <FaPinterest />
        </span>
      </div>

      <div className="text-[#1f2d3d]">
        Free Shipping Anywhere in India for All Orders
      </div>

      <div className="hidden md:block text-[#1f2d3d]">
        Call us: <a href="tel:+919381433360" className="underline hover:text-blue-800">9381433360</a>
      </div>
    </div>
  );
}

export default ShippingBanner;