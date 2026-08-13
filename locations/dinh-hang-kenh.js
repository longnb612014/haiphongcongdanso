// ĐỊA DANH: Đình Hàng Kênh
export default {
  id: "dinh-hang-kenh",
  name: "Đình Hàng Kênh",
  category: "Văn hoá",
  place: "Quận Lê Chân, Hải Phòng",
  coords: { lat: 20.8463, lng: 106.6844 }, // đã đối chiếu lại theo OpenStreetMap

  photos: {
    history: [
      "locations/images/dinh-hang-kenh/history-2.jfif",
      "locations/images/dinh-hang-kenh/history-3.jfif",
      "locations/images/dinh-hang-kenh/history-4.jfif",
      "locations/images/dinh-hang-kenh/history-5.jfif"
    ],
    culture: []
  },

  narration: {
    history: {
      intro: "Đình Hàng Kênh là một trong những ngôi đình cổ tiêu biểu của Hải Phòng, được xây dựng để thờ phụng Ngô Quyền — vị anh hùng dân tộc đã làm nên chiến thắng Bạch Đằng lịch sử năm 938.",
      points: [
        "Đình được xây dựng vào cuối thế kỷ XVIII, mang đậm dấu ấn kiến trúc đình làng Bắc Bộ truyền thống.",
        "Trải qua nhiều thế kỷ, đình vẫn giữ được gần như nguyên vẹn kết cấu gỗ cùng nghệ thuật chạm khắc tinh xảo.",
        "Đình Hàng Kênh đã được xếp hạng Di tích lịch sử — văn hoá cấp quốc gia.",
        "Đây là một trong những công trình đình làng có quy mô lớn và giá trị nghệ thuật cao nhất khu vực đồng bằng Bắc Bộ."
      ]
    },
    culture: {
      intro: "Đình Hàng Kênh không chỉ là nơi thờ tự mà còn là trung tâm sinh hoạt cộng đồng gắn bó mật thiết với đời sống văn hoá của người dân địa phương.",
      points: [
        "Nghệ thuật chạm khắc gỗ tại đình với các hoạ tiết rồng, phượng, hoa lá được đánh giá là đỉnh cao của nghệ thuật điêu khắc dân gian.",
        "Hằng năm, đình tổ chức lễ hội truyền thống để tưởng nhớ công lao Ngô Quyền, thu hút đông đảo người dân tham gia.",
        "Tín ngưỡng thờ Thành hoàng làng tại đình thể hiện đạo lý \"uống nước nhớ nguồn\" của dân tộc.",
        "Đình là điểm đến quen thuộc của các nhà nghiên cứu văn hoá, kiến trúc trong và ngoài nước."
      ]
    }
  },

  aiChat: [
    {
      ask: "Bạn có biết Đình Hàng Kênh nổi tiếng nhất vì điều gì không?",
      options: [
        { label: "Nghệ thuật chạm khắc gỗ", reply: "Đúng vậy! Các vì kèo, cột gỗ ở đây được chạm khắc vô cùng tinh xảo, là niềm tự hào của nghệ nhân xưa." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đình nổi tiếng với nghệ thuật chạm khắc gỗ tinh xảo trên cột, kèo — một trong những công trình đình làng đẹp nhất Hải Phòng!" }
      ]
    },
    {
      ask: "Bạn có muốn biết đình thờ ai không?",
      options: [
        { label: "Có, đình thờ ai vậy?", reply: "Đình Hàng Kênh thờ Ngô Quyền — vị anh hùng đã đánh tan quân Nam Hán trên sông Bạch Đằng năm 938 đó!" },
        { label: "Chắc là thờ Thành hoàng làng", reply: "Đúng một phần! Ở đây, Thành hoàng làng được thờ chính là Ngô Quyền — vị anh hùng dân tộc lừng lẫy." }
      ]
    },
    {
      ask: "Bạn có biết Đình Hàng Kênh được xây dựng vào thời kỳ nào không?",
      options: [
        { label: "Cuối thế kỷ XVIII", reply: "Chính xác! Đình được xây dựng vào cuối thế kỷ XVIII, mang đậm dấu ấn kiến trúc đình làng Bắc Bộ truyền thống." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đình Hàng Kênh có từ cuối thế kỷ XVIII — trải qua hàng trăm năm vẫn giữ được nét kiến trúc cổ kính!" }
      ]
    },
    {
      ask: "Điều gì đặc biệt về kết cấu của đình sau nhiều thế kỷ tồn tại?",
      options: [
        { label: "Vẫn giữ gần như nguyên vẹn kết cấu gỗ", reply: "Đúng vậy! Trải qua nhiều thế kỷ, đình vẫn giữ được gần như nguyên vẹn kết cấu gỗ cùng nghệ thuật chạm khắc tinh xảo." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đình Hàng Kênh là một trong số ít công trình còn giữ được kết cấu gỗ gần như nguyên vẹn sau hàng trăm năm!" }
      ]
    },
    {
      ask: "Hoạ tiết chạm khắc nào thường xuất hiện tại Đình Hàng Kênh?",
      options: [
        { label: "Rồng, phượng, hoa lá", reply: "Chính xác! Nghệ thuật chạm khắc gỗ tại đình với các hoạ tiết rồng, phượng, hoa lá được đánh giá là đỉnh cao của nghệ thuật điêu khắc dân gian." },
        { label: "Chưa biết, kể thêm đi!", reply: "Các hoạ tiết rồng, phượng, hoa lá được chạm khắc tinh xảo trên cột, kèo — thể hiện tay nghề bậc thầy của nghệ nhân xưa!" }
      ]
    },
    {
      ask: "Hằng năm, đình tổ chức lễ hội gì để tưởng nhớ Ngô Quyền?",
      options: [
        { label: "Lễ hội truyền thống", reply: "Đúng vậy! Hằng năm, đình tổ chức lễ hội truyền thống để tưởng nhớ công lao Ngô Quyền, thu hút đông đảo người dân tham gia." },
        { label: "Chưa biết, kể thêm đi!", reply: "Lễ hội truyền thống tại đình thu hút rất đông người dân tham gia, cùng tưởng nhớ công lao của Ngô Quyền!" }
      ]
    },
    {
      ask: "Tín ngưỡng thờ Thành hoàng làng thể hiện đạo lý gì của dân tộc ta?",
      options: [
        { label: "Uống nước nhớ nguồn", reply: "Chính xác! Tín ngưỡng thờ Thành hoàng làng tại đình thể hiện đạo lý \"uống nước nhớ nguồn\" của dân tộc." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là đạo lý \"uống nước nhớ nguồn\" — tưởng nhớ công lao của các bậc tiền nhân đã có công với đất nước!" }
      ]
    },
    {
      ask: "Đình Hàng Kênh thu hút đối tượng nào đến nghiên cứu, tìm hiểu?",
      options: [
        { label: "Nhà nghiên cứu văn hoá, kiến trúc", reply: "Đúng vậy! Đình là điểm đến quen thuộc của các nhà nghiên cứu văn hoá, kiến trúc trong và ngoài nước." },
        { label: "Chưa biết, kể thêm đi!", reply: "Nhiều nhà nghiên cứu văn hoá, kiến trúc trong và ngoài nước đã đến Đình Hàng Kênh để tìm hiểu giá trị nghệ thuật độc đáo này!" }
      ]
    },
    {
      ask: "Vì sao Đình Hàng Kênh được xem là một trong những công trình đình làng giá trị nhất vùng đồng bằng Bắc Bộ?",
      options: [
        { label: "Vì quy mô lớn, giá trị nghệ thuật cao", reply: "Chính xác! Đây là một trong những công trình đình làng có quy mô lớn và giá trị nghệ thuật cao nhất khu vực đồng bằng Bắc Bộ." },
        { label: "Chưa biết, kể thêm đi!", reply: "Quy mô lớn cùng nghệ thuật chạm khắc tinh xảo đã khiến Đình Hàng Kênh trở thành niềm tự hào của kiến trúc đình làng Bắc Bộ!" }
      ]
    },
    {
      ask: "Đình Hàng Kênh mang phong cách kiến trúc nào?",
      options: [
        { label: "Đình làng Bắc Bộ truyền thống", reply: "Chính xác! Đình mang đậm dấu ấn kiến trúc đình làng Bắc Bộ truyền thống, với kết cấu gỗ và mái ngói cong đặc trưng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Kiến trúc đình làng Bắc Bộ truyền thống thể hiện rõ nét qua từng chi tiết chạm khắc và kết cấu gỗ của Đình Hàng Kênh!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Đình Hàng Kênh thờ vị anh hùng dân tộc nào?", options: ["Ngô Quyền", "Lê Chân", "Trần Hưng Đạo", "Lý Thường Kiệt"], correctIndex: 0 },
    { type: "mcq", question: "Đình Hàng Kênh nổi bật với loại hình nghệ thuật nào?", options: ["Chạm khắc gỗ", "Tranh sơn mài", "Gốm sứ", "Thêu ren"], correctIndex: 0 },
    { type: "mcq", question: "Đình Hàng Kênh mang phong cách kiến trúc nào?", options: ["Đình làng Bắc Bộ truyền thống", "Kiến trúc Pháp", "Kiến trúc hiện đại", "Kiến trúc Chăm"], correctIndex: 0 },
    { type: "mcq", question: "Đình Hàng Kênh được xếp hạng là loại di tích gì?", options: ["Di tích lịch sử - văn hoá quốc gia", "Di sản thiên nhiên thế giới", "Di sản tư liệu", "Công viên địa chất"], correctIndex: 0 },
    { type: "blur", question: "Hình mờ này gợi nhắc chi tiết kiến trúc nào thường thấy ở đình làng như Đình Hàng Kênh?", options: ["Mái ngói cong, cột gỗ chạm khắc", "Tháp chuông cao", "Mái vòm kính", "Tường thành đá"], correctIndex: 0 },
    { type: "mcq", question: "Tín ngưỡng chính được thờ phụng tại các đình làng như Đình Hàng Kênh là gì?", options: ["Thành hoàng làng", "Thần tài", "Táo quân", "Thổ công"], correctIndex: 0 }
  ]
};
