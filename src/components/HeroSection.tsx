
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-secondary rounded-full animate-fade-in">
            Food Delivery & Errands Service
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance mb-6 animate-fade-in [animation-delay:200ms]">
            Delicious food and errands <span className="text-primary">delivered to your door</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in [animation-delay:400ms]">
            ByteNRun delivers your favorite meals and handles your errands, so you can focus on what matters. Fast, reliable, and convenient.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:600ms]">
            <Link to="/menu" className="btn-primary flex items-center justify-center gap-2">
              Order Food
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/errands" className="btn-secondary flex items-center justify-center gap-2">
              Request Errand
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center flex-col animate-fade-in [animation-delay:800ms]">
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
