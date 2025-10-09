import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, MapPin, Calendar, CircleUser } from "lucide-react";

export const SuccessStories = () => {
  const featuredStory = {
    name: "Raman Singh",
    location: "Karnal, Haryana",
    icon: CircleUser,
    income: "₹18,000/month",
    cattle: "25 cattle",
    duration: "2 years with Saubhagya",
    quote: "Saubhagya has completely transformed my life. What used to be a waste problem is now my biggest income source. My children are getting better education, and we've built a new house.",
    details: "Raman started with just 10 cattle and gradually expanded his operations. Today, he's one of our most successful farmers, earning consistent income while contributing to clean energy production."
  };

  const stories = [
    {
      name: "Kamala Devi",
      location: "Amritsar, Punjab",
      icon: CircleUser,
      income: "₹12,000/month",
      cattle: "18 cattle",
      rating: 5,
      quote: "The best part is the transparency. I know exactly how much I'll earn and when I'll get paid.",
      achievement: "Funded daughter's engineering education"
    },
    {
      name: "Suresh Kumar",
      location: "Mathura, UP",
      icon: CircleUser,
      income: "₹15,000/month",
      cattle: "22 cattle",
      rating: 5,
      quote: "Same-day payments and fair pricing make this the most reliable income source on my farm.",
      achievement: "Purchased new farming equipment"
    },
    {
      name: "Lakshmi Bai",
      location: "Rohtak, Haryana",
      icon: CircleUser,
      income: "₹10,000/month",
      cattle: "15 cattle",
      rating: 5,
      quote: "As a widow, this income has given me financial independence and security for my family.",
      achievement: "Built new gaushala facility"
    },
    {
      name: "Balram Singh",
      location: "Ludhiana, Punjab",
      icon: CircleUser,
      income: "₹20,000/month",
      cattle: "30 cattle",
      rating: 5,
      quote: "Started small, now it's my primary business. The pickup service is always reliable.",
      achievement: "Expanded to 50 cattle operation"
    },
    {
      name: "Geeta Sharma",
      location: "Meerut, UP",
      icon: CircleUser,
      income: "₹8,000/month",
      cattle: "12 cattle",
      rating: 5,
      quote: "The IoT weighing gives me confidence that I'm getting fair payment for my materials.",
      achievement: "Started small grocery business"
    },
    {
      name: "Vijay Pal",
      location: "Sonipat, Haryana",
      icon: CircleUser,
      income: "₹16,000/month",
      cattle: "24 cattle",
      rating: 5,
      quote: "Environmental benefit plus income - couldn't ask for a better combination.",
      achievement: "Installed solar panels"
    }
  ];

  const stats = [
    { number: "1000+", label: "Success Stories", icon: Users },
    { number: "₹2Cr+", label: "Total Farmer Earnings", icon: TrendingUp },
    { number: "50+", label: "Villages Transformed", icon: MapPin },
    { number: "4.9/5", label: "Average Rating", icon: Star }
  ];

  const impactMetrics = [
    {
      title: "Average Income Increase",
      value: "30%",
      description: "Farmers see significant boost in their monthly earnings"
    },
    {
      title: "Payment Reliability",
      value: "100%",
      description: "On-time payments with zero delays or disputes"
    },
    {
      title: "Farmer Satisfaction",
      value: "4.9/5",
      description: "Consistently high ratings from our farming community"
    },
    {
      title: "Environmental Impact",
      value: "40%",
      description: "Reduction in methane emissions from participating farms"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium">
            सफलता की कहानियां
          </p>
          <p className="text-lg max-w-4xl mx-auto opacity-90">
            Real farmers, real income, real transformation. Discover how Saubhagya 
            is changing lives across rural India.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-warm transition-smooth">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg ${
                  index % 4 === 0 ? 'bg-gradient-hero' : 
                  index % 4 === 1 ? 'bg-gradient-earth' : 
                  index % 4 === 2 ? 'bg-gradient-warm' : 'bg-primary'
                } flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-background" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Success Story
            </h2>
            <p className="text-xl text-muted-foreground">
              प्रमुख सफलता की कहानी
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-warm">
              <div className="lg:flex">
                <div className="lg:w-1/2 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-12">
                  <div className="w-48 h-48 bg-gradient-hero rounded-full flex items-center justify-center shadow-2xl">
                    <featuredStory.icon className="w-24 h-24 text-background" />
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-background" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {featuredStory.name}
                      </h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {featuredStory.location}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">
                        {featuredStory.income}
                      </div>
                      <div className="text-sm text-muted-foreground">Monthly Income</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">
                        {featuredStory.cattle}
                      </div>
                      <div className="text-sm text-muted-foreground">Cattle Count</div>
                    </div>
                  </div>

                  <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    "{featuredStory.quote}"
                  </blockquote>

                  <p className="text-muted-foreground mb-6">
                    {featuredStory.details}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Calendar className="w-4 h-4" />
                    {featuredStory.duration}
                  </div>

                  <Button variant="default" size="lg">
                    Read Full Story
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* More Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              और भी सफलता की कहानियां
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-warm transition-smooth group">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-smooth">
                    <story.icon className="w-12 h-12 text-background" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {story.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {story.location}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-lg font-bold text-primary">
                        {story.income}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {story.cattle}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground text-right">
                      Achievement:<br />
                      <span className="font-medium">{story.achievement}</span>
                    </div>
                  </div>
                  
                  <blockquote className="text-sm text-muted-foreground italic">
                    "{story.quote}"
                  </blockquote>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Overall Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              समग्र प्रभाव
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-warm transition-smooth">
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {metric.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of farmers who have transformed their lives with Saubhagya. 
            Your success story could be next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground">
              Share Your Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;