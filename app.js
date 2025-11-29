const zodiacSigns = [
  {
    imageName: "Aries",
    id: "aries",
    signGod: "Ares",
    thumbSrc: "./images/thumbs/aries.png",
    fullSrc: "images/full/aries.png",
    imageAlt: "Ares, the Greek god of war, representing Aries.",
    description: "Aries is linked to Ares, the Greek god of war, symbolizing courage, passion, and bold action."
  },
  {
    imageName: "Taurus",
    id: "taurus",
    signGod: "Aphrodite",
    thumbSrc: "./images/thumbs/taurus.png",
    fullSrc: "images/full/taurus.png",
    imageAlt: "Aphrodite, the Greek goddess of love and beauty, representing Taurus.",
    description: "Taurus is associated with Aphrodite, the goddess of love and beauty, reflecting sensuality, stability, and appreciation for the material world."
  },
  {
    imageName: "Gemini",
    id: "gemini",
    signGod: "Hermes",
    thumbSrc: "./images/thumbs/gemini.png",
    fullSrc: "images/full/gemini.png",
    imageAlt: "Hermes, the Greek god of communication and travel, representing Gemini.",
    description: "Gemini is tied to Castor and Pollux, the divine twins, representing duality, communication, curiosity, and adaptability."
  },
  {
    imageName: "Cancer",
    id: "cancer",
    signGod: "Artemis",
    thumbSrc: "./images/thumbs/cancer.png",
    fullSrc: "images/full/cancer.png",
    imageAlt: "Artemis, the Greek goddess of the moon and protection, representing Cancer.",
    description: "Cancer is connected to Artemis, goddess of the moon and protector of the home, emphasizing intuition, nurturing, and emotional depth."
  },
  {
    imageName: "Leo",
    id: "leo",
    signGod: "Apollo",
    thumbSrc: "./images/thumbs/leo.png",
    fullSrc: "images/full/leo.png",
    imageAlt: "Leo zodiac symbol with god Apollo",
    description: "Leo is linked to Apollo, the radiant god of the sun, creativity, and leadership, reflecting confidence and expressive brilliance."
  },
  {
    imageName: "Virgo",
    id: "virgo",
    signGod: "Demeter",
    thumbSrc: "./images/thumbs/virgo.png",
    fullSrc: "images/full/virgo.png",
    imageAlt: "Demeter, the Greek goddess of harvest and agriculture, representing Virgo.",
    description: "Virgo is associated with Demeter, goddess of harvest and agriculture, symbolizing service, practicality, and nurturing care."
  },
  {
    imageName: "Libra",
    id: "libra",
    signGod: "Themis",
    thumbSrc: "./images/thumbs/libra.png",
    fullSrc: "images/full/libra.png",
    imageAlt: "Themis, the Greek goddess of justice and balance, representing Libra.",
    description: "Libra is tied to Themis, the goddess of justice and balance, representing harmony, fairness, and strong social awareness."
  },
  {
    imageName: "Scorpio",
    id: "scorpio",
    signGod: "Hades",
    thumbSrc: "./images/thumbs/scorpio.png",
    fullSrc: "images/full/scorpio.png",
    imageAlt: "Themis, the Greek goddess of justice and balance, representing Libra.",
    description: "Scorpio is linked to Hades, the powerful god of the underworld, embodying transformation, mystery, and intense emotional depth."
  },
  {
    imageName: "Sagittarius",
    id: "sagittarius",
    signGod: "Zeus",
    thumbSrc: "./images/thumbs/sagittarius.png",
    fullSrc: "images/full/sagittarius.png",
    imageAlt: "Zeus, the Greek king of the gods, representing Sagittarius.",
    description: "Sagittarius is associated with Zeus, the king of the gods, representing expansion, wisdom, freedom, and adventurous spirit."
  },
  {
    imageName: "Capricorn",
    id: "capricorn",
    signGod: "Cronus",
    thumbSrc: "./images/thumbs/capricorn.png",
    fullSrc: "images/full/capricorn.png",
    imageAlt: "Cronus, the Greek Titan god of time and structure, representing Capricorn.",
    description: "Capricorn is connected to Cronus (Kronos), the Titan of time and structure, symbolizing discipline, endurance, and ambition."
  },
  {
    imageName: "Aquarius",
    id: "aquarius",
    signGod: "Prometheus",
    thumbSrc: "./images/thumbs/aquarius.png",
    fullSrc: "images/full/aquarius.png",
    imageAlt:"Prometheus, the Greek Titan who gave fire to humanity, representing Aquarius." ,
    description: "Aquarius is tied to Prometheus, the visionary Titan who gave fire to humanity, representing innovation, rebellion, and humanitarian ideals."
  },
  {
    imageName: "Pisces",
    id: "pisces",
    SignGod: "Poseidon",
    thumbSrc: "./images/thumbs/pisces.png",
    fullSrc: "images/full/pisces.png",
    imageAlt: "Poseidon, the Greek god of the sea, representing Pisces.",
    description: "Pisces is linked to Poseidon, god of the sea, symbolizing emotion, intuition, imagination, and spiritual depth."
  }
];



const fullScreenContainer = document.querySelector(".fullscreen-container");

for (let i = 0; i < zodiacSigns.length; i++) {
  // sign: is the variable we create to work with each object as a whole (each sign)
  const sign = zodiacSigns[i];

  // cell: variable to access html (sign.id = each sign)
  const cell = document.getElementById(sign.id);
  cell.innerHTML = `<img src="${sign.thumbSrc}" alt="${sign.imageAlt}">`

 cell.addEventListener("click", function() {
    fullScreenContainer.innerHTML = "";
    const fullImage = document.createElement("img")
    fullImage.src = sign.fullSrc;
    fullImage.alt = sign.imageAlt;
    fullScreenContainer.appendChild(fullImage)  
});
};