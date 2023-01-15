import React from "react";
import styles from "./styles/Button.css"


const ServiceRequest = () => {
    return (
        <div className="create">
        <h2>Заявка на Услугу</h2>
            <form>
                <div className="grid grid-cols-2">
                    <div>
                        <label>ФИО</label>
                        <input type="text" required/>
                    </div>
                    <div>
                        <label>Почта</label>
                        <input type="text" required/>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <label>Номер телефона</label>
                        <input type="text" required/>
                    </div>
                    <div>
                        <label>Вид Заявки</label>
                        <select>
                            <option value="Компания">Компания</option>
                            <option value="Физическое лицо">Физическое лицо</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <label>Наименование компании</label>
                        <input type="text" required/>
                    </div>
                    <div>
                        <label>Город</label>
                        <input type="text" required/>
                    </div>
                </div>
                <button className={styles.button}>Далее</button>
                
            </form>
        </div>

    );
}

export default ServiceRequest;