export type Project = {
  slug: string;
  name: string;
  url: string;
  industry: string;
  category: "Websites" | "E-commerce";
  image: string | null;
  imageWidth: number;
  imageHeight: number;
  live: boolean;
  previewIssue: "capture-unavailable" | "unavailable" | "not-found" | null;
};

function project(
  slug: string,
  name: string,
  url: string,
  industry: string,
  category: Project["category"],
  options: Partial<Pick<Project, "image" | "imageWidth" | "imageHeight" | "previewIssue">> = {},
): Project {
  return {
    slug,
    name,
    url,
    industry,
    category,
    image: options.image === undefined ? `/portfolio/${slug}.avif` : options.image,
    imageWidth: options.imageWidth ?? 390,
    imageHeight: options.imageHeight ?? 4800,
    live: true,
    previewIssue: options.previewIssue ?? null,
  };
}

export const projects: Project[] = [
  project(
    "hotel-aurelia",
    "Villa Aurelia",
    "https://hotelaurelia.online/",
    "Boutique hotel",
    "Websites",
  ),
  project(
    "schlosshotel-kitzbuehel",
    "Schlosshotel Kitzbühel",
    "https://www.schlosshotel-kitzbuehel.com/en",
    "Luxury hotel · Austria",
    "Websites",
  ),
  project(
    "club-charlestown",
    "Club Charlestown",
    "https://clubcharlestown.com.au/",
    "Hospitality & entertainment",
    "Websites",
    { imageHeight: 844 },
  ),
  project("delice", "Délice", "https://delice.ca/", "Restaurant & pizzeria", "Websites"),
  project(
    "room-and-pillar",
    "Room & Pillar",
    "https://www.roomandpillar.com/",
    "Property & insurance investment",
    "Websites",
    { image: null, previewIssue: "capture-unavailable" },
  ),
  project("becore", "Becore", "https://becore.se/", "Fitness & wellness", "E-commerce"),
  project(
    "agnes-toth",
    "AGNESTOTH",
    "https://agnestoth.com/",
    "Luxury embroidered handbags",
    "E-commerce",
  ),
  project(
    "estudio-niksen",
    "Estudio Niksen",
    "https://estudioniksen.com/",
    "Fashion & denim",
    "E-commerce",
  ),
  project("nothin", "Nothin’", "https://www.noth.in/", "Creative studio · Paris", "Websites", {
    image: null,
    previewIssue: "capture-unavailable",
  }),
  project("sezane", "Sézane", "https://www.sezane.com/", "Fashion & accessories", "E-commerce", {
    image: null,
    previewIssue: "capture-unavailable",
  }),
  project("qissa", "Qissa", "https://www.qissa.co.uk/", "Restaurant · Sevenoaks", "Websites"),
  project(
    "paul-kalkbrenner",
    "Paul Kalkbrenner",
    "https://www.paulkalkbrenner.net/",
    "Music & entertainment",
    "Websites",
  ),
  project(
    "theobroma-chocolat",
    "Theobroma Chocolat",
    "https://theobromachocolat.com/",
    "Chocolate & confectionery",
    "E-commerce",
  ),
  project("wowmade", "WowMade", "https://wowmade.ai/", "AI creative platform", "Websites"),
  project("killstar", "KILLSTAR", "https://www.killstar.com/", "Alternative fashion", "E-commerce"),
  project(
    "cartier-roadster",
    "Cartier Roadster",
    "https://www.cartier.com/en-us/roadster-universe.html",
    "Luxury watch experience",
    "Websites",
    { image: null, previewIssue: "capture-unavailable" },
  ),
  project("heirest", "HEIREST", "https://heirest.com/", "Fine jewellery", "E-commerce"),
  project(
    "pier-gorelli",
    "Pier Gorelli",
    "https://piergorelli.com/",
    "Creative development",
    "Websites",
  ),
  project(
    "stefano-bg",
    "Stéfano Girardelli",
    "https://www.stefanobg.com/",
    "Multidisciplinary design",
    "Websites",
  ),
  project(
    "concrete-management",
    "Concrete",
    "https://www.concretemanagement.ch/fr",
    "Property management",
    "Websites",
    { imageHeight: 844 },
  ),
  project(
    "joshgrafik",
    "Joshgrafik",
    "https://www.joshgrafik.com/",
    "Design & development studio",
    "Websites",
  ),
  project("igin-usa", "IGIN USA", "https://iginusa.com/", "Beauty & hair colour", "E-commerce"),
  project(
    "type-something",
    "TypeSomething",
    "https://typesomething.co/",
    "Website builder",
    "Websites",
  ),
  project("product-inc", "Product Inc.", "https://www.product.inc/", "Product design", "Websites"),
  project(
    "bd-emerson",
    "BD Emerson",
    "https://www.bdemerson.com/",
    "Cybersecurity consulting",
    "Websites",
  ),
  project(
    "armor-bd",
    "Armor Bangladesh",
    "https://www.armor-bd.com/",
    "Banking technology",
    "Websites",
  ),
  project("edolus", "EDOLUS", "https://edolus.com/", "Creative portfolio", "Websites", {
    imageHeight: 844,
  }),
  project(
    "alejandro-ha",
    "Alejandro HA",
    "https://alejandroha.com/",
    "Creative web development",
    "Websites",
  ),
  project(
    "orchid-security",
    "Orchid",
    "https://www.orchid.security/",
    "Identity security",
    "Websites",
  ),
  project(
    "kott-studio",
    "Kott Studio",
    "https://kott.studio/",
    "Design & branding studio",
    "Websites",
  ),
  project("horne", "HORNE", "https://shophorne.com/", "Furniture & lighting", "E-commerce", {
    imageHeight: 844,
  }),
  project("lagence", "L’AGENCE", "https://lagence.com/", "Fashion & luxury", "E-commerce", {
    imageHeight: 7269,
  }),
  project(
    "le-nil-bruxelles",
    "Le Nil Bruxelles",
    "https://lenil-bruxelles-i53u.vercel.app/",
    "Restaurant · Brussels",
    "Websites",
    { imageWidth: 364, imageHeight: 8700 },
  ),
  project(
    "more-labs",
    "More Labs",
    "https://www.morelabs.com/",
    "Health & wellness",
    "E-commerce",
    { imageHeight: 8276 },
  ),
  project("premiata", "Premiata", "https://premiata.it/", "Footwear & fashion", "E-commerce"),
  project(
    "padel-pulse-ace",
    "Padel Pulse Ace",
    "https://padelpulseace.com/",
    "Padel & sports",
    "Websites",
    { imageWidth: 405, imageHeight: 8651 },
  ),
  project("baked-pk", "Baked.pk", "https://baked.pk/", "Bakery · Pakistan", "E-commerce", {
    imageWidth: 312,
    imageHeight: 8700,
  }),
  project(
    "contra-coffee",
    "Contra Coffee",
    "https://contracoffee.pk/",
    "Café · Lahore",
    "Websites",
  ),
];
