/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */
import colors from '../DDstyles/colors';

const offer1 = require('./photos/offer1.jpg');
const offer2= require('./photos/offer2.jpg');
const offer3= require('./photos/offer3.jpg');

const milk = require('./photos/milk.jpg');
const butter= require('./photos/butter.jpg');
const buttermilk = require('./photos/buttermilk.jpg');
const curd = require('./photos/curd.jpg');
const ghee = require('./photos/ghee.jpg');
const paneer = require('./photos/paneer.jpg');

export const productsData = [
  {
    id: 1,
    title: 'Cow milk',
    // cattleType: 'Cow',
    photo: milk,
    containerType: 'Glass Bottle',
    fatLevel: 'Low',
    price: '30',
    pricePerQuantityType: '/Lt',
  },
  {
    id: 2,
    title: 'Butter',
    // cattleType: 'Cow',
    photo: butter,
    containerType: 'Pouch',
    fatLevel: 'medium',
    price: '30',
    pricePerQuantityType: '/gm',
  },
  {
    id: 3,
    title: 'Butter Milk',
    photo: buttermilk,
    containerType: 'Pouch',
    fatLevel: 'high',
    price: '30',
    pricePerQuantityType: '/mL'
  },
  {
    id: 4,
    title: "Curd",
    photo: curd,
    containerType: 'Pouch',
    fatLevel: 'low',
    price: '34',
    pricePerQuantityType: '/mL',
  },
  {
    id: 5,
    title: "Shudh Cow Ghee",
    photo: ghee,
    containerType: 'Glass Bottle',
    fatLevel: 'High',
    price: '800',
    pricePerQuantityType: '/Kg',
  },
  {
    id: 6,
    title: 'Paneer',
    photo: paneer,
    containerType: 'Pouch',
    fatLevel: "medium",
    price: '46',
    priceType: '/Kg',
  },
];
