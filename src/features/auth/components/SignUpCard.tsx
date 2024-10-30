import React from 'react';
import {Card,CardContent,CardHeader, CardTitle,CardDescription } from "@/components/ui/card"
import DottedSeparator from "@/components/dottedSeparator";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import Link from "next/link";

const SignUpCard = () => {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Sign Up
                </CardTitle>
                <CardDescription>
                    By signing up, you agree to our{" "}
                    <Link href={'/privacy'}>
                        <span className="text-blue-700">Privacy Policy</span>
                    </Link>{" "}
                    and{" "}
                    <Link href={'/terms'}>
                        <span className="text-blue-700">Terms of Service</span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <form className="space-y-4">
                    <Input
                        className="py-6"
                        required
                        type="email"
                        onChange={() => {}}
                        placeholder="Enter yor email address"
                    />
                    <Input
                        className="py-6"
                        required
                        type="text"
                        onChange={() => {}}
                        placeholder="Enter yor name"
                    />
                    <Input
                        className="py-6"
                        required
                        type="password"
                        onChange={() => {}}
                        placeholder="Enter yor email password"
                        min={8}
                        max={256}
                    />
                    <Button className="w-full py-6">
                        Sign Up
                    </Button>
                </form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button className="w-full py-6" variant="outline">
                    <FcGoogle className="size-5 mr-3" />
                    Sign Up With Google
                </Button>
                <Button className="w-full py-6" variant="outline">
                    <FaGithub className="size-5 mr-3" />
                    Sign Up With Github
                </Button>
            </CardContent>
        </Card>
    );
};

export default SignUpCard;