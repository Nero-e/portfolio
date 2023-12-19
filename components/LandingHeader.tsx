const LandingHeader = () => {
  return (
    <>
      <div className="flex justify-center ">
        <header className="flex fixed justify-between bg-[rgb(243,244,250,0.32)] backdrop-blur-sm w-[880px] py-4 px-4 font-medium rounded-3xl shadow-custom z-40 top-10 cursor-pointer">
          <div>KB</div>
          <div className="text-rich-black">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 24L12 0"
                stroke="currentColor"
                stroke-width="2"
              ></path>
              <path d="M24 12H0" stroke="currentColor" stroke-width="2"></path>
            </svg>
          </div>
        </header>
      </div>
    </>
  );
};

export default LandingHeader;
