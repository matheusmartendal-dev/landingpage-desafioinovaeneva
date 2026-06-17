export interface WebdoorSlide {
  id: number;
  title: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  buttonText: string;
  buttonLink: string;
  isExternal?: boolean;
}

export interface AccordionItem {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  link: string;
}

export interface VideoTestimony {
  id: number;
  thumbnailUrl: string;
  youtubeId: string;
  quote: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  itemIndex: number;
}
