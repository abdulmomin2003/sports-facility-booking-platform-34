
import React from 'react';
import { Activity, Dumbbell, Trophy, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  const features = [
    {
      icon: <Activity className="h-12 w-12 mb-4" />,
      title: 'Team Sports',
      description: 'Cricket, football, basketball, volleyball and more. Find the perfect court or field for your team.',
      delay: '0.3s',
    },
    {
      icon: <Dumbbell className="h-12 w-12 mb-4" />,
      title: 'Fitness & Training',
      description: 'Modern gyms and specialized training facilities to help you reach your fitness goals.',
      delay: '0.5s',
    },
    {
      icon: <Trophy className="h-12 w-12 mb-4" />,
      title: 'Recreational Games',
      description: 'Snooker, pool, table tennis and other indoor games for casual fun and entertainment.',
      delay: '0.7s',
    },
    {
      icon: <Users className="h-12 w-12 mb-4" />,
      title: 'Gaming Lounges',
      description: 'Cozy gaming spaces with modern setups for esports and casual gaming sessions.',
      delay: '0.9s',
    },
  ];

  return (
    <section id="features" className={cn("py-24 container", className)}>
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
          Categories
        </span>
        <h2 className="heading-lg mb-4">Sports Facilities for Every Need</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
          Discover and book from our wide range of high-quality sports facilities for any activity or event.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="glass rounded-2xl p-8 flex flex-col items-center text-center opacity-0 animate-fade-in hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
            style={{ animationDelay: feature.delay }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-foreground/70 text-balance">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
