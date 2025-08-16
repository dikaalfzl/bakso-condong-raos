// src/utils/format.js
export const formatRupiah = (num) => {
  if (typeof num !== "number") num = Number(num || 0);
  return num.toLocaleString("id-ID");
};

export const buildWaUrl = ({
  phone,        // contoh: "6281234567890" (tanpa +)
  brand,        // contoh: "Bakso Condong Raos 234"
  itemName,     // nama menu
  qty = 1,      // jumlah
  unitPrice = 0,
  name = "(wajib isi)",
  method = "Dine-in", // "Dine-in" | "Takeaway"
  note = "-"
}) => {
  const total = qty * unitPrice;
  const humanMethod = method === "Takeaway" ? "Makan ditempat / Bungkus (Ambil di tempat)" : "Makan di tempat";

  const lines = [
    `Halo ${brand}!`,
    "Saya ingin pesan:",
    `- ${itemName} x${qty}`,
    `Perkiraan total: Rp${formatRupiah(total)}`,
    `Nama: ${name || "(Wajib Isi)"}`,
    `Metode Ambil: ${humanMethod}`,
    `Catatan: ${note || "-"}`
  ];

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${phone}?text=${text}`;
};
