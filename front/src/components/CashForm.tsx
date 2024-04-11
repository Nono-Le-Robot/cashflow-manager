import React, { useEffect, useState, ChangeEvent } from "react";

interface CashFormProps {
  id: string;
  name: string;
  childPropsData: (data: CashOut) => void;
}

interface CashFormState {
  id: string;
  value: number;
}

interface CashOut {
  id: string;
  subject?: string;
  value: number;
}

export const CashForm: React.FC<CashFormProps> = ({
  id,
  name,
  childPropsData,
}) => {
  const [data, setData] = useState<CashFormState>({ id: id, value: 0 });
  const [perDay, setPerDay] = useState<string>((data.value / 30).toFixed(2));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setData((prevData) => ({ ...prevData, value: value }));
    setPerDay((value / 30).toFixed(2));
    childPropsData({ id, value: value });
  };

  return (
    <>
      <div>
        <h3>{name}</h3>
        <input
          type="number"
          name=""
          id={id}
          onKeyUp={() => {
            childPropsData(data);
          }}
          onChange={handleChange}
          value={data.value}
        />
        <p>{perDay} € / jour</p>
      </div>
    </>
  );
};
