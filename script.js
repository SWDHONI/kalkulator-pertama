
function hitung(operator) {
  const angka1 = parseFloat(
    document.getElementById("angka1").value
  );

  const angka2 = parseFloat(
    document.getElementById("angka2").value
  );

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil").innerText =
      "Masukkan kedua angka!";
    return;
  }

  let hasil;

  if (operator === "+") {
    hasil = angka1 + angka2;
  } else if (operator === "-") {
    hasil = angka1 - angka2;
  } else if (operator === "*") {
    hasil = angka1 * angka2;
  } else if (operator === "/") {
    if (angka2 === 0) {
      document.getElementById("hasil").innerText =
        "Tidak bisa dibagi nol!";
      return;
    }
    hasil = angka1 / angka2;
  }

  document.getElementById("hasil").innerText =
    "Hasil: " + hasil;
}
