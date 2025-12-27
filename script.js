document.addEventListener('DOMContentLoaded', () => {
    // Language Data
    const translations = {
        'zh-TW': {
            'hero_name_1': '吳岳樺',
            'hero_name_2': '張庭昀',
            'hero_venue': '台北 · 東美院',
            'welcome_title': '誠摯邀請',
            'welcome_text': '我們將在充滿歷史與人文氣息的「東美院」舉辦婚宴。<br>誠摯地邀請您前來，與我們一同分享這份喜悅，<br>在古樸的建築與優雅的庭園中，見證我們的幸福時刻。',
            'details_title': '婚禮資訊',
            'time_label': '時間',
            'date_text': '2026 年 1 月 10 日',
            'location_label': '地點',
            'address_text': '100 臺北市中正區牯嶺街 60 巷 6 號',
            'map_btn': '查看地圖',
            'traffic_title': '交通資訊',
            'mrt_label': '捷運 (MRT)',
            'mrt_text': '搭乘捷運至古亭站 (8 號出口)，步行約 5~8 分鐘即可抵達。',
            'parking_label': '推薦停車場 (Recommended Parking)',
            'parking_list_html': '<li>168Parking (福州停車場)</li><li>福州廣場停車場</li><li>Navipark 牯嶺街停車場</li>',
            'bus_label': '公車 (Bus)',
            'bus_stop_1': '站牌：和平西路一段',
            'bus_routes_1': '路線：藍 28, 214, 241, 242, 243, 568, 624, 624 (綠野香坡), 670, 706, 907, 907 (通勤), 內科通勤專車 2, 內科通勤專車 3',
            'bus_stop_2': '站牌：福州街',
            'bus_routes_2': '路線：5, 242, 624, 624 (綠野香坡), 670',
            'btn_text': 'English',
            'footer_text': '&copy; 2026 吳岳樺 & 張庭昀. All Rights Reserved.',
            'dress_code_title': '穿搭靈感',
            'dress_code_text': '我們整理了一些與場地復古氛圍相襯的色調供您參考。<br><span class="font-medium text-mocha block mt-2">這完全不是強制的。</span>請以您的舒適與風格為主，您的到來就是我們最大的快樂！',
            'dress_code_label': '參考色票'
        },
        'en': {
            'hero_name_1': 'Kris',
            'hero_name_2': 'Ellie',
            'hero_venue': 'Taipei · Dong Mei Yuan',
            'welcome_title': 'You\'re Invited',
            'welcome_text': 'We are hosting our wedding banquet at the historic "Dong Mei Yuan".<br>We sincerely invite you to come and share this joy with us,<br>witnessing our happy moments amidst the ancient architecture and elegant gardens.',
            'details_title': 'Wedding Details',
            'time_label': 'Time',
            'date_text': 'January 10, 2026',
            'location_label': 'Location',
            'address_text': 'No. 6, Lane 60, Guling St, Zhongzheng Dist., Taipei City',
            'map_btn': 'View Map',
            'traffic_title': 'Transportation',
            'mrt_label': 'MRT',
            'mrt_text': 'Take MRT to Guting Station (Exit 8), walk for about 5-8 minutes.',
            'parking_label': 'Recommended Parking',
            'parking_list_html': '<li>168Parking (Fuzhou Parking)</li><li>Fuzhou Square Parking</li><li>Navipark Guling St. Parking</li>',
            'bus_label': 'Bus',
            'bus_stop_1': 'Stop: Heping West Rd. Sec. 1',
            'bus_routes_1': 'Routes: Blue 28, 214, 241, 242, 243, 568, 624, 670, 706, 907...',
            'bus_stop_2': 'Stop: Fuzhou St.',
            'bus_routes_2': 'Routes: 5, 242, 624, 670',
            'btn_text': '中文',
            'footer_text': '&copy; 2026 Kris & Ellie. All Rights Reserved.',
            'dress_code_title': 'Dress Code Inspiration',
            'dress_code_text': 'We have curated a palette inspired by the vintage atmosphere of the venue. <br><span class="font-medium text-mocha block mt-2">However, this is completely optional.</span> Please prioritize your own comfort and style—we are just happy to have you with us!',
            'dress_code_label': 'Reference Palette'
        }
    };

    let currentLang = 'zh-TW';
    updateLanguage(currentLang); // Initialize language on load

    const langBtn = document.getElementById('lang-toggle');

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'zh-TW' ? 'en' : 'zh-TW';
            updateLanguage(currentLang);
        });
    }

    function updateLanguage(lang) {
        document.documentElement.lang = lang;
        const data = translations[lang];
        
        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) {
                if (key.endsWith('_html')) {
                    el.innerHTML = data[key];
                } else {
                    el.innerHTML = data[key]; // Using innerHTML to handle <br> tags in text
                }
            }
        });

        // Update button text
        if (langBtn) {
            langBtn.textContent = data['btn_text'];
        }
    }

    // Animation Logic (Motion One)
    if (window.Motion) {
        const { animate, inView } = Motion;
        
        // Hero Fade In
        const hero = document.querySelector(".hero-content");
        if (hero) {
            hero.style.opacity = "0"; // Hide initially only if JS works
            animate(hero, { opacity: [0, 1], transform: ["translateY(30px)", "none"] }, { duration: 1.5, easing: "ease-out" });
        }

        // Scroll Reveals
        const items = document.querySelectorAll(".reveal-on-scroll");
        items.forEach(item => {
            item.style.opacity = "0"; // Hide initially only if JS works
            inView(item, (info) => {
                animate(item, { opacity: [0, 1], transform: ["translateY(30px)", "none", "translateX(0)"] }, { duration: 0.8, easing: "ease-out" });
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
