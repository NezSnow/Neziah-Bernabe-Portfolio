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
    src: 'https://res.cloudinary.com/doe9uw7t6/video/upload/v1780321642/portfolio_assets/ogdmx9u9s3l9ez3fvorq.mp4',
    poster: 'https://res.cloudinary.com/doe9uw7t6/image/upload/v1780321624/portfolio_assets/vvwmihod4pyeewflzqof.jpg',
  },
  {
    id: 'mangrove-planting-final',
    title: 'Mangrove Planting Layout',
    category: 'layouts',
    type: 'image',
    src: 'https://res.cloudinary.com/doe9uw7t6/image/upload/v1780321622/portfolio_assets/i4zorz5trkoc4wfcbeju.png',
  },
  {
    id: 'video-pahayag-25',
    title: 'Church Invitational Video',
    category: 'videos',
    type: 'video',
    src: 'https://res.cloudinary.com/doe9uw7t6/video/upload/v1780324385/portfolio_assets/e6jlx80n8mnfmwaqgue6.mp4',
    poster: 'https://res.cloudinary.com/doe9uw7t6/image/upload/v1780321627/portfolio_assets/pzoxqi8blc2fuy7xcmdw.jpg',
  },
  {
    id: 'video-church-event-highlights',
    title: 'Church Event Highlights',
    category: 'videos',
    type: 'video',
    src: 'https://res.cloudinary.com/doe9uw7t6/video/upload/v1780324347/portfolio_assets/tr004lo2t2m0qrvcj7sw.mp4',
    poster: 'https://res.cloudinary.com/doe9uw7t6/image/upload/v1780321623/portfolio_assets/dk5peycsh6hnkw2mh4i9.jpg',
  },
  {
    id: 'video-music-video-bts',
    title: 'Music Video BTS',
    category: 'videos',
    type: 'video',
    src: 'https://res.cloudinary.com/doe9uw7t6/video/upload/v1780324363/portfolio_assets/zlgec3g4sbxc5lgjavua.mp4',
    poster: 'https://res.cloudinary.com/doe9uw7t6/image/upload/v1780321625/portfolio_assets/odgurfd3j9i7lzvcb2le.jpg',
  },
  {
    id: 'video-wake-commemoration',
    title: 'Wake Commemoration Video',
    category: 'videos',
    type: 'video',
    src: 'https://res.cloudinary.com/doe9uw7t6/video/upload/v1780324400/portfolio_assets/jefqvawikd70lq0zzdmz.mp4',
    poster: 'https://res.cloudinary.com/doe9uw7t6/image/upload/v1780321628/portfolio_assets/dwe1tqrhm9kejoomwq4k.jpg',
  },
  {
    id: 'calling-card-layout',
    title: 'Calling Card Layout',
    category: 'layouts',
    type: 'image',
    src: 'https://res.cloudinary.com/doe9uw7t6/image/upload/v1780321616/portfolio_assets/bjvargva3jgnqjxl1xam.png',
  },
  {
    id: 'church-event-slogan',
    title: 'Church Event Slogan',
    category: 'layouts',
    type: 'image',
    src: 'https://res.cloudinary.com/doe9uw7t6/image/upload/v1780321618/portfolio_assets/o7xtixtmzp2x8gs5kddf.png',
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
