import Input from "components/input";
import Button from "components/button";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { register } from "firebase.js";
import { Formik, Form } from "formik";
import { RegisterSchema } from "validation/register-schema";
import Separator from "components/separator";
import { Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    const response = await register (values)
    if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
    }
  };

  return (
    <div className="w-[350px] grid gap-y-3">
      <div className=" bg-white border p-[40px] pt-10 pb-6">
        <a href="#" className=" flex justify-center mb-4 ">
          <img
            className="h-[51px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
            alt=""
          />
        </a>
        <p className="text-[17px] font-semibold text-[#8e8e8e] text-center mb-6 ">
          Sign up to see photos and videos from your friends.
        </p>
        <Button>
          <AiFillFacebook size={18} />
          Log in with Facebook
        </Button>
        <Separator />

        <Formik
          validationSchema={RegisterSchema}
          initialValues={{
            email: "",
            full_name: "",
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty, values }) => (
            <Form className="grid gap-y-1.5">
              <Input name="email" label="Mobile Number or E-mail" />
              <Input name="full_name" label="Full Name" />
              <Input name="username" label="Username" />
              <Input type="password" name="password" label="Password" />
              <p className="text-xs font-semibold text-[#8e8e8e] text-center pt-2.5 pb-3">
                People using our service may have uploaded your contact details
                to Instagram. <a className="text-[#385898] font-semibold" href="https://www.facebook.com/help/instagram/261704639352628">Learn More </a>
              </p>
              <p className="text-xs font-semibold text-[#8e8e8e] text-center pb-2">
               By registering, you agree to
                our <a className="text-[#385898] font-semibold" href="https://www.facebook.com/privacy/policy">Terms, Privacy Policy </a>  and <a className="text-[#385898] font-semibold" href="https://help.instagram.com/1896641480634370/?cms_id=1896641480634370"> Cookies Policy. </a>
              </p>

              <Button
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="bg-white border p-4 text-sm text-center flex items-center justify-center gap-1">
          Have an Account?
          <Link to="/auth/login" className="text-brand font-semibold ">
            Log In!
          </Link>
        </div>
    </div>
  );
}
