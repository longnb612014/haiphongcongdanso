// LỄ HỘI: Lễ hội Minh Thề
// ⚠️ Nội dung do AI soạn thảo — vui lòng kiểm tra lại trước khi công bố chính thức
// (đặc biệt là toạ độ và ngày âm lịch chính xác của làng Hoà Liễu).
export default {
  id: "minh-the",
  name: "Lễ hội Minh Thề",
  place: "Làng Hoà Liễu, xã Thuận Thiên, huyện Kiến Thuỵ",
  timing: "14 tháng Giêng âm lịch hằng năm",
  coords: { lat: 20.7550, lng: 106.6950 },
  photos: [
    "festivals/images/minh-the/tải xuống.jfif",
    "festivals/images/minh-the/tải xuống (1).jfif",
    "festivals/images/minh-the/tải xuống (2).jfif"
  ],

  narration: {
    intro: "Lễ hội Minh Thề là lễ hội truyền thống độc đáo, nổi tiếng với nghi thức thề \"không tham nhũng, không lấy của công làm của tư\" — được xem là một trong những lễ hội chống tham nhũng đầu tiên trong lịch sử Việt Nam.",
    points: [
      "Lễ hội gắn với đền — chùa Hoà Liễu, tương truyền có từ thời Mạc Thái Tổ Mạc Đăng Dung.",
      "Nghi thức trung tâm là lời thề của các chức sắc, người dân trước bàn thờ Thành hoàng, cam kết sống trung thực, liêm khiết.",
      "Ai vi phạm lời thề (tham ô, trộm cắp của công) sẽ bị thần linh trừng phạt theo quan niệm dân gian.",
      "Lễ hội mang giá trị giáo dục đạo đức sâu sắc, được nhiều nhà nghiên cứu văn hoá quan tâm."
    ]
  },

  aiChat: [
    {
      ask: "Bạn có nghĩ một lễ hội cổ lại có thể liên quan đến chuyện \"chống tham nhũng\" không?",
      options: [
        { label: "Nghe lạ quá, kể thêm đi!", reply: "Đúng là độc đáo! Tại lễ hội Minh Thề, các chức sắc và người dân đứng trước bàn thờ Thành hoàng, thề không tham ô, không lấy của công làm của tư — được xem là một trong những lễ hội \"chống tham nhũng\" cổ xưa nhất Việt Nam." },
        { label: "Có, mình từng nghe qua rồi", reply: "Chính xác! Đây là nét độc đáo hiếm có — một lễ hội dân gian mang tinh thần giáo dục liêm khiết rất hiện đại, dù đã có từ hàng trăm năm trước." }
      ]
    },
    {
      ask: "Lễ hội Minh Thề gắn liền với ngôi đền — chùa nào?",
      options: [
        { label: "Đền — chùa Hoà Liễu", reply: "Chính xác! Lễ hội gắn với đền — chùa Hoà Liễu, tương truyền có từ thời Mạc Thái Tổ Mạc Đăng Dung." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là đền — chùa Hoà Liễu, một địa điểm gắn liền với lịch sử lâu đời từ thời nhà Mạc!" }
      ]
    },
    {
      ask: "Nghi thức trung tâm của lễ hội Minh Thề là gì?",
      options: [
        { label: "Lời thề trước bàn thờ Thành hoàng", reply: "Đúng vậy! Nghi thức trung tâm là lời thề của các chức sắc, người dân trước bàn thờ Thành hoàng, cam kết sống trung thực, liêm khiết." },
        { label: "Chưa biết, kể thêm đi!", reply: "Các chức sắc và người dân cùng đứng trước bàn thờ Thành hoàng để thề nguyện sống trung thực, liêm khiết!" }
      ]
    },
    {
      ask: "Theo quan niệm dân gian, ai vi phạm lời thề Minh Thề sẽ gặp điều gì?",
      options: [
        { label: "Bị thần linh trừng phạt", reply: "Chính xác! Ai vi phạm lời thề (tham ô, trộm cắp của công) sẽ bị thần linh trừng phạt theo quan niệm dân gian." },
        { label: "Chưa biết, kể thêm đi!", reply: "Theo quan niệm dân gian, thần linh sẽ trừng phạt những ai vi phạm lời thề — một cách răn đe rất đặc biệt!" }
      ]
    },
    {
      ask: "Lễ hội Minh Thề mang giá trị gì được nhiều nhà nghiên cứu quan tâm?",
      options: [
        { label: "Giá trị giáo dục đạo đức sâu sắc", reply: "Đúng vậy! Lễ hội mang giá trị giáo dục đạo đức sâu sắc, được nhiều nhà nghiên cứu văn hoá quan tâm tìm hiểu." },
        { label: "Chưa biết, kể thêm đi!", reply: "Giá trị giáo dục đạo đức của lễ hội này rất đặc biệt, thu hút sự quan tâm của nhiều nhà nghiên cứu văn hoá!" }
      ]
    },
    {
      ask: "Lễ hội Minh Thề diễn ra vào ngày nào trong năm (âm lịch)?",
      options: [
        { label: "14 tháng Giêng", reply: "Chính xác! Lễ hội Minh Thề diễn ra vào ngày 14 tháng Giêng âm lịch hằng năm, ngay đầu năm mới." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là ngày 14 tháng Giêng âm lịch — một thời điểm ý nghĩa để mở đầu năm mới bằng lời thề sống trung thực!" }
      ]
    },
    {
      ask: "Bạn nghĩ vì sao lời thề Minh Thề vẫn còn ý nghĩa với xã hội hiện đại?",
      options: [
        { label: "Vì tinh thần liêm khiết luôn cần thiết", reply: "Rất đúng! Tinh thần sống trung thực, liêm khiết, không tham ô của công luôn là giá trị quan trọng ở bất kỳ thời đại nào." },
        { label: "Chưa nghĩ tới điều này", reply: "Lời thề Minh Thề nhắc nhở mọi người về đạo đức liêm khiết — một bài học vẫn còn nguyên giá trị trong xã hội hiện đại!" }
      ]
    },
    {
      ask: "Đền — chùa Hoà Liễu, nơi diễn ra lễ hội Minh Thề, có từ thời nào?",
      options: [
        { label: "Thời Mạc Thái Tổ Mạc Đăng Dung", reply: "Đúng vậy! Đền — chùa Hoà Liễu tương truyền có từ thời Mạc Thái Tổ Mạc Đăng Dung, mang giá trị lịch sử lâu đời." },
        { label: "Chưa biết, kể thêm đi!", reply: "Ngôi đền — chùa này tương truyền có từ thời nhà Mạc, gắn liền với lịch sử hàng trăm năm của vùng đất Kiến Thuỵ!" }
      ]
    },
    {
      ask: "Lễ hội Minh Thề được tổ chức tại địa phương nào của Hải Phòng?",
      options: [
        { label: "Làng Hoà Liễu, huyện Kiến Thuỵ", reply: "Chính xác! Lễ hội Minh Thề được tổ chức tại làng Hoà Liễu, xã Thuận Thiên, huyện Kiến Thuỵ." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là làng Hoà Liễu, huyện Kiến Thuỵ — nơi lưu giữ một trong những lễ hội độc đáo nhất Việt Nam!" }
      ]
    },
    {
      ask: "Lễ hội Minh Thề được xem là một trong những lễ hội như thế nào trong lịch sử Việt Nam?",
      options: [
        { label: "Một trong những lễ hội chống tham nhũng đầu tiên", reply: "Chính xác! Lễ hội Minh Thề được xem là một trong những lễ hội chống tham nhũng đầu tiên trong lịch sử Việt Nam." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là lễ hội độc đáo hiếm có, mang tinh thần giáo dục liêm khiết từ hàng trăm năm trước!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Lễ hội Minh Thề nổi tiếng với nghi thức nào?", options: ["Thề không tham nhũng, không lấy của công", "Chọi trâu", "Đua thuyền", "Rước kiệu"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Minh Thề được tổ chức ở đâu?", options: ["Làng Hoà Liễu, huyện Kiến Thuỵ", "Đồ Sơn", "Cát Bà", "Thuỷ Nguyên"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Minh Thề diễn ra vào ngày nào (âm lịch)?", options: ["14 tháng Giêng", "Mùng 9 tháng 8", "Rằm tháng 7", "Mùng 1 tháng 5"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Minh Thề mang ý nghĩa giáo dục nào?", options: ["Sống trung thực, liêm khiết", "Chăm chỉ lao động", "Tôn sư trọng đạo", "Uống nước nhớ nguồn"], correctIndex: 0 },
    { type: "mcq", question: "Theo quan niệm dân gian, ai vi phạm lời thề Minh Thề sẽ ra sao?", options: ["Bị thần linh trừng phạt", "Bị phạt tiền", "Không có hình phạt gì", "Bị đuổi khỏi làng"], correctIndex: 0 }
  ]
};
