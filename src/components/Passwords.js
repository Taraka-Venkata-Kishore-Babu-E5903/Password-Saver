import React, { useContext, useEffect, useLayoutEffect } from "react";
import PasswordContext from "../context/password/passwordContext";
import Password from "./Password";
import PasswordFilter from "./PasswordFilter";

const Passwords = () => {
    const passwordContext = useContext(PasswordContext);

    const { passwords, getPasswords, loading, filtered } = passwordContext;

    useEffect(() => {
        getPasswords();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="container passwords-container">
            <PasswordFilter />
            {!filtered ? (
                !loading ? (
                    passwords.length === 0 ? (
                        "No Contacts"
                    ) : (
                        passwords.map((password) => (
                            <Password key={password.id} password={password} />
                        ))
                    )
                ) : (
                    <div className="d-flex justify-content-center mt-5 w-100">
                        <div
                            className="spinner-border text-primary"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
            ) : (
                filtered.map((fil) => <Password key={fil.id} password={fil} />)
            )}
        </div>
    );
};

export default Passwords;
