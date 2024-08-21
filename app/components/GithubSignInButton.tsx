"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";

const GithubSignInButton = () => {
  return (
    <Button onClick={() => signIn("github")} variant="outline" size="icon">
      <GithubIcon className="size-4" />
    </Button>
  );
};

export default GithubSignInButton;
