import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import customFetch from "../../../utils/customFetch";
import { toast } from "react-toastify";
import { useActionData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };
  if (data.password.length < 3) {
    errors.msg = "Password too short";
    return errors;
  }
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashbord");
  } catch (error) {
    // toast.error(error?.response?.data?.msg);
    errors.msg = error.response.data.msg;
    return errors;
  }
};
const Login = () => {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "secret123",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("take a test drive");
      navigate("/dashbord");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        {errors && <p style={{ color: "red" }}>{errors.msg}</p>}
        <FormRow type="email" name="email" defaultValue="soltane@gmail.com" />
        <FormRow type="password" name="password" defaultValue="azerty1234" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
