// ĐỊA DANH: Bán đảo Đồ Sơn
export default {
  id: "do-son",
  name: "Bán đảo Đồ Sơn",
  category: "Địa lý",
  place: "Quận Đồ Sơn, Hải Phòng",
  coords: { lat: 20.7150, lng: 106.8020 },

  photos: {
    history: [
      "locations/images/do-son/history-1.jfif",
      "locations/images/do-son/history-2.jfif",
      "locations/images/do-son/history-3.jfif",
      "locations/images/do-son/history-4.jfif",
      "locations/images/do-son/history-5.jfif"
    ],
    culture: []
  },

  narration: {
    history: {
      intro: "Từ thời Pháp thuộc, bán đảo Đồ Sơn đã được người Pháp phát hiện và xây dựng thành khu nghỉ dưỡng ven biển nhờ khí hậu mát mẻ, cảnh quan đồi thông tuyệt đẹp.",
      points: [
        "Đầu thế kỷ XX, người Pháp xây dựng nhiều biệt thự, khu nghỉ dưỡng tại Đồ Sơn dành cho quan chức và giới thượng lưu.",
        "Đồ Sơn còn gắn liền với bến tàu không số K15 — di tích lịch sử quan trọng trong kháng chiến chống Mỹ.",
        "Bán đảo có địa hình gồm nhiều đồi thấp nối tiếp nhau, tạo nên cảnh quan độc đáo hiếm có ở vùng ven biển miền Bắc.",
        "Ngày nay Đồ Sơn tiếp tục phát triển thành khu du lịch, nghỉ dưỡng trọng điểm của thành phố Hải Phòng."
      ]
    },
    culture: {
      intro: "Đồ Sơn nổi tiếng khắp cả nước với lễ hội chọi trâu truyền thống — một trong những lễ hội độc đáo và kịch tính bậc nhất Việt Nam.",
      points: [
        "Lễ hội chọi trâu Đồ Sơn diễn ra vào ngày 9 tháng 8 âm lịch hằng năm, thu hút hàng vạn người xem.",
        "Lễ hội đã được công nhận là Di sản văn hoá phi vật thể quốc gia, thể hiện tinh thần thượng võ của người dân miền biển.",
        "Câu ca dao \"Dù ai buôn đâu bán đâu, mồng chín tháng tám chọi trâu thì về\" thể hiện sức hút mạnh mẽ của lễ hội này.",
        "Ngoài chọi trâu, Đồ Sơn còn có nhiều lễ hội dân gian khác gắn với tín ngưỡng thờ thần biển của cư dân vùng ven biển."
      ]
    }
  },

  aiChat: [
    {
      ask: "Bạn có biết lễ hội nào nổi tiếng nhất ở Đồ Sơn không?",
      options: [
        { label: "Lễ hội chọi trâu!", reply: "Đúng rồi! Lễ hội chọi trâu Đồ Sơn diễn ra vào tháng 8 âm lịch, đã được công nhận là Di sản văn hoá phi vật thể quốc gia." },
        { label: "Mình chưa biết, kể thêm đi!", reply: "Đó là lễ hội chọi trâu — một lễ hội truyền thống rất nổi tiếng, thu hút đông đảo người xem mỗi năm!" }
      ]
    },
    {
      ask: "Theo bạn, điều gì khiến Đồ Sơn trở thành điểm nghỉ dưỡng từ hơn 100 năm trước?",
      options: [
        { label: "Khí hậu mát mẻ, cảnh đẹp", reply: "Chính xác! Đồi thông xanh mát sát biển khiến nơi đây trở thành điểm nghỉ dưỡng lý tưởng ngay từ thời Pháp thuộc." },
        { label: "Có bãi biển đẹp", reply: "Bãi biển cùng những đồi thông thoáng mát đã biến Đồ Sơn thành khu nghỉ dưỡng nổi tiếng từ rất sớm!" }
      ]
    },
    {
      ask: "Bạn có biết câu ca dao nào gắn liền với lễ hội chọi trâu Đồ Sơn không?",
      options: [
        { label: "\"Mồng chín tháng tám chọi trâu thì về\"", reply: "Chính xác! Câu ca dao \"Dù ai buôn đâu bán đâu, mồng chín tháng tám chọi trâu thì về\" thể hiện sức hút mạnh mẽ của lễ hội này." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là câu ca dao nổi tiếng nhắc nhở người dân dù đi đâu cũng nhớ về dự lễ hội chọi trâu vào mùng 9 tháng 8 âm lịch!" }
      ]
    },
    {
      ask: "Người Pháp đã xây dựng những gì ở Đồ Sơn đầu thế kỷ XX?",
      options: [
        { label: "Nhiều biệt thự, khu nghỉ dưỡng", reply: "Đúng vậy! Đầu thế kỷ XX, người Pháp xây dựng nhiều biệt thự, khu nghỉ dưỡng tại Đồ Sơn dành cho quan chức và giới thượng lưu." },
        { label: "Chưa biết, kể thêm đi!", reply: "Người Pháp đã biến Đồ Sơn thành khu nghỉ dưỡng sang trọng với nhiều biệt thự dành cho quan chức và giới thượng lưu thời đó!" }
      ]
    },
    {
      ask: "Bạn có biết di tích lịch sử nào cũng gắn liền với Đồ Sơn không?",
      options: [
        { label: "Bến tàu không số K15", reply: "Chính xác! Đồ Sơn còn gắn liền với bến tàu không số K15 — di tích lịch sử quan trọng trong kháng chiến chống Mỹ." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là bến tàu không số K15 — nơi xuất phát những chuyến tàu bí mật chi viện cho miền Nam trong kháng chiến chống Mỹ!" }
      ]
    },
    {
      ask: "Địa hình của bán đảo Đồ Sơn có gì đặc biệt so với vùng ven biển miền Bắc?",
      options: [
        { label: "Nhiều đồi thấp nối tiếp nhau", reply: "Đúng vậy! Bán đảo có địa hình gồm nhiều đồi thấp nối tiếp nhau, tạo nên cảnh quan độc đáo hiếm có ở vùng ven biển miền Bắc." },
        { label: "Chưa để ý, kể thêm đi!", reply: "Địa hình đồi thấp nối tiếp sát biển là nét đặc trưng hiếm có, khiến Đồ Sơn trở nên khác biệt so với các bãi biển khác ở miền Bắc!" }
      ]
    },
    {
      ask: "Lễ hội chọi trâu Đồ Sơn thể hiện tinh thần gì của người dân miền biển?",
      options: [
        { label: "Tinh thần thượng võ", reply: "Chính xác! Lễ hội đã được công nhận là Di sản văn hoá phi vật thể quốc gia, thể hiện tinh thần thượng võ của người dân miền biển." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là lễ hội thể hiện tinh thần thượng võ mạnh mẽ, đã được công nhận là Di sản văn hoá phi vật thể quốc gia!" }
      ]
    },
    {
      ask: "Ngoài chọi trâu, Đồ Sơn còn gắn với những lễ hội dân gian nào khác?",
      options: [
        { label: "Lễ hội thờ thần biển", reply: "Đúng vậy! Ngoài chọi trâu, Đồ Sơn còn có nhiều lễ hội dân gian khác gắn với tín ngưỡng thờ thần biển của cư dân vùng ven biển." },
        { label: "Chưa biết, kể thêm đi!", reply: "Người dân Đồ Sơn còn duy trì nhiều lễ hội dân gian gắn với tín ngưỡng thờ thần biển — nét văn hoá đặc trưng của vùng ven biển!" }
      ]
    },
    {
      ask: "Ngày nay Đồ Sơn tiếp tục phát triển theo hướng nào?",
      options: [
        { label: "Khu du lịch, nghỉ dưỡng trọng điểm", reply: "Chính xác! Ngày nay Đồ Sơn tiếp tục phát triển thành khu du lịch, nghỉ dưỡng trọng điểm của thành phố Hải Phòng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đồ Sơn vẫn giữ vững vai trò là khu du lịch, nghỉ dưỡng trọng điểm, tiếp nối truyền thống từ hơn 100 năm trước!" }
      ]
    },
    {
      ask: "Đồ Sơn được biết đến chủ yếu là loại hình du lịch nào?",
      options: [
        { label: "Du lịch biển, nghỉ dưỡng", reply: "Chính xác! Đồ Sơn được biết đến chủ yếu với loại hình du lịch biển, nghỉ dưỡng nhờ bãi biển đẹp và khí hậu mát mẻ." },
        { label: "Chưa biết, kể thêm đi!", reply: "Du lịch biển, nghỉ dưỡng là thế mạnh nổi bật nhất của Đồ Sơn suốt hơn một thế kỷ qua!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Lễ hội truyền thống nổi tiếng của Đồ Sơn là lễ hội gì?", options: ["Lễ hội chọi trâu", "Lễ hội đua thuyền", "Lễ hội chùa Hương", "Lễ hội Đền Hùng"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội chọi trâu Đồ Sơn được tổ chức vào tháng nào (âm lịch)?", options: ["Tháng 8", "Tháng 1", "Tháng 4", "Tháng 10"], correctIndex: 0 },
    { type: "mcq", question: "Đồ Sơn được biết đến chủ yếu là loại hình du lịch nào?", options: ["Du lịch biển, nghỉ dưỡng", "Du lịch núi", "Du lịch sinh thái rừng", "Du lịch sông nước miền Tây"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội chọi trâu Đồ Sơn được công nhận là loại di sản gì?", options: ["Di sản văn hoá phi vật thể quốc gia", "Di sản thiên nhiên thế giới", "Di sản tư liệu thế giới", "Di sản hỗn hợp"], correctIndex: 0 },
    { type: "blur", question: "Hình mờ này gợi nhắc cảnh quan nào thường thấy ở Đồ Sơn?", options: ["Đồi thông ven biển", "Ruộng bậc thang", "Sa mạc", "Rừng ngập mặn"], correctIndex: 0 },
    { type: "mcq", question: "Từ thời kỳ nào Đồ Sơn đã được chọn làm nơi nghỉ dưỡng?", options: ["Thời Pháp thuộc", "Thời nhà Nguyễn", "Thời hiện đại (sau 2000)", "Thời Bắc thuộc"], correctIndex: 0 }
  ]
};
