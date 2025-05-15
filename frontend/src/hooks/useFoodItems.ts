import { useState } from "react";

interface FoodItem {
    id: number;
    name: string;
    price: number;
    available: boolean;
    image: string;
}

export const useFoodItems = () => {
    const [foodItems, setFoodItems] = useState<FoodItem[]>([
        { id: 1, name: "Burger", price: 500, available: true, image: "/images/burger.jpg" },
        { id: 2, name: "Pizza", price: 800, available: true, image: "/images/pizza.jpg" },
        { id: 3, name: "Pasta", price: 600, available: false, image: "/images/pasta.jpg" },
        { id: 4, name: "Fries", price: 300, available: true, image: "/images/fries.jpg" },
    ]);

    const searchFoodItems = (query: string) => {
        setFoodItems((prevItems) =>
            prevItems.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
        );
    };

    return { foodItems, searchFoodItems };
};