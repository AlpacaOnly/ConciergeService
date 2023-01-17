import React, {useState} from "react";
import ContactForm from "./ContactForm";
import ServicesForm from "./ServicesForm";

export const Register = () => {
    const [page, setPage] = useState(1);

    return (
      <div className='App'>
        {page === 1 ? <div><ContactForm next_button={() => setPage(2)}/></div> : page === 2 &&
         <div><ServicesForm prev_button={()=> setPage(1)}/></div>}
      </div>
    );
}

// export function Register() {
//     const formList = ["Contact Form", "Services Form"];
//     const [page, setPage] = useState(0);
//     const formLength = formList.length;

//     const handlePrev = () => {
//         setPage(page === 0 ? formLength - 1 : page - 1)
//     };

//     const handleNext = () => {
//         setPage(page === formLength - 1 ? 0 : page + 1)
//     };

//     const handleForm = () => {
//         switch (page) {
//             case 0:
//                 return <ContactForm/>;
//             case 1:
//                 return <ServicesForm/>;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div>
//             <div>{handleForm()}</div>
//             <div>
//                 <button onClick={handlePrev}>Prec</button>
//             </div>
//             <div>
//                 <button onClick={handleNext}>Next</button>
//             </div>
//         </div>

//     );
// }