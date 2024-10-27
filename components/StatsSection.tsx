export default function StatsSection() {
    return (
      <div className="bg-[#1A1F3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/40" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">15+</div>
                    <div className="text-xl text-white">Countries Worldwide</div>
                    <p className="text-gray-300 mt-2 max-w-sm mx-auto">
                      To succeed, every software solution must be deeply integrated into the existing tech ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/40" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">23k</div>
                    <div className="text-xl text-white">Happy Customers</div>
                    <p className="text-gray-300 mt-2 max-w-sm mx-auto">
                      To succeed, every software solution must be deeply integrated into the existing tech ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }