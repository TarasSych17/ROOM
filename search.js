// Перша форма
document.getElementById('phoneSearchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const phone = document.getElementById('phone').value.trim();

    if (!phone) {
        alert("Будь ласка, введіть номер телефону.");
        return;
    }

    const url = `https://billing.columbus.te.ua/calendar.php?jbs_aux_name0=phone&jbs_aux_value0=${phone}&jcal_a=&jbs_id=5735650#jbs`;

    window.open(url, '_blank');
});


// Друга форма
document.getElementById('phoneSearchForm1').addEventListener('submit', function(e) {
    e.preventDefault();

    const phone = document.getElementById('phone1').value.trim();

    if (!phone) {
        alert("Будь ласка, введіть номер заявки.");
        return;
    }

    const url = `ТУТ_ДРУГЕ_ПОСИЛАННЯ${phone}`;

    window.open(url, '_blank');
});
