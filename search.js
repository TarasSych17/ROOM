// Пошук по номеру телефону
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


// Пошук по номеру заявки
document.getElementById('phoneSearchForm1').addEventListener('submit1', function(e) {
    e.preventDefault();

    const requestNumber = document.getElementById('phone1').value.trim();

    if (!requestNumber) {
        alert("Будь ласка, введіть номер заявки.");
        return;
    }

    const url = `https://billing.columbus.te.ua/calendar.php?jbs_id_filter=${requestNumber}&jcal_a=&jbs_id=${requestNumber}&jbs_brief=1#jbs`;

    window.open(url, '_blank');
});
