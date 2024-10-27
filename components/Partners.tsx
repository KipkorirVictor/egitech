export default function Partners() {
    const partners = [
      { name: 'Today', logo: '/placeholder-logo-1.svg' },
      { name: 'Atomic SEO', logo: '/placeholder-logo-2.svg' },
      { name: 'Blockchain', logo: '/placeholder-logo-3.svg' },
      { name: 'SEO Mind', logo: '/placeholder-logo-4.svg' },
      { name: 'IBM Media', logo: '/placeholder-logo-5.svg' },
      { name: 'Assessment', logo: '/placeholder-logo-6.svg' },
    ];
  
    return (
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 items-center justify-items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="col-span-1 flex justify-center md:col-span-1">
                <img
                  className="h-12 grayscale opacity-50 hover:opacity-100 transition-opacity"
                  src={partner.logo}
                  alt={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }