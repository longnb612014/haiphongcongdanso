// LỄ HỘI: Chọi trâu Đồ Sơn
// ⚠️ Nội dung do AI soạn thảo — vui lòng kiểm tra lại trước khi công bố chính thức.
export default {
  id: "choi-trau-do-son",
  name: "Lễ hội Chọi trâu Đồ Sơn",
  place: "Đồ Sơn, Hải Phòng",
  timing: "Mùng 9 tháng 8 âm lịch hằng năm",
  coords: { lat: 20.7128, lng: 106.7965 }, // đã tách khỏi toạ độ trùng với Liên hoan Du lịch Đồ Sơn (trước đây bị đẩy lệch ra biển do trùng điểm)
  photos: [
    "festivals/images/choi-trau-do-son/images.jfif",
    "festivals/images/choi-trau-do-son/images (1).jfif",
    "festivals/images/choi-trau-do-son/images (2).jfif"
  ],

  narration: {
    intro: "Lễ hội Chọi trâu Đồ Sơn là một trong những lễ hội độc đáo và nổi tiếng bậc nhất của Hải Phòng, thể hiện tinh thần thượng võ của cư dân miền biển.",
    points: [
      "Lễ hội gắn với tín ngưỡng thờ Thuỷ thần của ngư dân vùng biển, cầu mong mưa thuận gió hoà, mùa màng bội thu.",
      "Câu ca dao \"Dù ai buôn đâu bán đâu, mồng chín tháng tám chọi trâu thì về\" thể hiện sức hút mạnh mẽ của lễ hội với người dân Hải Phòng.",
      "Lễ hội đã được công nhận là Di sản văn hoá phi vật thể quốc gia.",
      "Trước ngày hội chính, các \"ông trâu\" được các chủ trâu chăm sóc, huấn luyện công phu suốt nhiều tháng."
    ]
  },

  aiChat: [
    {
      ask: "Bạn có biết vì sao lễ hội Chọi trâu Đồ Sơn lại gắn với câu ca dao \"mồng chín tháng tám\" không?",
      options: [
        { label: "Vì đó là ngày diễn ra lễ hội chính", reply: "Đúng vậy! Mùng 9 tháng 8 âm lịch hằng năm là ngày hội chính, thu hút rất đông người dân và du khách về xem." },
        { label: "Mình chưa biết, kể thêm đi!", reply: "Câu ca dao \"Dù ai buôn đâu bán đâu, mồng chín tháng tám chọi trâu thì về\" cho thấy đây là ngày hội quan trọng, ai đi xa cũng cố về dự!" }
      ]
    },
    {
      ask: "Lễ hội Chọi trâu Đồ Sơn gắn với tín ngưỡng thờ vị thần nào?",
      options: [
        { label: "Thuỷ thần", reply: "Chính xác! Lễ hội gắn với tín ngưỡng thờ Thuỷ thần của ngư dân vùng biển, cầu mong mưa thuận gió hoà, mùa màng bội thu." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là tín ngưỡng thờ Thuỷ thần — thể hiện mong ước của ngư dân về biển cả yên lành, mùa màng bội thu!" }
      ]
    },
    {
      ask: "Bạn có biết ai là người chăm sóc, huấn luyện trâu chọi trước lễ hội không?",
      options: [
        { label: "Chủ trâu", reply: "Đúng vậy! Trước ngày hội chính, các \"ông trâu\" được các chủ trâu chăm sóc, huấn luyện công phu suốt nhiều tháng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Các chủ trâu phải chăm sóc, huấn luyện \"ông trâu\" của mình rất công phu suốt nhiều tháng trước khi vào hội!" }
      ]
    },
    {
      ask: "Lễ hội Chọi trâu Đồ Sơn được công nhận là loại di sản gì?",
      options: [
        { label: "Di sản văn hoá phi vật thể quốc gia", reply: "Chính xác! Lễ hội đã được công nhận là Di sản văn hoá phi vật thể quốc gia, ghi nhận giá trị văn hoá đặc sắc của lễ hội." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là Di sản văn hoá phi vật thể quốc gia — một trong những lễ hội độc đáo và nổi tiếng bậc nhất của Hải Phòng!" }
      ]
    },
    {
      ask: "Lễ hội Chọi trâu Đồ Sơn thể hiện tinh thần gì của cư dân miền biển?",
      options: [
        { label: "Tinh thần thượng võ", reply: "Đúng vậy! Đây là một trong những lễ hội độc đáo và nổi tiếng bậc nhất của Hải Phòng, thể hiện tinh thần thượng võ của cư dân miền biển." },
        { label: "Chưa biết, kể thêm đi!", reply: "Tinh thần thượng võ được thể hiện rõ nét qua sự dũng mãnh của các \"ông trâu\" trên sới đấu!" }
      ]
    },
    {
      ask: "Bạn nghĩ việc huấn luyện một \"ông trâu\" chọi mất bao lâu?",
      options: [
        { label: "Chắc là nhiều tháng", reply: "Đúng đó! Các chủ trâu phải chăm sóc, huấn luyện công phu suốt nhiều tháng để \"ông trâu\" đủ sức khoẻ và bản lĩnh bước vào sới đấu." },
        { label: "Chưa biết, kể thêm đi!", reply: "Việc huấn luyện một \"ông trâu\" chọi đòi hỏi sự kiên trì suốt nhiều tháng, từ chế độ ăn uống đến rèn luyện thể lực!" }
      ]
    },
    {
      ask: "Nếu có dịp, bạn có muốn xem trực tiếp lễ hội Chọi trâu Đồ Sơn không?",
      options: [
        { label: "Có, chắc sẽ rất kịch tính!", reply: "Chắc chắn luôn! Lễ hội thu hút hàng vạn người xem mỗi năm bởi không khí sôi động và kịch tính trên sới đấu." },
        { label: "Nghe có vẻ đông đúc quá", reply: "Đúng là rất đông vui — đây là một trong những lễ hội thu hút đông đảo người xem nhất miền Bắc mỗi dịp tháng 8 âm lịch!" }
      ]
    },
    {
      ask: "Lễ hội Chọi trâu Đồ Sơn diễn ra ở khu vực nào của Hải Phòng?",
      options: [
        { label: "Đồ Sơn", reply: "Chính xác! Lễ hội diễn ra tại Đồ Sơn, Hải Phòng — vùng đất gắn liền với truyền thống văn hoá biển đặc sắc." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là Đồ Sơn — nơi tổ chức lễ hội Chọi trâu nổi tiếng khắp cả nước mỗi năm!" }
      ]
    },
    {
      ask: "Theo bạn, câu ca dao về lễ hội Chọi trâu nói lên điều gì về tình cảm người xa quê?",
      options: [
        { label: "Luôn nhớ về quê hương, lễ hội truyền thống", reply: "Đúng vậy! Câu ca dao thể hiện tình cảm gắn bó sâu sắc của người dân với quê hương và lễ hội truyền thống, dù đi đâu cũng nhớ về." },
        { label: "Chưa nghĩ tới điều này", reply: "Câu ca dao \"mồng chín tháng tám chọi trâu thì về\" cho thấy dù bận rộn buôn bán ở đâu, người dân vẫn luôn nhớ về ngày hội quê hương!" }
      ]
    },
    {
      ask: "Lễ hội Chọi trâu Đồ Sơn được xem là một trong những lễ hội như thế nào của Hải Phòng?",
      options: [
        { label: "Độc đáo và nổi tiếng bậc nhất", reply: "Chính xác! Đây là một trong những lễ hội độc đáo và nổi tiếng bậc nhất của Hải Phòng, thu hút sự quan tâm của cả nước." },
        { label: "Chưa biết, kể thêm đi!", reply: "Lễ hội Chọi trâu Đồ Sơn nổi tiếng khắp cả nước, là niềm tự hào văn hoá của người dân thành phố Cảng!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Lễ hội Chọi trâu Đồ Sơn diễn ra vào ngày nào (âm lịch)?", options: ["Mùng 9 tháng 8", "Mùng 9 tháng 3", "Rằm tháng Giêng", "Mùng 1 tháng 5"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Chọi trâu Đồ Sơn gắn với tín ngưỡng nào?", options: ["Thờ Thuỷ thần", "Thờ Thổ công", "Thờ Táo quân", "Thờ Thần Nông"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Chọi trâu Đồ Sơn được công nhận là loại di sản gì?", options: ["Di sản văn hoá phi vật thể quốc gia", "Di sản thiên nhiên thế giới", "Di sản tư liệu thế giới", "Di sản hỗn hợp"], correctIndex: 0 },
    { type: "mcq", question: "Câu ca dao nào gắn liền với lễ hội này?", options: ["\"Mồng chín tháng tám chọi trâu thì về\"", "\"Tháng tám giỗ cha, tháng ba giỗ mẹ\"", "\"Bầu ơi thương lấy bí cùng\"", "\"Ai ơi bưng bát cơm đầy\""], correctIndex: 0 },
    { type: "mcq", question: "Người chăm sóc, huấn luyện trâu chọi trước lễ hội gọi là gì?", options: ["Chủ trâu", "Ngư dân", "Điền chủ", "Lý trưởng"], correctIndex: 0 }
  ]
};
