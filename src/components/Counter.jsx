import { useState } from 'react'
import { RiResetLeftLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import "../style.css"

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <div className='upperPart'>
        <section className='heads'>
          <h1 className="headline">Counter</h1>
          <span className="underline"></span>
        </section>
        <section>
          <h1 className="count">{count}</h1>
        </section>
        <section className='btns'>
          <button className='btn minus' onClick={() => setCount(prevCount => prevCount - 1)}>
            <FaMinus className='minus-btn'/>
          </button>
          <button className='btn reset' onClick={() => setCount(0)}>
            <RiResetLeftLine className='reset-btn'/>
          </button>
          <button className='btn plus' onClick={() => setCount(prevCount => prevCount + 1)}>
            <FiPlus className='plus-btn'/>
          </button>
        </section>
      </div>
      <span className='bigger-underline'></span>
      <div  className='values'>
        <section className='first-value value'>
          <h2 className='entry'>{count > 0 ? "+" + String(count) : String(count)}</h2>
          <p className='tag'>Value</p>
        </section>
        <section className='second-value value'>
          <h2 className='entry'>{Math.abs(count)}</h2>
          <p className='tag'>Absolute</p>
        </section>
        <section className='third-value value'>
          <h2 className='entry'>{count >= 0 ? "Positive" : "Negative"}</h2>
          <p className='tag'>Sign</p>
        </section>
      </div>
    </div>
  )
}

export default Counter