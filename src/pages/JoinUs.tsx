import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/ui/PageHero";
import FormEmbed from "@/components/forms/FormEmbed";
import SectionHeading from "@/components/ui/SectionHeading";
import { Heart, Users, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { aboutImages } from "@/data/images";

export default function JoinUs() {
  return (
    <>
      <SEOHead
        title="Get Involved"
        description="Join Ephesus Missions & Outreach as a volunteer. Be part of reaching young people with faith and purpose."
        path="/join-us"
      />

      <PageHero
        eyebrow="Get Involved"
        title="Join Our Mission"
        subtitle="Be part of something bigger than yourself. Volunteer, serve, and help us reach young people with hope and purpose."
        image={aboutImages.students}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Heart, title: "Serve With Purpose", description: "Use your gifts and passion to make a real difference in young people's lives." },
              { icon: Users, title: "Join a Community", description: "Become part of a team that cares, supports, and grows together in faith." },
              { icon: Sparkles, title: "Create Impact", description: "Help transform schools and communities through outreach and mentorship." },
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
              eyebrow="Sign Up"
              title="Become a Volunteer"
              subtitle="Fill out the form below and we'll connect with you about how you can get involved."
              align="center"
            />
            <div className="mt-10">
              <FormEmbed
                src={siteConfig.forms.joinUs}
                title="Join Us — Volunteer Sign-Up"
                height="640px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
