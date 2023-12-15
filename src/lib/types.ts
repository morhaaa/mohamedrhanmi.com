import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectInfo = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
};

export type Link = {
  name: string;
  hash: string;
};

//text-lanaguages
export type Intro = {
  greetings: string;
  job: string;
  based: string;
  city: string;
  specialized: string;
  focus: string;
  contact: string;
};
export type Texts = {
  intro: Intro;
};
