import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Award, Globe } from "lucide-react";
import villageLife from "@/assets/village-life.jpg";

export const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      subtitle: "समुदाय प्रथम",
      description: "Putting farmers and rural communities at the center of everything we do."
    },
    {
      icon: Target,
      title: "Transparency",
      subtitle: "पारदर्शिता",
      description: "Complete transparency in weighing, pricing, and payment processes."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      subtitle: "गुणवत्ता आश्वासन",
      description: "Maintaining highest standards in collection and processing."
    },
    {
      icon: Globe,
      title: "Sustainability",
      subtitle: "स्थिरता",
      description: "Creating a sustainable future through clean energy solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Saubhagya
          </h2>
          <p className="text-xl text-muted-foreground">
            सौभाग्य के बारे में
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={villageLife} 
                alt="Rural village life with sustainable farming practices"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Transforming Rural Economy
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Saubhagya is revolutionizing the way rural communities generate income from agricultural waste. 
              Our innovative platform connects farmers directly with biogas production facilities, ensuring 
              fair compensation and transparent processes.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Through IoT-enabled collection, GPS-tracked transportation, and same-day payments, we're 
              creating a sustainable ecosystem that benefits farmers, the environment, and local communities.
            </p>
            <Button variant="outline" size="lg" className="mr-4">
              Learn More
            </Button>
            <Button variant="default" size="lg">
              Join Our Mission
            </Button>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-warm transition-smooth group bg-background">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-lg ${
                index === 0 ? 'bg-gradient-hero' : 
                index === 1 ? 'bg-gradient-earth' : 
                index === 2 ? 'bg-gradient-warm' : 'bg-primary'
              } flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                <value.icon className="w-6 h-6 text-background" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-3 font-medium">
                {value.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};