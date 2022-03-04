import { Personne } from './personne';

export interface Message {
  personne: Personne;
  action: string;
}
