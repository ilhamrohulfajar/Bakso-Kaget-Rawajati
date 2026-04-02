let total = 0;

function startOrder() {
    const name = document.getElementById('cust-name').value;
    const table = document.getElementById('cust-table').value;

    if(!name || !table) {
        alert("Mohon isi Nama dan Nomor Meja!");
        return;
    }

    localStorage.setItem('u_name', name);
    localStorage.setItem('u_table', table);

    // Tampilkan Kolom Menu
    document.getElementById('step-2').classList.remove('hidden');
    document.getElementById('menu-title').innerText = `Menu untuk ${name}`;
    
    // Beri efek 'disable' pada kolom 1
    document.getElementById('step-1').style.opacity = "0.5";
    document.getElementById('step-1').style.pointerEvents = "none";
}

function addItem(price) {
    total += price;
    document.getElementById('total-display').innerText = `Total: Rp ${total.toLocaleString()}`;
}

function showQRIS() {
    if(total === 0) {
        alert("Pilih menu dulu ya!");
        return;
    }
    document.getElementById('menu-list').classList.add('hidden');
    document.getElementById('total-display').classList.add('hidden');
    document.getElementById('btn-pay').classList.add('hidden');
    document.getElementById('qris-area').classList.remove('hidden');
}

function confirmPayment() {
    // Tampilkan Kolom Status
    document.getElementById('step-3').classList.remove('hidden');
    document.getElementById('step-2').style.opacity = "0.5";
    document.getElementById('step-2').style.pointerEvents = "none";
    
    document.getElementById('res-name').innerText = localStorage.getItem('u_name');
    document.getElementById('res-table').innerText = localStorage.getItem('u_table');
}

// LOGIKA RAHASIA ADMIN (DIKLIK DI POJOK KANAN BAWAH KARTU KE-3)
function adminAction() {
    const icon = document.getElementById('stat-icon');
    icon.innerText = "👨‍🍳";
    icon.classList.remove('pulse');
    
    document.getElementById('stat-title').innerText = "Mohon Tunggu";
    document.getElementById('stat-desc').innerText = "Pesanan segera disiapkan";
    document.getElementById('stat-title').style.color = "#e74c3c";
    
    // Munculkan tombol reset setelah 3 detik
    setTimeout(() => {
        document.getElementById('btn-reset').classList.remove('hidden');
    }, 3000);
}