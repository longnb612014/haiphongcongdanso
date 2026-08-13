// LỄ HỘI: Lễ hội Hoa Phượng Đỏ
// ⚠️ Nội dung do AI soạn thảo — vui lòng kiểm tra lại trước khi công bố chính thức.
export default {
  id: "hoa-phuong-do",
  name: "Lễ hội Hoa Phượng Đỏ",
  place: "Trung tâm thành phố Hải Phòng",
  timing: "Giữa tháng 5 dương lịch hằng năm",
  coords: { lat: 20.8571, lng: 106.6818 }, // đã đối chiếu lại theo OpenStreetMap
  photos: [
    "festivals/images/hoa-phuong-do/tải xuống.jfif",
    "festivals/images/hoa-phuong-do/tải xuống (1).jfif",
    "festivals/images/hoa-phuong-do/tải xuống (2).jfif"
  ],

  narration: {
    intro: "Lễ hội Hoa Phượng Đỏ là sự kiện văn hoá — du lịch lớn nhất trong năm của Hải Phòng, gắn liền với hình ảnh hoa phượng — biểu tượng của Thành phố Cảng.",
    points: [
      "Lễ hội thường được tổ chức vào giữa tháng 5, gắn với dịp kỷ niệm ngày giải phóng Hải Phòng (13/5/1955).",
      "Điểm nhấn của lễ hội là chương trình khai mạc quy mô lớn với diễu hành đường phố, biểu diễn nghệ thuật và bắn pháo hoa.",
      "Hoa phượng đỏ được chọn làm biểu tượng vì sắc đỏ rực rỡ nở rộ khắp các con đường Hải Phòng vào mùa hè.",
      "Lễ hội là dịp quảng bá hình ảnh, thu hút du khách trong nước và quốc tế đến với thành phố Cảng."
    ]
  },

  aiChat: [
    {
      ask: "Bạn có biết vì sao Hải Phòng lại chọn hoa phượng đỏ làm biểu tượng của thành phố không?",
      options: [
        { label: "Vì hoa phượng nở đỏ rực khắp phố mùa hè", reply: "Đúng vậy! Sắc đỏ rực rỡ của hoa phượng nở khắp các con đường Hải Phòng vào mùa hè đã trở thành hình ảnh không thể nhầm lẫn của thành phố." },
        { label: "Mình chưa biết, kể thêm đi!", reply: "Hải Phòng còn được gọi là \"Thành phố Hoa Phượng Đỏ\" — mỗi độ hè về, hoa phượng nở đỏ khắp phố phường, đẹp đến nỗi trở thành tên gọi thân thương của thành phố!" }
      ]
    },
    {
      ask: "Lễ hội Hoa Phượng Đỏ gắn với sự kiện lịch sử nào của Hải Phòng?",
      options: [
        { label: "Ngày giải phóng Hải Phòng (13/5/1955)", reply: "Chính xác! Lễ hội thường được tổ chức vào giữa tháng 5, gắn với dịp kỷ niệm ngày giải phóng Hải Phòng (13/5/1955)." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là ngày giải phóng Hải Phòng 13/5/1955 — một cột mốc lịch sử quan trọng được lễ hội tổ chức để kỷ niệm!" }
      ]
    },
    {
      ask: "Điểm nhấn của lễ hội Hoa Phượng Đỏ là gì?",
      options: [
        { label: "Chương trình khai mạc quy mô lớn", reply: "Đúng vậy! Điểm nhấn của lễ hội là chương trình khai mạc quy mô lớn với diễu hành đường phố, biểu diễn nghệ thuật và bắn pháo hoa." },
        { label: "Chưa biết, kể thêm đi!", reply: "Diễu hành đường phố, biểu diễn nghệ thuật và bắn pháo hoa tạo nên không khí lễ hội vô cùng rực rỡ và náo nhiệt!" }
      ]
    },
    {
      ask: "Bạn có muốn xem diễu hành đường phố hay pháo hoa trong lễ hội này hơn?",
      options: [
        { label: "Diễu hành đường phố", reply: "Diễu hành đường phố trong lễ hội rất sôi động, với nhiều màn trình diễn nghệ thuật đặc sắc thu hút đông đảo người xem!" },
        { label: "Pháo hoa", reply: "Màn bắn pháo hoa trong đêm khai mạc luôn là khoảnh khắc được mong chờ nhất, thắp sáng cả bầu trời thành phố Cảng!" }
      ]
    },
    {
      ask: "Lễ hội Hoa Phượng Đỏ mang lại lợi ích gì cho thành phố?",
      options: [
        { label: "Quảng bá hình ảnh, thu hút du lịch", reply: "Chính xác! Lễ hội là dịp quảng bá hình ảnh, thu hút du khách trong nước và quốc tế đến với thành phố Cảng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là cơ hội tuyệt vời để quảng bá vẻ đẹp và con người Hải Phòng đến bạn bè trong nước và quốc tế!" }
      ]
    },
    {
      ask: "Vì sao Hải Phòng còn được gọi là \"Thành phố Hoa Phượng Đỏ\"?",
      options: [
        { label: "Vì hoa phượng nở khắp nơi vào mùa hè", reply: "Đúng vậy! Sắc đỏ rực rỡ của hoa phượng nở rộ khắp các con đường Hải Phòng vào mùa hè đã trở thành biệt danh thân thương của thành phố." },
        { label: "Chưa biết, kể thêm đi!", reply: "Hoa phượng đỏ nở rực khắp phố phường mỗi độ hè về đã gắn liền với hình ảnh và tên gọi thân thương của thành phố Cảng!" }
      ]
    },
    {
      ask: "Lễ hội Hoa Phượng Đỏ được xem là sự kiện như thế nào trong năm của Hải Phòng?",
      options: [
        { label: "Sự kiện văn hoá — du lịch lớn nhất năm", reply: "Chính xác! Đây là sự kiện văn hoá — du lịch lớn nhất trong năm của Hải Phòng, gắn liền với hình ảnh hoa phượng — biểu tượng thành phố." },
        { label: "Chưa biết, kể thêm đi!", reply: "Lễ hội Hoa Phượng Đỏ là sự kiện văn hoá — du lịch được mong chờ nhất trong năm tại Hải Phòng!" }
      ]
    },
    {
      ask: "Nếu ghé Hải Phòng đúng mùa lễ hội, bạn nghĩ điều gì sẽ ấn tượng nhất?",
      options: [
        { label: "Sắc hoa phượng đỏ rực khắp phố", reply: "Chắc chắn luôn! Cả thành phố như khoác lên mình chiếc áo đỏ rực của hoa phượng, kết hợp cùng không khí lễ hội sôi động!" },
        { label: "Không khí lễ hội náo nhiệt", reply: "Đúng vậy! Diễu hành, biểu diễn nghệ thuật, pháo hoa... tất cả tạo nên không khí lễ hội vô cùng náo nhiệt và đáng nhớ!" }
      ]
    },
    {
      ask: "Lễ hội Hoa Phượng Đỏ được tổ chức ở khu vực nào của thành phố?",
      options: [
        { label: "Trung tâm thành phố Hải Phòng", reply: "Chính xác! Lễ hội được tổ chức tại trung tâm thành phố Hải Phòng, nơi có thể quy tụ đông đảo người dân và du khách tham gia." },
        { label: "Chưa biết, kể thêm đi!", reply: "Trung tâm thành phố Hải Phòng chính là nơi diễn ra các hoạt động chính của lễ hội, từ diễu hành đến bắn pháo hoa!" }
      ]
    },
    {
      ask: "Lễ hội Hoa Phượng Đỏ mang ý nghĩa gì đặc biệt đối với người dân Hải Phòng?",
      options: [
        { label: "Niềm tự hào về thành phố quê hương", reply: "Đúng vậy! Lễ hội là dịp để người dân Hải Phòng tự hào giới thiệu vẻ đẹp và bản sắc văn hoá của thành phố Cảng đến bạn bè khắp nơi." },
        { label: "Chưa nghĩ tới điều này", reply: "Đây là dịp để người Hải Phòng thể hiện niềm tự hào về thành phố hoa phượng đỏ xinh đẹp của mình!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Lễ hội Hoa Phượng Đỏ thường được tổ chức vào thời gian nào?", options: ["Giữa tháng 5 dương lịch", "Tháng Giêng âm lịch", "Tháng 8 âm lịch", "Tháng 12 dương lịch"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Hoa Phượng Đỏ gắn với sự kiện lịch sử nào của Hải Phòng?", options: ["Ngày giải phóng Hải Phòng (13/5/1955)", "Chiến thắng Bạch Đằng", "Ngày thành lập thành phố", "Kháng chiến chống Pháp"], correctIndex: 0 },
    { type: "mcq", question: "Loài hoa nào là biểu tượng của lễ hội và của thành phố Hải Phòng?", options: ["Hoa phượng đỏ", "Hoa sen", "Hoa đào", "Hoa ban"], correctIndex: 0 },
    { type: "mcq", question: "Hoạt động nào thường mở màn cho lễ hội Hoa Phượng Đỏ?", options: ["Diễu hành đường phố, khai mạc quy mô lớn", "Đua thuyền trên biển", "Chọi trâu", "Vật cầu"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Hoa Phượng Đỏ có ý nghĩa gì với thành phố?", options: ["Quảng bá hình ảnh, thu hút du lịch", "Chỉ mang tính nội bộ, không đón khách", "Chỉ dành cho học sinh", "Không tổ chức thường niên"], correctIndex: 0 }
  ]
};
