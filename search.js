document.getElementById('phoneSearchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Не даємо формі виконувати звичайну поведінку (перезавантаження сторінки)

    const phone = document.getElementById('phone').value.trim();
    if (!phone) {
        alert("Будь ласка, введіть номер телефону.");


        return;
    }

    // Масив з посиланнями, в які підставляється номер телефону
    const urls = [
        `https://billing.columbus.te.ua/calendar.php?jbs_aux_name0=phone&jbs_aux_value0=${phone}&jcal_a=&jbs_id=5735650#jbs`,
       
    ];

    // Відкриваємо всі посилання одночасно у нових вкладках
    urls.forEach(url => {
        window.open(url, '_blank'); // '_blank' відкриває посилання в новій вкладці
    });
});

