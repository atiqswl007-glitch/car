const WHATSAPP_NUMBER = "966XXXXXXXXX"; // apna number yahan dal do

function sendWhatsApp() {
    let name = document.getElementById("name").value;
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;
    let car = document.getElementById("car").value;

    if (!name || !pickup || !drop) {
        alert("Please fill all fields");
        return;
    }

    let msg = `New Booking:
Name: ${name}
Pickup: ${pickup}
Drop: ${drop}
Car: ${car}`;

    let url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}
