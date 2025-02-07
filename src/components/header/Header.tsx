const Header = () => {
  return (
    <div className="max-w-[1440px] bg-primary h-12 flex justify-between items-center px-4">
      <div className="flex space-x-2 container justify-center">
        <p className="font-poppins-medium text-sm text-[#FAFAFA] max-md:text-xs max-sm:text-[10px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <span className="font-poppins-medium text-sm underline text-white cursor-pointer max-md:text-xs max-sm:text-[10px]">
          ShopNow
        </span>
      </div>
      <select className="bg-transparent text-white py-1 text-sm max-md:text-xs max-sm:text-[10px]">
        <option className="text-black">English</option>
        <option className="text-black">Русский</option>
      </select>
    </div>
  );
};

export default Header;
