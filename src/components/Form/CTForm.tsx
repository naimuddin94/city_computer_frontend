/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Loading from "../shared/Loading";
import { Form } from "../ui/form";

interface formConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends formConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

export default function CTForm({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: IProps) {
  const formConfig: formConfig = {};

  // set default values if necessary
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  // set resolver function if necessary
  if (!!resolver) {
    formConfig["resolver"] = zodResolver(resolver);
  }

  const methods = useForm(formConfig);

  const submitHandler = methods.handleSubmit;

  return (
    <>
      {methods.formState.isSubmitting && <Loading />}
      <Form {...methods}>
        <form onSubmit={submitHandler(onSubmit)}>{children}</form>
      </Form>
    </>
  );
}
