"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

// Reusable fade-up wrapper for blog sections
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

function SectionHeading({ children }) {
  return (
    <h2 className='text-3xl md:text-4xl mb-6 text-white'>{children}</h2>
  );
}

// Accepts either a single string or an array of paragraphs
const toParagraphs = (value) =>
  Array.isArray(value) ? value : value ? [value] : [];

// "Cedric Signori" -> "CS"
const initials = (name = "") =>
  name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

// Normalizes the `video` field into a list of <source> entries
const toVideoSources = (video) => {
  if (!video) return [];
  const guessType = (src) =>
    src.endsWith(".webm") ? "video/webm" : "video/mp4";
  if (typeof video === "string") return [{ src: video, type: guessType(video) }];
  if (video.sources?.length) return video.sources;
  return video.src ? [{ src: video.src, type: guessType(video.src) }] : [];
};

// Hero media: shows the poster image instantly, then lazy-loads an ambient
// muted/looping video only once it scrolls into view (saves bandwidth).
function HeroMedia({ image, video, title }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  const sources = toVideoSources(video);
  const hasVideo = sources.length > 0;
  const poster = (video && video.poster) || image;

  // Mount/play the video only while it's on screen
  useEffect(() => {
    if (!hasVideo) return;
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasVideo]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView, ready]);

  return (
    <div
      ref={containerRef}
      className='relative overflow-hidden rounded-2xl border border-white/10 h-[280px] md:h-[460px]'
    >
      {poster && (
        <Image
          src={poster}
          alt={title}
          fill
          sizes='(max-width: 1280px) 100vw, 1200px'
          quality={100}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {hasVideo && inView && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          autoPlay
          playsInline
          preload='metadata'
          poster={typeof poster === "string" ? poster : undefined}
          onCanPlay={() => setReady(true)}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      )}
    </div>
  );
}

