import React from 'react';
import {Button} from "@/components/ui/button";
interface AuthLayoutProps {
    children: React.ReactNode;
}
const AuthLayout = ({children}: AuthLayoutProps) => {
    return (
        <main className="bg-neutral-200 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <img src="logo.svg" alt="logo"/>
                    <Button variant={"secondary"}>Sign Up</Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14 ">

                    {children}
                </div>
            </div>
        </main>
    );
};

export default AuthLayout;