import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side with text content */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-800">I&apos;m Saddam Safi, an</span> <span className="text-primary">Elementor Expert</span> <span className="text-gray-800">Website Developer</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Welcome to my digital realm! I&apos;m Saddam Hussain, a WordPress maestro from Toronto&apos;s buzzing core. 
              I weave websites with swagger—sharp designs, smooth flow, and a spark of city soul. 
              Your vision gets my crafty spin, shining bright in the online glow. Let&apos;s create something epic together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="btn btn-primary px-8 py-3 rounded">
                See My Work
              </Link>
              <Link href="/contact-us" className="btn btn-secondary px-8 py-3 rounded">
                Get In Touch
              </Link>
            </div>
          </div>
          
          {/* Right side with image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-gray-200 animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden">
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Saddam Safi" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
