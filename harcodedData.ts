type Photographer = {
  tags: string[];
  firstName: string;
  lastName: string;
  profilePicDominantColor: string | null;
  profilePicUrl: string | null;
  id: number;
  city: string;
  country: string;
  price: number | null;
  tagLine: string | null;
};

const photographers: Photographer[] = [
  {
    firstName: "Mimi Keel",
    lastName: "Keel",
    id: 243,
    city: "London",
    country: "UK",
    tags: ["profilePicUrl", "events", "travel", "animals"],
    tagLine: "Voir le beau dans le quotidien",
    price: 400,
    profilePicUrl: "MimiKeel.jpg",
    profilePicDominantColor: "",
  },
  {
    firstName: "Ellie-Rose",
    lastName: "Wilkens",
    id: 930,
    city: "Paris",
    country: "France",
    tags: ["sports", "architecture"],
    tagLine: "Capturer des compositions complexes",
    price: 250,
    profilePicUrl: "EllieRoseWilkens.jpg",
    profilePicDominantColor: "",
  },
  {
    firstName: "Tracy",
    lastName: "Galindo",
    id: 82,
    city: "Montreal",
    country: "Canada",
    tags: ["art", "fashion", "events"],
    tagLine: "Photographe freelance",
    price: 500,
    profilePicUrl: "TracyGalindo.jpg",
    profilePicDominantColor: "",
  },
  {
    firstName: "Nabeel",
    lastName: "Bradford",
    id: 527,
    city: "Mexico City",
    country: "Mexico",
    tags: ["travel", "profilePicUrl"],
    tagLine: "Toujours aller de l'avant",
    price: 350,
    profilePicUrl: "NabeelBradford.jpg",
    profilePicDominantColor: "",
  },
  {
    firstName: "Rhode",
    lastName: "Dubois",
    id: 925,
    city: "Barcelona",
    country: "Spain",
    tags: ["sports", "fashion", "events", "animals"],
    tagLine: "Je crée des souvenirs",
    price: 275,
    profilePicUrl: "RhodeDubois.jpg",
    profilePicDominantColor: "",
  },
  {
    firstName: "Marcel",
    lastName: "Nikolic",
    id: 195,
    city: "Berlin",
    country: "Germany",
    tags: ["travel", "architecture"],
    tagLine: "Toujours à la recherche de LA photo",
    price: 300,
    profilePicUrl: "MarcelNikolic.jpg",
    profilePicDominantColor: "",
  },
];

const tagsHashMap = photographers.reduce((tagsAcc, photographers) => {
  photographers.tags.forEach((tag) => {
    if (tagsAcc[tag] == null) {
      tagsAcc[tag] = true;
    }
  });
  return tagsAcc;
}, {} as Record<string, true>);

const allTags = Object.keys(tagsHashMap);

export { photographers, allTags };
