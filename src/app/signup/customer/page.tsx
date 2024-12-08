import Container from "@/components/shared/Container";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignupForm from "./_components/SignupForm";

function CustomerSignup() {
  return (
    <Container className="flex justify-center items-center min-h-screen py-8">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl text-primary">
            Create an account
          </CardTitle>
          <CardDescription>
            Enter your details below to get started.
          </CardDescription>
        </CardHeader>
        <SignupForm />
      </Card>
    </Container>
  );
}

export default CustomerSignup;
