import { createFileRoute } from "@tanstack/react-router";
import ilyasResearchImg from "@/assets/team-ilyas-research.jpg";
import faizResearchImg from "@/assets/team-faiz-research.jpg";
import ramzanResearchImg from "@/assets/team-ramzan-research.jpg";
import sadiaResearchImg from "@/assets/team-sadia-research.png";
import samiaResearchImg from "@/assets/team-samia-research.jpg";
import ummeaimanResearchImg from "@/assets/team-ummeaiman-research.jpg";
import zunairaResearchImg from "@/assets/team-zunaira-research.jpg";

export const Route = createFileRoute("/team/research")({
  head: () => ({
    meta: [
      { title: "Research Writing Team — Erha Technologies" },
      { name: "description", content: "Meet the academic writers and researchers producing world-class theses, papers and publications at Erha Technologies." },
      { property: "og:title", content: "Research Writing Team — Erha Technologies" },
      { property: "og:description", content: "Academic writers and researchers at Erha Technologies." },
    ],
  }),
  component: ResearchTeamPage,
});

type Member = { name: string; role: string; initials: string; bio: string; image?: string };

const researchTeam: Member[] = [
  { name: "Ilyas Shahid", role: "Academic Writer, Researcher, and Founder/CEO of Erha Technologies", initials: "IS", bio: "Muhammad Ilya Shahid is an accomplished academic writer and researcher specializing in Computer Science. As the Founder and CEO of Erha Technologies, he leads innovative initiatives at the intersection of technology and research. With a strong portfolio of publications in IEEE and SCI-indexed journals, Muhammad's work reflects his deep expertise in the field of Computer Science. He has made significant contributions to academic research, focusing on topics that drive technological advancements. His leadership at Erha Technologies exemplifies his commitment to advancing both academic writing and real-world technology solutions.", image: ilyasResearchImg },
  { name: "Dr. Faiz Jillani", role: "Academic Writer, AI Engineer, and Co-Founder", initials: "FJ", bio: "Dr. Faiz Jillani is a renowned academic writer and AI engineer specializing in Artificial Intelligence (AI), Generative AI, and Robotics. With a strong publication record in top-tier journals, his research focuses on cutting-edge AI technologies and their applications in robotics. As a co-founder of a technology firm, Dr. Jillani blends his academic expertise with practical industry experience to drive innovation. His work continues to shape the future of AI through rigorous research and development, making significant contributions to both the academic and technological communities.", image: faizResearchImg },
  { name: "Muhammad Ramzan", role: "Data Science and Deep Learning Specialist", initials: "MR", bio: "Muhammad Ramzan is a skilled data science and deep learning professional with a strong background in mathematics. His research focuses on early-stage Age-Related Macular Degeneration (ARMD) classification using attention-based deep learning methods, achieving impressive results with a hybrid DETR-ResNet50 model. With experience in AI, computer vision, and machine learning, he has contributed to publications in IEEE and IAES journals. Currently pursuing a Master’s in Data Science, Muhammad has received several awards, including the UI GREAT Scholarship and the Wellcome Connecting Science Award. He is passionate about developing reliable and efficient AI systems for real-world applications.", image: ramzanResearchImg },
  { name: "Sadia Sadiq", role: "Mathematics Researcher & Academic Writter", initials: "SS", bio: "Sadia Sadiq is an accomplished Mathematics graduate with a focus on academic research and writing. Holding an MS in Mathematics from the National University of Sciences and Technology (NUST), Sadia has conducted in-depth research in mathematical solitons and wave equations, contributing to publications in reputable journals such as Results in Physics and Optical and Quantum Electronics. With strong analytical and problem-solving skills, Sadia is proficient in using mathematical software like MATLAB and Maple. She has also presented her research at various academic seminars and conferences, further showcasing her commitment to advancing knowledge in the field of mathematics.", image: sadiaResearchImg },
  { name: "Samia Akash", role: "Academic & Technical Writer with Expertise in Research and Database Management", initials: "SA", bio: "Samia Akash is an experienced academic and technical writer with a strong background in research writing, SOP development, and database management. With proficiency in academic referencing styles such as APA, MLA, and Chicago, Samia excels in producing high-quality, well-researched content. She has extensive experience in developing technical documentation, designing databases, and writing optimized SQL queries. Samia is skilled in time management, editing, proofreading, and managing multiple projects, ensuring accurate, plagiarism-free work. With a focus on academic excellence and technical precision, Samia is committed to delivering content that meets high standards.", image: samiaResearchImg },
  { name: "Umm-e-Aiman", role: "Biochemistry Graduate & Aspiring Researcher", initials: "UA", bio: "Umm-e-Aiman is a motivated Biochemistry graduate, currently pursuing an M.Phil. in Biochemistry, with practical experience in pathology and BSL labs from her internship at DHQ Hospital, Multan. She has a strong background in research, having worked on cholesterol regulatory proteins during her bachelor’s degree and conducted animal studies during her master’s program. Umm-e-Aiman is an active member of the GR community and an organizer of sports events. With a keen interest in applying her analytical and research skills, she is eager to contribute to a dynamic scientific environment.", image: ummeaimanResearchImg },
  { name: "Zunaira Naseem", role: "Academic Writer & Linguistics Researcher", initials: "ZN", bio: "Zunaira Naseem is a passionate academic writer and researcher specializing in English Linguistics and Corpus Linguistics. With a strong foundation in research methodology, she has published work on language, social class, and power dynamics in proverbs. Zunaira is skilled in corpus analysis, data collection, and interpretation, using tools like Antconc and Sketch Engine. She has contributed to multiple academic conferences and competitions, demonstrating her expertise in the field. Her proficiency in English and dedication to advancing linguistic research make her a valuable contributor to academic writing and research.", image: zunairaResearchImg },
];

function ResearchTeamPage() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
      {researchTeam.map((m) => (
        <div key={m.name} className="glass card-3d rounded-2xl p-8 text-center group">
          <div className="relative w-32 h-32 mx-auto mb-5">
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{ background: "conic-gradient(from 0deg, var(--neon-purple), var(--neon-blue), var(--neon-cyan), var(--neon-purple))" }}
            />
            <div
              className="absolute inset-1 rounded-full flex items-center justify-center font-display text-3xl text-foreground overflow-hidden"
              style={{ background: "var(--card)" }}
            >
              {m.image ? (
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
              ) : (
                m.initials
              )}
            </div>
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: "0 0 40px var(--neon-purple)" }}
            />
          </div>
          <h3 className="font-display text-xl">{m.name}</h3>
          <div className="text-xs uppercase tracking-wider mt-1 text-[var(--neon-purple)]">{m.role}</div>
          <p className="text-sm text-muted-foreground mt-3">{m.bio}</p>
        </div>
      ))}
    </div>
  );
}
