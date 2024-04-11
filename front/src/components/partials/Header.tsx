import React, { useEffect, useState, ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { LoggedContext } from "../../App";

export const Header = ({ setShowRegisterPage, setShowLoginPage }: any) => {
    const { isLogged, setIsLogged } = useContext(LoggedContext);
    const handleShowLoginPage = () => {
        setShowLoginPage(true);
        setShowRegisterPage(false);
    };

    const handleShowRegisterPage = () => {
        setShowLoginPage(false);
        setShowRegisterPage(true);
    };

    const handleLogout = () => {
        setIsLogged(false);
        localStorage.removeItem("userData");
    };

    const handleHomePage = () => {
        setShowLoginPage(false);
        setShowRegisterPage(false);
    };

    return (
        <CSS id="header">
            <h1
                style={{ cursor: "pointer" }}
                onClick={handleHomePage}
                id="title"
            >
                CashFlow
            </h1>
            {!isLogged && (
                <div id="btns">
                    <button
                        onClick={handleShowLoginPage}
                        id="btn-login"
                        className="button-64"
                        role="button"
                    >
                        <span className="text">Connexion</span>
                    </button>
                    <button
                        onClick={handleShowRegisterPage}
                        id="btn-register"
                        className="button-64"
                        role="button"
                    >
                        <span className="text">Inscription</span>
                    </button>
                </div>
            )}
            {isLogged && (
                <div id="btns">
                    <button
                        onClick={handleLogout}
                        id="btn-register"
                        className="button-64"
                        role="button"
                    >
                        <span className="text">Déconnexion</span>
                    </button>
                </div>
            )}
        </CSS>
    );
};

const CSS = styled.div`
    background-color: var(--header-bg-color);
    color: white;
    width: 100vw;
    height: var(--header-size);
    display: flex;
    align-items: center;
    justify-content: space-between;

    #header {
        display: flex;
        width: 100vw;
        align-items: center;
        justify-content: space-between;
    }

    #btns {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    #btn-login {
    }

    .btn {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: 1px solid black;
        background-color: blue;
        font-weight: bold;
        color: white;
    }

    #btn-register {
        margin-right: 25px;
    }

    #title {
        margin-left: 25px;
    }
`;
