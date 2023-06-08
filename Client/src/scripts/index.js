import 'regenerator-runtime';
import * as bootstrap from 'bootstrap';
import '../styles/main.scss';
import '../styles/responsive.scss';

var tanggalDropdown = document.getElementById("tanggalDropdown");
var bulanDropdown = document.getElementById("bulanDropdown");
var tahunDropdown = document.getElementById("tahunDropdown");

// Mengisi opsi untuk tanggal
for (var tanggal = 1; tanggal <= 31; tanggal++) {
    var option = document.createElement("option");
    option.value = tanggal;
    option.text = tanggal;
    tanggalDropdown.appendChild(option);
}

// Mengisi opsi untuk bulan
var namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
for (var bulan = 0; bulan < 12; bulan++) {
    var option = document.createElement("option");
    option.value = bulan + 1;
    option.text = namaBulan[bulan];
    bulanDropdown.appendChild(option);
}

// Mengisi opsi untuk tahun
var tahunSekarang = new Date().getFullYear();
var tahunAwal = 1900; // Tahun awal yang ingin ditampilkan
for (var tahun = tahunAwal; tahun <= tahunSekarang; tahun++) {
    var option = document.createElement("option");
    option.value = tahun;
    option.text = tahun;
    tahunDropdown.appendChild(option);
}