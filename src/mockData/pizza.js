import hamAndCheese from '../app/assets/hamAndCheese.jpeg'
import barbecueChicken from '../app/assets/barbecueChicken.jpeg'
import meaty from '../app/assets/meaty.jpeg'
import whitePepperoni from '../app/assets/whitePepperoni.jpeg'
import {
  DOUGH_THICK,
  DOUGH_THIN,
  PIZZA_LARGE_SIZE,
  PIZZA_MEDIUM_SIZE,
  PIZZA_SMALL_SIZE,
  PRODUCT_PIZZA,
} from '../app/utils/consts'
export const pizza = [
  {
    _id: '1',
    type: PRODUCT_PIZZA,
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
    dough: {
      thin: DOUGH_THIN,
      thick: DOUGH_THICK,
    },
    selected: {
      size: PIZZA_MEDIUM_SIZE,
      dough: DOUGH_THIN,
    },
  },
  {
    _id: '2',
    type: PRODUCT_PIZZA,
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
    dough: {
      thin: DOUGH_THIN,
      thick: DOUGH_THICK,
    },
    selected: {
      size: PIZZA_SMALL_SIZE,
      dough: DOUGH_THIN,
    },
  },
  {
    _id: '3',
    type: PRODUCT_PIZZA,
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
    dough: {
      thin: DOUGH_THIN,
      thick: DOUGH_THICK,
    },
    selected: {
      size: PIZZA_MEDIUM_SIZE,
      dough: DOUGH_THIN,
    },
  },
  {
    _id: '4',
    type: PRODUCT_PIZZA,
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
        selected: true,
      },
      large: {
        weigth: '830',
        diametr: '35',
        price: '889',
      },
    },
    dough: {
      thin: DOUGH_THIN,
      thick: DOUGH_THICK,
    },
    selected: {
      size: PIZZA_LARGE_SIZE,
      dough: DOUGH_THICK,
    },
  },
  {
    _id: '5',
    type: PRODUCT_PIZZA,
    title: 'Ветчина и Semen',
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
    dough: {
      thin: DOUGH_THIN,
      thick: DOUGH_THICK,
    },
    selected: {
      size: PIZZA_MEDIUM_SIZE,
      dough: DOUGH_THIN,
    },
  },
  {
    _id: '6',
    type: PRODUCT_PIZZA,
    title: 'Белая Jabroni',
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
    dough: {
      thin: DOUGH_THIN,
      thick: DOUGH_THICK,
    },
    selected: {
      size: PIZZA_SMALL_SIZE,
      dough: DOUGH_THIN,
    },
  },
  {
    _id: '7',
    type: PRODUCT_PIZZA,
    title: 'Воробушек барбекю',
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
    dough: {
      thin: DOUGH_THIN,
      thick: DOUGH_THICK,
    },
    selected: {
      size: PIZZA_MEDIUM_SIZE,
      dough: DOUGH_THIN,
    },
  },
  {
    _id: '8',
    type: PRODUCT_PIZZA,
    title: 'Fistная',
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
        selected: true,
      },
      large: {
        weigth: '830',
        diametr: '35',
        price: '889',
      },
    },
    dough: {
      thin: DOUGH_THIN,
      thick: DOUGH_THICK,
    },
    selected: {
      size: PIZZA_LARGE_SIZE,
      dough: DOUGH_THICK,
    },
  },
]

const pizzaApi = {
  fetchAll: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(pizza)
      }, 500)
    })
  },
  getPizza: async (page, limit) => {
    const chunk = pizza.slice((page - 1) * limit, limit * page)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(chunk)
      }, 500)
    })
  },
}

export default pizzaApi
