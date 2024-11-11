// Khởi tạo flatpickr cho formCaculatorTravelStartday
const startDateInput1 = flatpickr("#formCaculatorTravelStartday", {
    dateFormat: "Y-m-d",
    locale: "vn",
    minDate: "today",
    onChange: function(selectedDates) {
        if (selectedDates.length > 0) {
            exitDateInput1.set("minDate", selectedDates[0]);
        }
    }
});

const exitDateInput1 = flatpickr("#formCaculatorTravelExitday", {
    dateFormat: "Y-m-d",
    locale: "vn",
    minDate: "today"
});

// Khởi tạo flatpickr cho formCaculatorTravelStartday-1
const startDateInput2 = flatpickr("#formCaculatorTravelStartday-1", {
    dateFormat: "Y-m-d",
    locale: "vn",
    minDate: "today",
    onChange: function(selectedDates) {
        if (selectedDates.length > 0) {
            exitDateInput2.set("minDate", selectedDates[0]);
        }
    }
});

const exitDateInput2 = flatpickr("#formCaculatorTravelExitday-1", {
    dateFormat: "Y-m-d",
    locale: "vn",
    minDate: "today"
});
