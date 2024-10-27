'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'END-TO-END DEVELOPMENT',
      subtitle: '// We Create Leading Digital Products',
      description: 'We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    }
  ];

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/40" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <p className="text-blue-400 mb-2">{slides[currentSlide].subtitle}</p>
          <h1 className="text-5xl font-bold text-white mb-6">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-200 mb-8 text-lg">
            {slides[currentSlide].description}
          </p>
          <div>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
        onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}