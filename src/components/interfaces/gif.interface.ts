import { User } from './responseGifs.interface';

export interface Gif {
  id: string;
  url: string;
  title: string;
  alt_text: string;
  user?: User;
}
