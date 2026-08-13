// ĐỊA DANH: Quần đảo Cát Bà
export default {
  id: "cat-ba",
  name: "Quần đảo Cát Bà",
  category: "Địa lý",
  place: "Huyện Cát Hải, Hải Phòng",
  coords: { lat: 20.7274, lng: 107.0483 },

  photos: {
    history: [
      "locations/images/cat-ba/history-1.jfif",
      "locations/images/cat-ba/history-2.jfif",
      "locations/images/cat-ba/history-3.jfif",
      "locations/images/cat-ba/history-4.jfif",
      "locations/images/cat-ba/history-5.jfif"
    ],
    culture: []
  },

  narration: {
    history: {
      intro: "Cát Bà là quần đảo lớn nhất vịnh Bắc Bộ, nơi các nhà khảo cổ đã phát hiện di chỉ Cái Bèo — bằng chứng cho thấy con người đã sinh sống tại đây từ hàng nghìn năm trước.",
      points: [
        "Di chỉ khảo cổ Cái Bèo được xem là một trong những di chỉ văn hoá biển cổ nhất được phát hiện ở Việt Nam.",
        "Cát Bà từng thuộc huyện Cát Hải trước khi được sáp nhập, phát triển thành trung tâm du lịch quan trọng của Hải Phòng.",
        "Năm 2004, Cát Bà được UNESCO công nhận là Khu dự trữ sinh quyển thế giới.",
        "Vườn quốc gia Cát Bà, thành lập từ năm 1986, là một trong những vườn quốc gia đầu tiên của Việt Nam."
      ]
    },
    culture: {
      intro: "Cộng đồng ngư dân làng chài trên vịnh Lan Hạ, Cát Bà đã gắn bó với nghề đi biển qua nhiều thế hệ, tạo nên nét văn hoá biển đảo đặc trưng.",
      points: [
        "Đời sống của ngư dân làng chài gắn liền với những ngôi nhà nổi trên mặt vịnh, là nét văn hoá độc đáo thu hút du khách.",
        "Loài voọc Cát Bà quý hiếm, biểu tượng của đảo, chỉ còn tồn tại duy nhất tại đây và đang được bảo tồn nghiêm ngặt.",
        "Các lễ hội truyền thống của ngư dân như lễ hội cầu ngư vẫn được duy trì để cầu mong những chuyến ra khơi bình an, bội thu.",
        "Cát Bà ngày nay là điểm du lịch sinh thái biển đảo nổi tiếng, kết hợp hài hoà giữa bảo tồn thiên nhiên và phát triển du lịch bền vững."
      ]
    }
  },

  aiChat: [
    {
      ask: "Bạn có biết loài linh trưởng quý hiếm nào chỉ sinh sống duy nhất ở Cát Bà không?",
      options: [
        { label: "Voọc Cát Bà!", reply: "Chính xác! Voọc Cát Bà là loài cực kỳ quý hiếm, chỉ còn lại trên đảo Cát Bà và đang được bảo tồn nghiêm ngặt." },
        { label: "Mình chưa biết, kể thêm đi!", reply: "Đó là voọc Cát Bà — một trong những loài linh trưởng quý hiếm nhất thế giới, chỉ sinh sống ở Vườn quốc gia Cát Bà thôi đó!" }
      ]
    },
    {
      ask: "Nếu ghé Cát Bà, bạn muốn khám phá vườn quốc gia hay đi thuyền ngắm vịnh trước?",
      options: [
        { label: "Khám phá Vườn quốc gia", reply: "Vườn quốc gia Cát Bà có hệ sinh thái rừng nhiệt đới trên núi đá vôi rất đặc biệt, đi cùng gia đình sẽ rất thú vị!" },
        { label: "Đi thuyền ngắm vịnh", reply: "Ngắm những hòn đảo đá vôi nhấp nhô trên mặt biển xanh là trải nghiệm không thể bỏ lỡ ở Cát Bà!" }
      ]
    },
    {
      ask: "Bạn có biết di chỉ khảo cổ nào chứng minh con người đã sống ở Cát Bà từ hàng nghìn năm trước không?",
      options: [
        { label: "Di chỉ Cái Bèo", reply: "Chính xác! Di chỉ khảo cổ Cái Bèo được xem là một trong những di chỉ văn hoá biển cổ nhất được phát hiện ở Việt Nam." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là di chỉ Cái Bèo — bằng chứng khảo cổ cho thấy con người đã sinh sống tại Cát Bà từ hàng nghìn năm trước!" }
      ]
    },
    {
      ask: "Năm nào Cát Bà được UNESCO công nhận là Khu dự trữ sinh quyển thế giới?",
      options: [
        { label: "Năm 2004", reply: "Đúng vậy! Năm 2004, Cát Bà được UNESCO công nhận là Khu dự trữ sinh quyển thế giới, khẳng định giá trị sinh thái đặc biệt của nơi đây." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là năm 2004 — một cột mốc quan trọng khẳng định giá trị đa dạng sinh học của quần đảo Cát Bà trên bản đồ thế giới!" }
      ]
    },
    {
      ask: "Vườn quốc gia Cát Bà được thành lập từ năm nào?",
      options: [
        { label: "Năm 1986", reply: "Chính xác! Vườn quốc gia Cát Bà thành lập từ năm 1986, là một trong những vườn quốc gia đầu tiên của Việt Nam." },
        { label: "Chưa biết, kể thêm đi!", reply: "Vườn quốc gia Cát Bà ra đời từ năm 1986 — thuộc thế hệ những vườn quốc gia đầu tiên của nước ta đó!" }
      ]
    },
    {
      ask: "Bạn có biết ngư dân làng chài trên vịnh Lan Hạ sinh sống trong những ngôi nhà như thế nào không?",
      options: [
        { label: "Nhà nổi trên mặt vịnh", reply: "Đúng vậy! Đời sống của ngư dân làng chài gắn liền với những ngôi nhà nổi trên mặt vịnh — một nét văn hoá độc đáo thu hút du khách." },
        { label: "Chưa biết, kể thêm đi!", reply: "Những ngôi nhà nổi trên vịnh Lan Hạ tạo nên khung cảnh làng chài rất đặc trưng, gắn bó với nghề đi biển qua nhiều thế hệ!" }
      ]
    },
    {
      ask: "Lễ hội nào của ngư dân Cát Bà vẫn được duy trì để cầu mong ra khơi bình an?",
      options: [
        { label: "Lễ hội cầu ngư", reply: "Chính xác! Lễ hội cầu ngư vẫn được duy trì để cầu mong những chuyến ra khơi bình an, bội thu cho ngư dân Cát Bà." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là lễ hội cầu ngư — nét văn hoá tín ngưỡng lâu đời của cộng đồng ngư dân biển đảo Cát Bà!" }
      ]
    },
    {
      ask: "Trước khi phát triển du lịch, Cát Bà từng thuộc đơn vị hành chính nào?",
      options: [
        { label: "Huyện Cát Hải", reply: "Đúng vậy! Cát Bà từng thuộc huyện Cát Hải trước khi phát triển thành trung tâm du lịch quan trọng của Hải Phòng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Cát Bà từng thuộc huyện Cát Hải — nay đã trở thành một trong những điểm du lịch nổi tiếng nhất miền Bắc!" }
      ]
    },
    {
      ask: "Cát Bà ngày nay theo đuổi hướng phát triển du lịch như thế nào?",
      options: [
        { label: "Du lịch sinh thái bền vững", reply: "Chính xác! Cát Bà ngày nay là điểm du lịch sinh thái biển đảo nổi tiếng, kết hợp hài hoà giữa bảo tồn thiên nhiên và phát triển du lịch bền vững." },
        { label: "Chưa biết, kể thêm đi!", reply: "Cát Bà đang phát triển du lịch sinh thái theo hướng bền vững, vừa bảo tồn thiên nhiên vừa phục vụ du khách!" }
      ]
    },
    {
      ask: "Cát Bà là quần đảo có diện tích lớn nhất ở khu vực nào?",
      options: [
        { label: "Vịnh Bắc Bộ", reply: "Chính xác! Cát Bà là quần đảo lớn nhất vịnh Bắc Bộ, với hàng trăm hòn đảo lớn nhỏ tạo nên cảnh quan hùng vĩ." },
        { label: "Chưa biết, kể thêm đi!", reply: "Cát Bà là quần đảo lớn nhất vịnh Bắc Bộ — một trong những điểm đến biển đảo nổi tiếng nhất miền Bắc!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Cát Bà được UNESCO công nhận là danh hiệu gì?", options: ["Di sản thiên nhiên thế giới", "Khu dự trữ sinh quyển thế giới", "Công viên địa chất toàn cầu", "Di sản văn hoá phi vật thể"], correctIndex: 1 },
    { type: "mcq", question: "Loài linh trưởng quý hiếm nào gần như chỉ còn sinh sống ở Cát Bà?", options: ["Voọc Cát Bà", "Khỉ vàng", "Vượn đen", "Culi"], correctIndex: 0 },
    { type: "mcq", question: "Cát Bà là quần đảo có diện tích lớn nhất ở khu vực nào?", options: ["Vịnh Bắc Bộ", "Vịnh Thái Lan", "Biển Đông nói chung", "Vịnh Cam Ranh"], correctIndex: 0 },
    { type: "mcq", question: "Vườn quốc gia Cát Bà nổi bật với hệ sinh thái nào?", options: ["Rừng nhiệt đới trên núi đá vôi", "Rừng ngập mặn", "Sa mạc", "Đồng cỏ"], correctIndex: 0 },
    { type: "blur", question: "Hình mờ này gợi nhắc cảnh quan đặc trưng nào của Cát Bà?", options: ["Đảo đá vôi nhấp nhô trên biển", "Cánh đồng lúa", "Núi tuyết", "Sa mạc cát"], correctIndex: 0 },
    { type: "mcq", question: "Trước đây Cát Bà từng thuộc đơn vị hành chính nào?", options: ["Huyện Cát Hải", "Huyện Thuỷ Nguyên", "Huyện Tiên Lãng", "Huyện Vĩnh Bảo"], correctIndex: 0 }
  ]
};
