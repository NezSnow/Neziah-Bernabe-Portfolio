/**
 * Add your work here. Place files in:
 *   public/multimedia/pubmats/
 *   public/multimedia/layouts/
 *   public/multimedia/videos/   (mp4, webm, or use embedUrl for YouTube)
 */
export const multimediaFilters = [
  { id: 'all', label: 'All' },
  { id: 'layouts', label: 'Layouts' },
  { id: 'videos', label: 'Video Edits' },
];

export const multimediaItems = [
  {
    id: 'video-company-profile',
    title: 'Company Profile Video',
    category: 'videos',
    type: 'video',
    src: '/multimedia/videos/Company Profile.mp4',
    poster: '/multimedia/videos/company-profile-preview.png',
  },
  {
    id: 'mangrove-planting-final',
    title: 'Mangrove Planting Layout',
    category: 'layouts',
    type: 'image',
    src: '/multimedia/layouts/MANGROVE PLANTING FINAL.png',
  },
  {
    id: 'video-pahayag-25',
    title: 'Church Invitational Video',
    category: 'videos',
    type: 'video',
    src: '/multimedia/videos/PAHAYAG 25.mp4',
    poster: '/multimedia/videos/pahayag-25-preview.jpg',
  },
  {
    id: 'video-church-event-highlights',
    title: 'Church Event Highlights',
    category: 'videos',
    type: 'video',
    src: '/multimedia/videos/Church Event Highlights.mp4',
    poster: '/multimedia/videos/church-event-highlights-preview.jpg',
  },
  {
    id: 'video-music-video-bts',
    title: 'Music Video BTS',
    category: 'videos',
    type: 'video',
    src: '/multimedia/videos/Music Video BTS.mp4',
    poster: '/multimedia/videos/music-video-bts-preview.jpg',
  },
  {
    id: 'video-wake-commemoration',
    title: 'Wake Commemoration Video',
    category: 'videos',
    type: 'video',
    src: '/multimedia/videos/Wake Commemoration Video.mp4',
    poster: '/multimedia/videos/wake-commemoration-preview.jpg',
  },
  {
    id: 'calling-card-layout',
    title: 'Calling Card Layout',
    category: 'layouts',
    type: 'image',
    src: '/multimedia/layouts/Calling Card Layout.png',
  },
  {
    id: 'church-event-slogan',
    title: 'Church Event Slogan',
    category: 'layouts',
    type: 'image',
    src: '/multimedia/layouts/Church Event Slogan.png',
  },
  // Example pubmat:
  // {
  //   id: 'pubmat-1',
  //   title: 'Event Poster',
  //   category: 'pubmats',
  //   type: 'image',
  //   src: '/multimedia/pubmats/event-poster.png',
  // },
  // Example layout:
  // {
  //   id: 'layout-1',
  //   title: 'Social Media Layout',
  //   category: 'layouts',
  //   type: 'image',
  //   src: '/multimedia/layouts/social-layout.png',
  // },
  // Example video (local file):
  // {
  //   id: 'video-1',
  //   title: 'Promo Reel',
  //   category: 'videos',
  //   type: 'video',
  //   src: '/multimedia/videos/promo-reel.mp4',
  //   poster: '/multimedia/videos/promo-reel-poster.jpg',
  // },
  // Example video (YouTube):
  // {
  //   id: 'video-2',
  //   title: 'Highlight Edit',
  //   category: 'videos',
  //   type: 'video',
  //   embedUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  //   poster: '/multimedia/videos/thumb.jpg',
  // },
];

export const multimediaGroups = [
  { id: 'layouts', label: 'Layouts', description: 'Social media, print, and brand layout designs.' },
  { id: 'videos', label: 'Video Edits', description: 'Edited reels, promos, and motion pieces.' },
];
