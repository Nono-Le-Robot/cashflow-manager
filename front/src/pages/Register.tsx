import React, { useEffect, useState, ChangeEvent } from "react";
import { CashForm } from "../components/CashForm";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styled from "styled-components";

export const Register = ({}) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    const handleInputChange = (name: string, value: string) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };
    return (
        <>
            <CSS id="register-form">
                <div style={{ textAlign: "center" }}>
                    {/* <h3>Nom</h3> */}
                    <Input
                        name={"firstname"}
                        id={"input-firstname"}
                        content={"Nom"}
                        type={"text"}
                        onInputChange={(value: any) =>
                            handleInputChange("firstname", value)
                        }
                    />
                </div>

                <div style={{ textAlign: "center" }}>
                    {/* <h3>Prénom</h3> */}
                    <Input
                        name={"lastname"}
                        id={"input-lastname"}
                        content={"Prénom"}
                        type={"text"}
                        onInputChange={(value: any) =>
                            handleInputChange("lastname", value)
                        }
                    />
                </div>

                <div style={{ textAlign: "center" }}>
                    {/* <h3>Nom d'utilisateur</h3> */}
                    <Input
                        name={"username"}
                        id={"input-username"}
                        content={"Pseudo"}
                        type={"text"}
                        onInputChange={(value: any) =>
                            handleInputChange("username", value)
                        }
                    />
                </div>

                <div style={{ textAlign: "center" }}>
                    {/* <h3>Email</h3> */}
                    <Input
                        name={"email"}
                        id={"input-email"}
                        content={"Email"}
                        type={"mail"}
                        onInputChange={(value: any) =>
                            handleInputChange("email", value)
                        }
                    />
                </div>

                <div style={{ textAlign: "center" }}>
                    {/* <h3>Mot de passe</h3> */}
                    <Input
                        name={"password"}
                        id={"input-password"}
                        content={"Mot de passe"}
                        type={"password"}
                        onInputChange={(value: any) =>
                            handleInputChange("password", value)
                        }
                    />
                </div>

                <div style={{ textAlign: "center" }}>
                    {/* <h3>Répétez le mot de passe</h3> */}
                    <Input
                        name={"repeat-password"}
                        id={"input-repeat-password"}
                        content={"Répetez le mot de passe"}
                        type={"password"}
                        onInputChange={(value: any) =>
                            handleInputChange("repeat-password", value)
                        }
                    />
                </div>
                <Button
                    data={formData}
                    type={"request"}
                    handle={"register"}
                    content={"S'inscrire"}
                />
            </CSS>
        </>
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
