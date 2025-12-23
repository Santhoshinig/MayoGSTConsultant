import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Engineer, Bangalore",
      content: "Filing my ITR was so easy with Mayo Consultant. Got my refund in just 15 days! The support team was very helpful.",
      rating: 5,
      avatar: "RK",
    },
    {
      name: "Priya Sharma",
      role: "Business Owner, Mumbai",
      content: "The GST filing service at ₹199 is unbeatable. I've been using it for 2 years now. Highly recommended!",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Amit Patel",
      role: "CA, Ahmedabad",
      content: "Mayo CRM has transformed how I manage my clients. The free plan has everything I need. Thank you!",
      rating: 5,
      avatar: "AP",
    },
    {
      name: "Sunita Reddy",
      role: "Freelancer, Hyderabad",
      content: "As a freelancer with multiple income sources, I was worried about filing. The expert assistance made it stress-free.",
      rating: 5,
      avatar: "SR",
    },
    {
      name: "Mohammed Ali",
      role: "Small Business Owner, Chennai",
      content: "Best tax filing platform I've used. The old vs new regime calculator helped me save ₹50,000 in taxes!",
      rating: 5,
      avatar: "MA",
    },
    {
      name: "Kavita Nair",
      role: "Teacher, Kerala",
      content: "Simple interface, quick processing, and excellent customer support. What more can you ask for?",
      rating: 5,
      avatar: "KN",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by <span className="text-primary">50,000+</span> Customers
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-card border-border hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
