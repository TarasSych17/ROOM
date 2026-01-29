document.getElementById('phoneSearchForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Забороняємо стандартну відправку форми

    const phone = document.getElementById('phone').value.trim();
    const phone1 = document.getElementById('phone1').value.trim();

    if (!phone && !phone1) {
        alert("Будь ласка, введіть хоча б один номер телефону.");
        return;
    }

    // Формуємо одне посилання з двома параметрами
    const url = `https://billing.columbus.te.ua/calendar.php` +
        `?jbs_aux_name0=phone&jbs_aux_value0=${encodeURIComponent(phone)}` +
        `&jbs_aux_name1=phone1&jbs_aux_value1=${encodeURIComponent(phone1)}` +
        `&jcal_a=&jbs_id=5735650#jbs`;

    // Відкриваємо одне посилання у новій вкладці
    window.open(url, '_blank');
});

