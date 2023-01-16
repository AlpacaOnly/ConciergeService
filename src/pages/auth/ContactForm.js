import React, {useState} from "react";
import RegistrationHeader from "../../components/RegistrationHeader";
import {Input} from "../../components/Form";
import Select from "../../components/Form/Select"

const ContactForm = () => {
  const [fio, setFio] = useState('')
  
  return (
    <div className="bg-lightwhiteblue w-screen h-screen">
      <RegistrationHeader />
      <div className=" w-fill h-full flex justify-center lg:overflow-hidden">
        <div className="w-3/4 h-4/5 bg-contact-form bg-cover bg-center mt-10 rounded-3xl flex justify-center items-center">
          <div className="w-1/2 h-3/4 bg-lightwhiteblue rounded-3xl p-16">
            <p className="font-semibold">Заявка на услугу</p>
            <p className="font-semibold mt-4 text-xl">Контактная информация</p>
            <form className="text-white-400 mt-5">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col w-full">
                  <Input set={setFio} label="ФИО" />
                  <Input set={setFio} label="Номер телефона" />
                  <Input set={setFio} label="Наименование компании" />
                </div>
                <div className="flex flex-col w-full">
                  <Input set={setFio} label="Почта" />
                  <label>Вид Заявки</label>
                  <Select/>
                  <Input set={setFio} label="Город" />
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

/*
<div className="grid grid-rows-2 grid-flow-col gap-4">
                <div>
                  <label for="FIO" class="block mb-2 text-sm font-medium text-gray-900">
                    ФИО
                  </label>
                  <input
                    type="text"
                    id="FIO"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="ФИО"
                    required
                  />
                </div>

                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                    Почта
                  </label>
                  <input
                    type="text"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="example@example.com"
                    required
                  />
                </div>
                <div>
                  <label for="FIO" class="block mb-2 text-sm font-medium text-gray-900">
                    Номер телефона
                  </label>
                  <input
                    type="text"
                    id="FIO"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="ФИО"
                    required
                  />
                </div>

                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                    Почта
                  </label>
                  <input
                    type="text"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="example@example.com"
                    required
                  />
                </div>
              </div>
 */

/*
<div className="">
      <div className="bg-contact-form h-screen w-full flex justify-center">
        <div className="grid gap-4 place-content-center items-center shadow-md bg-lightwhiteblue rounded-md w-1/2 h-fit">
          <form className="">
            <div className="grid gap-4 place-content-center items-center">
              <h1 className="text-gray-700 pb-8 font-bold text-2xl">Контактная информация</h1>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
                ФИО
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                id="name"
                name="name"
                type="text"
                placeholder="Имя Пользователя"/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="пример@gmail"></input>
            </div>
            <div className="flex items-center justify-between"></div>
          </form>
        </div>
      </div>
    </div>
 */
