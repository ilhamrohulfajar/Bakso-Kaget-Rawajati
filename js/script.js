let total = 0;

// THEME TOGGLE
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('theme-icon').classList.replace('fa-moon', 'fa-sun');
    }
};

// ORDER LOGIC
function startOrder() {
    const name = document.getElementById('cust-name').value;
    const table = document.getElementById('cust-table').value;
    if(!name || !table) return alert("Isi data dulu!");

    localStorage.setItem('u_name', name);
    localStorage.setItem('u_table', table);

    document.getElementById('step-2').classList.remove('hidden');
    document.getElementById('menu-title').innerText = `Menu buat ${name}`;
    document.getElementById('step-1').style.opacity = "0.4";
    document.getElementById('step-1').style.pointerEvents = "none";
}

function addItem(itemName, price) {
    total += price;
    document.getElementById('total-display').innerText = `Total: Rp ${total.toLocaleString()}`;
}

function showQRIS() {
    if(total === 0) return alert("Pilih menu dulu!");
    document.getElementById('menu-wrapper').classList.add('hidden');
    document.getElementById('qris-area').classList.remove('hidden');
}

function confirmPayment() {
    const checkboxes = document.querySelectorAll('.note-cb:checked');
    const notesArray = Array.from(checkboxes).map(cb => cb.value);
    
    document.getElementById('step-3').classList.remove('hidden');
    document.getElementById('step-2').style.opacity = "0.4";
    document.getElementById('step-2').style.pointerEvents = "none";
    
    document.getElementById('res-name').innerText = localStorage.getItem('u_name');
    document.getElementById('res-table').innerText = localStorage.getItem('u_table');
    document.getElementById('res-notes').innerText = "Note: " + (notesArray.length > 0 ? notesArray.join(', ') : 'Polos');
}

function adminAction() {
    const icon = document.getElementById('stat-icon');
    icon.innerText = "👨‍🍳";
    icon.classList.remove('pulse');
    document.getElementById('stat-title').innerText = "Mohon Tunggu";
    document.getElementById('stat-title').style.color = "var(--primary)";
    setTimeout(() => { document.getElementById('btn-reset').classList.remove('hidden'); }, 2000);
}