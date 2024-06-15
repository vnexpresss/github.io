// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const date = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const formattedDate = `${dayOfWeek}, ${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    document.getElementById('datetime').textContent = formattedDate;

    // Calculate remaining time to 00:00 on June 27, 2024
    const countDownDate = new Date('2024-06-27T00:00:00').getTime();
    const nowTime = now.getTime();
    const distance = countDownDate - nowTime;

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `Còn lại ${days} ngày, ${hoursLeft} giờ, ${minutesLeft} phút, ${secondsLeft} giây`;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Function to load about me text from a file
async function loadAboutMeText() {
    const response = await fetch('text1.txt');
    const text = await response.text();
    const highlightedText = `<span class="highlight">${text}</span>`;
    document.getElementById('about-me-text').innerHTML = highlightedText;
}

// Function to load YouTube videos
async function loadYouTubeVideos() {
    const trendingVideos = [
        'https://www.youtube.com/embed/abPmZCZZrFA', // Replace with your YouTube video embed link
       
    ];

    const randomIndex = Math.floor(Math.random() * trendingVideos.length);
    const randomVideo = trendingVideos[randomIndex];

    document.getElementById('youtube-frame').src = randomVideo;
}

// Function to load music videos
async function loadMusicVideos() {
    const musicVideos = [
        'https://www.youtube.com/embed/yBiW708dDLI', // Replace with your YouTube video embed link
        'https://www.youtube.com/embed/_ggznNb_er4', // Replace with your YouTube video embed link
        'https://www.youtube.com/embed/cQPjT9kXYgI'  // Replace with your YouTube video embed link
    ];

    document.getElementById('music-frame-1').src = musicVideos[0];
    document.getElementById('music-frame-2').src = musicVideos[1];
    document.getElementById('music-frame-3').src = musicVideos[2];
}

// Toggle menu content visibility
function toggleMenu() {
    const menuContent = document.querySelector('.menu-content');
    menuContent.classList.toggle('show');

    const bodyOverlay = document.querySelector('.body-overlay');
    bodyOverlay.classList.toggle('active'); // Hiển thị hoặc ẩn lớp làm mờ

    const body = document.querySelector('body');
    body.classList.toggle('menu-open'); // Thêm hoặc loại bỏ lớp menu-open để làm mờ các phần tử khác

    if (menuContent.classList.contains('show')) {
        // Nếu menu được mở ra, vô hiệu hóa cuộn trang
        body.style.overflow = 'hidden';
    } else {
        // Nếu menu được đóng lại, kích hoạt lại cuộn trang
        body.style.overflow = 'auto';
    }
}

// Close menu when clicking outside of it
window.onclick = function(event) {
    const menuContent = document.querySelector('.menu-content');
    if (!event.target.matches('.menu-icon') && !event.target.closest('.menu-content') && menuContent.classList.contains('show')) {
        menuContent.classList.remove('show');
        
        const bodyOverlay = document.querySelector('.body-overlay');
        bodyOverlay.classList.remove('active'); // Ẩn lớp làm mờ khi đóng menu
        
        const body = document.querySelector('body');
        body.classList.remove('menu-open'); // Loại bỏ lớp menu-open để làm mờ các phần tử khác
        
        body.style.overflow = 'auto'; // Kích hoạt lại cuộn trang khi đóng menu
    }
}

// Close menu when clicking on a link
document.querySelectorAll('.menu-content a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        const menuContent = document.querySelector('.menu-content');
        menuContent.classList.remove('show');

        const bodyOverlay = document.querySelector('.body-overlay');
        bodyOverlay.classList.remove('active');

        const body = document.querySelector('body');
        body.classList.remove('menu-open');

        body.style.overflow = 'auto';
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadAboutMeText();
    updateDateTime();
    loadYouTubeVideos();
    loadMusicVideos();
});
