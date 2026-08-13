// ĐỊA DANH: Từ Lương Xâm
export default {
  id: "tu-luong-xam",
  name: "Từ Lương Xâm",
  category: "Lịch sử",
  place: "Quận Hải An, Hải Phòng",
  coords: { lat: 20.8362, lng: 106.7363 }, // đã đối chiếu lại theo OpenStreetMap

  photos: {
    history: [
      "locations/images/tu-luong-xam/history-1.jfif",
      "locations/images/tu-luong-xam/history-2.jfif",
      "locations/images/tu-luong-xam/history-3.jfif",
      "locations/images/tu-luong-xam/history-4.jfif"
    ],
    culture: []
  },

  narration: {
    history: {
      intro: "Từ Lương Xâm là di tích lịch sử gắn liền với Ngô Quyền, tương truyền là nơi ông đặt bản doanh, luyện tập quân sĩ trước khi ra quân đánh trận Bạch Đằng năm 938.",
      points: [
        "Theo truyền thuyết, Ngô Quyền đã chọn vùng đất Lương Xâm làm căn cứ chuẩn bị lực lượng nhờ vị trí thuận lợi, gần sông nước.",
        "Sau khi Ngô Quyền mất, người dân lập từ để thờ phụng, tưởng nhớ công lao đánh đuổi giặc ngoại xâm của ông.",
        "Từ Lương Xâm được xếp hạng Di tích lịch sử cấp quốc gia.",
        "Đây là một trong những di tích quan trọng nhất gắn liền với cuộc đời và sự nghiệp của Ngô Quyền tại Hải Phòng."
      ]
    },
    culture: {
      intro: "Từ Lương Xâm là nơi lưu giữ đậm nét tín ngưỡng thờ anh hùng dân tộc của người dân vùng cửa biển.",
      points: [
        "Lễ hội Từ Lương Xâm được tổ chức hằng năm với nhiều nghi lễ truyền thống trang trọng, tưởng nhớ công lao Ngô Quyền.",
        "Đây là dịp để người dân bày tỏ đạo lý \"uống nước nhớ nguồn\", giáo dục truyền thống yêu nước cho thế hệ trẻ.",
        "Từ Lương Xâm cùng với Đình Hàng Kênh tạo thành một quần thể di tích thờ Ngô Quyền đặc sắc tại Hải Phòng.",
        "Không gian từ cổ kính, yên bình là nơi người dân địa phương thường lui tới chiêm bái, tìm hiểu lịch sử."
      ]
    }
  },

  aiChat: [
    {
      ask: "Bạn có biết vì sao Từ Lương Xâm lại đặc biệt với Ngô Quyền không?",
      options: [
        { label: "Vì đây tương truyền là nơi ông luyện quân", reply: "Chính xác! Tương truyền Ngô Quyền từng đặt bản doanh, luyện quân tại đây trước khi ra sông Bạch Đằng đánh giặc." },
        { label: "Chưa biết, kể thêm đi!", reply: "Từ Lương Xâm tương truyền là nơi Ngô Quyền đặt bản doanh, chuẩn bị lực lượng cho trận Bạch Đằng lịch sử năm 938!" }
      ]
    },
    {
      ask: "Bạn có thấy tên gọi \"Từ\" nghe khác với \"Đền\" hay \"Đình\" không?",
      options: [
        { label: "Có, chắc cũng là nơi thờ tự", reply: "Đúng rồi! \"Từ\" cũng là một dạng nơi thờ tự linh thiêng, giống như đền hay miếu, dùng để tưởng nhớ các bậc anh hùng." },
        { label: "Không để ý, đây là gì vậy?", reply: "\"Từ\" là một cách gọi khác của nơi thờ tự, giống như đền/miếu — Từ Lương Xâm là nơi thờ và tưởng nhớ Ngô Quyền đó!" }
      ]
    },
    {
      ask: "Bạn có biết vì sao Ngô Quyền lại chọn vùng đất Lương Xâm làm căn cứ không?",
      options: [
        { label: "Vì vị trí thuận lợi, gần sông nước", reply: "Chính xác! Theo truyền thuyết, Ngô Quyền đã chọn vùng đất Lương Xâm làm căn cứ chuẩn bị lực lượng nhờ vị trí thuận lợi, gần sông nước." },
        { label: "Chưa biết, kể thêm đi!", reply: "Vị trí gần sông nước giúp việc chuẩn bị lực lượng thuỷ quân thuận lợi hơn trước khi ra trận Bạch Đằng!" }
      ]
    },
    {
      ask: "Sau khi Ngô Quyền mất, người dân đã làm gì để tưởng nhớ ông?",
      options: [
        { label: "Lập từ để thờ phụng", reply: "Đúng vậy! Sau khi Ngô Quyền mất, người dân lập từ để thờ phụng, tưởng nhớ công lao đánh đuổi giặc ngoại xâm của ông." },
        { label: "Chưa biết, kể thêm đi!", reply: "Người dân đã lập Từ Lương Xâm để thờ phụng, ghi nhớ công lao to lớn của Ngô Quyền trong việc đánh đuổi giặc ngoại xâm!" }
      ]
    },
    {
      ask: "Từ Lương Xâm được xếp hạng di tích cấp nào?",
      options: [
        { label: "Di tích lịch sử cấp quốc gia", reply: "Chính xác! Từ Lương Xâm được xếp hạng Di tích lịch sử cấp quốc gia, khẳng định giá trị lịch sử to lớn của nơi này." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là Di tích lịch sử cấp quốc gia — một trong những di tích quan trọng nhất gắn liền với Ngô Quyền tại Hải Phòng!" }
      ]
    },
    {
      ask: "Lễ hội Từ Lương Xâm được tổ chức với mục đích gì?",
      options: [
        { label: "Tưởng nhớ công lao Ngô Quyền", reply: "Đúng vậy! Lễ hội Từ Lương Xâm được tổ chức hằng năm với nhiều nghi lễ truyền thống trang trọng, tưởng nhớ công lao Ngô Quyền." },
        { label: "Chưa biết, kể thêm đi!", reply: "Lễ hội là dịp để người dân bày tỏ đạo lý \"uống nước nhớ nguồn\", giáo dục truyền thống yêu nước cho thế hệ trẻ!" }
      ]
    },
    {
      ask: "Từ Lương Xâm cùng di tích nào tạo thành quần thể thờ Ngô Quyền tại Hải Phòng?",
      options: [
        { label: "Đình Hàng Kênh", reply: "Chính xác! Từ Lương Xâm cùng với Đình Hàng Kênh tạo thành một quần thể di tích thờ Ngô Quyền đặc sắc tại Hải Phòng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đình Hàng Kênh cùng Từ Lương Xâm tạo nên quần thể di tích thờ Ngô Quyền rất đặc sắc — bạn nên ghé thăm cả hai nơi!" }
      ]
    },
    {
      ask: "Không gian tại Từ Lương Xâm mang đến cảm giác gì cho người ghé thăm?",
      options: [
        { label: "Cổ kính, yên bình", reply: "Đúng vậy! Không gian từ cổ kính, yên bình là nơi người dân địa phương thường lui tới chiêm bái, tìm hiểu lịch sử." },
        { label: "Chưa biết, kể thêm đi!", reply: "Không gian cổ kính, yên bình tại đây rất thích hợp để tìm hiểu lịch sử và chiêm bái, tưởng nhớ vị anh hùng dân tộc!" }
      ]
    },
    {
      ask: "Từ Lương Xâm nằm ở quận nào của Hải Phòng?",
      options: [
        { label: "Quận Hải An", reply: "Chính xác! Từ Lương Xâm toạ lạc tại quận Hải An, Hải Phòng — một trong những di tích lịch sử tiêu biểu của quận này." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là quận Hải An — nơi lưu giữ di tích lịch sử gắn liền với vị anh hùng dân tộc Ngô Quyền!" }
      ]
    },
    {
      ask: "Từ Lương Xâm được xếp hạng là di tích cấp nào?",
      options: [
        { label: "Di tích lịch sử cấp quốc gia", reply: "Chính xác! Từ Lương Xâm được xếp hạng Di tích lịch sử cấp quốc gia, một trong những di tích quan trọng nhất gắn với Ngô Quyền tại Hải Phòng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là Di tích lịch sử cấp quốc gia — ghi nhận giá trị lịch sử to lớn của nơi đặt bản doanh Ngô Quyền năm xưa!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Từ Lương Xâm tương truyền gắn liền với vị anh hùng dân tộc nào?", options: ["Ngô Quyền", "Lê Chân", "Trần Quốc Tuấn", "Phạm Ngũ Lão"], correctIndex: 0 },
    { type: "mcq", question: "Theo truyền thuyết, Từ Lương Xâm từng được Ngô Quyền dùng làm gì?", options: ["Nơi đặt bản doanh, luyện quân", "Nơi an táng", "Nơi họp chợ", "Nơi đúc vũ khí"], correctIndex: 0 },
    { type: "mcq", question: "Từ Lương Xâm nằm ở quận nào của Hải Phòng?", options: ["Hải An", "Lê Chân", "Hồng Bàng", "Kiến An"], correctIndex: 0 },
    { type: "mcq", question: "Từ Lương Xâm gắn liền với sự kiện lịch sử nào?", options: ["Trận Bạch Đằng năm 938", "Cuộc khởi nghĩa Hai Bà Trưng", "Trận Bạch Đằng năm 1288", "Kháng chiến chống Mỹ"], correctIndex: 0 },
    { type: "blur", question: "Hình mờ này gợi nhắc điều gì thường gắn với các di tích thờ Ngô Quyền như Từ Lương Xâm?", options: ["Đền/từ cổ kính linh thiêng", "Toà nhà cao tầng", "Cây cầu hiện đại", "Sân bay"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội tại Từ Lương Xâm thể hiện đạo lý truyền thống nào của dân tộc?", options: ["Uống nước nhớ nguồn", "Lá lành đùm lá rách", "Tôn sư trọng đạo", "Kính lão đắc thọ"], correctIndex: 0 }
  ]
};
