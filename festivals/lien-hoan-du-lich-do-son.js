// LỄ HỘI: Liên hoan Du lịch Đồ Sơn (khai trương mùa du lịch biển)
// ⚠️ Nội dung do AI soạn thảo — vui lòng kiểm tra lại trước khi công bố chính thức.
export default {
  id: "lien-hoan-du-lich-do-son",
  name: "Liên hoan Du lịch Đồ Sơn",
  place: "Bán đảo Đồ Sơn, Hải Phòng",
  timing: "Dịp 30/4 - 1/5 dương lịch hằng năm",
  coords: { lat: 20.7215, lng: 106.7975 }, // đã tách khỏi toạ độ trùng với Chọi trâu Đồ Sơn (trước đây bị đẩy lệch ra biển do trùng điểm)
  photos: [
    "festivals/images/lien-hoan-du-lich-do-son/tải xuống.jfif",
    "festivals/images/lien-hoan-du-lich-do-son/tải xuống (1).jfif",
    "festivals/images/lien-hoan-du-lich-do-son/images.jfif"
  ],

  narration: {
    intro: "Liên hoan Du lịch Đồ Sơn là sự kiện khai trương mùa du lịch biển hằng năm tại Đồ Sơn, kết hợp các hoạt động văn hoá, nghệ thuật, thể thao biển sôi động.",
    points: [
      "Sự kiện thường tổ chức vào dịp nghỉ lễ 30/4 - 1/5, mở đầu cho mùa du lịch biển của thành phố.",
      "Chương trình gồm lễ khai mạc, biểu diễn nghệ thuật, các trò chơi, thể thao bãi biển thu hút đông đảo du khách.",
      "Đồ Sơn từ thời Pháp thuộc đã là khu nghỉ dưỡng nổi tiếng nhờ khí hậu mát mẻ, đồi thông, bãi biển đẹp.",
      "Đây là dịp quảng bá tiềm năng du lịch biển của Đồ Sơn nói riêng và Hải Phòng nói chung."
    ]
  },

  aiChat: [
    {
      ask: "Bạn có biết vì sao người Pháp lại chọn Đồ Sơn làm khu nghỉ dưỡng từ hơn 100 năm trước không?",
      options: [
        { label: "Chắc vì khí hậu mát mẻ, cảnh đẹp", reply: "Đúng vậy! Khí hậu mát mẻ, đồi thông xanh mát sát biển khiến Đồ Sơn trở thành điểm nghỉ dưỡng lý tưởng ngay từ thời Pháp thuộc, và đến nay vẫn giữ sức hút đó." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đồ Sơn có địa hình đồi thấp nối tiếp nhau sát biển, khí hậu mát mẻ hiếm có ở miền Bắc — người Pháp đã xây nhiều biệt thự nghỉ dưỡng tại đây từ đầu thế kỷ XX!" }
      ]
    },
    {
      ask: "Liên hoan Du lịch Đồ Sơn thường tổ chức vào dịp nào trong năm?",
      options: [
        { label: "Dịp 30/4 - 1/5 dương lịch", reply: "Chính xác! Sự kiện thường tổ chức vào dịp nghỉ lễ 30/4 - 1/5, mở đầu cho mùa du lịch biển của thành phố." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là dịp nghỉ lễ 30/4 - 1/5 — thời điểm lý tưởng để khai trương mùa du lịch biển sôi động!" }
      ]
    },
    {
      ask: "Chương trình Liên hoan Du lịch Đồ Sơn thường có những hoạt động gì?",
      options: [
        { label: "Lễ khai mạc, biểu diễn nghệ thuật, thể thao bãi biển", reply: "Đúng vậy! Chương trình gồm lễ khai mạc, biểu diễn nghệ thuật, các trò chơi, thể thao bãi biển thu hút đông đảo du khách." },
        { label: "Chưa biết, kể thêm đi!", reply: "Từ lễ khai mạc hoành tráng đến các trò chơi, thể thao bãi biển — chương trình rất đa dạng và hấp dẫn!" }
      ]
    },
    {
      ask: "Liên hoan Du lịch Đồ Sơn mở đầu cho điều gì?",
      options: [
        { label: "Mùa du lịch biển của thành phố", reply: "Chính xác! Đây là sự kiện khai trương mùa du lịch biển hằng năm tại Đồ Sơn, mở đầu cho một mùa hè sôi động." },
        { label: "Chưa biết, kể thêm đi!", reply: "Sự kiện này chính thức mở đầu mùa du lịch biển của Đồ Sơn và Hải Phòng mỗi năm!" }
      ]
    },
    {
      ask: "Liên hoan Du lịch Đồ Sơn có ý nghĩa gì với ngành du lịch thành phố?",
      options: [
        { label: "Quảng bá tiềm năng du lịch biển", reply: "Đúng vậy! Đây là dịp quảng bá tiềm năng du lịch biển của Đồ Sơn nói riêng và Hải Phòng nói chung." },
        { label: "Chưa biết, kể thêm đi!", reply: "Sự kiện giúp quảng bá vẻ đẹp biển Đồ Sơn đến du khách trong nước và quốc tế, thúc đẩy phát triển du lịch!" }
      ]
    },
    {
      ask: "Nếu tham gia Liên hoan Du lịch Đồ Sơn, bạn muốn xem lễ khai mạc hay tham gia thể thao bãi biển?",
      options: [
        { label: "Lễ khai mạc", reply: "Lễ khai mạc thường rất hoành tráng với biểu diễn nghệ thuật đặc sắc, mở đầu ấn tượng cho mùa du lịch biển!" },
        { label: "Thể thao bãi biển", reply: "Các trò chơi, thể thao bãi biển rất sôi động, là dịp tuyệt vời để hoà mình vào không khí lễ hội mùa hè!" }
      ]
    },
    {
      ask: "Đồ Sơn được biết đến là khu nghỉ dưỡng từ thời kỳ nào?",
      options: [
        { label: "Thời Pháp thuộc", reply: "Chính xác! Đồ Sơn từ thời Pháp thuộc đã là khu nghỉ dưỡng nổi tiếng nhờ khí hậu mát mẻ, đồi thông, bãi biển đẹp." },
        { label: "Chưa biết, kể thêm đi!", reply: "Từ thời Pháp thuộc, Đồ Sơn đã nổi tiếng là khu nghỉ dưỡng lý tưởng nhờ cảnh quan và khí hậu tuyệt vời!" }
      ]
    },
    {
      ask: "Điều gì làm nên sức hút lâu dài của Đồ Sơn như một điểm du lịch?",
      options: [
        { label: "Khí hậu mát mẻ, đồi thông, bãi biển đẹp", reply: "Đúng vậy! Sự kết hợp giữa khí hậu mát mẻ, đồi thông và bãi biển đẹp đã tạo nên sức hút bền vững cho Đồ Sơn suốt hơn 100 năm qua." },
        { label: "Chưa biết, kể thêm đi!", reply: "Cảnh quan thiên nhiên tuyệt đẹp kết hợp khí hậu lý tưởng giúp Đồ Sơn luôn là điểm đến hấp dẫn qua nhiều thế hệ!" }
      ]
    },
    {
      ask: "Liên hoan Du lịch Đồ Sơn diễn ra tại địa điểm nào của Hải Phòng?",
      options: [
        { label: "Bán đảo Đồ Sơn", reply: "Chính xác! Liên hoan Du lịch Đồ Sơn diễn ra tại bán đảo Đồ Sơn, Hải Phòng — khu nghỉ dưỡng biển nổi tiếng lâu đời." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là bán đảo Đồ Sơn — nơi tổ chức sự kiện khai trương mùa du lịch biển sôi động mỗi năm!" }
      ]
    },
    {
      ask: "Bạn nghĩ Liên hoan Du lịch Đồ Sơn mang lại lợi ích gì cho địa phương?",
      options: [
        { label: "Thu hút du khách, thúc đẩy kinh tế du lịch", reply: "Rất đúng! Sự kiện thu hút đông đảo du khách, góp phần quảng bá hình ảnh và thúc đẩy kinh tế du lịch biển của Đồ Sơn, Hải Phòng." },
        { label: "Chưa nghĩ tới điều này", reply: "Liên hoan không chỉ quảng bá du lịch mà còn tạo không khí lễ hội sôi động, thu hút du khách đến với Đồ Sơn mỗi dịp hè về!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Liên hoan Du lịch Đồ Sơn thường tổ chức vào dịp nào?", options: ["30/4 - 1/5 dương lịch", "Tết Nguyên đán", "Trung thu", "Giáng sinh"], correctIndex: 0 },
    { type: "mcq", question: "Liên hoan Du lịch Đồ Sơn mở đầu cho điều gì?", options: ["Mùa du lịch biển", "Mùa thu hoạch lúa", "Năm học mới", "Mùa lễ hội chọi trâu"], correctIndex: 0 },
    { type: "mcq", question: "Đồ Sơn được biết đến là khu nghỉ dưỡng từ thời kỳ nào?", options: ["Thời Pháp thuộc", "Thời nhà Nguyễn", "Thời hiện đại (sau 2000)", "Thời Bắc thuộc"], correctIndex: 0 },
    { type: "mcq", question: "Hoạt động nào KHÔNG thường xuất hiện trong Liên hoan Du lịch Đồ Sơn?", options: ["Thi trượt tuyết", "Biểu diễn nghệ thuật", "Thể thao bãi biển", "Lễ khai mạc"], correctIndex: 0 },
    { type: "mcq", question: "Điều gì khiến Đồ Sơn trở thành điểm nghỉ dưỡng hấp dẫn?", options: ["Khí hậu mát mẻ, đồi thông, bãi biển đẹp", "Có nhiều nhà máy", "Gần sân bay quốc tế", "Có núi tuyết"], correctIndex: 0 }
  ]
};
