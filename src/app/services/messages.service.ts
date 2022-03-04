import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messageArray: Message[] = [];
  messageStringArray: string[] = [];

  getMessageArray(): Message[] {
    return this.messageArray;
  }

  messageArrayToStringArray() {
    this.messageStringArray = [];
    this.messageArray.forEach((message) => {
      this.messageStringArray.push(this.messageToString(message));
    });
  }

  getMessageArrayString() {
    return this.messageStringArray;
  }

  clearMessage(): void {
    this.messageArray = [];
    this.messageStringArray = [];
  }

  addMessage(message: Message): void {
    this.messageArray.push(message);
    this.messageStringArray.push(this.messageToString(message));
    //this.messageArrayToStringArray();
  }

  messageToString(message: Message): string {
    const personne: Personne = message.personne;
    let messageString: string;
    if (message.action == 'del') {
      return (messageString = `${personne.prenom} ${personne.nom} a été supprimé`);
    } else {
      return (messageString = `${personne.prenom} ${personne.nom} a été ajouté`);
    }
  }

  createAddPersonneMessage(personne: Personne) {
    let message: Message = {
      personne: personne,
      action: 'add',
    } as Message;
    this.addMessage(message);
  }

  createDelPersonneMessage(personne: Personne) {
    let message: Message = {
      personne: personne,
      action: 'del',
    } as Message;
    this.addMessage(message);
  }

  constructor() {
    this.messageArrayToStringArray();
  }
}
