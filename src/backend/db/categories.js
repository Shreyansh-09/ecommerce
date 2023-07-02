import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    id: uuid(),
    categoryName: "soft drinks",
    description:
      "Soft drink is any water-based flavored drink, usually but not necessarily carbonated, and typically including added sweetener.",
  },
  {
    id: uuid(),
    categoryName: "energy drinks",
    description:
      "Energy drink is a type of drink containing stimulant compounds, usually caffeine, which is marketed as providing mental and physical stimulation. They may or may not be carbonated and may also contain sugar or sweeteners.",
  },
  {
    id: uuid(),
    categoryName: "herbal drinks",
    description:
      "Herbal beverages can be made with fresh or dried flowers, immature fruits, leaves, seeds, and/or roots by steeping (infusion) or boiling (decoction) of the source materials including herbs.",
  },
];
