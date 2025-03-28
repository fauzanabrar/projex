import OAuthSignIn from "@/components/OAuthSignIn";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const CreateAccountForm = () => {
  return (
    <Card className="w-96">
      <form>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription className="text-xs">
            Enter your email below to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:text-blue-700">
              Log in
            </Link>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" required />
          </div>

          <Button className="w-full" type="submit">
            {/* <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> */}
            Create account
          </Button>
        </CardContent>
        <CardFooter>
          <OAuthSignIn />
        </CardFooter>
      </form>
    </Card>
  );
};

export default CreateAccountForm;
