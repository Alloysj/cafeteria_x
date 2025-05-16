import { useState } from "react";

interface FoodItem {
    id: number;
    name: string;
    price: number;
    available: boolean;
    image: string;
    category: string;
    prepTime: number;
    rating: number;
}

export const useFoodItems = () => {
    const [foodItems] = useState<FoodItem[]>([
        // Hot Beverages
        { id: 1, name: "Tea Cup", price: 30, available: true, image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Hot Beverages", prepTime: 5, rating: 4.2 },
        { id: 2, name: "African Tea", price: 40, available: true, image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Hot Beverages", prepTime: 7, rating: 4.5 },
        { id: 3, name: "White Coffee", price: 50, available: true, image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Hot Beverages", prepTime: 5, rating: 4.3 },
        
        // Cold Drinks
        { id: 4, name: "Soda 500ml", price: 60, available: true, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Cold Drinks", prepTime: 1, rating: 4.0 },
        { id: 5, name: "Mineral Water 1 ltr", price: 80, available: true, image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Cold Drinks", prepTime: 1, rating: 4.1 },
        { id: 6, name: "Blended Fruit Juice", price: 60, available: true, image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Cold Drinks", prepTime: 5, rating: 4.6 },
        
        // Snacks
        { id: 7, name: "Ndazi", price: 30, available: true, image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Snacks", prepTime: 10, rating: 4.4 },
        { id: 8, name: "Samosa", price: 40, available: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Snacks", prepTime: 15, rating: 4.7 },
        { id: 9, name: "Chapati", price: 30, available: true, image: "https://images.unsplash.com/photo-1630910392840-7947d3877f0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Snacks", prepTime: 20, rating: 4.8 },
        
        // Buffalo Special Breakfast
        { id: 10, name: "Special Samosa", price: 100, available: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Buffalo Special", prepTime: 15, rating: 4.9 },
        { id: 11, name: "Special Kebab", price: 120, available: true, image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Buffalo Special", prepTime: 20, rating: 4.8 },
        
        // Main Dishes
        { id: 12, name: "Githeri", price: 100, available: true, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Main Dishes", prepTime: 25, rating: 4.5 },
        { id: 13, name: "Ugali Sukuma", price: 120, available: true, image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Main Dishes", prepTime: 30, rating: 4.7 },
        { id: 14, name: "Ugali Beef", price: 220, available: true, image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Main Dishes", prepTime: 35, rating: 4.9 },
        { id: 15, name: "Matoke Beef", price: 220, available: true, image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Main Dishes", prepTime: 40, rating: 4.8 },
        
        // Chips & Chicken
        { id: 16, name: "Chips Plain", price: 120, available: true, image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Chips & Chicken", prepTime: 20, rating: 4.6 },
        { id: 17, name: "Chips & Quarter Chicken", price: 320, available: true, image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Chips & Chicken", prepTime: 30, rating: 4.9 },
        { id: 18, name: "Chips Beef Stew", price: 270, available: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", category: "Chips & Chicken", prepTime: 25, rating: 4.7 }
    ]);

    return { foodItems: [...foodItems] };
};