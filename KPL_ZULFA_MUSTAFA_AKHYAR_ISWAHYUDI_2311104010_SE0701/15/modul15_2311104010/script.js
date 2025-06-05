// Hashing function SHA-256
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
              .map(b => b.toString(16).padStart(2, '0'))
              .join('');
}

// Validasi username dan password
function validateInput(username, password) {
  const asciiOnly = /^[\x20-\x7E]+$/;
  const specialChar = /[!@#$%^&*]/;
  if (username.length < 4 || username.length > 20) return "Username harus 4-20 karakter.";
  if (!asciiOnly.test(username)) return "Username hanya boleh karakter ASCII.";
  if (password.length < 8 || password.length > 20) return "Password harus 8-20 karakter.";
  if (!specialChar.test(password)) return "Password harus mengandung karakter spesial (!@#$%^&*).";
  if (password.includes(username)) return "Password tidak boleh mengandung username.";
  return null;
}

// Simpan ke localStorage
async function registerUser(username, password) {
  const error = validateInput(username, password);
  if (error) return showMessage(error, true);

  const users = JSON.parse(localStorage.getItem("users") || "{}");
  if (users[username]) return showMessage("Username sudah terdaftar.", true);

  const hashed = await hashPassword(password);
  users[username] = hashed;
  localStorage.setItem("users", JSON.stringify(users));
  showMessage("Registrasi berhasil!", false);
}

// Login
async function loginUser(username, password) {
  const users = JSON.parse(localStorage.getItem("users") || "{}");
  if (!users[username]) return showMessage("Username tidak ditemukan.", true);

  const hashed = await hashPassword(password);
  if (users[username] !== hashed) return showMessage("Password salah.", true);

  showMessage("Login berhasil! Selamat datang, " + username, false);
}

// Tampilkan pesan
function showMessage(msg, isError) {
  const el = document.getElementById("message");
  el.style.color = isError ? "red" : "green";
  el.textContent = msg;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnRegister").addEventListener("click", () => {
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value;
    registerUser(username, password);
  });

  document.getElementById("btnLogin").addEventListener("click", () => {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    loginUser(username, password);
  });
});
