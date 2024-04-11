import React, { useEffect, useState, ChangeEvent } from "react";
import { CashForm } from "../components/CashForm";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styled from "styled-components";

export const HomePage = () => {
    return (
        <CSS id="login-form">
            <div>
                bla bla bla bla bla lappli de la thune bla bla bla apprend a
                gérer ton argent solo pélo
            </div>
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
