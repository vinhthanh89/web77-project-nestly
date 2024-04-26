import "./index.css";
const Footer = () => {
  return (
    <>
      <div className="w-full bg-black h-[50vh]">
        <div className="footer-holder w-full h-[70%] flex justify-center">
          <div className="footer w-[90%]">
            <div className="h-full flex items-center">
              <img src="/assets/Logo_white.png" alt="" className="w-[5rem]" />
              <h1 className="logo text-4xl text-white font-black ml-[1rem] mt-[1rem]">
                Nestly
              </h1>
            </div>
            <div className="h-full w-full flex justify-center items-end flex-col pt-[5rem]">
              <div>
                <h1 className="text-xl text-white font-semibold">Contact us</h1>
                <p className="text-lg text-white font-light mt-3">
                  Email: nestly@info.com
                </p>
                <p className="text-lg text-white font-light mt-3">
                  Phone: 0909090909
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[30%] flex justify-between items-center pl-[4rem] pr-[4rem]">
          <div className="copy-right pl-[1rem]">
            <p>Copyright©2024 Nestly. All Rights Reserved.</p>
          </div>
          <div className="flex">
            <button className="pr-[2rem]">Terms and Conditions</button>
            <button className="pr-[1rem]">Privacy Policy</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
