import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

const Navbar = () => {

    // to create user authentication and manage the session 
    const session = true; 
    
    return( <nav className="bg-white shadow-lg">
        <div className="container mx-auto p-4 flex justify-between items-center"> 
            <Link href="/" className="text-xl font-bold text-blue-600" >
            Contact Manager </Link>

            {/* to show user logout link  */}
            <div className="flex items-center space-x-4">
                {session ? (
                    <>
                    <Link href="/contact" className="hover:text-blue-600 mr-8">Contacts</Link>
                    <LogoutButton />
                    </>
                ) : (
                    // if the session is false that means the user is not logged in.We need a user to a log in.
                    <>
                    <Link href="/login" className="hover:text-blue-600 mr-5">Login</Link>
                    <Link href="/register" className="hover:text-blue-600">Register</Link>
                    </>
                )}
            </div>

        </div>
    </nav>
    );
};

export default Navbar;