export function ProjectCaseStudy({ project, onBack }) {
  if (!project) return null;

  const {
    title,
    hook,
    image,
    video,
    liveSite,
    tags = [],
    intro,
    challenges = [],
    build,
    results,
    takeaways = [],
    testimonial,
    details,
  } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className='relative w-full'
    >
      {/* Glass panel — opacity lets the dark #work background show through */}
      <div className='relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden'>
        {/* ---------- HERO ---------- */}
        <header className='relative px-6 md:px-12 lg:px-16 pt-8 pb-12 md:pt-10 md:pb-16'>
          {/* Back / navigation row */}
          <nav className='flex flex-wrap items-center justify-between gap-4 mb-10'>
            <button
              onClick={onBack}
              className='group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white transition hover:bg-white/10'
            >
              <FiArrowLeft className='transition-transform group-hover:-translate-x-1' />
              Back to Projects
            </button>

            <div className='flex items-center gap-5 text-sm'>
              <Link href='/#about-me' className='text-white/70 hover:text-amber-300 transition'>
                About
              </Link>
              <Link href='/#work' className='text-white/70 hover:text-amber-300 transition'>
                Work
              </Link>
              <Link href='/my-process' className='text-white/70 hover:text-amber-300 transition'>
                My Process
              </Link>
              <Link href='/#contact' className='text-white/70 hover:text-amber-300 transition'>
                Contact
              </Link>
            </div>
          </nav>

          {/* Tags */}
          <div className='flex flex-wrap gap-2 mb-5'>
            {tags.map((tag) => (
              <span key={tag} className='eyebrow'>
                <span className='dot' />
                {tag}
              </span>
            ))}
          </div>

          <h1 className='text-4xl md:text-6xl leading-tight text-white max-w-4xl'>
            {title}
          </h1>
          {hook && (
            <p className='mt-5 text-lg md:text-xl text-white/75 max-w-2xl'>{hook}</p>
          )}

          {liveSite && (
            <Link
              href={liveSite}
              target='_blank'
              className='mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-black font-bold transition hover:bg-[var(--accent-hover)]'
            >
              Visit Live Site
              <FiArrowUpRight />
            </Link>
          )}

          {/* Hero media — image, or ambient looping video with image poster */}
          {(video || image) && (
            <Reveal delay={0.1} className='mt-10'>
              <HeroMedia image={image} video={video} title={title} />
            </Reveal>
          )}
        </header>

        {/* ---------- BODY ---------- */}
        <div className='px-6 md:px-12 lg:px-16 pb-16'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14'>
            {/* Main column */}
            <div className='lg:col-span-2 space-y-14'>
              {/* Intro */}
              <Reveal>
                <section className='space-y-5 text-white/80 text-lg leading-relaxed'>
                  <p>{intro.does}</p>
                  <p>{intro.needed}</p>
                  <p>{intro.role}</p>
                </section>
              </Reveal>

              {/* Challenge */}
              <Reveal>
                <section>
                  <SectionHeading>The Challenge</SectionHeading>
                  <ul className='space-y-3'>
                    {challenges.map((c, i) => (
                      <li key={i} className='flex gap-3 text-white/80 text-lg leading-relaxed'>
                        <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]' />
                        {c}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>

              {/* What I Built */}
              <Reveal>
                <section className='space-y-8'>
                  <SectionHeading>What I Built</SectionHeading>

                  <div>
                    <h3 className='text-xl mb-2 text-amber-300'>Design</h3>
                    <div className='space-y-4 text-white/80 text-lg leading-relaxed'>
                      {toParagraphs(build.design).map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className='text-xl mb-3 text-amber-300'>Development</h3>
                    <p className='text-white/60 mb-3'>
                      Platform: <span className='text-white'>{details.platform}</span>
                    </p>
                    <ul className='space-y-3'>
                      {build.dev.map((d, i) => (
                        <li key={i} className='flex gap-3 text-white/80 text-lg leading-relaxed'>
                          <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]' />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {build.deployment && (
                    <div>
                      <h3 className='text-xl mb-3 text-amber-300'>
                        Deployment &amp; Launch
                      </h3>
                      {build.deployment.intro && (
                        <p className='text-white/80 text-lg leading-relaxed mb-3'>
                          {build.deployment.intro}
                        </p>
                      )}
                      <ul className='space-y-3'>
                        {build.deployment.items.map((d, i) => (
                          <li key={i} className='flex gap-3 text-white/80 text-lg leading-relaxed'>
                            <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]' />
                            {d}
                          </li>
                        ))}
                      </ul>
                      {build.deployment.note && (
                        <p className='text-white/80 text-lg leading-relaxed mt-3'>
                          {build.deployment.note}
                        </p>
                      )}
                    </div>
                  )}

                  {build.pages?.length > 0 && (
                    <div>
                      <h3 className='text-xl mb-3 text-amber-300'>Pages Built</h3>
                      <div className='flex flex-wrap gap-2'>
                        {build.pages.map((p) => (
                          <span
                            key={p}
                            className='rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80'
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {build.assets?.length > 0 && (
                    <div>
                      <h3 className='text-xl mb-3 text-amber-300'>Additional Assets</h3>
                      <ul className='space-y-3'>
                        {build.assets.map((a, i) => (
                          <li key={i} className='flex gap-3 text-white/80 text-lg leading-relaxed'>
                            <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]' />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              </Reveal>

              {/* Results */}
              <Reveal>
                <section className='rounded-2xl border border-white/10 bg-white/5 p-7 md:p-9'>
                  <SectionHeading>Results</SectionHeading>
                  <div className='space-y-4 text-white/80 text-lg leading-relaxed mb-5'>
                    {toParagraphs(results.summary).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {results.points?.length > 0 && (
                    <ul className='space-y-3'>
                      {results.points.map((p, i) => (
                        <li key={i} className='flex gap-3 text-white/80 text-lg leading-relaxed'>
                          <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14a800]' />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>

              {/* Key Takeaways */}
              <Reveal>
                <section>
                  <SectionHeading>Key Takeaways</SectionHeading>
                  <div className='grid sm:grid-cols-2 gap-5'>
                    {takeaways.map((t, i) => (
                      <div
                        key={i}
                        className='rounded-2xl border border-white/10 bg-white/5 p-6'
                      >
                        <h3 className='text-lg mb-2 text-white'>{t.title}</h3>
                        <p className='text-white/70 leading-relaxed'>{t.body}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>

              {/* Testimonial — only renders when the project has one */}
              {testimonial && (
                <Reveal>
                  <section>
                    <SectionHeading>Testimonial</SectionHeading>
                    <figure className='rounded-2xl border border-white/10 bg-white/5 p-7 md:p-9'>
                      <FaQuoteLeft className='text-[var(--accent)] text-3xl mb-5 opacity-80' />
                      <blockquote className='space-y-4 text-white/85 text-lg leading-relaxed'>
                        {toParagraphs(testimonial.quote).map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </blockquote>
                      <figcaption className='mt-7 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6'>
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className='h-12 w-12 rounded-full object-cover'
                          />
                        ) : (
                          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)] text-white'>
                            {initials(testimonial.name)}
                          </div>
                        )}
                        <div>
                          <div className='text-white'>{testimonial.name}</div>
                          {testimonial.title && (
                            <div className='text-white/60 text-sm'>{testimonial.title}</div>
                          )}
                          {(testimonial.relationship || testimonial.date) && (
                            <div className='text-white/40 text-xs mt-0.5'>
                              {[testimonial.relationship, testimonial.date]
                                .filter(Boolean)
                                .join(" · ")}
                            </div>
                          )}
                        </div>
                        {testimonial.source && (
                          <Link
                            href={testimonial.source}
                            target='_blank'
                            className='ml-auto inline-flex items-center gap-1 text-sm text-amber-300 hover:underline'
                          >
                            View on LinkedIn
                            <FiArrowUpRight />
                          </Link>
                        )}
                      </figcaption>
                    </figure>
                  </section>
                </Reveal>
              )}
            </div>

            {/* Sidebar — Project Details */}
            <div className='lg:col-span-1'>
              <Reveal delay={0.1}>
                <div className='lg:sticky lg:top-8 rounded-2xl border border-white/10 bg-white/5 p-7'>
                  <h3 className='text-sm uppercase tracking-widest text-white/50 mb-5'>
                    Project Details
                  </h3>
                  <dl className='space-y-4'>
                    {[
                      ["Client", details.client],
                      ["Industry", details.industry],
                      ["Platform", details.platform],
                      ["Project Type", details.projectType],
                      ["My Role", details.role],
                      ["Year", details.year],
                      ["Agency", details.agency],
                    ].map(([label, value]) =>
                      value ? (
                        <div
                          key={label}
                          className='flex justify-between gap-4 border-b border-white/5 pb-3'
                        >
                          <dt className='text-white/50'>{label}</dt>
                          <dd className='text-white text-right'>{value}</dd>
                        </div>
                      ) : null
                    )}
                  </dl>
                  {liveSite && (
                    <Link
                      href={liveSite}
                      target='_blank'
                      className='mt-6 flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10'
                    >
                      Visit Live Site
                      <FiArrowUpRight />
                    </Link>
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom back button */}
          <div className='mt-12 flex justify-center'>
            <button
              onClick={onBack}
              className='group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10'
            >
              <FiArrowLeft className='transition-transform group-hover:-translate-x-1' />
              Back to all projects
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCaseStudy;
