
import { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface FoodCardProps {
  food: FoodItem;
  onAddToCart: (item: FoodItem, quantity: number) => void;
}

const FoodCard = ({ food, onAddToCart }: FoodCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    onAddToCart(food, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} × ${food.name} added to your cart`,
    });
  };

  return (
    <div 
      className="glass-card rounded-xl overflow-hidden card-hover animate-scale-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-foreground">
          ${food.price.toFixed(2)}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg mb-1">{food.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{food.description}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8 rounded-full" 
              onClick={decrementQuantity}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-6 text-center">{quantity}</span>
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8 rounded-full" 
              onClick={incrementQuantity}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button 
            variant="default"
            size="sm"
            className="rounded-full"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
