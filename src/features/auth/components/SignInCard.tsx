import React from 'react';
import {Card,CardContent,CardHeader, CardTitle } from "@/components/ui/card"
import DottedSeparator from "@/components/dottedSeparator";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"

const SignInCard = () => {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome back!
                </CardTitle>
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
                        type="password"
                        onChange={() => {}}
                        placeholder="Enter yor email password"
                        min={8}
                        max={256}
                    />
                    <Button className="w-full py-6">
                        Login
                    </Button>
                </form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button className="w-full py-6" variant="outline">
                    <FcGoogle className="size-5 mr-3" />
                    Login With Google
                </Button>
                <Button className="w-full py-6" variant="outline">
                    <FaGithub className="size-5 mr-3" />
                    Login With Github
                </Button>
            </CardContent>
        </Card>
    );
};

export default SignInCard;