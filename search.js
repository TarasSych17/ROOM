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
        `https://billing.columbus.te.ua/con_requests.php?crqs_phone_filter=${phone}#cnrper`,
        `https://billing.columbus.te.ua/clients.php?cls_mode=default&cls_aux_name0=phones&cls_aux_value0=${phone}&cls_id=1861204&cls_page=1&cmenu_selected=jo#cls`,
        `https://billing.columbus.te.ua/asterisk_calls.php?sacs2_src_name_filter=${phone}#sacs2`,
        `https://billing.columbus.te.ua/asterisk_calls.php?sacs2_dst_filter=${phone}#sacs2`
    ];

    // Відкриваємо всі посилання одночасно у нових вкладках
    urls.forEach(url => {
        window.open(url, '_blank'); // '_blank' відкриває посилання в новій вкладці
    });
});

