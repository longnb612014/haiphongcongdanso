// LỄ HỘI: Lễ hội Đình Hàng Kênh (thờ Ngô Quyền)
// ⚠️ Ngày âm lịch cụ thể do AI soạn thảo — vui lòng kiểm tra lại trước khi công bố chính thức.
export default {
  id: "le-hoi-dinh-hang-kenh",
  name: "Lễ hội Đình Hàng Kênh",
  place: "Đình Hàng Kênh, quận Lê Chân, Hải Phòng",
  timing: "17-18 tháng Giêng âm lịch hằng năm",
  coords: { lat: 20.8463, lng: 106.6844 }, // đã đối chiếu lại theo OpenStreetMap
  photos: [
    "festivals/images/le-hoi-dinh-hang-kenh/tải xuống.jfif",
    "festivals/images/le-hoi-dinh-hang-kenh/tải xuống (1).jfif",
    "festivals/images/le-hoi-dinh-hang-kenh/tải xuống (2).jfif"
  ],

  narration: {
    intro: "Lễ hội Đình Hàng Kênh tưởng nhớ công lao Ngô Quyền, gắn liền với ngôi đình cổ nổi tiếng bởi nghệ thuật chạm khắc gỗ tinh xảo bậc nhất Hải Phòng.",
    points: [
      "Lễ hội có nghi thức tế lễ trang trọng cùng lễ rước truyền thống quanh khu vực đình.",
      "Nghệ thuật chạm khắc gỗ với hoạ tiết rồng, phượng tại đình được nhiều nghệ nhân, du khách đến chiêm ngưỡng dịp lễ hội.",
      "Tín ngưỡng thờ Thành hoàng làng tại đình thể hiện đạo lý \"uống nước nhớ nguồn\" của dân tộc.",
      "Đây là dịp sinh hoạt văn hoá cộng đồng quan trọng của người dân quận Lê Chân."
    ]
  },

  aiChat: [
    {
      ask: "Nếu ghé lễ hội Đình Hàng Kênh, bạn muốn ngắm gì nhất?",
      options: [
        { label: "Nghệ thuật chạm khắc gỗ", reply: "Lựa chọn tuyệt vời! Các hoạ tiết rồng, phượng chạm khắc tinh xảo trên cột, kèo của đình được xem là đỉnh cao nghệ thuật điêu khắc dân gian Bắc Bộ." },
        { label: "Lễ rước truyền thống", reply: "Lễ rước quanh khu vực đình rất trang trọng, tái hiện không khí tưởng nhớ Ngô Quyền — vị anh hùng đã đánh tan quân Nam Hán trên sông Bạch Đằng!" }
      ]
    },
    {
      ask: "Lễ hội Đình Hàng Kênh có những nghi thức nào diễn ra quanh khu vực đình?",
      options: [
        { label: "Tế lễ trang trọng và lễ rước truyền thống", reply: "Chính xác! Lễ hội có nghi thức tế lễ trang trọng cùng lễ rước truyền thống quanh khu vực đình." },
        { label: "Chưa biết, kể thêm đi!", reply: "Tế lễ và rước kiệu truyền thống là hai nghi thức chính, thu hút đông đảo người dân tham gia mỗi mùa lễ hội!" }
      ]
    },
    {
      ask: "Ai thường đến chiêm ngưỡng nghệ thuật chạm khắc gỗ tại lễ hội Đình Hàng Kênh?",
      options: [
        { label: "Nghệ nhân và du khách", reply: "Đúng vậy! Nghệ thuật chạm khắc gỗ với hoạ tiết rồng, phượng tại đình được nhiều nghệ nhân, du khách đến chiêm ngưỡng dịp lễ hội." },
        { label: "Chưa biết, kể thêm đi!", reply: "Rất nhiều nghệ nhân và du khách đến chiêm ngưỡng những hoạ tiết chạm khắc tinh xảo mỗi dịp lễ hội!" }
      ]
    },
    {
      ask: "Tín ngưỡng thờ Thành hoàng làng tại Đình Hàng Kênh thể hiện đạo lý gì?",
      options: [
        { label: "Uống nước nhớ nguồn", reply: "Chính xác! Tín ngưỡng thờ Thành hoàng làng tại đình thể hiện đạo lý \"uống nước nhớ nguồn\" của dân tộc." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là đạo lý \"uống nước nhớ nguồn\" — tưởng nhớ công lao của các bậc tiền nhân có công với dân, với nước!" }
      ]
    },
    {
      ask: "Lễ hội Đình Hàng Kênh có vai trò gì với người dân quận Lê Chân?",
      options: [
        { label: "Dịp sinh hoạt văn hoá cộng đồng quan trọng", reply: "Đúng vậy! Đây là dịp sinh hoạt văn hoá cộng đồng quan trọng của người dân quận Lê Chân." },
        { label: "Chưa biết, kể thêm đi!", reply: "Lễ hội là dịp để cộng đồng quận Lê Chân gắn kết, cùng nhau sinh hoạt văn hoá và tưởng nhớ Ngô Quyền!" }
      ]
    },
    {
      ask: "Lễ hội Đình Hàng Kênh diễn ra vào ngày nào trong năm (âm lịch)?",
      options: [
        { label: "17-18 tháng Giêng", reply: "Chính xác! Lễ hội diễn ra từ ngày 17 đến 18 tháng Giêng âm lịch hằng năm, trong không khí đầu xuân." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là 17-18 tháng Giêng âm lịch — một trong những lễ hội đầu xuân quan trọng của quận Lê Chân!" }
      ]
    },
    {
      ask: "Vì sao Đình Hàng Kênh nổi tiếng bậc nhất Hải Phòng về nghệ thuật kiến trúc?",
      options: [
        { label: "Vì nghệ thuật chạm khắc gỗ tinh xảo", reply: "Đúng vậy! Đình gắn liền với nghệ thuật chạm khắc gỗ tinh xảo bậc nhất Hải Phòng, là niềm tự hào của các nghệ nhân xưa." },
        { label: "Chưa biết, kể thêm đi!", reply: "Nghệ thuật chạm khắc gỗ tinh xảo với hoạ tiết rồng, phượng khiến Đình Hàng Kênh trở thành công trình kiến trúc đặc sắc bậc nhất thành phố!" }
      ]
    },
    {
      ask: "Lễ hội Đình Hàng Kênh tưởng nhớ ai?",
      options: [
        { label: "Ngô Quyền", reply: "Chính xác! Lễ hội Đình Hàng Kênh tưởng nhớ công lao Ngô Quyền, vị anh hùng dân tộc làm nên chiến thắng Bạch Đằng năm 938." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là lễ hội tưởng nhớ Ngô Quyền — người anh hùng đã chấm dứt hơn 1.000 năm Bắc thuộc cho dân tộc ta!" }
      ]
    },
    {
      ask: "Đình Hàng Kênh nổi tiếng với loại hình nghệ thuật nào?",
      options: [
        { label: "Chạm khắc gỗ", reply: "Chính xác! Đình Hàng Kênh nổi bật với nghệ thuật chạm khắc gỗ tinh xảo trên cột, kèo, được xem là đỉnh cao điêu khắc dân gian." },
        { label: "Chưa biết, kể thêm đi!", reply: "Nghệ thuật chạm khắc gỗ chính là niềm tự hào lớn nhất của Đình Hàng Kênh, thu hút rất đông du khách đến chiêm ngưỡng!" }
      ]
    },
    {
      ask: "Đình Hàng Kênh nằm ở quận nào của Hải Phòng?",
      options: [
        { label: "Quận Lê Chân", reply: "Chính xác! Đình Hàng Kênh toạ lạc tại quận Lê Chân, Hải Phòng — nơi diễn ra lễ hội tưởng nhớ Ngô Quyền hằng năm." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là quận Lê Chân — nơi lưu giữ ngôi đình cổ với nghệ thuật chạm khắc gỗ đặc sắc bậc nhất Hải Phòng!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Lễ hội Đình Hàng Kênh tưởng nhớ vị anh hùng dân tộc nào?", options: ["Ngô Quyền", "Lê Chân", "Trần Hưng Đạo", "Lý Thường Kiệt"], correctIndex: 0 },
    { type: "mcq", question: "Đình Hàng Kênh nổi tiếng với loại hình nghệ thuật nào?", options: ["Chạm khắc gỗ", "Tranh sơn mài", "Gốm sứ", "Thêu ren"], correctIndex: 0 },
    { type: "mcq", question: "Đình Hàng Kênh nằm ở quận nào?", options: ["Lê Chân", "Hồng Bàng", "Ngô Quyền", "Hải An"], correctIndex: 0 },
    { type: "mcq", question: "Tín ngưỡng chính được thờ tại đình làng như Đình Hàng Kênh là gì?", options: ["Thành hoàng làng", "Thần tài", "Táo quân", "Thổ công"], correctIndex: 0 },
    { type: "mcq", question: "Hoạ tiết chạm khắc đặc trưng tại Đình Hàng Kênh là gì?", options: ["Rồng, phượng", "Hoa sen cách điệu", "Chim lạc", "Mặt trời"], correctIndex: 0 }
  ]
};
