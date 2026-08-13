// ĐỊA DANH: Bến tàu không số K15
export default {
  id: "ben-k15",
  name: "Bến tàu không số K15",
  category: "Lịch sử",
  place: "Quận Đồ Sơn, Hải Phòng",
  coords: { lat: 20.7278, lng: 106.7930 },

  photos: {
    history: [
      "locations/images/ben-k15/history-1.jfif",
      "locations/images/ben-k15/history-2.jfif",
      "locations/images/ben-k15/history-3.jfif",
      "locations/images/ben-k15/history-4.jfif"
    ],
    culture: []
  },

  narration: {
    history: {
      intro: "Bến K15 tại Đồ Sơn là điểm xuất phát lịch sử của những chuyến tàu không số trong Đường Hồ Chí Minh trên biển, chi viện vũ khí cho chiến trường miền Nam thời kỳ kháng chiến chống Mỹ.",
      points: [
        "Từ năm 1961, hàng trăm chuyến tàu bí mật đã xuất phát từ bến K15, vượt qua sự phong toả gắt gao của địch.",
        "Tàu được nguỵ trang thành tàu đánh cá, không mang số hiệu cố định để giữ bí mật tuyệt đối cho tuyến đường.",
        "Nhiều chuyến tàu đã cập bến an toàn tại các tỉnh miền Nam, góp phần quan trọng vào thắng lợi của cuộc kháng chiến.",
        "Di tích bến K15 ngày nay được công nhận là Di tích lịch sử cấp quốc gia."
      ]
    },
    culture: {
      intro: "Bến K15 là biểu tượng cho ý chí quả cảm và tinh thần hy sinh thầm lặng của những người lính Hải quân trên con đường huyền thoại.",
      points: [
        "Khẩu hiệu \"tất cả vì miền Nam ruột thịt\" trở thành kim chỉ nam cho các thuỷ thủ đoàn sẵn sàng hy sinh để giữ bí mật con đường.",
        "Nhiều cựu chiến binh tàu không số vẫn thường trở lại thăm bến K15 để tưởng nhớ đồng đội đã hy sinh.",
        "Tượng đài và bia di tích tại đây là nơi giáo dục truyền thống cách mạng cho thế hệ trẻ.",
        "Câu chuyện về những con tàu không số đã trở thành đề tài cho nhiều bộ phim, sách báo ca ngợi tinh thần anh dũng của quân dân ta."
      ]
    }
  },

  aiChat: [
    {
      ask: "Vì sao những con tàu ở bến K15 lại được gọi là \"tàu không số\" nhỉ?",
      options: [
        { label: "Vì tàu không gắn số hiệu để giữ bí mật", reply: "Chính xác! Tàu cố tình không mang số hiệu cố định, thậm chí có thể mang cờ nước ngoài để nguỵ trang, tránh bị địch phát hiện." },
        { label: "Mình đoán vì tàu đi ban đêm", reply: "Tàu đúng là thường xuất phát bí mật, nhưng tên gọi \"không số\" là vì tàu không mang số hiệu cố định để giữ bí mật tuyệt đối." }
      ]
    },
    {
      ask: "Bạn nghĩ điều gì khó khăn nhất với các thuỷ thủ trên những chuyến tàu này?",
      options: [
        { label: "Phải sẵn sàng huỷ tàu nếu bị lộ", reply: "Đúng vậy — đó là mệnh lệnh thép: thà huỷ tàu chứ quyết không để lộ bí mật con đường trên biển." },
        { label: "Đi biển xa dài ngày rất nguy hiểm", reply: "Hành trình vượt biển trong bí mật, không có bản đồ dẫn đường công khai, đúng là vô cùng gian nan và can đảm!" }
      ]
    },
    {
      ask: "Bạn có biết những chuyến tàu không số bắt đầu xuất phát từ bến K15 từ năm nào không?",
      options: [
        { label: "Từ năm 1961", reply: "Chính xác! Từ năm 1961, hàng trăm chuyến tàu bí mật đã xuất phát từ bến K15, vượt qua sự phong toả gắt gao của địch." },
        { label: "Chưa biết, kể thêm đi!", reply: "Từ năm 1961, bến K15 đã trở thành điểm xuất phát của hàng trăm chuyến tàu không số chi viện cho miền Nam!" }
      ]
    },
    {
      ask: "Những con tàu không số được nguỵ trang như thế nào để qua mặt địch?",
      options: [
        { label: "Nguỵ trang thành tàu đánh cá", reply: "Đúng vậy! Tàu được nguỵ trang thành tàu đánh cá bình thường, không mang số hiệu cố định để giữ bí mật tuyệt đối cho tuyến đường." },
        { label: "Không biết, chắc là sơn màu ngụy trang", reply: "Tàu được cải trang thành tàu đánh cá dân sự, đôi khi treo cờ nước ngoài — một cách nguỵ trang rất tinh vi để tránh bị phát hiện!" }
      ]
    },
    {
      ask: "Khẩu hiệu nào đã trở thành kim chỉ nam cho các thuỷ thủ đoàn tàu không số?",
      options: [
        { label: "\"Tất cả vì miền Nam ruột thịt\"", reply: "Chính xác! Khẩu hiệu này thể hiện tinh thần sẵn sàng hy sinh của các thuỷ thủ đoàn để chi viện cho chiến trường miền Nam." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là khẩu hiệu \"tất cả vì miền Nam ruột thịt\" — kim chỉ nam cho ý chí quả cảm của những người lính Hải quân trên con đường huyền thoại!" }
      ]
    },
    {
      ask: "Ngày nay, ai thường trở lại thăm bến K15 để tưởng nhớ đồng đội?",
      options: [
        { label: "Các cựu chiến binh tàu không số", reply: "Đúng vậy! Nhiều cựu chiến binh tàu không số vẫn thường trở lại thăm bến K15 để tưởng nhớ những đồng đội đã hy sinh." },
        { label: "Chỉ có khách du lịch thôi", reply: "Không chỉ khách du lịch đâu — nhiều cựu chiến binh tàu không số vẫn quay lại đây để tưởng nhớ đồng đội, đầy xúc động!" }
      ]
    },
    {
      ask: "Bến K15 ngày nay có vai trò gì trong việc giáo dục thế hệ trẻ?",
      options: [
        { label: "Nơi giáo dục truyền thống cách mạng", reply: "Chính xác! Tượng đài và bia di tích tại bến K15 là nơi giáo dục truyền thống cách mạng quý báu cho thế hệ trẻ hôm nay." },
        { label: "Chưa nghĩ tới điều này", reply: "Bến K15 với tượng đài, bia di tích chính là nơi giáo dục truyền thống cách mạng, giúp thế hệ trẻ hiểu hơn về lịch sử hào hùng của dân tộc!" }
      ]
    },
    {
      ask: "Câu chuyện về những con tàu không số đã trở thành đề tài cho loại hình nghệ thuật nào?",
      options: [
        { label: "Phim ảnh và sách báo", reply: "Đúng vậy! Câu chuyện về những con tàu không số đã trở thành đề tài cho nhiều bộ phim, sách báo ca ngợi tinh thần anh dũng của quân dân ta." },
        { label: "Chưa biết, kể thêm đi!", reply: "Rất nhiều bộ phim và sách báo đã kể lại câu chuyện huyền thoại về tàu không số — một trang sử đầy tự hào của Hải quân Việt Nam!" }
      ]
    },
    {
      ask: "Bến K15 được công nhận là loại di tích gì?",
      options: [
        { label: "Di tích lịch sử cấp quốc gia", reply: "Chính xác! Bến K15 ngày nay được công nhận là Di tích lịch sử cấp quốc gia, ghi dấu một chặng đường lịch sử oanh liệt." },
        { label: "Chưa rõ, đoán là cấp thành phố", reply: "Thực ra bến K15 được công nhận ở cấp quốc gia đó — xứng đáng với những đóng góp to lớn trong cuộc kháng chiến chống Mỹ!" }
      ]
    },
    {
      ask: "Nhiều chuyến tàu không số đã cập bến an toàn ở đâu?",
      options: [
        { label: "Các tỉnh miền Nam", reply: "Chính xác! Nhiều chuyến tàu đã cập bến an toàn tại các tỉnh miền Nam, góp phần quan trọng vào thắng lợi của cuộc kháng chiến." },
        { label: "Chưa biết, kể thêm đi!", reply: "Những chuyến tàu vượt biển bí mật đã cập bến an toàn tại nhiều tỉnh miền Nam, chi viện vũ khí kịp thời cho chiến trường!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Bến K15 gắn liền với con đường vận tải nào trong kháng chiến chống Mỹ?", options: ["Đường Trường Sơn", "Đường Hồ Chí Minh trên biển", "Đường sắt Bắc - Nam", "Đường hàng không"], correctIndex: 1 },
    { type: "mcq", question: "Bến K15 nằm ở khu vực nào của Hải Phòng?", options: ["Đồ Sơn", "Cát Bà", "Kiến An", "Thuỷ Nguyên"], correctIndex: 0 },
    { type: "mcq", question: "Vì sao những con tàu xuất phát từ bến K15 được gọi là \"tàu không số\"?", options: ["Không mang số hiệu cố định để giữ bí mật", "Vì tàu chưa được đặt tên", "Vì tàu chạy không có thuỷ thủ đoàn", "Vì tàu không có động cơ"], correctIndex: 0 },
    { type: "mcq", question: "Hàng hoá chủ yếu được vận chuyển trên những chuyến tàu không số là gì?", options: ["Vũ khí chi viện cho miền Nam", "Lương thực cứu trợ", "Hàng hoá xuất khẩu", "Thư tín bưu điện"], correctIndex: 0 },
    { type: "blur", question: "Hình ảnh mờ này minh hoạ phương tiện nào gắn liền với bến K15?", options: ["Con tàu vượt biển", "Máy bay chiến đấu", "Xe tăng", "Tàu hoả"], correctIndex: 0 },
    { type: "mcq", question: "Bến K15 là di tích thuộc thời kỳ lịch sử nào của Việt Nam?", options: ["Kháng chiến chống Mỹ", "Kháng chiến chống Pháp", "Thời kỳ phong kiến", "Thời kỳ Bắc thuộc"], correctIndex: 0 }
  ]
};
