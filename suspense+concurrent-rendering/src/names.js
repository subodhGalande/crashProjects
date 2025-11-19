// names.js
const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eva",
  "Frank",
  "Grace",
  "Hannah",
  "Ian",
  "Julia",
  "Kevin",
  "Lily",
  "Mason",
  "Nora",
  "Oliver",
  "Paula",
  "Quinn",
  "Ryan",
  "Sophia",
  "Tom",
  "Uma",
  "Victor",
  "Wendy",
  "Xavier",
  "Yara",
  "Zane",

  // Duplicate alphabet cycles for a 1000-item list
  "Aaron",
  "Bella",
  "Caleb",
  "Diana",
  "Ethan",
  "Fiona",
  "Gavin",
  "Hazel",
  "Isaac",
  "Jenna",
  "Kyle",
  "Laura",
  "Miles",
  "Naomi",
  "Owen",
  "Piper",
  "Quincy",
  "Reed",
  "Sara",
  "Trent",
  "Ursula",
  "Violet",
  "Wesley",
  "Ximena",
  "Yusuf",
  "Zara",
];

// Extend to 1000 names
while (names.length < 1000) {
  names.push(names[names.length % 52] + " " + names.length);
}

export default names;
