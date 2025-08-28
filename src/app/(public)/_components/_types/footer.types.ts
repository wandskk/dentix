export type DeveloperInfo = {
  name: string;
  linkedinUrl: string;
  title: string;
};

export type CopyrightInfo = {
  text: string;
  developer: DeveloperInfo;
};
