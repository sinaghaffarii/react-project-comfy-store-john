import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'


// ---------- آیتم های که در نوبار نشون داده میشن یا در سایدبار هستن به صورت زیر در آرایه مینویسیم تا هر جا که لازم شد فراخوانی بکنیم
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]


// ------- آیتم هایی که قسمت سرویس صفحه اول نشون داده میشن رو نیز به صورت آرایه به صورت زیر مینویسیم تا مپ کردن روشون راخت تر باشه

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]


// --------------- url from backend

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
