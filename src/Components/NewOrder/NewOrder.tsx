import "./NewOrder.scss";

import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import MyButton, {buttonClass} from "../UI/Buttons/MyButton";
import MyInput from "../UI/Inputs/MyInput";


type NewOrderProps = {};

const NewOrder: React.FC<NewOrderProps> = (props: NewOrderProps) => {

  const formSchema = Yup.object().shape({
    client: Yup.object({
      firstName: Yup.string()
        .min(2, 'Минимальное значение 2 символа')
        .typeError('Только буквы')
        .required('Обязательное поле'),
      lastName: Yup.string()
        .min(2, 'Минимальное значение 2 символа')
        .typeError('Только буквы')
        .required('Обязательное поле'),
      secondName: Yup.string(),
      phone: Yup.number()
        .typeError('Только цифры'),
      unpCode: Yup.number()
        .typeError('Только цифры'),
    })
  });

  const formikInitialValues = {
    client: {
      firstName: '',
      lastName: '',
      secondName: '',
      phone: '',
      unpCode: '',
      comment: '',
      city: '',
      street: '',
      house: '',
      apartment: '',
    },
    subject: false,
    car: {
      name: '',
      model: '',
      engineCapacity: '',
      fuelType: '',
      plate: '',
      vin: '',
      odometer: ''
    },
    order: {
      createdBy: '',
      orderShortDescription: '',
      orderBase: '',
    }
  }

  type OrderClientInputsType = {
    name: keyof typeof formikInitialValues.client,
    type: string,
    placeholder: string
  }[]

  type OrderCarInputsType = {
    name: keyof typeof formikInitialValues.car,
    type: string,
    placeholder: string
  }[]

  type OrderInputsType = {
    name: keyof typeof formikInitialValues.order,
    type: string,
    placeholder: string
  }[]

  const newOrderClientInputs: OrderClientInputsType = [
    {name: "firstName", type: "text", placeholder: "Имя"},
    {name: "lastName", type: "text", placeholder: "Фамилия"},
    {name: "secondName", type: "text", placeholder: "Отчество"},
    {name: "phone", type: "text", placeholder: "Телефон"},
    {name: "city", type: "text", placeholder: "Город"},
    {name: "street", type: "text", placeholder: "Улица"},
    {name: "house", type: "text", placeholder: "Дом"},
    {name: "apartment", type: "text", placeholder: "Квартира/Офис"},
    {name: "comment", type: "text", placeholder: "Комментарий"},
    {name: "unpCode", type: "text", placeholder: "УНП (для юридических лиц)"},
  ]

  const newOrderCarInputs: OrderCarInputsType = [
    {name: "name", type: "text", placeholder: "Марка а/м"},
    {name: "model", type: "text", placeholder: "Модель"},
    {name: "engineCapacity", type: "text", placeholder: "Объем двигателя"},
    {name: "plate", type: "text", placeholder: "Гос номер"},
    {name: "vin", type: "text", placeholder: "VIN"},
    {name: "fuelType", type: "text", placeholder: "Тип топлива"},
    {name: "odometer", type: "text", placeholder: "Пробег"},
  ]

  const newOrderInputs: OrderInputsType = [
    {name: "createdBy", type: "text", placeholder: "ФИО исполнителя"},
    {name: "orderShortDescription", type: "text", placeholder: "Краткое описание заказа"},
    {name: "orderBase", type: "text", placeholder: "Основание для заявки"},
  ]

  //ToDO сделать массив секций
  // type OrderSectionsType = {
  //   sectionName: keyof typeof formikInitialValues,
  //   title: string,
  //   arrayOfInputs: OrderInputsType | OrderCarInputsType | OrderClientInputsType
  // }[]
  // const orderSections: OrderSectionsType = [
  //   {sectionName: "client", title: "Данные о клиенте", arrayOfInputs: newOrderClientInputs },
  //   {sectionName: "car", title: "Данные об автомобиле", arrayOfInputs: newOrderCarInputs },
  //   {sectionName: "order", title: "Данные о заказе", arrayOfInputs: newOrderInputs },
  // ]

  return (
    <div className="newOrder">
      <Formik
        initialValues={formikInitialValues}
        validateOnChange={false}
        validationSchema={formSchema}
        onSubmit={ (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <form>
            <section className="newOrder__section">
              <span className="section__title">Данные о клиенте</span>
              {newOrderClientInputs.map(({name, type, placeholder}) => (
                <div key={name} className="section__item client">
                  <MyInput
                    name={`client.` + name}
                    type={type}
                    inputHandleChange={formik.handleChange}
                    inputValue={formik.values.client[name]}
                    placeholder={placeholder}
                    error={formik.errors.client?.[name]}
                  />
                </div>
              ))}
              <div className="section__item client">
                <input
                  type="checkbox"
                  id="subject"
                  name="subject"
                  onChange={formik.handleChange}
                  checked={formik.values.subject}
                />
                <label htmlFor="subject">Юридическое лицо</label>
              </div>
            </section>
            <section className="newOrder__section">
              <span className="section__title">Данные об автомобиле</span>
              {newOrderCarInputs.map(({name, type, placeholder}) => (
                <div key={name} className="section__item car">
                  <MyInput
                    name={`car.` + name}
                    type={type}
                    inputHandleChange={formik.handleChange}
                    inputValue={formik.values.car[name]}
                    placeholder={placeholder}
                    error={formik.errors.car?.[name]}
                  />
                </div>
              ))}
            </section>
            <section className="newOrder__section">
              <span className="section__title">Данные о заказе</span>
              {newOrderInputs.map(({name, type, placeholder}) => (
                <div key={name} className="section__item order">
                  <MyInput
                    name={`order.` + name}
                    type={type}
                    inputHandleChange={formik.handleChange}
                    inputValue={formik.values.order[name]}
                    placeholder={placeholder}
                    error={formik.errors.order?.[name]}
                  />
                </div>
              ))}
            </section>
            <MyButton buttonClass={buttonClass.SUCCESS_BTN} onClick={formik.handleSubmit} buttonText={'Сохранить'} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NewOrder;
