
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export interface ErrandType {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface ErrandCardProps {
  errand: ErrandType;
  onSelect: (errand: ErrandType) => void;
}

const ErrandCard = ({ errand, onSelect }: ErrandCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 h-full flex flex-col justify-between card-hover animate-scale-in">
      <div>
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: `${errand.color}20` }}
        >
          <img src={errand.icon} alt={errand.title} className="w-6 h-6" />
        </div>
        <h3 className="font-medium text-lg mb-2">{errand.title}</h3>
        <p className="text-sm text-muted-foreground">{errand.description}</p>
      </div>
      
      <Button 
        variant="ghost" 
        className="mt-4 group justify-start p-0 hover:bg-transparent"
        onClick={() => onSelect(errand)}
      >
        <span className="story-link">Request this errand</span>
        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default ErrandCard;
