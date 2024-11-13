const tagSelector = document.querySelector('.tag-selector');
const input = document.querySelector('.tag-input');
const dropdown = document.querySelector('.dropdown-list');
const tagContainer = document.querySelector('.tag-container');

// Hiển thị dropdown và focus vào input khi click vào tag-selector
tagSelector.addEventListener('click', () => {
    input.focus();
    dropdown.style.display = 'block';
});

// Ẩn dropdown khi click ra ngoài
document.addEventListener('click', (e) => {
    if (!tagSelector.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});

// Thêm tag khi chọn một option trong dropdown
dropdown.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const value = e.target.getAttribute('data-value');
        addTag(value);
        dropdown.style.display = 'none';
        input.value = ''; // Xóa nội dung input sau khi chọn
    }
});

// Hàm thêm tag
function addTag(value) {
    const tag = document.createElement('span');
    tag.classList.add('tag');
    tag.innerHTML = `${value} <span class="tag-close">&times;</span>`;

    // Xử lý xóa tag khi click vào dấu "x"
    tag.querySelector('.tag-close').addEventListener('click', (event) => {
        event.stopPropagation(); // Ngăn sự kiện click lan lên tagSelector
        tag.remove();
    });

    tagContainer.appendChild(tag);
}
