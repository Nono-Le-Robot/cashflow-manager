import { useEffect, useState } from "react";
import styled from "styled-components";

export const Input = ({ id, name, type, content, onInputChange }: any) => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    };
    useEffect(() => {
        onInputChange(inputValue);
    }, [inputValue]);
    return (
        <input
            className="input"
            id={id}
            name={name}
            type={type}
            style={{
                textAlign: "center",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border: "1px solid black",
            }}
            placeholder={content}
            value={inputValue}
            onChange={handleChange}
        />
    );
};
