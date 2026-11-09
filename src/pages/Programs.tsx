import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgramCard from "@/components/ui/ProgramCard";
import { PrimaryButton } from "@/components/ui/Button";
import { programs } from "@/data/programs";
import { aboutImages } from "@/data/images";

export default function Programs() {
  return (
    <>
      <SEOHead
        title="Our Programs"
        description="Explore our outreach programs: assembly presentations, lunch & learn sessions, after-school clubs, and special events."
        path="/programs"
      />

      <PageHero
        eyebrow="What We Do"
        title="Our Programs"
        subtitle="Reaching students through dynamic, meaningful, and ongoing engagement in schools and communities."
        image={aboutImages.students}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Outreach Programs"
            title="Four Ways We Reach Young People"
            subtitle="Each program is designed to meet students where they are — from large assembly halls to intimate small group discussions."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, i) => (
              <div
                key={program.id}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cloud">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Get Involved"
              title="Want to Bring Us to Your School?"
              subtitle="We'd love to partner with your school or community. Reach out and let's start a conversation."
              align="center"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PrimaryButton to="/contact">Contact Us</PrimaryButton>
              <PrimaryButton to="/join-us">Join Our Team</PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
