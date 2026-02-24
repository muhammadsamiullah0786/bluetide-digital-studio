'use client';
import Image from 'next/image';
import Link from 'next/link';
import { siteData } from '@/data/site';
import SocialIcons from '@/components/ui/SocialIcons';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-dark to-black text-white">
      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-accent via-blue-500 to-accent" />
      
      <div className="py-20 px-4">
        <Container>
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
            {/* About */}
            <div>
              <div className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 mb-6 hover:bg-white/15 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="BlueTide Digital Studio"
                  width={220}
                  height={68}
                  className="h-14 md:h-16 w-auto"
                  unoptimized
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {siteData.footer.about}
              </p>
              <div className="flex gap-3">
                {siteData.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon name={social.icon} size={18} className="text-white group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4">
                {siteData.footer.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-accent transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="inline-block w-0 group-hover:w-1.5 h-4 bg-accent mr-0 group-hover:mr-3 rounded transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
              <ul className="space-y-4">
                {siteData.footer.services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-accent transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="inline-block w-0 group-hover:w-1.5 h-4 bg-accent mr-0 group-hover:mr-3 rounded transition-all duration-300" />
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
              <ul className="space-y-4">
                {siteData.footer.contact.map((contact, index) => (
                  <li key={index}>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-gray-300 hover:text-accent transition-all duration-300 text-sm group block"
                      >
                        <span className="font-semibold text-white group-hover:text-accent transition-colors">
                          {contact.label}
                        </span>
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{contact.value}</span>
                      </a>
                    ) : (
                      <div className="text-sm">
                        <span className="font-semibold text-white">{contact.label}</span>
                        <p className="text-gray-400">{contact.value}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="text-center text-gray-400 text-xs">
            <p className="mb-2">
              © {currentYear} BlueTide Digital Studio. All rights reserved.
            </p>
            <p>
              {siteData.footer.location}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
