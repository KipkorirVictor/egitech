import { Button } from '@/components/ui/button';
import { MonitorSmartphone, Code, BarChart3, Shield } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Product Design',
      description: 'Our product design service lets you prototype, test and validate your ideas.',
      icon: MonitorSmartphone,
    },
    {
      title: 'Development',
      description: 'Our development service lets you prototype, test and validate your ideas.',
      icon: Code,
    },
    {
      title: 'Data Analytics',
      description: 'Our data analytics service lets you prototype, test and validate your ideas.',
      icon: BarChart3,
    },
    {
      title: 'Cyber Security',
      description: 'Our cyber security service lets you prototype, test and validate your ideas.',
      icon: Shield,
    },
  ];

  return (
    <div className="bg-[#1A1F3D] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Design the Concept
            <br />
            of Your Business Idea Now
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#252B4D] p-6 rounded-lg hover:bg-[#2A305A] transition-colors"
            >
              <service.icon className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Button variant="link" className="text-blue-400 p-0 hover:text-blue-300">
                LEARN MORE →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}