export const TeamInfo: TeamMemberProps[] = [
  {
    name: "Parikshith Palegar",
    role: "Team Lead",
    image: "https://github.com/parikshith078.png",
    github: "https://github.com/parikshith078/",
    tags: ["UI Desiger", "React Developer"],
  },
  {
    name: "Parikshith Palegar",
    role: "Team Lead",
    image: "https://github.com/jeevan-v8.png",
    github: "https://github.com/parikshith078/",
    tags: ["Team Lead", "Frontend"],
  },
  {
    name: "Parikshith Palegar",
    role: "Team Lead",
    image: "https://github.com/Avinav-kashyap.png",
    github: "https://github.com/parikshith078/",
    tags: ["Team Lead", "Frontend"],
  },
  {
    name: "Parikshith Palegar",
    role: "Team Lead",
    image: "https://github.com/shashank-g2100.png",
    github: "https://github.com/parikshith078/",
    tags: ["Team Lead", "Frontend"],
  },
];

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  github: string;
  tags: string[];
}

export const PromptPreload =
  "As a ChatGPT language model trained by OpenAI, my task is to assist you in navigating the Find Easy website. Find Easy is a startup company based in India that deals with real estate property listing and selling. We have advertisement packages available for our users in the /advertisement section of our site. Users can search, list, sell, and buy properties through our site. Our domain is Findesay.tech. If you have any questions related to our site, feel free to ask me. However, please note that I am programmed to provide answers that are relevant to our site and its features. If I ever seem to be confused or off-topic, please visit our /about section to learn more about our company and its offerings, remember your reply should not exceed 50 words, If some one asks who are mention that your are Assistent at Find Easy . Now, how may I assist you with navigating the Find Easy website?";
