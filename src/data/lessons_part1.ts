import { Lesson } from '../types';

export const LESSONS_PART_1: Lesson[] = [
  // =========================================================================
  // BÀI 1: HỆ ĐIỀU HÀNH
  // =========================================================================
  {
    id: 1,
    topicId: 1,
    lessonNumber: 1,
    title: 'Hệ điều hành',
    pageRange: 'Trang 5 - 9',
    objectives: [
      'Trình bày được sơ lược lịch sử phát triển của các hệ điều hành thông dụng cho máy tính cá nhân (PC).',
      'Chỉ ra được 3 đặc trưng cơ bản của hệ điều hành cho thiết bị di động.',
      'Trình bày khái quát và phân tích mối quan hệ giữa phần cứng, hệ điều hành và phần mềm ứng dụng.',
      'Phân biệt được trường hợp thiết bị xử lý thông tin đơn năng (không cần HĐH) và thiết bị đa năng (bắt buộc cần HĐH).',
    ],
    starter: {
      situation: 'Khi chưa có hệ điều hành, con người phải trực tiếp can thiệp vào hầu hết quá trình hoạt động của phần cứng máy tính nên hiệu quả khai thác rất thấp và phức tạp.',
      question: 'Em hãy chỉ ra một số công việc thiết yếu mà hệ điều hành đảm nhận thay cho con người khi vận hành máy tính?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Lịch sử phát triển và 5 nhóm chức năng của hệ điều hành PC',
        context: 'Hệ điều hành máy tính cá nhân trải qua quá trình tiến hóa từ giao diện dòng lệnh (MS-DOS) sang giao diện đồ họa (GUI) và nhận dạng tiếng nói. HĐH đảm nhiệm 5 nhóm chức năng: 1) Quản lí thiết bị; 2) Quản lí việc lưu trữ dữ liệu; 3) Môi trường để chạy các ứng dụng; 4) Cung cấp môi trường giao tiếp với người sử dụng; 5) Cung cấp các tiện ích nâng cao hiệu quả sử dụng.',
        guidingQuestion: 'Trong 5 nhóm chức năng trên, nhóm nào thể hiện rõ nhất đặc thù của hệ điều hành máy tính cá nhân? Khuynh hướng phát triển chính của PC là gì?',
        hints: [
          'Nhóm cung cấp môi trường giao tiếp thân thiện và tiện ích cá nhân thể hiện rõ nhất đặc thù của máy tính cá nhân.',
          'Hai khuynh hướng chính: Ngày càng thân thiện (GUI, Plug & Play, giọng nói) và Tăng cường tiện ích cá nhân.',
          'Các mốc Windows: Windows 1 (1985), Windows 3 (bắt đầu đa nhiệm), Windows 95 (tích hợp trực tiếp HĐH và Plug & Play), Windows XP (thành công vang dội), Windows 7, 8, 10, 11 (2021). Linux có nguồn gốc từ UNIX, dùng phổ biến cho máy chủ và thiết bị nhúng.'
        ],
        discoverySummary: 'HĐH máy tính cá nhân phát triển theo hướng tăng cường tính thân thiện (dễ học, dễ dùng, cơ chế cắm là chạy Plug & Play) và bổ sung phong phú tiện ích cá nhân. Windows thống trị thị trường PC, trong khi Linux phát triển mạnh mẽ trên nền tảng nguồn mở cho máy chủ.',
      },
      {
        id: 2,
        title: 'Đặc trưng của hệ điều hành cho thiết bị di động',
        context: 'Thiết bị di động (smartphone, máy tính bảng) ngày nay là máy tính cá nhân bỏ túi. Hệ điều hành di động được tối ưu với 3 đặc trưng quan trọng: 1) Không chỉ để nghe gọi mà trang bị rất nhiều tiện ích cá nhân; 2) Khả năng kết nối mạng không dây mạnh mẽ (3G/4G/5G, Wi-Fi, Bluetooth); 3) Giao diện tiện lợi, trực quan nhờ tích hợp nhiều cảm biến.',
        guidingQuestion: 'Vì sao hệ điều hành di động lại ưu tiên cao cho giao tiếp cảm ứng thân thiện và kết nối mạng di động? Hai HĐH phổ biến nhất hiện nay là gì?',
        hints: [
          'Thiết bị luôn di chuyển theo người dùng nên cần kết nối Internet mọi lúc mọi nơi qua sóng di động và Wi-Fi.',
          'Màn hình nhỏ gọn, thao tác trực tiếp bằng ngón tay và cảm biến (gia tốc, ánh sáng, vân tay, nhận diện khuôn mặt).',
          'Android (Google phát triển dựa trên Linux) và iOS (Apple) là hai hệ điều hành thống trị thị trường di động.'
        ],
        discoverySummary: 'HĐH di động ưu tiên giao diện cảm ứng đa điểm dựa trên cảm biến, khả năng kết nối mạng không dây liên tục và tích hợp kho ứng dụng tiện ích cá nhân phong phú.',
      },
      {
        id: 3,
        title: 'Mối quan hệ giữa phần cứng, hệ điều hành và phần mềm ứng dụng',
        context: 'Quan sát sơ đồ cấu trúc hệ thống: Người dùng -> Phần mềm ứng dụng -> Hệ điều hành -> Phần cứng (CPU, bộ nhớ, thiết bị vào/ra). Nhiều thiết bị đơn năng (lò vi sóng, máy giặt) chỉ có vi xử lý chạy chương trình nạp sẵn trong ROM không cần HĐH.',
        guidingQuestion: 'Khi nào một thiết bị xử lý thông tin bắt buộc phải có hệ điều hành? Vai trò làm "máy ảo" của hệ điều hành được hiểu như thế nào?',
        hints: [
          'Thiết bị xử lý thông tin đa năng cần chạy nhiều ứng dụng khác nhau, quản lý lưu trữ động và phối hợp nhiều thiết bị ngoại vi bắt buộc phải có HĐH.',
          'HĐH cung cấp các dịch vụ trừu tượng hóa phần cứng, tạo ra một "máy ảo" với giao diện thuận tiện để người dùng và phần mềm ứng dụng khai thác phần cứng mà không cần biết chi tiết mạch điện tử bên dưới.'
        ],
        discoverySummary: 'Hệ điều hành đóng vai trò môi trường trung gian, cung cấp các dịch vụ để phần mềm ứng dụng khai thác phần cứng hiệu quả và an toàn. Thiết bị đa năng bắt buộc phải có hệ điều hành.',
      },
    ],
    knowledgeBox: [
      'Hệ điều hành máy tính cá nhân phát triển theo hướng ngày càng thân thiện, dễ sử dụng (GUI, cơ chế Plug & Play, giao tiếp bằng giọng nói) và cung cấp nhiều tiện ích phục vụ người dùng cá nhân.',
      'Hệ điều hành cho thiết bị di động có 3 đặc trưng cốt lõi: kết nối mạng không dây liên tục (3G/4G/5G/Wi-Fi/Bluetooth), giao diện tiện lợi nhờ tích hợp nhiều cảm biến và kho tiện ích hỗ trợ cá nhân phong phú.',
      'Hệ điều hành là môi trường trung gian để phần mềm ứng dụng khai thác phần cứng máy tính; cùng phần cứng tạo ra một máy ảo với giao diện thuận lợi cho người sử dụng.',
      'Thiết bị đơn năng điều khiển bằng vi xử lý chạy chương trình cố định trong ROM không cần HĐH; thiết bị xử lý thông tin đa năng bắt buộc phải có HĐH.',
    ],
    practicalGuide: {
      title: 'Khảo sát và nhận diện môi trường làm việc của hệ điều hành Windows',
      steps: [
        'Quan sát màn hình nền (Desktop): Nhận diện các biểu tượng (Icon) của phần mềm và tài liệu.',
        'Khảo sát thanh công việc (Taskbar) ở cạnh đáy: Nút Start Menu, các ứng dụng đang chạy, ô tìm kiếm Search.',
        'Khảo sát khay trạng thái (System Tray) ở góc phải: Đồng hồ, kết nối mạng Wi-Fi/Ethernet, âm lượng và thông báo.',
        'Thao tác cửa sổ ứng dụng: Thử nghiệm phóng to (Maximize), thu nhỏ (Minimize), khôi phục kích thước và đóng cửa sổ (Close).',
      ],
    },
    exerciseReview: [
      {
        question: 'Bài 1 (SGK tr.9): Em hiểu thế nào về tính thân thiện của hệ điều hành?',
        answer: 'Tính thân thiện thể hiện ở sự phù hợp với thói quen và quan niệm tự nhiên của con người (đối tượng hiển thị dưới dạng biểu tượng trực quan, xóa tệp bằng cách kéo thả vào biểu tượng thùng rác Recycle Bin, hỗ trợ kéo thả chuột, ra lệnh bằng giọng nói), giúp người dùng dễ học, dễ nhớ và thao tác nhanh chóng.',
      },
      {
        question: 'Bài 2 (SGK tr.9): Hệ điều hành cung cấp môi trường giao tiếp với người sử dụng như thế nào? Thể hiện ra sao trên Windows?',
        answer: 'HĐH cung cấp môi trường giao tiếp đồ họa thông qua: 1) Các biểu tượng, cửa sổ, con trỏ chuột; 2) Tổ chức quản lý cây thư mục và tệp tin trực quan; 3) Khởi động ứng dụng nhanh bằng nhấp đúp chuột hoặc tìm kiếm trên thanh Taskbar; 4) Hộp thoại thông báo và hướng dẫn thao tác.',
      },
    ],
    application: {
      question: 'Ngoài máy tính và điện thoại thông minh, em hãy tìm hiểu xem những thiết bị gia dụng hay phương tiện nào xung quanh chúng ta cũng được trang bị hệ điều hành?',
      guidance: 'Các thiết bị thông minh hiện nay có HĐH gồm: Tivi thông minh (Smart TV chạy Android TV, Tizen, webOS), Đồng hồ thông minh (Apple Watch chạy watchOS, Samsung Galaxy Watch chạy Wear OS), Máy ảnh kỹ thuật số thông minh, Hệ thống giải trí trên ô tô thông minh (Android Automotive, Apple CarPlay).',
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 1 HĐH',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-1-he-dieu-hanh-277',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 1 Tin học 11',
    },
  },

  // =========================================================================
  // BÀI 2: THỰC HÀNH SỬ DỤNG HỆ ĐIỀU HÀNH
  // =========================================================================
  {
    id: 2,
    topicId: 1,
    lessonNumber: 2,
    title: 'Thực hành sử dụng hệ điều hành',
    pageRange: 'Trang 10 - 15',
    objectives: [
      'Thực hiện thành thạo các thao tác cơ bản: làm quen giao diện, quản lý tệp và thư mục trên máy tính cá nhân.',
      'Sử dụng đúng cách các tiện ích đĩa: kiểm tra đĩa (Check Disk), dọn rác (Disk Cleanup) và chống phân mảnh (Defragment/Optimize).',
      'Hiểu rõ sự khác biệt giữa đĩa cứng từ (HDD - cần hợp mảnh) và đĩa thể rắn (SSD - không cần hợp mảnh).',
      'Khai thác hiệu quả các tiện ích trên thiết bị di động: danh bạ, đồng hồ bấm giờ thể thao, quản lý ứng dụng và các phương thức bảo mật mở khóa.',
    ],
    starter: {
      situation: 'Các thiết bị di động thực tế cũng là máy tính cá nhân bỏ túi. Hệ điều hành máy tính và di động có nhiều tiện ích riêng nhưng giao diện người dùng có nhiều nét tương đồng.',
      question: 'Em hãy chỉ ra một vài điểm tương đồng giữa giao diện hệ điều hành máy tính và thiết bị di động?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'So sánh giao diện người dùng Windows và Ubuntu',
        context: 'Windows hiển thị thanh công việc (Taskbar) ở cạnh đáy màn hình cùng các ứng dụng ghim sẵn. Trong khi đó, Ubuntu bố trí thanh danh mục công việc (Dock) ở cạnh trái màn hình và biểu tượng ứng dụng ở góc dưới bên trái.',
        guidingQuestion: 'Điểm chung và khác biệt cơ bản giữa việc quản lý tệp trên Windows (File Explorer) và Ubuntu (Files) là gì?',
        hints: [
          'Điểm chung: Đều quản lý theo cấu trúc cây thư mục phân cấp, hỗ trợ thao tác kéo thả chuột, đổi tên, sao chép, di chuyển và xóa.',
          'Khác biệt: Tên ổ đĩa (Windows dùng C:, D:; Linux coi tất cả là nhánh con của thư mục gốc /).'
        ],
        discoverySummary: 'Cả Windows và Ubuntu đều cung cấp tiện ích quản lý tệp trực quan, hỗ trợ tổ chức dữ liệu dạng cây thư mục khoa học.',
      },
      {
        id: 2,
        title: 'Mục đích và phạm vi áp dụng của tiện ích Kiểm tra đĩa & Hợp mảnh',
        context: 'Đầu đọc của ổ đĩa cứng từ (HDD) là cơ cấu cơ học, di chuyển giữa các track và sector khá chậm. Khi dữ liệu của một tệp bị phân tán rải rác trên đĩa (phân mảnh), đầu đọc phải di chuyển nhiều lần làm giảm tốc độ truy xuất.',
        guidingQuestion: 'Tại sao việc kiểm tra đĩa thực hiện được trên mọi loại đĩa, còn việc hợp mảnh (Defragment) chỉ có ý nghĩa với đĩa từ HDD mà không áp dụng cho SSD?',
        hints: [
          'Kiểm tra đĩa (Check Disk) nhằm phát hiện lỗi logic hệ thống tệp và bad sector, loại đĩa nào cũng có thể gặp lỗi này.',
          'Ổ thể rắn SSD dùng chip nhớ điện tử truy cập ngẫu nhiên tức thì, không có cơ cấu cơ học di chuyển nên không bị chậm do phân mảnh. Hợp mảnh SSD còn làm giảm tuổi thọ chip flash do ghi xóa liên tục.'
        ],
        discoverySummary: 'Hợp mảnh nhằm gom các phần của tệp về vị trí liền kề để giảm thời gian di chuyển đầu từ cơ học, chỉ áp dụng cho ổ HDD. Ổ SSD tuyệt đối không cần hợp mảnh.',
      },
      {
        id: 3,
        title: 'So sánh các phương pháp bảo mật đăng nhập trên thiết bị di động',
        context: 'Thiết bị di động cung cấp nhiều cách mở khóa: Mật khẩu (PIN/Password), Nhận dạng vân tay, Nhận dạng khuôn mặt (Face Unlock/Face ID).',
        guidingQuestion: 'Ưu điểm và nhược điểm của từng phương pháp đăng nhập trên di động là gì?',
        hints: [
          'Mật khẩu: Độ chính xác cao, thân thiện, nhưng mất thời gian nhập và dễ quên.',
          'Vân tay: Nhanh gọn, tiện dụng, sai lệch thấp, nhưng kém nhạy khi ngón tay bị ướt, mồ hôi hoặc bụi bẩn.',
          'Khuôn mặt: Tốc độ phản hồi cực nhanh, không chạm tay, nhưng một số loại nhận diện 2D có thể bị ảnh hưởng bởi góc nhìn, ánh sáng hoặc khẩu trang.'
        ],
        discoverySummary: 'Mỗi phương thức bảo mật có ưu nhược điểm riêng. Kết hợp mật khẩu mạnh cùng sinh trắc học (vân tay/khuôn mặt) đem lại sự tiện lợi và an toàn cao nhất.',
      },
    ],
    knowledgeBox: [
      'Giao diện đồ họa máy tính cá nhân sử dụng các thành phần chính: màn hình nền, thanh công việc (Taskbar trên Windows, Dock trên Linux), cửa sổ ứng dụng và khay hệ thống.',
      'Việc kiểm tra đĩa (Check Disk) có thể thực hiện trên bất cứ loại ổ đĩa nào; việc hợp mảnh (Optimize/Defragment) chỉ có ý nghĩa đối với đĩa từ HDD nhằm giảm hành trình di chuyển đầu từ, không cần cho ổ SSD.',
      'Tiện ích dọn rác (Disk Cleanup) trong thuộc tính ổ đĩa (Properties -> General) giúp loại bỏ an toàn các tệp tạm, thùng rác để giải phóng dung lượng bộ nhớ.',
      'HĐH di động tích hợp sẵn các tiện ích thiết yếu: Quản lý danh bạ theo nhóm, Đặt lịch/Hẹn giờ/Bấm giờ thể thao chính xác 1/100 giây, Quản lý kho ứng dụng và các cơ chế bảo mật sinh trắc học.',
    ],
    practicalGuide: {
      title: 'Quy trình kiểm tra đĩa, chống phân mảnh và dọn rác trên máy tính',
      steps: [
        'Bước 1: Mở File Explorer, nhấp chuột phải vào ổ đĩa cần xử lý (ví dụ Local Disk C: hoặc D:), chọn Properties.',
        'Bước 2: Dọn rác đĩa: Tại thẻ General, nhấn nút Disk Cleanup. Đánh dấu chọn các loại tệp rác cần xóa (Recycle Bin, Temporary files...), nhấn OK -> Clean up system files.',
        'Bước 3: Kiểm tra lỗi đĩa: Chuyển sang thẻ Tools, tại mục Error checking, nhấn Check để quét và khắc phục lỗi hệ thống tệp.',
        'Bước 4: Tối ưu đĩa: Tại mục Optimize and defragment drive, nhấn Optimize. Quan sát loại đĩa (Solid state drive - SSD hay Hard disk drive - HDD). Nếu là HDD và có tỷ lệ phân mảnh cao, chọn ổ đĩa và nhấn Optimize.',
      ],
    },
    exerciseReview: [
      {
        question: 'Bài 1 (SGK tr.15): Tiện ích danh bạ di động có chức năng quản lý nhóm như thế nào? Thao tác tạo nhóm ra sao?',
        answer: 'Tiện ích danh bạ cho phép tạo các nhóm (Gia đình, Bạn học, Đồng nghiệp...) để gửi tin nhắn hoặc gọi điện đồng loạt. Thao tác: Mở Danh bạ -> Chọn Nhóm (Groups) -> Nhấn biểu tượng dấu cộng (+) để tạo nhóm mới -> Đặt tên nhóm -> Chọn các liên hệ để thêm vào nhóm -> Lưu.',
      },
      {
        question: 'Bài 2 (SGK tr.15): Phân biệt chức năng Đếm giờ (Timer) và Bấm giờ (Stopwatch) trên điện thoại di động?',
        answer: 'Đếm giờ (Timer): Đặt trước một khoảng thời gian xác định (ví dụ 15 phút) và đếm lùi dần về 0 kèm chuông báo; thích hợp nhắc việc, nấu ăn. Bấm giờ (Stopwatch): Bắt đầu đếm tiến từ 0 cho tới khi bấm dừng, độ chính xác tới 1/100 giây; thích hợp đo thời gian và ghi nhận kỷ lục thi đấu thể thao.',
      },
    ],
    application: {
      question: 'Tại sao việc dọn dẹp thùng rác (Recycle Bin) và xóa tệp tạm thời định kỳ bằng Disk Cleanup lại giúp máy tính hoạt động ổn định và giải phóng dung lượng bộ nhớ?',
      guidance: 'Khi các ứng dụng và trình duyệt hoạt động, chúng sinh ra hàng nghìn tệp cache và tệp tạm trong thư mục Temp. Nếu không dọn dẹp, dung lượng ổ cài đặt hệ điều hành (thường là ổ C:) sẽ bị đầy, khiến Windows không còn đủ không gian cho bộ nhớ ảo (Virtual Memory/Paging File), dẫn đến hiện tượng máy tính bị đơ, giật lag.',
    },
    defaultApp: {
      name: 'Windows 11 Web Simulator',
      type: 'simulator',
      url: 'https://win11.blueedge.me/',
      badge: 'Thực hành HĐH',
      description: 'Trải nghiệm trực tiếp giao diện Taskbar, File Explorer và Settings của Windows 11',
    },
  },

  // =========================================================================
  // BÀI 3: PHẦN MỀM NGUỒN MỞ VÀ PHẦN MỀM CHẠY TRÊN INTERNET
  // =========================================================================
  {
    id: 3,
    topicId: 1,
    lessonNumber: 3,
    title: 'Phần mềm nguồn mở và phần mềm chạy trên Internet',
    pageRange: 'Trang 15 - 20',
    objectives: [
      'Phân biệt được 3 hình thức chuyển giao phần mềm theo chiều hướng mở dần: phần mềm thương mại, phần mềm tự do và phần mềm nguồn mở.',
      'Hiểu rõ vai trò của giấy phép nguồn mở (tiêu biểu là GNU GPL) và giải quyết mâu thuẫn giữa bản quyền tác giả và quyền tự do sửa đổi mã nguồn.',
      'Phân tích được vai trò không thể thay thế của phần mềm thương mại bên cạnh sự phát triển của phần mềm nguồn mở.',
      'Nêu được khái niệm, ưu điểm và đặc điểm của phần mềm chạy trên Internet (SaaS / Web apps).',
    ],
    starter: {
      situation: 'Vào những năm 1970, trong số trường đại học ở Mỹ đã xuất hiện phong trào chia sẻ mã nguồn để cùng nghiên cứu phát triển, mở đầu cho kỷ nguyên phần mềm nguồn mở.',
      question: 'Theo em, lợi ích đối với cộng đồng và các nhà phát triển trong việc chia sẻ mã nguồn phần mềm là gì?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: '3 hình thức chuyển giao phần mềm theo chiều hướng "mở dần"',
        context: '1) Bán phần mềm dưới dạng mã máy (đóng mã nguồn); 2) Cho sử dụng miễn phí có hoặc không điều kiện nhưng không cung cấp mã nguồn; 3) Cho sử dụng tự do, cung cấp đầy đủ mã nguồn để người dùng sửa đổi, nâng cấp và phân phối lại.',
        guidingQuestion: 'Tên gọi tương ứng của 3 nhóm phần mềm trên là gì? Lấy ví dụ minh họa cho từng loại?',
        hints: [
          'Nhóm 1: Phần mềm thương mại (Commercial Software) - bán dạng đóng mã nguồn (MS Word, Adobe Photoshop, AutoCAD).',
          'Nhóm 2: Phần mềm tự do (Freeware / Free Software) - miễn phí dùng không cần xin phép, thường ở dạng mã máy (Adobe Acrobat Reader, Unikey, Red Hat Linux).',
          'Nhóm 3: Phần mềm nguồn mở (Open Source Software - OSS) - cung cấp cả mã nguồn theo giấy phép (Inkscape, GIMP, Python IDLE, LibreOffice).'
        ],
        discoverySummary: 'Phần mềm thương mại đem lại doanh thu cho nhà sản xuất; phần mềm tự do giúp tiếp cận miễn phí; phần mềm nguồn mở trao toàn quyền kiểm soát mã nguồn cho cộng đồng theo giấy phép.',
      },
      {
        id: 2,
        title: 'Giấy phép nguồn mở GNU GPL và giải quyết mâu thuẫn bản quyền',
        context: 'Bản quyền truyền thống bảo hộ quyền tác giả chống sao chép và sửa đổi. Trong khi đó, phần mềm nguồn mở lại khuyến khích tự do sửa đổi và phân phối lại.',
        guidingQuestion: 'Giấy phép GNU GPL quy định người sửa đổi phần mềm nguồn mở phải tuân thủ những nghĩa vụ gì để đảm bảo phát triển bền vững?',
        hints: [
          'Phải công bố rõ ràng các phần đã sửa đổi so với bản gốc để minh bạch đóng góp.',
          'Phải công bố toàn bộ mã nguồn của phần sửa đổi.',
          'Sản phẩm mới sửa đổi từ phần mềm GPL cũng bắt buộc phải mở theo giấy phép GPL (tính kế thừa bảo vệ cộng đồng).',
          'Miễn trừ trách nhiệm bảo hành cho tác giả ban đầu.'
        ],
        discoverySummary: 'Giấy phép GNU GPL hóa giải mâu thuẫn bằng cơ chế bản quyền mở (Copyleft): cấp quyền tự do sửa đổi nhưng ràng buộc sản phẩm phái sinh cũng phải công khai mã nguồn cho cộng đồng.',
      },
      {
        id: 3,
        title: 'Vai trò của phần mềm thương mại và phần mềm nguồn mở',
        context: 'Phần mềm thương mại chia làm 2 loại: phần mềm "đóng gói" (phục vụ đại chúng như Windows, Photoshop) và phần mềm "đặt hàng / may đo" (nghiệp vụ ngân hàng, quản lý công tơ điện EVN).',
        guidingQuestion: 'Phần mềm nguồn mở có thể thay thế hoàn toàn phần mềm thương mại hay không? Tại sao?',
        hints: [
          'Không thể thay thế hoàn toàn. Nếu không có phần mềm thương mại, các công ty phần mềm sẽ không có nguồn tài chính để duy trì hoạt động.',
          'Những hệ thống lớn, yêu cầu bảo mật đặc thù và hỗ trợ kỹ thuật 24/7 bắt buộc phải có dịch vụ từ phần mềm thương mại đặt hàng.',
          'Hai loại phần mềm bổ sung cho nhau cùng phát triển.'
        ],
        discoverySummary: 'Phần mềm thương mại là động lực tài chính cho ngành công nghiệp phần mềm; phần mềm nguồn mở cung cấp giải pháp dùng chung chất lượng cao với chi phí thấp. Hai bên cùng song hành.',
      },
      {
        id: 4,
        title: 'Đặc điểm và ưu điểm của phần mềm chạy trên Internet',
        context: 'Phần mềm chạy trên Internet (như Google Docs, Sheets, Slides, Zoom, Microsoft Teams) được cài đặt trên máy chủ đám mây, người dùng khai thác qua trình duyệt web.',
        guidingQuestion: 'Hai đặc điểm quan trọng và các ưu điểm nổi bật của phần mềm chạy trên Internet là gì?',
        hints: [
          'Đặc điểm 1: Phần mềm cài đặt ở máy chủ kết nối Internet; Đặc điểm 2: Người dùng sử dụng trên thiết bị khác mà không cần cài đặt phần mềm đó vào máy.',
          'Ưu điểm: Dùng ở bất cứ đâu, trên mọi hệ điều hành (Windows, Mac, điện thoại) miễn là có Internet; Chi phí rất rẻ hoặc miễn phí; Khả năng làm việc cộng tác đồng thời theo thời gian thực.'
        ],
        discoverySummary: 'Phần mềm chạy trên Internet giúp tối ưu khả năng làm việc từ xa, không tốn tài nguyên cài đặt cục bộ và cập nhật phiên bản tự động.',
      },
    ],
    knowledgeBox: [
      'Phần mềm thương mại là nguồn thu nhập chính của các tổ chức làm phần mềm chuyên nghiệp, có hai dạng: phần mềm "đóng gói" và phần mềm "đặt hàng". Hầu hết là nguồn đóng để bảo vệ quyền tác giả.',
      'Phần mềm nguồn mở (OSS) cung cấp cả mã nguồn theo giấy phép bản quyền (như GNU GPL), cho phép tự do sửa đổi và phân phối lại; sản phẩm sửa đổi từ phần mềm GPL cũng phải mở theo GPL.',
      'Phần mềm nguồn mở KHÔNG THỂ thay thế hoàn toàn phần mềm thương mại vì thương mại cung cấp nguồn lực tài chính chủ yếu và đáp ứng nhu cầu nghiệp vụ đặc thù có cam kết bảo hành.',
      'Phần mềm chạy trên Internet được cài đặt trên máy chủ đám mây, sử dụng qua mạng mà không cần cài đặt tại máy cá nhân, hỗ trợ cộng tác làm việc mọi lúc mọi nơi.',
    ],
    exerciseReview: [
      {
        question: 'Bài 1 (SGK tr.20): Có thể nói "Phần mềm nguồn mở ngày càng phát triển thì thị trường phần mềm thương mại càng suy giảm" hay không? Tại sao?',
        answer: 'Không thể nói như vậy. Thực tế cho thấy thị trường phần mềm thương mại không hề suy giảm mà vẫn tăng trưởng mạnh mẽ. Phần mềm nguồn mở thúc đẩy cạnh tranh, giúp các công ty thương mại đổi mới công nghệ và mở rộng dịch vụ hỗ trợ đám mây, hai loại phần mềm cùng phát triển song song.',
      },
      {
        question: 'Bài 2 (SGK tr.20): Phần mềm ở các trạm ATM (máy rút tiền tự động) có phải là phần mềm trực tuyến (chạy trên Internet) không?',
        answer: 'Không. Phần mềm ATM của ngân hàng không sử dụng mạng Internet công cộng để đảm bảo an ninh bảo mật tài chính tối đa. Hệ thống ATM hoạt động trên mạng diện rộng riêng (WAN chuyên dụng) với các giao thức mã hóa đường truyền độc lập.',
      },
    ],
    application: {
      question: 'Tìm trên Internet và phân loại các cặp phần mềm đồ họa thương mại vs nguồn mở tương đương? Ngôn ngữ Python ở dạng mã nguồn có đồng nghĩa với mọi mã viết bằng Python đều là nguồn mở không?',
      guidance: 'Cặp phần mềm đồ họa: Adobe Photoshop (thương mại) tương đương GIMP (nguồn mở); Adobe Illustrator / CorelDraw (thương mại) tương đương Inkscape (nguồn mở). Đối với Python: Mã nguồn không mặc nhiên là nguồn mở, điều này phụ thuộc vào tác giả có cấp giấy phép nguồn mở (Open Source License) cho phép cộng đồng sửa đổi và phân phối lại hay không.',
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 3',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-3-phan-mem-nguon-mo-va-phan-mem-chay-tren',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 3 Tin học 11',
    },
  },

  // =========================================================================
  // BÀI 4: BÊN TRONG MÁY TÍNH
  // =========================================================================
  {
    id: 4,
    topicId: 1,
    lessonNumber: 4,
    title: 'Bên trong máy tính',
    pageRange: 'Trang 21 - 26',
    objectives: [
      'Nhận biết và nêu chức năng của các thành phần chính bên trong thân máy tính: Bảng mạch chính, CPU, ROM, RAM, Bộ nhớ ngoài.',
      'Hiểu rõ bản chất các phép toán logic cơ bản AND, OR, NOT, XOR và thể hiện vật lý của chúng qua các mạch điện.',
      'Nắm vững quy tắc cộng nhị phân và cách xây dựng mạch cộng 2 bit bán phần (Half Adder) từ các cổng logic.',
      'Khẳng định được nguyên lý: tất cả các thiết bị số, gồm cả máy tính, đều được chế tạo từ các mạch logic.',
    ],
    starter: {
      situation: 'Quan sát sơ đồ cấu tạo chức năng máy tính von Neumann: Thiết bị vào, Thiết bị ra, Bảng mạch chính, Bộ xử lý trung tâm (CPU), Bộ nhớ trong và Bộ nhớ ngoài.',
      question: 'Em có biết cụ thể bên trong thân máy tính (Case) có những bộ phận linh kiện điện tử nào không?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Các thiết bị bên trong thân máy tính: Mainboard, CPU, RAM, ROM, Bộ nhớ ngoài',
        context: 'Tất cả linh kiện đều gắn trên Bảng mạch chính (Mainboard). CPU gồm 2 bộ phận chính: Bộ điều khiển (CU - phối hợp đồng bộ các thiết bị) và Bộ số học & logic (ALU - thực hiện phép tính). Bộ nhớ trong gồm ROM (chỉ đọc, lưu dữ liệu hệ thống khởi động BIOS) và RAM (ghi đọc tạm thời, mất dữ liệu khi mất điện). Bộ nhớ ngoài (HDD, SSD, USB) lưu trữ lâu dài.',
        guidingQuestion: 'Có thể đo tốc độ CPU bằng số phép tính trong 1 giây không? Trong các thiết bị nhớ ngoài, thiết bị nào có tốc độ truy cập nhanh nhất?',
        hints: [
          'Không thể đo chính xác bằng số phép tính/giây vì mỗi phép tính cần số chu kỳ xung đồng hồ (clock cycle) khác nhau; người ta thường dùng tần số xung nhịp (GHz).',
          'Ổ thể rắn SSD (Solid State Drive) có tốc độ truy xuất nhanh nhất hiện nay, vượt trội so với đĩa từ HDD và đĩa quang.'
        ],
        discoverySummary: 'CPU là bộ não của máy tính, quyết định tốc độ xử lý; RAM và ROM là bộ nhớ trong; SSD là giải pháp lưu trữ bộ nhớ ngoài tốc độ cao tối ưu nhất.',
      },
      {
        id: 2,
        title: 'Các phép toán logic và thể hiện vật lý qua mạch điện',
        context: 'Đại lượng logic Đúng (1) và Sai (0). Bốn phép toán logic cơ bản: AND (Nhân logic), OR (Cộng logic), NOT (Phủ định), XOR (Hoặc loại trừ).',
        guidingQuestion: 'Các quy tắc thực hiện phép toán logic AND, OR, NOT, XOR tương ứng với cách mắc mạch điện như thế nào?',
        hints: [
          'Phép AND: Chỉ bằng 1 khi cả x và y đều bằng 1 (mạch 2 công tắc mắc NỐI TIẾP).',
          'Phép OR: Bằng 1 khi ít nhất một trong hai x hoặc y bằng 1 (mạch 2 công tắc mắc SONG SONG).',
          'Phép NOT: Đảo mức logic (NOT 0 = 1, NOT 1 = 0).',
          'Phép XOR: Bằng 1 khi hai đầu vào có giá trị khác nhau (0 XOR 1 = 1, 1 XOR 0 = 1; còn 0 XOR 0 = 0, 1 XOR 1 = 0).'
        ],
        discoverySummary: 'Các phép toán logic được hiện thực hóa vật lý bằng các khóa chuyển mạch bán dẫn (transistor). Mọi mạch logic phức tạp đều có thể xây dựng từ 3 cổng cơ bản AND, OR, NOT.',
      },
      {
        id: 3,
        title: 'Phép cộng nhị phân và mạch cộng 2 bit bán phần (Half Adder)',
        context: 'Quy tắc cộng nhị phân 1 bit: 0+0=0, 0+1=1, 1+0=1, 1+1=10 (kết quả t = 0, số nhớ z = 1 sang hàng bên trái). Bảng cộng Hình 4.8 SGK.',
        guidingQuestion: 'Số nhớ z và kết quả t trong phép cộng 2 bit x và y là kết quả của hai phép toán logic nào?',
        hints: [
          'Số nhớ z bằng 1 chỉ khi x = 1 và y = 1 -> z = x AND y.',
          'Kết quả t bằng 1 khi x và y khác nhau (0+1=1, 1+0=1) và bằng 0 khi giống nhau -> t = x XOR y.'
        ],
        discoverySummary: 'Mạch cộng 2 bit bán phần (Half Adder) được xây dựng đơn giản gồm: 1 cổng XOR để tạo bit kết quả tổng t và 1 cổng AND để tạo bit nhớ z.',
      },
    ],
    knowledgeBox: [
      'Bên trong thân máy tính gồm: Bảng mạch chính (Mainboard), Bộ xử lý trung tâm (CPU gồm CU và ALU), Bộ nhớ trong (ROM lưu chương trình khởi động, RAM lưu dữ liệu tạm thời khi chạy chương trình) và Bộ nhớ ngoài (HDD, SSD lưu trữ dữ liệu lâu dài).',
      'Các phép toán logic cơ bản: AND (bằng 1 khi cả 2 bằng 1), OR (bằng 1 khi ít nhất một bằng 1), NOT (đảo giá trị), XOR (bằng 1 khi 2 giá trị khác nhau).',
      'Phép cộng nhị phân 2 bit được thực hiện bằng mạch logic: bit nhớ z = x AND y, bit kết quả t = x XOR y.',
      'Tất cả các thiết bị số, gồm cả máy tính điện tử, đều được chế tạo từ các mạch logic. Mọi mạch logic đều có thể tổng hợp từ 3 cổng AND, OR và NOT.',
    ],
    practicalGuide: {
      title: 'Quy tắc chuyển đổi hệ đếm và thực hiện phép tính nhị phân',
      steps: [
        'Chuyển thập phân sang nhị phân: Chia liên tiếp cho 2 và ghi lại phần dư từ dưới lên trên. (Ví dụ: 19 chia 2 được 9 dư 1, 9 chia 2 được 4 dư 1, 4 chia 2 được 2 dư 0, 2 chia 2 được 1 dư 0, 1 chia 2 được 0 dư 1 -> 19 = 10011(2); 14 = 1110(2)).',
        'Chuyển nhị phân sang thập phân: Nhân từng chữ số với lũy thừa của 2 tương ứng từ phải sang trái bắt đầu từ 2^0. (Ví dụ: 10011(2) = 1*2^4 + 0*2^3 + 0*2^2 + 1*2^1 + 1*2^0 = 16 + 2 + 1 = 19).',
        'Cộng nhị phân nhiều chữ số: Đặt tính thẳng cột từ phải sang trái, 1+1=0 nhớ 1 sang hàng bên cạnh.',
      ],
    },
    exerciseReview: [
      {
        question: 'Bài 1 (SGK tr.26): Trong các thiết bị của máy tính, thiết bị nào có ảnh hưởng quyết định đến tốc độ xử lý của máy tính? Tại sao?',
        answer: 'CPU là thiết bị có ý nghĩa quyết định nhất tới tốc độ xử lý của máy tính (xung nhịp GHz càng cao, số nhân/luồng càng nhiều thì máy xử lý càng nhanh). Bên cạnh đó, tốc độ truy cập RAM cũng rất quan trọng vì CPU liên tục đọc/ghi dữ liệu vào RAM; nếu RAM chậm hoặc thiếu dung lượng thì CPU phải chờ đợi, kéo giảm hiệu năng tổng thể.',
      },
      {
        question: 'Bài 2 (SGK tr.26): Thực hiện các phép cộng nhị phân: a) 1010(2) + 101(2); b) 1001(2) + 1011(2) và chuyển sang hệ thập phân?',
        answer: 'a) 1010 + 101 = 1111 (Thập phân: 10 + 5 = 15). b) 1001 + 1011 = 10100 (Thập phân: 9 + 11 = 20).',
      },
    ],
    application: {
      question: 'Có một chỉ số đo hiệu năng tính toán là FLOPS (Floating Point Operations Per Second). Em hãy tìm hiểu FLOPS là gì và tại sao chỉ số này ít dùng cho máy tính cá nhân thông thường?',
      guidance: 'FLOPS là số phép tính dấu phẩy động (số thực) thực hiện được trong một giây. Chỉ số này thường dùng để đánh giá sức mạnh của các siêu máy tính (Supercomputers) trong mô phỏng khoa học, dự báo thời tiết, trí tuệ nhân tạo (GigaFLOPS, TeraFLOPS, PetaFLOPS). Đối với máy tính cá nhân thông thường, các tác vụ chủ yếu là văn phòng, xử lý dữ liệu nguyên và đồ họa nên người ta thường dùng tần số xung nhịp (GHz) và điểm Benchmark (Cinebench, Geekbench) thay vì FLOPS.',
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 4',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-4-ben-trong-may-tinh',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 4 Tin học 11',
    },
  },

  // =========================================================================
  // BÀI 5: KẾT NỐI MÁY TÍNH VỚI CÁC THIẾT BỊ SỐ
  // =========================================================================
  {
    id: 5,
    topicId: 1,
    lessonNumber: 5,
    title: 'Kết nối máy tính với các thiết bị số',
    pageRange: 'Trang 27 - 31',
    objectives: [
      'Nêu được chức năng và giải thích ý nghĩa các thông số kỹ thuật của một số thiết bị vào - ra thông dụng: bàn phím, chuột, màn hình, máy in.',
      'Phân biệt được đặc điểm và chức năng của các cổng kết nối phổ biến: VGA, HDMI, USB, cổng mạng Ethernet.',
      'Hiểu rõ khái niệm tham số kết nối và thực hiện được kết nối máy tính với điện thoại qua USB, kết nối tai nghe/loa Bluetooth.',
      'Nắm vững nguyên tắc: không có một cách kết nối chung cho mọi thiết bị số mà phụ thuộc vào cổng và tham số kết nối.',
    ],
    starter: {
      situation: 'Các thiết bị số có khả năng trao đổi dữ liệu với máy tính rất đa dạng. Một số thiết bị không có khả năng xử lý thông tin độc lập mà chỉ làm việc khi được kết nối với máy tính.',
      question: 'Việc kết nối máy tính với các thiết bị số được thực hiện như thế nào và cần phải tùy chỉnh những tham số gì?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Các thiết bị vào - ra thông dụng và ý nghĩa thông số kỹ thuật',
        context: 'Chuột có thông số DPI (số điểm riêng rẽ chuột xác định khi dịch chuyển 1 inch) và phương thức kết nối. Màn hình (CRT, LCD, LED, Plasma) có các thông số: Kích thước đường chéo (inch, 1 inch ≈ 2.54 cm), độ phân giải (pixel), khả năng thể hiện màu (24-bit màu), tần số quét (Hz), thời gian phản hồi (ms). Máy in (in kim, in laser, in phun, in nhiệt) có thông số: độ phân giải DPI, tốc độ ppm (trang/phút), khổ giấy.',
        guidingQuestion: 'Ý nghĩa của thông số DPI trên chuột và máy in? Máy in nào thích hợp in ảnh màu, phông bạt quảng cáo kích thước lớn với chi phí thấp?',
        hints: [
          'DPI (Dots Per Inch) càng cao thì chuột càng nhạy và máy in cho bản in càng sắc nét mịn màng.',
          'Máy in phun (Inkjet Printer) là lựa chọn tối ưu cho in ảnh màu, pano áp phích quảng cáo khổ lớn với chi phí bản in thấp.'
        ],
        discoverySummary: 'Mỗi thiết bị ngoại vi đều có các thông số kỹ thuật đặc trưng quyết định chất lượng và mục đích sử dụng trong thực tế.',
      },
      {
        id: 2,
        title: 'Đặc điểm các cổng kết nối: VGA, HDMI, USB, Cổng mạng',
        context: 'Hình 5.4 SGK minh họa các cổng kết nối: Cổng VGA (đầu cắm màu xanh dương), Cổng HDMI, Cổng USB, Cổng mạng Ethernet RJ45.',
        guidingQuestion: 'Sự khác biệt cốt lõi giữa cổng VGA và cổng HDMI là gì? Ưu điểm của cổng USB so với các cổng kết nối truyền thống?',
        hints: [
          'Cổng VGA dùng tín hiệu tương tự (analog), chỉ truyền hình ảnh, KHÔNG truyền âm thanh.',
          'Cổng HDMI dùng tín hiệu số (digital), truyền đồng thời cả hình ảnh độ phân giải cao và âm thanh đa kênh qua một sợi cáp duy nhất.',
          'Cổng USB có tốc độ cao, hỗ trợ cắm nóng (Hot-plug), cấp nguồn điện cho thiết bị và chuẩn hóa thay thế hầu hết các cổng cũ (cổng COM, LPT, PS/2).'
        ],
        discoverySummary: 'Cổng HDMI và USB là hai chuẩn giao tiếp số hiện đại vượt trội về tốc độ, sự tiện lợi và chất lượng truyền tải.',
      },
      {
        id: 3,
        title: 'Cách kết nối và vai trò của tham số kết nối',
        context: 'Nhiều trường hợp chỉ cần cắm cáp là dùng được ngay (nhờ cơ chế Plug & Play). Trong một số trường hợp khác, bắt buộc phải thiết lập các tham số kết nối (định dạng ảnh MTP, cho phép truy cập dữ liệu, ghép đôi Bluetooth).',
        guidingQuestion: 'Tham số kết nối là gì? Vì sao khi kết nối điện thoại hoặc tai nghe Bluetooth với máy tính ta phải thực hiện bước ghép đôi (Pairing)?',
        hints: [
          'Tham số kết nối là các dữ liệu quy định phương thức truyền tải để máy tính và thiết bị hiểu được cách thức trao đổi dữ liệu với nhau.',
          'Ghép đôi giúp máy tính nhận biết tên thiết bị, xác nhận quyền truy cập bảo mật và thiết lập các chế độ truyền âm thanh / truyền tệp.'
        ],
        discoverySummary: 'Tham số kết nối đảm bảo tính tương thích và bảo mật giữa các thiết bị. Không có một phương thức kết nối chung cho mọi thiết bị số.',
      },
    ],
    knowledgeBox: [
      'Thông số quan trọng của màn hình: kích thước đường chéo (inch), độ phân giải (số điểm ảnh), khả năng thể hiện màu (24-bit True Color), tần số quét (Hz); thông số máy in: độ phân giải (DPI), tốc độ in (ppm).',
      'Cổng VGA chỉ truyền tín hiệu hình ảnh tương tự (analog); cổng HDMI truyền tín hiệu số (digital) bao gồm cả hình ảnh độ nét cao và âm thanh.',
      'Cổng USB có tốc độ truyền tải ngày càng cao, thay thế và loại bỏ nhiều cổng giao tiếp cũ.',
      'Không có một cách kết nối chung cho mọi thiết bị số vì chúng sử dụng các cổng kết nối khác nhau và có các tham số kết nối khác nhau.',
    ],
    practicalGuide: {
      title: 'Thực hành kết nối điện thoại qua USB và ghép đôi loa/tai nghe Bluetooth',
      steps: [
        'Kết nối điện thoại qua cổng USB: Cắm cáp kết nối điện thoại vào cổng USB máy tính -> Mở khóa màn hình điện thoại -> Chọn chế độ "Cho phép truy cập dữ liệu / Truyền tệp (MTP)" -> Mở File Explorer trên PC để duyệt và sao chép ảnh từ thư mục DCIM.',
        'Kết nối thiết bị Bluetooth: Bật Bluetooth trên điện thoại/loa -> Vào Settings trên máy tính -> Chọn Devices -> Bluetooth & other devices -> Bật Bluetooth -> Nhấn Add Bluetooth or other device -> Chọn thiết bị từ danh sách dò tìm và hoàn tất ghép đôi (Pairing).',
      ],
    },
    exerciseReview: [
      {
        question: 'Bài 1 (SGK tr.31): Thực hiện kết nối máy tính với một điện thoại thông minh qua cổng USB để sao chép ảnh về máy tính?',
        answer: 'Thực hiện cắm cáp USB, trên điện thoại chọn "Truyền tệp/ảnh (MTP)". Trên máy tính, mở File Explorer, truy cập vào tên điện thoại -> Bộ nhớ trong -> Thư mục DCIM -> Camera -> Chọn ảnh và Copy sang thư mục Pictures trên máy tính.',
      },
      {
        question: 'Bài 2 (SGK tr.31): Trình bày các bước kết nối máy tính với loa Bluetooth để nghe nhạc?',
        answer: 'Bật nguồn loa Bluetooth và kích hoạt chế độ ghép đôi (đèn nhấp nháy). Trên máy tính, mở Settings -> Bluetooth & devices -> Bật Bluetooth -> Nhấn Add device -> Chọn Bluetooth -> Nhấp vào tên loa Bluetooth -> Hệ thống báo "Connected" -> Mở bài hát để thưởng thức âm thanh qua loa.',
      },
    ],
    application: {
      question: 'Tìm hiểu đặc điểm của máy quét ảnh (Scanner) và máy chiếu (Projector): Là thiết bị vào hay ra? Công nghệ chế tạo và các tham số kỹ thuật chính?',
      guidance: 'Máy quét (Scanner) là THIẾT BỊ VÀO, có chức năng số hóa hình ảnh/văn bản thành tệp kỹ thuật số, công nghệ cảm biến CCD/CIS, thông số chính: độ phân giải DPI, độ sâu màu bit, khổ giấy (A4, A3). Máy chiếu (Projector) là THIẾT BỊ RA, dùng chiếu hình ảnh lên màn chiếu lớn, công nghệ phổ biến: LCD, DLP, LED; thông số chính: độ phân giải (Full HD, 4K), độ sáng (Lumens, ANSI Lumens), tỷ lệ tương phản và cổng kết nối (HDMI, VGA).',
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 5',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-5-ket-noi-may-tinh-voi-cac-thiet-bi-so',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 5 Tin học 11',
    },
  },

  // =========================================================================
  // BÀI 6: LƯU TRỮ VÀ CHIA SẺ TỆP TIN TRÊN INTERNET
  // =========================================================================
  {
    id: 6,
    topicId: 2,
    lessonNumber: 6,
    title: 'Lưu trữ và chia sẻ tệp tin trên Internet',
    pageRange: 'Trang 32 - 35',
    objectives: [
      'Giải thích được khái niệm dịch vụ lưu trữ đám mây (Cloud Storage) và ổ đĩa trực tuyến.',
      'Nêu được 3 tính năng cơ bản của dịch vụ lưu trữ trực tuyến: tải tệp lên, tạo mới & quản lý tệp/thư mục, chia sẻ tệp.',
      'Phân biệt rõ 3 quyền chia sẻ: Quyền chỉ xem (Viewer), Quyền nhận xét (Commenter), Quyền chỉnh sửa (Editor).',
      'Thực hiện thành thạo các thao tác lưu trữ, phân quyền chia sẻ tệp trên Google Drive và so sánh ưu nhược điểm của các dịch vụ đám mây.',
    ],
    starter: {
      situation: 'Nhóm em đang cùng nhau làm một bài tập chung. Em được giao nhiệm vụ viết kế hoạch và phân công công việc cho mọi người trong nhóm.',
      question: 'Có những cách nào để chia sẻ văn bản kế hoạch này cho các thành viên trong nhóm và theo dõi tiến độ?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Bản chất dịch vụ lưu trữ đám mây và 3 tính năng cơ bản',
        context: 'Hình 6.1 SGK minh họa dịch vụ lưu trữ đám mây. Người dùng được cấp một ổ đĩa trực tuyến trên không gian máy chủ mạng.',
        guidingQuestion: 'Tại sao dịch vụ này được gọi là "Lưu trữ đám mây"? Ba tính năng cơ bản của ổ đĩa trực tuyến là gì?',
        hints: [
          'Đám mây là biểu tượng ẩn dụ cho mạng Internet toàn cầu; dữ liệu không nằm cố định trên ổ cứng cá nhân mà đặt trên hệ thống máy chủ phân tán có thể truy cập mọi lúc mọi nơi.',
          '3 tính năng cơ bản: a) Tải tệp/thư mục từ máy tính lên ổ đĩa trực tuyến; b) Tạo mới và quản lý, chỉnh sửa tệp/thư mục trực tiếp trên trình duyệt web; c) Chia sẻ thư mục và tệp cho người khác cùng làm việc.'
        ],
        discoverySummary: 'Lưu trữ đám mây biến ổ đĩa thành dịch vụ mạng, cho phép người dùng lưu trữ, chỉnh sửa trực tiếp và chia sẻ tài nguyên linh hoạt.',
      },
      {
        id: 2,
        title: '3 chế độ phân quyền khi chia sẻ tệp và các dịch vụ đám mây phổ biến',
        context: 'Khi chia sẻ tệp hoặc thư mục, chủ sở hữu (Owner) có thể cấp quyền cho từng người dùng qua địa chỉ email hoặc liên kết công khai.',
        guidingQuestion: 'Ba chế độ chia sẻ gồm những quyền gì? Kể tên các dịch vụ lưu trữ đám mây phổ biến nhất hiện nay?',
        hints: [
          '1) Quyền chỉ xem (Viewer): Chỉ được mở xem và tải về, không được sửa hay xóa.',
          '2) Quyền được xem và nhận xét (Commenter): Được xem và để lại các nhận xét bình luận góp ý.',
          '3) Quyền chỉnh sửa (Editor): Được toàn quyền thay đổi nội dung, đổi tên tệp, thêm mới tệp con và chia sẻ tiếp cho người khác.',
          'Các dịch vụ phổ biến: Google Drive (Google), OneDrive (Microsoft), iCloud (Apple), Dropbox, Mega.'
        ],
        discoverySummary: 'Phân quyền chặt chẽ giúp bảo vệ tính toàn vẹn của dữ liệu trong quá trình làm việc nhóm trực tuyến.',
      },
      {
        id: 3,
        title: 'Ưu điểm và nhược điểm của việc lưu trữ và chia sẻ tệp trên Internet',
        context: 'Thảo luận nhóm so sánh giữa lưu trữ đám mây trực tuyến và lưu trữ trên thiết bị nhớ ngoài (USB, ổ cứng di động).',
        guidingQuestion: 'Những ưu điểm vượt trội và các hạn chế cần lưu ý khi sử dụng dịch vụ đám mây là gì?',
        hints: [
          'Ưu điểm: Truy cập dữ liệu mọi lúc mọi nơi; Chia sẻ đồng thời không giới hạn số người; Tự động sao lưu đồng bộ tránh mất dữ liệu do hỏng máy hay mất điện; Tránh gửi qua lại quá nhiều phiên bản tệp gây nhầm lẫn.',
          'Nhược điểm: Bắt buộc phải có kết nối Internet; Dung lượng miễn phí có hạn, muốn dùng nhiều phải trả phí; Tính bảo mật phụ thuộc vào tài khoản người dùng và chính sách của nhà cung cấp dịch vụ.'
        ],
        discoverySummary: 'Lưu trữ đám mây là xu hướng tất yếu của xã hội số, đem lại hiệu suất làm việc vượt trội nhưng đòi hỏi người dùng có ý thức bảo mật tài khoản.',
      },
    ],
    knowledgeBox: [
      'Sử dụng dịch vụ lưu trữ thư mục và tệp trực tuyến, người dùng được cung cấp một ổ đĩa trực tuyến trên đám mây Internet.',
      'Trên ổ đĩa trực tuyến, người dùng có thể: tải tệp/thư mục lên để lưu trữ, tạo mới, chỉnh sửa trực tiếp trên trình duyệt và chia sẻ cho người khác.',
      'Ba chế độ phân quyền khi chia sẻ: 1) Quyền chỉ xem; 2) Quyền được xem và nhận xét; 3) Quyền chỉnh sửa (cho phép đổi tên tệp, thêm mới tệp con và chia sẻ tiếp).',
      'Các dịch vụ lưu trữ đám mây phổ biến: Google Drive, Microsoft OneDrive, Apple iCloud, Dropbox, Mega.',
    ],
    practicalGuide: {
      title: 'Các bước lưu trữ và chia sẻ tệp tin trên Google Drive',
      steps: [
        'Bước 1: Truy cập trang web Google Drive (drive.google.com) và đăng nhập bằng tài khoản Google.',
        'Bước 2: Tải tệp lên: Nhấn nút "+ Mới" ở góc trên bên trái -> Chọn "Tải tệp lên" (hoặc "Tải thư mục lên") -> Chọn tệp từ máy tính -> Nhấn Open để hoàn tất tải lên.',
        'Bước 3: Chia sẻ tệp: Nhấp chuột phải vào tệp cần chia sẻ -> Chọn "Chia sẻ" (Share).',
        'Bước 4: Thiết lập quyền: Nhập địa chỉ email của các thành viên trong nhóm -> Chọn chế độ chia sẻ phù hợp (Người xem / Người nhận xét / Người chỉnh sửa) -> Soạn lời nhắn -> Nhấn "Gửi" (Send).',
      ],
    },
    exerciseReview: [
      {
        question: 'Bài 1 (SGK tr.35): Khi Khoa được chia sẻ Thư mục X với quyền "Người chỉnh sửa", Khoa có thể thực hiện những thao tác nào sau đây: (1) Đổi tên các tệp trong Thư mục X; (2) Thêm mới tệp vào Thư mục X; (3) Đổi tên chính Thư mục X; (4) Chia sẻ Thư mục X cho người khác?',
        answer: 'Khoa có thể thực hiện các thao tác (1), (2) và (4): đổi tên tệp con, thêm tệp mới và chia sẻ cho người khác. Khoa KHÔNG thể đổi tên chính Thư mục X của chủ sở hữu (chỉ chủ sở hữu mới có quyền đổi tên thư mục gốc đã chia sẻ).',
      },
      {
        question: 'Bài 2 (SGK tr.35): So sánh dung lượng miễn phí của các dịch vụ đám mây phổ biến hiện nay?',
        answer: 'Google Drive cung cấp 15 GB miễn phí (chia sẻ chung cho Gmail, Drive, Photos); Microsoft OneDrive cung cấp 5 GB; Apple iCloud cung cấp 5 GB; Dropbox cung cấp 2 GB; Mega cung cấp 20 GB miễn phí.',
      },
    ],
    application: {
      question: 'Lập bảng so sánh trải nghiệm dịch vụ lưu trữ đám mây của 3 nhà cung cấp khác nhau (Google Drive, OneDrive, iCloud) theo các tiêu chí: dung lượng miễn phí, khả năng tải lên/xuống, khả năng chia sẻ, tính thân thiện dễ dùng và đánh giá cá nhân?',
      guidance: 'Học sinh lập bảng gồm 5 cột: Tiêu chí so sánh, Google Drive (15GB, cực kỳ phổ biến, tích hợp văn phòng Docs/Sheets, thân thiện 5 sao), Microsoft OneDrive (5GB, tích hợp sâu vào Windows và Office 365, thân thiện 4.5 sao), Apple iCloud (5GB, tối ưu tuyệt đối cho hệ sinh thái iPhone/iPad/Mac, tự động sao lưu ảnh và danh bạ, thân thiện 4.5 sao).',
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 6',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-6-luu-tru-va-chia-se-tep-tin-tren-internet',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 6 Tin học 11',
    },
  },

  // =========================================================================
  // BÀI 7: THỰC HÀNH TÌM KIẾM THÔNG TIN TRÊN INTERNET
  // =========================================================================
  {
    id: 7,
    topicId: 2,
    lessonNumber: 7,
    title: 'Thực hành tìm kiếm thông tin trên Internet',
    pageRange: 'Trang 36 - 39',
    objectives: [
      'Thực hiện thành thạo quy trình tìm kiếm thông tin trên Internet bằng máy tìm kiếm.',
      'Khám phá và sử dụng thành thạo tính năng tìm kiếm bằng tiếng nói (Voice Search) qua micro.',
      'Xác lập được các tiêu chí tìm kiếm nâng cao: lọc theo dạng kết quả (hình ảnh, tin tức, video) và định dạng tệp tin bằng cú pháp filetype:pdf.',
      'Trải nghiệm, so sánh và đánh giá các máy tìm kiếm phổ biến: Google, Bing, Ask.',
    ],
    starter: {
      situation: 'Có ý kiến cho rằng: "Ngày nay, tất cả mọi thông tin đều có thể tìm thấy trên Internet".',
      question: 'Theo em, tại sao khi cùng tìm thông tin về một chủ đề, có người tìm được rất nhanh và chính xác, còn có người lại không tìm được?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Quy trình 3 bước tìm kiếm thông tin cơ bản bằng máy tìm kiếm',
        context: 'Để tìm kiếm thông tin trên Internet, người dùng sử dụng trình duyệt truy cập máy tìm kiếm như Google (google.com).',
        guidingQuestion: 'Quy trình tìm kiếm chuẩn gồm các bước nào? Cần làm gì nếu kết quả tìm kiếm chưa đúng ý muốn?',
        hints: [
          'Bước 1: Khởi động công cụ tìm kiếm trên trình duyệt web.',
          'Bước 2: Nhập từ khóa tìm kiếm cô đọng, chính xác vào ô tìm kiếm.',
          'Bước 3: Đọc và chọn lọc kết quả tìm kiếm.',
          'Nếu kết quả chưa ưng ý: Quay lại bước 2 với từ khóa khác cụ thể hơn hoặc sử dụng các từ đồng nghĩa.'
        ],
        discoverySummary: 'Kỹ năng xác định từ khóa ngắn gọn, mang tính định danh cao là yếu tố quyết định tốc độ và độ chính xác khi tra cứu.',
      },
      {
        id: 2,
        title: 'Tìm kiếm thông tin bằng tiếng nói (Voice Search)',
        context: 'Thay vì gõ bàn phím, người dùng có thể nháy chuột vào biểu tượng micro bên cạnh ô tìm kiếm để nói trực tiếp từ khóa.',
        guidingQuestion: 'Quy trình thực hiện tìm kiếm bằng tiếng nói diễn ra theo các bước nào?',
        hints: [
          'Bước 1: Mở máy tìm kiếm có hỗ trợ micro.',
          'Bước 2: Nháy chuột vào biểu tượng Micro, phát âm to rõ ràng từ khóa tìm kiếm.',
          'Bước 3: Kiểm tra từ khóa được hệ thống tự động nhận dạng điền vào ô tìm kiếm (nếu sai thì nói lại).',
          'Bước 4: Đọc kết quả hiển thị trên trang.'
        ],
        discoverySummary: 'Tìm kiếm bằng giọng nói giúp tra cứu nhanh chóng, thuận tiện khi đang di chuyển hoặc thao tác trên thiết bị di động.',
      },
      {
        id: 3,
        title: 'Xác lập tiêu chí tìm kiếm nâng cao và lọc định dạng tệp tin',
        context: 'Khi tìm kiếm thông báo tuyển sinh của một trường đại học hoặc tài liệu học tập, muốn nhận văn bản chuẩn gốc dạng PDF.',
        guidingQuestion: 'Làm thế nào để tìm kiếm chính xác tệp tin định dạng .pdf hoặc lọc theo dạng hình ảnh, tin tức, video?',
        hints: [
          'Lọc theo dạng kết quả: Nhấp vào các tab phân loại ngay dưới ô tìm kiếm: Hình ảnh (Images), Tin tức (News), Video, Sách.',
          'Lọc định dạng tệp: Dùng cú pháp toán tử `filetype:pdf` (Ví dụ: `tuyển sinh Đại học Dược Hà Nội 2022 + filetype:pdf`). Kết quả sẽ chỉ hiển thị các liên kết tải tệp PDF chính thức.'
        ],
        discoverySummary: 'Sử dụng toán tử filetype và các tab lọc kết quả giúp thu hẹp phạm vi tìm kiếm, loại bỏ thông tin rác và tiếp cận trực tiếp tài liệu gốc.',
      },
      {
        id: 4,
        title: 'Trải nghiệm và so sánh giữa các máy tìm kiếm phổ biến',
        context: 'Thực hiện cùng một từ khóa tìm kiếm trên Google (google.com), Microsoft Bing (bing.com) và Ask (ask.com).',
        guidingQuestion: 'Các máy tìm kiếm có những điểm khác biệt gì về giao diện, tốc độ và cách tổ chức kết quả?',
        hints: [
          'Google: Tốc độ cực nhanh, cơ sở dữ liệu tiếng Việt khổng lồ, thuật toán xếp hạng thông minh nhất.',
          'Bing: Tích hợp hình nền đẹp thay đổi mỗi ngày, hỗ trợ tìm kiếm hình ảnh và tích hợp công nghệ AI rất mạnh.',
          'Ask: Tập trung trả lời các câu hỏi bằng ngôn ngữ tự nhiên theo dạng Q&A.'
        ],
        discoverySummary: 'Mỗi máy tìm kiếm có thế mạnh riêng. Biết kết hợp nhiều công cụ giúp người học có cái nhìn đa chiều và toàn diện.',
      },
    ],
    knowledgeBox: [
      'Quy trình tìm kiếm thông tin bằng máy tìm kiếm: 1) Khởi động công cụ; 2) Nhập từ khóa; 3) Đọc và chọn lọc kết quả. Nếu chưa thỏa mãn, đổi từ khóa cụ thể hơn.',
      'Tìm kiếm bằng tiếng nói (Voice Search) thông qua biểu tượng micro giúp nhập từ khóa nhanh chóng mà không cần gõ bàn phím.',
      'Nâng cao hiệu quả tìm kiếm bằng cách chọn phân loại kết quả (Hình ảnh, Tin tức, Video) hoặc sử dụng toán tử định dạng tệp tin (cú pháp: từ khóa + filetype:pdf / filetype:docx).',
      'Trải nghiệm và so sánh nhiều máy tìm kiếm (Google, Bing, Ask...) giúp nâng cao kỹ năng tìm kiếm và xác minh thông tin đa nguồn.',
    ],
    practicalGuide: {
      title: 'Các bước tra cứu tài liệu học tập nâng cao bằng cú pháp filetype:pdf',
      steps: [
        'Bước 1: Mở trình duyệt web và truy cập máy tìm kiếm Google.',
        'Bước 2: Gõ từ khóa cần tìm kèm cú pháp filetype:pdf. Ví dụ: đề thi tốt nghiệp THPT tin học + filetype:pdf.',
        'Bước 3: Nhấn Enter. Quan sát các kết quả có nhãn [PDF] màu đỏ/xám đứng trước tiêu đề.',
        'Bước 4: Nhấp vào liên kết để mở trực tiếp hoặc tải tệp tài liệu PDF về máy tính.',
      ],
    },
    exerciseReview: [
      {
        question: 'Luyện tập (SGK tr.39): Thực hiện lại các nhiệm vụ tìm kiếm thông tin bằng tiếng nói và tìm kiếm tệp PDF trên thiết bị số thông minh (smartphone)?',
        answer: 'Trên điện thoại, mở ứng dụng Google hoặc trình duyệt Chrome, chạm vào biểu tượng micro để nói từ khóa tìm kiếm. Sau đó gõ từ khóa kèm `filetype:pdf` để tải tài liệu PDF trực tiếp về thư mục Download của điện thoại.',
      },
    ],
    application: {
      question: 'Vận dụng (SGK tr.39): Sử dụng máy tìm kiếm để tìm hiểu thông tin về nghề nghiệp mà em mơ ước được làm trong tương lai dưới cả 3 dạng: văn bản, hình ảnh và video?',
      guidance: 'Học sinh chọn một ngành nghề (ví dụ: Kỹ sư trí tuệ nhân tạo AI / Lập trình viên phần mềm / Chuyên gia an ninh mạng). 1) Dạng văn bản: Tìm kiếm mô tả công việc, trường đào tạo và mức lương trung bình; 2) Dạng hình ảnh: Chuyển sang tab "Hình ảnh" để xem không gian làm việc; 3) Dạng video: Chuyển sang tab "Video" xem phóng sự về một ngày làm việc thực tế của nghề nghiệp đó.',
    },
    defaultApp: {
      name: 'Google Tìm kiếm nâng cao',
      type: 'external',
      url: 'https://www.google.com/advanced_search',
      badge: 'Bộ máy tìm kiếm',
      description: 'Trang công cụ tìm kiếm nâng cao với đầy đủ tiêu chí lọc định dạng và ngôn ngữ',
    },
  },

  // =========================================================================
  // BÀI 8: THỰC HÀNH NÂNG CAO SỬ DỤNG THƯ ĐIỆN TỬ VÀ MẠNG XÃ HỘI
  // =========================================================================
  {
    id: 8,
    topicId: 2,
    lessonNumber: 8,
    title: 'Thực hành nâng cao sử dụng thư điện tử và mạng xã hội',
    pageRange: 'Trang 40 - 42',
    objectives: [
      'Biết cách đánh dấu và phân loại thư điện tử trong Gmail bằng Dấu sao (Star) và Dấu quan trọng (Important).',
      'Hiểu rõ bản chất và thực hiện thành thạo việc tạo, quản lý và gán Nhãn (Labels) cho thư điện tử.',
      'Phân biệt được sự khác nhau giữa Nhãn (Label) và Thư mục (Folder) truyền thống.',
      'Thực hiện được các bước tạo Fanpage trên Facebook và thiết lập các tùy chọn bảo mật quyền riêng tư tài khoản.',
    ],
    starter: {
      situation: 'Thư điện tử trong hộp thư đến (Inbox) thường hiển thị theo trình tự thời gian gửi tới. Khi số lượng thư lên tới hàng nghìn bức, việc tìm đọc lại các thư quan trọng đã nhận trước đây trở nên rất khó khăn.',
      question: 'Em hãy trao đổi với các bạn về những cách giúp em phân loại, đánh dấu và tìm đọc lại những thư quan trọng một cách nhanh nhất?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Đánh dấu và phân loại thư quan trọng trong Gmail: Dấu sao vs Dấu quan trọng',
        context: 'Trong Gmail, thư có thể được đánh dấu bằng Dấu sao màu vàng hoặc Dấu quan trọng hình mũi tên/nhãn màu vàng.',
        guidingQuestion: 'Gmail tự động xác định thư quan trọng dựa vào những dấu hiệu nào? Cách tìm kiếm nhanh tất cả thư quan trọng?',
        hints: [
          'Dấu hiệu Gmail tự động nhận biết: Người gửi thường xuyên tương tác; Thư được mở và trả lời; Từ khóa trong thư thường xuyên đọc; Thư được người dùng chủ động gắn sao hoặc lưu trữ.',
          'Cách tìm kiếm: Gõ cú pháp `is:important` trong ô tìm kiếm Gmail để hiển thị toàn bộ thư quan trọng; gõ `is:starred` để tìm thư gắn sao.',
          'So sánh: Dấu sao có thể tùy biến nhiều màu sắc và biểu tượng để phân cấp mức độ; Dấu quan trọng chỉ có màu vàng thể hiện tính ưu tiên.'
        ],
        discoverySummary: 'Sử dụng dấu sao và dấu quan trọng giúp làm nổi bật các thư cần ưu tiên xử lý và tra cứu tức thì.',
      },
      {
        id: 2,
        title: 'Sắp xếp, phân loại thư bằng Nhãn (Labels) và phân biệt với Thư mục',
        context: 'Nhãn (Label) dùng để sắp xếp, nhóm các thư có cùng chủ đề (Học tập, Công việc, Gia đình) giúp tiết kiệm thời gian và tránh thất lạc.',
        guidingQuestion: 'Điểm khác biệt cốt lõi giữa Nhãn (Label) và Thư mục (Folder) là gì? Quy trình tạo và gán nhãn?',
        hints: [
          'Khác biệt cốt lõi: Một bức thư trong Gmail có thể được gán NHIỀU NHÃN khác nhau (vừa thuộc nhãn Học tập, vừa thuộc nhãn Quan trọng); trong khi thư mục truyền thống chỉ chứa 1 tệp tại 1 vị trí duy nhất.',
          'Khi xóa một bức thư, thư đó sẽ bị xóa khỏi mọi nhãn đính kèm cũng như trong Hộp thư đến.',
          'Quy trình: Bước 1: Danh sách mở rộng bên trái -> Tạo nhãn mới -> Nhập tên nhãn -> Lưu; Bước 2: Chọn các thư trong Inbox -> Nhấn biểu tượng Nhãn -> Đánh dấu nhãn cần gán -> Nhấn Áp dụng.'
        ],
        discoverySummary: 'Nhãn trong Gmail linh hoạt hơn thư mục, cho phép phân loại đa chiều một bức thư theo nhiều tiêu chí khác nhau.',
      },
      {
        id: 3,
        title: 'Quy trình tạo Fanpage quảng bá thương hiệu trên Facebook',
        context: 'Fanpage (Trang) trên Facebook được các tổ chức, trường học, doanh nghiệp sử dụng để kết nối cộng đồng và truyền thông.',
        guidingQuestion: 'Các bước tạo một Fanpage từ tài khoản Facebook cá nhân được tiến hành như thế nào?',
        hints: [
          'Bước 1: Đăng nhập Facebook, nhấp vào biểu tượng Menu (9 dấu chấm) -> Trong mục Tạo (Create), chọn Trang (Page).',
          'Bước 2: Nhập Tên trang cần tạo, chọn Hạng mục phù hợp (Giáo dục, Thể thao...), nhập phần Mô tả ngắn gọn -> Nhấn Tạo trang.',
          'Bước 3: Cập nhật hình ảnh (ảnh đại diện Avatar, ảnh bìa Cover), thông tin liên hệ và đăng các bài viết đầu tiên.',
          'Bước 4: Khám phá các tính năng quản lý trang (quản trị viên, xem chỉ số tương tác Insights).'
        ],
        discoverySummary: 'Fanpage là công cụ số hữu hiệu để quảng bá thương hiệu tổ chức và giao tiếp với công chúng mục tiêu.',
      },
      {
        id: 4,
        title: 'Tìm hiểu và cài đặt quyền riêng tư, bảo mật trên Facebook',
        context: 'Hình 8.4 và 8.5 SGK minh họa các tùy chọn thiết lập đối tượng xem bài viết và cài đặt trang cá nhân, gắn thẻ.',
        guidingQuestion: 'Làm thế nào để kiểm soát ai có thể xem bài viết của mình trong tương lai và ngăn chặn việc bị gắn thẻ (tag) tự do?',
        hints: [
          'Thiết lập người xem bài viết: Cài đặt & Quyền riêng tư -> Cài đặt -> Quyền riêng tư -> Mục "Ai có thể xem các bài viết của bạn trong tương lai?" -> Chọn Bạn bè (Friends) hoặc Tùy chỉnh (Custom) thay vì Công khai (Public).',
          'Kiểm soát gắn thẻ: Vào mục "Trang cá nhân và gắn thẻ" -> Bật tính năng "Xem lại" (Review): Xem lại bài viết có gắn thẻ bạn trước khi bài viết đó xuất hiện trên dòng thời gian cá nhân của bạn.'
        ],
        discoverySummary: 'Chủ động kiểm soát quyền riêng tư và phê duyệt gắn thẻ giúp bảo vệ hình ảnh cá nhân và tránh bị lợi dụng lan truyền mã độc trên mạng xã hội.',
      },
    ],
    knowledgeBox: [
      'Dấu hiệu thư quan trọng trong Gmail gồm: tần suất gửi nhận, thư được mở và trả lời, từ khóa thường xuyên đọc; có thể tìm kiếm bằng lệnh is:important.',
      'Nhãn (Label) dùng để sắp xếp phân loại thư; một bức thư có thể gắn nhiều nhãn cùng lúc. Khi xóa thư, thư sẽ bị xóa khỏi mọi nhãn đính kèm.',
      'Tạo Fanpage trên Facebook bằng cách vào Menu -> Tạo -> Trang; nhập tên trang, hạng mục, mô tả và xuất bản.',
      'Cần chủ động thiết lập quyền riêng tư: giới hạn đối tượng xem bài viết tương lai và bật tính năng xét duyệt bài viết được gắn thẻ trước khi hiển thị trên trang cá nhân.',
    ],
    practicalGuide: {
      title: 'Các bước tạo nhãn và phân loại thư trong Gmail',
      steps: [
        'Bước 1: Đăng nhập Gmail trên trình duyệt máy tính.',
        'Bước 2: Nhìn sang cột danh mục bên trái, cuộn xuống nhấn "Danh sách mở rộng" (More) -> Nhấn vào dấu cộng (+) "Tạo nhãn mới" (Create new label).',
        'Bước 3: Nhập tên nhãn (ví dụ: Tin học 11, Bài tập nhóm) -> Nhấn "Tạo" (Create).',
        'Bước 4: Vào Hộp thư đến, tích chọn các bức thư liên quan -> Nhấn vào biểu tượng "Nhãn" (Labels) trên thanh công cụ -> Tích chọn nhãn vừa tạo -> Nhấn "Áp dụng" (Apply).',
      ],
    },
    exerciseReview: [
      {
        question: 'Bài 1 (SGK tr.42): Tạo mới một vài nhãn trong hộp thư của em để phân loại các thư liên quan đến học tập và giải trí. Gán nhãn phù hợp cho các thư và tìm kiếm chúng theo nhãn. Thực hiện việc chỉnh sửa và xóa nhãn?',
        answer: 'Thực hiện tạo 2 nhãn: "Học tập" và "Giải trí". Chọn các email tương ứng gán nhãn. Để tìm kiếm, nhấp vào tên nhãn ở cột trái hoặc gõ `label:hoc-tap`. Để chỉnh sửa hoặc xóa nhãn: di chuột vào tên nhãn ở cột trái, nhấp vào biểu tượng 3 dấu chấm -> Chọn "Chỉnh sửa" (Edit) để đổi tên hoặc chọn "Xóa nhãn" (Remove label - lưu ý xóa nhãn sẽ không xóa thư bên trong).',
      },
      {
        question: 'Bài 2 (SGK tr.42): Kiểm tra việc cài đặt quyền riêng tư hiện tại trong tài khoản Facebook của em. Thực hiện các cài đặt phù hợp để tăng tính bảo mật?',
        answer: 'Đăng nhập Facebook -> Nhấp avatar góc phải -> Chọn "Cài đặt & quyền riêng tư" -> "Kiểm tra quyền riêng tư" (Privacy Checkup) -> Điều chỉnh mục "Ai có thể nhìn thấy nội dung bạn chia sẻ" sang chế độ "Bạn bè" (Friends); kiểm tra mục "Bảo mật tài khoản" bật tính năng Xác thực 2 yếu tố (2FA).',
      },
    ],
    application: {
      question: 'Khám phá và sử dụng các tính năng nâng cao liên quan tới cài đặt riêng tư cho tài khoản Facebook: a) Xóa lịch sử hoạt động Facebook để ngăn phân phối quảng cáo; b) Bật, tắt dịch vụ vị trí của người dùng?',
      guidance: 'a) Xóa lịch sử hoạt động: Vào Cài đặt & quyền riêng tư -> Nhật ký hoạt động (Activity Log) -> Hoạt động ngoài Facebook -> Nhấn "Xóa lịch sử hoạt động trước đây". b) Bật/tắt vị trí: Trên điện thoại, vào Cài đặt của máy -> Ứng dụng Facebook -> Quyền riêng tư -> Vị trí (Location) -> Chọn "Không bao giờ" (Never) hoặc tắt tính năng định vị chính xác.',
    },
    defaultApp: {
      name: 'Gmail Web Client',
      type: 'external',
      url: 'https://mail.google.com/',
      badge: 'Email Client',
      description: 'Hộp thư điện tử Gmail với đầy đủ tính năng phân loại nhãn và gắn sao',
    },
  },

  // =========================================================================
  // BÀI 9: GIAO TIẾP AN TOÀN TRÊN INTERNET
  // =========================================================================
  {
    id: 9,
    topicId: 3,
    lessonNumber: 9,
    title: 'Giao tiếp an toàn trên Internet',
    pageRange: 'Trang 43 - 48',
    objectives: [
      'Nhận biết được mục đích và 4 dạng lừa đảo phổ biến nhất trên không gian số.',
      'Nắm vững và vận dụng linh hoạt 3 NGUYÊN TẮC VÀNG phòng chống lừa đảo trên mạng: Hãy chậm lại - Kiểm tra ngay - Dừng lại, không gửi.',
      'Nắm vững 4 quy tắc ứng xử chuẩn mực trong môi trường số: Tôn trọng tuân thủ pháp luật, Lành mạnh, An toàn bảo mật, Trách nhiệm.',
      'Phân biệt rõ ràng các hành vi NÊN LÀM và KHÔNG NÊN LÀM khi tham gia mạng xã hội và không gian số.',
    ],
    starter: {
      situation: 'Mạng Internet mang lại nhiều lợi ích to lớn nhưng cũng tiềm ẩn nhiều rủi ro: mất cắp dữ liệu cá nhân, lừa đảo tài chính, bắt nạt quấy rối qua mạng, đối mặt tin giả sai lệch hoặc bị lôi kéo vào các thử thách độc hại.',
      question: 'Khi tham gia mạng xã hội và không gian số, mỗi công dân số cần trang bị cho mình những kỹ năng ứng xử và phòng tránh lừa đảo thiết yếu nào?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Mục đích của kẻ lừa đảo và 4 dạng lừa đảo phổ biến trên không gian số',
        context: 'Kẻ lừa đảo thường nhắm vào tài chính hoặc gây tổn hại thể xác, tinh thần nạn nhân. Chúng đánh vào đòn tâm lý (sợ hãi trước cơ quan pháp luật, lòng tham phần thưởng hoặc sự nhẹ dạ cả tin) khiến nạn nhân mất bình tĩnh.',
        guidingQuestion: 'Bốn dạng lừa đảo phổ biến trên không gian số hiện nay là gì? Nhận diện đặc điểm của từng dạng?',
        hints: [
          '1) Lừa đảo hỗ trợ kỹ thuật: Thuyết phục thiết bị của nạn nhân bị hỏng/nhiễm virus, yêu cầu trả tiền gấp hoặc cài phần mềm điều khiển từ xa để chiếm đoạt tài khoản.',
          '2) Lừa đảo thông báo tin tốt: Thông báo trúng thưởng xe máy, tiền mặt hoặc nhận quà tặng tri ân giá trị cao nhưng yêu cầu nộp trước phí vận chuyển/thuế.',
          '3) Lừa đảo thông báo tin xấu: Giả danh công an, viện kiểm sát, bác sĩ thông báo người thân cấp cứu cần đóng viện phí ngay để mổ.',
          '4) Lừa đảo mạo danh thương mại điện tử: Lập website/fanpage giả mạo Shopee, Lazada bán đồ giá rẻ giật mình nhằm chiếm đoạt tiền cọc hoặc đánh cắp mã OTP ngân hàng.'
        ],
        discoverySummary: 'Kẻ lừa đảo luôn dựng lên câu chuyện khẩn cấp để gây áp lực tâm lý. Nhận diện 4 chiêu thức phổ biến giúp chúng ta luôn cảnh giác.',
      },
      {
        id: 2,
        title: 'Ba nguyên tắc vàng phòng tránh lừa đảo trên không gian số',
        context: 'Trước các tình huống bất thường (tin nhắn đòi nợ, thông báo chuyển tiền gấp, email chứa đường link lạ), cần có quy tắc hành vi chuẩn mực.',
        guidingQuestion: 'Ba nguyên tắc vàng ứng xử khi gặp nghi vấn lừa đảo trên không gian số là gì?',
        hints: [
          'Nguyên tắc 1: HÃY CHẬM LẠI (Slow Down): Bình tĩnh, hít thở sâu, không để áp lực thời gian của kẻ xấu cuốn theo.',
          'Nguyên tắc 2: KIỂM TRA NGAY (Check Now): Gọi điện thoại trực tiếp bằng số điện thoại quen thuộc cho người thân hoặc tra cứu số tổng đài chính thống của cơ quan, ngân hàng để xác minh.',
          'Nguyên tắc 3: DỪNG LẠI, KHÔNG GỬI (Stop, Don\'t Send): Tuyệt đối không chuyển tiền, không bấm link lạ, không cung cấp mã OTP hay thông tin cá nhân khi chưa được xác thực 100%.'
        ],
        discoverySummary: 'Ba nguyên tắc: HÃY CHẬM LẠI - KIỂM TRA NGAY - DỪNG LẠI, KHÔNG GỬI là lá chắn vững chắc bảo vệ tài sản và sự an toàn của người dùng số.',
      },
      {
        id: 3,
        title: 'Bốn quy tắc ứng xử trong môi trường số theo quy định chuẩn mực',
        context: 'Hình 9.1 SGK tr.46 minh họa 4 quy tắc ứng xử theo Bộ quy tắc ứng xử trên mạng xã hội của Bộ Thông tin & Truyền thông.',
        guidingQuestion: 'Ý nghĩa và nội dung cụ thể của 4 quy tắc ứng xử trên môi trường số là gì?',
        hints: [
          '1) Tôn trọng, tuân thủ pháp luật: Tuân thủ luật pháp Việt Nam, tôn trọng quyền và lợi ích hợp pháp của tổ chức, cá nhân.',
          '2) Lành mạnh: Mọi hành vi, ứng xử trên mạng phải phù hợp với các giá trị đạo đức, văn hóa truyền thống tốt đẹp của dân tộc.',
          '3) An toàn, bảo mật thông tin: Tuân thủ các quy định và hướng dẫn về bảo vệ an toàn và bảo mật thông tin cá nhân và tổ chức.',
          '4) Trách nhiệm: Chịu trách nhiệm về các hành vi, ứng xử trên mạng xã hội; khi có yêu cầu phải chủ động phối hợp với cơ quan chức năng để xử lý vi phạm.'
        ],
        discoverySummary: 'Bốn quy tắc: Tôn trọng pháp luật, Lành mạnh, An toàn thông tin và Trách nhiệm là chuẩn mực đạo đức của mỗi công dân số.',
      },
      {
        id: 4,
        title: 'Những điều NÊN LÀM và KHÔNG NÊN LÀM khi tham gia mạng xã hội',
        context: 'Môi trường văn hóa số phụ thuộc trực tiếp vào ý thức và hành vi của từng người dùng.',
        guidingQuestion: 'Những hành vi nào được khuyến khích và những hành vi nào bị nghiêm cấm khi sử dụng mạng xã hội?',
        hints: [
          'ĐIỀU NÊN LÀM: Tìm hiểu và tuân thủ điều khoản dịch vụ; Chia sẻ thông tin chính thống, tích cực; Quảng bá hình ảnh đẹp của quê hương đất nước; Bảo mật thông tin cá nhân; Cân nhắc kỹ lưỡng trước khi đăng bài; Xin phép bạn bè trước khi chia sẻ hình ảnh của họ.',
          'ĐIỀU KHÔNG NÊN LÀM: Đăng tải nội dung vi phạm pháp luật; Dùng từ ngữ thù hận, bạo lực, phản cảm; Tung tin giả, bôi nhọ xúc phạm người khác; Cho mượn giấy tờ, thẻ ngân hàng, tài khoản; Nhận chuyển tiền hộ người lạ.'
        ],
        discoverySummary: 'Ứng xử có văn hóa, văn minh và trách nhiệm trên mạng xã hội giúp xây dựng một không gian mạng an toàn và nhân văn.',
      },
    ],
    knowledgeBox: [
      'Mục đích của những kẻ lừa đảo thường là tài chính hoặc gây tổn hại tinh thần, thể xác; chúng thường đánh vào đòn tâm lý sợ hãi, lòng tham hoặc sự thiếu hiểu biết của nạn nhân.',
      'Cần tỉnh táo và bình tĩnh ứng xử linh hoạt theo 3 NGUYÊN TẮC: 1) Hãy chậm lại; 2) Kiểm tra ngay; 3) Dừng lại, không gửi.',
      'Bốn quy tắc ứng xử trên mạng xã hội: 1) Tôn trọng, tuân thủ pháp luật; 2) Lành mạnh; 3) An toàn, bảo mật thông tin; 4) Trách nhiệm.',
      'Tuân thủ các điều nên làm (chia sẻ thông tin chính thống, bảo mật tài khoản) và tránh xa các điều không nên làm (tung tin giả, xúc phạm danh dự, cho mượn tài khoản ngân hàng).',
    ],
    practicalGuide: {
      title: 'Kịch bản xử lý tình huống lừa đảo mạo danh người quen vay tiền gấp',
      steps: [
        'Bước 1: Khi nhận tin nhắn Facebook/Zalo từ tài khoản bạn bè yêu cầu chuyển tiền gấp vào số tài khoản lạ, áp dụng ngay nguyên tắc "Hãy chậm lại" - không hoảng hốt và không chuyển tiền ngay.',
        'Bước 2: Áp dụng nguyên tắc "Kiểm tra ngay": Gọi điện thoại trực tiếp hoặc gọi video call qua số điện thoại di động thông thường của người bạn đó để xác minh xem có đúng bạn nhắn tin không.',
        'Bước 3: Đặt câu hỏi thử thách về những kỷ niệm chung hoặc thông tin riêng tư mà chỉ hai người biết để kiểm tra.',
        'Bước 4: Áp dụng nguyên tắc "Dừng lại, không gửi": Nếu không liên lạc được trực tiếp hoặc có dấu hiệu bất thường, tuyệt đối không chuyển tiền và cảnh báo ngay cho những người bạn chung khác.',
      ],
    },
    exerciseReview: [
      {
        question: 'Bài tập 1 (SGK tr.48): Em nhận được tin nhắn trên Facebook từ tài khoản bạn em với nội dung bạn cần tiền gấp và yêu cầu em chuyển tiền ngay cho số điện thoại lạ hoặc một tài khoản ngân hàng mang tên bạn em. Có thể vận dụng ba nguyên tắc phòng chống lừa đảo như thế nào?',
        answer: '1) Hãy chậm lại: Bình tĩnh, xem xét kỹ cách hành văn của tin nhắn xem có lạ không, xác định lại thông tin tài khoản lạ; 2) Kiểm tra ngay: Gọi điện thoại trực tiếp bằng số điện thoại di động riêng cho bạn mình để xác minh xem tài khoản Facebook của bạn có bị hack hay không; 3) Dừng lại, không gửi: Tuyệt đối không thực hiện chuyển tiền khi chưa xác minh được với chính bạn mình.',
      },
      {
        question: 'Bài tập 2 (SGK tr.48): Bổ sung thêm những điều nên làm và không nên làm khi tham gia mạng xã hội?',
        answer: 'NÊN: Đặt mật khẩu mạnh (gồm chữ hoa, chữ thường, số, ký tự đặc biệt); Bật xác thực 2 yếu tố (2FA); Chọn lọc bạn bè trên mạng; Tôn trọng bản quyền tác giả khi chia sẻ tài liệu. KHÔNG NÊN: Để công khai ngày tháng năm sinh, địa chỉ nhà, số CCCD trên mạng xã hội; Nhấp vào các liên kết trúng thưởng lạ; Đăng tải hình ảnh vé máy bay/hộ chiếu có mã QR/barcode.',
      },
    ],
    application: {
      question: 'Phân tích tình huống thực tế: Kẻ xấu giả vờ chuyển nhầm 50 triệu đồng vào tài khoản ngân hàng của em, sau đó gọi điện giả danh nhân viên thu hồi nợ đòi tiền với lãi suất cao. Em sẽ vận dụng 3 nguyên tắc phòng chống lừa đảo để xử lý ra sao?',
      guidance: '1) Hãy chậm lại: Giữ bình tĩnh, tuyệt đối không chuyển trả tiền ngay theo hướng dẫn của người lạ qua điện thoại; không tiêu số tiền chuyển nhầm đó; 2) Kiểm tra ngay: Đến trực tiếp chi nhánh ngân hàng quản lý tài khoản của mình hoặc gọi hotline chính thức của ngân hàng để báo cáo sự việc chuyển nhầm tiền và nhờ ngân hàng hỗ trợ tra soát; 3) Dừng lại, không gửi: Chỉ làm việc thông qua biên bản chính thức của ngân hàng và cơ quan công an, không tự ý giao dịch chuyển tiền trực tiếp cho số tài khoản lạ mà đối tượng cung cấp.',
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 9',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-9-giao-tiep-toan-tren-internet',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 9 Tin học 11',
    },
  },
];
