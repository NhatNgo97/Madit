import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import modalSlice from "../../../redux/modalSlice";
import Divider from "../../common/Divider";
import Button from "../../common/Button";

function SignUpModal() {
  const dispatch = useDispatch();
  const isRegisterModalOpen = useSelector(
    (state) => state.modal.registerModal.isOpen
  );
  function handleRegisterModalClose() {
    dispatch(modalSlice.actions.closeRegisterModal());
  }
  return (
    <Modal
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={isRegisterModalOpen}
      onClose={handleRegisterModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex w-[416px] p-4 flex-col gap-4 justify-around bg-white rounded-md shadow-md">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-3xl"> Sign Up</h1>
            <p className="text-[#606770]">It's quick and easy</p>
          </div>
          <div onClick={handleRegisterModalClose}>
            <CloseIcon />
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-2">
          <input
            placeholder="Username"
            className="h-[40px] p-2 border-[1px] rounded-md bg-slate-200"
          ></input>
          <input
            placeholder="Email"
            className="h-[40px] p-2 border-[1px] rounded-md bg-slate-200"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="h-[40px] p-2 border-[1px] rounded-md bg-slate-200"
          ></input>
        </div>
        <div className="flex flex-col gap-2 text-xs text-[#606770]">
          <p>
            People who use our service may have uploaded your contact
            information to Maddit.
          </p>
          <p>
            Learn more. By clicking Sign Up, you agree to our Terms, Privacy
            Policy and Cookies Policy. You may receive SMS notifications from us
            and can opt out at any time.
          </p>
        </div>
        <Button className="h-[40px]" type="secondary">
          Sign Up
        </Button>
      </div>
    </Modal>
  );
}

export default SignUpModal;
