function LandingPageForm() {
  return (
    <div className="w-[396px] flex flex-col gap-5 shrink-0">
      <form className="h-[350px] rounded-xl flex justify-around flex-col bg-white p-4 shadow-2xl">
        <input
          placeholder="Email address or phone number"
          className="w-full rounded-md border-2 p-3 h-[50px]"
        ></input>
        <input
          placeholder="Password"
          className="w-full rounded-md border-2 p-3 h-[50px]"
        ></input>
        <button className="text-center w-full h-[50px] rounded-md hover:bg-blue-600 bg-blue-500 text-white font-bold	">
          Log In
        </button>
        <a href="#" className="text-center hover:underline text-blue-700">
          Forgotten password?
        </a>
        <div className="w-full border-b-[1px]"></div>
        <button className="mx-auto text-white font-bold p-3 rounded-md bg-[#42b72a] h-[50px]">
          Create New Account
        </button>
      </form>
      <div className="text-center text-sm">
        <strong>Create a Page</strong> for a celebrity, brand or business.
      </div>
    </div>
  );
}

export default LandingPageForm;
