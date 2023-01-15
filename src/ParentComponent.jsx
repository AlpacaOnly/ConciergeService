import React, { useState } from 'react'
import FirstForm from "./components/FirstForm.jsx"
import SecondForm from "./components/SecondForm.jsx"

const ParentComponent = () => {
    const formList = ["First Form", "Second Form"];
    const [page, setPage] = useState(0);
    const formLength = formList.length;
  
  
    const handlePrev = () => {
      setPage(page===0 ? formLength - 1 : page - 1)
    };
  
    const handleNext = () => {
      setPage(page===formLength -1 ? 0 : page + 1)
    };
  
    console.log(page);
  
    const handleForm = () => {
      switch(page) {
        case 0: { 
            return <FirstForm></FirstForm>;
        }
        case 1: {
            return <SecondForm></SecondForm>;
        }
        default: return null;
      }
    };
  
    return (
      <div>
        <div>{handleForm()}</div>
        <div>
          <button onClick={handlePrev}>Prec</button>
        </div>
        <div>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    
      
    );
}

export default ParentComponent;