import {OrderType} from "../types/orderTypes";

const orders: OrderType[] = [
  {
    id: 123321,
    status: 'В работе', // вносится пользователем
    createdBy: 'Эдгар Хошабаев', // вносится пользователем
    createdDate: '10.05.2015', // вносится пользователем
    finishDate: '12.05.2015', // вносится пользователем
    guaranteeDate: '11.05.2016', // вносится пользователем
    orderShortDescription: 'Плановое ТО', // вносится пользователем
    orderBase: '', // Основание заказа - Пустая строка для физ лица, для юрлица может быть например Договор
    orderWorksAndCosts: [
      {
        name: 'Замена фильтра', // вноситься пользователем
        cost: '100', // вноситься пользователем
        standardTime: '10', // Норматив времени в часах, сколько ушло на работу, вносится вручную высчитывать не нужно
      },
    ],
    orderMaterialsAndCosts: [
      {
        name: 'Фильтр',
        cost: '1000',
      },
    ],
    cashless: false, // Оплата картой?
    client: {
      ID: 2381595,
      firstName: 'Александр',
      lastName: 'Демченко',
      secondName: 'Васильевич',
      telephone: '+79778480811',
      unpCode: '', //пустая строка для физ лиц или УНП для ЮрЛиц
      address: {
        city: 'Витебск',
        street: 'Терешковой',
        house: '28',
        apartment: '59',
      },
      comment: 'Постоянный клиент, дружелюбный',
      subject: 'Физическое лицо',
    },
    cars: [
      {
        carID: 1245679,
        name: 'Mazda',
        model: 'CX-5',
        engineCapacity: '2500',
        fuelType: 'Бензин',
        plate: '8401-IE2',
        vin: '57698Q273731ER7IOU88234567',
        odometer: '140000'
      },
      {
        carID: 1245690,
        name: 'Lada',
        model: 'Model X',
        engineCapacity: '2500',
        fuelType: 'Бензин',
        plate: '1176-ET2',
        vin: '09u873731ER7123IOU88234567',
        odometer: '1000'
      }
    ]
  },
]


export default orders
