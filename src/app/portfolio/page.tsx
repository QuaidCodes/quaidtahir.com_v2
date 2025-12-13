"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
  }),
};

export default function Portfolio() {
  const techStack = [
    { name: "Python", color: "bg-yellow-200 dark:bg-yellow-500 text-black" },
    { name: "Java", color: "bg-red-200 dark:bg-red-500 text-black" },
    { name: "C++", color: "bg-purple-200 dark:bg-purple-500 text-black" },
    { name: "Kubernetes", color: "bg-cyan-200 dark:bg-cyan-500 text-black" },
    { name: "Docker", color: "bg-sky-200 dark:bg-sky-500 text-black" },
    { name: "Next.js", color: "bg-gray-200 dark:bg-gray-600 text-black" },
    {
      name: "Node.js / Express",
      color: "bg-green-200 dark:bg-green-500 text-black",
    },
    { name: "MySQL", color: "bg-amber-200 dark:bg-amber-500 text-black" },
    { name: "PostgreSQL", color: "bg-rose-200 dark:bg-rose-500 text-black" },
    { name: "React", color: "bg-blue-200 dark:bg-blue-500 text-black" },
    { name: "Tailwind CSS", color: "bg-teal-200 dark:bg-teal-500 text-black" },
    {
      name: "TypeScript",
      color: "bg-indigo-200 dark:bg-indigo-500 text-black",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-16 w-full max-w-4xl mx-auto selection:bg-gray-700 selection:text-white">
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeIn}
        className="text-center md:mb-16 mb-5 mt-10"
      >
        <h1 className="text-3xl md:text-5xl sm:text-6xl font-extrabold tracking-tight uppercase select-none">
          Quaid Tahir
        </h1>
        <p className="md:mt-2 text-lg sm:text-xl font-light text-gray-400">
          Software Engineer
        </p>
        <p className="hidden md:block mt-3 max-w-xl mx-auto text-gray-300 leading-relaxed">
          I build scalable, elegant software solutions that solve problems that
          matter.
        </p>
        <div className="md:mt-6 mt-3 flex justify-center space-x-6 text-gray-500 text-sm sm:text-base md:flex-row flex-col">
          <a
            href="mailto:quaidtahirw@gmail.com"
            className="hover:text-white transition"
            aria-label="Send email"
          >
            quaidtahirw@gmail.com
          </a>
          <span className="hidden md:inline">|</span>
          <Link
            href="https://quaidtahir.com"
            target="_blank"
            className="hover:text-white transition underline"
            aria-label="Visit personal website"
          >
            quaidtahir.com
          </Link>
          <span className="hidden md:inline">|</span>
          <Link
            href="https://github.com/QuaidCodes"
            target="_blank"
            className="hover:text-white transition underline"
            aria-label="Visit GitHub profile"
          >
            github.com/QuaidCodes
          </Link>
          <span className="hidden md:inline">|</span>
          <Link
            href="https://linkedin.com/in/quaidtahir"
            target="_blank"
            className="hover:text-white transition underline"
            aria-label="Visit LinkedIn profile"
          >
            linkedin.com/quaidtahir
          </Link>
        </div>
      </motion.header>

      <section className="md:space-y-14 space-y-5 leading-relaxed">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeIn}
        >
          <h2 className="portfolio-headings">Professional Summary</h2>
          <p className="portfolio-content">
            Ambitious software engineer candidate pursuing a Bachelor&#39;s
            degree in Computer Science. Proficient in multiple languages with
            hands-on experience designing scalable, high-performance
            applications. Passionate about writing clean, maintainable code and
            continuously learning modern best practices to solve real-world
            problems.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeIn}
        >
          <h2 className="portfolio-headings">Technical Skills</h2>
          <div className="flex flex-wrap gap-2 font-mono md:tracking-wide select-text">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="
            bg-black bg-opacity-60 
            text-gray-200 
            px-4 py-1.5 
            rounded-full 
            font-mono 
            text-sm 
            select-text
            backdrop-blur-sm
            hover:bg-opacity-80
            transition
            cursor-default
          "
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeIn}
          className=""
        >
          <h2 className="portfolio-headings">Projects</h2>
          <article>
            <h3 className="portfolio-subheadings">Portfolio Website Project</h3>
            <p className="text-sm md:text-lg">
              <Link href="/" className="md:hover:underline">
                www.quaidtahir.com
              </Link>{" "}
              <span className="text-gray-400">
                — Built with Next.js, TypeScript, Tailwind CSS
              </span>
            </p>
            <time className="text-sm text-gray-600 mbblock">June 2025</time>

            <p className="portfolio-content mb-2">
              Designed, developed, and deployed a modern personal portfolio
              website to showcase my technical skills, projects, and
              professional background. The site is fully responsive, optimized
              for performance, and includes interactive UI elements, custom
              animations, and a secure contact form that integrates with Resend
              to deliver real-time email notifications.
            </p>

            <ul className="list-disc list-inside space-y-1 portfolio-content">
              <li>
                Developed with <strong>Next.js App Router</strong>,{" "}
                <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>{" "}
                to ensure scalable architecture and maintainable code.
              </li>
              <li>
                Integrated <strong>Framer Motion</strong> for smooth page
                transitions and interactive animations across components.
              </li>
              <li>
                Built a dynamic contact form with{" "}
                <strong>Zod validation</strong> and{" "}
                <strong>Resend email API</strong>, ensuring reliable message
                delivery to my inbox.
              </li>
              <li>
                Deployed on <strong>Vercel</strong> with a custom domain via{" "}
                <strong>Namecheap</strong>, ensuring fast global load times with
                edge caching.
              </li>
              <li>
                Optimized for <strong>SEO</strong>, performance (via image
                optimization and lazy loading), and accessibility (semantic
                HTML, keyboard navigation).
              </li>
              <li>
                Mobile-first and fully responsive design with custom dark/light
                theme support.
              </li>
              <li>
                Source code hosted on <strong>GitHub</strong>, following clean
                code practices and Git-based version control.
              </li>
            </ul>
          </article>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          variants={fadeIn}
        >
          <h2 className="portfolio-headings">Work Experience</h2>
          <article>
            <h3 className="portfolio-subheadings">
              Amazon - IT Support Specialist II
            </h3>

            <time className="text-sm text-gray-600 mb-3 block">
              Nov 2022 - Present · New Jersey
            </time>

            <ul className="list-disc list-inside space-y-2 portfolio-content">
              <li>
                Resolved 85+ IT tickets weekly within SLAs, reducing issue
                resolution time by 100% and driving measurable improvements in
                end-user satisfaction and productivity.
              </li>

              <li>
                Executed multiple Change Management (CM) projects—including UPS
                battery replacements, MDF/IDF FCPIMMS, and AP lifecycle
                upgrades—resulting in increased infrastructure reliability and
                reduced downtime.
              </li>

              <li>
                Partnered with vendors to plan and execute Change Management
                (CM) activities with precision, minimizing downtime and ensuring
                on-time project delivery across multiple sites.
              </li>

              <li>
                Provided technical support to 1,000+ users and devices, troubleshooting
                complex hardware and software issues to sustain continuous
                business operations and maintain 100% system uptime.
              </li>

              <li>
                Collaborated with cross-functional teams to improve operational
                efficiency by 15%, streamlining workflows and boosting
                productivity.
              </li>

              <li>
                Monitored network traffic and performance metrics using tools
                such as Hylas and Imperium, proactively identifying and
                resolving issues related to high-severity events to maintain
                uninterrupted operations.
              </li>
            </ul>
          </article>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          variants={fadeIn}
        >
          <h2 className="portfolio-headings">Education</h2>

          <div className="space-y-1 portfolio-content text-lg">
            <p>Bachelor of Science in Computer Science</p>
            <p className="italic">
              Western Governors University — Salt Lake City, UT
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={6}
          variants={fadeIn}
        >
          <h2 className="portfolio-headings">Certifications</h2>
          <ul className="list-disc list-inside space-y-1 portfolio-content text-lg">
            <li className="font-semibold">
              Foundation: Data, Data, Everywhere - Amazon, Coursera (2022)
            </li>

            <li className="font-semibold">
              Amazon Web Services - Amazon, Coursera (2020)
            </li>

            <li className="font-semibold">CompTIA CCNA (2025)</li>

            <li className="font-semibold">AWS Cloud Practitioner(2025)</li>
            {/* 
            <li className="font-semibold">
              AWS Solutions Architect - Associate (2025)
            </li>
            <li className="font-semibold">
              AWS Machine Learning Engineer - Associate(2025)
            </li> */}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={6}
          variants={fadeIn}
        >
          <h2 className="portfolio-headings">Relevant Coursework</h2>
          <ul className="list-disc list-inside space-y-1 portfolio-content text-lg">
            <li className="font-semibold">
              Applied Algorithms and Reasoning – D795
            </li>
            <li className="font-semibold">Software Engineering – D284</li>
            <li className="font-semibold">
              Software Design and Quality Assurance – D480
            </li>
            <li className="font-semibold">Computer Architecture – C952</li>
            <li className="font-semibold">Formal Languages Overview – D793</li>
            <li className="font-semibold">Discrete Mathematics II – C960</li>
            <li className="font-semibold">
              Operating Systems for Computer Scientists – D686
            </li>
          </ul>
        </motion.div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={7}
        variants={fadeIn}
        className="md:mt-16 mt-8 flex justify-center flex-col md:flex-row md:gap-8 gap-3"
      >
        <a
          href="/QuaidTahirPortfolio.pdff"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-btns"
        >
          Download PDF
        </a>

        <a
          href="/QuaidTahirPortfolio.docc"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-btns"
        >
          Download DOC
        </a>
      </motion.div>
    </main>
  );
}
