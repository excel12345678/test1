// Переводы
const translations = {
    en: {
        premiumTitle: "Telegram Premium",
        premiumDuration: "1 Year",
        purchaseBtnText: "Buy Now",
        feature1: "No ads",
        feature2: "Faster downloads",
        feature3: "Voice to text",
        feature4: "Premium stickers",
        successTitle: "Payment Successful!",
        successMessage: "Your Telegram Premium is now active"
    },
    ru: {
        premiumTitle: "Telegram Premium",
        premiumDuration: "1 Год",
        purchaseBtnText: "Купить сейчас",
        feature1: "Без рекламы",
        feature2: "Быстрые загрузки",
        feature3: "Голос в текст",
        feature4: "Премиум стикеры",
        successTitle: "Оплата успешна!",
        successMessage: "Ваш Telegram Premium теперь активен"
    },
    uk: {
        premiumTitle: "Telegram Premium",
        premiumDuration: "1 Рік",
        purchaseBtnText: "Купити зараз",
        feature1: "Без реклами",
        feature2: "Швидкі завантаження",
        feature3: "Голос у текст",
        feature4: "Преміум стікери",
        successTitle: "Оплата успішна!",
        successMessage: "Ваш Telegram Premium тепер активний"
    },
    fr: {
        premiumTitle: "Telegram Premium",
        premiumDuration: "1 An",
        purchaseBtnText: "Acheter maintenant",
        feature1: "Sans publicité",
        feature2: "Téléchargements rapides",
        feature3: "Voix en texte",
        feature4: "Autocollants premium",
        successTitle: "Paiement réussi!",
        successMessage: "Votre Telegram Premium est maintenant actif"
    },
    es: {
        premiumTitle: "Telegram Premium",
        premiumDuration: "1 Año",
        purchaseBtnText: "Comprar ahora",
        feature1: "Sin anuncios",
        feature2: "Descargas rápidas",
        feature3: "Voz a texto",
        feature4: "Stickers premium",
        successTitle: "¡Pago exitoso!",
        successMessage: "Tu Telegram Premium está ahora activo"
    },
    it: {
        premiumTitle: "Telegram Premium",
        premiumDuration: "1 Anno",
        purchaseBtnText: "Acquista ora",
        feature1: "Senza pubblicità",
        feature2: "Download veloci",
        feature3: "Voce in testo",
        feature4: "Adesivi premium",
        successTitle: "Pagamento riuscito!",
        successMessage: "Il tuo Telegram Premium è ora attivo"
    },
    de: {
        premiumTitle: "Telegram Premium",
        premiumDuration: "1 Jahr",
        purchaseBtnText: "Jetzt kaufen",
        feature1: "Keine Werbung",
        feature2: "Schnellere Downloads",
        feature3: "Sprache zu Text",
        feature4: "Premium-Sticker",
        successTitle: "Zahlung erfolgreich!",
        successMessage: "Ihr Telegram Premium ist jetzt aktiv"
    },
    mx: {
        premiumTitle: "Telegram Premium",
        premiumDuration: "1 Año",
        purchaseBtnText: "Comprar ahora",
        feature1: "Sin anuncios",
        feature2: "Descargas rápidas",
        feature3: "Voz a texto",
        feature4: "Stickers premium",
        successTitle: "¡Pago exitoso!",
        successMessage: "Tu Telegram Premium está ahora activo"
    },
    uz: {
        premiumTitle: "Telegram Premium",
        premiumDuration: "1 Yil",
        purchaseBtnText: "Hozir sotib olish",
        feature1: "Reklamasiz",
        feature2: "Tez yuklab olish",
        feature3: "Ovozni matnga",
        feature4: "Premium stikerlar",
        successTitle: "To'lov muvaffaqiyatli!",
        successMessage: "Sizning Telegram Premium faol"
    },
    ar: {
        premiumTitle: "تيليجرام بريميوم",
        premiumDuration: "سنة واحدة",
        purchaseBtnText: "اشتر الآن",
        feature1: "بدون إعلانات",
        feature2: "تحميلات أسرع",
        feature3: "تحويل الصوت لنص",
        feature4: "ملصقات مميزة",
        successTitle: "تمت عملية الدفع بنجاح!",
        successMessage: "تم تفعيل تيليجرام بريميوم الخاص بك"
    }
};

let currentLanguage = 'en';

// Функция выбора языка
function selectLanguage(lang) {
    currentLanguage = lang;
    updateTexts(lang);
    showScreen('purchaseScreen');
    
    // Для арабского языка меняем направление текста
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
}

// Обновление текстов
function updateTexts(lang) {
    const texts = translations[lang];
    document.getElementById('premiumTitle').textContent = texts.premiumTitle;
    document.getElementById('premiumDuration').textContent = texts.premiumDuration;
    document.getElementById('purchaseBtnText').textContent = texts.purchaseBtnText;
    document.getElementById('feature1').textContent = texts.feature1;
    document.getElementById('feature2').textContent = texts.feature2;
    document.getElementById('feature3').textContent = texts.feature3;
    document.getElementById('feature4').textContent = texts.feature4;
    document.getElementById('successTitle').textContent = texts.successTitle;
    document.getElementById('successMessage').textContent = texts.successMessage;
}

// Показ экрана
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Начало оплаты
function startPayment() {
    // Проверяем, открыто ли в Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
        // Отправляем данные в бота
        window.Telegram.WebApp.sendData(JSON.stringify({
            action: 'start_payment',
            language: currentLanguage
        }));
    } else {
        // Для тестирования вне Telegram
        window.location.href = 'https://t.me/qq222qq2q2dkbot';
    }
}

// Обработка успешной оплаты
function showSuccess() {
    showScreen('successScreen');
    createConfetti();
}

// Создание конфетти
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#fa709a'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -20 + 'px';
        confetti.style.opacity = Math.random();
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// CSS для анимации конфетти
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Инициализация Telegram WebApp
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    
    // Обработка данных от бота
    tg.onEvent('mainButtonClicked', function() {
        startPayment();
    });
    
    // Проверка параметров запуска
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showSuccess();
    }
}
