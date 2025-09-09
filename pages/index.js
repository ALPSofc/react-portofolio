"use client";

import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillMail,
  AiFillPhone,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/legacy/image";
import devalps from "../public/dev-alps.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import { useState } from "react";
import Tooltip from "../components/Tooltip";
import { useTranslation } from "../hooks/useTranslation";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const { t, locale, setLocale } = useTranslation();

  const [isOpen, setIsOpen] = useState(false); // controle menu mobile

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>ALPS Portfolio</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-6 md:px-20 lg:px-40 dark:bg-gray-900">
        {/* HEADER */}
        <section className="min-h-screen">
          <nav className="py-6 mb-12 flex justify-between items-center">
            {/* LOGO */}
            <h1 className="text-xl font-burtons dark:text-white">
              developedalps
            </h1>

            {/* BOTÃO HAMBURGUER (mobile) */}
            <button
              className="md:hidden text-3xl dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* MENU DESKTOP */}
            <ul className="hidden md:flex items-center gap-4">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-violet-900 to-cyan-700 text-white px-4 py-2 rounded-md"
                  href={locale === "en" ? "/cv-en.pdf" : "/cv-pt.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("resume")}
                </a>
              </li>
              <li>
                <button
                  onClick={() => setLocale(locale === "en" ? "pt" : "en")}
                  className="px-3 py-1 border rounded-md dark:text-white"
                >
                  {locale === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
                </button>
              </li>
            </ul>
          </nav>

          {/* MENU MOBILE DROPDOWN */}
          {isOpen && (
            <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg mb-6">
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl dark:text-white"
              />
              <a
                className="bg-gradient-to-r from-violet-900 to-cyan-700 text-white px-4 py-2 rounded-md"
                href={locale === "en" ? "/cv-en.pdf" : "/cv-pt.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("resume")}
              </a>
              <button
                onClick={() => setLocale(locale === "en" ? "pt" : "en")}
                className="px-3 py-1 border rounded-md dark:text-white"
              >
                {locale === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
              </button>
            </div>
          )}

          {/* INTRO */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-violet-900 font-medium md:text-6xl dark:text-white">
              ALPS
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              {t("intro.role")}
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              {t("intro.description")}
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-white">
            <a
              href="https://www.linkedin.com/in/alissonpereira73a1097"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://instagram.com/@alpsofc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a href="mailto:alissoncabralia@gmail.com">
              <AiFillMail />
            </a>
            <a href="tel:+55(73)99985-5426">
              <AiFillPhone />
            </a>
          </div>

          {/* IMAGE */}
          <div className="relative mx-auto bg-gradient-to-b from-violet-900 rounded-full w-80 h-80 mt-20 md:w-96 md:h-96 overflow-hidden">
            <Image
              src={devalps}
              alt="Developer Alps"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* SERVICES */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              {t("servicesTitle")}
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              {t("servicesText1")}{" "}
              <Tooltip
                text={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("servicesTooltipText"),
                    }}
                  />
                }
              >
                <span className="text-violet-900 font-bold dark:text-cyan-400 cursor-help">
                  {t("servicesTooltipLabel")}
                </span>
              </Tooltip>{" "}
              {t("servicesText2")}
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              {t("servicesText3")}
            </p>
          </div>

          {/* SERVICE CARDS */}
          <div className="lg:flex gap-10">
            {/* Career */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image
                src={design}
                width={100}
                height={100}
                alt="Career"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-violet-900">
                {t("career.title")}
              </h3>
              <p className="text-gray-800">{t("career.text")}</p>
            </div>

            {/* Consulting */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="Consulting"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-violet-900">
                {t("consulting.title")}
              </h3>
              <p className="text-gray-800">{t("consulting.text")}</p>
            </div>

            {/* Code */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image
                src={code}
                width={100}
                height={100}
                alt="Code Skills"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-violet-900">
                Code
              </h3>
              <div className="columns-2 gap-4 text-center">
                {[
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "JSON",
                  "jQuery",
                  "BootsTrap",
                  "Ajax",
                  "Vue",
                  "Gulp",
                  "React",
                  "Git/Github",
                  "Node",
                  "ESnext",
                  "Webpack",
                  "Express",
                ].map((tech) => (
                  <p key={tech} className="text-gray-800 py-1 dark:text-black">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              {t("projects.title")}
            </h3>
            <p className="text-gray-600 dark:text-white">
              {t("projects.coming")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

