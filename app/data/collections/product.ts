// app/data/collections/product.ts
// --- MASTER PRODUCT DATABASE ---
// Contains all product information for the dynamic routing.

export const allProducts = [
  // --- EMERALDS (IDs 1-4) ---
  {
    id: "1",
    name: "The Verdant Empress Ring",
    price: 4800,
    category: "rings",
    collection: "emerald",
    description: "A celebration of nature's most captivating hue. This ring features a 2.5-carat Colombian emerald surrounded by a halo of brilliant-cut diamonds.",
    images: ["/collections/emerald/emr1.webp"],
    rating: 5.0,
    reviews: 24,
    collectionPath: "/emerald",
    collectionName: "Emeralds",
    details: {
      material: "18k Yellow Gold",
      gemstone: "Natural Colombian Emerald (2.5 ct)",
      secondaryStone: "VVS1 Diamonds (0.8 ct total)",
      cut: "Emerald Cut",
      origin: "Muzo Mines, Colombia",
      setting: "Halo Prong Setting"
    }
  },
  {
    id: "2",
    name: "Forest Drop Earrings",
    price: 2200,
    category: "earrings",
    collection: "emerald",
    description: "Elegant drops of deep green. Pear-shaped emeralds suspended from a delicate diamond pavé connection.",
    images: ["/collections/emerald/eme.webp"],
    rating: 4.8,
    reviews: 12,
    collectionPath: "/emerald",
    collectionName: "Emeralds",
    details: {
      material: "18k White Gold",
      gemstone: "Pear-shaped Emeralds (1.2 ct each)",
      cut: "Pear Cut",
      length: "3.5 cm",
      fastening: "Butterfly Back"
    }
  },
  {
    id: "3",
    name: "Colombian Emerald Pendant",
    price: 3500,
    category: "necklace",
    collection: "emerald",
    description: "A timeless solitaire pendant suspended on a fluid 18k gold chain.",
    images: ["/collections/emerald/emp.webp"],
    rating: 4.9,
    reviews: 8,
    collectionPath: "/emerald",
    collectionName: "Emeralds",
    details: {
      material: "18k Yellow Gold Chain",
      gemstone: "Emerald Cut Emerald (1.5 ct)",
      chainLength: "18 inches (Adjustable)",
      origin: "Colombia"
    }
  },
  {
    id: "4",
    name: "Ivy League Tennis Bracelet",
    price: 5100,
    category: "bracelets",
    collection: "emerald",
    description: "A continuous line of vivid green alternating between emeralds and diamonds.",
    images: ["/collections/emerald/emb.webp"],
    rating: 5.0,
    reviews: 15,
    collectionPath: "/emerald",
    collectionName: "Emeralds",
    details: {
      material: "Platinum",
      gemstone: "Round Emeralds & Diamonds",
      totalWeight: "4.5 ct total weight",
      clasp: "Hidden Safety Clasp",
      length: "7 inches"
    }
  },

  // --- RUBIES (IDs 5-8) ---
  {
    id: "5",
    name: "The Crimson Heart Ring",
    price: 6200,
    category: "rings",
    collection: "ruby",
    description: "Symbolizing passion and power. A pigeon-blood ruby set in rose gold.",
    images: ["/collections/ruby/ruh.webp"],
    rating: 5.0,
    reviews: 18,
    collectionPath: "/ruby",
    collectionName: "Rubies",
    details: {
      material: "18k Rose Gold",
      gemstone: "Unheated Burmese Ruby (2.0 ct)",
      cut: "Cushion Cut",
      origin: "Myanmar (Burma)",
      certification: "GIA Certified"
    }
  },
  {
    id: "6",
    name: "Scarlet Drop Earrings",
    price: 3100,
    category: "earrings",
    collection: "ruby",
    description: "Radiant rubies that catch the light with every movement.",
    images: ["/collections/ruby/rue.webp"],
    rating: 4.7,
    reviews: 9,
    collectionPath: "/ruby",
    collectionName: "Rubies",
    details: {
      material: "18k Yellow Gold",
      gemstone: "Oval Rubies",
      cut: "Oval Cut",
      setting: "Bezel Set",
      weight: "3.2 grams"
    }
  },
  {
    id: "7",
    name: "Imperial Ruby Necklace",
    price: 8500,
    category: "necklace",
    collection: "ruby",
    description: "An heirloom quality piece featuring ethically sourced Burmese rubies.",
    images: ["/collections/ruby/run.webp"],
    rating: 5.0,
    reviews: 5,
    collectionPath: "/ruby",
    collectionName: "Rubies",
    details: {
      material: "18k White Gold",
      gemstone: "Graduated Rubies",
      totalWeight: "12.0 ct",
      length: "16 inches (Choker Style)",
      clasp: "Box Clasp with Safety"
    }
  },
  {
    id: "8",
    name: "Royal Tennis Bracelet",
    price: 4900,
    category: "bracelets",
    collection: "ruby",
    description: "A classic design reimagined with the intense fire of red rubies.",
    images: ["/collections/ruby/rub.webp"],
    rating: 4.9,
    reviews: 21,
    collectionPath: "/ruby",
    collectionName: "Rubies",
    details: {
      material: "14k Rose Gold",
      gemstone: "Round Cut Rubies",
      totalWeight: "5.0 ct",
      width: "3mm",
      setting: "4-Prong"
    }
  },

  // --- TANZANITES (IDs 9-12) ---
  {
    id: "9",
    name: "The Kilimanjaro Star Ring",
    price: 5600,
    category: "rings",
    collection: "tanzanite",
    description: "A gemstone rare than diamonds. This violet-blue stone is a true marvel.",
    images: ["/collections/tanzanite/tar.webp"],
    rating: 5.0,
    reviews: 11,
    collectionPath: "/tanzanite",
    collectionName: "Tanzanite",
    details: {
      material: "Platinum",
      gemstone: "Violet-Blue Tanzanite (3.0 ct)",
      secondaryStone: "Trillion Cut Diamonds",
      origin: "Merelani Hills, Tanzania",
      cut: "Oval Modified Brilliant"
    }
  },
  {
    id: "10",
    name: "Violet Dusk Drops",
    price: 2800,
    category: "earrings",
    collection: "tanzanite",
    description: "Deep indigo hues that shift color under different lighting.",
    images: ["/collections/tanzanite/tae.webp"],
    rating: 4.8,
    reviews: 14,
    collectionPath: "/tanzanite",
    collectionName: "Tanzanite",
    details: {
      material: "18k White Gold",
      gemstone: "Pear Tanzanites",
      cut: "Pear Cut",
      color: "Deep Violet-Blue",
      dropLength: "2.5 cm"
    }
  },
  {
    id: "11",
    name: "Ocean of Indigo Pendant",
    price: 4200,
    category: "necklace",
    collection: "tanzanite",
    description: "A single, perfect tanzanite stone representing the depth of the ocean.",
    images: ["/collections/tanzanite/tan.webp"],
    rating: 4.9,
    reviews: 7,
    collectionPath: "/tanzanite",
    collectionName: "Tanzanite",
    details: {
      material: "18k White Gold Chain",
      gemstone: "Round Tanzanite (2.2 ct)",
      setting: "Halo",
      chainType: "Cable Chain",
      length: "18 inches"
    }
  },
  {
    id: "12",
    name: "Twilight Tennis Bracelet",
    price: 6500,
    category: "bracelets",
    collection: "tanzanite",
    description: "Wrap your wrist in the colors of the twilight sky.",
    images: ["/collections/tanzanite/tab.webp"],
    rating: 5.0,
    reviews: 3,
    collectionPath: "/tanzanite",
    collectionName: "Tanzanite",
    details: {
      material: "Platinum",
      gemstone: "Oval Tanzanites",
      totalWeight: "8.5 ct",
      colorGrade: "AAA (Vivid)",
      clasp: "Box with Safety Latch"
    }
  },

  // --- RINGS (IDs 13-20) ---
  {
    id: "13",
    name: "The Ethereal Solitaire",
    price: 3200,
    category: "rings",
    subCategory: "Engagement",
    description: "A pared-back solitaire ring for the classic engagement look.",
    images: ["/category/rings/ring1.webp"],
    rating: 4.6,
    reviews: 8,
    details: {
      material: "18k White Gold",
      gemstone: "Round Diamond (1.2 ct)"
    }
  },
  {
    id: "14",
    name: "Veloria Eternity Band",
    price: 1800,
    category: "rings",
    subCategory: "Wedding",
    description: "A refined eternity band with micro-pavé diamonds.",
    images: ["/category/rings/ring3.webp"],
    rating: 4.7,
    reviews: 5,
    details: {
      material: "18k Yellow Gold",
      gemstone: "Pavé Diamonds"
    },
    isNew: true
  },
  {
    id: "15",
    name: "Midnight Sapphire Halo",
    price: 4450,
    category: "rings",
    subCategory: "Gemstone",
    description: "Sapphire center with a halo of brilliant diamonds.",
    images: ["/category/rings/ring4.webp"],
    rating: 4.5,
    reviews: 6,
    details: {
      material: "18k White Gold",
      gemstone: "Sapphire (1.5 ct)"
    }
  },
  {
    id: "16",
    name: "The Monarch Signet",
    price: 950,
    category: "rings",
    subCategory: "Gold",
    description: "A modern signet crafted in 18k gold — clean and bold.",
    images: ["/category/rings/ring2.webp"],
    rating: 4.2,
    reviews: 3,
    details: {
      material: "18k Gold",
      finish: "High polish"
    }
  },
  {
    id: "17",
    name: "Diamond Pavé Twist",
    price: 1500,
    category: "rings",
    subCategory: "Fashion",
    description: "A twisted band set with pavé diamonds for everyday sparkle.",
    images: ["/category/rings/ring5.webp"],
    rating: 4.4,
    reviews: 7,
    details: {
      material: "14k White Gold",
      gemstone: "Diamond pavé"
    },
    isNew: true
  },
  {
    id: "18",
    name: "Rose Gold Stackable",
    price: 800,
    category: "rings",
    subCategory: "Fashion",
    description: "Lightweight stackable rings in warm rose gold.",
    images: ["/category/rings/ring6.webp"],
    rating: 4.1,
    reviews: 12,
    details: {
      material: "18k Rose Gold",
      style: "Stackable"
    }
  },
  {
    id: "19",
    name: "Vintage Emerald Cut",
    price: 4100,
    category: "rings",
    subCategory: "Engagement",
    description: "Emerald-cut center stone with vintage shoulders.",
    images: ["/category/rings/ring7.webp"],
    rating: 4.8,
    reviews: 9,
    details: {
      material: "Platinum",
      gemstone: "Emerald cut diamond (1.8 ct)"
    }
  },
  {
    id: "20",
    name: "The Celestial Band",
    price: 2100,
    category: "rings",
    subCategory: "Wedding",
    description: "A star-motif band with scattered diamonds.",
    images: ["/category/rings/ring8.webp"],
    rating: 4.6,
    reviews: 4,
    details: {
      material: "18k White Gold",
      gemstone: "Accent diamonds"
    },
    isNew: true
  },

  // --- NECKLACES (IDs 21-28) ---
  {
    id: "21",
    name: "The Aurora Pendant",
    price: 2800,
    category: "necklace",
    subCategory: "Diamond",
    description: "A luminous pendant designed to catch the light.",
    images: ["/category/necklaces/neck1.webp"],
    rating: 4.7,
    reviews: 6,
    details: {
      material: "18k White Gold",
      gemstone: "Round Diamond (0.9 ct)"
    },
    isNew: true
  },
  {
    id: "22",
    name: "Vintage Gold Chain",
    price: 1450,
    category: "necklace",
    subCategory: "Gold",
    description: "A timeless chain to layer or wear solo.",
    images: ["/category/necklaces/neck2.webp"],
    rating: 4.3,
    reviews: 10,
    details: {
      material: "18k Yellow Gold",
      length: "18 inches"
    }
  },
  {
    id: "23",
    name: "Royal Sapphire Choker",
    price: 5200,
    category: "necklace",
    subCategory: "Gemstone",
    description: "A regal choker featuring a line of sapphires.",
    images: ["/category/necklaces/neck3.webp"],
    rating: 4.6,
    reviews: 2,
    details: {
      material: "18k White Gold",
      gemstone: "Sapphires"
    }
  },
  {
    id: "24",
    name: "Akoya Pearl Strand",
    price: 3100,
    category: "necklace",
    subCategory: "Pearl",
    description: "Classic Akoya pearls on a silk thread with secure clasp.",
    images: ["/category/necklaces/neck4.webp"],
    rating: 4.5,
    reviews: 5,
    details: {
      material: "Akoya Pearls",
      length: "18 inches"
    }
  },
  {
    id: "25",
    name: "Diamond Tennis Necklace",
    price: 12500,
    category: "necklace",
    subCategory: "Diamond",
    description: "An elegant line of matched diamonds for high glamour.",
    images: ["/category/necklaces/neck5.webp"],
    rating: 4.9,
    reviews: 3,
    details: {
      material: "Platinum",
      gemstone: "Matched diamonds"
    }
  },
  {
    id: "26",
    name: "Celestial Locket",
    price: 980,
    category: "necklace",
    subCategory: "Silver",
    description: "A modern locket for daily wear.",
    images: ["/category/necklaces/neck6.webp"],
    rating: 4.2,
    reviews: 11,
    details: {
      material: "Sterling Silver"
    },
    isNew: true
  },
  {
    id: "27",
    name: "Emerald Drop",
    price: 4500,
    category: "necklace",
    subCategory: "Gemstone",
    description: "A striking emerald drop for formal occasions.",
    images: ["/category/necklaces/neck7.webp"],
    rating: 4.8,
    reviews: 2,
    details: {
      material: "18k Yellow Gold",
      gemstone: "Emerald"
    }
  },
  {
    id: "28",
    name: "Modern Bar Necklace",
    price: 850,
    category: "necklace",
    subCategory: "Gold",
    description: "A minimal bar necklace for everyday elegance.",
    images: ["/category/necklaces/neck8.webp"],
    rating: 4.1,
    reviews: 7,
    details: {
      material: "14k Gold"
    },
    isNew: true
  },

  // --- EARRINGS (IDs 29-36) ---
  {
    id: "29",
    name: "Luminous Pearl Drops",
    price: 1200,
    category: "earrings",
    subCategory: "Pearl",
    description: "Classic pearl drops for refined elegance.",
    images: ["/category/earrings/ear1.webp"],
    rating: 4.4,
    reviews: 6,
    details: {
      material: "Akoya Pearls"
    },
    isNew: true
  },
  {
    id: "30",
    name: "Classic Diamond Studs",
    price: 2500,
    category: "earrings",
    subCategory: "Diamond",
    description: "Timeless diamond studs for everyday luxury.",
    images: ["/category/earrings/ear2.webp"],
    rating: 4.7,
    reviews: 10,
    details: {
      material: "18k White Gold",
      gemstone: "Round Diamonds"
    }
  },
  {
    id: "31",
    name: "Golden Hoop Duo",
    price: 850,
    category: "earrings",
    subCategory: "Gold",
    description: "A pair of classic golden hoops.",
    images: ["/category/earrings/ear3.webp"],
    rating: 4.2,
    reviews: 8,
    details: {
      material: "14k Gold"
    }
  },
  {
    id: "32",
    name: "Sapphire Huggies",
    price: 1800,
    category: "earrings",
    subCategory: "Gemstone",
    description: "Small huggie hoops set with vivid sapphires.",
    images: ["/category/earrings/ear4.webp"],
    rating: 4.5,
    reviews: 4,
    details: {
      material: "18k White Gold",
      gemstone: "Sapphire"
    },
    isNew: true
  },
  {
    id: "33",
    name: "Emerald Climbers",
    price: 3200,
    category: "earrings",
    subCategory: "Gemstone",
    description: "Modern climber earrings with emerald accents.",
    images: ["/category/earrings/ear5.webp"],
    rating: 4.6,
    reviews: 3,
    details: {
      material: "18k Yellow Gold",
      gemstone: "Emerald"
    }
  },
  {
    id: "34",
    name: "Sculptural Silver Dangles",
    price: 450,
    category: "earrings",
    subCategory: "Silver",
    description: "Artful silver dangles with sculptural forms.",
    images: ["/category/earrings/ear6.webp"],
    rating: 4.0,
    reviews: 9,
    details: {
      material: "Sterling Silver"
    }
  },
  {
    id: "35",
    name: "Rose Gold Knots",
    price: 680,
    category: "earrings",
    subCategory: "Gold",
    description: "Delicate knot studs in rose gold.",
    images: ["/category/earrings/ear7.webp"],
    rating: 4.1,
    reviews: 5,
    details: {
      material: "14k Rose Gold"
    }
  },
  {
    id: "36",
    name: "Celestial Chandelier",
    price: 4500,
    category: "earrings",
    subCategory: "Diamond",
    description: "A dramatic chandelier for special evenings.",
    images: ["/category/earrings/ear8.webp"],
    rating: 4.8,
    reviews: 2,
    details: {
      material: "18k White Gold",
      gemstone: "Diamonds"
    },
    isNew: true
  },

  // --- BRACELETS (IDs 37-44) ---
  {
    id: "37",
    name: "Classic Tennis Bracelet",
    price: 5500,
    category: "bracelets",
    subCategory: "Diamond",
    description: "A matched line of diamonds for refined style.",
    images: ["/category/bracelets/brace1.webp"],
    rating: 4.7,
    reviews: 6,
    details: {
      material: "Platinum",
      gemstone: "Round Diamonds"
    }
  },
  {
    id: "38",
    name: "Sculpted Gold Cuff",
    price: 2100,
    category: "bracelets",
    subCategory: "Gold",
    description: "A bold sculptural cuff in solid gold.",
    images: ["/category/bracelets/brace2.webp"],
    rating: 4.5,
    reviews: 4,
    details: {
      material: "18k Gold"
    },
    isNew: true
  },
  {
    id: "39",
    name: "Sapphire Line Bracelet",
    price: 3800,
    category: "bracelets",
    subCategory: "Gemstone",
    description: "A refined bracelet set with sapphires.",
    images: ["/category/bracelets/brace3.webp"],
    rating: 4.4,
    reviews: 3,
    details: {
      material: "18k White Gold",
      gemstone: "Sapphires"
    }
  },
  {
    id: "40",
    name: "Pavé Link Chain",
    price: 1450,
    category: "bracelets",
    subCategory: "Diamond",
    description: "A modern link chain with pavé diamond accents.",
    images: ["/category/bracelets/brace4.webp"],
    rating: 4.2,
    reviews: 5,
    details: {
      material: "14k White Gold",
      gemstone: "Diamond accents"
    },
    isNew: true
  },
  {
    id: "41",
    name: "Pearl & Gold Bangle",
    price: 950,
    category: "bracelets",
    subCategory: "Pearl",
    description: "A pearl-accented bangle with warm gold tones.",
    images: ["/category/bracelets/brace6.webp"],
    rating: 4.0,
    reviews: 7,
    details: {
      material: "14k Gold",
      gemstone: "Pearls"
    }
  },
  {
    id: "42",
    name: "Emerald Art Deco Cuff",
    price: 6200,
    category: "bracelets",
    subCategory: "Gemstone",
    description: "An art deco inspired cuff with emerald statement stones.",
    images: ["/category/bracelets/brace5.webp"],
    rating: 4.8,
    reviews: 2,
    details: {
      material: "18k Yellow Gold",
      gemstone: "Emerald"
    }
  },
  {
    id: "43",
    name: "Minimalist Silver Chain",
    price: 350,
    category: "bracelets",
    subCategory: "Silver",
    description: "A delicate silver chain for everyday wear.",
    images: ["/category/bracelets/brace7.webp"],
    rating: 4.1,
    reviews: 10,
    details: {
      material: "Sterling Silver"
    }
  },
  {
    id: "44",
    name: "Rose Gold Charm",
    price: 1200,
    category: "bracelets",
    subCategory: "Gold",
    description: "A playful charm bracelet in rose gold.",
    images: ["/category/bracelets/brace8.webp"],
    rating: 4.3,
    reviews: 3,
    details: {
      material: "18k Rose Gold"
    },
    isNew: true
  }
];
