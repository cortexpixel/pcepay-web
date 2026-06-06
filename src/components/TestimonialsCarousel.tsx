"use client";
import { useState, useEffect, useCallback } from 'react';
import { Quote } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const testimonials = [
  {
    quote: "The payroll team has done an outstanding job, consistently delivering prompt, professional, and courteous service. Their responsiveness, attention to customer needs, and ability to handle concerns effectively are highly commendable. Their professionalism has significantly elevated the company's standards, and I would confidently recommend their services to any organization.",
    author: "Christian Onyekachi Eneh",
    role: "Direct Medics",
  },
  {
    quote: "I've received excellent service from Peace Payroll. Your prompt responses and support are greatly appreciated.",
    author: "David",
    role: "Eleada",
  },
];

export const TestimonialsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about Peace Payroll.
          </p>
          <div className="w-24 h-1 accent-gradient mx-auto mt-6 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 h-full flex flex-col hover:shadow-card-hover hover:border-accent/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Quote className="w-6 h-6 text-accent" />
                    </div>
                    <blockquote className="flex-1">
                      <p className="text-foreground italic leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>
                    <footer className="border-t border-border/50 pt-4">
                      <p className="font-display font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role}
                      </p>
                    </footer>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-accent text-accent-foreground hover:bg-accent/90 border-none" />
              
              {/* Dot Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === current 
                        ? 'bg-accent w-6' 
                        : 'bg-accent/30 hover:bg-accent/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <CarouselNext className="static translate-y-0 bg-accent text-accent-foreground hover:bg-accent/90 border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
