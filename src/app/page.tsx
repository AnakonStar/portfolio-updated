"use client";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";

type Skill = {
  name: string;
  color: string;
  letter: string;
  image: string;
  desc: string;
  level: number;
};

export default function Portfolio() {
  const skills: Skill[] = [
    {
      name: "HTML5",
      color: "#E34F26",
      letter: "H",
      image: "html.png",
      desc: "Estruturação semântica de páginas web",
      level: 3,
    },
    {
      name: "SASS",
      color: "#CC6699",
      letter: "S",
      image: "sass.png",
      desc: "Pré-processador CSS para estilização avançada",
      level: 2,
    },
    {
      name: "React",
      color: "#61DAFB",
      letter: "R",
      image: "react.png",
      desc: "Biblioteca JavaScript para interfaces dinâmicas",
      level: 3,
    },
    {
      name: "Office",
      color: "#D83B01",
      letter: "O",
      image: "office.png",
      desc: "Suite de produtividade e documentação",
      level: 2,
    },
    {
      name: "React Native",
      color: "#61DAFB",
      letter: "RN",
      image: "react-native.png",
      desc: "Framework para desenvolvimento mobile multiplataforma",
      level: 2,
    },
    {
      name: "CSS3",
      color: "#1572B6",
      letter: "C",
      image: "css.png",
      desc: "Estilização moderna e responsiva",
      level: 3,
    },
    {
      name: "Photoshop",
      color: "#31A8FF",
      letter: "Ps",
      image: "photoshop.png",
      desc: "Edição e criação de design gráfico",
      level: 1,
    },
    {
      name: "GitHub",
      color: "#181717",
      letter: "G",
      image: "github.png",
      desc: "Controle de versão e colaboração em código",
      level: 3,
    },
  ];

  const [actualSkill, setActualSkill] = useState<Skill>(skills[0]);
  const [isSkillLoading, setIsSkillLoading] = useState<boolean>(false);
  const [showAcademic, setShowAcademic] = useState<boolean>(false);

  const SkillEmoji: Record<number, string> = {
    1: "happy.png",
    2: "smiling.png",
    3: "angry.png",
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const experiences = [
    {
      title: "IT Technician Intern",
      local: "OneEnergyBrasil",
      period: "2023-2023",
      description:
        "Complete organization of electronics; Improving everyone's interaction with office equipment; Performing all tasks related to the third-party system, Bitrix24; Creation and maintenance of the company website.",
    },
    {
      title: "Junior Developer",
      local: "Nuvem3",
      period: "2024 - Present",
      description:
        "Fullstack development with JavaScript, React Native, NextJs, Angular, TypeScript, Express, Node.js and Python.",
    },
    {
      title: "Network Support Intern",
      local: "MCINFO",
      period: "2023-2023",
      description:
        "Assisting customers with issues related to the company's services; conducting preventive technical visits to check the status of machines and servers and resolving any problems; assembling machines and servers for clients (including RAID configurations); creating and managing email and website hosting, virtual machines, and storage on each server.",
    },
  ];

  const academicExperience = [
    {
      title: "Bachelor's Degree in Computer Science",
      local: "University of Technology",
      period: "2020 - 2024",
      description:
        "Studying various aspects of computer science, including programming, algorithms, and software development.",
    },
    {
      title: "Web Development Bootcamp",
      local: "Online Academy",
      period: "2023",
      description:
        "Intensive training in web development technologies, including HTML, CSS, JavaScript, and React.",
    },
  ];

  function changeActualSkill(skill: Skill) {
    if (skill.name === actualSkill.name) return;

    setIsSkillLoading(true);
    setTimeout(() => {
      setActualSkill(skill);
      setIsSkillLoading(false);
    }, 700);
  }

  return (
    <div
      className="bg-gray-900 text-white min-h-screen"
      style={{ fontFamily: "'Press Start 2P', monospace" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        * {
          box-sizing: border-box;
        }
        
        .pixel-button {
          position: relative;
          padding: 16px 100px;
          border: none;
          cursor: pointer;
          image-rendering: pixelated;
        }
        
        .pixel-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          clip-path: polygon(
            0 4px, 4px 4px, 4px 0,
            calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
            100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
            4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
          );
        }

        .pixel-button::before {
          background: linear-gradient(180deg, #9d6fff 0%, #8b5cf6 100%);
        }

        .pixel-circle-icon {
          width: 60px;
          height: 60px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          image-rendering: pixelated;
        }

        .pixel-circle-icon svg {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .pixel-circle-icon .content {
          position: relative;
          z-index: 10;
        }

        .pixel-scroll {
          position: relative;
          background: linear-gradient(135deg, #f5e6d3 0%, #d4c4a8 100%);
          padding: 32px;
          image-rendering: pixelated;
        }

        .pixel-scroll svg {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .pixel-scroll .content {
          position: relative;
          z-index: 10;
        }

        .glitch {
          animation: glitch 3s infinite;
        }

        @keyframes glitch {
          0%, 100% { text-shadow: 2px 2px 0 #a855f7; }
          25% { text-shadow: -2px -2px 0 #06b6d4; }
          50% { text-shadow: 2px -2px 0 #a855f7; }
          75% { text-shadow: -2px 2px 0 #06b6d4; }
        }

         .pixel-divider {
          position: relative;
          width: 60%;
          height: 32px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pixel-divider::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg,
            transparent 0%,
            #a855f7 10%,
            #06b6d4 20%,
            #a855f7 30%,
            transparent 40%,
            transparent 60%,
            #a855f7 70%,
            #06b6d4 80%,
            #a855f7 90%,
            transparent 100%
          );
        }

        .pixel-divider::after {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          background: #a855f7;
          clip-path: polygon(
            0 4px, 4px 4px, 4px 0,
            12px 0, 12px 4px, 16px 4px,
            16px 12px, 12px 12px, 12px 16px,
            4px 16px, 4px 12px, 0 12px
          );
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .pixel-border-box {
          position: relative;
          padding: 1.5rem;
          border: none;
          image-rendering: pixelated;
          
        }

        .pixel-border-box p {
          line-height: 2;
        }
        
        .pixel-border-box::before {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          clip-path: polygon(
            0 10px, 10px 10px, 10px 0,
            calc(100% - 10px) 0, calc(100% - 10px) 10px, 100% 10px,
            100% calc(100% - 10px), calc(100% - 10px) calc(100% - 10px), calc(100% - 10px) 100%,
            10px 100%, 10px calc(100% - 10px), 0 calc(100% - 10px)
          );
        }

        .pixel-border-box::before {
          background: rgba(31, 41, 55, 0.5);
        }
    
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b-4 border-purple-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl">
            <span className="text-white">sant</span>
            <span className="text-purple-500">Dev</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl">
          <p className="text-xs md:text-sm mb-6">
            <span className="text-white">Welcome! I'm </span>
            <span className="text-purple-500 font-bold">sant</span>
            <span className="text-purple-400 font-bold">Dev</span>
            <span className="text-white">, a</span>
          </p>

          <h1 className="text-3xl md:text-6xl font-bold mb-8 leading-tight glitch">
            <span className="text-purple-400">Full Stack </span>
            <span className="text-purple-500">Dev</span>
          </h1>

          {/* Social Icons - Real Pixelated Circles */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://linkedin.com/in/enzo-lima-357a2728"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-circle-icon hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 80 80" fill="none">
                <defs>
                  <clipPath id="pixelClip">
                    <path d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z" />
                  </clipPath>
                </defs>
                <path
                  d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z"
                  fill="#2d3748"
                />
                <image
                  href="/img/linkedin.png"
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  clipPath="url(#pixelClip)"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </a>

            <a
              href="https://github.com/AnakonStar"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-circle-icon hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 80 80" fill="none">
                <defs>
                  <clipPath id="pixelClip">
                    <path d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z" />
                  </clipPath>
                </defs>
                <path
                  d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z"
                  fill="#2d3748"
                />
                <image
                  href="/img/github-icon.png"
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  clipPath="url(#pixelClip)"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </a>
            {/* <a
              href="https://github.com/AnakonStar"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-circle-icon hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 80 80" fill="none">
                <defs>
                  <clipPath id="pixelClip3">
                    <path d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z" />
                  </clipPath>
                </defs>
                <path
                  d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z"
                  fill="#2d3748"
                />
                <image
                  href="/img/workana.png"
                  x="-7"
                  y="-7"
                  width="95"
                  height="95"
                  clipPath="url(#pixelClip3)"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </a> */}

            <a
              href="https://www.frontendmentor.io/profile/AnakonStar"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-circle-icon hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 80 80" fill="none">
                <defs>
                  <clipPath id="pixelClip">
                    <path d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z" />
                  </clipPath>
                </defs>
                <path
                  d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z"
                  fill="#2d3748"
                />
                <image
                  href="/img/frontend.png"
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  clipPath="url(#pixelClip)"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </a>
          </div>

          <p className="text-xs md:text-sm mb-8">
            <span className="text-white">Let's talk a </span>
            <span className="text-purple-400">little</span>
            <span className="text-white"> about me</span>
          </p>

          <button
            onClick={() => scrollToSection("about")}
            className="pixel-button text-white font-bold text-xs shadow-lg hover:shadow-purple-500/50 transition-shadow relative z-10"
          >
            <span className="relative z-10">Get Started</span>
          </button>
        </div>
      </section>

      <div className="pixel-divider"></div>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="lg:flex lg:items-center w-full gap-10 max-w-7xl">
          {/* Profile Image - Pixelated Circle */}
          <div className="flex justify-center mb-12">
            <div
              className="relative pixel-circle-icon"
              style={{ width: "400px", height: "400px" }}
            >
              <img
                src="/img/profile.png"
                alt="profile"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">
              <span className="text-white">ABOUT </span>
              <span className="text-purple-400">ME</span>
            </h2>

            <h3 className="text-2xl text-purple-400 mb-6">
              A dedicated Full Stack Developer based in São Paulo, Brasil
            </h3>

            <div className="pixel-border-box text-white font-bold relative z-10">
              <p className="relative text-white leading-relaxed text-xs md:text-sm z-20">
                I'm very efficient and focused in everything I do and as well as
                building this portfolio, I like to get my hands dirty and make a
                difference. I have good teamwork and a thirst for knowledge,
                which makes me learn quickly and adapt to any work environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="pixel-divider"></div>

      {/* Skills Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-white">Skill </span>
            <span className="text-purple-400">Tree</span>
          </h2>

          {/* Real Pixelated skill circles */}
          <div className="flex flex-wrap justify-center gap-10 mb-12">
            {skills.map((skill, index) => (
              <button
                key={index}
                className="flex flex-col items-center group gap-2 cursor-pointer hover:scale-110 transition-transform"
                onClick={() => changeActualSkill(skill)}
              >
                <img src={`/img/${skill.image}`} alt={skill.name} />
                <span className="content text-white font-bold text-md mt-1">
                  {skill.name}
                </span>
              </button>
            ))}
          </div>

          {/* SASS Info Box */}
          <div className="pixel-border-box max-w-2xl mx-auto">
            <div className="content relative">
              {isSkillLoading ? (
                <div className="text-center py-8">
                  <span className="text-center">Carregando</span>
                  <div className="flex items-center justify-center py-6">
                    <div className="flex gap-2">
                      <div
                        className="w-3 h-3 bg-purple-500 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-purple-500 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-purple-500 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Level indicator with face */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl">
                      <img
                        src={`/img/${SkillEmoji[actualSkill.level]}`}
                        alt="emoji"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-purple-300 mb-1">
                        {actualSkill.level === 1 && "Iniciante"}
                        {actualSkill.level === 2 && "Intermediário"}
                        {actualSkill.level === 3 && "Avançado"}
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((level) => (
                          <div
                            key={level}
                            className={`h-2 flex-1 ${
                              level <= actualSkill.level
                                ? "bg-purple-500"
                                : "bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-purple-400 mb-3">
                    {actualSkill.name}
                  </h3>
                  <p className="text-white text-xs leading-relaxed mb-4">
                    {actualSkill.desc}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="pixel-divider"></div>

      {/* Knowledge and Experience Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center leading-tight">
            <span className="text-purple-400">Know</span>
            <span className="text-white">ledge</span>
            <br />
            <span className="text-purple-400">and Exp</span>
            <span className="text-white">erience</span>
          </h2>

          {/* Real Pixelated scrolls */}
          <div
            className={`mb-12 flex gap-12 items-center ${
              !showAcademic ? "flex-row-reverse justify-end" : "justify-start"
            }`}
          >
            {/* Toggle Button */}
            <button
              className={`flex gap-8 items-center ${
                showAcademic ? "flex-row-reverse justify-end" : "justify-start"
              }`}
              onClick={() => setShowAcademic(!showAcademic)}
            >
              <span className="relative z-10">
                {showAcademic ? "Work Experience" : "Academic Experience"}
              </span>
              <span className="relative z-10 text-lg">
                {showAcademic ? (
                  <svg
                    width="35"
                    height="56"
                    viewBox="0 0 35 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_10_241)">
                      <path
                        d="M15 7.42857H22.5V0H30V52H22.5V44.5714H15V37.1429H7.5V29.7143H0V22.2857H7.5V14.8571H15V7.42857Z"
                        fill="#D9D9D9"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_10_241"
                        x="0"
                        y="0"
                        width="35"
                        height="56"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="5" dy="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_10_241"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_10_241"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    width="35"
                    height="56"
                    viewBox="0 0 35 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_10_239)">
                      <path
                        d="M15 7.42857H7.5V0H0V52H7.5V44.5714H15V37.1429H22.5V29.7143H30V22.2857H22.5V14.8571H15V7.42857Z"
                        fill="#D9D9D9"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_10_239"
                        x="0"
                        y="0"
                        width="35"
                        height="56"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="5" dy="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_10_239"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_10_239"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                )}
              </span>
            </button>

            {/* Experience Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {(showAcademic ? academicExperience : experiences).map(
                (exp, index) => (
                  <div
                    key={index}
                    className="pixel-scroll p-12 shadow-2xl hover:scale-105 transition-transform"
                  >
                    <div className="relative z-10 h-full">
                      <div className="absolute -top-5 -left-5 w-3 h-3 bg-gray-800 rounded-sm"></div>
                      <div className="absolute -top-5 -right-5 w-3 h-3 bg-gray-800 rounded-sm"></div>
                      <div className="absolute -bottom-5 -left-5 w-3 h-3 bg-gray-800 rounded-sm"></div>
                      <div className="absolute -bottom-5 -right-5 w-3 h-3 bg-gray-800 rounded-sm"></div>

                      <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-bold mb-2">
                        {exp.local}
                      </p>
                      <p className="text-xs text-purple-700 font-bold mb-2">
                        {exp.period}
                      </p>
                      <p className="text-xs text-gray-800 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t-4 border-purple-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-300 text-xs">
              <Mail size={16} />
              <span>enzoh3h7@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-xs">
              <Phone size={16} />
              <span>+55 (11) 87671-1614</span>
            </div>
            {/* Social Icons - Real Pixelated Circles */}
            <div className="flex justify-center items-center gap-6 mb-8">
              <a
                href="https://linkedin.com/in/enzo-lima-357a2728"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-circle-icon hover:scale-110 transition-transform"
              >
                <svg viewBox="0 0 80 80" fill="none">
                  <defs>
                    <clipPath id="pixelClip">
                      <path d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z" />
                    </clipPath>
                  </defs>
                  <path
                    d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z"
                    fill="#2d3748"
                  />
                  <image
                    href="/img/linkedin.png"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                    clipPath="url(#pixelClip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/AnakonStar"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-circle-icon hover:scale-110 transition-transform"
              >
                <svg viewBox="0 0 80 80" fill="none">
                  <defs>
                    <clipPath id="pixelClip">
                      <path d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z" />
                    </clipPath>
                  </defs>
                  <path
                    d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z"
                    fill="#2d3748"
                  />
                  <image
                    href="/img/github-icon.png"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                    clipPath="url(#pixelClip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </a>
              {/* <a
              href="https://github.com/AnakonStar"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-circle-icon hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 80 80" fill="none">
                <defs>
                  <clipPath id="pixelClip3">
                    <path d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z" />
                  </clipPath>
                </defs>
                <path
                  d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z"
                  fill="#2d3748"
                />
                <image
                  href="/img/workana.png"
                  x="-7"
                  y="-7"
                  width="95"
                  height="95"
                  clipPath="url(#pixelClip3)"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </a> */}

              <a
                href="https://www.frontendmentor.io/profile/AnakonStar"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-circle-icon hover:scale-110 transition-transform"
              >
                <svg viewBox="0 0 80 80" fill="none">
                  <defs>
                    <clipPath id="pixelClip">
                      <path d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z" />
                    </clipPath>
                  </defs>
                  <path
                    d="M16 0H64V4H68V8H72V12H76V16H80V64H76V68H72V72H68V76H64V80H16V76H12V72H8V68H4V64H0V16H4V12H8V8H12V4H16V0Z"
                    fill="#2d3748"
                  />
                  <image
                    href="/img/frontend.png"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                    clipPath="url(#pixelClip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-xs">
            Copyright ©2023. All rights are reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
