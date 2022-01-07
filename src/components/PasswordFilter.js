import React, { useContext } from "react";
import PasswordContext from "../context/password/passwordContext";

const PasswordFilter = () => {
    const passwordContext = useContext(PasswordContext);
    const { filterPassword } = passwordContext;
    const changeHandler = (e) => {
        filterPassword(e.target.value);
    };
    return (
        <div>
            <input
                type="search"
                placeholder="Search..."
                className="form-control"
                onChange={changeHandler}
            />
        </div>
    );
};

export default PasswordFilter;
