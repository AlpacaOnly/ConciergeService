import React, {useState} from "react";
import ContactForm from "./ContactForm";
import ServicesForm from "./ServicesForm";

export function Register() {
    const formList = ["Contact Form", "Services Form"];
    const [page, setPage] = useState(0);
    const formLength = formList.length;

    const handlePrev = () => {
        setPage(page === 0 ? formLength - 1 : page - 1)
    };

    const handleNext = () => {
        setPage(page === formLength - 1 ? 0 : page + 1)
    };

    const handleForm = () => {
        switch (page) {
            case 0:
                return <ContactForm/>;
            case 1:
                return <ServicesForm/>;
            default:
                return null;
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