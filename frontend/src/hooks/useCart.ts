import { useState } from "react";

interface FoodItem {
    id: number;
    name: string;
    price: number;
    available: boolean;
    image: string;
}

export const useCart = () => {
    const [cart, setCart] = useState<FoodItem[]>([]);

    const addToCart = (item: FoodItem) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return { cart, addToCart, removeFromCart, clearCart, total };
};