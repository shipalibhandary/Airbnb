const properties = [
  {
    id: 1,
    title: "Cliffside Ocean Villa",
    location: "Varkala, Kerala",
    price: 5200,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    ],
    description: "Wake up to breathtaking ocean views from a private cliffside villa."
  },
  {
    id: 2,
    title: "Backwater Houseboat Stay",
    location: "Alleppey, Kerala",
    price: 4000,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    ],
    description: "Experience serene backwaters with a traditional houseboat stay."
  },
  {
    id: 3,
    title: "Modern Glass Apartment",
    location: "Bangalore, India",
    price: 3000,
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
    ],
    description: "Stylish city apartment with skyline views and modern amenities."
  },
  {
    id: 4,
    title: "Snow Mountain Cabin",
    location: "Manali, India",
    price: 3500,
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    ],
    description: "Cozy wooden cabin surrounded by snow-covered mountains."
  },
  {
    id: 5,
    title: "Desert Luxury Camp",
    location: "Jaisalmer, India",
    price: 2800,
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    ],
    description: "Stay under the stars in a luxury desert tent experience."
  },
  {
    id: 6,
    title: "Beachfront Cottage",
    location: "Goa, India",
    price: 4200,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1505692794403-55b3b7c0a1b1",
    ],
    description: "Relax in a cozy cottage just steps away from the beach."
  },
  {
    id: 7,
    title: "Forest Treehouse",
    location: "Wayanad, Kerala",
    price: 3800,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    ],
    description: "Live among the trees in this peaceful forest treehouse."
  },
  {
    id: 8,
    title: "Lake View Retreat",
    location: "Udaipur, India",
    price: 3600,
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    ],
    description: "Beautiful retreat overlooking a calm lake with sunset views."
  },
    {
    id: 9,
    title: "Heritage Palace Suite",
    location: "Jaipur, Rajasthan",
    price: 6500,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2f69",
    ],
    description: "Royal palace-style stay with traditional Rajasthani architecture."
  },
  {
    id: 10,
    title: "Hilltop Sunrise Cottage",
    location: "Munnar, Kerala",
    price: 3900,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    ],
    description: "Wake up above the clouds with breathtaking tea garden views."
  },
  {
    id: 11,
    title: "Urban Loft Studio",
    location: "Mumbai, Maharashtra",
    price: 4800,
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    ],
    description: "Modern loft in the heart of the city with skyline views."
  },
  {
    id: 12,
    title: "Riverfront Bamboo Villa",
    location: "Kumarakom, Kerala",
    price: 4500,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2f69",
    ],
    description: "Eco-friendly bamboo villa overlooking calm river waters."
  },
  {
    id: 13,
    title: "Luxury Safari Tent",
    location: "Ranthambore, Rajasthan",
    price: 5200,
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    ],
    description: "Wildlife safari experience with luxury tent accommodation."
  },
  {
    id: 14,
    title: "Coastal Cliff Bungalow",
    location: "Kovalam, Kerala",
    price: 5000,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    ],
    description: "Private bungalow overlooking dramatic coastal cliffs."
  },
  {
    id: 15,
    title: "Serene Island Cottage",
    location: "Andaman Islands",
    price: 7000,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    ],
    description: "Private island-style cottage surrounded by crystal-clear waters."
  },
  {
    id: 16,
    title: "Vintage Tea Estate Stay",
    location: "Coonoor, Tamil Nadu",
    price: 3400,
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    ],
    description: "Stay inside a historic tea estate surrounded by misty hills."
  },
  {
    id: 17,
    title: "Luxury Penthouse Suite",
    location: "Hyderabad, Telangana",
    price: 6000,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
    ],
    description: "High-rise penthouse with city lights and luxury interiors."
  },
  
{
  id: 20,
  title: "Misty Hilltop Cabin",
  location: "Ooty, Tamil Nadu",
  price: 3600,
  rating: 4.7,
  images: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=80"
  ],
  description: "Cozy wooden cabin surrounded by misty Nilgiri hills."
},
{
  id: 21,
  title: "Lakeside Bamboo Cottage",
  location: "Alleppey, Kerala",
  price: 4100,
  rating: 4.8,
  images: [
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80"
  ],
  description: "Peaceful bamboo cottage right beside serene backwaters."
}
];

export default properties;