// ĐỊA DANH: Hồ Tam Bạc
export default {
  id: "ho-tam-bac",
  name: "Hồ Tam Bạc",
  category: "Địa lý",
  place: "Quận Hồng Bàng, Hải Phòng",
  coords: { lat: 20.8551, lng: 106.6746 }, // đã đối chiếu lại theo OpenStreetMap

  photos: {
    history: [
      "locations/images/ho-tam-bac/history-1.jfif",
      "locations/images/ho-tam-bac/history-2.jfif",
      "locations/images/ho-tam-bac/history-3.jfif"
    ],
    culture: []
  },

  narration: {
    history: {
      intro: "Hồ Tam Bạc gắn liền với quá trình hình thành và phát triển đô thị Hải Phòng, từng là một đoạn của dòng sông Tam Bạc chảy qua giữa lòng thành phố.",
      points: [
        "Tên gọi Tam Bạc bắt nguồn từ chính dòng sông Tam Bạc — một nhánh sông gắn bó với lịch sử khai phá vùng đất Hải Phòng.",
        "Qua quá trình đô thị hoá, một đoạn sông được cải tạo thành hồ nước, trở thành không gian xanh giữa trung tâm thành phố.",
        "Khu vực quanh hồ từng là nơi giao thương sầm uất từ thời Pháp thuộc, gắn với sự phát triển của thành phố Cảng.",
        "Ngày nay, hồ Tam Bạc là một trong những cảnh quan tiêu biểu, gắn liền với hình ảnh đô thị Hải Phòng hiện đại."
      ]
    },
    culture: {
      intro: "Ven hồ Tam Bạc là không gian sinh hoạt cộng đồng quen thuộc, gắn bó mật thiết với đời sống thường nhật của người dân thành phố.",
      points: [
        "Mỗi sáng sớm và chiều tối, người dân thường ra ven hồ để dạo bộ, tập thể dục, thư giãn sau ngày làm việc.",
        "Về đêm, mặt hồ lung linh ánh đèn thành phố, trở thành một trong những khung cảnh đẹp nhất Hải Phòng về đêm.",
        "Khu vực quanh hồ thường xuyên diễn ra các hoạt động văn hoá, nghệ thuật đường phố phục vụ người dân và du khách.",
        "Hồ Tam Bạc được xem là một trong những hình ảnh biểu tượng khi nhắc đến vẻ đẹp đô thị của thành phố Cảng."
      ]
    }
  },

  aiChat: [
    {
      ask: "Bạn có hay đi dạo quanh hồ nước nào ở trung tâm thành phố không?",
      options: [
        { label: "Có thể là Hồ Tam Bạc!", reply: "Đúng vậy! Hồ Tam Bạc là không gian quen thuộc để người dân Hải Phòng dạo bộ, tập thể dục mỗi sáng chiều." },
        { label: "Chưa biết, kể thêm đi!", reply: "Hồ Tam Bạc nằm ngay trung tâm thành phố, là nơi người dân thường ra dạo bộ, hóng mát mỗi ngày!" }
      ]
    },
    {
      ask: "Bạn có biết Hồ Tam Bạc đẹp nhất vào lúc nào trong ngày không?",
      options: [
        { label: "Chắc là buổi tối, có đèn", reply: "Chính xác! Về đêm, mặt hồ lung linh ánh đèn thành phố, tạo nên khung cảnh rất lãng mạn và hiện đại." },
        { label: "Buổi sáng sớm", reply: "Buổi sáng sớm hồ cũng rất đẹp và yên bình, nhưng về đêm mặt hồ lung linh ánh đèn mới thực sự là điểm nhấn của Hải Phòng đó!" }
      ]
    },
    {
      ask: "Bạn có biết tên gọi \"Tam Bạc\" bắt nguồn từ đâu không?",
      options: [
        { label: "Từ dòng sông Tam Bạc", reply: "Chính xác! Tên gọi Tam Bạc bắt nguồn từ chính dòng sông Tam Bạc — một nhánh sông gắn bó với lịch sử khai phá vùng đất Hải Phòng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Hồ Tam Bạc từng là một đoạn của dòng sông Tam Bạc — tên gọi được giữ nguyên cho đến ngày nay!" }
      ]
    },
    {
      ask: "Hồ Tam Bạc được hình thành như thế nào?",
      options: [
        { label: "Cải tạo từ một đoạn sông", reply: "Đúng vậy! Qua quá trình đô thị hoá, một đoạn sông được cải tạo thành hồ nước, trở thành không gian xanh giữa trung tâm thành phố." },
        { label: "Chưa biết, kể thêm đi!", reply: "Hồ được cải tạo từ một đoạn của dòng sông Tam Bạc trong quá trình đô thị hoá — trở thành không gian xanh quý giá giữa lòng thành phố!" }
      ]
    },
    {
      ask: "Khu vực quanh Hồ Tam Bạc từng có vai trò gì từ thời Pháp thuộc?",
      options: [
        { label: "Nơi giao thương sầm uất", reply: "Chính xác! Khu vực quanh hồ từng là nơi giao thương sầm uất từ thời Pháp thuộc, gắn với sự phát triển của thành phố Cảng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Từ thời Pháp thuộc, khu vực này đã là nơi giao thương nhộn nhịp, góp phần vào sự phát triển của thành phố Cảng!" }
      ]
    },
    {
      ask: "Người dân thường làm gì ở ven Hồ Tam Bạc mỗi sáng sớm và chiều tối?",
      options: [
        { label: "Dạo bộ, tập thể dục, thư giãn", reply: "Đúng vậy! Mỗi sáng sớm và chiều tối, người dân thường ra ven hồ để dạo bộ, tập thể dục, thư giãn sau ngày làm việc." },
        { label: "Chưa biết, kể thêm đi!", reply: "Ven hồ Tam Bạc luôn nhộn nhịp người dân dạo bộ, tập thể dục mỗi sáng chiều — một nét sinh hoạt quen thuộc của người Hải Phòng!" }
      ]
    },
    {
      ask: "Khu vực quanh hồ thường diễn ra hoạt động gì phục vụ người dân và du khách?",
      options: [
        { label: "Hoạt động văn hoá, nghệ thuật đường phố", reply: "Chính xác! Khu vực quanh hồ thường xuyên diễn ra các hoạt động văn hoá, nghệ thuật đường phố phục vụ người dân và du khách." },
        { label: "Chưa biết, kể thêm đi!", reply: "Các hoạt động văn hoá, nghệ thuật đường phố quanh hồ luôn thu hút đông đảo người dân và du khách tham gia!" }
      ]
    },
    {
      ask: "Vì sao Hồ Tam Bạc được xem là hình ảnh biểu tượng của Hải Phòng?",
      options: [
        { label: "Vì gắn với vẻ đẹp đô thị hiện đại", reply: "Đúng vậy! Hồ Tam Bạc được xem là một trong những hình ảnh biểu tượng khi nhắc đến vẻ đẹp đô thị của thành phố Cảng." },
        { label: "Chưa biết, kể thêm đi!", reply: "Vẻ đẹp đô thị hiện đại kết hợp không gian xanh khiến Hồ Tam Bạc trở thành hình ảnh biểu tượng của Hải Phòng!" }
      ]
    },
    {
      ask: "Hồ Tam Bạc đóng vai trò gì trong đời sống cộng đồng thành phố?",
      options: [
        { label: "Không gian sinh hoạt cộng đồng quen thuộc", reply: "Chính xác! Ven hồ Tam Bạc là không gian sinh hoạt cộng đồng quen thuộc, gắn bó mật thiết với đời sống thường nhật của người dân thành phố." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là không gian sinh hoạt cộng đồng gắn bó với đời sống hằng ngày của người Hải Phòng, từ dạo bộ đến các sự kiện văn hoá!" }
      ]
    },
    {
      ask: "Hồ Tam Bạc nằm ở vị trí nào của thành phố Hải Phòng?",
      options: [
        { label: "Trung tâm thành phố", reply: "Chính xác! Hồ Tam Bạc nằm ngay trung tâm thành phố Hải Phòng, rất thuận tiện để người dân ghé thăm mỗi ngày." },
        { label: "Chưa biết, kể thêm đi!", reply: "Vị trí trung tâm thành phố khiến Hồ Tam Bạc trở thành điểm dạo chơi quen thuộc của cả người dân lẫn du khách!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Hồ Tam Bạc nằm ở vị trí nào của thành phố Hải Phòng?", options: ["Trung tâm thành phố", "Ngoại thành xa trung tâm", "Trên đảo Cát Bà", "Ven biển Đồ Sơn"], correctIndex: 0 },
    { type: "mcq", question: "Hồ Tam Bạc từng là một phần của công trình tự nhiên nào?", options: ["Dòng sông Tam Bạc", "Một ngọn núi", "Một cánh rừng", "Một đầm lầy nước mặn"], correctIndex: 0 },
    { type: "mcq", question: "Người dân thành phố thường làm gì ở khu vực ven Hồ Tam Bạc?", options: ["Dạo bộ, tập thể dục, ngắm cảnh", "Trồng lúa nước", "Chăn nuôi gia súc", "Khai thác khoáng sản"], correctIndex: 0 },
    { type: "mcq", question: "Hồ Tam Bạc được xem là biểu tượng của điều gì?", options: ["Đô thị Hải Phòng hiện đại", "Làng nghề truyền thống", "Khu công nghiệp", "Vùng núi cao"], correctIndex: 0 },
    { type: "blur", question: "Hình mờ này gợi nhắc khung cảnh nào thường thấy quanh Hồ Tam Bạc vào buổi tối?", options: ["Mặt hồ lung linh ánh đèn thành phố", "Rừng núi tối om", "Sa mạc về đêm", "Cánh đồng lúa chín"], correctIndex: 0 },
    { type: "mcq", question: "Hồ Tam Bạc là loại không gian gì trong đô thị?", options: ["Không gian công cộng cho cộng đồng", "Khu vực quân sự cấm", "Khu công nghiệp nặng", "Khu chôn cất"], correctIndex: 0 }
  ]
};
