import { useEffect, useState } from "react"

export const CashForm = ({
    id,
    name,
    childPropsData
}) => {

    const [data, setData] = useState({ id: id, value: 0 });
    const [perDay, setPerDay] = useState((data.value / 30).toFixed(2))

    const handleChange = (e) => {
        let { value } = e.target;
        setData(prevData => ({ ...prevData, value: value }));
        setPerDay((value / 30).toFixed(2));
        childPropsData({ id, value });
    };

    return (
        <>
            <div>
                <h3>{name}</h3>
                <input type="number" name="" id={id} onKeyUp={() => { childPropsData(data) }} onChange={handleChange} value={data.value} />
                <p>{perDay} € / jour</p>
            </div>
        </>
    )
}