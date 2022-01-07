import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Home from "./components/Home";
import PasswordState from "./context/password/PasswordState";

function App() {
    return (
        <PasswordState>
            <Fragment>
                <Home />
            </Fragment>
        </PasswordState>
    );
}

export default App;
