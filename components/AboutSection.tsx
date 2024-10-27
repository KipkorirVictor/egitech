/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';
import { Settings, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold mb-2">A ABOUT COMPANY</p>
            <h2 className="text-4xl font-bold mb-6">Your Partner for Software Innovation</h2>
            <p className="text-gray-600 mb-8">
              Engitech is the partner of choice for many of the world's leading
              enterprises, SMEs and technology challengers. We help businesses
              elevate their value through custom software development, product
              design, QA and consultancy services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Experience</h3>
                  <p className="text-gray-600">Our great team of more than 1400 software experts.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quick Support</h3>
                  <p className="text-gray-600">We'll help you test bold new ideas while sharing your risks.</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              LEARN MORE ABOUT US
            </Button>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team meeting"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Office space"
                className="rounded-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}