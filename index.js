"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boilded Egg",
            price: 100,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "MOMOS",
            price: 125,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/momo.jpg",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 445,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 318,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 105,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "CHILLY PANEER",
            price: 155,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/paneer.jpg",
            type: "lunch",
        },
        {
            name: "SINGAPOREE CHOWMEEN",
            price: 225,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/singa.jpg",
            type: "breakfast",
        }, 
        {
            name: "MANCHURIAN",
            price: 105,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/manchurian.jpg",
            type: "breakfast",
        },
        {
            name: "FRIED RICE",
            price: 125,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/fried.jpg",
            type: "dinner",
        },
        {
            name: "VADA PAO",
            price: 55,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/vada.jpg",
            type: "breakfast",
        },
        {
            name: "GOL GAPPEY",
            price: 65,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/gol.jpg",
            type: "breakfast",
        },
        {
            name: "PIZZA",
            price: 255,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pizza.jpg",
            type: "lunch",
        },
        {
            name: "KURKUREY MOMOS",
            price: 155,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/kurkurey.jpg",
            type: "lunch",
        },
        {
            name: "EGG ROLL",
            price: 175,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/eggroll.jpg",
            type: "breakfast",
        },
        {
            name: "DOLLY KI TEA",
            price: 65,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/tea.jpg",
            type: "breakfast",
        },
        {
            name: "MODI SPECIAL TEA",
            price: 95,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/kullad.jpg",
            type: "breakfast",
        },
        {
            name: "FRENCH FRIES",
            price: 155,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/fries.jpg",
            type: "breakfast",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map