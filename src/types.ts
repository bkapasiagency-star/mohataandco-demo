export interface Leader {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  experience: string;
  specialization: string[];
  linkedin: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  subservices: string[];
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  details: string[];
  bgAccent: string;
}

export interface Insight {
  id: string;
  category: 'Tax Updates' | 'GST Updates' | 'Budget' | 'Compliance Calendar' | 'Business Articles' | 'Regulatory Changes';
  date: string;
  title: string;
  excerpt: string;
  content: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  preferredTime: string;
}
