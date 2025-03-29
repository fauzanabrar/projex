import { Icons } from "@/components/Icons";
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

const ForgotPasswordForm = () => {
  return (
    <Card className="w-96">
      <form>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription className="text-xs">
            Enter your email address and we'll send you a link to reset your
            password.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 mt-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <Button className="w-full" type="submit">
            {/* <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> */}
            Send reset link
          </Button>
        </CardContent>
        <CardFooter className="mt-2">
          <div className="text-sm">
            Remember your password?{" "}
            <Link href="/login" className="text-blue-500">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ForgotPasswordForm;
