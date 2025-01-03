const data = {
  bike: {
    insurancePackage: [
      {
        name: "responsibility",
        type: "table",
        title: "Mức trách nhiệm bảo hiểm",
        data: [
          {
            title: [
              "Mức trách nhiệm bảo hiểm là số tiền tối đa doanh nghiệp bảo hiểm có thể phải trả đối với thiệt hại về thân thể, tính mạng và tải sản của bên thứ ba và hành khách do xe cơ giới gây ra trong mỗi vụ tai nạn xảy ra thuộc phạm vi trách hiệm bảo hiểm.",
              "Cụ thể như sau:",
            ],
            headers: ["STT", "Mức Trách Nhiệm", "Số Tiền (VNĐ)"],
            rows: [
              [
                "Mức trách nhiệm bảo hiểm đối với thiệt hại về người do xe cơ giới gây ra",
                "150 triệu đồng/1 người/1 vụ tai nạn",
              ],
              [
                "Mức trách nhiệm bảo hiểm đối với thiệt hại về tài sản do xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy và các loại xe cơ giới tương tự (kể cả xe cơ giới dùng cho người tàn tật) gây ra",
                "50 triệu đồng/1 vụ tai nạn",
              ],
              [
                "Mức trách nhiệm bảo hiểm dối với thiệt hại về tài sản do xe ô tô, máy kéo, xe máy thi công, xe máy nông nghiệp, lâm nghiệp và các loại xe đặc chủng khác sử dụng vào mục đích an ninh, quốc phòng (kể cả rơ-moóc  và sơ mi rơ-moóc được kéo bởi xe ô tô hoặc máy kéo) gây ra",
                "100 triệu đồng/1 vụ tai nạn",
              ],
            ],
          },
        ],
      },
      {
        name: "uninsurance",
        type: "section",
        title: "Loại trừ bảo hiểm",
        data: [
          {
            type: "list",
            content: [
              "Hành động cố ý gây thiệt hại của chủ xe, lái xe hoặc của người bị thiệt hại. Lái xe gây tai nạn cố ý bỏ chạy không thực hiện trách nhiệm dân sự của chủ xe, lái xe cơ giới.",
              "Lái xe không có Giấy phép lái xe hoặc Giấy phép lái xe không phù hợp đối với loại xe cơ giới bắt buộc phải có Giấy phép lái xe. Trường hợp lái xe bị tước quyền sử dụng Giấy phép lái xe có thời hạn hoặc không thời hạn thì được coi là không có Giấy phép lái xe.",
              "Thiệt hại gây ra hậu quả gián tiếp như: giảm giá trị thương mại, thiệt hại gắn liền với việc sử dụng và khai thác tài sản bị thiệt hại.",
              "Thiệt hại đổi với tài sản bị mất cắp hoặc bị cướp trong tai nạn.",
              "Chiến tranh, khủng bố, động đất.",
              "Thiệt hại đối với tài sản đặc biệt bao gồm: vàng, bạc, đá quý, các loại giấy tờ có giá trị như tiền, đồ cổ, tranh ảnh quý hiếm, thi hài, hài cốt.",
            ],
          },
        ],
      },
    ],
  },
  car: {
    insurancePackage: [
      {
        name: "customer",
        type: "table",
        title: "Mức TNDS với người thứ Ba và hành khách",
        data: [
          {
            title: ["MTN tự nguyện tính bằng đồng Việt Nam"],
            headers: ["STT", "MTN", "Mức I", "Mức II", "Mức III"],
            rows: [
              ["Về người", "30tr/ng/vụ", "30tr/ng/vụ", "50tr/ng/vụ"],
              ["Tài sản", "30tr/vụ", "50tr/vụ", "50tr/vụ"],
            ],
          },
          {
            title: ["MTN tự nguyện tính bằng đô la Mỹ (USD)"],
            headers: ["STT", "MTN", "Mức I", "Mức II", "Mức III"],
            rows: [
              [
                "Về người",
                "1000 USD/ng/vụ",
                "1000 USD/ng/vụ",
                "1000 USD/ng/vụ",
              ],
              ["Tài sản", "1000 USD/vụ", "1000 USD/vụ", "1000 USD/vụ"],
            ],
          },
        ],
      },
      {
        name: "driver",
        type: "table",
        title: "Mức TNDS đối với Lái, phụ và người ngồi trên xe",
        data: [
          {
            title: [
              "Phí bảo hiểm (người/năm) = Tỉ lệ phí x Số tiền bảo hiểm",
              "Thuế VAT = 0%",
            ],
            headers: ["STT", "Số tiền bảo hiểm", "Tỉ lệ phí (%)"],
            rows: [
              ["Dưới 30,000,000 đ/Người/Vụ", "0.1"],
              ["30,000,000 - 50,000,000 đ/Người/Vụ", "0.2"],
              ["50,000,000 - 100,000,000 đ/Người/Vụ", "0.3"],
            ],
          },
        ],
      },
      {
        name: "owner",
        type: "section",
        title: "Mức TNDS của chủ xe với hàng hóa vận chuyển trên xe",
        data: [
          {
            type: "list",
            content: [
              "Mức trách nhiệm bảo hiểm theo yêu cầu của chủ xe nhưng tối đa không vượt quá 40 triệu đồng/tấn và không vượt quá 1,6 tỷ đồng.",
              "Số tấn hàng hóa được bảo hiểm (theo yêu cầu của chủ xe): Tối đa là trọng tải cho phép của xe.",
              "Tỷ lệ phí (chưa bao gồm 10%VAT): 0,55% của Mức trách nhiệm bảo hiểm.",
              "Mức khấu trừ: 0.5% Mức trách nhiệm bảo hiểm và tối thiểu không thấp hơn 1000.000 đồng/vụ.",
            ],
          },
          {
            content: [
              "Công thức tính: MTN bảo hiểm/vụ - MTN bảo hiểm/tấn x Số tấn trọng tải của xe.",
            ],
          },
        ],
      },
      {
        name: "others",
        type: "section",
        title: "TNDS trong một số trường hợp khác",
        data: [
          {
            label: "Xe tập lái",
            content: ["Tính bằng 120% của phí xe cùng chủng loại"],
          },
          {
            label: "Xe Taxi",
            content: ["Tính bằng 170% của phí xe kinh doanh cùng số chỗ ngồi"],
          },
          {
            label: "Xe ô tô chuyên dụng",
            content: [
              "Phí bảo hiểm TNDS của xe cứu thương được tính bằng 120% phí của xe plick up.",
              "Phí bảo hiểm của xe chở tiền được tính bằng 120% phí bảo hiểm của xe dưới 6 chỗ ngồi.",
              "Phí bảo hiểm của các loại xe chuyên dùng khác được tính bằng 120% phí bảo hiểm của xe chở hàng cùng trọng tải.",
            ],
          },
          {
            label: "Đầu kéo rơ moóc",
            content: [
              "Tính bằng 150% của phí xe cùng trọng tải trên 15 tấn, phí bảo hiểm của xe đầu kéo Tơ moóc là phí của cả đầu kéo và rơ móc.",
            ],
          },
          {
            label: "Xe máy chuyên dụng",
            content: [
              "Tính bằng 120% phí bảo hiểm của xe chở hàng dưới 3 tấn.",
            ],
          },
          {
            label: "Xe buýt",
            content: [
              "Tính bằng phí bảo hiểm của xe không kinh doanh vận tải cùng số chỗ ngồi.",
            ],
          },
        ],
      },
    ],
  },
  person: {
    insurancePackage: [
      {
        name: "person",
        type: "section",
        title: "SILVER - QUYỀN LỢI BẢO HIỂM CHÍNH",
        data: [
          {
            type: "list",
            liType: "upper-roman",
            content: [
              {
                label: "Chi phí y tê cho nằm viên, phẫu thuật do ốm đau",
                value: "120.000.000 đ",
                data: [
                  {
                    label: "Chi phí nằm viện",
                    value: "100.000.000 đ",
                  },
                  {
                    label: "Phòng chăm sóc đặc biệt",
                    value: "100.000.000 đ",
                  },
                ],
              },
              {
                label: "Các quyền lợi khác",
                value: "120.000.000 đ",
                data: [
                  {
                    label: "Điều trị sau khi xuất viện",
                    value: "100.000.000 đ",
                  },
                  {
                    label: "Chăm sóc y tá tại nhà",
                    value: "100.000.000 đ",
                  },
                  {
                    label: "Cấy ghép nội tạng",
                    value: "100.000.000 đ",
                  },
                  {
                    label: "Điều trị sau khi xuất viện",
                    value: "100.000.000 đ",
                  },
                  {
                    label: "Trợ cấp nằm viện",
                    value: "100.000.000 đ",
                  },
                ],
              },
              {
                label: "Giới hạn Điều trị Ung thư",
                value: "120.000.000 đ",
                data: [
                  {
                    label: "Trợ cấp nằm viện",
                    value: "100.000.000 đ",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

const closeNode = `<svg
  width="13"
  height="13"
  viewBox="0 0 13 13"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
  >
  <path
    d="M8.40324 6.99375L12.6976 2.70905C13.0892 2.31741 13.0892 1.68244 12.6976 1.2908C12.306 0.899161 11.6711 0.899161 11.2795 1.2908L6.99509 5.58549L2.71069 1.2908C2.31908 0.899161 1.68415 0.899161 1.29254 1.2908C0.900933 1.68244 0.900933 2.31741 1.29254 2.70905L5.58693 6.99375L1.29254 11.2784C1.10348 11.466 0.997131 11.7213 0.997131 11.9876C0.997131 12.2539 1.10348 12.5092 1.29254 12.6967C1.48006 12.8858 1.73533 12.9921 2.00162 12.9921C2.26791 12.9921 2.52317 12.8858 2.71069 12.6967L6.99509 8.40201L11.2795 12.6967C11.467 12.8858 11.7223 12.9921 11.9886 12.9921C12.2548 12.9921 12.5101 12.8858 12.6976 12.6967C12.8867 12.5092 12.993 12.2539 12.993 11.9876C12.993 11.7213 12.8867 11.466 12.6976 11.2784L8.40324 6.99375Z"
    fill="#637381"
  />
  </svg>`;

const CLS = {
  modal: "dg-modal",
  card: "dg-card",
};

// Xử lý danh sách câu hỏi/trả lời
function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  const question = button.parentElement;

  // Toggle hiển thị câu trả lời
  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    question.classList.remove('active');
  } else {
    answer.style.display = 'block';
    question.classList.add('active');
  }
}

function showQuestions(topicId) {
  const questionLists = document.querySelectorAll('.questions-list');
  const topicButtons = document.querySelectorAll('.topics-list button');

  // Ẩn tất cả danh sách câu hỏi
  questionLists.forEach(list => {
    list.style.display = 'none';
  });

  // Hiển thị danh sách câu hỏi của chủ đề được chọn
  document.getElementById(topicId).style.display = 'block';

  // Loại bỏ lớp `active-topic` khỏi tất cả các nút
  topicButtons.forEach(button => {
    button.classList.remove('active-topic');
  });

  // Thêm lớp `active-topic` vào nút của chủ đề được chọn
  const selectedButton = Array.from(topicButtons).find(button =>
      button.getAttribute('onclick').includes(topicId)
  );

  if (selectedButton) {
    selectedButton.classList.add('active-topic');
  }
}

// Xử lý logic danh sách trả lời - câu hỏi

document.addEventListener("DOMContentLoaded", function() {
  const questionContainers = document.querySelectorAll('.questions-list');
  console.log("Found .questions-list elements:", questionContainers.length);
  questionContainers.forEach(container => {
    const questions = container.querySelectorAll('.question-container');
    const toggleButton = container.querySelector('.toggle-button');

    // Hiển thị tối đa 5 câu hỏi đầu tiên, ẩn các câu hỏi còn lại
    if (questions.length > 5) {
      questions.forEach((question, index) => {
        if (index >= 5) {
          question.classList.add('hidden');
        }
      });
      toggleButton.style.display = 'flex'; // Hiển thị nút "Xem thêm"
    } else {
      toggleButton.style.display = 'none'; // Ẩn nút "Xem thêm" nếu có <= 5 câu hỏi
    }
  });
});

function toggleQuestions(topicId) {
  const questionsList = document.querySelector(`.questions-list[data-topic="${topicId}"]`);
  const toggleButton = document.querySelector(`.toggle-button[data-topic="${topicId}"]`);
  const hiddenQuestions = questionsList.querySelectorAll('.question-container.hidden');
  const svgIcon = toggleButton.querySelector('svg');

  // Kiểm tra trạng thái của nút
  if (hiddenQuestions.length > 0) {
    // Hiện tất cả các câu hỏi
    hiddenQuestions.forEach(question => {
      question.classList.remove('hidden');
    });
    // Đổi nội dung nút thành "Ẩn bớt"
    toggleButton.textContent = "Ẩn bớt ";
    toggleButton.appendChild(svgIcon);
    svgIcon.style.transform = "rotate(180deg)";
  } else {
    // Ẩn các câu hỏi ngoài 5 câu hỏi đầu tiên
    const questions = questionsList.querySelectorAll('.question-container');
    questions.forEach((question, index) => {
      if (index >= 5) {
        question.classList.add('hidden');
      }
    });
    // Đổi nội dung nút lại thành "Xem thêm"
    toggleButton.textContent = "Xem thêm ";
    toggleButton.appendChild(svgIcon);
    svgIcon.style.transform = "rotate(0deg)";
  }
}

// Menu
function toggleMenu() {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('show'); // Thêm hoặc gỡ class 'show' khi nhấn vào icon
  const menuItems = document.querySelectorAll('nav ul li a');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });
}

// Input date
document.querySelectorAll("input[type='text'].dateSelect").forEach(input => {
  flatpickr(input, {
    dateFormat: 'd/m/Y',
    locale: "vn",
    minDate: "today",
    disableMobile: true
  });
});

document.querySelectorAll("input[type='text'].dob").forEach(input => {
  flatpickr(input, {
    dateFormat: 'd/m/Y',
    locale: "vn",
    maxDate: "today",
    disableMobile: true
  });
});

// Hàm xử lý khi có tệp được chọn hoặc kéo thả vào
function handleFiles(event) {
  let file;
  if (event.target && event.target.files) {
    // Trường hợp tệp được chọn từ input file
    file = event.target.files[0];
  } else if (event.dataTransfer && event.dataTransfer.files) {
    // Trường hợp tệp được thả vào
    file = event.dataTransfer.files[0];
  }

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (e) => {
      // Thay thế upload icon với ảnh xem trước
      uploadIcon.innerHTML = `<img src="${e.target.result}" alt="Preview Image" class="upload-preview" />`;
    };
    reader.readAsDataURL(file);
  } else {
    alert("Vui lòng chọn một tệp ảnh hợp lệ.");
  }
}

  // Utils
  let throttleTimer = false;
  function throttle(cb, time = 250) {
    if (throttleTimer) return;

    throttleTimer = true;
    setTimeout(() => {
      cb();
      throttleTimer = false;
    }, time);
  }

  // Sticky header
  const header = document.querySelector("header");
  const headerOffsetHeight = header?.offsetHeight || 60;
  const docBody = document.documentElement || document.body;
  const hasOffset = window.scrollY !== undefined;
  let scrollTop;

  window.addEventListener("scroll", () => {
    throttle(() => {
      scrollTop = hasOffset ? window.scrollY : docBody.scrollTop;
      if (scrollTop >= headerOffsetHeight) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  });

  // hide item info
function toggleItems() {
  const itemsWrapper = document.querySelector('.info-items-wrapper');
  const toggleBtn = document.querySelector('.toggle-btn-info');
  const toggleText = toggleBtn.querySelector('.toggle-text');

  itemsWrapper.classList.toggle('show-all');
  toggleBtn.classList.toggle('expanded');

  // Cập nhật văn bản
  toggleText.textContent = itemsWrapper.classList.contains('show-all') ? 'Ẩn bớt' : 'Xem thêm';
}

// Hide item about
function toggleAboutItems() {
  const itemsWrapper = document.querySelector('.about-items-wrapper');
  const toggleBtn = document.querySelector('.toggle-btn-about');
  const toggleText = toggleBtn.querySelector('.toggle-text');

  itemsWrapper.classList.toggle('show-all');
  toggleBtn.classList.toggle('expanded');

  // Cập nhật văn bản
  toggleText.textContent = itemsWrapper.classList.contains('show-all') ? 'Ẩn bớt' : 'Xem thêm';
}

// Hide item outstanding
function toggleOustandingItems() {
  const itemsWrapper = document.querySelector('.outstanding-items-wrapper');
  const toggleBtn = document.querySelector('.toggle-btn-outstanding');
  const toggleText = toggleBtn.querySelector('.toggle-text');

  itemsWrapper.classList.toggle('show-all');
  toggleBtn.classList.toggle('expanded');

  // Cập nhật văn bản
  toggleText.textContent = itemsWrapper.classList.contains('show-all') ? 'Ẩn bớt' : 'Xem thêm';
}

// Ẩn nút nếu có ít hơn hoặc bằng 2 item
window.addEventListener('load', () => {
  const items = document.querySelectorAll('.info-item');
  const toggleBtn = document.querySelector('.toggle-btn-info');

  const aboutItems = document.querySelectorAll('.about-item');
  const aboutToggleBtn = document.querySelector('.toggle-btn-about');

  const outstandingItems = document.querySelectorAll('.outstanding-item');
  const outstandingToggleBtn = document.querySelector('.toggle-btn-outstanding');

  if (items.length <= 2) {
    if (toggleBtn) {
      toggleBtn.style.display = 'none';
    }
  }
  if (aboutItems.length <= 2) {
    aboutToggleBtn.style.display = 'none';
  }
  if (outstandingItems.length <= 2) {
    outstandingToggleBtn.style.display = 'none';
  }
});

// Hàm đóng modal
function closeModal_1() {
  modal.style.display = 'none';
}


  // Scroll to sections
  const links = document.querySelectorAll("a:not([data-redirect])");
  for (let link of links) {
    link.addEventListener("click", handleClickLink);
  }

  function handleClickLink(e) {
    handleMenuButtonClick();
    e.preventDefault();
    const href = this.getAttribute("href");
    let offsetTop = 0;
    if (document.querySelector(href)) {
      offsetTop = document.querySelector(href).offsetTop - headerOffsetHeight;
    }

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }

  // Hidden scroll when open modal
  const preventScroll = (isPrevent = true) => {
    if (isPrevent) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";
  };

  const dataForModal = Object.values(data)
    .reduce((acc, item) => {
      const [[key, val]] = Object.entries(item);
      if (key === "insurancePackage") {
        acc.push(...val);
      }
      return acc;
    }, [])
    .filter(Boolean);

  const matchDataByName = (data, name) => {
    return data.find((i) => i.name === name);
  };

  const activator = document.querySelectorAll("[data-modal-control]");
  for (let i = 0; i < activator.length; i++) {
    const act = activator[i];
    act.addEventListener("click", function () {
      debugger
      const { name } = this.dataset;
      const matched = matchDataByName(dataForModal, name);
      if (isNullable(matched)) return;

      preventScroll();
      const { type, data, title } = matched || {};
      const fn = {
        section: createSection,
        table: createTable,
      };
      const bodyMarkup = typeof fn[type] === "function" ? fn[type](data) : null;
      if (bodyMarkup) {
        createModal(title, bodyMarkup);
      }
    });
  }

  // Create elements
  const isNullable = (val) => typeof val === "undefined" || val === null;
  const createElement = ({ as = "div", cls, content, children, ...attrs }) => {
    const el = document.createElement(as);
    const attrKeys = Object.keys(attrs);
    for (let i = 0; i < attrKeys.length; i++) {
      const key = attrKeys[i];
      el.setAttribute(key, attrs[key]);
    }

    if (!isNullable(cls)) {
      el.classList = cls;
    }

    if (!isNullable(content)) {
      el.innerHTML = content;
    }

    if (!isNullable(children)) {
      if (Array.isArray(children)) {
        children.forEach((child) => {
          el.appendChild(child);
        });
      } else {
        el.appendChild(children);
      }
    }
    return el;
  };

  const closeBtn = createElement({
    as: "span",
    content: closeNode,
    cls: "action",
    "data-modal-close": true,
  });

  const createSection = (data = []) => {
    const itemsMarkup = [];
    for (let i = 0; i < data.length; i++) {
      const itemMarkup = [];
      const { type, content = [], label, liType = "decimal" } = data[i];
      if (!isNullable(type) && "list" === type) {
        const cts = [];
        for (let j = 0; j < content.length; j++) {
          const ct = content[j];
          let props = { content: ct };
          if (typeof ct === "object") {
            const { label, value, data } = ct;
            const labelM = createElement({ as: "label", content: label });
            const valueM = createElement({ as: "span", content: value });

            const contentM = [];
            if (data && data.length > 0) {
              for (let k = 0; k < data.length; k++) {
                const { label, value } = data[k] || {};
                const labelM2 = createElement({ as: "label", content: label });
                const valueM2 = createElement({ as: "span", content: value });
                const li2 = createElement({
                  as: "li",
                  cls: "item-wrap",
                  children: [labelM2, valueM2],
                });
                contentM.push(li2);
              }
            }
            const lis = createElement({ as: "ul", children: contentM });
            const contentD = createElement({ children: lis });
            const d = createElement({
              cls: "item-wrap",
              children: [labelM, valueM],
            });
            const dWrap = createElement({ children: [d, contentD] });
            props = { children: dWrap };
          }
          const li = createElement({ as: "li", ...props });
          cts.push(li);
        }
        const ol = createElement({
          as: "ol",
          children: cts,
          style: `list-style-type: ${liType};`,
          cls: liType !== "decimal" ? "special" : "",
        });
        itemMarkup.push(ol);
      } else if (!isNullable(label)) {
        const cts = [];
        for (let j = 0; j < content.length; j++) {
          const ct = content[j];
          const span = createElement({ as: "span", content: ct });
          cts.push(span);
        }

        const labelMarkup = createElement({
          as: "label",
          cls: "label",
          content: label,
        });
        const span = createElement({ as: "p", children: cts });
        const div = createElement({ children: [labelMarkup, span] });
        itemMarkup.push(div);
      } else {
        const cts = [];
        for (let i = 0; i < content.length; i++) {
          const ct = content[i];
          const span = createElement({ as: "span", content: ct });
          cts.push(span);
        }
        const div = createElement({ children: cts });
        itemMarkup.push(div);
      }

      const item = createElement({
        cls: `${CLS.card}__content-item`,
        children: itemMarkup,
      });
      itemsMarkup.push(item);
    }

    const items = createElement({
      cls: `${CLS.card}__content section`,
      children: itemsMarkup,
    });
    return items;
  };

  const createTable = (data = []) => {
    const items = [];
    for (let i = 0; i < data.length; i++) {
      const { title, headers, rows } = data[i];
      const titles = [];
      for (let j = 0; j < title.length; j++) {
        const t = title[j];
        const p = createElement({ as: "p", content: t });
        titles.push(p);
      }
      const titleMarkup = createElement({
        as: "h3",
        cls: `${CLS.card}__title`,
        title,
        children: titles,
      });

      const headersMarkup = [];
      for (let j = 0; j < headers.length; j++) {
        const header = headers[j];
        const td = createElement({ as: "td", content: header });
        headersMarkup.push(td);
      }
      // const tdHeader = createElement({ as: "td", content: "STT" });
      const trHeader = createElement({
        as: "tr",
        children: [...headersMarkup],
      });
      const tHead = createElement({ as: "thead", children: trHeader });

      const trBodies = [];
      for (let j = 0; j < rows.length; j++) {
        const trBody = [];
        const tdFirst = createElement({ as: "td", content: j + 1 });
        const content = rows[j];
        for (let k = 0; k < content.length; k++) {
          const c = content[k];
          const td = createElement({ as: "td", content: c });
          trBody.push(td);
        }

        const trBodyMarkup = createElement({
          as: "tr",
          children: [tdFirst, ...trBody],
        });
        trBodies.push(trBodyMarkup);
      }

      const trBodiesMarkup = createElement({
        as: "tbody",
        children: trBodies,
      });
      const tableMarkup = createElement({
        as: "table",
        children: [tHead, trBodiesMarkup],
      });
      const cardSection = createElement({
        cls: `${CLS.card}__content p-0`,
        children: tableMarkup,
      });

      const itemMarkup = createElement({
        cls: `${CLS.card}`,
        children: [titleMarkup, cardSection],
      });
      items.push(itemMarkup);
    }
    const itemsMarkup = createElement({
      cls: `${CLS.card}__content section`,
      children: items,
    });
    return itemsMarkup;
  };

  const createModal = (title, bodyMarkup) => {
    const h3 = createElement({
      as: "h3",
      title: title,
      content: title,
    });
    const titleMarkup = createElement({
      cls: `${CLS.card}__title`,
      children: [h3, closeBtn],
    });

    // const content = createElement({
    //   cls: `${CLS.card}__content section`,
    //   // children: bodyMarkup,
    // });

    const wrapContent = createElement({
      cls: `${CLS.modal}__content`,
      children: bodyMarkup,
    });
    const card = createElement({
      cls: CLS.card,
      children: [titleMarkup, wrapContent],
    });
    const modalInner = createElement({
      cls: `${CLS.modal}__inner`,
      children: card,
    });
    const dialog = createElement({ role: "dialog", children: modalInner });
    const modalWrap = createElement({
      cls: `${CLS.modal}__wrap`,
      children: dialog,
    });
    const backdrop = createElement({ cls: "dg-backdrop" });
    handleClickBackdrop(backdrop);
    const modal = createElement({
      id: "modal",
      cls: CLS.modal,
      children: [modalWrap, backdrop],
    });
    document.body.append(modal);
    handleCloseModal(closeBtn);
  };

  // Handle actions
  const getModal = () => document.querySelector("#modal");
  const closeModal = () => {
    preventScroll(false);
    const modal = getModal();
    document.body.removeChild(modal);
  };

  // Close modal by click outside modal.
  const handleClickBackdrop = (node) => {
    if (!isNullable(node)) {
      node.addEventListener("click", () => {
        closeModal();
      });
    }
  };

  // Close modal by click "X" button.
  const handleCloseModal = (node) => {
    if (!isNullable(node)) {
      node.addEventListener("click", () => {
        closeModal();
      });
    }
  };

  // Close modal by key press "Escape" button.
  window.addEventListener("keydown", (e) => {
    if (getModal() && e.key === "Escape") {
      closeModal();
    }
  });

if (window.$ != null) {
  $(document).ready(function () {
    // Carousel
    $(".dg-insurance-package__content")
      .not(".slick-initialized")
      .slick({
        // normal options...
        infinite: true,
        // the magic
        responsive: [
          {
            breakpoint: 9999,
            settings: "unslick",
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToShow: 1,
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: "40px",
              autoplay: true,
              autoplaySpeed: 2000,
            }, // destroys slick
          },
        ],
      });
    $(".dg-healthCare-list")
      .not(".slick-initialized")
      .slick({
        // normal options...
        infinite: true,
        // the magic
        responsive: [
          {
            breakpoint: 9999,
            settings: "unslick",
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToShow: 1,
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: "30px",
              autoplay: true,
              autoplaySpeed: 2000,
            }, // destroys slick
          },
        ],
      });
  });
}

// Logic upload
const uploadContainer = document.getElementById('uploadContainer');
const fileInput = document.getElementById('fileInput');
const uploadLink = document.getElementById('uploadLink');
const uploadIcon = document.getElementById('uploadIcon');

// Khi click vào khu vực upload hoặc link, mở file input
uploadContainer?.addEventListener('click', () => fileInput.click());
uploadLink?.addEventListener('click', (event) => {
  event.preventDefault();
  fileInput.click();
});

// Xử lý khi người dùng chọn tệp qua input
fileInput?.addEventListener('change', (event) => handleFiles(event));

// Xử lý sự kiện kéo thả
uploadContainer?.addEventListener('dragover', (event) => {
  event.preventDefault();
  uploadContainer.classList.add('drag-over');
});

uploadContainer?.addEventListener('dragleave', () => {
  uploadContainer.classList.remove('drag-over');
});

uploadContainer?.addEventListener('drop', (event) => {
  event.preventDefault();
  uploadContainer.classList.remove('drag-over');
  handleFiles(event);
});

// Chọn các phần tử modal và nút đóng
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.close-icon');

// Sự kiện click vào modal để đóng khi click ngoài modal-content
if (modal) {
  modal.addEventListener('click', (event) => {
    // Kiểm tra nếu phần tử được click không phải là modal-content và không nằm bên trong modal-content
    if (!event.target.closest('.modal-content')) {
      closeModal_1();
    }
  });
}

// Sự kiện click vào icon close
if (closeIcon) {
  closeIcon.addEventListener('click', closeModal_1);
}

function checkScreenWidth() {
  if (window.innerWidth <= 640) {
    const uploadI = document.getElementsByClassName('upload-icon')
    if (uploadI && uploadI.style) {
      uploadI.style.display = 'none';
    }
  } else {
    const uploadI = document.getElementsByClassName('upload-icon')
    if (uploadI && uploadI.style) {
      uploadI.style.display = 'block';
    }
  }
}

// Logic input-label
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input, select");
  for (let input of inputs) {
    if (input.value) {
      input.classList.add("has-value");
    }
    input.addEventListener("blur", function (e) {
      const { value } = e.target;
      if (value) {
        this.classList.add("has-value");
      } else {
        this.classList.remove("has-value");
      }
    });
  }
});

// Check the screen width when the page loads
window.onload = checkScreenWidth;

// Check the screen width whenever the window is resized
window.onresize = checkScreenWidth;
