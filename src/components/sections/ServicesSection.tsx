import Link from 'next/link';
import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Crafting custom websites tailored to unique goals, blending creativity with technical precision. Delivering flawless performance that reflects the brand\'s identity with every project.',
      icon: '/images/web-dev-icon.svg',
      link: '/services#web-development'
    },
    {
      id: 'e-commerce',
      title: 'E-Commerce',
      description: 'Designing secure, scalable online stores that streamline transactions and elevate customer trust.',
      icon: '/images/ecommerce-icon.svg',
      link: '/services#e-commerce'
    },
    {
      id: 'seo',
      title: 'SEO',
      description: 'Optimizing websites to boost search engine rankings and visibility.',
      icon: '/images/seo-icon.svg',
      link: '/services#seo'
    },
    {
      id: 'ui-ux',
      title: 'UI/UX',
      description: 'Creating intuitive, engaging user interfaces that enhance user experience and satisfaction.',
      icon: '/images/ui-ux-icon.svg',
      link: '/services#ui-ux'
    },
    {
      id: 'marketing',
      title: 'Marketing',
      description: 'Developing effective digital marketing strategies to increase brand awareness and drive conversions.',
      icon: '/images/marketing-icon.svg',
      link: '/services#marketing'
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      description: 'Providing ongoing website maintenance and support to ensure optimal performance and security.',
      icon: '/images/maintenance-icon.svg',
      link: '/services#maintenance'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Offering</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Crafting custom websites tailored to unique goals, blending creativity with technical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="mb-4 h-48 relative">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 relative">
                    <Image 
                      src={service.icon || '/images/placeholder.svg'} 
                      alt={service.title}
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link} className="text-primary font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn btn-primary px-8 py-3 rounded-md">
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
