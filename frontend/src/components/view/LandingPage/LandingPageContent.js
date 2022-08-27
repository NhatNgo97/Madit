import Logo from "../../../assets/images/logo.svg";
function LandingPageContent() {
  return (
    <div className="flex flex-col md:w-[40%]  ">
      <div>
        <img className="h-28 md:-mx-7 mx-auto" src={Logo} alt="logo icon" />
      </div>
      <div className="text-center font-medium text-wrap md:text-left xl:text-3xl md:text-2xl text-xl">
        Facebook helps you connect and share with the people in your life.
      </div>
    </div>
  );
}

export default LandingPageContent;
