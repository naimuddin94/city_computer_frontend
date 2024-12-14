import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Suspense } from "react";
import SignupForm from "./_components/SignupForm";

function VendorSignup() {
  return (
    <Container className="flex justify-center items-center min-h-screen py-8">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl text-primary">
            Create vendor account
          </CardTitle>
          <CardDescription>
            Enter your details below to get started.
          </CardDescription>
        </CardHeader>
        <Suspense fallback={<Loading />}>
          <SignupForm />
        </Suspense>
      </Card>
    </Container>
  );
}

export default VendorSignup;
