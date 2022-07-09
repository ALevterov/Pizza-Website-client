import hamAndCheese from '../app/assets/hamAndCheese.jpeg'
import barbecueChicken from '../app/assets/barbecueChicken.jpeg'
import meaty from '../app/assets/meaty.jpeg'
import whitePepperoni from '../app/assets/whitePepperoni.jpeg'
export const pizza = [
  {
    _id: '1',
    title: 'Ветчина и сыр',
    description: 'Ветчина, моцарелла, соус альфредо',
    image: hamAndCheese,
    sizes: {
      small: {
        weigth: '330',
        diametr: '25',
        price: '329',
      },
      medium: {
        weigth: '500',
        diametr: '30',
        price: '539',
      },
      large: {
        weigth: '670',
        diametr: '35',
        price: '649',
      },
    },
  },
  {
    _id: '2',
    title: 'Белая пепперони',
    description: 'Пикантная пепперони, соус альфредо, моцарелла',
    image: whitePepperoni,
    sizes: {
      small: {
        weigth: '310',
        diametr: '25',
        price: '439',
      },
      medium: {
        weigth: '490',
        diametr: '30',
        price: '669',
      },
      large: {
        weigth: '620',
        diametr: '35',
        price: '829',
      },
    },
  },
  {
    _id: '3',
    title: 'Цыпленок барбекю',
    description:
      'Цыпленок, бекон, соус барбекю, красный лук, моцарелла, томатный соус',
    image: barbecueChicken,
    sizes: {
      small: {
        weigth: '450',
        diametr: '25',
        price: '489',
      },
      medium: {
        weigth: '670',
        diametr: '30',
        price: '739',
      },
      large: {
        weigth: '920',
        diametr: '35',
        price: '889',
      },
    },
  },
  {
    _id: '4',
    title: 'Мясная',
    description:
      'Цыпленок, ветчина, пикантная пепперони, острая чоризо, моцарелла, томатный соус',
    image: meaty,
    sizes: {
      small: {
        weigth: '410',
        diametr: '25',
        price: '489',
      },
      medium: {
        weigth: '610',
        diametr: '30',
        price: '739',
      },
      large: {
        weigth: '830',
        diametr: '35',
        price: '889',
      },
    },
  },
]

const pizzaApi = {
  fetchAll: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(pizza)
      }, 1000)
    })
  },
}

export default pizzaApi
