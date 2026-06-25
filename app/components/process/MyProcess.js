"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowLeft, FiArrowUpRight, FiPlus, FiMinus } from "react-icons/fi";
import { projects } from "../showcase/projects";
import ProjectCaseStudy from "../showcase/ProjectCaseStudy";
import ContactForm from "../contactForm";

// Fade-up wrapper, same motion language as the case-study view.
function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Small uppercase section label (the "OVERVIEW" / "SERVICES" style labels).
function Label({ children }) {
  return (
    <p className='text-sm uppercase tracking-widest text-white/50 mb-5'>
      {children}
    </p>
  );
}

const stages = [
  {
    n: "01",
    title: "Planning & Content",
    body: "It starts with figuring out what the site needs to do and who it's for. I help organize your services, pages, and messaging into a structure that's easy to navigate, before a single pixel is designed. This is where clear communication matters most, and where I spend the time to get it right.",
  },
  {
    n: "02",
    title: "Design",
    body: "With the structure set, I design the look, built around your brand and shaped to make the right things stand out. You'll see the direction early and have room to react before anything gets built.",
  },
  {
    n: "03",
    title: "Development",
    body: "The site is built in a private development environment, completely separate from anything live. The build can take shape, get tested, and be reviewed properly without a half-finished site ever going public. You review it on a real staging link and give feedback before launch.",
  },
  {
    n: "04",
    title: "Going Live",
    body: "When everything's approved, I handle the launch from start to finish, pointing your domain, configuring DNS, and making sure the switch happens cleanly with no downtime or broken links. Going live should feel like a milestone, not a scramble.",
  },
];

const pillars = [
  {
    title: "Structure that makes sense",
    body: "Before anything gets designed, I map out what your site needs to say and the order people need to hear it. Strong structure is what makes a site feel effortless to use, so visitors find what they came for without having to think about it. With experience across a range of industries, I'll help you get your services, products, and story into a shape that's easy to follow.",
  },
  {
    title: "Design that carries your brand",
    body: "Your brand is the thing people remember. The site should reflect it on every page, through type, color, spacing, and the small details that add up to a strong first impression. I build the look around your brand, so the result feels like you instead of a template everyone else is using.",
  },
  {
    title: "Built to perform",
    body: "A good-looking site that's slow or confusing doesn't help anyone. I build for speed, clean navigation, and a layout that works as well on a phone as it does on a desktop. Every page is structured for search engines, so the site you paid for can actually be found.",
  },
  {
    title: "Measured and supported",
    body: "Once the site is live, I set up analytics so you can see how people are finding and using it. And I stay reachable. Whether you need a content update, a new page, or help making sense of the numbers, you're never left to figure it out alone.",
  },
];

const technical = [
  {
    title: "Hosting & Management",
    body: "I set up and manage hosting so your site stays fast, secure, and online. Updates, backups, and monitoring are part of it, so the site keeps running well long after launch day.",
  },
  {
    title: "Domain & DNS",
    body: "Domains and DNS are where a lot of launches go sideways. I manage the whole setup, registration, records, and the configuration that connects your domain to your site and email the right way.",
  },
  {
    title: "Business Email",
    body: "I can set up and administer professional email on your domain, accounts for your whole team, configured so messages land where they should. Need an address for a new hire down the line? That's handled too.",
  },
  {
    title: "Ongoing Support",
    body: "Sites need attention after launch. I'm available for updates, new pages, fixes, and questions, a direct line to the person who actually built your site, not a ticket queue.",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most projects run about 4–6 weeks from kickoff to launch, depending on the size of the site and how quickly content comes together. On a tighter timeline? Reach out and we'll figure out what's possible, let's talk.",
  },
  {
    q: "What platforms do you build on?",
    a: "Most of my work is built on WordPress or Shopify. I'll recommend whichever one fits how your business actually runs.",
  },
  {
    q: "What if my site needs changes after it's done?",
    a: "I'm available for updates and changes whenever you need them, billed hourly. You're working directly with the person who built the site, so there's no ramp-up time to explain what's where.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Projects are broken into installments and billed across the timeline, so the cost is spread out instead of landing all at once.",
  },
  {
    q: "Is there a guarantee?",
    a: "Yes. You don't pay the final installment until you're fully satisfied with the result. I'd rather get it right than rush it out the door.",
  },
  {
    q: "Do you build e-commerce sites?",
    a: "Yes. I build online stores that look sharp and, more importantly, work properly, clean product pages, a checkout that doesn't lose people, and a setup you can actually manage day to day.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className='border-b border-white/10'>
      <button
        onClick={onToggle}
        className='flex w-full items-center justify-between gap-6 py-6 text-left'
      >
        <span className='text-lg md:text-xl text-white'>{q}</span>
        <span className='shrink-0 text-white/70'>
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className='overflow-hidden'
      >
        <p className='pb-6 text-white/70 leading-relaxed max-w-3xl'>{a}</p>
      </motion.div>
    </div>
  );
}

