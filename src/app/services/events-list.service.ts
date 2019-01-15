import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";
import { Event } from "./../models/events";
@Injectable()
export class EventsListService {
  constructor() {}

  getEventList(): Observable<Event[]> {
    return of(EVENTS_LIST);
  }
  getEvent(id): Observable<any> {
    return of(EVENTS_LIST.filter(item => item.id == id));
  }
}

const EVENTS_LIST: Event[] = [
  {
    id: 1,
    name: "Metaldays",
    date: "January 17",
    location: {
      name: "Texas CA",
      lat: 31.96,
      lng: 99.9
    },
    imageUrl: "./assets/th1.jpg",
    ticketsAvailable: true,
    description:
      "Lorem ipsum dolor amet fashion axe cray pour-over green juice. Salvia everyday carry viral, PBR&B pop-up polaroid direct trade gochujang hot chicken disrupt gentrify quinoa crucifix pabst cred. "
  },
  {
    id: 2,
    name: "Big Day Out",
    date: "January 18",
    location: {
      name: "Dallas SF",
      lat: 32.77,
      lng: 96.7
    },
    imageUrl: "./assets/th2.jpg",
    ticketsAvailable: true,
    description:
      "Mlkshk brooklyn gastropub paleo bicycle rights. Man bun brunch helvetica food truck whatever tousled vegan vinyl pug cred mumblecore."
  },
  {
    id: 3,
    name: "C2C Country to Country",
    date: "January 18",
    location: {
      name: "Washington DC",
      lat: 47.75,
      lng: 120.74
    },
    imageUrl: "./assets/th3.jpg",
    ticketsAvailable: true,
    description:
      "Aesthetic taxidermy green juice put a bird on it kinfolk jean shorts viral. Meggings XOXO beard, lyft jean shorts intelligentsia synth."
  },
  {
    id: 4,
    name: "Electric Love",
    date: "January 17",
    location: {
      name: "Phoeniz AZ",
      lat: 33.44,
      lng: 112.07
    },
    imageUrl: "./assets/th4.jpg",
    ticketsAvailable: true,
    description:
      "Salvia lo-fi irony glossier, hoodie pabst squid hot chicken four dollar toast fashion axe taiyaki adaptogen vaporware vegan. Swag bicycle rights put a bird on it, live-edge sartorial 90's banjo blue bottle sustainable. "
  },
  {
    id: 5,
    name: "Urban Beach Week Usual",
    date: "January 17",
    location: {
      name: "Sacremento",
      lat: 38.58,
      lng: 121.49
    },
    imageUrl: "./assets/th5.jpg",
    ticketsAvailable: true,
    description:
      "YOLO edison bulb gastropub vinyl, sustainable squid schlitz hammock neutra live-edge activated charcoal humblebrag. Glossier VHS single-origin coffee celiac irony."
  },
  {
    id: 6,
    name: "Round Up Visual Country",
    date: "January 17",
    location: {
      name: "California",
      lat: 36.77,
      lng: 119.41
    },
    imageUrl: "./assets/th6.jpg",
    ticketsAvailable: false,
    description:
      "Fam ugh stumptown jianbing. Flannel kinfolk gastropub everyday carry 8-bit keytar craft beer intelligentsia, tattooed man braid retro you probably haven't heard of them scenester."
  }
];
