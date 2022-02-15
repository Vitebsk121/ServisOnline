export type OrderType =   {
  id: number,
  status: string
  createdBy: string
  createdDate: string
  finishDate: string
  guaranteeDate: string
  orderShortDescription: string
  orderBase: string
  orderWorksAndCosts: [
    {
      name: string
      cost: string
      standardTime: string
    },
  ],
  orderMaterialsAndCosts: [
    {
      name: string
      cost: string
    },
  ],
  cashless: boolean
  client: {
    ID: number
    firstName: string
    lastName: string
    secondName: string
    telephone: string
    unpCode: string
    address: {
      city: string
      street: string
      house: string
      apartment: string
    },
    comment: string
    subject: string
  },
  cars: CarType[]
}

export type CarType =     {
  carID: number
  name: string
  model: string
  engineCapacity: string
  fuelType: string
  plate: string
  vin: string
  odometer: string
}
