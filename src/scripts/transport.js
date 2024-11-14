// Danh sách điều khoản theo id
const dropdownOptionsById = {
    'dk_main': ['Option A1 long long long', 'Option B1', 'Option C1', 'Option D1'],
    'rr': ['Option A2', 'Option B2', 'Option C2', 'Option D2'],
    'dk_bs': ['Option A3', 'Option B3', 'Option C3', 'Option D3'],
};

// Lấy tất cả các tag-selector
const tagSelectors = document.querySelectorAll('.tag-selector');

// Hàm đóng tất cả dropdown
function closeAllDropdowns() {
    tagSelectors.forEach(selector => {
        const dropdown = selector.querySelector('.dropdown-list');
        dropdown.classList.remove('open');
    });
}

tagSelectors.forEach((tagSelector) => {
    const id = tagSelector.getAttribute('id');
    const input = tagSelector.querySelector('.tag-input');
    const dropdown = tagSelector.querySelector('.dropdown-list');
    const tagContainer = tagSelector.querySelector('.tag-container');
    const dropdownOptions = dropdownOptionsById[id]; // Lấy options dựa vào ID của tag-selector
    let selectedTags = [];

    // Mở dropdown khi click vào tag-selector và đóng các dropdown khác
    tagSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        input.focus();
        closeAllDropdowns(); // Đóng tất cả các dropdown khác
        dropdown.classList.add('open'); // Mở dropdown hiện tại
        updateDropdown();
    });

    // Đóng tất cả dropdown khi click ra ngoài
    document.addEventListener('click', () => {
        closeAllDropdowns();
    });

    // Ngăn sự kiện click lan truyền lên document khi click vào dropdown
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Thêm tag khi chọn một option trong dropdown
    dropdown.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const value = e.target.getAttribute('data-value');
            addTag(value);
            input.value = '';
            dropdown.classList.remove('open'); // Đóng dropdown sau khi chọn
        }
    });

    // Hàm cập nhật dropdown cho từng tag-selector
    function updateDropdown() {
        dropdown.innerHTML = '';
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
            selectedTags.push(value);

            const tag = document.createElement('span');
            tag.classList.add('tag');
            tag.innerHTML = `<p class="tag-content" title="${value}">${value}</p> <span class="tag-close">&times;</span>`;

            tag.querySelector('.tag-close').addEventListener('click', (event) => {
                event.stopPropagation();
                removeTag(value, tag);
            });

            tagContainer.appendChild(tag);
            updateDropdown();
        }
    }

    // Hàm xóa tag
    function removeTag(value, tagElement) {
        selectedTags = selectedTags.filter(tag => tag !== value);
        tagElement.remove();
        updateDropdown();
    }
});