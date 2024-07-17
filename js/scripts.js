// Mendefinisikan konstanta untuk elemen input dan hasil
const tinggiBadan = document.getElementById('input-tinggi-badan');
const usia = document.getElementById('input-usia');
const beratBadan = document.getElementById('input-berat-badan');
const hasilBmiElement = document.querySelector('.hasil-bmi');
const kategoriBmiElement = document.querySelector('.kategori-bmi');
const dataUserElement = document.querySelector('.data-user .usia');
const jenisKelaminElement = document.querySelector('.data-user .jenis-kelamin');

// Fungsi untuk mengklasifikasikan BMI
function klasifikasiBmi(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan Berat Badan";
    } else if (bmi < 25) {
        return "Normal (Ideal)";
    } else if (bmi < 30) {
        return "Kelebihan Berat Badan";
    } else {
        return "Kegemukan (Obesitas)";
    }
}

// Fungsi untuk menghitung BMI dan menampilkan hasil pada halaman
function hitungBmi(event) {
    event.preventDefault(); // Mencegah form dari submit secara default

    // Mengambil nilai dari input dan mengubahnya ke tipe data yang sesuai
    const tbad = parseFloat(tinggiBadan.value) / 100;
    const bbad = parseFloat(beratBadan.value);
    const usi = parseInt(usia.value, 10);
    const jenisKelamin = document.querySelector('input[name="jeniskelamin"]:checked');

    // Validasi input
    if (isNaN(tbad) || isNaN(bbad) || isNaN(usi) || tbad > 3 || bbad > 200 || !jenisKelamin) {
        alert('Pastikan semua input terisi dengan benar');
        return;
    }

    // Menghitung BMI
    let bmi = bbad / (tbad * tbad);
    bmi = bmi.toFixed(1);

    // Menampilkan hasil BMI dan data pengguna pada halaman
    hasilBmiElement.textContent = bmi;
    kategoriBmiElement.textContent = `${klasifikasiBmi(parseFloat(bmi))}`;
}

// Fungsi untuk mereset form dan hasil BMI
function resetForm() {
    // Mereset form input
    document.getElementById('bmi-form').reset();
    // Mengembalikan nilai hasil BMI dan kategori ke default
    hasilBmiElement.textContent = '0.0';
    kategoriBmiElement.textContent = '';
}

// Event listener untuk tombol submit dan reset
document.getElementById('bmi-form').addEventListener('submit', hitungBmi);
document.getElementById('reset-button').addEventListener('click', resetForm);
