// function toggleDropdown() {
//     document.querySelector('.dropdown-content').classList.toggle('show');
// }
//
// function selectTerm(termText) {
//     const selectedTermsContainer = document.querySelector('.selected-terms');
//
//     // Kiểm tra nếu điều khoản đã được thêm rồi thì không thêm lại
//     if (Array.from(selectedTermsContainer.children).some(item => item.textContent === termText)) return;
//
//     // Tạo một item mới và thêm vào danh sách đã chọn
//     const termItem = document.createElement('div');
//     termItem.className = 'selected-term';
//     termItem.innerHTML = `<span>${termText}</span> <button onclick="removeTerm(this)">×</button>`;
//
//     selectedTermsContainer.appendChild(termItem);
//
//     // Đóng dropdown
//     toggleDropdown();
// }
//
// function removeTerm(button) {
//     button.parentElement.remove();
// }
//
// // Đóng dropdown khi click bên ngoài
// document.addEventListener('click', function(event) {
//     const dropdown = document.querySelector('.dropdown-content');
//     if (!dropdown.contains(event.target) && !event.target.matches('.dropdown-btn')) {
//         dropdown.classList.remove('show');
//     }
// });

// function filterOptions() {
//     const input = document.getElementById('brand-input');
//     const filter = input.value.toLowerCase();
//     const datalist = document.getElementById('brand-options');
//
//     // Lấy tất cả các option
//     const options = Array.from(datalist.options);
//
//     // Ẩn tất cả các option không khớp với từ khóa
//     options.forEach(option => {
//         const text = option.value.toLowerCase();
//         option.style.display = text.includes(filter) ? 'block' : 'none';
//     });
// }

function filterOptions(inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toLowerCase();
    const dropdown = document.getElementById(dropdownId);
    const options = Array.from(dropdown.getElementsByTagName('li'));

    // Hiển thị dropdown khi có focus
    dropdown.style.display = 'block';

    // Hiển thị tất cả nếu input rỗng, chỉ lọc khi có từ khóa
    options.forEach(option => {
        const text = option.textContent.toLowerCase();
        option.style.display = filter ? (text.includes(filter) ? 'block' : 'none') : 'block';
    });
}

// Hàm xử lý khi người dùng chọn một tùy chọn
function selectOption(value, inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);
    input.value = value;
    input.classList.add('has-value');
    dropdown.style.display = 'none';
}

let activeOptionIndex = -1; // Để lưu chỉ mục của mục đang được hover
let currentDropdown = null;

// Hàm cập nhật trạng thái hover của các tùy chọn
function updateActiveOption(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const options = Array.from(dropdown.getElementsByTagName('li'));

    // Xóa class hover khỏi tất cả các tùy chọn
    options.forEach(option => option.classList.remove('hover'));

    // Thêm class hover vào mục hiện tại
    if (activeOptionIndex >= 0 && activeOptionIndex < options.length) {
        const activeOption = options[activeOptionIndex];
        activeOption.classList.add('hover');

        // Cuộn dropdown để mục đang hover luôn hiện trong viewport
        const optionTop = activeOption.offsetTop;
        const optionBottom = optionTop + activeOption.offsetHeight;
        const dropdownScrollTop = dropdown.scrollTop;
        const dropdownHeight = dropdown.clientHeight;

        // Kiểm tra nếu mục đang hover không hiển thị hoàn toàn trong dropdown
        if (optionTop < dropdownScrollTop) {
            dropdown.scrollTop = optionTop; // Cuộn lên để hiện mục
        } else if (optionBottom > dropdownScrollTop + dropdownHeight) {
            dropdown.scrollTop = optionBottom - dropdownHeight; // Cuộn xuống để hiện mục
        }
    }
}

// Hàm xử lý khi người dùng nhấn phím
function handleKeyDown(event, inputId, dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const options = Array.from(dropdown.getElementsByTagName('li'));

    if (!dropdown || dropdown.style.display === 'none') return;

    switch (event.key) {
        case 'ArrowDown':
            // Di chuyển xuống dưới trong danh sách
            activeOptionIndex = (activeOptionIndex + 1) % options.length;
            updateActiveOption(dropdownId);
            break;
        case 'ArrowUp':
            // Di chuyển lên trên trong danh sách
            activeOptionIndex = (activeOptionIndex - 1 + options.length) % options.length;
            updateActiveOption(dropdownId);
            break;
        case 'Enter':
            // Chọn mục hiện tại khi nhấn Enter
            if (activeOptionIndex >= 0 && activeOptionIndex < options.length) {
                selectOption(options[activeOptionIndex].textContent, inputId, dropdownId);
            }
            break;
        case 'Escape':
            // Ẩn dropdown khi nhấn phím Esc
            dropdown.style.display = 'none';
            break;
        default:
            return;
    }

    // Ngăn sự kiện mặc định nếu phím lên/xuống hoặc Enter được nhấn
    event.preventDefault();
}

// Hàm hiển thị tất cả các tùy chọn khi input được focus
function setupInputListeners(inputId, dropdownId) {
    const input = document.getElementById(inputId);

    input.addEventListener('focus', function() {
        activeOptionIndex = -1; // Reset chỉ mục khi focus
        currentDropdown = dropdownId;
        filterOptions(inputId, dropdownId);
    });

    input.addEventListener('keydown', function(event) {
        handleKeyDown(event, inputId, dropdownId);
    });
}

// Ẩn dropdown khi click ra ngoài
document.addEventListener('click', function(event) {
    const carInput = document.getElementById('formObjectCarCompany');
    const carDropdown = document.getElementById('car-options');
    const brandInput = document.getElementById('formObjectCarBrand');
    const brandDropdown = document.getElementById('brand-options');

    if (!carInput.contains(event.target) && !carDropdown.contains(event.target)) {
        carDropdown.style.display = 'none';
    }

    if (!brandInput.contains(event.target) && !brandDropdown.contains(event.target)) {
        brandDropdown.style.display = 'none';
    }
});

// Thiết lập sự kiện cho cả hai input
setupInputListeners('formObjectCarCompany', 'car-options');
setupInputListeners('formObjectCarBrand', 'brand-options');


