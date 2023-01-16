import React from 'react'
import RegistrationHeader from "../../components/RegistrationHeader";
import {Input} from "../../components/Form";
import Select from "../../components/Form/Select";
import Textarea from '../../components/Form/Textarea';

const ServicesForm = () => {

  return (
    <div className="bg-lightwhiteblue w-screen h-screen">
      <RegistrationHeader />
      <div className=" w-fill h-full flex justify-center lg:overflow-hidden">
        <div className="w-3/4 h-4/5 bg-contact-form bg-cover bg-center mt-10 rounded-3xl flex justify-center items-center">
          <div className="w-1/2 h-3/4 bg-lightwhiteblue rounded-3xl p-16">
            <p className="font-semibold">Заявка на услугу</p>
            <p className="font-semibold mt-4 text-xl">Информация о Заказе</p>
            <form className="text-white-400 mt-5">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col w-full">
                <label>Категория</label>
                <Select options={[
                    {option: 'Аренда транспорта',
                    value: 'Аренда транспорта'},
                    {option: 'Жилье',
                    value: 'Жилье'},
                    {option: 'Билеты',
                    value: 'Билеты'},
                    {option: 'Другое',
                    value: 'Другое'},
                  ]}/>
                <Input label="Дата" />
                <label>Описание</label>

                </div>
                <div className="flex flex-col w-full">
                <label>Подкатегория</label>
                <Select options={[
                    {option: 'Отель',
                    value: 'Отель'},
                    {option: 'Квартира',
                    value: 'Квартира'},
                    {option: 'Автомобиль',
                    value: 'Автомобиль'},
                    {option: 'Другое',
                    value: 'Другое'},
                  ]}/>
                
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesForm