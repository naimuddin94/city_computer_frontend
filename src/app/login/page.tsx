import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Container from "@/components/shared/Container";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";

function Login() {
  return (
    <Container className="flex justify-center items-center min-h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-primary">
            Login
          </CardTitle>
          <CardDescription>
            Enter your email and password to access your account.
          </CardDescription>
        </CardHeader>
        <LoginForm />
        <Link
          href="/register"
          className="inline-block w-full text-center text-sm  font-medium underline underline-offset-4 hover:text-primary pb-8"
        >
          Haven&apos;t account yet ? Register
        </Link>
      </Card>
    </Container>
  );
}

export default Login;
