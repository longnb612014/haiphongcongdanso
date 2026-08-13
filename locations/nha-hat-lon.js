// ĐỊA DANH: Nhà hát lớn Hải Phòng
export default {
  id: "nha-hat-lon",
  name: "Nhà hát lớn Hải Phòng",
  category: "Văn hoá",
  place: "Quận Hồng Bàng, Hải Phòng",
  coords: { lat: 20.8571, lng: 106.6818 }, // đã đối chiếu lại theo OpenStreetMap

  photos: {
    history: [
      "locations/images/nha-hat-lon/history-1.jfif",
      "locations/images/nha-hat-lon/history-2.jfif",
      "locations/images/nha-hat-lon/history-3.jfif",
      "locations/images/nha-hat-lon/history-4.jfif"
    ],
    culture: []
  },

  narration: {
    history: {
      intro: "Nhà hát lớn Hải Phòng là công trình kiến trúc Pháp cổ được xây dựng vào đầu thế kỷ XX, một trong ba nhà hát lớn tiêu biểu nhất thời Pháp thuộc tại Việt Nam.",
      points: [
        "Công trình được khởi công xây dựng từ năm 1904 và hoàn thành vào năm 1912 theo phong cách kiến trúc Pháp cổ điển.",
        "Cùng với Nhà hát lớn Hà Nội và Nhà hát Thành phố Hồ Chí Minh, đây là ba công trình nhà hát tiêu biểu thời Pháp thuộc còn tồn tại đến ngày nay.",
        "Trải qua hơn 100 năm lịch sử, nhà hát vẫn giữ được nét kiến trúc nguyên bản qua nhiều lần trùng tu, tôn tạo.",
        "Đây từng là nơi diễn ra nhiều sự kiện chính trị quan trọng của thành phố trong thời kỳ đầu cách mạng."
      ]
    },
    culture: {
      intro: "Nhà hát lớn Hải Phòng là trung tâm sinh hoạt văn hoá, nghệ thuật sôi động bậc nhất của thành phố Cảng.",
      points: [
        "Nơi đây thường xuyên tổ chức các buổi hoà nhạc, biểu diễn nghệ thuật, kịch nói phục vụ nhu cầu thưởng thức văn hoá của người dân.",
        "Mặt tiền nhà hát hướng ra dải vườn hoa trung tâm thành phố, trở thành điểm check-in quen thuộc của người dân và du khách.",
        "Công trình được xem là biểu tượng kiến trúc, gắn liền với hình ảnh và ký ức của nhiều thế hệ người Hải Phòng.",
        "Vào các dịp lễ lớn, khu vực quanh nhà hát thường được trang hoàng rực rỡ, thu hút đông đảo người dân đến vui chơi."
      ]
    }
  },

  aiChat: [
    {
      ask: "Bạn đoán xem Nhà hát lớn Hải Phòng được xây dựng vào khoảng thời gian nào?",
      options: [
        { label: "Đầu thế kỷ XX, thời Pháp thuộc", reply: "Chính xác! Công trình được người Pháp xây dựng đầu thế kỷ XX, mang đậm phong cách kiến trúc châu Âu." },
        { label: "Mình đoán là gần đây thôi", reply: "Thực ra công trình đã hơn 100 năm tuổi rồi đó — được xây từ đầu thế kỷ XX thời Pháp thuộc!" }
      ]
    },
    {
      ask: "Theo bạn, vì sao thành phố vẫn luôn giữ gìn công trình cổ này?",
      options: [
        { label: "Vì đó là biểu tượng kiến trúc của thành phố", reply: "Đúng vậy! Nhà hát lớn là một trong những biểu tượng đẹp nhất của Hải Phòng, gắn liền với ký ức nhiều thế hệ." },
        { label: "Vì nó vẫn được dùng để biểu diễn", reply: "Công trình vẫn hoạt động sôi nổi với các sự kiện văn hoá — vừa là di sản, vừa là không gian sống động của thành phố!" }
      ]
    },
    {
      ask: "Bạn có biết công trình được khởi công và hoàn thành vào năm nào không?",
      options: [
        { label: "Khởi công 1904, hoàn thành 1912", reply: "Chính xác! Nhà hát lớn Hải Phòng được khởi công từ năm 1904 và hoàn thành vào năm 1912 theo phong cách kiến trúc Pháp cổ điển." },
        { label: "Chưa biết, kể thêm đi!", reply: "Công trình mất khoảng 8 năm xây dựng, từ 1904 đến 1912 — một khoảng thời gian khá dài để hoàn thiện từng chi tiết kiến trúc tinh xảo!" }
      ]
    },
    {
      ask: "Bạn có biết 2 nhà hát nào khác cùng thời với Nhà hát lớn Hải Phòng không?",
      options: [
        { label: "Nhà hát lớn Hà Nội và TP.HCM", reply: "Đúng vậy! Ba nhà hát này là những công trình nhà hát tiêu biểu nhất thời Pháp thuộc còn tồn tại đến ngày nay ở Việt Nam." },
        { label: "Chưa biết, kể thêm đi!", reply: "Cùng với Nhà hát lớn Hà Nội và Nhà hát Thành phố Hồ Chí Minh, đây là bộ ba công trình nhà hát Pháp cổ tiêu biểu nhất Việt Nam!" }
      ]
    },
    {
      ask: "Nhà hát lớn Hải Phòng từng là nơi diễn ra sự kiện gì quan trọng trong lịch sử?",
      options: [
        { label: "Sự kiện chính trị thời kỳ đầu cách mạng", reply: "Chính xác! Đây từng là nơi diễn ra nhiều sự kiện chính trị quan trọng của thành phố trong thời kỳ đầu cách mạng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Nhà hát lớn không chỉ là nơi biểu diễn nghệ thuật mà còn từng chứng kiến nhiều sự kiện chính trị quan trọng của Hải Phòng thời kỳ đầu cách mạng!" }
      ]
    },
    {
      ask: "Mặt tiền Nhà hát lớn hướng ra không gian nào của thành phố?",
      options: [
        { label: "Dải vườn hoa trung tâm", reply: "Đúng vậy! Mặt tiền nhà hát hướng ra dải vườn hoa trung tâm thành phố, trở thành điểm check-in quen thuộc của người dân và du khách." },
        { label: "Chưa để ý, kể thêm đi!", reply: "Nhà hát lớn hướng ra dải vườn hoa trung tâm — một trong những góc đẹp nhất để chụp ảnh ở Hải Phòng!" }
      ]
    },
    {
      ask: "Nhà hát lớn thường tổ chức những loại hình sự kiện nào?",
      options: [
        { label: "Hoà nhạc, biểu diễn nghệ thuật, kịch nói", reply: "Chính xác! Nơi đây thường xuyên tổ chức các buổi hoà nhạc, biểu diễn nghệ thuật, kịch nói phục vụ nhu cầu thưởng thức văn hoá của người dân." },
        { label: "Chưa biết, kể thêm đi!", reply: "Từ hoà nhạc đến kịch nói, Nhà hát lớn luôn sôi động với các sự kiện văn hoá nghệ thuật quanh năm!" }
      ]
    },
    {
      ask: "Vào các dịp lễ lớn, khu vực quanh Nhà hát lớn thường như thế nào?",
      options: [
        { label: "Được trang hoàng rực rỡ, đông vui", reply: "Đúng vậy! Vào các dịp lễ lớn, khu vực quanh nhà hát thường được trang hoàng rực rỡ, thu hút đông đảo người dân đến vui chơi." },
        { label: "Chưa từng thấy, kể thêm đi!", reply: "Không khí lễ hội quanh Nhà hát lớn rất náo nhiệt — đèn hoa rực rỡ, thu hút cả người dân lẫn du khách đến tham quan, chụp ảnh!" }
      ]
    },
    {
      ask: "Sau hơn 100 năm, vì sao Nhà hát lớn vẫn giữ được kiến trúc nguyên bản?",
      options: [
        { label: "Nhờ trải qua nhiều lần trùng tu, tôn tạo", reply: "Chính xác! Trải qua hơn 100 năm lịch sử, nhà hát vẫn giữ được nét kiến trúc nguyên bản nhờ nhiều lần trùng tu, tôn tạo cẩn thận." },
        { label: "Chưa biết, kể thêm đi!", reply: "Công trình đã được trùng tu, tôn tạo nhiều lần để giữ nguyên vẹn giá trị kiến trúc Pháp cổ điển suốt hơn một thế kỷ qua!" }
      ]
    },
    {
      ask: "Nhà hát lớn Hải Phòng được xây dựng theo phong cách kiến trúc nào?",
      options: [
        { label: "Kiến trúc Pháp cổ điển", reply: "Chính xác! Đây là công trình kiến trúc Pháp cổ được xây dựng vào đầu thế kỷ XX, mang đậm phong cách kiến trúc Pháp cổ điển." },
        { label: "Chưa biết, kể thêm đi!", reply: "Phong cách kiến trúc Pháp cổ điển với những cột trụ, mái vòm tinh tế khiến công trình trở nên vô cùng ấn tượng!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Nhà hát lớn Hải Phòng được xây dựng theo phong cách kiến trúc nào?", options: ["Kiến trúc Trung Hoa", "Kiến trúc Pháp", "Kiến trúc hiện đại", "Kiến trúc Nhật Bản"], correctIndex: 1 },
    { type: "mcq", question: "Nhà hát lớn Hải Phòng được xây dựng vào khoảng thời gian nào?", options: ["Đầu thế kỷ XX", "Giữa thế kỷ XIX", "Cuối thế kỷ XX", "Đầu thế kỷ XXI"], correctIndex: 0 },
    { type: "mcq", question: "Nhà hát lớn Hải Phòng là 1 trong 3 nhà hát lớn tiêu biểu thời Pháp thuộc tại Việt Nam, cùng với 2 thành phố nào?", options: ["Hà Nội và Thành phố Hồ Chí Minh", "Huế và Đà Nẵng", "Nam Định và Hải Dương", "Cần Thơ và Vũng Tàu"], correctIndex: 0 },
    { type: "mcq", question: "Nhà hát lớn Hải Phòng toạ lạc ở đâu trong thành phố?", options: ["Trung tâm thành phố, gần dải vườn hoa", "Ngoại thành, gần sân bay", "Ven biển Đồ Sơn", "Trên đảo Cát Bà"], correctIndex: 0 },
    { type: "blur", question: "Hình mờ này minh hoạ đặc điểm kiến trúc nào của Nhà hát lớn?", options: ["Mặt tiền có cột và mái vòm kiểu châu Âu", "Mái ngói cong kiểu Á Đông", "Tường kính hiện đại", "Kiến trúc nhà sàn"], correctIndex: 0 },
    { type: "mcq", question: "Nhà hát lớn Hải Phòng thường được dùng để tổ chức loại hình sự kiện nào?", options: ["Hoà nhạc, kịch nói, sự kiện văn hoá lớn", "Thi đấu thể thao", "Hội chợ nông sản", "Triển lãm ô tô"], correctIndex: 0 }
  ]
};
