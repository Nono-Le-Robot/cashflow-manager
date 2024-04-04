import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { CashForm } from './components/CashForm'

function App() {

  let total = 0
  let cashIn = 0

  const [remain, setRemain] = useState(0)
  const [allCashOut, setAllCashOut] = useState([]);
  const [allAddedCashOut, setAllAddedCashOut] = useState([]);
  const [cashOutToAdd, setCashOutToAdd] = useState({ subject: "", value: 0 });
  const [remainPerDay, setRemainPerDay] = useState(0)
  const [showModalCashOut, setShowModalCashOut] = useState(false)

  useEffect(() => {
    setRemainPerDay((remain / 30).toFixed(2))
  }, [remain]);

  const showData = (d) => {
    const index = allCashOut.findIndex(t => t.id === d.id);
    if (index !== -1) {
      const updatedCashOut = [...allCashOut];
      updatedCashOut[index] = d;
      setAllCashOut(updatedCashOut);
    } else {
      setAllCashOut([...allCashOut, d]);
    }
    allCashOut.forEach((data) => {
      if (data.id === 'in') cashIn = data.value
      else total += Number(data.value)
    })
    let remain = cashIn - total
    setRemain(remain)
    setRemainPerDay((remain / 30).toFixed(2))
  };

  useEffect(() => {
    calculateRemain();
  }, [allCashOut, allAddedCashOut]);

  const calculateRemain = () => {
    allCashOut.forEach((data) => {
      if (data.id === 'in') cashIn = data.value;
      else total += Number(data.value);
    });

    allAddedCashOut.forEach((data) => {
      total += Number(data.value)
    })

    let remain = cashIn - total;
    setRemain(remain);
    setRemainPerDay((remain / 30).toFixed(2));
  };

  const handleAddCashOut = () => {
    setShowModalCashOut(true)
  }

  const handleChangeSubject = (e) => {
    setCashOutToAdd(prev => ({ ...prev, subject: e.target.value }))
  }

  const handleChangeAmount = (e) => {
    setCashOutToAdd(prev => ({ ...prev, value: e.target.value }))
  }

  const handleSubmitCashOut = () => {
    setShowModalCashOut(false);
    setAllAddedCashOut(prevTab => [...prevTab, cashOutToAdd]);
  }

  return (
    <>
      <CSS>
        <div id='main-form'>
          <CashForm childPropsData={showData} id={"in"} name={"Salaire"} />
          <CashForm childPropsData={showData} id={"loyer"} name={"Loyer"} />
          <CashForm childPropsData={showData} id={"electricity"} name={"Electricité"} />
          <CashForm childPropsData={showData} id={"gaz"} name={"Gaz"} />
          <CashForm childPropsData={showData} id={"water"} name={"Eau"} />
          <CashForm childPropsData={showData} id={"telephone"} name={"Telephone"} />
          <CashForm childPropsData={showData} id={"internet"} name={"Internet"} />
          <CashForm childPropsData={showData} id={"food"} name={"Nourriture"} />
          <CashForm childPropsData={showData} id={"transport"} name={"Transport"} />
          <CashForm childPropsData={showData} id={"other"} name={"Autres"} />
        </div>
        {!showModalCashOut && allAddedCashOut.length > 0 && (
          allAddedCashOut.map((cashOut, index) => (
            <div key={index} className='added-cash-out'>
              <p>{cashOut.subject}</p>
              <p>{cashOut.value}</p>
            </div>
          ))
        )}

        <button onClick={handleAddCashOut}>+</button>

        <div id='list-added-cash-out'>
          {showModalCashOut &&
            <div id='modal-add-cash-out'>
              <input type="text" name="" id="" placeholder='Sujet' onChange={handleChangeSubject} />
              <input type="number" name="" id="" placeholder='Combien ?' onChange={handleChangeAmount} />
              <button onClick={handleSubmitCashOut}>Add</button>
            </div>
          }
          <div>
            <br />
            <div>
              <br />
              <h3>Reste : {remain}</h3>
              <p>{remainPerDay} € / jour</p>
              <br />
            </div>
          </div>
        </div>
      </CSS>
    </>
  )
}

const CSS = styled.div`
  background-color: #330055;
  color: white;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  #modal-add-cash-out{
    background-color: #5f02ac;
    width: 300px;
    height: 200px;
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
#main-form{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
}

`;

export default App