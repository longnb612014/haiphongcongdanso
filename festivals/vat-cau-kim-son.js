// LỄ HỘI: Vật cầu Kim Sơn
// ⚠️ Nội dung do AI soạn thảo — vui lòng kiểm tra lại trước khi công bố chính thức
// (đặc biệt là toạ độ và ngày âm lịch chính xác của làng Kim Sơn).
export default {
  id: "vat-cau-kim-son",
  name: "Lễ hội Vật cầu Kim Sơn",
  place: "Làng Kim Sơn, xã Tân Trào, huyện Kiến Thuỵ",
  timing: "Mùng 6 tháng Giêng âm lịch hằng năm",
  coords: { lat: 20.7700, lng: 106.6800 },
  photos: [
    "festivals/images/vat-cau-kim-son/tải xuống.jfif",
    "festivals/images/vat-cau-kim-son/tải xuống (3).jfif",
    "festivals/images/vat-cau-kim-son/images.jfif"
  ],

  narration: {
    intro: "Vật cầu Kim Sơn là lễ hội đầu xuân độc đáo, nơi các trai tráng trong làng tranh cướp quả cầu gỗ nặng trong một hố bùn — trò chơi dân gian cầu cho mưa thuận gió hoà, mùa màng tươi tốt.",
    points: [
      "Quả cầu dùng trong lễ hội được làm bằng gỗ, sơn đỏ, khá nặng, đặt giữa một hố bùn nhão ngay sân đình.",
      "Trai tráng chia thành các giáp (phe), thi nhau tranh cướp và đưa quả cầu vào lỗ của đối phương.",
      "Lễ hội thể hiện tinh thần thượng võ, gắn kết cộng đồng đầu năm mới của người dân vùng Kiến Thuỵ.",
      "Đây là một trong những lễ hội vật cầu cổ hiếm hoi còn được duy trì ở khu vực đồng bằng Bắc Bộ."
    ]
  },

  aiChat: [
    {
      ask: "Bạn thử đoán xem, tranh cướp quả cầu gỗ trong hố bùn có ý nghĩa gì với người xưa?",
      options: [
        { label: "Chắc là cầu may mắn đầu năm", reply: "Gần đúng đó! Trò chơi này mang ý nghĩa cầu cho mưa thuận gió hoà, mùa màng tươi tốt — một nghi lễ nông nghiệp đầu xuân rất đặc trưng của vùng đồng bằng Bắc Bộ." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là nghi lễ cầu mùa của người xưa: quả cầu tượng trưng cho mặt trời, trai tráng tranh cướp đưa vào lỗ đối phương để cầu mong mưa thuận gió hoà, mùa màng bội thu!" }
      ]
    },
    {
      ask: "Quả cầu dùng trong lễ hội Vật cầu Kim Sơn được làm từ chất liệu gì?",
      options: [
        { label: "Gỗ, sơn đỏ, khá nặng", reply: "Chính xác! Quả cầu dùng trong lễ hội được làm bằng gỗ, sơn đỏ, khá nặng, đặt giữa một hố bùn nhão ngay sân đình." },
        { label: "Chưa biết, kể thêm đi!", reply: "Quả cầu gỗ sơn đỏ khá nặng, đặt giữa hố bùn — việc tranh cướp nó đòi hỏi sức khoẻ và sự khéo léo!" }
      ]
    },
    {
      ask: "Người chơi trong lễ hội Vật cầu Kim Sơn được chia thành gì để thi đấu?",
      options: [
        { label: "Các giáp (phe)", reply: "Đúng vậy! Trai tráng chia thành các giáp (phe), thi nhau tranh cướp và đưa quả cầu vào lỗ của đối phương." },
        { label: "Chưa biết, kể thêm đi!", reply: "Các trai tráng được chia thành từng giáp, cùng nhau thi đấu tranh cướp quả cầu đầy kịch tính!" }
      ]
    },
    {
      ask: "Lễ hội Vật cầu Kim Sơn thể hiện tinh thần gì của người dân vùng Kiến Thuỵ?",
      options: [
        { label: "Tinh thần thượng võ, gắn kết cộng đồng", reply: "Chính xác! Lễ hội thể hiện tinh thần thượng võ, gắn kết cộng đồng đầu năm mới của người dân vùng Kiến Thuỵ." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là dịp để cộng đồng gắn kết, thể hiện tinh thần thượng võ ngay từ những ngày đầu năm mới!" }
      ]
    },
    {
      ask: "Bạn có biết vì sao lễ hội Vật cầu Kim Sơn được xem là hiếm hoi ở đồng bằng Bắc Bộ không?",
      options: [
        { label: "Vì ít nơi còn duy trì lễ hội vật cầu cổ", reply: "Đúng vậy! Đây là một trong những lễ hội vật cầu cổ hiếm hoi còn được duy trì ở khu vực đồng bằng Bắc Bộ." },
        { label: "Chưa biết, kể thêm đi!", reply: "Không nhiều nơi còn giữ được lễ hội vật cầu cổ như Kim Sơn — đây là nét văn hoá quý giá cần được bảo tồn!" }
      ]
    },
    {
      ask: "Lễ hội Vật cầu Kim Sơn diễn ra vào ngày nào trong năm (âm lịch)?",
      options: [
        { label: "Mùng 6 tháng Giêng", reply: "Chính xác! Lễ hội diễn ra vào mùng 6 tháng Giêng âm lịch hằng năm, ngay trong không khí đầu xuân." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là mùng 6 tháng Giêng âm lịch — một trong những lễ hội mở đầu mùa xuân sôi động của vùng Kiến Thuỵ!" }
      ]
    },
    {
      ask: "Bạn nghĩ điều gì khó khăn nhất khi tranh cướp quả cầu trong hố bùn?",
      options: [
        { label: "Quả cầu nặng và trơn trượt vì bùn", reply: "Đúng vậy! Quả cầu gỗ khá nặng, lại thêm hố bùn nhão trơn trượt khiến việc tranh cướp trở nên vô cùng gay cấn và đòi hỏi sức lực." },
        { label: "Chưa nghĩ tới điều này", reply: "Bùn nhão khiến việc di chuyển và giữ thăng bằng rất khó, đây chính là điều tạo nên sự kịch tính, hấp dẫn của lễ hội!" }
      ]
    },
    {
      ask: "Lễ hội Vật cầu Kim Sơn thuộc huyện nào của Hải Phòng?",
      options: [
        { label: "Kiến Thuỵ", reply: "Chính xác! Lễ hội Vật cầu Kim Sơn được tổ chức tại làng Kim Sơn, xã Tân Trào, huyện Kiến Thuỵ." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là huyện Kiến Thuỵ — nơi lưu giữ lễ hội vật cầu cổ độc đáo bậc nhất vùng đồng bằng Bắc Bộ!" }
      ]
    },
    {
      ask: "Theo bạn, vì sao những lễ hội như Vật cầu Kim Sơn cần được gìn giữ?",
      options: [
        { label: "Vì đó là di sản văn hoá quý giá của cha ông", reply: "Rất đúng! Đây là những nghi lễ nông nghiệp cổ truyền, phản ánh đời sống tinh thần và trí tuệ dân gian của cha ông ta." },
        { label: "Chưa nghĩ tới điều này", reply: "Những lễ hội cổ như thế này giúp thế hệ trẻ hiểu và trân trọng hơn về văn hoá truyền thống của dân tộc!" }
      ]
    },
    {
      ask: "Vật cầu Kim Sơn là lễ hội diễn ra vào thời điểm nào trong năm?",
      options: [
        { label: "Đầu xuân", reply: "Chính xác! Đây là lễ hội đầu xuân độc đáo, mở đầu năm mới bằng trò chơi dân gian cầu cho mưa thuận gió hoà, mùa màng tươi tốt." },
        { label: "Chưa biết, kể thêm đi!", reply: "Lễ hội diễn ra vào đầu xuân — thời điểm mở đầu năm mới với nhiều mong ước tốt lành cho mùa màng!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Lễ hội Vật cầu Kim Sơn diễn ra vào ngày nào (âm lịch)?", options: ["Mùng 6 tháng Giêng", "Mùng 9 tháng 8", "Rằm tháng 8", "Mùng 3 tháng 3"], correctIndex: 0 },
    { type: "mcq", question: "Quả cầu trong lễ hội được làm bằng chất liệu gì?", options: ["Gỗ", "Đá", "Tre đan", "Kim loại"], correctIndex: 0 },
    { type: "mcq", question: "Người chơi tranh cướp quả cầu ở đâu?", options: ["Hố bùn nhão giữa sân đình", "Trên mặt sông", "Trên bãi cát", "Trong sân vận động"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Vật cầu Kim Sơn thuộc huyện nào của Hải Phòng?", options: ["Kiến Thuỵ", "An Lão", "Thuỷ Nguyên", "Tiên Lãng"], correctIndex: 0 },
    { type: "mcq", question: "Ý nghĩa chính của lễ hội Vật cầu Kim Sơn là gì?", options: ["Cầu mưa thuận gió hoà, mùa màng tươi tốt", "Tưởng nhớ anh hùng dân tộc", "Kỷ niệm ngày giải phóng", "Mừng công trình mới"], correctIndex: 0 }
  ]
};
