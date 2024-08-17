import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  } else {
    return redirect("/home");
  }
  // return (
  //   <div className="text-white text-2xl m-5 ">
  //     <Button>hello</Button>
  //     <h1>{session?.user?.name}</h1>
  //     <h1>{session?.user?.email}</h1>
  //     <img src={session?.user?.image} width={500} height={500} />
  //   </div>
  //);
}
