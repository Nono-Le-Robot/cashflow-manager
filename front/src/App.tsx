import { Dispatch, SetStateAction, createContext, useState } from "react";
import styled from "styled-components";
import "./variables.css";
import { Header } from "./components/partials/Header";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/HomePage";

interface ILoggedContext {
    isLogged: boolean;
    setIsLogged: Dispatch<SetStateAction<boolean>>;
}

const userData: any = localStorage.getItem("userData");

export const LoggedContext = createContext<ILoggedContext>({
    isLogged: false,
    setIsLogged: () => {},
});

function App() {
    const [showRegisterPage, setShowRegisterPage] = useState(false);
    const [showLoginPage, setShowLoginPage] = useState(false);
    const [isLogged, setIsLogged] = useState(
        JSON.parse(userData)?.token ? true : false
    );
    return (
        <>
            <LoggedContext.Provider value={{ isLogged, setIsLogged }}>
                {!isLogged && (
                    <>
                        <Header
                            showRegisterPage={showRegisterPage}
                            showLoginPage={showLoginPage}
                            setShowRegisterPage={setShowRegisterPage}
                            setShowLoginPage={setShowLoginPage}
                        />
                        <CSS>
                            {!showRegisterPage && !showLoginPage && (
                                <HomePage />
                            )}
                            {showRegisterPage && <Register />}
                            {showLoginPage && <Login />}
                        </CSS>
                    </>
                )}

                {isLogged && (
                    <>
                        <Header
                            showRegisterPage={showRegisterPage}
                            showLoginPage={showLoginPage}
                            setShowRegisterPage={setShowRegisterPage}
                            setShowLoginPage={setShowLoginPage}
                        />
                        <CSS></CSS>
                    </>
                )}
            </LoggedContext.Provider>
        </>
    );
}

const CSS = styled.div`
    overflow-y: auto;
    background-color: var(--main-bg-color);
    color: white;
    width: 100vw;
    height: calc(100vh - var(--header-size));
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export default App;
