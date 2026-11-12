import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/ui/PageHero";
import ContactCard from "@/components/ui/ContactCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { aboutImages } from "@/data/images";

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us"
        description={`Get in touch with ${siteConfig.name}. Phone, email, and location details.`}
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="We'd love to hear from you. Whether you have a question, want to partner, or need support — reach out."
        image={aboutImages.hero}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Contact Information"
              title="Reach Out Anytime"
              subtitle="Use any of the methods below to connect with us."
              align="center"
            />
            <div className="mt-8 sm:mt-10">
              <ContactCard />
            </div>

            <div className="mt-10 rounded-2xl bg-cloud p-6 text-center sm:mt-12 sm:p-8">
              <h3 className="text-xl font-bold text-navy-800">Connect With Us</h3>
              <p className="mt-3 text-ink-light">
                Follow us on social media to stay updated on our outreach activities and events.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-700 ring-1 ring-cloud-dark transition hover:bg-royal-500 hover:text-white"
                >
                  Facebook
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-700 ring-1 ring-cloud-dark transition hover:bg-royal-500 hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-700 ring-1 ring-cloud-dark transition hover:bg-royal-500 hover:text-white"
                >
                  YouTube
                </a>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-700 ring-1 ring-cloud-dark transition hover:bg-royal-500 hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
