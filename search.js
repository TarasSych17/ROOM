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


// Пошук по прізвищу співробітника
document.getElementById('staffSearchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const staff = document.getElementById('staff').value.trim();

    if (!staff) {
        alert("Будь ласка, введіть прізвище.");
        return;
    }

    const url = `https://billing.columbus.te.ua/staff.php?stf_name_alt_filter=${encodeURIComponent(staff)}#stf`;

    window.open(url, '_blank');
});


// Пошук заявки по номеру телефону
document.getElementById('conRequestSearchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const phone = document.getElementById('conRequestPhone').value.trim();

    if (!phone) {
        alert("Будь ласка, введіть номер телефону.");
        return;
    }

    const url = `https://billing.columbus.te.ua/con_requests.php?crqs_phone_filter=${encodeURIComponent(phone)}&crqs_aux_name0=phone&crqs_id=3236358&crqs_brief=0#crqs`;

    window.open(url, '_blank');
});
