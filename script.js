document.addEventListener('DOMContentLoaded', () => {
    
    // ---  Made by Yashar Qurbanov ---
    const langData = {
        ru: { 
            nav_special:"Акции", nav_starters:"Закуски", nav_mains:"Горячее", nav_drinks:"Напитки", 
            hero_title:"Искусство вкуса", hero_sub:"Сезонное меню 2026", 
            chef_choice:"Выбор шефа", spec1:'Сет "Дары моря"', spec2:'Веган-Боул', spec3:'Трюфельный десерт', 
            s1_t:'Брускетта с томатами', s1_d:'Чиабатта на гриле, свежие томаты, базилик.', 
            s2_t:'Карпаччо из говядины', s2_d:'Мраморная говядина, пармезан, бальзамик.', 
            s3_t:'Салат Нисуаз', s3_d:'Тунец прожарки Rare, яйцо пашот, анчоусы.', 
            s4_t:'Паштет из печени', s4_d:'Луковый конфитюр, поджаренный багет.', 
            s5_t:'Сырное плато', s5_d:'Четыре вида крафтовых сыров, мед, орехи.', 
            m1_t:'Стейк Рибай', m1_d:'Премиальная говядина, соус перечный.', 
            m2_t:'Утиная грудка', m2_d:'Пюре из сельдерея, ягодный соус.', 
            m3_t:'Ризотто с грибами', m3_d:'Белые грибы, трюфельное масло.', 
            m4_t:'Дорадо на гриле', m4_d:'Лимон, тимьян, овощи гриль.', 
            m5_t:'Паста Карбонара', m5_d:'Гуанчиале, желток, пекорино романо.', 
            m6_t:'Осьминог по-ливийски', m6_d:'Молодой картофель, соус ромеско.', 
            d1_t:'Лимонад Малина-Юдзу', d1_d:'400мл / Домашнего приготовления.', 
            d2_t:'Эспрессо Тоник', d2_d:'Классический освежающий микс.', 
            d3_t:'Авторский чай', d3_d:'600мл / Облепиха и груша.', 
            d4_t:'Матча Латте', d4_d:'На кокосовом молоке.', 
            d5_t:'Вино по бокалам', d5_d:'150мл / Сухое белое или красное.' 
        },
        en: { 
            nav_special:"Offers", nav_starters:"Starters", nav_mains:"Main Course", nav_drinks:"Drinks", 
            hero_title:"The Art of Taste", hero_sub:"Seasonal Menu 2026", 
            chef_choice:"Chef's Choice", spec1:"Seafood Set", spec2:"Vegan Bowl", spec3:"Truffle Dessert", 
            s1_t:"Tomato Bruschetta", s1_d:"Grilled ciabatta, fresh tomatoes, basil.", 
            s2_t:"Beef Carpaccio", s2_d:"Marble beef, parmesan, balsamic.", 
            s3_t:"Salad Niçoise", s3_d:"Rare tuna, poached egg, anchovies.", 
            s4_t:"Liver Pate", s4_d:"Onion confit, toasted baguette.", 
            s5_t:"Cheese Platter", s5_d:"Four types of craft cheeses, honey, nuts.", 
            m1_t:"Ribeye Steak", m1_d:"Premium beef, pepper sauce.", 
            m2_t:"Duck Breast", m2_d:"Celery puree, berry sauce.", 
            m3_t:"Mushroom Risotto", m3_d:"Porcini mushrooms, truffle oil.", 
            m4_t:"Grilled Dorado", m4_d:"Lemon, thyme, grilled vegetables.", 
            m5_t:"Pasta Carbonara", m5_d:"Guanciale, yolk, pecorino romano.", 
            m6_t:"Octopus", m6_d:"Young potatoes, romesco sauce.", 
            d1_t:"Raspberry-Yuzu Lemonade", d1_d:"400ml / Homemade.", 
            d2_t:"Espresso Tonic", d2_d:"Classic refreshing mix.", 
            d3_t:"Signature Tea", d3_d:"600ml / Sea buckthorn and pear.", 
            d4_t:"Matcha Latte", d4_d:"With coconut milk.", 
            d5_t:"Wine by the glass", d5_d:"150ml / Dry white or red." 
        },
        az: { 
            nav_special:"Aksiyalar", nav_starters:"Qəlyanaltılar", nav_mains:"Əsas yeməklər", nav_drinks:"İçkilər", 
            hero_title:"Dad sənəti", hero_sub:"Mövsümi menyu 2026", 
            chef_choice:"Şefin seçimi", spec1:"Dəniz məhsulları seti", spec2:"Vegan Bowl", spec3:"Truf deserti", 
            s1_t:"Pomidor brusketta", s1_d:"Qril edilmiş ciabatta, təzə pomidor, reyhan.", 
            s2_t:"Mal əti karpaçço", s2_d:"Mərmər mal əti, parmezan, balzamika.", 
            s3_t:"Nisuaz salatı", s3_d:"Rare ton balığı, poşe yumurta, ançous.", 
            s4_t:"Qara ciyər paşteti", s4_d:"Soğan konfiti, qızardılmış baqet.", 
            s5_t:"Pendir boşqabı", s5_d:"Dörd növ pendir, bal, qoz.", 
            m1_t:"Ribeye steyki", m1_d:"Premium mal əti, istiot sousu.", 
            m2_t:"Ördək döşü", m2_d:"Kərəviz püresi, giləmeyvə sousu.", 
            m3_t:"Göbələk rizotto", m3_d:"Ağ göbələk, truf yağı.", 
            m4_t:"Qril edilmiş Dorado", m4_d:"Limon, kəklikotu, tərəvəzlər.", 
            m5_t:"Karbonara pastası", m5_d:"Guançiale, yumurta sarısı, pekorino.", 
            m6_t:"Ahtapot", m6_d:"Gənc kartof, romesko sousu.", 
            d1_t:"Moruq-Yuzu limonadı", d1_d:"400ml / Ev üsulu.", 
            d2_t:"Espresso Tonik", d2_d:"Klassik təravətləndirici miks.", 
            d3_t:"Müəllif çayı", d3_d:"600ml / İydə və armud.", 
            d4_t:"Matcha Latte", d4_d:"Kokos südü ilə.", 
            d5_t:"Şərab qədəhlə", d5_d:"150ml / Ağ və ya qırmızı quru." 
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langData[lang] && langData[lang][key]) {
                el.textContent = langData[lang][key];
            }
        });
        localStorage.setItem('userLang', lang);
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            changeLanguage(btn.getAttribute('data-lang'));
        });
    });

    changeLanguage(localStorage.getItem('userLang') || 'ru');


    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    
    const toggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav__list');
    toggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        toggle.classList.toggle('is-active');
    });

    
    const track = document.querySelector('.carousel__track');
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => isDown = false);
    track.addEventListener('mouseup', () => isDown = false);
    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
    });
});

// ---  Made by Yashar Qurbanov ---