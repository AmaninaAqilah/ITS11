import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/user';

export interface Message {
  createdAt: firebase.firestore.FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  user$ : Observable<User>;
  user: User;
  currentUser: firebase.User;
  

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged((user) => {
            this.currentUser = user;
          });
   }

  //chat functionality

  addChatMsg(msg){
    return this.afs.collection('chats').add({
      msg: msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  getChatMsg(){
    let users = [];
    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        return this.afs.collection('chats', ref => ref.orderBy('createdAt')).valueChanges({idField: 'id'}) as Observable<Message[]>;
      }),
      map(chats => {
        for(let c of chats){
          c.fromName = this.getUserForMsg(c.from, users);
          c.myMsg = this.currentUser.uid == c.from;
        }
        return chats;
      })
    )
  }

  private getUsers() {
    return this.afs.collection('user').valueChanges({ idField: 'userId' }) as Observable<User[]>;
  }

  private getUserForMsg(msgFromId, users: User[]): string {
    for (let usr of users) {
      if (usr.userId == msgFromId) {
        return usr.userName;
      }
    }//admin will reply from here
    return 'Admin';
  }

  //admins

    //for admin
    // admin$: Observable<Admin>;
    // admin: Admin;
    // currentAdmin: firebase.User;

   // this.afAuth.onAuthStateChanged((admin) => {
          //   this.currentAdmin = admin;
          // });

    // getChatMsgA(){
  //   let admins = [];
  //   return this.getAdmins().pipe(
  //     switchMap(res => {
  //       admins = res;
  //       return this.afs.collection('chats', ref => ref.orderBy('createdAt')).valueChanges({idField: 'id'}) as Observable<Message[]>;
  //     }),
  //     map(chats => {
  //       for(let c of chats){
  //         c.fromName = this.getUserForMsg(c.from, admins);
  //         c.myMsg = this.currentAdmin.uid == c.from;
  //       }
  //       return chats;
  //     })
  //   )
  // }

  // private getAdmins() {
  //   return this.afs.collection('admin').valueChanges({ idField: 'adminId' }) as Observable<Admin[]>;
  // }

  // private getAdminForMsg(msgFromId, admins: Admin[]): string {
  //   for (let adm of admins) {
  //     if (adm.adminId == msgFromId) {
  //       return adm.adminName;
  //     }
  //   }
  //   return 'Deleted';
  // }



}
