
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/Navbar';
import ErrandCard, { ErrandType } from '@/components/ErrandCard';

// Mock data
const errandTypes: ErrandType[] = [
  {
    id: 1,
    title: 'Grocery Shopping',
    description: 'We\'ll shop for your groceries and deliver them to your doorstep.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3081/3081840.png',
    color: '#3B82F6',
  },
  {
    id: 2,
    title: 'Package Pickup',
    description: 'We\'ll pick up your packages from the post office or any local store.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
    color: '#10B981',
  },
  {
    id: 3,
    title: 'Medication Pickup',
    description: 'We\'ll get your prescriptions from the pharmacy.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
    color: '#EF4444',
  },
  {
    id: 4,
    title: 'Return Items',
    description: 'We\'ll return items to stores on your behalf.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3144/3144456.png',
    color: '#F59E0B',
  },
  {
    id: 5,
    title: 'Wait in Line',
    description: 'We\'ll wait in line for you at popular places or events.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png',
    color: '#8B5CF6',
  },
  {
    id: 6,
    title: 'Custom Errand',
    description: 'Need something else? Let us know and we\'ll help you out.',
    icon: 'https://cdn-icons-png.flaticon.com/512/471/471664.png',
    color: '#EC4899',
  },
];

const Errands = () => {
  const [selectedErrand, setSelectedErrand] = useState<ErrandType | null>(null);
  const [formData, setFormData] = useState({
    address: '',
    instructions: '',
    date: '',
    time: '',
  });
  const { toast } = useToast();

  const handleErrandSelect = (errand: ErrandType) => {
    setSelectedErrand(errand);
    window.scrollTo({ top: document.getElementById('request-form')?.offsetTop, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.address || !formData.date || !formData.time) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Errand Requested",
      description: "Your errand request has been submitted successfully!",
    });
    
    // Reset form
    setFormData({
      address: '',
      instructions: '',
      date: '',
      time: '',
    });
    setSelectedErrand(null);
  };

  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      <div className="pt-24 pb-10 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in">Errand Services</h1>
          <p className="text-muted-foreground mb-6 max-w-2xl animate-fade-in [animation-delay:200ms]">
            Need something done? Let us help you with your errands. Select the type of errand you need assistance with.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {errandTypes.map((errand, index) => (
            <div key={errand.id} style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <ErrandCard errand={errand} onSelect={handleErrandSelect} />
            </div>
          ))}
        </div>
        
        <div id="request-form" className="max-w-2xl mx-auto pt-10">
          <div className="glass-card rounded-xl p-8 animate-scale-in">
            <h2 className="text-2xl font-bold mb-6">
              {selectedErrand 
                ? `Request ${selectedErrand.title} Service`
                : 'Request Errand Service'
              }
            </h2>
            
            {!selectedErrand && (
              <p className="text-muted-foreground mb-6">
                Please select an errand type from the options above to get started.
              </p>
            )}
            
            {selectedErrand && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2">
                    Delivery Address *
                  </label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Enter your full address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      Date *
                    </label>
                    <Input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium mb-2">
                      Time *
                    </label>
                    <Input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="instructions" className="block text-sm font-medium mb-2">
                    Special Instructions
                  </label>
                  <Textarea
                    id="instructions"
                    name="instructions"
                    placeholder="Tell us any specific details about your errand request"
                    value={formData.instructions}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Submit Request
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errands;
