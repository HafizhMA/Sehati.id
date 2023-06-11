import 'regenerator-runtime';
import * as bootstrap from 'bootstrap';
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';

const app = new App({
  appbar: document.querySelector('#appBar'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// let tanggalDropdown = document.getElementById('tanggalDropdown');
// let bulanDropdown = document.getElementById('bulanDropdown');
// let tahunDropdown = document.getElementById('tahunDropdown');

// // Mengisi opsi untuk tanggal
// for (let tanggal = 1; tanggal <= 31; tanggal++) {
//   let option = document.createElement('option');
//   option.value = tanggal;
//   option.text = tanggal;
//   tanggalDropdown.appendChild(option);
// }

// // Mengisi opsi untuk bulan
// const namaBulan = [
//   'Januari',
//   'Februari',
//   'Maret',
//   'April',
//   'Mei',
//   'Juni',
//   'Juli',
//   'Agustus',
//   'September',
//   'Oktober',
//   'November',
//   'Desember',
// ];
// for (let bulan = 0; bulan < 12; bulan++) {
//   let option = document.createElement('option');
//   option.value = bulan + 1;
//   option.text = namaBulan[bulan];
//   bulanDropdown.appendChild(option);
// }

// // Mengisi opsi untuk tahun
// let tahunSekarang = new Date().getFullYear();
// let tahunAwal = 1900; // Tahun awal yang ingin ditampilkan
// for (let tahun = tahunAwal; tahun <= tahunSekarang; tahun++) {
//   let option = document.createElement('option');
//   option.value = tahun;
//   option.text = tahun;
//   tahunDropdown.appendChild(option);
// }
