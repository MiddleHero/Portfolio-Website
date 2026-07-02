"use client";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaSpotify, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  return (
    <div className="flex-1 px-0 py-7 md:px-5">
      <div className="mx-auto max-w-5xl space-y-10 md:px-4 md:py-12">
        <section className="container space-y-5">
          <h1 className="text-3xl font-semibold">
            <Typewriter
              words={["Hey, Im Tadian Dang!"]}
              loop={1}
              cursor={true}
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={0}
            />
          </h1>
          <p className="text-lg max-w-2xl text-secondary ">
            I'm an aspiring Software Engineer based @ New Orleans, Louisiana,
            currently working toward my first Junior SWE role. When I'm not
            building projects and sharpening my skills, you'll usually find me
            gaming and drawing.
          </p>
          <div className="flex relative space-x-5 text-secondary text-l">
            <a
              href="https://github.com/MiddleHero"
              className="flex gap-1 items-center hover:text-primary hover:text-xl transition-all duration-400"
            >
              <FaGithub />
              GitHub
            </a>
            <Separator orientation="vertical" />
            <a
              href="https://www.linkedin.com/in/tadian-dang-b02b27384/?trk=public-profile-join-page"
              className="flex gap-1 items-center hover:text-primary hover:text-xl transition-all duration-400"
            >
              <FaLinkedin />
              Linkedin
            </a>
            <Separator orientation="vertical" />
            <a
              href="https://www.youtube.com/@MiddleHero15"
              className="flex gap-1 items-center hover:text-primary hover:text-xl transition-all duration-400"
            >
              <FaYoutube />
              Youtube
            </a>
            <Separator orientation="vertical" />
            <a
              href="https://open.spotify.com/user/zx4msbxqe7jxealjxnrdaqoqo?si=426eacc2f290486f"
              className="flex gap-1 items-center hover:text-primary hover:text-xl transition-all duration-400"
            >
              <FaSpotify />
              Spotify
            </a>
            <Separator orientation="vertical" />
            <a
              href="mailto:dangtadian@gmail.com"
              className="flex gap-1 items-center hover:text-primary hover:text-xl transition-all duration-400"
            >
              <MdEmail />
              Email
            </a>
          </div>
        </section>
        <section className="container space-y-5">
          <h3 className="flex items-center gap-2 text-xl font-bold">
            <CiStar className="text-2xl" /> Featured Projects
          </h3>

          <div className="grid grid-cols-2 gap-5">
            <div className="group w-full max-w-lg rounded-xl border-2 border-border hover:border-primary  overflow-hidden cursor-pointer bg-muted ">
              <Image
                src="/placeholderimage.png"
                width={500}
                height={300}
                alt="placeholder"
                loading="eager"
                className="w-full h-65 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="px-5 py-3 space-y-2 transition-colors duration-300 group-hover:text-primary">
                <h1 className="text-xl font-semibold text-muted-foreground group-hover:text-primary">
                  Portfolio Project 1
                </h1>
                <p className="text-secondary">
                  A Reddit clone built with Next.js, Prisma, Neon, and
                  PostgreSQL.
                </p>
              </div>
            </div>
            <div className="group w-full max-w-lg rounded-xl border-2 border-border hover:border-primary overflow-hidden cursor-pointer bg-muted">
              <Image
                src="/placeholderimage.png"
                width={500}
                height={300}
                alt="placeholder"
                loading="eager"
                className="w-full h-65 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="px-5 py-3 space-y-2 transition-colors duration-300 group-hover:text-primary">
                <h1 className="text-xl font-semibold text-muted-foreground group-hover:text-primary">
                  Portfolio Project 2
                </h1>
                <p className="text-secondary">
                  A Reddit clone built with Next.js, Prisma, Neon, and
                  PostgreSQL.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