export default function MyProcess() {
  const [selected, setSelected] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const caseStudiesRef = useRef(null);

  const openCaseStudy = (project) => {
    setSelected(project);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Case-study view replaces the page content, the same way the home carousel does.
  if (selected) {
    return (
      <main className='min-h-screen bg-gradient-to-b from-[#1E3E62] to-[#0a0a0a]'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12 pt-28 md:pt-32 pb-20'>
          <ProjectCaseStudy
            project={selected}
            onBack={() => setSelected(null)}
          />
        </div>
      </main>
    );
  }

  return (
    <main className='min-h-screen bg-gradient-to-b from-[#1E3E62] via-[#0B192C] to-[#0a0a0a]'>
      <div className='container mx-auto px-4 md:px-8 lg:px-12 pt-28 md:pt-32 pb-24'>
        {/* Back to home — stands in for the missing hero image */}
        <Reveal>
          <Link
            href='/'
            className='group inline-flex items-center gap-2 text-sm text-white/60 hover:text-amber-300 transition'
          >
            <FiArrowLeft className='transition-transform group-hover:-translate-x-1' />
            Back to Home
          </Link>
        </Reveal>

        {/* ---------- HERO (blog style, left aligned) ---------- */}
        <Reveal delay={0.05} className='mt-12 md:mt-16 max-w-4xl'>
          <div className='eyebrow'>
            <span className='dot' />
            My Process
          </div>
          <h1 className='mt-6 text-4xl md:text-6xl leading-tight text-white'>
            Websites Built Around How Your Business Actually Works
          </h1>
          <p className='mt-7 text-lg md:text-xl text-white/75 leading-relaxed'>
            Good design gets attention. Everything behind it, the structure, the
            speed, the setup it runs on, is what turns that attention into
            customers. I handle both, for businesses in any industry, from the
            first wireframe to the day it goes live and well after.
          </p>
        </Reveal>

        {/* ---------- THE PROCESS ---------- */}
        <section className='mt-24 md:mt-32'>
          <Reveal>
            <Label>The Process</Label>
            <h2 className='text-3xl md:text-4xl text-white max-w-3xl'>
              Every project moves through clear stages, so you always know where
              things stand.
            </h2>
          </Reveal>

          <div className='mt-12 grid gap-5 md:grid-cols-2'>
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className='h-full rounded-2xl border border-white/10 bg-white/5 p-7 md:p-8'>
                  <span className='text-4xl text-[var(--accent)]/80 font-bold'>
                    {s.n}
                  </span>
                  <h3 className='mt-4 text-xl md:text-2xl text-white'>
                    {s.title}
                  </h3>
                  <p className='mt-3 text-white/70 leading-relaxed'>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- WHAT MAKES A WEBSITE ACTUALLY WORK ---------- */}
        <section className='mt-24 md:mt-32'>
          <Reveal>
            <Label>What Makes a Website Actually Work</Label>
            <h2 className='text-3xl md:text-4xl text-white max-w-3xl'>
              Good websites aren't an accident.
            </h2>
            <p className='mt-5 text-lg text-white/70 max-w-2xl leading-relaxed'>
              A few things have to come together, and each one gets real
              attention on every project.
            </p>
          </Reveal>

          <div className='mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2'>
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className='border-t border-white/10 pt-6'>
                  <h3 className='text-xl md:text-2xl text-white'>{p.title}</h3>
                  <p className='mt-3 text-white/70 leading-relaxed'>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- THE TECHNICAL SIDE, HANDLED ---------- */}
        <section className='mt-24 md:mt-32'>
          <Reveal>
            <Label>The Technical Side, Handled</Label>
            <h2 className='text-3xl md:text-4xl text-white max-w-3xl'>
              A website is only as reliable as what sits behind it.
            </h2>
            <p className='mt-5 text-lg text-white/70 max-w-2xl leading-relaxed'>
              These are the pieces that usually get split across three different
              vendors. I keep them in one place.
            </p>
          </Reveal>

          <div className='mt-12 grid gap-5 md:grid-cols-2'>
            {technical.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <div className='h-full rounded-2xl border border-white/10 bg-white/5 p-7 md:p-8'>
                  <h3 className='text-xl md:text-2xl text-white'>{t.title}</h3>
                  <p className='mt-3 text-white/70 leading-relaxed'>{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className='mt-24 md:mt-32'>
          <Reveal>
            <Label>FAQ</Label>
            <h2 className='text-3xl md:text-4xl text-white mb-8'>
              Questions, answered
            </h2>
          </Reveal>
          <Reveal>
            <div className='border-t border-white/10'>
              {faqs.map((f, i) => (
                <FaqItem
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              ))}
            </div>
          </Reveal>
        </section>

        {/* ---------- RELEVANT CASE STUDIES ---------- */}
        <section ref={caseStudiesRef} className='mt-24 md:mt-32'>
          <Reveal>
            <Label>Relevant Case Studies</Label>
            <h2 className='text-3xl md:text-4xl text-white mb-10'>
              Recent work
            </h2>
          </Reveal>

          <div className='grid gap-x-8 gap-y-12 md:grid-cols-2'>
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.05}>
                <button
                  onClick={() => openCaseStudy(p)}
                  className='group block w-full text-left'
                >
                  <div className='relative overflow-hidden rounded-2xl border border-white/10 aspect-[16/10]'>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px'
                      quality={100}
                      className='object-cover transition duration-500 group-hover:scale-105'
                    />
                  </div>
                  <h3 className='mt-5 text-2xl text-white flex items-center gap-2'>
                    {p.title}
                    <FiArrowUpRight className='text-white/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-amber-300' />
                  </h3>
                  <p className='mt-2 text-white/60'>{p.caption}</p>
                  {p.hook && (
                    <p className='mt-2 text-white/70 leading-relaxed'>
                      {p.hook}
                    </p>
                  )}
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal className='mt-12 flex justify-center'>
            <Link
              href='/#work'
              className='group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10'
            >
              See all projects
              <FiArrowUpRight className='transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
            </Link>
          </Reveal>
        </section>

        {/* ---------- CLOSING CTA + CONTACT ---------- */}
        <section className='mt-24 md:mt-32'>
          <Reveal>
            <div className='rounded-3xl border border-white/10 bg-white/5 p-7 md:p-12'>
              <h2 className='text-3xl md:text-5xl text-white'>
                Ready to build something that works?
              </h2>
              <p className='mt-5 text-lg text-white/75 max-w-2xl leading-relaxed'>
                Tell me about your business and what you need the site to do.
                I'll walk you through how it would come together.
              </p>
              <div className='mt-10'>
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
