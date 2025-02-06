import send_icon from "../../assets/icons/Vector.svg"
import qrCode from "../../assets/images/Qrcode 1.png"

import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1440px] h-[440px] bg-primary text-white font-poppins-medium pt-20 px-[135px]">
      <div className="container border-2 border-red-800 grid grid-cols-5 gap-[87px]">
        <div className="flex gap-6 flex-col">
          <h3 className="text-2xl">Exclusive</h3>
          <p className="text-xl">Subscribe</p>
          <p className="text-base">Get 10% off your first order</p>
          <div className="border-[1.5px] rounded-md max-w-[217px] h-12 flex items-center justify-evenly">
            <p className="text-base text-[#FAFAFA]">Enter your email</p>
            <img src={send_icon} alt="" />
          </div>
        </div>
        <div className="flex gap-6 flex-col">
          <h3 className="text-2xl">Support</h3>
          <p className="text-base">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-base">exclusive@gmail.com</p>
          <p className="text-base">+88015-88888-9999</p>
        </div>
        <div className="flex gap-6 flex-col">
          <h3 className="text-2xl">Account</h3>
          <p className="text-base">My Account</p>
          <p className="text-base">Login / Register</p>
          <p className="text-base">Cart</p>
          <p className="text-base">Wishlist</p>
          <p className="text-base">Shop</p>
        </div>
        <div className="flex gap-6 flex-col">
          <h3 className="text-2xl">Quick Link</h3>
          <p className="text-base">Privacy Policy</p>
          <p className="text-base">Terms Of Use</p>
          <p className="text-base">FAQ</p>
          <p className="text-base">Contact</p>
        </div>
        <div className="flex gap-6 flex-col">
          <h3 className="text-2xl">Download App</h3>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#FAFAFA]">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-2">
              <div className="max-h-20 max-w-20">
                <img src={qrCode} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="border-[0.6px] color-[#FAFAFA] max-w-[104px] h-[50%] rounded-md flex items-center justify-between">
                  <FaGooglePlay />
                  <p>Google Play</p>
                </div>
                <div className="border-[0.6px] color-[#FAFAFA] max-w-[104px] h-[50%] rounded-md flex items-center justify-between">
                  <FaApple />
                  <p>AppStore</p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Footer