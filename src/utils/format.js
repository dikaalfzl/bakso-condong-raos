// src/utils/format.js
export const formatRupiah = (num) => {
  if (typeof num !== "number") num = Number(num || 0);
  return num.toLocaleString("id-ID");
};
