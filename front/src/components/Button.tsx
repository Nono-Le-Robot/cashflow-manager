import styled from "styled-components";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { LoggedContext } from "../App";
import { useContext } from "react";
export const Button = ({ data, type, handle, content }: any) => {
    const { setIsLogged } = useContext(LoggedContext);
    const handleClick = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (type === "request") {
            axios
                .post(`http://localhost:3333/${handle}`, data)
                .then((res: any) => {
                    toast.success(res.data.message);
                    localStorage.setItem(
                        "userData",
                        JSON.stringify(res.data.data)
                    );
                    setIsLogged(true); // Mettre à jour le contexte
                })
                .catch((err: any) => {
                    console.log(err);
                    let errors = err.response.data.errors;
                    errors?.map((error: any) => {
                        toast.error(error.message);
                    });
                    if (err.response.data.message)
                        toast.error(err.response.data.message);
                });
        }
    };

    return (
        <>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 1500,
                    style: {
                        background: "#363636",
                        color: "#fff",
                    },
                }}
            />
            <CSS>
                <button
                    onClick={handleClick}
                    id="btn-register"
                    className="button-64"
                    role="button"
                >
                    <span className="text">{content}</span>
                </button>
            </CSS>
        </>
    );
};

const CSS = styled.div`
    .input {
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid black;
    }
`;
