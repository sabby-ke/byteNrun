
import { ShoppingBag, ArrowRight, Trash } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/Navbar';
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Order Placed",
      description: "Your order has been placed successfully!",
    });
    clearCart();
  };

  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in">Your Cart</h1>
          <p className="text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Review your items before checkout
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 animate-scale-in">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Cart Items ({cartItems.length})</h2>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={clearCart}
                  >
                    <Trash className="h-4 w-4 mr-2" />
                    Clear Cart
                  </Button>
                </div>
                
                <Separator className="mb-4" />
                
                <div className="space-y-1">
                  {cartItems.map((cartItem, index) => (
                    <div key={cartItem.item.id}>
                      <CartItem 
                        item={cartItem.item} 
                        quantity={cartItem.quantity}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeFromCart}
                      />
                      {index < cartItems.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24 animate-scale-in [animation-delay:200ms]">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>$3.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${(subtotal * 0.08).toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${(subtotal + 3.99 + subtotal * 0.08).toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full" onClick={handleCheckout}>
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 animate-scale-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Button asChild>
              <a href="/menu">Browse Menu</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
