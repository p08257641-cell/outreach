import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/ui/PageHero";
import FormEmbed from "@/components/forms/FormEmbed";
import SectionHeading from "@/components/ui/SectionHeading";
import { MessageCircle, Lightbulb, Search } from "lucide-react";
import { siteConfig } from "@/data/site";
import { aboutImages } from "@/data/images";

export default function Ask() {
  return (
    <>
      <SEOHead
        title="Ask a Question"
        description="Curious about faith? Have a question? We're here to listen and help you find answers."
        path="/ask"
      />

      <PageHero
        eyebrow="Ask"
        title="Ask a Question"
        subtitle="Curious about faith? Have a question about life, purpose, or spirituality? We're here to listen."
        image={aboutImages.hero}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: MessageCircle, title: "No Question Too Small", description: "Whatever you're wondering about, we welcome your curiosity." },
              { icon: Lightbulb, title: "Thoughtful Answers", description: "We offer honest, thoughtful responses grounded in faith and care." },
              { icon: Search, title: "Explore Together", description: "You don't have to have it all figured out — let's explore together." },
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
              eyebrow="We're Listening"
              title="Share Your Question"
              subtitle="Fill out the form below and we'll get back to you with a thoughtful response."
              align="center"
            />
            <div className="mt-10">
              <FormEmbed
                src={siteConfig.forms.getHelp}
                title="Ask a Question"
                height="640px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
