export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  tag: 'Cumpleaños' | 'Trampolines' | 'Laser Tag' | 'General';
  avatar?: string;
}

export interface ActivityPackage {
  id: string;
  name: string;
  pricePerPerson: number;
  duration: string; // e.g. "60 min", "120 min"
  features: string[];
  recommended: boolean;
  type: 'trampoline' | 'lasertag' | 'combo' | 'birthday';
}

export interface OpeningHour {
  day: string;
  hours: string;
}
