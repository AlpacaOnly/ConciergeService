import React from 'react'
import RegistrationHeader from "../../components/RegistrationHeader";
import {Input} from "../../components/Form";
import Select from "../../components/Form/Select";
import Button from '../../components/Form/Button';
import Textarea from "../../components/Form/Textarea";


const ServicesForm = (props) => {

  return (
    <div className="bg-lightwhiteblue w-screen h-screen">
      <RegistrationHeader />
      <div className=" w-fill h-full flex justify-center lg:overflow-hidden sm:flex">
        <div className="lg:w-3/4 lg:h-4/5 bg-contact-form bg-cover bg-center mt-10 rounded-3xl flex justify-center items-center">
          <div className="lg:w-1/2 lg:h-5/6 sm:w-full bg-lightwhiteblue rounded-3xl p-8 xs:mt-0 xs:p-0">
            <p className="font-semibold text-md xs:mt-0 xs:p-0">Заявка на услугу</p>
            <p className="font-semibold mt-4 text-xl">Информация о Заказе</p>
            <form className="text-white-400 mt-5">
              <div className=" md:flex grid grid-cols-2 gap-8 text-md">
                <div className=" md:w-1/3 flex flex-col w-full">
                <label className=' md:text-left  md:mb-0'>Категория</label>
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
                </div>
                <div className="flex flex-col w-full">
                <label className='flex flex-col'>Подкатегория</label>
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
              <label flex flex-col>Описание</label>
                <Textarea rows="4"/>
              <div className="flex w-full justify-between gap-8">
                <Button button={props.prev_button} className="w-1/2 inline-block lg:px-6 py-2.5 my-4 px-0
                bg-input_bg rounded-md text-dark_blue border border-input_border hover:bg-gray-300">Назад</Button>
                <Button button={props.next_button} className="w-1/2 inline-block lg:px-6 py-2.5 my-4
                  bg-button_jeal rounded-md text-white px-0">Далее</Button>  
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesForm
