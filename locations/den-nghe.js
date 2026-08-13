// ĐỊA DANH: Đền Nghè
export default {
  id: "den-nghe",
  name: "Đền Nghè",
  category: "Lịch sử",
  place: "Quận Lê Chân, Hải Phòng",
  coords: { lat: 20.8546, lng: 106.6803 }, // đã đối chiếu lại theo OpenStreetMap

  photos: {
    history: [
      "locations/images/den-nghe/history-1.jfif",
      "locations/images/den-nghe/history-2.jfif",
      "locations/images/den-nghe/history-3.jfif",
      "locations/images/den-nghe/history-4.jfif"
    ],
    culture: []
  },

  narration: {
    history: {
      intro: "Đền Nghè là nơi thờ nữ tướng Lê Chân — người có công khai khẩn vùng đất An Biên, đặt nền móng đầu tiên cho sự hình thành của thành phố Hải Phòng ngày nay.",
      points: [
        "Tương truyền Lê Chân là nữ tướng tài ba dưới thời Hai Bà Trưng, đã chiêu mộ binh sĩ và lập ấp tại vùng đất ven sông Cấm.",
        "Vùng đất An Biên do bà khai lập chính là tiền thân của nội thành Hải Phòng hiện nay.",
        "Sau khi bà mất, người dân lập đền thờ ngay tại nơi ở của bà để tưởng nhớ công lao khai đất, giữ dân.",
        "Đền Nghè được xếp hạng Di tích lịch sử — văn hoá cấp quốc gia."
      ]
    },
    culture: {
      intro: "Đền Nghè không chỉ là nơi thờ tự linh thiêng mà còn là trung tâm sinh hoạt văn hoá tín ngưỡng quan trọng của người dân Hải Phòng.",
      points: [
        "Lễ hội Đền Nghè diễn ra vào tháng Hai (ngày sinh) và tháng Tám (ngày hoá) âm lịch hằng năm, tưởng nhớ công ơn nữ tướng Lê Chân.",
        "Trong lễ hội có nhiều nghi thức rước kiệu, tế lễ trang trọng cùng các trò chơi dân gian truyền thống.",
        "Hình tượng nữ tướng Lê Chân trở thành biểu tượng cho tinh thần kiên cường, bất khuất của người phụ nữ Việt Nam.",
        "Tên bà được đặt cho một quận trung tâm của thành phố — quận Lê Chân — để tôn vinh công lao to lớn."
      ]
    }
  },

  aiChat: [
    {
      ask: "Bạn có biết Hải Phòng từng mang một cái tên khác trước khi được gọi như bây giờ không?",
      options: [
        { label: "Có, là An Biên!", reply: "Chính xác! An Biên là vùng đất do nữ tướng Lê Chân khai lập, được xem là tiền thân của thành phố Hải Phòng." },
        { label: "Chưa biết, kể mình nghe với!", reply: "Vùng đất này từng có tên là An Biên, do chính nữ tướng Lê Chân khai khẩn lập nên đó bạn!" }
      ]
    },
    {
      ask: "Theo bạn, vì sao người dân vẫn thờ phụng nữ tướng Lê Chân đến tận ngày nay?",
      options: [
        { label: "Vì bà có công lập đất, giữ dân", reply: "Đúng rồi! Công lao khai khẩn đất đai, che chở dân lành khiến hình ảnh bà sống mãi trong lòng người Hải Phòng." },
        { label: "Vì bà là một nữ tướng tài giỏi", reply: "Lê Chân không chỉ khai đất mà còn là một nữ tướng dưới thời Hai Bà Trưng — vừa giỏi việc dân, vừa giỏi việc quân!" }
      ]
    },
    {
      ask: "Bạn có biết vùng đất An Biên do Lê Chân khai lập nằm ở đâu không?",
      options: [
        { label: "Ven sông Cấm", reply: "Chính xác! Lê Chân đã chiêu mộ binh sĩ và lập ấp tại vùng đất ven sông Cấm — đó chính là An Biên, tiền thân của nội thành Hải Phòng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Vùng đất An Biên nằm ven sông Cấm, do Lê Chân khai khẩn — ngày nay chính là khu vực nội thành Hải Phòng đó!" }
      ]
    },
    {
      ask: "Sau khi Lê Chân mất, người dân đã làm gì để tưởng nhớ bà?",
      options: [
        { label: "Lập đền thờ ngay tại nơi bà từng ở", reply: "Đúng vậy! Người dân lập đền thờ ngay tại nơi ở của bà để tưởng nhớ công lao khai đất, giữ dân — đó chính là Đền Nghè ngày nay." },
        { label: "Không biết, chỉ đoán là có đền thờ", reply: "Người dân đã lập đền thờ ngay tại nơi bà từng sinh sống — Đền Nghè trở thành nơi tưởng nhớ công lao to lớn của nữ tướng!" }
      ]
    },
    {
      ask: "Bạn có biết Đền Nghè được xếp hạng di tích cấp nào không?",
      options: [
        { label: "Di tích lịch sử — văn hoá cấp quốc gia", reply: "Chính xác! Đền Nghè đã được xếp hạng Di tích lịch sử — văn hoá cấp quốc gia, ghi nhận giá trị lịch sử to lớn của nơi này." },
        { label: "Chưa rõ, chắc là cấp thành phố", reply: "Thực ra Đền Nghè được xếp hạng ở cấp quốc gia đó — một trong những di tích quan trọng bậc nhất của Hải Phòng!" }
      ]
    },
    {
      ask: "Lễ hội Đền Nghè có những nghi thức gì đặc sắc?",
      options: [
        { label: "Rước kiệu, tế lễ trang trọng", reply: "Đúng vậy! Lễ hội có nhiều nghi thức rước kiệu, tế lễ trang trọng cùng các trò chơi dân gian truyền thống, thu hút đông đảo người dân tham gia." },
        { label: "Chưa biết, kể thêm đi!", reply: "Lễ hội Đền Nghè có rước kiệu, tế lễ trang trọng và nhiều trò chơi dân gian — không khí rất náo nhiệt và thiêng liêng!" }
      ]
    },
    {
      ask: "Hình tượng nữ tướng Lê Chân tượng trưng cho điều gì trong văn hoá Việt Nam?",
      options: [
        { label: "Tinh thần kiên cường của phụ nữ Việt", reply: "Chính xác! Hình tượng Lê Chân trở thành biểu tượng cho tinh thần kiên cường, bất khuất của người phụ nữ Việt Nam qua bao thế hệ." },
        { label: "Chỉ đơn giản là một vị thần linh", reply: "Không chỉ vậy đâu — bà là biểu tượng sống động cho tinh thần kiên cường, bất khuất của người phụ nữ Việt Nam trong lịch sử!" }
      ]
    },
    {
      ask: "Bạn có biết tên bà Lê Chân được đặt cho địa danh nào ở Hải Phòng không?",
      options: [
        { label: "Quận Lê Chân", reply: "Đúng vậy! Một quận trung tâm của thành phố được đặt tên là quận Lê Chân để tôn vinh công lao to lớn của bà." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là quận Lê Chân — một trong những quận trung tâm của Hải Phòng, đặt theo tên vị nữ tướng đã khai lập nên vùng đất này!" }
      ]
    },
    {
      ask: "Đền Nghè đóng vai trò gì trong đời sống văn hoá của người Hải Phòng?",
      options: [
        { label: "Trung tâm sinh hoạt tín ngưỡng quan trọng", reply: "Chính xác! Đền Nghè không chỉ là nơi thờ tự linh thiêng mà còn là trung tâm sinh hoạt văn hoá tín ngưỡng quan trọng của người dân thành phố." },
        { label: "Chỉ là một điểm tham quan bình thường", reply: "Không chỉ vậy — Đền Nghè còn là trung tâm sinh hoạt văn hoá tín ngưỡng gắn bó mật thiết với đời sống tinh thần của người Hải Phòng!" }
      ]
    },
    {
      ask: "Lê Chân đã làm gì để chuẩn bị lực lượng trước khi lập ấp tại An Biên?",
      options: [
        { label: "Chiêu mộ binh sĩ", reply: "Chính xác! Tương truyền Lê Chân là nữ tướng tài ba dưới thời Hai Bà Trưng, đã chiêu mộ binh sĩ và lập ấp tại vùng đất ven sông Cấm." },
        { label: "Chưa biết, kể thêm đi!", reply: "Bà đã chiêu mộ binh sĩ, vừa lo việc quân vừa khai khẩn đất đai — một nữ tướng vừa giỏi việc nước, vừa giỏi việc dân!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Nữ tướng nào được coi là người khai lập vùng đất tiền thân của Hải Phòng?", options: ["Bà Triệu", "Lê Chân", "Nguyên Phi Ỷ Lan", "Bùi Thị Xuân"], correctIndex: 1 },
    { type: "mcq", question: "Vùng đất do Lê Chân khai lập có tên gọi là gì?", options: ["An Biên", "An Dương", "An Lão", "An Hải"], correctIndex: 0 },
    { type: "mcq", question: "Lê Chân là nữ tướng dưới thời của ai?", options: ["Hai Bà Trưng", "Bà Triệu", "Ngô Quyền", "Đinh Bộ Lĩnh"], correctIndex: 0 },
    { type: "mcq", question: "Đền Nghè nằm ở quận nào của thành phố Hải Phòng?", options: ["Lê Chân", "Hồng Bàng", "Ngô Quyền", "Hải An"], correctIndex: 0 },
    { type: "blur", question: "Hình ảnh mờ này gợi nhắc đến kiến trúc nào thường thấy ở Đền Nghè?", options: ["Cổng đền chạm khắc truyền thống", "Tháp chuông nhà thờ", "Cầu vượt biển", "Sân vận động"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Đền Nghè diễn ra vào những tháng nào trong năm (âm lịch)?", options: ["Tháng 2 và tháng 8", "Tháng 1 và tháng 5", "Tháng 3 và tháng 9", "Tháng 4 và tháng 10"], correctIndex: 0 }
  ]
};
