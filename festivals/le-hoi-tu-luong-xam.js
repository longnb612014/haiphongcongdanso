// LỄ HỘI: Lễ hội Từ Lương Xâm (thờ Ngô Quyền)
// ⚠️ Ngày âm lịch cụ thể do AI soạn thảo — vui lòng kiểm tra lại trước khi công bố chính thức.
export default {
  id: "le-hoi-tu-luong-xam",
  name: "Lễ hội Từ Lương Xâm",
  place: "Từ Lương Xâm, quận Hải An, Hải Phòng",
  timing: "6-8 tháng Giêng âm lịch hằng năm",
  coords: { lat: 20.8362, lng: 106.7363 }, // đã đối chiếu lại theo OpenStreetMap
  photos: [
    "festivals/images/le-hoi-tu-luong-xam/tải xuống.jfif",
    "festivals/images/le-hoi-tu-luong-xam/tải xuống (1).jfif",
    "festivals/images/le-hoi-tu-luong-xam/tải xuống (2).jfif",
    "festivals/images/le-hoi-tu-luong-xam/tải xuống (3).jfif"
  ],

  narration: {
    intro: "Lễ hội Từ Lương Xâm tưởng nhớ công lao Đức Vương Ngô Quyền — người làm nên chiến thắng Bạch Đằng lịch sử năm 938, chấm dứt hơn 1.000 năm Bắc thuộc.",
    points: [
      "Từ Lương Xâm tương truyền là nơi Ngô Quyền từng đặt bản doanh, luyện quân trước khi ra sông Bạch Đằng đánh giặc.",
      "Lễ hội có nhiều nghi lễ truyền thống trang trọng: rước kiệu, tế lễ, dâng hương tưởng niệm.",
      "Đây là dịp để người dân giáo dục truyền thống yêu nước, đạo lý \"uống nước nhớ nguồn\" cho thế hệ trẻ.",
      "Từ Lương Xâm cùng Đình Hàng Kênh tạo thành một quần thể lễ hội thờ Ngô Quyền đặc sắc tại Hải Phòng."
    ]
  },

  aiChat: [
    {
      ask: "Bạn có biết Từ Lương Xâm và Đình Hàng Kênh có điểm gì chung không?",
      options: [
        { label: "Cả hai đều thờ Ngô Quyền", reply: "Chính xác! Hai di tích này cùng thờ Đức Vương Ngô Quyền, tạo thành một quần thể lễ hội đặc sắc tưởng nhớ vị anh hùng làm nên chiến thắng Bạch Đằng năm 938." },
        { label: "Chưa để ý, kể thêm đi!", reply: "Từ Lương Xâm và Đình Hàng Kênh đều thờ Ngô Quyền — người anh hùng đánh tan quân Nam Hán trên sông Bạch Đằng, chấm dứt hơn 1.000 năm Bắc thuộc!" }
      ]
    },
    {
      ask: "Tương truyền Từ Lương Xâm từng được Ngô Quyền dùng làm gì?",
      options: [
        { label: "Đặt bản doanh, luyện quân", reply: "Chính xác! Từ Lương Xâm tương truyền là nơi Ngô Quyền từng đặt bản doanh, luyện quân trước khi ra sông Bạch Đằng đánh giặc." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây tương truyền là nơi Ngô Quyền chuẩn bị lực lượng trước khi làm nên chiến thắng Bạch Đằng lịch sử năm 938!" }
      ]
    },
    {
      ask: "Lễ hội Từ Lương Xâm có những nghi lễ truyền thống nào?",
      options: [
        { label: "Rước kiệu, tế lễ, dâng hương", reply: "Đúng vậy! Lễ hội có nhiều nghi lễ truyền thống trang trọng: rước kiệu, tế lễ, dâng hương tưởng niệm." },
        { label: "Chưa biết, kể thêm đi!", reply: "Rước kiệu, tế lễ và dâng hương tưởng niệm là những nghi lễ trang trọng nhất trong lễ hội Từ Lương Xâm!" }
      ]
    },
    {
      ask: "Lễ hội Từ Lương Xâm có ý nghĩa giáo dục gì cho thế hệ trẻ?",
      options: [
        { label: "Giáo dục truyền thống yêu nước", reply: "Chính xác! Đây là dịp để người dân giáo dục truyền thống yêu nước, đạo lý \"uống nước nhớ nguồn\" cho thế hệ trẻ." },
        { label: "Chưa biết, kể thêm đi!", reply: "Lễ hội là dịp quý báu để giáo dục thế hệ trẻ về truyền thống yêu nước và đạo lý \"uống nước nhớ nguồn\"!" }
      ]
    },
    {
      ask: "Lễ hội Từ Lương Xâm tưởng nhớ chiến thắng lịch sử nào?",
      options: [
        { label: "Chiến thắng Bạch Đằng năm 938", reply: "Đúng vậy! Lễ hội tưởng nhớ công lao Đức Vương Ngô Quyền — người làm nên chiến thắng Bạch Đằng lịch sử năm 938, chấm dứt hơn 1.000 năm Bắc thuộc." },
        { label: "Chưa biết, kể thêm đi!", reply: "Chiến thắng Bạch Đằng năm 938 là cột mốc lịch sử được lễ hội Từ Lương Xâm tưởng nhớ hằng năm!" }
      ]
    },
    {
      ask: "Lễ hội Từ Lương Xâm diễn ra vào khoảng thời gian nào trong năm?",
      options: [
        { label: "6-8 tháng Giêng âm lịch", reply: "Chính xác! Lễ hội diễn ra từ mùng 6 đến mùng 8 tháng Giêng âm lịch hằng năm, ngay trong không khí đầu xuân." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là 6-8 tháng Giêng âm lịch — một trong những lễ hội mở đầu năm mới ở quận Hải An!" }
      ]
    },
    {
      ask: "Nếu ghé thăm lễ hội Từ Lương Xâm, bạn muốn tìm hiểu điều gì nhất?",
      options: [
        { label: "Câu chuyện Ngô Quyền luyện quân tại đây", reply: "Rất thú vị! Tương truyền đây từng là nơi Ngô Quyền đặt bản doanh, chuẩn bị lực lượng cho trận đánh làm nên lịch sử trên sông Bạch Đằng." },
        { label: "Các nghi lễ rước kiệu, tế lễ", reply: "Nghi lễ rước kiệu, tế lễ tại Từ Lương Xâm rất trang trọng, tái hiện không khí tôn kính dành cho Đức Vương Ngô Quyền!" }
      ]
    },
    {
      ask: "Từ Lương Xâm toạ lạc ở quận nào của Hải Phòng?",
      options: [
        { label: "Quận Hải An", reply: "Chính xác! Từ Lương Xâm toạ lạc tại quận Hải An, Hải Phòng — nơi lưu giữ di tích gắn liền với Ngô Quyền." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là quận Hải An — nơi diễn ra lễ hội tưởng nhớ vị anh hùng dân tộc Ngô Quyền hằng năm!" }
      ]
    },
    {
      ask: "Bạn nghĩ vì sao Ngô Quyền được thờ phụng tại nhiều di tích khác nhau ở Hải Phòng?",
      options: [
        { label: "Vì công lao to lớn với dân tộc", reply: "Rất đúng! Chiến thắng Bạch Đằng năm 938 của Ngô Quyền có ý nghĩa lịch sử vô cùng to lớn, nên được nhiều nơi thờ phụng, tưởng nhớ." },
        { label: "Chưa nghĩ tới điều này", reply: "Công lao chấm dứt hơn 1.000 năm Bắc thuộc khiến Ngô Quyền được tôn kính, thờ phụng tại nhiều di tích trên khắp Hải Phòng!" }
      ]
    },
    {
      ask: "Lễ hội Từ Lương Xâm tưởng nhớ vị anh hùng dân tộc nào?",
      options: [
        { label: "Ngô Quyền", reply: "Chính xác! Lễ hội tưởng nhớ công lao Đức Vương Ngô Quyền — người làm nên chiến thắng Bạch Đằng lịch sử năm 938." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là Ngô Quyền — vị anh hùng đã chấm dứt hơn 1.000 năm Bắc thuộc cho dân tộc ta!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Lễ hội Từ Lương Xâm tưởng nhớ vị anh hùng dân tộc nào?", options: ["Ngô Quyền", "Lê Chân", "Trần Quốc Tuấn", "Phạm Ngũ Lão"], correctIndex: 0 },
    { type: "mcq", question: "Từ Lương Xâm nằm ở quận nào của Hải Phòng?", options: ["Hải An", "Lê Chân", "Hồng Bàng", "Kiến An"], correctIndex: 0 },
    { type: "mcq", question: "Theo truyền thuyết, Ngô Quyền từng dùng Từ Lương Xâm để làm gì?", options: ["Đặt bản doanh, luyện quân", "Nơi an táng", "Nơi họp chợ", "Nơi đúc vũ khí"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Từ Lương Xâm gắn với chiến thắng lịch sử nào?", options: ["Chiến thắng Bạch Đằng năm 938", "Khởi nghĩa Hai Bà Trưng", "Chiến thắng Bạch Đằng năm 1288", "Kháng chiến chống Mỹ"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Từ Lương Xâm cùng với di tích nào tạo thành quần thể thờ Ngô Quyền?", options: ["Đình Hàng Kênh", "Đền Nghè", "Chùa Dư Hàng", "Đình Dư Hàng"], correctIndex: 0 }
  ]
};
