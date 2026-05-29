'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import { featuredProjects } from '@/data/projects.data';

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative z-10 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionTitle
          eyebrow="System Creations"
          title="PROJECTS CREATED"
        />

        <motion.div
          className="flex flex-col gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {featuredProjects.map((project) => (
            <Reveal key={project.id}>
              <motion.article
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid gap-0 lg:grid-cols-2">
                  <div
                    className={`relative min-h-[220px] overflow-hidden bg-gradient-to-br ${project.imageGradient} lg:min-h-[320px] ${project.image ? '' : 'p-10'}`}
                  >
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/55 to-transparent" />
                      </>
                    ) : (
                      <motion.div
                        className="absolute inset-0 opacity-40 mix-blend-screen"
                        initial={false}
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.6 }}
                        style={{
                          backgroundImage:
                            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent 45%), radial-gradient(circle at 80% 60%, rgba(0,212,255,0.25), transparent 40%)',
                        }}
                      />
                    )}
                    <motion.div
                      className="relative z-[1] flex h-full min-h-[220px] flex-col justify-end p-8 lg:min-h-[320px] lg:p-10"
                      initial={false}
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                        {project.liveUrl?.startsWith('http') ? 'Live Project' : 'Case Study'}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {project.title}
                      </h3>
                    </motion.div>
                  </div>

                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <p className="text-sm leading-relaxed text-white/60">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href={project.liveUrl}
                        target={project.liveUrl?.startsWith('http') ? '_blank' : undefined}
                        rel={project.liveUrl?.startsWith('http') ? 'noreferrer' : undefined}
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${project.accent} px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110`}
                      >
                        Live Demo
                        <FiExternalLink />
                      </Link>
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:border-neon-purple/45 hover:bg-white/[0.04]"
                        >
                          GitHub
                          <FiGithub />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(120deg, transparent 30%, rgba(139,92,246,0.08) 50%, transparent 70%)',
                  }}
                />
              </motion.article>
            </Reveal>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
