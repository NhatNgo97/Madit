import Button from "../../common/Button";
import { useSelector, useDispatch } from "react-redux";
import modalSlice from "../../../redux/modalSlice";
import Divider from "../../common/Divider";
import { loginAsyncUser } from "../../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function LandingPageForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCreateAccountClick(e) {
    e.preventDefault();
    dispatch(modalSlice.actions.openRegisterModal());
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
    onSubmit: async (values) => {
      const user = {
        email: values.email,
        password: values.password,
      };
      await dispatch(loginAsyncUser(user));
      navigate("/");
    },
  });

  return (
    <div className="w-[396px] flex flex-col gap-5 shrink-0">
      <form
        onSubmit={formik.handleSubmit}
        className="h-[350px] rounded-xl flex justify-around flex-col bg-white p-4 shadow-2xl"
      >
        <input
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email address or phone number"
          className="w-full rounded-md border-2 p-3 h-[50px]"
        ></input>
        {formik.errors.email && formik.touched.email && (
          <p className="text-red-500 text-xs">{formik.errors.email}</p>
        )}
        <input
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          placeholder="Password"
          className="w-full rounded-md border-2 p-3 h-[50px]"
        ></input>
        {formik.errors.password && formik.touched.password && (
          <p className="text-red-500 text-xs">{formik.errors.password}</p>
        )}
        <Button className="h-[50px]" type="submit">
          Login
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
