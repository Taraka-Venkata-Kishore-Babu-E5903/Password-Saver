import React from "react";
import PasswordFilter from "./PasswordFilter";
import PasswordForm from "./PasswordForm";
import Passwords from "./Passwords";

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <PasswordForm />
                <div className="mt-4 col-md-6 col-12">
                    <PasswordFilter />
                    <Passwords />
                </div>
            </div>
        </div>
    );
};

export default Home;
