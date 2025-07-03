import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Python", category: "programming", img: "https://i.postimg.cc/DzHwN1X5/download-1-removebg-preview.png" },
  { name: "C", category: "programming", img: "https://i.postimg.cc/L6g5zCg5/download-removebg-preview.png" },
  { name: "JAVA", category: "programming", img: "https://i.postimg.cc/JznLNt2q/download-2-removebg-preview.png" },
  { name: "Scikit", category: "ml", img: "https://i.postimg.cc/ZRP2thQn/download-3-removebg-preview.png" },
  { name: "NLTK", category: "ml", img: "https://i.postimg.cc/QdppqxKF/download-4-removebg-preview.png" },
  { name: "TensorFlow", category: "ml", img: "https://i.postimg.cc/v8g3Cn4j/download-5-removebg-preview.png" },
  { name: "Flutter", category: "frontend", img: "https://i.postimg.cc/7P3TCPdh/download-11-removebg-preview.png" },
  { name: "React.js", category: "frontend", img: "https://i.postimg.cc/ncdr7XkF/download-6-removebg-preview.png" },
  { name: "GIT", category: "tools", img: "https://i.postimg.cc/TYH21Zdh/download-7-removebg-preview.png" },
  { name: "MySQL", category: "database", img: "https://i.postimg.cc/SN8qQjv1/download-8-removebg-preview.png" },
  { name: "Firebase", category: "database", img: "https://i.postimg.cc/RhZ65KRY/download-9-removebg-preview.png" },
  { name: "Jupyter Notebook", category: "tools", img: "https://i.postimg.cc/k5RvL34S/download-10-removebg-preview.png" },
];

const categories = ["all", "programming", "ml", "frontend", "tools", "database"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs transition-transform duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-4"
            >
              <img
                src={skill.img}
                alt={`${skill.name} logo`}
                className="w-10 h-10 object-contain"
              />
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
