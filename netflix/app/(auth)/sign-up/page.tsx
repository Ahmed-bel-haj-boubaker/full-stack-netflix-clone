import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import googleIcon from "../../../public/images/google.svg";
import Image from "next/image";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

const SignUp = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }

  return (
    <div className="">
      <div className="mb-4 flex-col items-center justify-center space-y-4 leading-9">
        <h1 className="text-6xl font-bold ">
          Unlimited movies, TV shows, and more
        </h1>
        <h6 className="text-center text-2xl">
          Watch anywhere. Cancel anytime.
        </h6>
        <h5 className="text-center text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
      </div>
      <div className="flex items-center justify-center">
        <div className="mt-24 rounded-xl bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14  ">
          <form className="">
            <h2 className="text-3xl font-semibold  text-white">Sign Up</h2>
            <div className="space-y-4 mt-5">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
              />
              <Button
                type="submit"
                variant="destructive"
                className="w-full bg-[#e50914] "
              >
                Sign up
              </Button>
            </div>
          </form>
          <div className="text-gray-500 text-sm mt-2">
            Already Have a account?{" "}
            <Link className="text-white hover:underline" href="/login">
              login in now!
            </Link>
          </div>

          <div className="flex w-full justify-center items-center gap-x-3 mt-6">
            {" "}
            <GithubSignInButton />
            <Button variant="outline" size="icon">
              <Image src={googleIcon} className=" size-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
