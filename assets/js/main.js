/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')


function calculateTotal() {
    // Lấy giá trị từ các input và chuyển đổi thành số nguyên
    const stone750 = parseInt(document.getElementById('corn1k').value) || 0;
    const stone7k5 = parseInt(document.getElementById('corn10k').value) || 0;
    const stone37k5 = parseInt(document.getElementById('corn50k').value) || 0;
    const stone112k5 = parseInt(document.getElementById('corn150k').value) || 0;
    const stone375k = parseInt(document.getElementById('corn500k').value) || 0;
    const stone1m125 = parseInt(document.getElementById('corn1m').value) || 0;
    const stone3m75 = parseInt(document.getElementById('corn5m').value) || 0;

    // Tính toán tổng số đá và chuyển thành triệu
    const totalStoneInMillions = (
        (stone750 * 750) +
        (stone7k5 * 7500) +
        (stone37k5 * 37500) +
        (stone112k5 * 112500) +
        (stone375k * 375000) +
        (stone1m125 * 1125000) +
        (stone3m75 * 3750000)
    ) / 1000000;

    // Hiển thị kết quả
    document.getElementById('result').innerText = `Tổng đá sau khi quy đổi: ${totalStoneInMillions.toFixed(3)} triệu`;
}
