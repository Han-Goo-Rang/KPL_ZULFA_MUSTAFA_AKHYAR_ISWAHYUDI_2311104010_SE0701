import express from "express";
import cors from "cors";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let mahasiswa = [
  { id: 0, nama: "Bangjoule", nim: "2311104010" },
  { id: 1,nama: "Lumia Kjellberg (Felix)", nim: "2311104031" },
  { id: 2,nama: "Hisari (Hisyam)", nim: "2311104024" },
  { id: 3,nama: "Barjling (Kaka)", nim: "2311104034" },
];

app.get("/api/mahasiswa", (_, res) => {
  res.json(mahasiswa);
});

app.get("/api/mahasiswa/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    res.json(mahasiswa[index]);
  } else {
    res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
  }
});

app.post("/api/mahasiswa", (req, res) => {
  const { nama, nim } = req.body;
  if (nama && nim) {
    const newMahasiswa = {
      id: mahasiswa.length > 0 ? mahasiswa[mahasiswa.length - 1].id + 1 : 1, // Generate ID baru secara increment
      nama,
      nim,
    };
    mahasiswa.push(newMahasiswa);
    res.status(201).json({ message: "Mahasiswa ditambahkan", mahasiswa: newMahasiswa });
  } else {
    res.status(400).json({ message: "Nama dan NIM wajib diisi" });
  }
});

app.delete("/api/mahasiswa/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    const deleted = mahasiswa.splice(index, 1);
    res.json({ message: "Mahasiswa dihapus", deleted });
  } else {
    res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
