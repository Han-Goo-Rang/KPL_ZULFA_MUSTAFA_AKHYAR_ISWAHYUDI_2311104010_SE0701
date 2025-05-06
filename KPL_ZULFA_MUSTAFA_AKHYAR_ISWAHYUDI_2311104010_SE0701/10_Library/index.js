import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Memory database (sementara)
let mahasiswaList = [];
let currentId = 1; // ID generator manual

// Welcome route
app.get("/", (req, res) => {
  res.send("Hello World! guysss kelas 01");
});

// Create mahasiswa
app.post("/mahasiswa", (req, res) => {
  try {
    const { nim, nama_lengkap, email, no_hp, tanggal_lahir, jenis_kelamin } =
      req.body;

    if (
      !nim ||
      !nama_lengkap ||
      !email ||
      !no_hp ||
      !tanggal_lahir ||
      !jenis_kelamin
    ) {
      return res.status(400).json({
        statusCode: 400,
        message: "Bad Request",
        error: "All fields are required",
      });
    }

    const newMahasiswa = {
      id: currentId++, // Generate id otomatis
      nim,
      nama_lengkap,
      email,
      no_hp,
      tanggal_lahir,
      jenis_kelamin,
    };

    mahasiswaList.push(newMahasiswa); // Simpan ke array memory

    res.status(201).json({
      statusCode: 201,
      message: "Mahasiswa created successfully",
      data: newMahasiswa,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// Get all mahasiswa
app.get("/mahasiswa", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Mahasiswa fetched successfully",
    data: mahasiswaList,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
