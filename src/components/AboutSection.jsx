import { Briefcase, GraduationCap, Book } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Photo + Bio Card */}
          <div
            className="p-6 rounded-lg bg-card shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center space-y-6"
          >
            <div className="w-48 h-48 bg-primary/10 rounded-full overflow-hidden shadow-sm">
              <img
                src="https://i.postimg.cc/mDmcysnW/IMG-3801.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-3xl font-semibold">
                Passionate Developer & <br /> AI Enthusiast
              </h3>
              <p className="text-muted-foreground">
                An organized and dependable student with a knack for managing multiple tasks effectively.
                Skilled at setting priorities, staying on top of deadlines, and keeping things running smoothly,
                even in busy environments. Known for a proactive mindset, problem-solving abilities,
                and a commitment to delivering high-quality results.
              </p>
            </div>
          </div>

          {/* Educational Journey */}
          <div className="space-y-6 flex flex-col items-center">
            <h3 className="text-3xl font-semibold text-center">
              Educational Journey
            </h3>

            {/* Common class for same-sized cards */}
            <div className="p-6 w-full md:w-96 rounded-lg border border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 text-left">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Bachelor of Technology in AIML
                  </h4>
                  <p className="text-muted-foreground">
                    CMR Institute of Technology <br />
                    2022 – 2026 | CGPA: 8.04
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 w-full md:w-96 rounded-lg border border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 text-left">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Intermediate</h4>
                  <p className="text-muted-foreground">
                    Sri Chaitanya Jr Kalashala <br />
                    2020 – 2022 | 91%
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 w-full md:w-96 rounded-lg border border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 text-left">
                <div className="p-3 rounded-full bg-primary/10">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">SSC</h4>
                  <p className="text-muted-foreground">
                    Sri Chaitanya Techno School <br />
                    2019 – 2020 | GPA: 10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons below all content */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
          <a href="#contact" className="cosmic-button">
            Get In Touch
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1sJqLvItqyxO5SMblx7E1j5f2YeynqAAv/view?usp=drive_link"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
