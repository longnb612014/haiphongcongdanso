// LỄ HỘI: Lễ hội truyền thống Núi Voi
// ⚠️ Ngày âm lịch cụ thể do AI soạn thảo — vui lòng kiểm tra lại trước khi công bố chính thức.
export default {
  id: "le-hoi-nui-voi",
  name: "Lễ hội truyền thống Núi Voi",
  place: "Khu di tích Núi Voi, huyện An Lão, Hải Phòng",
  timing: "Đầu xuân, tháng Giêng âm lịch hằng năm",
  coords: { lat: 20.8397, lng: 106.5678 }, // đã đối chiếu lại theo OpenStreetMap (toạ độ cũ lệch ~8km)
  photos: [
    "festivals/images/le-hoi-nui-voi/tải xuống.jfif",
    "festivals/images/le-hoi-nui-voi/tải xuống (1).jfif",
    "festivals/images/le-hoi-nui-voi/tải xuống (3).jfif"
  ],

  narration: {
    intro: "Lễ hội truyền thống Núi Voi được tổ chức vào dịp đầu xuân, gắn với khu di tích lịch sử — danh thắng Núi Voi, nơi lưu giữ nhiều dấu tích văn hoá, lịch sử của vùng An Lão.",
    points: [
      "Lễ hội gồm phần lễ dâng hương tưởng niệm và phần hội với nhiều trò chơi dân gian truyền thống.",
      "Núi Voi từng là căn cứ địa cách mạng quan trọng trong kháng chiến chống thực dân Pháp.",
      "Người dân địa phương lưu truyền nhiều truyền thuyết gắn với hình dáng và tên gọi \"Núi Voi\".",
      "Lễ hội là dịp sinh hoạt văn hoá cộng đồng quan trọng của người dân huyện An Lão mỗi dịp xuân về."
    ]
  },

  aiChat: [
    {
      ask: "Bạn có tò mò vì sao ngọn núi này lại có tên là \"Núi Voi\" không?",
      options: [
        { label: "Chắc vì hình dáng núi giống voi phục", reply: "Đúng vậy! Người xưa ví hình dáng ngọn núi như một chú voi khổng lồ nằm phục giữa đồng bằng, từ đó có tên gọi Núi Voi." },
        { label: "Chưa biết, kể thêm đi!", reply: "Núi Voi không chỉ có tên gọi thú vị mà còn từng là căn cứ địa cách mạng quan trọng trong kháng chiến chống Pháp đó!" }
      ]
    },
    {
      ask: "Lễ hội truyền thống Núi Voi gồm những phần nào?",
      options: [
        { label: "Phần lễ dâng hương và phần hội trò chơi dân gian", reply: "Chính xác! Lễ hội gồm phần lễ dâng hương tưởng niệm và phần hội với nhiều trò chơi dân gian truyền thống." },
        { label: "Chưa biết, kể thêm đi!", reply: "Phần lễ trang nghiêm kết hợp phần hội sôi động với các trò chơi dân gian tạo nên không khí lễ hội rất đặc sắc!" }
      ]
    },
    {
      ask: "Núi Voi từng có vai trò gì trong kháng chiến chống thực dân Pháp?",
      options: [
        { label: "Căn cứ địa cách mạng quan trọng", reply: "Đúng vậy! Núi Voi từng là căn cứ địa cách mạng quan trọng trong kháng chiến chống thực dân Pháp." },
        { label: "Chưa biết, kể thêm đi!", reply: "Địa hình hang động của Núi Voi từng là nơi che chở cho quân và dân ta trong kháng chiến chống Pháp!" }
      ]
    },
    {
      ask: "Người dân địa phương lưu truyền điều gì về Núi Voi?",
      options: [
        { label: "Nhiều truyền thuyết dân gian thú vị", reply: "Chính xác! Người dân địa phương lưu truyền nhiều truyền thuyết gắn với hình dáng và tên gọi \"Núi Voi\"." },
        { label: "Chưa biết, kể thêm đi!", reply: "Rất nhiều truyền thuyết dân gian thú vị được truyền từ đời này sang đời khác quanh ngọn núi này!" }
      ]
    },
    {
      ask: "Lễ hội Núi Voi có ý nghĩa gì với người dân huyện An Lão?",
      options: [
        { label: "Dịp sinh hoạt văn hoá cộng đồng quan trọng", reply: "Đúng vậy! Lễ hội là dịp sinh hoạt văn hoá cộng đồng quan trọng của người dân huyện An Lão mỗi dịp xuân về." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là dịp để cộng đồng An Lão cùng nhau sinh hoạt văn hoá, gắn kết mỗi độ xuân về!" }
      ]
    },
    {
      ask: "Lễ hội truyền thống Núi Voi thường tổ chức vào thời điểm nào trong năm?",
      options: [
        { label: "Đầu xuân, tháng Giêng âm lịch", reply: "Chính xác! Lễ hội được tổ chức vào dịp đầu xuân, tháng Giêng âm lịch, gắn với khu di tích lịch sử — danh thắng Núi Voi." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là dịp đầu xuân tháng Giêng âm lịch — thời điểm lý tưởng để du xuân, dâng hương tại khu di tích Núi Voi!" }
      ]
    },
    {
      ask: "Núi Voi lưu giữ những giá trị gì của vùng An Lão?",
      options: [
        { label: "Nhiều dấu tích văn hoá, lịch sử", reply: "Đúng vậy! Núi Voi là khu di tích lịch sử — danh thắng nơi lưu giữ nhiều dấu tích văn hoá, lịch sử của vùng An Lão." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là nơi lưu giữ nhiều dấu tích văn hoá, lịch sử quý giá — vừa là danh thắng vừa là di tích lịch sử của An Lão!" }
      ]
    },
    {
      ask: "Nếu tham gia lễ hội Núi Voi, bạn muốn dâng hương hay chơi trò chơi dân gian trước?",
      options: [
        { label: "Dâng hương tưởng niệm", reply: "Phần lễ dâng hương rất trang nghiêm, thể hiện lòng thành kính với các giá trị lịch sử của khu di tích Núi Voi!" },
        { label: "Chơi trò chơi dân gian", reply: "Phần hội với các trò chơi dân gian rất sôi động, phù hợp để mọi người cùng vui chơi, gắn kết đầu năm mới!" }
      ]
    },
    {
      ask: "Núi Voi từng giữ vai trò gì trong thời kỳ kháng chiến chống thực dân Pháp?",
      options: [
        { label: "Căn cứ địa cách mạng quan trọng", reply: "Chính xác! Núi Voi từng là căn cứ địa cách mạng quan trọng trong kháng chiến chống thực dân Pháp, mang nhiều dấu tích lịch sử oai hùng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây từng là căn cứ địa cách mạng trọng yếu, gắn liền với những trang sử kháng chiến chống Pháp đầy tự hào của vùng An Lão!" }
      ]
    },
    {
      ask: "Lễ hội truyền thống Núi Voi diễn ra tại huyện nào của Hải Phòng?",
      options: [
        { label: "Huyện An Lão", reply: "Chính xác! Lễ hội được tổ chức tại khu di tích Núi Voi, huyện An Lão, Hải Phòng — nơi lưu giữ nhiều dấu tích văn hoá, lịch sử." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là huyện An Lão — nơi có khu di tích, danh thắng Núi Voi nổi tiếng với lễ hội đầu xuân đầy ý nghĩa!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Lễ hội truyền thống Núi Voi được tổ chức vào dịp nào?", options: ["Đầu xuân, tháng Giêng âm lịch", "Mùng 9 tháng 8 âm lịch", "Rằm tháng 7", "Tháng 5 dương lịch"], correctIndex: 0 },
    { type: "mcq", question: "Núi Voi thuộc huyện nào của Hải Phòng?", options: ["An Lão", "Vĩnh Bảo", "Tiên Lãng", "Thuỷ Nguyên"], correctIndex: 0 },
    { type: "mcq", question: "Núi Voi từng có vai trò gì trong kháng chiến chống Pháp?", options: ["Căn cứ địa cách mạng", "Nơi ký hiệp định", "Sân bay quân sự", "Bến cảng tiếp tế"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Núi Voi gồm những phần nào?", options: ["Phần lễ dâng hương và phần hội trò chơi dân gian", "Chỉ có phần lễ", "Chỉ có phần hội", "Diễu binh"], correctIndex: 0 },
    { type: "mcq", question: "Tên gọi \"Núi Voi\" gắn với điều gì theo truyền thuyết dân gian?", options: ["Hình dáng núi giống voi phục", "Nơi nuôi voi chiến", "Tên một vị tướng", "Một trận đánh với voi"], correctIndex: 0 }
  ]
};
