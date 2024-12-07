import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Container from "@/components/shared/Container";
import Link from "next/link";
import SigninForm from "./_components/SigninForm";

function Signin() {
  return (
    <Container className="flex justify-center items-center min-h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-primary">
            Welcome Back
          </CardTitle>
          <CardDescription>
            Enter your email and password to access your account.
          </CardDescription>
        </CardHeader>
        <SigninForm />
        <Link
          href="/signup"
          className="inline-block w-full text-center text-sm  font-medium underline underline-offset-4 hover:text-primary pb-8"
        >
          Haven&apos;t account yet ? Signup
        </Link>
      </Card>
    </Container>
  );
}

export default Signin;
