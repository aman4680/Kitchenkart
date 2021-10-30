import { icons, images } from '../../src/constants';
import Product from '../../model/product';

const PRODUCTS = [
    new Product(
        1,
        "Hawaiian Pizza",
        images.hawaiian_pizza,
        "Canadian bacon, homemade pizza crust, pizza sauce",
        250,
        150,
        4,
        150
    ),
    new Product(
        2,
        "Tomato & Basil Pizza",
        images.pizza,
        "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
        250,
        200,
        4,
        145
    ),
    new Product(
        3,
        "Tomato Noodles",
        images.tomato_pasta,
        "Noodles with fresh tomatoes",
        100,
        100,
        3,
        99        
    ),
    new Product(
        4,
        "Mediterranean Chopped Salad ",
        images.salad,
        "Finely chopped lettuce, tomatoes, cucumbers",
        100,
        100,
        3,
        222
    ),
    new Product(
        5,
        "Iced Milk Tea",
        images.teh_c_peng,
        "Iced Milk Tea recipe made with black tea, sweetened condensed milk",
        100,
        180,
        4,
        776
    ),
    new Product(
        6,
        "ABC Ice Kacang",
        images.ice_kacang,
        "Shaved Ice with red beans",
        100,
        150,
        3,
        112
    ),
    new Product(
        7,
        "Kek Lapis",
        images.kek_lapis,
        "Layer cakes",
        300,
        200,
        2,
        257
    ),
    new Product(
        8,
        "Chinese Style Noodles",
        images.kolo_mee,
        "Malaysian Style Chinese Noodles",
        200,
        230,
        4,
        348
    ),
    new Product(
        9,
        "Sarawak Laksa",
        images.sarawak_laksa,
        "Vermicelli noodles, cooked prawns",
        300,
        120,
        4,
        444
    ),
    new Product(
        10,
        "Nasi Lemak",
        images.nasi_lemak,
        "A traditional Malay rice dish",
        300,
        90,
        3,
        185
    ),
    new Product(
        11,
        "Nasi Briyani with Mutton",
        images.nasi_briyani_mutton,
        "A traditional Indian rice dish with mutton",
        300,
        180,
        4,
        514
    ),
]

export default PRODUCTS;