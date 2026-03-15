"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Loader2 } from "lucide-react";

/**
 * Validation schema for the form
 */
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

/**
 * A responsive, split-screen authentication form component.
 */
export function AuthFormSplitScreen({
  logo,
  title,
  description,
  imageSrc,
  imageAlt,
  onSubmit,
  forgotPasswordHref,
  createAccountHref,
  isSignup = false,
}) {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col md:flex-row bg-bg">
      {/* Left Panel: Form */}
      <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-6">
            <div className="mb-4">
              {logo}
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold tracking-tight text-white">{title}</h1>
              <p className="text-sm text-zinc-400 mt-2">{description}</p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleFormSubmit)}
                className="space-y-4"
              >
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-300">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="email@example.com"
                            {...field}
                            disabled={isLoading}
                            className="bg-white/5 border-white/10 text-white focus:border-primary transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-300">Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••••••"
                            {...field}
                            disabled={isLoading}
                            className="bg-white/5 border-white/10 text-white focus:border-primary transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {!isSignup && (
                  <div className="flex items-center justify-end">
                    <a
                      href={forgotPasswordHref}
                      className="text-sm font-medium text-primary hover:text-primary-light transition-colors"
                    >
                      Forgotten Password?
                    </a>
                  </div>
                )}

                <div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl shadow-lg shadow-primary/20" disabled={isLoading}>
                    {isLoading && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {isSignup ? "Create Account" : "Continue"}
                  </Button>
                </div>
              </form>
            </Form>

            <p className="px-8 text-center text-sm text-zinc-500">
              {isSignup ? "Already have an account? " : "Don't have an account? "}
              <a
                href={isSignup ? "/login" : createAccountHref}
                className="font-medium text-primary hover:text-primary-light transition-colors"
              >
                {isSignup ? "Sign in here" : "Create one here"}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden w-1/2 md:block overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-2">Turn ideas into Legacy.</h2>
            <p className="text-zinc-400">Join the next generation of founders building the future.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
