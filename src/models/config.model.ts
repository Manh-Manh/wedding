export interface Person {
  name: string;
  description: string;
  wittyDescription: string;
  image: string;
  parents: string;
  homeLocation: {
    name: string;
    mapUrl: string;
  };
}

export interface WeddingEvent {
  name: string;
  date: string; // ISO format e.g., "2025-11-15T10:00:00"
  venue: string;
  address: string;
  mapUrl: string;
}

export interface LoveStoryItem {
  date: string; // ISO format date e.g., "2022-04-10"
  image: string;
  content: string;
}

export interface LoveStory {
  title: string;
  milestones: LoveStoryItem[];
}

export interface TemplateInfo {
    heroImage: string;
    previewImage: string;
    name: string;
    description: string;
}

export interface ThankYou {
  title: string;
  message: string;
}

export interface Footer {
  authorName: string;
  authorLink?: string;
}

export interface GiftInfo {
  accountHolder: string;
  accountNumber: string;
  bankName: string;
  qrCodeUrl: string;
}

export interface GiftingSection {
  title: string;
  intro: string;
  groom: GiftInfo;
  bride: GiftInfo;
}

export interface GuestbookSection {
  title: string;
  intro: string;
}

export interface MiniGameQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface MiniGameResult {
  minScore: number;
  message: string;
}

export interface MiniGame {
  title: string;
  intro: string;
  prizeNotice: string;
  questions: MiniGameQuestion[];
  results: MiniGameResult[];
}

export interface SectionVisibility {
  countdown: boolean;
  couple: boolean;
  story: boolean;
  gallery: boolean;
  event: boolean;
  gifting: boolean;
  guestbook: boolean;
  thankYou: boolean;
  miniGame: boolean;
}

export interface AdvancedFeatures {
  fallingEffects: boolean;
}

export interface WeddingConfig {
  couple: {
    groom: Person;
    bride: Person;
  };
  loveQuote: {
    text: string;
    author: string;
  };
  mainEvent: WeddingEvent;
  loveStory: LoveStory;
  galleryImages: {
    [key: string]: string[];
  };
  templates: {
    [key: string]: TemplateInfo;
  };
  receptionDetails: {
    backgroundImg: string;
  };
  thankYou: ThankYou;
  gifting: GiftingSection;
  guestbook: GuestbookSection;
  miniGame: MiniGame;
  footer: Footer;
  sectionVisibility: SectionVisibility;
  advancedFeatures: AdvancedFeatures;
}