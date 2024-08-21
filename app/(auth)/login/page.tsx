import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import googleIcon from "../../../public/images/google.svg";
import Image from "next/image";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }

  return (
    <div className="flex items-center justify-center">
      <div className="mt-24 rounded-xl bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14  ">
        <form method="post" action="/api/auth/signin">
          <h2 className="text-3xl font-semibold  text-white">Sign In</h2>
          <div className="space-y-4 mt-5">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
            />{" "}
     
            <Button
              type="submit"
              variant="destructive"
              className="w-full bg-[#e50914] "
            >
              Sign in
            </Button>
          </div>
        </form>
        <div className="text-gray-500 text-sm mt-2  ">
          New to Netflix?
          <Link className=" ml-2 text-white hover:underline" href="/sign-up">
            Sign up now.
          </Link>
        </div>

        <div className="flex w-full justify-center items-center gap-x-3 mt-6">
          <GithubSignInButton />
          <Button variant="outline" size="icon">
            <Image src={googleIcon} className=" size-6" alt="google" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
