const Create = () => {
    return (
        <div className="create">
        <h2></h2>
            <form>
                <label>ФИО</label>
                <input type="text" required/>
                <label>Почта</label>
                <input type="text" required/>
                <label>Номер телефона</label>
                <input type="text" required/>
                <label>Вид Заявки</label>
                <select>
                    <option value="Компания">Компания</option>
                    <option value="Физическое лицо">Физическое лицо</option>
                </select>
                <label>Наименование компании</label>
                <input type="text" required/>
                <label>Город</label>
                <input type="text" required/>
                <button>Далее</button>
            </form>
        </div>

    );
}

export default Create;