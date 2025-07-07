const productsData = [
  {
    slug: "Construction Workers",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Masons & Bricklayers",
        image: "/images/products/soft-drinks/const1.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Carpenters & Formwork Specialists",
        image: "/images/products/soft-drinks/const2.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Steel Fixers & Reinforcement Workers",
        image: "/images/products/soft-drinks/const3.png",
        inStock: true,
      },
    ],
  },
  {
    slug: "Drivers",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Light Vehicle Drivers",
        image: "/images/products/sugar/driver1.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Heavy Vehicle Drivers",
        image: "/images/products/sugar/driver2.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Forklift & Equipment Operators",
        image: "/images/products/sugar/driver3.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Personal & Company Chauffeurs",
        image: "/images/products/sugar/driver4.jpg",
        inStock: true,
      },
    ],
  },
  {
    slug: "Hospitality Staff",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Hotel Front Desk Staff",
        image: "/images/products/biscuits/host1.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Restaurant Waiters & Waitresses",
        image: "/images/products/biscuits/host2.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Chefs & Kitchen Assistants",
        image: "/images/products/biscuits/host3.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Event & Banquet Staff",
        image: "/images/products/biscuits/host4.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Room Service Attendants",
        image: "/images/products/biscuits/host5.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Baristas & Bartenders",
        image: "/images/products/biscuits/host6.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Concierge & Guest Relations",
        image: "/images/products/biscuits/host7.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Housekeeping Staff",
        image: "/images/products/biscuits/host8.jpg",
        inStock: true,
      },
    ],
  },
  {
    slug: "Healthcare Professionals",
    items: [
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/milk-powder/hospital1.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/milk-powder/hospital2.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/milk-powder/hospital3.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/milk-powder/hospital4.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/milk-powder/hospital5.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/milk-powder/hospital6.jpg",
        inStock: true,
      },
    ],
  },
  {
    slug: "Technicians",
    items: [
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/juice-powder/swGyMckA.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/juice-powder/U8oGGZMg.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/juice-powder/gBWeHJTg.jpeg",
        inStock: true,
      },
    ],
  },
  {
    slug: "Security Personnel",
    items: [
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/cooking-oil/abn02V9A.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/cooking-oil/oilcook.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/cooking-oil/r4JFZivg.png",
        inStock: true,
      },
    ],
  },
  {
    slug: "Office Staff",
    items: [
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/sweets/9UCFFApA.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/sweets/64e5xkNA.jpeg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/sweets/loli.jpg",
        inStock: true,
      },
    ],
  },
  {
    slug: "Cleaning & Maintenance",
    items: [
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/tomato-paste/royals.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/tomato-paste/DW26ePIg.png",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/tomato-paste/BpodoGxw.png",
        inStock: true,
      },
    ],
  },
  {
    slug: "Retail & Sales Staff",
    items: [
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image:
          "/images/products/rice/9d55a00c028460da0ae4d4e29289ea8b.jpg_720x720q80.jpg",
        inStock: true,
      },
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image:
          "/images/products/rice/181367351_169410801761184_8417732091264742445_n.jpg",
        inStock: true,
      },
    ],
  },
  {
    slug: "Other Job Roles",
    items: [
      {
        id: crypto.randomUUID(),
        name: "ALFarhanInternational",
        image: "/images/products/soap/soap.jpg",
        inStock: true,
      },
    ],
  },
];

export default productsData;
