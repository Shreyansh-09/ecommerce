import { v4 as uuid } from "uuid";
// import {zandu_amla, thums_up, thar_aloe_vera, tang, sting, sprite, redbull, pepsi, ocean_natural, monster, kapiva_dia, green_apple_beer, cranberry_beer, aloe_vera, Amla, apple_cider, beast, coke} from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    name: 'Thums Up Soft Drink',
    // img: thums_up,
    price: 90,
    quantity: "2 l",
    category: 'soft drinks'
  },
  {
    id: uuid(),
    name: 'Sprite Lime Flavored Soft Drink',
    // img: sprite,
    price: 38,
    quantity: "750 ml",
    category: 'soft drinks'
  },
  {
    id: uuid(),
    name: 'Coca-Cola Diet Coke Soft Drink',
    // img: coke,
    price: 40,
    quantity: "300 ml",
    category: 'soft drinks'
  },
  {
    id: uuid(),
    name: 'Pepsi Soft Drink',
    // img: pepsi,
    price: 67,
    quantity: "1.5 l",
    category: 'soft drinks'
  },
  {
    id: uuid(),
    name: 'Coolberg Cranberry Non-Alcoholic Beer',
    // img: cranberry_beer,
    price: 89,
    quantity: "330 ml",
    category: 'soft drinks'
  },
  {
    id: uuid(),
    name: 'Budweiser Green Apple Beer',
    // img: green_apple_beer,
    price: 79,
    quantity: "330 ml",
    category: 'soft drinks'
  },
  {
    id: uuid(),
    name: 'Red Bull Energy Drink',
    // img: redbull,
    price: 125,
    quantity: "250 ml",
    category: 'energy drinks'
  },
  {
    id: uuid(),
    name: 'Tang instant Drink Mix - Mango',
    // img: tang,
    price: 143,
    quantity: "500 g",
    category: 'energy drinks'
  },
  {
    id: uuid(),
    name: 'Sting Energy Drink',
    // img: sting,
    price: 29,
    quantity: "250 ml",
    category: 'energy drinks'
  },
  {
    id: uuid(),
    name: 'Monster Energy Drink',
    // img: monster,
    price: 122,
    quantity: "350 ml",
    category: 'energy drinks'
  },
  {
    id: uuid(),
    name: 'Budweiser Beats energy Drink',
    // img: beast,
    price: 110,
    quantity: "250 ml",
    category: 'energy drinks'
  },
  {
    id: uuid(),
    name: 'Ocean Natural Energy Drink',
    // img: ocean_natural,
    price: 55,
    quantity: "250 ml",
    category: 'energy drinks'
  },
  {
    id: uuid(),
    name: 'Patanjali Amla Herbal Juice',
    // img: Amla,
    price: 140,
    quantity: "1 l",
    category: 'herbal drinks'
  },
  {
    id: uuid(),
    name: 'Patanjali Aloe Vera with Fibre Herbal Juice',
    // img: aloe_vera,
    price: 210,
    quantity: "1 l",
    category: 'herbal drinks'
  },
  {
    id: uuid(),
    name: 'Kapiva Thar Aloe Vra Herbal Juice',
    // img: thar_aloe_vera,
    price: 270,
    quantity: "1 l",
    category: 'herbal drinks'
  },
  {
    id: uuid(),
    name: 'Kapiva Dia Free Herbal Juice',
    // img: kapiva_dia,
    price: 522,
    quantity: "1 l",
    category: 'herbal drinks'
  },
  {
    id: uuid(),
    name: 'Zandu Amla + 5 Herbs Health Juice',
    // img: zandu_amla,
    price: 215,
    quantity: "1 l",
    category: 'herbal drinks'
  },
  {
    id: uuid(),
    name: 'WOW Life Science Apple Cider Organic Vinegar',
    // img: apple_cider,
    price: 474,
    quantity: "750 ml",
    category: 'herbal drinks'
  }
]