import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/ui/PageHero";
import FormEmbed from "@/components/forms/FormEmbed";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { aboutImages } from "@/data/images";

export default function Listen() {
  return (
    <>
      <SEOHead
        title="Listen"
        description="Access messages, resources, and content from Ephesus Missions & Outreach."
        path="/listen"
      />

      <PageHero
        eyebrow="Listen"
        title="Tune In to Our Messages"
        subtitle="Access recorded messages, teachings, and resources from our outreach and gatherings."
        image={aboutImages.community}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Stay Connected"
              title="Sign Up to Listen"
              subtitle="Fill out the form below to access our library of messages and resources."
              align="center"
            />
            <div className="mt-10">
              <FormEmbed
                src={siteConfig.forms.listen}
                title="Listen — Access Resources"
                height="640px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
