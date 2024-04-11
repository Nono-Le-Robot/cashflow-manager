import React, { useEffect, useState, ChangeEvent } from "react";
import { CashForm } from "../components/CashForm";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styled from "styled-components";

export const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (name: string, value: string) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };
    return (
        <CSS id="login-form">
            <Input
                name={"email"}
                id={"input-email"}
                content={"Email"}
                type={"mail"}
                onInputChange={(value: any) =>
                    handleInputChange("email", value)
                }
            />
            <Input
                name={"password"}
                id={"input-password"}
                content={"Mot de passe"}
                type={"password"}
                onInputChange={(value: any) =>
                    handleInputChange("password", value)
                }
            />
            <Button
                data={formData}
                type={"request"}
                handle={"login"}
                content={"Se connecter"}
            />
        </CSS>
    );
};

const CSS = styled.div`
    height: calc(100vh - var(--header-size));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .input {
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid black;
    }
`;
