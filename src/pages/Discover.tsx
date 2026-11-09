import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/ui/PageHero";
import FormEmbed from "@/components/forms/FormEmbed";
import SectionHeading from "@/components/ui/SectionHeading";
import { Compass, Gift, Heart } from "lucide-react";
import { siteConfig } from "@/data/site";
import { aboutImages } from "@/data/images";

export default function Discover() {
  return (
    <>
      <SEOHead
        title="Discover Your Purpose"
        description="Explore your calling, gifts, and purpose with Ephesus Missions & Outreach."
        path="/discover"
      />

      <PageHero
        eyebrow="Discover"
        title="Discover Your Purpose"
        subtitle="Every person has a unique calling. Explore your gifts, passions, and the purpose God has for your life."
        image={aboutImages.students}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Compass, title: "Explore Your Calling", description: "Discover what God has placed in your heart and how to pursue it." },
              { icon: Gift, title: "Identify Your Gifts", description: "Understand your unique strengths and how they can serve others." },
              { icon: Heart, title: "Find Your Place", description: "Connect your purpose with community and meaningful service." },
            ].map((item, i) => (
              <div
                key={item.title}
                className="card-base p-8 text-center animate-fade-up"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-royal-50 text-royal-500">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cloud">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Ready to Begin?"
              title="Start Your Discovery Journey"
              subtitle="Fill out the form below and we'll walk alongside you as you explore your purpose."
              align="center"
            />
            <div className="mt-10">
              <FormEmbed
                src={siteConfig.forms.joinUs}
                title="Discover Your Purpose"
                height="640px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
