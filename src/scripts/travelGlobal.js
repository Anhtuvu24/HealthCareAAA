const exitDateInput1 = flatpickr("#formCaculatorTravelExitday", {
    dateFormat: 'd/m/Y',
    disableMobile: true,
    locale: "vn",
    // minDate: "today"
    // onChange: function(selectedDates) {
    //     if (selectedDates.length > 0) {
    //         startDateInput1.set("maxDate", selectedDates[0]);
    //     }
    // }
});

// Khởi tạo flatpickr cho formCaculatorTravelStartday
const startDateInput1 = flatpickr("#formCaculatorTravelStartday", {
    dateFormat: 'd/m/Y',
    disableMobile: true,
    locale: "vn",
    minDate: "today",
    // defaultDate: '15/12/2024', // Cách 1: set defalutDate
    onChange: function(selectedDates) {
        if (selectedDates.length > 0) {
            debugger
            exitDateInput1.set("minDate", selectedDates[0]);
        }
    }
});
startDateInput1.setDate('16/12/2025'); // Cách 2 set sau khi input được khởi tạo
const startDate = startDateInput1.selectedDates[0];
if (startDate) {
    exitDateInput1.set("minDate", startDate);
}

// Lấy giá trị của exitDateInput1 và thiết lập maxDate cho startDateInput1
const exitDate = exitDateInput1.selectedDates[0];
if (exitDate) {
    startDateInput1.set("maxDate", exitDate);
}


// Khởi tạo flatpickr cho formCaculatorTravelStartday-1
const startDateInput2 = flatpickr("#formCaculatorTravelStartday-1", {
    dateFormat: 'd/m/Y',
    locale: "vn",
    minDate: "today",
    disableMobile: true,
    onChange: function(selectedDates) {
        if (selectedDates.length > 0) {
            exitDateInput2.set("minDate", selectedDates[0]);
        }
    }
});

const exitDateInput2 = flatpickr("#formCaculatorTravelExitday-1", {
    dateFormat: 'd/m/Y',
    locale: "vn",
    minDate: "today",
    disableMobile: true,
});

const startDate1 = startDateInput2.selectedDates[0];
if (startDate1) {
    exitDateInput1.set("minDate", startDate1);
}

// Lấy giá trị của exitDateInput1 và thiết lập maxDate cho startDateInput1
const exitDate1 = exitDateInput2.selectedDates[0];
if (exitDate1) {
    startDateInput1.set("maxDate", exitDate1);
}
