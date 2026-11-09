
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/data/site";
import { footerNav } from "@/data/navigation";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const location = useLocation();

  const socials = [
    { label: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
    { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
    { label: "YouTube", href: siteConfig.social.youtube, icon: Youtube },
    {
      label: "WhatsApp Channel",
      href: siteConfig.social.whatsapp,
      icon: MessageCircle,
    },
  ].filter((social) => Boolean(social.href));

  const scrollSameSection = (href: string) => {
    if (href.startsWith("/#") && location.pathname === "/" && location.hash === href.slice(1)) {
      document.getElementById(href.slice(2))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-wide py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Organization Information */}
          <div>
            {/* White Footer Logo */}
            <div className="mb-6">
              <Link
                to="/"
                aria-label="Ephesus School Outreach Home"
                className="inline-flex items-center"
              >
                <img
                  src="/images/ephesus-logo-white.png"
                  alt="Ephesus School Outreach"
                  width={200}
                  height={80}
                  loading="lazy"
                  className="h-16 w-auto max-w-[200px] object-contain"
                />
              </Link>
            </div>

            <p className="max-w-sm text-sm leading-7 text-navy-200">
              {siteConfig.shortDescription}
            </p>

            {/* Social Media */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-navy-200 transition duration-300 hover:-translate-y-1 hover:bg-[#713BFF] hover:text-white"
                >
                  <social.icon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              {footerNav.explore.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => scrollSameSection(link.to)}
                    className="text-navy-200 transition duration-200 hover:text-[#D7FF35]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Resources
            </h3>

            <ul className="space-y-3 text-sm">
              {footerNav.resources.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => scrollSameSection(link.to)}
                    className="text-navy-200 transition duration-200 hover:text-[#D7FF35]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>

            <ul className="space-y-4 text-sm text-navy-200">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#D7FF35]"
                  aria-hidden="true"
                />
                <span>{siteConfig.contact.address}</span>
              </li>

              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#D7FF35]"
                  aria-hidden="true"
                />
                <a
                  href={siteConfig.contact.phoneHref}
                  className="transition hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#D7FF35]"
                  aria-hidden="true"
                />
                <a
                  href={siteConfig.contact.emailHref}
                  className="break-all transition hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-8 sm:flex-row">
          <p className="text-center text-sm text-navy-300 sm:text-left">
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 rounded-full bg-navy-800 px-5 py-2.5 text-sm text-navy-200 transition duration-300 hover:bg-[#713BFF] hover:text-white"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
