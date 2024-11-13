const tagSelector = document.querySelector('.tag-selector');
const input = document.querySelector('.tag-input');
const dropdown = document.querySelector('.dropdown-list');
const tagContainer = document.querySelector('.tag-container');

const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
let selectedTags = [];

tagSelector.addEventListener('click', () => {
    input.focus();
    updateDropdown(); // Cập nhật dropdown trước khi hiển thị
    dropdown.style.display = 'block';
});

// Ẩn dropdown khi click ra ngoài
document.addEventListener('click', (e) => {
    if (!tagSelector.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});

// Dừng sự kiện click lan truyền lên document khi click vào dropdown
dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Dừng sự kiện click lan truyền lên document khi click vào input
input.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Thêm tag khi chọn một option trong dropdown
dropdown.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const value = e.target.getAttribute('data-value');
        addTag(value);
        input.value = ''; // Xóa nội dung input sau khi chọn
    }
});

// Hàm cập nhật dropdown
function updateDropdown() {
    dropdown.innerHTML = ''; // Xóa nội dung hiện tại của dropdown

    // Lọc và hiển thị các mục chưa được chọn trong dropdown
    const filteredOptions = dropdownOptions.filter(option => !selectedTags.includes(option));
    filteredOptions.forEach(option => {
        const optionItem = document.createElement('li');
        optionItem.textContent = option;
        optionItem.setAttribute('data-value', option);
        dropdown.appendChild(optionItem);
    });
}

// Hàm thêm tag
function addTag(value) {
    if (!selectedTags.includes(value)) {
        selectedTags.push(value); // Thêm tag vào mảng đã chọn

        const tag = document.createElement('span');
        tag.classList.add('tag');
        tag.innerHTML = `${value} <span class="tag-close">&times;</span>`;

        // Xử lý xóa tag khi click vào dấu "x"
        tag.querySelector('.tag-close').addEventListener('click', (event) => {
            event.stopPropagation(); // Ngăn sự kiện click lan lên tagSelector
            removeTag(value, tag);
        });

        tagContainer.appendChild(tag);
        updateDropdown(); // Cập nhật lại dropdown sau khi thêm tag
    }
}

// Hàm xóa tag
function removeTag(value, tagElement) {
    selectedTags = selectedTags.filter(tag => tag !== value); // Loại bỏ tag khỏi mảng đã chọn
    tagElement.remove(); // Xóa tag khỏi giao diện
    updateDropdown(); // Cập nhật lại dropdown
}

// Ẩn thanh scroll của dropdown nhưng vẫn cho phép scroll
dropdown.style.overflowY = 'auto';
dropdown.style.scrollbarWidth = 'none'; // Ẩn scrollbar trên Firefox
dropdown.style.msOverflowStyle = 'none'; // Ẩn scrollbar trên IE

// CSS cho Webkit-based (Chrome, Safari)
dropdown.style.cssText += `
    &::-webkit-scrollbar {
        display: none;
    }
`;

const uniqueDropdown = document.querySelector('.unique-dropdown');
const uniqueInputInner = uniqueDropdown.querySelector('.input-inner');

uniqueInputInner.addEventListener('click', (e) => {
    e.stopPropagation();
    uniqueDropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!uniqueDropdown.contains(e.target)) {
        uniqueDropdown.classList.remove('active');
    }
});

document.querySelectorAll('.custom-list-checkbox li').forEach(function (li) {
    li.addEventListener('click', function () {
        const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked; // Đảo trạng thái checkbox
    });
});

document.querySelectorAll('.custom-list-checkbox input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('click', function (event) {
        event.stopPropagation(); // Ngăn không cho sự kiện click trên checkbox lan ra ngoài li
    });
});
