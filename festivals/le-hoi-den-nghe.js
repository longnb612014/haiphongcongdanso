// LỄ HỘI: Lễ hội Đền Nghè (thờ Nữ tướng Lê Chân)
export default {
  id: "le-hoi-den-nghe",
  name: "Lễ hội Đền Nghè",
  place: "Đền Nghè, quận Lê Chân, Hải Phòng",
  timing: "Tháng 2 (ngày sinh) và tháng 8 (ngày hoá) âm lịch hằng năm",
  coords: { lat: 20.8546, lng: 106.6803 }, // đã đối chiếu lại theo OpenStreetMap
  photos: [
    "festivals/images/le-hoi-den-nghe/tải xuống.jfif",
    "festivals/images/le-hoi-den-nghe/tải xuống (1).jfif",
    "festivals/images/le-hoi-den-nghe/tải xuống (2).jfif"
  ],

  narration: {
    intro: "Lễ hội Đền Nghè tưởng nhớ công lao nữ tướng Lê Chân — người khai lập vùng đất An Biên, tiền thân của thành phố Hải Phòng ngày nay.",
    points: [
      "Lễ hội được tổ chức 2 lần/năm: tháng Hai âm lịch (ngày sinh) và tháng Tám âm lịch (ngày hoá) của Nữ tướng Lê Chân.",
      "Nghi lễ rước kiệu, tế lễ được tổ chức trang trọng với sự tham gia đông đảo của người dân địa phương.",
      "Ngoài phần lễ, hội còn có nhiều trò chơi dân gian truyền thống thu hút người dân và du khách.",
      "Lễ hội thể hiện đạo lý \"uống nước nhớ nguồn\" của người Hải Phòng đối với vị nữ tướng có công khai đất, giữ dân."
    ]
  },

  aiChat: [
    {
      ask: "Bạn có biết vì sao lễ hội Đền Nghè lại tổ chức tới 2 lần trong năm không?",
      options: [
        { label: "Chắc là ngày sinh và ngày mất của bà", reply: "Chính xác! Tháng Hai âm lịch là ngày sinh, tháng Tám âm lịch là ngày hoá (ngày mất) của Nữ tướng Lê Chân — cả hai đều được tổ chức trang trọng để tưởng nhớ bà." },
        { label: "Chưa biết, kể thêm đi!", reply: "Lễ hội Đền Nghè tổ chức 2 lần: tháng Hai (ngày sinh) và tháng Tám (ngày hoá) âm lịch — đủ thấy người dân Hải Phòng trân trọng công lao của Nữ tướng Lê Chân đến nhường nào!" }
      ]
    },
    {
      ask: "Lễ hội Đền Nghè tưởng nhớ công lao gì của Nữ tướng Lê Chân?",
      options: [
        { label: "Khai lập vùng đất An Biên", reply: "Chính xác! Lễ hội Đền Nghè tưởng nhớ công lao nữ tướng Lê Chân — người khai lập vùng đất An Biên, tiền thân của thành phố Hải Phòng ngày nay." },
        { label: "Chưa biết, kể thêm đi!", reply: "Bà chính là người khai lập vùng đất An Biên — nền móng đầu tiên hình thành nên thành phố Hải Phòng ngày nay!" }
      ]
    },
    {
      ask: "Nghi lễ nào được tổ chức trang trọng trong lễ hội Đền Nghè?",
      options: [
        { label: "Rước kiệu, tế lễ", reply: "Đúng vậy! Nghi lễ rước kiệu, tế lễ được tổ chức trang trọng với sự tham gia đông đảo của người dân địa phương." },
        { label: "Chưa biết, kể thêm đi!", reply: "Rước kiệu và tế lễ là hai nghi thức trang trọng nhất, thu hút đông đảo người dân tham gia mỗi mùa lễ hội!" }
      ]
    },
    {
      ask: "Ngoài phần lễ, lễ hội Đền Nghè còn có hoạt động gì thú vị?",
      options: [
        { label: "Nhiều trò chơi dân gian truyền thống", reply: "Chính xác! Ngoài phần lễ, hội còn có nhiều trò chơi dân gian truyền thống thu hút người dân và du khách." },
        { label: "Chưa biết, kể thêm đi!", reply: "Các trò chơi dân gian truyền thống trong phần hội luôn tạo nên không khí vui tươi, náo nhiệt cho lễ hội!" }
      ]
    },
    {
      ask: "Lễ hội Đền Nghè thể hiện đạo lý truyền thống nào của người Việt?",
      options: [
        { label: "Uống nước nhớ nguồn", reply: "Đúng vậy! Lễ hội thể hiện đạo lý \"uống nước nhớ nguồn\" của người Hải Phòng đối với vị nữ tướng có công khai đất, giữ dân." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đây là dịp để người dân bày tỏ lòng biết ơn theo đạo lý \"uống nước nhớ nguồn\" đối với công lao của Nữ tướng Lê Chân!" }
      ]
    },
    {
      ask: "Nếu tham gia lễ hội Đền Nghè, bạn muốn xem rước kiệu hay chơi trò chơi dân gian trước?",
      options: [
        { label: "Xem rước kiệu", reply: "Lễ rước kiệu rất trang nghiêm và đẹp mắt, tái hiện không khí tôn vinh Nữ tướng Lê Chân một cách sống động!" },
        { label: "Chơi trò chơi dân gian", reply: "Các trò chơi dân gian trong lễ hội rất vui nhộn, là dịp để mọi lứa tuổi cùng tham gia, gắn kết cộng đồng!" }
      ]
    },
    {
      ask: "Đền Nghè — nơi diễn ra lễ hội — toạ lạc ở quận nào của Hải Phòng?",
      options: [
        { label: "Quận Lê Chân", reply: "Chính xác! Đền Nghè toạ lạc tại quận Lê Chân, Hải Phòng — quận được đặt tên theo chính vị nữ tướng này." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đó là quận Lê Chân — được đặt tên để tôn vinh công lao to lớn của Nữ tướng Lê Chân!" }
      ]
    },
    {
      ask: "Bạn nghĩ vì sao lễ hội Đền Nghè vẫn thu hút đông đảo người dân qua nhiều thế hệ?",
      options: [
        { label: "Vì lòng biết ơn với người có công khai đất", reply: "Rất đúng! Công lao khai khẩn đất đai, giữ dân của Lê Chân khiến hình ảnh bà luôn sống mãi trong lòng người Hải Phòng qua nhiều thế hệ." },
        { label: "Chưa nghĩ tới điều này", reply: "Sự trân trọng công lao của Nữ tướng Lê Chân đã trở thành truyền thống được gìn giữ qua bao thế hệ người Hải Phòng!" }
      ]
    },
    {
      ask: "Lễ hội Đền Nghè có sự tham gia của những ai?",
      options: [
        { label: "Đông đảo người dân địa phương", reply: "Chính xác! Nghi lễ được tổ chức trang trọng với sự tham gia đông đảo của người dân địa phương, thể hiện tinh thần cộng đồng gắn kết." },
        { label: "Chưa biết, kể thêm đi!", reply: "Đông đảo người dân địa phương cùng tham gia lễ hội, tạo nên không khí trang trọng và ấm cúng!" }
      ]
    },
    {
      ask: "Lễ hội Đền Nghè diễn ra vào những tháng nào trong năm (âm lịch)?",
      options: [
        { label: "Tháng 2 và tháng 8", reply: "Chính xác! Lễ hội được tổ chức 2 lần/năm: tháng Hai âm lịch (ngày sinh) và tháng Tám âm lịch (ngày hoá) của Nữ tướng Lê Chân." },
        { label: "Chưa biết, kể thêm đi!", reply: "Tháng 2 và tháng 8 âm lịch chính là hai dịp lễ hội quan trọng nhất tại Đền Nghè mỗi năm!" }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Lễ hội Đền Nghè tưởng nhớ ai?", options: ["Nữ tướng Lê Chân", "Ngô Quyền", "Trần Hưng Đạo", "Lý Thường Kiệt"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Đền Nghè được tổ chức mấy lần trong năm?", options: ["2 lần (tháng 2 và tháng 8 âm lịch)", "1 lần duy nhất", "4 lần theo mùa", "Mỗi tháng 1 lần"], correctIndex: 0 },
    { type: "mcq", question: "Nghi lễ trung tâm của lễ hội Đền Nghè là gì?", options: ["Rước kiệu, tế lễ", "Chọi trâu", "Vật cầu", "Đua thuyền"], correctIndex: 0 },
    { type: "mcq", question: "Đền Nghè toạ lạc ở quận nào của Hải Phòng?", options: ["Lê Chân", "Hồng Bàng", "Ngô Quyền", "Hải An"], correctIndex: 0 },
    { type: "mcq", question: "Lễ hội Đền Nghè thể hiện đạo lý truyền thống nào?", options: ["Uống nước nhớ nguồn", "Lá lành đùm lá rách", "Tôn sư trọng đạo", "Kính lão đắc thọ"], correctIndex: 0 }
  ]
};
