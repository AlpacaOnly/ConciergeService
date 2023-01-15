import React from 'react';

const ContactForm = () => {
  return (
    <div className="">
      <div className="bg-stone-300 w-full flex justify-center">
        <div className="grid gap-4 place-content-center items-center shadow-md bg-lightwhiteblue rounded-md w-1/3 h-1/2">
          <form className="">
              <div className="grid gap-4 place-content-center items-center">
                <h1 className="text-gray-700 pb-8 font-bold text-2xl">Контактная информация</h1>
              </div>
              <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Name">
                ФИО
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                id="name"
                name="name"
                type="text"
                placeholder="Имя Пользователя"
              
              ></input>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="пример@gmail"
              ></input>
            </div>
            <div className="flex items-center justify-between"></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;