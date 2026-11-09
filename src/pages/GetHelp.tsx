import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/ui/PageHero";
import FormEmbed from "@/components/forms/FormEmbed";
import SectionHeading from "@/components/ui/SectionHeading";
import { HeartHandshake, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { aboutImages } from "@/data/images";

export default function GetHelp() {
  return (
    <>
      <SEOHead
        title="Get Help"
        description="Need support, prayer, or someone to talk to? Reach out to Ephesus Missions & Outreach."
        path="/get-help"
      />

      <PageHero
        eyebrow="Support"
        title="Get Help"
        subtitle="If you need support, prayer, or someone to talk to — we're here for you. You are not alone."
        image={aboutImages.community}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-royal-50 text-royal-500">
              <HeartHandshake className="h-8 w-8" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-navy-800">You Are Not Alone</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-light">
              Whatever you're going through, we're here to walk alongside you. Reach out and let us
              know how we can support you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <a
              href={siteConfig.contact.phoneHref}
              className="card-base flex items-center gap-5 p-6 transition hover:shadow-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-royal-50 text-royal-500">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-navy-800">Call Us</h3>
                <p className="mt-1 text-sm text-ink-light">{siteConfig.contact.phone}</p>
              </div>
            </a>
            <a
              href={siteConfig.contact.emailHref}
              className="card-base flex items-center gap-5 p-6 transition hover:shadow-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-royal-50 text-royal-500">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-navy-800">Email Us</h3>
                <p className="mt-1 text-sm text-ink-light">{siteConfig.contact.email}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cloud">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Reach Out"
              title="Tell Us How We Can Help"
              subtitle="Fill out the form below and someone from our team will reach out to you."
              align="center"
            />
            <div className="mt-10">
              <FormEmbed
                src={siteConfig.forms.getHelp}
                title="Get Help — Support Request"
                height="640px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
