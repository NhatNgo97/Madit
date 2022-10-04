import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import modalSlice from "../../../redux/modalSlice";
import Divider from "../../common/Divider";
import Button from "../../common/Button";
import { registerAsyncUser } from "../../../redux/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUpModal() {
  const dispatch = useDispatch();
  const isRegisterModalOpen = useSelector(
    (state) => state.modal.registerModal.isOpen
  );
  function handleRegisterModalClose() {
    dispatch(modalSlice.actions.closeRegisterModal());
  }

  const formik = useFormik({
    initialValues: {
      nickname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      nickname: Yup.string()
        .max(20, "Maximum 20 chracter")
        .required("Required"),
      email: Yup.string()
        .max(50, "Maximum 50 character")
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^.{6,}$/,
          "Minimum 6 characters, at least one letter and one number"
        ),
    }),
    onSubmit: async (values, { resetForm }) => {
      const user = {
        nickname: values.nickname,
        email: values.email,
        password: values.password,
      };
      await dispatch(registerAsyncUser(user));
      resetForm();
    },
  });

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
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
          <input
            id="nickname"
            name="nickname"
            value={formik.values.nickname}
            onChange={formik.handleChange}
            placeholder="Nickname"
            className="h-[40px] p-2 border-[1px] rounded-md bg-slate-200"
          ></input>
          {formik.errors.nickname && formik.touched.nickname && (
            <p className="text-red-500 text-xs">{formik.errors.nickname}</p>
          )}
          <input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            className="h-[40px] p-2 border-[1px] rounded-md bg-slate-200"
          ></input>
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-500 text-xs">{formik.errors.email}</p>
          )}
          <input
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            placeholder="Password"
            className="h-[40px] p-2 border-[1px] rounded-md bg-slate-200"
          ></input>
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-500 text-xs">{formik.errors.password}</p>
          )}
        </form>
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
        <Button
          onClick={formik.handleSubmit}
          className="h-[40px]"
          type="secondary"
        >
          Sign Up
        </Button>
      </div>
    </Modal>
  );
}

export default SignUpModal;
