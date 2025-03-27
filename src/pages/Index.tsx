
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

const featuresData = [
  {
    icon: '🍔',
    title: 'Food Delivery',
    description: 'Order your favorite meals from local restaurants and have them delivered to your doorstep quickly.'
  },
  {
    icon: '🛒',
    title: 'Grocery Shopping',
    description: 'Need groceries? We\'ll shop for you and deliver everything to your home.'
  },
  {
    icon: '📦',
    title: 'Package Pickup',
    description: 'We\'ll pick up your packages from the post office or any local store.'
  },
  {
    icon: '🩺',
    title: 'Medication Pickup',
    description: 'Don\'t feel well? We\'ll get your prescriptions from the pharmacy.'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Our Services
            </span>
            <h2 className="text-3xl font-bold mb-4">How can we help you today?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ByteNRun offers a variety of services to make your life easier. From food delivery to running errands, we've got you covered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresData.map((feature, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 hover-scale"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                
                {index === 0 ? (
                  <Link to="/menu" className="text-primary text-sm inline-flex items-center group">
                    <span className="story-link">Order now</span>
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <Link to="/errands" className="text-primary text-sm inline-flex items-center group">
                    <span className="story-link">Request now</span>
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Why Choose Us
                </span>
                <h2 className="text-3xl font-bold mb-4">Fast & Reliable Service</h2>
                <p className="text-muted-foreground mb-6">
                  Whether you're craving your favorite meal or need someone to run an errand for you, ByteNRun is here to help. Our reliable runners ensure your orders are delivered quickly.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Fast delivery within 30-45 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Reliable service with real-time tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Contactless delivery option available</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/menu" className="btn-primary">
                    Order Food
                  </Link>
                  <Link to="/errands" className="btn-secondary">
                    Request Errand
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-tr from-primary/20 to-primary/5 blur-xl opacity-70 -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1626198226928-95f99b3e94db?q=80&w=1000&auto=format&fit=crop" 
                  alt="Food Delivery" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ByteNRun</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Delicious food and reliable errands service, delivered to your door.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-4 uppercase tracking-wider">Services</h4>
              <ul className="text-sm space-y-2">
                <li><Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors duration-200">Food Delivery</Link></li>
                <li><Link to="/errands" className="text-muted-foreground hover:text-primary transition-colors duration-200">Grocery Shopping</Link></li>
                <li><Link to="/errands" className="text-muted-foreground hover:text-primary transition-colors duration-200">Package Pickup</Link></li>
                <li><Link to="/errands" className="text-muted-foreground hover:text-primary transition-colors duration-200">Medication Pickup</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-4 uppercase tracking-wider">Company</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ByteNRun. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.338-.012 2.417-.012 2.744 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16.539 16.906h-1.969v-3.781c0-.875-.018-2.004-1.219-2.004-1.22 0-1.405.955-1.405 1.943v3.842h-1.969V9.75h1.886v.863h.027c.31-.59 1.07-1.211 2.207-1.211 2.36 0 2.803 1.555 2.803 3.578v3.926zM8.513 8.886a1.14 1.14 0 11.14-1.142 1.141 1.141 0 01-1.14 1.142zm.984 8.02H7.528V9.75h1.969v7.156zM17.435 4.5H6.565a2.067 2.067 0 00-2.065 2.063v10.875A2.066 2.066 0 006.565 19.5h10.87a2.066 2.066 0 002.065-2.063V6.564A2.066 2.066 0 0017.435 4.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
