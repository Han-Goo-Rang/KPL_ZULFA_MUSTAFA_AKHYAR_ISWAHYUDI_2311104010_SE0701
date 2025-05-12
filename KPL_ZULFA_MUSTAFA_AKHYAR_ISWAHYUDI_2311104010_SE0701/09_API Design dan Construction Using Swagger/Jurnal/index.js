import express from "express";
import cors from "cors";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let animes = [
  {
    id: 0,
    title: "Jin-Roh: The Wolf Brigade",
    director: "Hiroyuki Okiura",
    stars: ["Yoshikatsu Fujiki", "Sumi Mutoh", "Hiroyuki Kinoshita"],
    description:
      "Di Jepang pascaperang yang otoriter, seorang anggota unit polisi khusus terlibat dalam konflik politik dan emosional setelah menyaksikan seorang gadis muda meledakkan diri dalam serangan bunuh diri.",
  },
  {
    id: 1,
    title: "Cardcaptor Sakura: The Movie",
    director: "Morio Asaka",
    stars: ["Sakura Tange", "Aya Hisakawa", "Motoko Kumai"],
    description:
      "Sakura dan teman-temannya melakukan perjalanan ke Hong Kong, di mana mereka menghadapi roh pendendam yang memiliki hubungan dengan masa lalu Clow Reed.",
  },
  {
    id: 2,
    title: "Adolescence of Utena",
    director: "Kunihiko Ikuhara",
    stars: ["Tomoko Kawakami", "Yuriko Fuchizaki", "Takehito Koyasu"],
    description:
      "Utena Tenjou terlibat dalam serangkaian duel pedang untuk memenangkan tangan Anthy Himemiya, dalam kisah simbolis tentang identitas, cinta, dan transisi menuju kedewasaan.",
  },
];

app.get("/api/animes", (_, res) => {
  res.json(animes);
});

app.get("/api/animes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < animes.length) {
    res.json(animes[id]);
  } else {
    res.status(404).json({ message: "Anime tidak ditemukan" });
  }
});

app.post("/api/animes", (req, res) => {
  const { title, director, stars, description } = req.body;
  if (title && director && stars && description) {
    const newAnime = {
      id: animes.length > 0 ? animes[animes.length - 1].id + 1 : 1, // Generate ID baru secara increment
      title,
      director,
      stars,
      description,
    };
    animes.push(newAnime);
    res.status(201).json({ message: "Anime berhasil ditambahkan", newAnime });
  } else {
    res.status(400).json({ message: "Data Anime tidak lengkap" });
  }
});

app.delete("/api/animes/:id", (req, res) => {
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
