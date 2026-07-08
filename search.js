// Пошук по номеру телефону
document.getElementById('phoneSearchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const phone = document.getElementById('phone').value.trim();

    if (!phone) {
        alert("Будь ласка, введіть номер телефону.");
        return;
    }

    const url = `https://billing.columbus.te.ua/calendar.php?jbs_aux_name0=phone&jbs_aux_value0=${encodeURIComponent(phone)}&jcal_a=&jbs_id=5735650#jbs`;

    window.open(url, '_blank');
});


// Пошук по номеру заявки
document.getElementById('phoneSearchForm1').addEventListener('submit', function(e) {
    e.preventDefault();

    const requestNumber = document.getElementById('phone1').value.trim();

    if (!requestNumber) {
        alert("Будь ласка, введіть номер заявки.");
        return;
    }

    const url = `https://billing.columbus.te.ua/calendar.php?jbs_id_filter=${encodeURIComponent(requestNumber)}&jcal_a=&jbs_id=${encodeURIComponent(requestNumber)}&jbs_brief=1#jbs`;

    window.open(url, '_blank');
});


// Пошук по номеру договору
document.getElementById('contractSearchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const contract = document.getElementById('contract').value.trim();

    if (!contract) {
        alert("Будь ласка, введіть номер договору.");
        return;
    }

    const url = `https://billing.columbus.te.ua/clients.php?cls_mode=default&cls_contract_filter=%3D${encodeURIComponent(contract)}&cls_aux_name0=phones#cls`;

    window.open(url, '_blank');
});
