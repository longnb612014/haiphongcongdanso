// LỄ HỘI: Lễ hội Cầu ngư Cát Bà
// ⚠️ Nội dung do AI soạn thảo — vui lòng kiểm tra lại trước khi công bố chính thức.
export default {
  id: "cau-ngu-cat-ba",
  name: "Lễ hội Cầu ngư Cát Bà",
  place: "Đảo Cát Bà, huyện Cát Hải, Hải Phòng",
  timing: "Đầu xuân, tháng Giêng — tháng 2 âm lịch hằng năm",
  coords: { lat: 20.7274, lng: 107.0483 },
  photos: [
    "festivals/images/cau-ngu-cat-ba/tải xuống.jfif",
    "festivals/images/cau-ngu-cat-ba/tải xuống (1).jfif",
    "festivals/images/cau-ngu-cat-ba/tải xuống (3).jfif"
  ],

  narration: {
    intro: "Lễ hội Cầu ngư là lễ hội truyền thống của cộng đồng ngư dân Cát Bà, cầu mong trời yên biển lặng, mùa đánh bắt bội thu và bình an cho những chuyến ra khơi.",
    points: [
      "Lễ hội gắn với tín ngưỡng thờ Cá Ông (cá voi) và các vị thần biển của ngư dân vùng biển đảo.",
      "Phần lễ có nghi thức cúng tế trang trọng tại các đình, miếu ven biển; phần hội có đua thuyền, kéo co, các trò chơi dân gian.",
      "Đây là dịp cộng đồng ngư dân làng chài trên vịnh Lan Hạ sum họp, gắn kết trước mùa đánh bắt mới.",
      "Lễ hội phản ánh nét văn hoá biển đảo đặc trưng, gắn bó lâu đời của người dân Cát Bà, Cát Hải."
    ]
  },

  aiChat: [
    {
      ask: "Bạn có biết vì sao ngư dân Cát Bà lại thờ \"Cá Ông\" không?",
      options: [
        { label: "Chắc vì cá voi giúp ngư dân gặp nạn trên biển", reply: "Đúng vậy! Theo tín ngưỡng dân gian, Cá Ông (cá voi) thường cứu giúp ngư dân gặp nạn trên biển, nên được thờ phụng như một vị thần bảo hộ." },
        { label: "Chưa biết, kể thêm đi!", reply: "Ngư dân vùng biển tin rằng Cá Ông là vị thần biển che chở cho những chuyến ra khơi — lễ hội Cầu ngư là dịp bày tỏ lòng biết ơn và cầu mong bình an, bội thu!" }
      ]
    },
    {
      ask: "Phần lễ của lễ hội Cầu ngư diễn ra ở đâu?",
      options: [
        { label: "Tại các đình, miếu ven biển", reply: "Chính xác! Phần lễ có nghi thức cúng tế trang trọng tại các đình, miếu ven biển của cộng đồng ngư dân Cát Bà." },
        { label: "Chưa biết, kể thêm đi!", reply: "Nghi thức cúng tế trang trọng diễn ra tại các đình, miếu ven biển — nơi linh thiêng của cộng đồng ngư dân!" }
      ]
    },
    {
      ask: "Phần hội của lễ hội Cầu ngư có những hoạt động gì?",
      options: [
        { label: "Đua thuyền, kéo co, trò chơi dân gian", reply: "Đúng vậy! Phần hội có đua thuyền, kéo co, các trò chơi dân gian rất sôi động và náo nhiệt." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đua thuyền và kéo co là những hoạt động sôi động nhất, thu hút đông đảo ngư dân và du khách tham gia!" }
      ]
    },
    {
      ask: "Lễ hội Cầu ngư là dịp để cộng đồng ngư dân làm gì?",
      options: [
        { label: "Sum họp, gắn kết trước mùa đánh bắt mới", reply: "Chính xác! Đây là dịp cộng đồng ngư dân làng chài trên vịnh Lan Hạ sum họp, gắn kết trước mùa đánh bắt mới." },
        { label: "Chưa biết, kể thêm đi!", reply: "Lễ hội là dịp để cả cộng đồng ngư dân trên vịnh Lan Hạ cùng sum họp, gắn kết trước khi bước vào mùa đánh bắt mới!" }
      ]
    },
    {
      ask: "Lễ hội Cầu ngư diễn ra vào thời gian nào trong năm?",
      options: [
        { label: "Đầu xuân, tháng Giêng — tháng 2 âm lịch", reply: "Đúng vậy! Lễ hội thường diễn ra vào đầu xuân, khoảng tháng Giêng đến tháng 2 âm lịch hằng năm." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đầu xuân là thời điểm lý tưởng để tổ chức lễ hội, cầu mong một năm ra khơi bình an, bội thu!" }
      ]
    },
    {
      ask: "Lễ hội Cầu ngư Cát Bà phản ánh nét văn hoá đặc trưng nào?",
      options: [
        { label: "Văn hoá biển đảo", reply: "Chính xác! Lễ hội phản ánh nét văn hoá biển đảo đặc trưng, gắn bó lâu đời của người dân Cát Bà, Cát Hải." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là nét văn hoá biển đảo đặc trưng, thể hiện đời sống gắn bó lâu đời của ngư dân với biển cả!" }
      ]
    },
    {
      ask: "Nếu tham gia lễ hội Cầu ngư, bạn muốn xem đua thuyền hay lễ cúng tế trước?",
      options: [
        { label: "Đua thuyền", reply: "Đua thuyền là phần hội sôi động và kịch tính nhất, thể hiện sức mạnh và sự khéo léo của các đội ngư dân!" },
        { label: "Lễ cúng tế", reply: "Lễ cúng tế trang trọng tại đình, miếu ven biển giúp bạn hiểu rõ hơn về tín ngưỡng thờ Cá Ông của ngư dân!" }
      ]
    },
    {
      ask: "Lễ hội Cầu ngư Cát Bà cầu mong điều gì cho ngư dân?",
      options: [
        { label: "Trời yên biển lặng, mùa đánh bắt bội thu", reply: "Chính xác! Lễ hội cầu mong trời yên biển lặng, mùa đánh bắt bội thu và bình an cho những chuyến ra khơi." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là mong ước lớn nhất của ngư dân: biển cả yên bình, mỗi chuyến ra khơi đều bình an và bội thu!" }
      ]
    },
    {
      ask: "Lễ hội Cầu ngư Cát Bà được tổ chức tại huyện nào của Hải Phòng?",
      options: [
        { label: "Huyện Cát Hải", reply: "Chính xác! Lễ hội Cầu ngư diễn ra tại đảo Cát Bà, huyện Cát Hải, Hải Phòng — vùng biển đảo gắn bó lâu đời với nghề đánh bắt." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là huyện Cát Hải — nơi cộng đồng ngư dân đảo Cát Bà gìn giữ lễ hội Cầu ngư qua nhiều thế hệ!" }
      ]
    },
    {
      ask: "Vì sao lễ hội Cầu ngư quan trọng với đời sống ngư dân Cát Bà?",
      options: [
        { label: "Vì gắn liền với nghề đánh bắt trên biển", reply: "Đúng vậy! Lễ hội gắn liền với đời sống mưu sinh trên biển của ngư dân, cầu mong bình an và bội thu trước mỗi mùa đánh bắt mới." },
        { label: "Chưa nghĩ tới điều này", reply: "Với ngư dân, mỗi chuyến ra khơi đều tiềm ẩn rủi ro, nên lễ hội Cầu ngư mang ý nghĩa tinh thần rất lớn, tiếp thêm niềm tin trước biển cả!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Lễ hội Cầu ngư Cát Bà cầu mong điều gì?", options: ["Trời yên biển lặng, mùa đánh bắt bội thu", "Mùa màng lúa gạo tốt tươi", "Con cái học giỏi", "Buôn bán phát đạt"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Cầu ngư gắn với tín ngưỡng thờ ai?", options: ["Cá Ông (cá voi) và thần biển", "Thành hoàng làng", "Táo quân", "Thổ công"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Cầu ngư Cát Bà diễn ra ở đâu?", options: ["Đảo Cát Bà, huyện Cát Hải", "Đồ Sơn", "Kiến Thuỵ", "Thuỷ Nguyên"], correctIndex: 0 },
    { type: "mcq", question: "Hoạt động nào thường có trong phần hội của lễ hội Cầu ngư?", options: ["Đua thuyền, kéo co", "Chọi trâu", "Vật cầu", "Đấu vật"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Cầu ngư phản ánh nét văn hoá đặc trưng nào?", options: ["Văn hoá biển đảo", "Văn hoá lúa nước đồng bằng", "Văn hoá miền núi", "Văn hoá đô thị"], correctIndex: 0 }
  ]
};
