// ĐỊA DANH: Cửa sông Bạch Đằng
// Đây là 1 file dữ liệu độc lập — có thể copy file này, đổi nội dung để thêm
// địa danh mới mà không cần sửa bất kỳ file .js nào khác (xem locations/README.md).
export default {
  id: "bach-dang",
  name: "Cửa sông Bạch Đằng",
  category: "Lịch sử",
  place: "Huyện Thuỷ Nguyên, Hải Phòng",
  coords: { lat: 20.9637, lng: 106.7643 }, // đã đối chiếu lại theo OpenStreetMap (Khu di tích Bạch Đằng Giang)

  // Ảnh thật lấy từ thư mục images/<id>/ (tối đa 5 ảnh mỗi phần Lịch sử/Văn
  // hoá). Phần nào để mảng rỗng sẽ tự mượn tạm ảnh của phần kia; nếu cả hai
  // đều rỗng thì dùng hình minh hoạ SVG dự phòng trong ICONS (script.js).
  photos: {
    history: [
      "locations/images/bach-dang/history-1.jfif",
      "locations/images/bach-dang/history-2.jfif",
      "locations/images/bach-dang/history-3.jfif",
      "locations/images/bach-dang/history-4.jfif"
    ],
    culture: ["locations/images/bach-dang/culture-1.jfif"]
  },

  narration: {
    history: {
      intro: "Sông Bạch Đằng là một trong những dòng sông đi vào lịch sử dân tộc bậc nhất, nơi ba lần quân và dân ta đánh tan quân xâm lược phương Bắc chỉ trên cùng một khúc sông.",
      points: [
        "Năm 938: Ngô Quyền chỉ huy quân dân ta đánh tan quân Nam Hán, chấm dứt hơn 1.000 năm Bắc thuộc, mở ra thời kỳ độc lập tự chủ lâu dài cho dân tộc.",
        "Năm 981: Lê Hoàn tiếp tục dùng kế cắm cọc gỗ đánh bại quân Tống xâm lược.",
        "Năm 1288: Hưng Đạo Vương Trần Quốc Tuấn chỉ huy quân dân nhà Trần đại thắng quân Nguyên Mông, bắt sống tướng giặc Ô Mã Nhi.",
        "Cả ba trận đánh đều lợi dụng quy luật lên xuống của thuỷ triều kết hợp bãi cọc gỗ cắm ngầm dưới lòng sông — một chiến thuật quân sự độc đáo của cha ông."
      ]
    },
    culture: {
      intro: "Từ những chiến công lừng lẫy, sông Bạch Đằng trở thành biểu tượng thiêng liêng trong tâm thức người Việt, gắn liền với tinh thần thượng võ và ý chí bất khuất chống ngoại xâm.",
      points: [
        "Người dân lập nhiều đền, miếu thờ các vị anh hùng dân tộc dọc hai bên bờ sông để tưởng nhớ công lao giữ nước.",
        "Hằng năm, các lễ hội tưởng niệm chiến thắng Bạch Đằng được tổ chức trang trọng, thu hút đông đảo người dân và du khách.",
        "Chiến thắng Bạch Đằng còn là nguồn cảm hứng cho nhiều tác phẩm thơ văn, nổi tiếng nhất là bài phú \"Bạch Đằng giang phú\" của Trương Hán Siêu.",
        "Tinh thần \"giặc đến nhà, đàn bà cũng đánh\" từ những trận thuỷ chiến này vẫn được nhắc nhớ như một bài học về lòng yêu nước."
      ]
    }
  },

  aiChat: [
    {
      ask: "Bạn có biết vì sao ông cha ta lại chọn đúng khúc sông này để đánh giặc tới 3 lần không?",
      options: [
        { label: "Vì sông hẹp, dễ mai phục", reply: "Đúng vậy! Địa hình sông Bạch Đằng có bãi triều lên xuống mạnh, rất thuận lợi để cắm cọc và mai phục thuyền giặc." },
        { label: "Mình chưa biết, kể thêm đi!", reply: "Sông Bạch Đằng có thuỷ triều lên xuống chênh lệch lớn — ông cha ta lợi dụng điều đó để cắm cọc gỗ, chờ nước rút thì cọc nhô lên đâm thủng thuyền giặc." }
      ]
    },
    {
      ask: "Nếu được chọn, bạn muốn xem bãi cọc gỗ thật hay nghe kể chuyện trận đánh trước?",
      options: [
        { label: "Xem bãi cọc gỗ", reply: "Bãi cọc hiện được trưng bày mô phỏng tại khu di tích Bạch Đằng Giang, Thuỷ Nguyên — rất đáng để ghé thăm cùng gia đình đó!" },
        { label: "Nghe kể chuyện trận đánh", reply: "Ba trận đánh cách nhau hàng trăm năm nhưng đều dùng chung một \"vũ khí bí mật\": thuỷ triều và cọc gỗ. Tài tình phải không nào?" }
      ]
    },
    {
      ask: "Bạn có biết trận đánh năm 938 đã chấm dứt điều gì trong lịch sử dân tộc không?",
      options: [
        { label: "Chấm dứt hơn 1.000 năm Bắc thuộc", reply: "Chính xác! Chiến thắng của Ngô Quyền năm 938 đã kết thúc hơn một nghìn năm Bắc thuộc, mở ra thời kỳ độc lập tự chủ lâu dài cho dân tộc ta." },
        { label: "Không chắc, đoán đại thôi", reply: "Đây là một cột mốc cực kỳ quan trọng đó — trận Bạch Đằng 938 chấm dứt hơn 1.000 năm Bắc thuộc, mở đầu kỷ nguyên độc lập của nước ta!" }
      ]
    },
    {
      ask: "981, Lê Hoàn đã dùng chiến thuật nào để đánh bại quân Tống trên sông này?",
      options: [
        { label: "Vẫn là cắm cọc gỗ lợi dụng thuỷ triều", reply: "Đúng vậy! Lê Hoàn tiếp tục kế sách của Ngô Quyền, cắm cọc gỗ trên sông Bạch Đằng để đánh bại quân Tống xâm lược." },
        { label: "Chắc là chiến thuật khác", reply: "Không đâu, Lê Hoàn vẫn dùng đúng kế cắm cọc gỗ như Ngô Quyền — chứng tỏ đây là một chiến thuật cực kỳ hiệu quả trên khúc sông này!" }
      ]
    },
    {
      ask: "Bạn có biết ai là vị tướng giặc bị bắt sống trong trận Bạch Đằng năm 1288 không?",
      options: [
        { label: "Ô Mã Nhi", reply: "Chính xác! Hưng Đạo Vương Trần Quốc Tuấn đã chỉ huy quân dân nhà Trần bắt sống tướng giặc Ô Mã Nhi trong trận đại thắng năm 1288." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là tướng Ô Mã Nhi của quân Nguyên Mông — bị bắt sống ngay trên sông Bạch Đằng, một chiến công vang dội của nhà Trần!" }
      ]
    },
    {
      ask: "Bạn có biết bài phú nổi tiếng nào lấy cảm hứng từ chiến thắng Bạch Đằng không?",
      options: [
        { label: "Bạch Đằng giang phú", reply: "Đúng rồi! \"Bạch Đằng giang phú\" của Trương Hán Siêu là áng văn nổi tiếng ca ngợi chiến thắng lịch sử trên dòng sông này." },
        { label: "Mình chưa nghe bao giờ", reply: "Đó là \"Bạch Đằng giang phú\" của Trương Hán Siêu — một trong những áng văn hào hùng nhất viết về chiến thắng Bạch Đằng đó!" }
      ]
    },
    {
      ask: "Câu nói \"giặc đến nhà, đàn bà cũng đánh\" gắn với tinh thần gì của các trận thuỷ chiến Bạch Đằng?",
      options: [
        { label: "Tinh thần toàn dân đánh giặc", reply: "Đúng vậy! Câu nói này thể hiện tinh thần đoàn kết, toàn dân đánh giặc — bài học về lòng yêu nước được lưu truyền từ những trận thuỷ chiến Bạch Đằng." },
        { label: "Nghe quen nhưng chưa rõ lắm", reply: "Đây là bài học về ý chí bất khuất chống ngoại xâm — ai cũng có thể góp sức đánh giặc, giữ nước, như tinh thần của quân dân ta trên sông Bạch Đằng!" }
      ]
    },
    {
      ask: "Bạn có biết người dân đã làm gì để tưởng nhớ các anh hùng chiến thắng Bạch Đằng không?",
      options: [
        { label: "Lập đền, miếu thờ dọc hai bờ sông", reply: "Chính xác! Người dân lập nhiều đền, miếu thờ các vị anh hùng dân tộc dọc hai bên bờ sông Bạch Đằng để tưởng nhớ công lao giữ nước." },
        { label: "Chưa biết, kể thêm đi!", reply: "Dọc hai bờ sông Bạch Đằng có nhiều đền, miếu thờ các anh hùng dân tộc, và hằng năm còn có lễ hội tưởng niệm chiến thắng rất trang trọng!" }
      ]
    },
    {
      ask: "Sông Bạch Đằng hiện nay là ranh giới tự nhiên giữa Hải Phòng và tỉnh/thành nào?",
      options: [
        { label: "Quảng Ninh", reply: "Đúng vậy! Sông Bạch Đằng là ranh giới tự nhiên giữa Hải Phòng và tỉnh Quảng Ninh ngày nay." },
        { label: "Không chắc, đoán thử", reply: "Đó là tỉnh Quảng Ninh đó — sông Bạch Đằng chảy giữa hai địa phương, vừa là ranh giới vừa là chứng nhân lịch sử chung của cả hai vùng đất!" }
      ]
    },
    {
      ask: "Bạn thấy điều gì thú vị nhất khi 3 trận đánh cách nhau hàng trăm năm nhưng cùng diễn ra trên 1 khúc sông?",
      options: [
        { label: "Ông cha ta luôn biết tận dụng địa thế", reply: "Chính xác! Dù cách nhau hàng trăm năm, các thế hệ cha ông đều nhận ra và tận dụng lợi thế địa hình, thuỷ triều của khúc sông này để đánh bại quân xâm lược." },
        { label: "Thấy rất tự hào về lịch sử dân tộc", reply: "Đúng là tự hào thật! Ba lần chiến thắng trên cùng một khúc sông cho thấy trí tuệ quân sự và tinh thần bất khuất được truyền nối qua nhiều thế hệ người Việt." }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Ai là người chỉ huy trận thuỷ chiến trên sông Bạch Đằng năm 938?", options: ["Ngô Quyền", "Lê Chân", "Trần Hưng Đạo", "Lý Thường Kiệt"], correctIndex: 0 },
    { type: "mcq", question: "Chiến thuật nào được dùng trong cả ba trận thuỷ chiến trên sông Bạch Đằng?", options: ["Cắm cọc gỗ lợi dụng thuỷ triều", "Đào hào phòng thủ", "Dùng voi chiến", "Xây thành luỹ"], correctIndex: 0 },
    { type: "mcq", question: "Quân xâm lược nào bị đánh bại trên sông Bạch Đằng năm 1288?", options: ["Quân Thanh", "Quân Nguyên Mông", "Quân Minh", "Quân Xiêm"], correctIndex: 1 },
    { type: "mcq", question: "Sông Bạch Đằng là ranh giới tự nhiên giữa Hải Phòng và tỉnh/thành phố nào?", options: ["Quảng Ninh", "Thái Bình", "Nam Định", "Bắc Ninh"], correctIndex: 0 },
    { type: "blur", question: "Đây là hình ảnh minh hoạ điều gì gắn liền với chiến thắng Bạch Đằng?", options: ["Bãi cọc gỗ trên sông", "Thành cổ", "Chùa tháp", "Cầu treo"], correctIndex: 0 },
    { type: "timeline", events: [
      { year: 938, text: "Ngô Quyền đánh tan quân Nam Hán" },
      { year: 981, text: "Lê Hoàn đại thắng quân Tống" },
      { year: 1288, text: "Trần Hưng Đạo đại thắng quân Nguyên Mông" }
    ] }
  ]
};
