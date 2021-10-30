import { icons, images, SIZES, COLORS, FONTS } from '../../src/constants';

export const categoryData = [
    {
        id: 1,
        name: "Rice",
        icon: icons.rice_bowl,
    },
    {
        id: 2,
        name: "Noodles",
        icon: icons.noodle,
    },
    {
        id: 3,
        name: "Hot Dogs",
        icon: icons.hotdog,
    },
    {
        id: 4,
        name: "Salads",
        icon: icons.salad,
    },
    {
        id: 5,
        name: "Burgers",
        icon: icons.hamburger,
    },
    {
        id: 6,
        name: "Pizza",
        icon: icons.pizza,
    },
    {
        id: 7,
        name: "Snacks",
        icon: icons.fries,
    },
    {
        id: 8,
        name: "Sushi",
        icon: icons.sushi,
    },

]

// price rating
const affordable = 1
const fairPrice = 2
const expensive = 3

export const restaurantData = [
    {
        id: 1,
        name: "ByProgrammers Burger",
        rating: 4.8,
        // categories: [5, 7],
        priceRating: affordable,
        photo: images.burger_restaurant_1,
        duration: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
        courier: {
            avatar: images.avatar_1,
            name: "Amy"
        },
        menu: [
            {
                menuId: 1,
                name: "Crispy Chicken Burger",
                photo: images.crispy_chicken_burger,
                description: "Burger with crispy chicken, cheese and lettuce",
                calories: 200,
                price: 10
            },
            {
                menuId: 2,
                name: "Crispy Chicken Burger with Honey Mustard",
                photo: images.honey_mustard_chicken_burger,
                description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                calories: 250,
                price: 15
            },
            {
                menuId: 3,
                name: "Crispy Baked French Fries",
                photo: images.baked_fries,
                description: "Crispy Baked French Fries",
                calories: 194,
                price: 8
            }
        ]
    },
    {
        id: 2,
        name: "ByProgrammers Pizza",
        rating: 4.8,
        // categories: [2, 4, 6],
        priceRating: expensive,
        photo: images.pizza_restaurant,
        duration: "15 - 20 min",
        location: {
            latitude: 1.556306570595712,
            longitude: 110.35504616746915,
        },
        courier: {
            avatar: images.avatar_2,
            name: "Jackson"
        },
        menu: [
            {
                menuId: 4,
                name: "Hawaiian Pizza",
                photo: images.hawaiian_pizza,
                description: "Canadian bacon, homemade pizza crust, pizza sauce",
                calories: 250,
                price: 150
            },
            {
                menuId: 5,
                name: "Tomato & Basil Pizza",
                photo: images.pizza,
                description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                calories: 250,
                price: 200
            },
            {
                menuId: 6,
                name: "Tomato Noodles",
                photo: images.tomato_pasta,
                description: "Noodles with fresh tomatoes",
                calories: 100,
                price: 100
            },
            {
                menuId: 7,
                name: "Mediterranean Chopped Salad ",
                photo: images.salad,
                description: "Finely chopped lettuce, tomatoes, cucumbers",
                calories: 100,
                price: 100
            },
            {
                menuId: 8,
                name: "Iced Milk Tea",
                photo: images.teh_c_peng,
                description: "Iced Milk Tea recipe made with black tea, sweetened condensed milk",
                calories: 100,
                price: 180
            },
            {
                menuId: 9,
                name: "ABC Ice Kacang",
                photo: images.ice_kacang,
                description: "Shaved Ice with red beans",
                calories: 100,
                price: 130
            },
            {
                menuId: 10,
                name: "Kek Lapis",
                photo: images.kek_lapis,
                description: "Layer cakes",
                calories: 300,
                price: 200
            },
            {
                menuId: 11,
                name: "Chinese Style Noodles",
                photo: images.kolo_mee,
                description: "Malaysian Style Chinese Noodles",
                calories: 200,
                price: 230
            },
            {
                menuId: 12,
                name: "Sarawak Laksa",
                photo: images.sarawak_laksa,
                description: "Vermicelli noodles, cooked prawns",
                calories: 300,
                price: 80
            },
            {
                menuId: 13,
                name: "Nasi Lemak",
                photo: images.nasi_lemak,
                description: "A traditional Malay rice dish",
                calories: 300,
                price: 160
            },
            {
                menuId: 14,
                name: "Nasi Briyani with Mutton",
                photo: images.nasi_briyani_mutton,
                description: "A traditional Indian rice dish with mutton",
                calories: 300,
                price: 180
            },
        ]
    },
    {
        id: 3,
        name: "ByProgrammers Hotdogs",
        rating: 4.8,
        categories: [3],
        priceRating: expensive,
        photo: images.hot_dog_restaurant,
        duration: "20 - 25 min",
        location: {
            latitude: 1.5238753474714375,
            longitude: 110.34261833833622,
        },
        courier: {
            avatar: images.avatar_3,
            name: "James"
        },
        menu: [
            {
                menuId: 8,
                name: "Chicago Style Hot Dog",
                photo: images.chicago_hot_dog,
                description: "Fresh tomatoes, all beef hot dogs",
                calories: 100,
                price: 20
            }
        ]
    },

]

const resData = { categoryData, restaurantData };

export default resData;