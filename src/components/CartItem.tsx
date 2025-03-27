
import { Plus, Minus, Trash } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FoodItem } from './FoodCard';

interface CartItemProps {
  item: FoodItem;
  quantity: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({ item, quantity, onUpdateQuantity, onRemove }: CartItemProps) => {
  const incrementQuantity = () => {
    onUpdateQuantity(item.id, quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      onUpdateQuantity(item.id, quantity - 1);
    }
  };

  return (
    <div className="flex items-center py-4 animate-fade-in">
      <div className="h-16 w-16 overflow-hidden rounded-md">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center space-x-2 ml-4">
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
      
      <div className="ml-4 w-20 text-right font-medium">
        ${(item.price * quantity).toFixed(2)}
      </div>
      
      <Button 
        variant="ghost" 
        size="icon"
        className="ml-4 text-muted-foreground hover:text-destructive"
        onClick={() => onRemove(item.id)}
      >
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
