import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import nowmiLogo from '@/assets/nowmi-logo.jpg'; // Import the logo

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-1">
            <img src={nowmiLogo} alt="NOWMI OMR Logo" className="h-9 mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Chennai's Premier Unisex Grooming Lounge. Your Growth, Our Expertise.
            </p>
            {/* Social media links can be added here */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Haircuts & Styling (Unisex)</li>
              <li>Skin & Facial Treatments</li>
              <li>Men's Grooming</li>
              <li>Spa & Wellness</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>OMR, Sholinganallur, Chennai - 600119</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>+91-44-1234-5678 (WhatsApp)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span>omr@nowmi.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 NOWMI OMR. All rights reserved. India's #1 Affordable Salon Franchise.</p>
        </div>
      </div>
    </footer>
  );
};