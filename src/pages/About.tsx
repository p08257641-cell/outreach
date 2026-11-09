import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Users, BookOpen, Sparkles, Target, Eye } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ImpactStats from "@/components/ui/ImpactStats";
import PartnerSection from "@/components/ui/PartnerSection";
import { siteConfig } from "@/data/site";
import { aboutImages } from "@/data/images";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description={`Learn about ${siteConfig.name} — our mission, vision, and the team reaching young people with faith and purpose.`}
        path="/about"
      />

      <PageHero
        eyebrow="About Us"
        title="Inspiring Faith. Changing Lives."
        subtitle="A Christian outreach organization dedicated to reaching students and young people with hope, purpose, and the transformative power of faith."
        image={aboutImages.hero}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={aboutImages.community}
                alt="Community outreach in action"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Reaching Young People Since 2018"
                subtitle={`${siteConfig.name} began with a simple vision: to bring the hope of the gospel to students and young people in schools and communities.`}
              />
              <div className="mt-6 space-y-4 text-ink leading-relaxed">
                <p>
                  We are a Christian outreach organization associated with {siteConfig.associatedMinistry}.
                  Through school outreach, mentorship programs, and community gatherings, we share faith,
                  build meaningful relationships, and inspire lasting transformation.
                </p>
                <p>
                  Our approach is relational and relevant — meeting young people where they are, creating
                  safe spaces for exploration, and walking alongside them as they discover purpose and
                  grow in their faith journey.
                </p>
                <p>
                  Since our founding in {siteConfig.foundedYear}, we have reached over 50 schools, trained
                  100+ volunteers, and seen countless lives transformed through the power of hope and
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cloud">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-base p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-royal-50 text-royal-500">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-navy-800">Our Mission</h3>
              <p className="mt-3 text-ink-light leading-relaxed">
                To reach students and young people with the hope of the gospel through school outreach,
                mentorship, and community transformation — inspiring faith, building relationships, and
                changing lives.
              </p>
            </div>
            <div className="card-base p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-50 text-gold-600">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-navy-800">Our Vision</h3>
              <p className="mt-3 text-ink-light leading-relaxed">
                To see a generation of young people who know their purpose, walk in faith, and transform
                their communities with hope, love, and the power of the gospel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us"
            subtitle="The principles that guide everything we do."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: HeartHandshake, title: "Compassion", description: "Meeting young people with love, empathy, and genuine care." },
              { icon: Users, title: "Community", description: "Building relationships where everyone belongs and can grow." },
              { icon: BookOpen, title: "Faith", description: "Sharing the hope of the gospel in relevant, engaging ways." },
              { icon: Sparkles, title: "Transformation", description: "Inspiring lasting change in lives, schools, and communities." },
            ].map((value, i) => (
              <div
                key={value.title}
                className="card-base p-7 text-center animate-fade-up"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-royal-50 text-royal-500">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-800">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImpactStats />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Get Involved"
                title="Join Us in Mission"
                subtitle="Whether you want to volunteer, get help, or learn more, there's a place for you in this movement."
              />
              <div className="mt-8">
                <Link
                  to="/join-us"
                  className="inline-flex items-center gap-2 rounded-full bg-royal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-royal-600"
                >
                  Get Involved
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
              <img
                src={aboutImages.students}
                alt="Students gathered together"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <PartnerSection />
    </>
  );
}
