import Button from "../../common/Button";
import { useSelector, useDispatch } from "react-redux";
import modalSlice from "../../../redux/modalSlice";
import Divider from "../../common/Divider";

function LandingPageForm() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  function handleLoginClick(e) {}

  function handleCreateAccountClick(e) {
    e.preventDefault();
    dispatch(modalSlice.actions.openRegisterModal());
  }

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
        <Button className="h-[50px]" onClick={handleLoginClick}>
          Login{" "}
        </Button>
        <Divider />
        <Button
          className="h-[50px] mx-auto px-5"
          type="secondary"
          onClick={handleCreateAccountClick}
        >
          Create New Account
        </Button>
      </form>
      <div className="text-center text-sm">
        <strong>Create a Page</strong> for a celebrity, brand or business.
      </div>
    </div>
  );
}

export default LandingPageForm;
