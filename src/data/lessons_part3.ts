import { Lesson } from '../types';

export const LESSONS_PART_3: Lesson[] = [
  // =========================================================================
  // BÀI 17: QUẢN TRỊ CƠ SỞ DỮ LIỆU TRÊN MÁY TÍNH
  // =========================================================================
  {
    id: 17,
    topicId: 6,
    lessonNumber: 17,
    title: 'Quản trị cơ sở dữ liệu trên máy tính',
    pageRange: 'Trang 82 - 86',
    objectives: [
      'Phân tích được các lợi ích to lớn của việc quản trị CSDL trên máy tính so với phương pháp quản lí thủ công;',
      'Nhận biết được đặc điểm của hệ QTCSDL MySQL (chạy ngầm dạng Service) và phần mềm HeidiSQL (giao diện đồ họa trực quan mã nguồn mở);',
      'Nắm được các bước cài đặt, thiết lập mật khẩu tài khoản quản trị root và kết nối phiên làm việc với HeidiSQL;',
      'Nhận diện được các vùng làm việc chính của giao diện phần mềm HeidiSQL.',
    ],
    starter: {
      situation: 'Trở lại với các bài toán quản lí điểm, quản lí các bản thu âm từ Bài 10 đến Bài 15. Nếu người quản lí phải ghi chép sổ sách thủ công trên giấy thì sẽ rất vất vả, dễ sai sót và khó kiểm soát.',
      question: 'Em có nhận xét, so sánh gì về việc cập nhật, chỉnh sửa dữ liệu giữa quản lí thủ công và quản lí CSDL trên máy tính? Làm thế nào để quản trị CSDL một cách trực quan, dễ dàng?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Lợi ích của việc quản trị dữ liệu trên máy tính',
        context: 'Các bài toán quản lí cùng với việc lưu trữ dữ liệu, khai thác thông tin đã xuất hiện từ rất lâu trong các hoạt động kinh tế - xã hội. Tuy nhiên việc quản lí dữ liệu thủ công là công việc rất vất vả, khó kiểm soát, đòi hỏi nhiều công sức, đặc biệt với những dữ liệu không được phép sai sót dù rất nhỏ. Ví dụ: Tại các trạm xăng dầu, nhờ có máy tính và CSDL, lượng xăng dầu bán ra và số tiền thu về được đo đạc, ghi chép một cách tự động.',
        guidingQuestion: 'Tại sao lại phải thay đổi thói quen quản lí thủ công chuyển sang sử dụng máy tính với hệ QTCSDL? Nếu không có máy tính và CSDL tại trạm xăng thì điều gì xảy ra?',
        hints: [
          'Nếu không có máy tính và CSDL: Mỗi nhân viên bán hàng phải đong xăng dầu bằng dụng cụ thủ công, phải ghi chép số lượng và số tiền thu về gây mất thời gian, đòi hỏi số lượng nhân viên lớn và việc tính toán sổ sách cuối ngày vô cùng vất vả, nặng nhọc.',
          'Quản lí trên máy tính: Tiện lợi, cập nhật kịp thời, nhanh chóng, tự động hóa tính toán và hạn chế tối đa sai sót.',
          'Cung cấp khả năng kiểm soát truy cập và độ bảo mật cao hơn so với quản lí thủ công nhờ các biện pháp mã hóa.'
        ],
        discoverySummary: 'Việc ứng dụng CSDL trong quản lí đem lại nhiều lợi ích to lớn: tiện lợi, kịp thời, nhanh chóng, hạn chế sai sót và bảo mật dữ liệu an toàn.',
      },
      {
        id: 2,
        title: 'Hệ quản trị CSDL MySQL và phần mềm HeidiSQL',
        context: 'Khi tìm kiếm các hệ QTCSDL phổ biến trên Internet, người dùng nhận thấy có rất nhiều hệ QTCSDL thương mại có phí (như Oracle, Microsoft SQL Server). Để học tập và ứng dụng linh hoạt mà không tốn chi phí bản quyền, người ta thường ưu tiên các hệ QTCSDL mã nguồn mở miễn phí như MySQL.',
        guidingQuestion: 'MySQL và HeidiSQL là gì? Mối quan hệ giữa hai phần mềm này như thế nào?',
        hints: [
          'MySQL là hệ QTCSDL quan hệ mã nguồn mở phổ biến hàng đầu thế giới, có tốc độ xử lý nhanh, bảo mật cao và miễn phí.',
          'Hạn chế của MySQL: Giao diện dòng lệnh (Command Prompt: mysql -u root -p) thuần văn bản không thuận tiện với người dùng mới.',
          'HeidiSQL là phần mềm khách (Client) mã nguồn mở có giao diện đồ họa (GUI) trực quan, cho phép kết nối đến MySQL để tạo bảng, xem dữ liệu, viết câu truy vấn bằng chuột và bàn phím dễ dàng.',
          'Cửa sổ HeidiSQL gồm: Vùng danh sách các CSDL đã có bên trái và Vùng làm việc chính bên phải (tương tác tạo lập, cập nhật, truy xuất dữ liệu).'
        ],
        discoverySummary: 'MySQL và HeidiSQL là các phần mềm mã nguồn mở được nhiều người dùng để quản trị các CSDL. MySQL đảm nhận việc lưu trữ xử lý, còn HeidiSQL cung cấp giao diện đồ họa trực quan.',
      },
      {
        id: 3,
        title: 'Cài đặt và thiết lập tài khoản quản trị root của MySQL',
        context: 'Trong quá trình cài đặt MySQL Server trên máy tính, phần mềm cài đặt yêu cầu người dùng cấu hình cổng mạng và thiết lập tài khoản quản trị cao nhất.',
        guidingQuestion: 'Khi cài đặt MySQL, phần mềm cài đặt có yêu cầu em làm điều gì mà cần phải ghi nhớ để sau đó có thể đăng nhập vào MySQL?',
        hints: [
          'Phần mềm cài đặt yêu cầu cần phải ghi nhớ mật khẩu của tài khoản người dùng quản trị cao nhất là "root".',
          'Tài khoản root có toàn quyền cao nhất trên hệ thống MySQL (tạo CSDL, tạo người dùng khác, cấp và thu hồi quyền).',
          'Cổng mạng mặc định (Port) của MySQL là 3306; Tên máy chủ cục bộ (Host) là 127.0.0.1 (localhost).'
        ],
        discoverySummary: 'Khi cài đặt MySQL, bắt buộc phải ghi nhớ mật khẩu của tài khoản root để sau này đăng nhập từ HeidiSQL hoặc cấp quyền cho các ứng dụng.',
      },
    ],
    knowledgeBox: [
      'Việc ứng dụng CSDL trong quản lí đem lại nhiều lợi ích to lớn: tiện lợi, kịp thời, nhanh chóng, hạn chế sai sót và bảo mật cao;',
      'MySQL và HeidiSQL là các phần mềm mã nguồn mở, được nhiều người dùng để quản trị các CSDL quan hệ;',
      'MySQL là hệ QTCSDL hoạt động như một dịch vụ chạy ngầm; HeidiSQL là phần mềm có giao diện đồ họa trực quan kết nối với MySQL;',
      'Giao diện HeidiSQL gồm hai vùng chính: Vùng danh sách các CSDL đã có ở khung bên trái và Vùng làm việc chính để tương tác tạo lập, cập nhật, truy xuất dữ liệu ở khung bên phải;',
      'Khi cài đặt MySQL, bắt buộc phải ghi nhớ mật khẩu của tài khoản người dùng quản trị root để đăng nhập phiên làm việc.'
    ],
    practicalGuide: {
      title: 'Các bước cài đặt MySQL Server và kết nối phiên làm việc bằng HeidiSQL',
      steps: [
        'Bước 1: Tải bộ cài đặt MySQL Community Server từ trang web chính thức và tiến hành cài đặt.',
        'Bước 2: Trong quá trình cài đặt, chọn cổng mặc định 3306 và đặt mật khẩu an toàn cho tài khoản root (ví dụ: 123456 hoặc mật khẩu riêng), ghi nhớ mật khẩu này.',
        'Bước 3: Tải và cài đặt phần mềm HeidiSQL (hoặc dùng bản Portable không cần cài đặt).',
        'Bước 4: Mở phần mềm HeidiSQL, nhấp nút "Mới" (New) trong Trình quản lý phiên (Session Manager).',
        'Bước 5: Nhập thông số kết nối: Kiểu mạng: MariaDB hoặc MySQL (TCP/IP), Tên máy chủ / IP: 127.0.0.1, Người dùng: root, Mật khẩu: (mật khẩu đã đặt ở Bước 2), Cổng: 3306.',
        'Bước 6: Nhấn nút "Mở" (Open) để kết nối vào hệ QTCSDL MySQL và bắt đầu làm việc.'
      ],
    },
    exerciseReview: [
      {
        question: 'Câu 1 (Slide 16): Khi cài đặt MySQL, phần mềm cài đặt có yêu cầu em làm điều gì mà cần phải ghi nhớ để sau đó có thể đăng nhập vào MySQL không?',
        answer: 'Phần mềm cài đặt yêu cầu bắt buộc người dùng phải đặt và ghi nhớ mật khẩu của tài khoản người dùng quản trị tối cao root. Nếu quên mật khẩu này sẽ không thể đăng nhập để quản trị CSDL hoặc cấp quyền cho các ứng dụng khác.'
      },
      {
        question: 'Câu 2 (Slide 18): Vì sao quản lí CSDL trên máy tính cung cấp khả năng kiểm soát truy cập và độ bảo mật cao hơn so với quản lý thủ công?',
        answer: 'Vì dữ liệu trong CSDL trên máy tính có thể được bảo vệ bằng các biện pháp an ninh hiện đại như: mã hóa dữ liệu lưu trữ và đường truyền, thiết lập cơ chế xác thực tài khoản qua mật khẩu mạnh, phân quyền chi tiết đến từng bảng và từng câu lệnh (SELECT, INSERT, UPDATE), đồng thời tự động lưu nhật ký theo dõi (log) các hành vi truy cập.'
      },
    ],
    application: {
      question: 'Vận dụng (SGK tr.86 & Slide 25): Truy cập Internet với các cụm từ khóa thích hợp để tìm hiểu thêm thông tin về MySQL và HeidiSQL?',
      guidance: 'Tìm kiếm với các cụm từ khóa "MySQL Community Server documentation" và "HeidiSQL features": 1) MySQL là hệ QTCSDL quan hệ được tập đoàn Oracle phát triển và hỗ trợ, được sử dụng bởi các nền tảng khổng lồ như Facebook, Twitter, YouTube, WordPress; 2) HeidiSQL là công cụ mã nguồn mở gọn nhẹ do Ansgar Becker phát triển, hỗ trợ đồng thời nhiều hệ QTCSDL (MySQL, MariaDB, PostgreSQL, Microsoft SQL Server, SQLite), cho phép xuất dữ liệu sang định dạng tệp SQL dump, CSV, HTML, XML và hỗ trợ chỉnh sửa dữ liệu dạng lưới trực quan.'
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 17',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-17-quan-tri-co-so-du-lieu-tren-may-tinh',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 17 Tin học 11',
    },
  },
  {
    id: 18,
    topicId: 6,
    lessonNumber: 18,
    title: 'Thực hành xác định cấu trúc bảng và các trường khoá',
    pageRange: 'Trang 86 - 90',
    objectives: [
      'Phân tích bài toán quản lý danh sách bản thu âm âm nhạc thực tế.',
      'Thiết kế sơ đồ gồm 4 bảng: casi, nhacsi, bannhac, banthuam.',
      'Xác định trường khoá chính, khoá ngoài và khoá cấm trùng lặp (UNIQUE).',
    ],
    starter: {
      situation: 'Một bản nhạc có thể do nhiều ca sĩ khác nhau hát (tạo ra nhiều bản thu âm), và một ca sĩ cũng có thể hát nhiều bản nhạc.',
      question: 'Làm thế nào để tổ chức CSDL lưu trữ không bị trùng lặp tên ca sĩ và tên bài hát?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Mô hình hoá CSDL âm nhạc (mymusic)',
        context: 'Bảng casi(idCasi, tenCasi); nhacsi(idNhacsi, tenNhacsi); bannhac(idBannhac, tenBannhac, idNhacsi); banthuam(idBanthuam, idBannhac, idCasi).',
        guidingQuestion: 'Trong bảng banthuam, đâu là khoá ngoài và chúng tham chiếu tới những bảng nào?',
        hints: ['idBannhac tham chiếu bảng bannhac, idCasi tham chiếu bảng casi.'],
        discoverySummary: 'Bảng banthuam đóng vai trò bảng trung gian giải quyết mối quan hệ nhiều - nhiều giữa bản nhạc và ca sĩ.',
      },
    ],
    knowledgeBox: [
      'Khoá chính xác định duy nhất một bản ghi (gạch chân dưới tên trường, ví dụ idBannhac).',
      'Khoá ngoài là trường của bảng này tham chiếu đến khoá chính của bảng khác để tạo liên kết dữ liệu.',
      'Khoá cấm trùng lặp (Unique Key) đảm bảo không có hai bản ghi nào trùng nhau ở cặp trường quy định.',
    ],
    application: {
      question: 'Nếu muốn lưu thêm năm sinh của nhạc sĩ và quê quán của ca sĩ, ta cần bổ sung các trường này vào bảng nào?',
      guidance: 'Bổ sung trường namSinh vào bảng nhacsi, và trường queQuan vào bảng casi.',
    },
    defaultApp: {
      name: 'Vẽ Sơ đồ CSDL mymusic (ERD)',
      type: 'tool',
      url: 'https://dbdiagram.io/',
      badge: 'Database Modeling',
      description: 'Mô hình hóa 4 bảng casi, nhacsi, bannhac, banthuam và quan hệ khóa',
    },
  },
  {
    id: 19,
    topicId: 6,
    lessonNumber: 19,
    title: 'Thực hành tạo lập cơ sở dữ liệu và các bảng',
    pageRange: 'Trang 91 - 95',
    objectives: [
      'Biết cách tạo mới một CSDL có tên "mymusic" bằng giao diện HeidiSQL.',
      'Khai báo bảng nhacsi với các trường: idNhacsi (INT, AUTO_INCREMENT) và tenNhacsi (VARCHAR 255).',
      'Chỉ định khoá chính PRIMARY KEY trên cột idNhacsi.',
    ],
    starter: {
      situation: 'Trường idNhacsi được chọn làm khoá chính và cần tự động tăng 1, 2, 3... mỗi khi thêm một nhạc sĩ mới.',
      question: 'Thuộc tính nào trong HeidiSQL cho phép số thứ tự tự động tăng dần?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Khai báo kiểu dữ liệu và trường tự tăng',
        context: 'Kiểu INT dành cho số nguyên; VARCHAR(255) dành cho chuỗi ký tự độ dài thay đổi; AUTO_INCREMENT tự động sinh mã.',
        guidingQuestion: 'Vì sao trường khoá chính idNhacsi phải bỏ dấu chọn ở ô "Allow NULL"?',
        hints: ['Khoá chính bắt buộc phải có giá trị xác định để nhận diện bản ghi, không bao giờ được để trống (NOT NULL).'],
        discoverySummary: 'Mỗi bảng cần xác định rõ kiểu dữ liệu, độ dài và thuộc tính NOT NULL cho các trường quan trọng.',
      },
    ],
    knowledgeBox: [
      'Bộ mã ký tự mặc định nên chọn utf8mb4 để hỗ trợ hiển thị đầy đủ tiếng Việt có dấu.',
      'Thuộc tính AUTO_INCREMENT gán cho trường số nguyên khoá chính giúp hệ thống tự sinh mã không trùng.',
    ],
    practicalGuide: {
      title: 'Các bước tạo CSDL mymusic và bảng nhacsi',
      steps: [
        'Nhấp chuột phải vào vùng danh sách CSDL -> Tạo mới -> Cơ sở dữ liệu -> Nhập mymusic -> OK.',
        'Chọn mymusic -> nhấp chuột phải -> Tạo mới -> Bảng -> Nhập tên bảng: nhacsi.',
        'Thêm cột idNhacsi (INT, bỏ Allow NULL, chọn AUTO_INCREMENT). Nhấp chuột phải chọn Create new index -> PRIMARY.',
        'Thêm cột tenNhacsi (VARCHAR 255). Nhấn nút "Lưu" để hoàn tất.',
      ],
    },
    application: {
      question: 'Hãy nêu câu lệnh SQL tương đương được HeidiSQL tự động sinh ra khi tạo bảng nhacsi?',
      guidance: 'CREATE TABLE nhacsi (idNhacsi INT NOT NULL AUTO_INCREMENT, tenNhacsi VARCHAR(255), PRIMARY KEY (idNhacsi));',
    },
    defaultApp: {
      name: 'SQL Online Sandbox - Tạo bảng & Database',
      type: 'simulator',
      url: 'https://onecompiler.com/mysql',
      badge: 'Online Compiler',
      description: 'Thực thi lệnh CREATE DATABASE và CREATE TABLE trực tiếp',
    },
  },
  {
    id: 20,
    topicId: 6,
    lessonNumber: 20,
    title: 'Thực hành tạo lập các bảng có khoá ngoài',
    pageRange: 'Trang 96 - 100',
    objectives: [
      'Tạo bảng bannhac với các trường: idBannhac, tenBannhac, idNhacsi.',
      'Khai báo khoá ngoài idNhacsi tham chiếu đến trường idNhacsi của bảng nhacsi qua thẻ Foreign keys.',
      'Thiết lập chỉ mục khoá cấm trùng lặp (UNIQUE) trên cặp trường (tenBannhac, idNhacsi).',
    ],
    starter: {
      situation: 'Để không xảy ra tình trạng nhập một bản nhạc mà nhạc sĩ đó chưa hề có trong danh sách bảng nhacsi.',
      question: 'Cơ chế nào của CSDL tự động kiểm tra và ngăn chặn dữ liệu "mồ côi" này?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Cơ chế Ràng buộc toàn vẹn tham chiếu (Foreign Key Constraint)',
        context: 'Khi idNhacsi là khóa ngoài, ta chỉ có thể nhập các giá trị đã tồn tại trong bảng cha nhacsi.',
        guidingQuestion: 'Nếu cố tình nhập idNhacsi = 99 trong khi bảng nhacsi mới chỉ có nhạc sĩ mã 1, 2, 3 thì hệ thống phản ứng ra sao?',
        hints: ['Hệ thống sẽ báo lỗi Foreign Key Constraint Fail và từ chối lưu bản ghi.'],
        discoverySummary: 'Khoá ngoài bảo đảm tính toàn vẹn tham chiếu tuyệt đối giữa các bảng có liên kết.',
      },
    ],
    knowledgeBox: [
      'Để tạo khoá ngoài trong HeidiSQL: Mở bảng con -> chọn thẻ Foreign keys -> Thêm mới -> chọn Cột -> chọn Bảng tham chiếu và Cột tham chiếu.',
      'Khoá cấm trùng lặp (UNIQUE) ngăn chặn việc vô tình nhập trùng lặp cùng một bài hát của cùng một nhạc sĩ.',
    ],
    practicalGuide: {
      title: 'Tạo khoá ngoài idNhacsi trong bảng bannhac',
      steps: [
        'Tại bảng bannhac, nhấp vào thẻ Foreign keys -> nhấn nút "Thêm mới".',
        'Tại ô Columns: chọn idNhacsi.',
        'Tại ô Reference table: chọn nhacsi; tại ô Foreign col: chọn idNhacsi.',
        'Nhấn "Lưu" để hoàn tất thiết lập ràng buộc khoá ngoài.',
      ],
    },
    application: {
      question: 'Tại sao bảng cha (nhacsi) phải được tạo trước bảng con (bannhac)?',
      guidance: 'Vì bảng con cần tham chiếu khoá ngoại đến khoá chính của bảng cha; nếu bảng cha chưa tồn tại thì câu lệnh tạo khoá ngoài sẽ báo lỗi.',
    },
    defaultApp: {
      name: 'Phần mềm thực hành HeidiSQL Web',
      type: 'simulator',
      url: 'https://sqlime.org/',
      badge: 'Database Simulator',
      description: 'Thử nghiệm tạo bảng và thiết lập ràng buộc FOREIGN KEY trực tiếp',
    },
  },
  {
    id: 21,
    topicId: 6,
    lessonNumber: 21,
    title: 'Thực hành cập nhật và truy xuất dữ liệu các bảng',
    pageRange: 'Trang 100 - 105',
    objectives: [
      'Biết cách nhập thêm dữ liệu mới vào bảng nhacsi bằng thẻ Dữ liệu (phím Insert).',
      'Thực hiện chỉnh sửa và xoá dòng dữ liệu (phím Delete).',
      'Sử dụng các công cụ lọc nhanh (Quick Filter) và viết câu lệnh SELECT đơn giản.',
    ],
    starter: {
      situation: 'Sau khi tạo khung bảng trống, ta cần nhập tên các nhạc sĩ: Văn Cao, Đỗ Nhuận, Hoàng Việt, Nguyễn Tài Tuệ.',
      question: 'Phím tắt nào trong HeidiSQL cho phép thêm một hàng dữ liệu mới?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Thao tác dữ liệu trực quan vs Câu lệnh SQL',
        context: 'Trong thẻ Dữ liệu, nhấn Insert để thêm dòng, nháy đúp chuột vào ô để sửa chữ, chọn dòng rồi bấm Ctrl+Delete để xoá.',
        guidingQuestion: 'Khi nhập dòng mới, ta có cần gõ số cho cột idNhacsi không? Vì sao?',
        hints: ['Vì cột idNhacsi đã được đặt AUTO_INCREMENT, hệ thống sẽ tự điền số 1, 2, 3...'],
        discoverySummary: 'HeidiSQL tự động sinh câu lệnh INSERT ngầm bên dưới mỗi khi ta nhập xong một ô trên giao diện.',
      },
    ],
    knowledgeBox: [
      'Thẻ Dữ liệu (Data) trong HeidiSQL cho phép quan sát, lọc, tìm kiếm và sửa đổi trực tiếp các bản ghi.',
      'Sử dụng bộ lọc nhanh: Nhấp chuột phải vào ô dữ liệu -> Chọn Quick Filter -> Chọn LIKE "%từ_khoá%" để tìm kiếm chuỗi ký tự.',
    ],
    application: {
      question: 'Viết câu lệnh SQL lọc tất cả các nhạc sĩ có họ tên bắt đầu bằng chữ "N"?',
      guidance: 'SELECT * FROM nhacsi WHERE tenNhacsi LIKE "N%";',
    },
    defaultApp: {
      name: 'SQL Playground - Thao tác Dữ liệu CRUD',
      type: 'simulator',
      url: 'https://onecompiler.com/mysql',
      badge: 'CRUD Operations',
      description: 'Luyện tập các thao tác INSERT, UPDATE, DELETE và SELECT',
    },
  },
  {
    id: 22,
    topicId: 6,
    lessonNumber: 22,
    title: 'Thực hành cập nhật bảng dữ liệu có tham chiếu',
    pageRange: 'Trang 105 - 109',
    objectives: [
      'Hiểu cách nhập dữ liệu đối với bảng có trường khoá ngoài (nhận giá trị từ hộp danh sách thả xuống).',
      'Nhận biết lỗi khi cố tình xoá một bản ghi ở bảng cha đang được bảng con tham chiếu.',
      'Tìm hiểu giao diện ứng dụng quản lý dữ liệu chuyên nghiệp.',
    ],
    starter: {
      situation: 'Khi nhập tên bài hát "Tiến quân ca" vào bảng bannhac, tại cột idNhacsi xuất hiện một menu thả xuống hiển thị danh sách các nhạc sĩ.',
      question: 'Tiện ích này giúp gì cho người nhập liệu so với việc phải nhớ số ID?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Kiểm soát tính toàn vẹn khi xoá dữ liệu',
        context: 'Nhạc sĩ Văn Cao (id = 2) đang có bài hát "Trường ca Sông Lô" trong bảng bannhac. Nếu ta bấm xoá nhạc sĩ Văn Cao ở bảng nhacsi thì sao?',
        guidingQuestion: 'HeidiSQL sẽ thông báo điều gì khi ta cố xoá một nhạc sĩ đang có bài hát liên kết?',
        hints: ['Hệ thống xuất hiện hộp thoại báo lỗi: Cannot delete or update a parent row: a foreign key constraint fails.'],
        discoverySummary: 'Hệ QTCSDL tự động bảo vệ dữ liệu, không cho phép xoá bản ghi cha khi bản ghi con vẫn đang tồn tại.',
      },
    ],
    knowledgeBox: [
      'HeidiSQL tự động hỗ trợ chọn giá trị khoá ngoài qua danh sách tên hiển thị, tránh nhầm lẫn mã số ID.',
      'Ràng buộc khoá ngoài ngăn chặn việc xoá các bản ghi gốc khi vẫn còn dữ liệu phụ thuộc.',
    ],
    application: {
      question: 'Để xoá được nhạc sĩ Văn Cao khỏi bảng nhacsi một cách hợp lệ, em cần thực hiện thao tác gì trước?',
      guidance: 'Cần xoá (hoặc cập nhật chuyển sang nhạc sĩ khác) tất cả các bản nhạc của nhạc sĩ Văn Cao trong bảng bannhac trước.',
    },
    defaultApp: {
      name: 'Phần mềm Quản lý CSDL Âm nhạc',
      type: 'external',
      url: 'https://phpmyadmin.co/',
      badge: 'Web App Mockup',
      description: 'Giao diện web quản lý danh sách bản nhạc và kiểm soát ràng buộc toàn vẹn',
    },
  },
  {
    id: 23,
    topicId: 6,
    lessonNumber: 23,
    title: 'Thực hành truy xuất dữ liệu qua liên kết các bảng',
    pageRange: 'Trang 109 - 113',
    objectives: [
      'Sử dụng mệnh đề INNER JOIN trong câu lệnh SQL để kết nối dữ liệu từ 2 hoặc 3 bảng.',
      'Truy vấn danh sách bản nhạc kèm tên tác giả sáng tác và ca sĩ biểu diễn.',
      'Sử dụng bí danh (Alias as) để phân biệt các trường trùng tên giữa các bảng.',
    ],
    starter: {
      situation: 'Bảng bannhac chỉ có trường idNhacsi (dạng số). Muốn in ra danh sách gồm tên bài hát kèm tên đầy đủ của nhạc sĩ.',
      question: 'Mệnh đề nào trong SQL cho phép ghép nối hai bảng qua trường chung?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Cú pháp INNER JOIN hai bảng',
        context: 'SELECT bannhac.tenBannhac, nhacsi.tenNhacsi FROM bannhac INNER JOIN nhacsi ON bannhac.idNhacsi = nhacsi.idNhacsi;',
        guidingQuestion: 'Điều kiện kết nối sau từ khoá ON có vai trò gì trong phép ghép nối bảng?',
        hints: ['Chỉ ghép các dòng ở bảng bannhac với dòng ở bảng nhacsi có cùng giá trị idNhacsi.'],
        discoverySummary: 'INNER JOIN kết nối các bản ghi có giá trị khoá khớp nhau ở cả hai bảng để tạo thành bảng kết quả tổng hợp.',
      },
    ],
    knowledgeBox: [
      'Cú pháp nối 2 bảng: SELECT <cột> FROM <bảng_1> INNER JOIN <bảng_2> ON <bảng_1.khoa_ngoai> = <bảng_2.khoa_chinh>;',
      'Để nối 3 bảng (bản thu âm, bài hát, ca sĩ): dùng 2 lần mệnh đề INNER JOIN liên tiếp.',
      'Sử dụng tên_bảng.tên_cột hoặc đặt bí danh (AS) khi hai bảng có cột trùng tên.',
    ],
    application: {
      question: 'Viết câu truy vấn lấy danh sách các bản nhạc sáng tác bởi nhạc sĩ có tên "Đỗ Nhuận"?',
      guidance: 'SELECT bannhac.tenBannhac FROM bannhac INNER JOIN nhacsi ON bannhac.idNhacsi = nhacsi.idNhacsi WHERE nhacsi.tenNhacsi = "Đỗ Nhuận";',
    },
    defaultApp: {
      name: 'SQL Join Visualizer - Trực quan hoá Liên kết bảng',
      type: 'tool',
      url: 'https://sql-joins.leungwensen.com/',
      badge: 'SQL Join Visualizer',
      description: 'Minh họa trực quan sơ đồ Venn các phép JOIN: INNER, LEFT, RIGHT, FULL',
    },
  },
  {
    id: 24,
    topicId: 6,
    lessonNumber: 24,
    title: 'Thực hành sao lưu dữ liệu',
    pageRange: 'Trang 113 - 116',
    objectives: [
      'Hiểu sự cần thiết phải sao lưu dự phòng định kỳ (Backup).',
      'Thực hiện xuất CSDL thành tệp kịch bản SQL (.sql) bằng HeidiSQL.',
      'Thực hiện khôi phục (Restore) CSDL từ tệp sao lưu khi có sự cố hỏng hóc.',
    ],
    starter: {
      situation: 'Máy tính bất ngờ bị virus hoặc hỏng ổ cứng làm mất toàn bộ dữ liệu CSDL bán hàng của công ty.',
      question: 'Biện pháp kỹ thuật nào giúp công ty lấy lại nguyên vẹn dữ liệu trước thời điểm xảy ra sự cố?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Tệp sao lưu SQL chứa những thông tin gì?',
        context: 'Khi mở tệp sao lưu mymusic.sql bằng Notepad, ta thấy toàn bộ các câu lệnh CREATE TABLE và INSERT INTO.',
        guidingQuestion: 'Tại sao việc sao lưu dưới dạng tệp văn bản SQL lại rất thuận tiện khi di chuyển sang máy tính khác?',
        hints: ['Tệp .sql có thể chạy trên mọi phiên bản MySQL ở bất cứ máy tính hay hệ điều hành nào.'],
        discoverySummary: 'Xuất kịch bản SQL là phương pháp sao lưu chuẩn hoá, độc lập nền tảng và dễ dàng phục hồi.',
      },
    ],
    knowledgeBox: [
      'Để sao lưu trong HeidiSQL: Chọn Các công cụ -> Xuất cơ sở dữ liệu dưới dạng SQL -> chọn CSDL cần xuất -> chọn file lưu -> bấm Export.',
      'Để khôi phục: Vào Tập tin -> Nạp tập tin SQL (Load SQL file) -> chọn tệp .sql đã sao lưu -> bấm F9 để thực thi tái tạo CSDL.',
    ],
    practicalGuide: {
      title: 'Các bước sao lưu CSDL mymusic ra tệp .sql',
      steps: [
        'Nhấp chuột phải vào tên CSDL mymusic ở cây danh mục bên trái.',
        'Chọn "Xuất cơ sở dữ liệu dưới dạng SQL".',
        'Chọn tuỳ chọn Drop + Create cho Bảng và Dữ liệu để khi phục hồi sẽ xoá bản cũ và nạp bản mới.',
        'Chọn đường dẫn lưu tệp (ví dụ C:\\Backup\\mymusic.sql) rồi nhấn nút "Export".',
      ],
    },
    application: {
      question: 'Trong các doanh nghiệp lớn, công việc sao lưu CSDL được tổ chức thủ công hay tự động hoá? Vì sao?',
      guidance: 'Được tự động hoá hoàn toàn bằng các tác vụ lên lịch (Cron job / Windows Task Scheduler) chạy vào ban đêm để không ảnh hưởng hiệu năng ban ngày.',
    },
    defaultApp: {
      name: 'Trình kiểm tra tệp SQL Dump & Khôi phục',
      type: 'tool',
      url: 'https://sqliteonline.com/',
      badge: 'Database Restore',
      description: 'Tải lên tệp sao lưu .sql và xem trước cấu trúc bảng cùng dữ liệu phục hồi',
    },
  },
];
