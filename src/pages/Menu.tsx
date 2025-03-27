
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import Navbar from '@/components/Navbar';
import FoodCard, { FoodItem } from '@/components/FoodCard';
import { useCart } from '@/context/CartContext';

// Mock data
const categories = ['All', 'Pizza', 'Burger', 'Sushi', 'Salad', 'Dessert', 'Drinks'];

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2000&auto=format&fit=crop',
    category: 'Pizza',
  },
  {
    id: 2,
    name: 'Cheeseburger',
    description: 'Juicy beef patty with cheese, lettuce, tomato, and special sauce.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000&auto=format&fit=crop',
    category: 'Burger',
  },
  {
    id: 3,
    name: 'California Roll',
    description: 'Sushi roll with crab, avocado, and cucumber.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2000&auto=format&fit=crop',
    category: 'Sushi',
  },
  {
    id: 4,
    name: 'Greek Salad',
    description: 'Fresh salad with tomatoes, cucumbers, olives, and feta cheese.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2000&auto=format&fit=crop',
    category: 'Salad',
  },
  {
    id: 5,
    name: 'Chocolate Cake',
    description: 'Rich, moist chocolate cake with chocolate ganache.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2000&auto=format&fit=crop',
    category: 'Dessert',
  },
  {
    id: 6,
    name: 'Iced Coffee',
    description: 'Cold brew coffee with milk and sweetener.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1525658874058-2022372543ea?q=80&w=2000&auto=format&fit=crop',
    category: 'Drinks',
  },
  {
    id: 7,
    name: 'Pepperoni Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and pepperoni.',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2000&auto=format&fit=crop',
    category: 'Pizza',
  },
  {
    id: 8,
    name: 'Avocado Toast',
    description: 'Toasted bread with smashed avocado, salt, and pepper.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e3?q=80&w=2000&auto=format&fit=crop',
    category: 'Salad',
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const filteredItems = foodItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      <div className="pt-24 pb-10 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in">Food Menu</h1>
          <p className="text-muted-foreground mb-6 animate-fade-in [animation-delay:200ms]">
            Browse our delicious menu and order your favorite meals
          </p>
          
          <div className="relative max-w-md animate-fade-in [animation-delay:400ms]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search for food..."
              className="pl-10 bg-white/70 backdrop-blur-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 animate-fade-in [animation-delay:600ms]">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-1.5 text-sm rounded-full transition-colors duration-200 ${
                  selectedCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-white/70 backdrop-blur-sm hover:bg-white'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((food, index) => (
            <div key={food.id} style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <FoodCard food={food} onAddToCart={addToCart} />
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No items found. Try a different search term or category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
