// ĐỊA DANH: Núi Voi
export default {
  id: "nui-voi",
  name: "Núi Voi",
  category: "Địa lý",
  place: "Huyện An Lão, Hải Phòng",
  coords: { lat: 20.8397, lng: 106.5678 }, // đã đối chiếu lại theo OpenStreetMap (toạ độ cũ lệch ~8km)

  photos: {
    history: ["locations/images/nui-voi/history-2.jfif"],
    culture: []
  },

  narration: {
    history: {
      intro: "Núi Voi là quần thể núi đá vôi tại huyện An Lão, nơi các nhà khảo cổ từng phát hiện dấu tích cư trú của người tiền sử, đồng thời từng là căn cứ địa kháng chiến quan trọng.",
      points: [
        "Các nhà khảo cổ đã tìm thấy nhiều di vật thời tiền sử tại các hang động trong khu vực Núi Voi.",
        "Trong kháng chiến chống thực dân Pháp, Núi Voi là căn cứ địa cách mạng quan trọng của quân và dân Hải Phòng.",
        "Địa hình núi đá vôi với nhiều hang động tự nhiên tạo điều kiện thuận lợi cho việc ẩn náu, chiến đấu thời chiến tranh.",
        "Núi Voi đã được xếp hạng di tích lịch sử — danh thắng cấp quốc gia."
      ]
    },
    culture: {
      intro: "Tên gọi Núi Voi gắn liền với hình dáng ngọn núi được người xưa ví như dáng voi phục, tạo nên nhiều truyền thuyết dân gian thú vị.",
      points: [
        "Người dân địa phương lưu truyền nhiều câu chuyện, truyền thuyết gắn với hình dáng và tên gọi của ngọn núi.",
        "Núi Voi là điểm sinh hoạt văn hoá, lễ hội truyền thống của người dân huyện An Lão vào các dịp lễ trong năm.",
        "Cảnh quan núi non xen kẽ đồng ruộng tạo nên một bức tranh làng quê đặc trưng của vùng ngoại thành Hải Phòng.",
        "Nơi đây đang được đầu tư phát triển thành điểm du lịch sinh thái, lịch sử hấp dẫn du khách."
      ]
    }
  },

  aiChat: [
    {
      ask: "Bạn có đoán được vì sao ngọn núi này lại có tên là \"Núi Voi\" không?",
      options: [
        { label: "Chắc vì hình dáng núi giống con voi", reply: "Nhiều người cũng nghĩ vậy đó — hình dáng núi được ví như dáng voi phục, rất thú vị phải không nào!" },
        { label: "Chưa biết, kể thêm đi!", reply: "Tên gọi Núi Voi gắn với hình dáng núi được người xưa ví như một chú voi khổng lồ nằm phục giữa đồng bằng!" }
      ]
    },
    {
      ask: "Bạn muốn khám phá hang động hay tìm hiểu về căn cứ kháng chiến trước?",
      options: [
        { label: "Khám phá hang động", reply: "Núi Voi có nhiều hang động đá vôi tự nhiên rất đẹp, từng gắn liền với đời sống người tiền sử!" },
        { label: "Tìm hiểu căn cứ kháng chiến", reply: "Trong kháng chiến chống Pháp, Núi Voi từng là căn cứ địa quan trọng của quân và dân ta đó!" }
      ]
    },
    {
      ask: "Các nhà khảo cổ đã tìm thấy gì trong các hang động ở Núi Voi?",
      options: [
        { label: "Nhiều di vật thời tiền sử", reply: "Chính xác! Các nhà khảo cổ đã tìm thấy nhiều di vật thời tiền sử tại các hang động trong khu vực Núi Voi." },
        { label: "Chưa biết, kể thêm đi!", reply: "Những di vật thời tiền sử được tìm thấy tại đây cho thấy con người đã sinh sống ở khu vực Núi Voi từ rất lâu đời!" }
      ]
    },
    {
      ask: "Địa hình núi đá vôi của Núi Voi có lợi thế gì trong thời chiến tranh?",
      options: [
        { label: "Thuận lợi cho việc ẩn náu, chiến đấu", reply: "Đúng vậy! Địa hình núi đá vôi với nhiều hang động tự nhiên tạo điều kiện thuận lợi cho việc ẩn náu, chiến đấu thời chiến tranh." },
        { label: "Chưa biết, kể thêm đi!", reply: "Hệ thống hang động tự nhiên chằng chịt giúp quân dân ta ẩn náu, chiến đấu hiệu quả trong kháng chiến chống Pháp!" }
      ]
    },
    {
      ask: "Núi Voi được xếp hạng là loại di tích gì?",
      options: [
        { label: "Di tích lịch sử — danh thắng cấp quốc gia", reply: "Chính xác! Núi Voi đã được xếp hạng di tích lịch sử — danh thắng cấp quốc gia, vừa có giá trị lịch sử vừa có cảnh quan đẹp." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là di tích lịch sử — danh thắng cấp quốc gia, kết hợp cả giá trị lịch sử lẫn vẻ đẹp thiên nhiên!" }
      ]
    },
    {
      ask: "Người dân địa phương lưu truyền điều gì về Núi Voi?",
      options: [
        { label: "Nhiều truyền thuyết dân gian thú vị", reply: "Đúng vậy! Người dân địa phương lưu truyền nhiều câu chuyện, truyền thuyết gắn với hình dáng và tên gọi của ngọn núi." },
        { label: "Chưa biết, kể thêm đi!", reply: "Có rất nhiều truyền thuyết dân gian thú vị xoay quanh hình dáng và tên gọi \"Núi Voi\" được truyền từ đời này sang đời khác!" }
      ]
    },
    {
      ask: "Núi Voi là nơi diễn ra hoạt động văn hoá nào của người dân An Lão?",
      options: [
        { label: "Sinh hoạt văn hoá, lễ hội truyền thống", reply: "Chính xác! Núi Voi là điểm sinh hoạt văn hoá, lễ hội truyền thống của người dân huyện An Lão vào các dịp lễ trong năm." },
        { label: "Chưa biết, kể thêm đi!", reply: "Vào các dịp lễ, Núi Voi trở thành điểm sinh hoạt văn hoá sôi động của người dân huyện An Lão!" }
      ]
    },
    {
      ask: "Cảnh quan quanh Núi Voi tạo nên bức tranh gì đặc trưng?",
      options: [
        { label: "Bức tranh làng quê ngoại thành", reply: "Đúng vậy! Cảnh quan núi non xen kẽ đồng ruộng tạo nên một bức tranh làng quê đặc trưng của vùng ngoại thành Hải Phòng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Núi non xen kẽ đồng ruộng tạo nên khung cảnh làng quê rất nên thơ, đặc trưng cho vùng ngoại thành Hải Phòng!" }
      ]
    },
    {
      ask: "Núi Voi đang được đầu tư phát triển theo hướng nào?",
      options: [
        { label: "Du lịch sinh thái, lịch sử", reply: "Chính xác! Nơi đây đang được đầu tư phát triển thành điểm du lịch sinh thái, lịch sử hấp dẫn du khách." },
        { label: "Chưa biết, kể thêm đi!", reply: "Núi Voi đang dần trở thành điểm du lịch sinh thái, lịch sử hấp dẫn, kết hợp cả khám phá thiên nhiên lẫn tìm hiểu lịch sử!" }
      ]
    },
    {
      ask: "Địa hình đặc trưng của Núi Voi là gì?",
      options: [
        { label: "Núi đá vôi có nhiều hang động", reply: "Chính xác! Địa hình núi đá vôi với nhiều hang động tự nhiên là nét đặc trưng nổi bật nhất của Núi Voi." },
        { label: "Chưa biết, kể thêm đi!", reply: "Núi đá vôi với hệ thống hang động tự nhiên phong phú tạo nên cảnh quan độc đáo cho Núi Voi!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Núi Voi thuộc huyện nào của Hải Phòng?", options: ["An Lão", "Vĩnh Bảo", "Tiên Lãng", "Thuỷ Nguyên"], correctIndex: 0 },
    { type: "mcq", question: "Núi Voi từng là nơi diễn ra hoạt động nào trong kháng chiến chống Pháp?", options: ["Căn cứ địa kháng chiến", "Nơi ký hiệp định", "Sân bay quân sự", "Bến cảng tiếp tế"], correctIndex: 0 },
    { type: "mcq", question: "Địa hình đặc trưng của Núi Voi là gì?", options: ["Núi đá vôi có nhiều hang động", "Đồi cát ven biển", "Đầm lầy ngập mặn", "Cao nguyên đất đỏ"], correctIndex: 0 },
    { type: "mcq", question: "Các nhà khảo cổ đã phát hiện điều gì tại khu vực Núi Voi?", options: ["Dấu tích cư trú của người tiền sử", "Mỏ vàng", "Thành cổ thời Lý", "Bến tàu cổ"], correctIndex: 0 },
    { type: "blur", question: "Hình mờ này gợi nhắc đặc điểm địa hình nào của Núi Voi?", options: ["Núi đá với hang động tự nhiên", "Bãi biển cát trắng", "Đồng bằng phù sa", "Sa mạc"], correctIndex: 0 },
    { type: "mcq", question: "Núi Voi là điểm đến phù hợp cho hoạt động nào?", options: ["Tham quan hang động, tìm hiểu lịch sử", "Lặn biển ngắm san hô", "Trượt tuyết", "Đua thuyền buồm"], correctIndex: 0 }
  ]
};
