import React, { useEffect, useState, ChangeEvent } from "react";
import { CashForm } from "../components/CashForm";

interface CashOut {
    id: string;
    subject?: string; // Optional if not always present
    value: number;
}

export const Form = () => {
    const [allCashOut, setAllCashOut] = useState<CashOut[]>([]);
    const [remain, setRemain] = useState<number>(0);
    const [remainPerDay, setRemainPerDay] = useState<string>("0.00");

    let total = 0;
    let cashIn = 0;

    const showData = (data: CashOut) => {
        const index = allCashOut.findIndex((t) => t.id === data.id);
        if (index !== -1) {
            const updatedCashOut = [...allCashOut];
            updatedCashOut[index] = data;
            setAllCashOut(updatedCashOut);
        } else {
            setAllCashOut([...allCashOut, data]);
        }
        allCashOut.forEach((data) => {
            if (data.id === "in") cashIn = data.value;
            else total += Number(data.value);
        });
        let remain = cashIn - total;
        setRemain(remain);
        setRemainPerDay((remain / 30).toFixed(2));
    };
    return (
        <>
            <div id="main-form">
                <CashForm
                    childPropsData={showData}
                    id={"in"}
                    name={"Salaire"}
                />
                <CashForm
                    childPropsData={showData}
                    id={"loyer"}
                    name={"Loyer"}
                />
                <CashForm
                    childPropsData={showData}
                    id={"electricity"}
                    name={"Electricité"}
                />
                <CashForm childPropsData={showData} id={"gaz"} name={"Gaz"} />
                <CashForm childPropsData={showData} id={"water"} name={"Eau"} />
                <CashForm
                    childPropsData={showData}
                    id={"telephone"}
                    name={"Telephone"}
                />
                <CashForm
                    childPropsData={showData}
                    id={"internet"}
                    name={"Internet"}
                />
                <CashForm
                    childPropsData={showData}
                    id={"food"}
                    name={"Nourriture"}
                />
                <CashForm
                    childPropsData={showData}
                    id={"transport"}
                    name={"Transport"}
                />
                <CashForm
                    childPropsData={showData}
                    id={"other"}
                    name={"Autres"}
                />
            </div>
        </>
    );
};
