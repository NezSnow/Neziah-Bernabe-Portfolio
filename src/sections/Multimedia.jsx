'use client';

import { useMemo, useState } from 'react';
import { FiPlay } from 'react-icons/fi';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import {
  multimediaFilters,
  multimediaGroups,
  multimediaItems,
} from '@/data/multimedia.data';

function ImageCard({ item, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item)}
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] text-left sm:aspect-[3/4]"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        className="object-cover transition duration-500 group-hover:scale-[1.04]"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent opacity-90"
        initial={false}
      />
      <motion.div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-sm font-semibold text-white">{item.title}</p>
      </motion.div>
    </motion.button>
  );
}

function LocalVideoCard({ item }) {
  const [loadVideo, setLoadVideo] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
      <motion.div className="relative aspect-video w-full bg-black/50" whileHover={{ scale: 1.005 }}>
        {loadVideo ? (
          <video
            src={item.src}
            controls
            playsInline
            preload="metadata"
            {...(item.poster ? { poster: item.poster } : {})}
            className="h-full w-full object-contain"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoadVideo(true)}
            className="group/play absolute inset-0 flex flex-col items-center justify-center gap-3 text-white"
            aria-label={`Play ${item.title}`}
          >
            {item.poster && (
              <>
                <Image
                  src={item.poster}
                  alt={`${item.title} preview`}
                  fill
                  className="object-cover transition duration-500 group-hover/play:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/35 to-[#050816]/20" />
              </>
            )}
            {!item.poster && (
              <motion.div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-[#0b1020] to-neon-blue/15" />
            )}
            <span className="relative z-[1] flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-black/40 shadow-lg backdrop-blur transition group-hover/play:scale-105 group-hover/play:border-neon-purple/50">
              <FiPlay className="ml-1 text-2xl" />
            </span>
            <span className="relative z-[1] text-sm font-medium">Tap to play</span>
          </button>
        )}
      </motion.div>
      <div className="border-t border-white/[0.06] p-4">
        <p className="text-sm font-semibold text-white">{item.title}</p>
      </div>
    </article>
  );
}

function VideoCard({ item }) {
  if (item.embedUrl) {
    return (
      <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
        <motion.div className="relative aspect-video w-full">
          <iframe
            src={item.embedUrl}
            title={item.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
        <motion.div className="border-t border-white/[0.06] p-4">
          <p className="text-sm font-semibold text-white">{item.title}</p>
        </motion.div>
      </article>
    );
  }

  return <LocalVideoCard item={item} />;
}

function EmptyGroup({ label, description, folderId }) {
  return (
    <motion.div
      className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="text-sm font-medium text-white/70">No {label.toLowerCase()} yet</p>
      <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-white/40">{description}</p>
      <p className="mt-4 text-xs text-white/30">
        Add files to <span className="text-neon-purple/80">public/multimedia/{folderId}/</span> and list
        them in <span className="text-neon-purple/80">src/data/multimedia.data.js</span>
      </p>
    </motion.div>
  );
}

function MediaGrid({ items, onOpenImage }) {
  const images = items.filter((i) => i.type === 'image');
  const videos = items.filter((i) => i.type === 'video');

  return (
    <motion.div layout className="space-y-8">
      {images.length > 0 && (
        <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.04}>
              <ImageCard item={item} onOpen={onOpenImage} />
            </Reveal>
          ))}
        </motion.div>
      )}
      {videos.length > 0 && (
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          {videos.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <VideoCard item={item} />
            </Reveal>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Multimedia() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return multimediaItems;
    return multimediaItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const visibleGroups = useMemo(() => {
    if (activeFilter !== 'all') {
      return multimediaGroups.filter((g) => g.id === activeFilter);
    }
    return multimediaGroups;
  }, [activeFilter]);

  return (
    <section id="multimedia" className="section-padding relative z-10 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionTitle
          eyebrow="Creative Work"
          title="MULTIMEDIA"
          subtitle="Pubmats, layouts, and video edits — visual work crafted for events, brands, and storytelling."
        />

        <motion.div className="mb-10 flex flex-wrap gap-2">
          {multimediaFilters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`relative rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'border-neon-purple/50 bg-neon-purple/15 text-white'
                    : 'border-white/10 bg-white/[0.02] text-white/55 hover:border-white/20 hover:text-white'
                }`}
              >
                {filter.label}
                {isActive && (
                  <motion.span
                    layoutId="multimedia-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/15"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="space-y-14"
          >
            {visibleGroups.map((group) => {
              const groupItems =
                activeFilter === 'all'
                  ? multimediaItems.filter((item) => item.category === group.id)
                  : filteredItems;

              return (
                <motion.div key={group.id} layout className="space-y-6">
                  {activeFilter === 'all' && (
                    <Reveal>
                      <motion.div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                          {group.label}
                        </h3>
                        <p className="max-w-xl text-sm text-white/45">{group.description}</p>
                      </motion.div>
                    </Reveal>
                  )}

                  {groupItems.length > 0 ? (
                    <MediaGrid items={groupItems} onOpenImage={setLightbox} />
                  ) : (
                    <EmptyGroup label={group.label} description={group.description} folderId={group.id} />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]/95 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Close preview"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
              onClick={() => setLightbox(null)}
            >
              <FiX className="text-xl" />
            </button>
            <motion.div
              className="relative max-h-[90vh] w-full max-w-4xl"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 sm:aspect-video">
                <Image
                  src={lightbox.src}
                  alt={lightbox.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>
              <p className="mt-4 text-center text-sm font-medium text-white">{lightbox.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
