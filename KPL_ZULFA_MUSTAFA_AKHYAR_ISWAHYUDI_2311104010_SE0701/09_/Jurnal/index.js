const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let animes = [
  {
    title: "Jin-Roh: The Wolf Brigade",
    director: "Hiroyuki Okiura",
    stars: ["Yoshikatsu Fujiki", "Sumi Mutoh", "Hiroyuki Kinoshita"],
    description:
      "Di Jepang pascaperang yang otoriter, seorang anggota unit polisi khusus terlibat dalam konflik politik dan emosional setelah menyaksikan seorang gadis muda meledakkan diri dalam serangan bunuh diri.",
  },
  {
    title: "Cardcaptor Sakura: The Movie",
    director: "Morio Asaka",
    stars: ["Sakura Tange", "Aya Hisakawa", "Motoko Kumai"],
    description:
      "Sakura dan teman-temannya melakukan perjalanan ke Hong Kong, di mana mereka menghadapi roh pendendam yang memiliki hubungan dengan masa lalu Clow Reed.",
  },
  {
    title: "Adolescence of Utena",
    director: "Kunihiko Ikuhara",
    stars: ["Tomoko Kawakami", "Yuriko Fuchizaki", "Takehito Koyasu"],
    description:
      "Utena Tenjou terlibat dalam serangkaian duel pedang untuk memenangkan tangan Anthy Himemiya, dalam kisah simbolis tentang identitas, cinta, dan transisi menuju kedewasaan.",
  },
];

app.get("/api/Animes", (req, res) => {
  res.json(animes);
});

app.get("/api/Animes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < animes.length) {
    res.json(animes[id]);
  } else {
    res.status(404).json({ message: "Anime tidak ditemukan" });
  }
});

app.post("/api/Animes", (req, res) => {
  const { title, director, stars, description } = req.body;
  if (title && director && stars && description) {
    animes.push({ title, director, stars, description });
    res.status(201).json({ message: "Anime berhasil ditambahkan", animes });
  } else {
    res.status(400).json({ message: "Data Anime tidak lengkap" });
  }
});

app.delete("/api/Animes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < animes.length) {
    const deleted = animes.splice(id, 1);
    res.json({ message: "Anime berhasil dihapus", deleted });
  } else {
    res.status(404).json({ message: "Anime tidak ditemukan" });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
