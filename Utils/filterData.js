import place1 from "../assets/place1.jpg";
import place2 from "../assets/place2.jpg";
import place3 from "../assets/place3.jpg";
import place4 from "../assets/place4.jpg";
import place5 from "../assets/place5.jpg";

export const filterData = [
  {
    items: [
      { name: "Buy", value: "for-sale" },
      { name: "Rent", value: "for-rent" },
    ],
    placeholder: "Purpose",
    queryName: "purpose",
  },
  {
    items: [
      { name: "Daily", value: "daily" },
      { name: "Weekly", value: "weekly" },
      { name: "Monthly", value: "monthly" },
      { name: "Yearly", value: "yearly" },
    ],
    placeholder: "Rent Frequency",
    queryName: "rentFrequency",
  },
  {
    items: [
      { name: "10,000", value: "10000" },
      { name: "20,000", value: "20000" },
      { name: "30,000", value: "30000" },
      { name: "40,000", value: "40000" },
      { name: "50,000", value: "50000" },
      { name: "60,000", value: "60000" },
      { name: "85,000", value: "85000" },
    ],
    placeholder: "Min Price(AED)",
    queryName: "minPrice",
  },
  {
    items: [
      { name: "Apartment", value: "4" },
      { name: "Townhouses", value: "16" },
      { name: "Villas", value: "3" },
      { name: "Penthouses", value: "18" },
      { name: "Hotel Apartments", value: "21" },
      { name: "Villa Compound", value: "19" },
      { name: "Residential Plot", value: "14" },
      { name: "Residential Floor", value: "12" },
      { name: "Residential Building", value: "17" },
    ],
    placeholder: "Property Type",
    queryName: "categoryExternalID",
  },
];

export const getFilterValues = (filterValues) => {
  const {
    purpose,
    rentFrequency,
    categoryExternalID,
    minPrice,
    locationExternalIDs,
  } = filterValues;

  const values = [
    {
      name: "purpose",
      value: purpose,
    },
    {
      name: "rentFrequency",
      value: rentFrequency,
    },
    {
      name: "minPrice",
      value: minPrice,
    },

    {
      name: "locationExternalIDs",
      value: locationExternalIDs,
    },
    {
      name: "categoryExternalID",
      value: categoryExternalID,
    },
  ];

  return values;
};
export const locationImages = [
  { img: place1, name: "Sharjah", link: "/search?minPrice=20000" },
  { img: place2, name: "Lahbab", link: "/search?maxPrice=20000" },
  { img: place3, name: "Al Aweer", link: "/search?bathsMin=1" },
  { img: place4, name: "Al Faqa", link: "/search?areaMax=20000" },
  { img: place5, name: "Al Lisaili", link: "/search?roomsMin=8" },
];

export const FooterLinks = [
  {
    section: "company",
    links: [
      { name: "About Us", link: "/" },
      { name: "Blog", link: "/" },
      { name: "Career", link: "/" },
      { name: "Contact Us", link: "/" },
    ],
  },
  {
    section: "Support",
    links: [
      { name: "Help Center", link: "/" },
      { name: "Safety Center", link: "/" },
      { name: "Community Guidelines", link: "/" },
    ],
  },
  {
    section: "Policy",
    links: [
      { name: "Agencies", link: "/" },
      { name: "Land Use Act", link: "/" },
      { name: "Tenancy", link: "/" },
      { name: "C of O", link: "/" },
    ],
  },
  {
    section: "Other",
    links: [
      { name: "Privacy Policy", link: "/" },
      { name: "Terms of Service", link: "/" },
      { name: "Cokies Policy", link: "/" },
      { name: "Refs", link: "/" },
    ],
  },
];
