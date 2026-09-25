import { Lesson } from '../types';

export const LESSONS_PART_4: Lesson[] = [
  {
    id: 25,
    topicId: 7,
    lessonNumber: 25,
    title: 'Phần mềm chỉnh sửa ảnh',
    pageRange: 'Trang 116 - 122',
    objectives: [
      'Hiểu khái niệm ảnh số bitmap, điểm ảnh (pixel), độ phân giải (dpi, ppi).',
      'Làm quen với giao diện phần mềm mã nguồn mở GIMP.',
      'Thực hiện các thao tác cơ bản: phóng to, thu nhỏ, xoay ảnh (Rotate), cắt xén ảnh (Crop), thay đổi kích thước và xuất ảnh JPEG/PNG.',
    ],
    starter: {
      situation: 'Bức ảnh chụp kỷ yếu lớp học bị chụp nghiêng góc và dính một phần cột cờ thừa ở rìa ngoài.',
      question: 'Phần mềm chỉnh sửa ảnh cần những công cụ gì để căn thẳng lại khung hình và bỏ phần thừa?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Mối quan hệ giữa Điểm ảnh (Pixel) và Độ phân giải (DPI)',
        context: 'Một bức ảnh kích thước 1200 x 1800 pixel khi in ở độ phân giải 300 dpi sẽ có kích thước thật là 4 x 6 inch.',
        guidingQuestion: 'Nếu tăng độ phân giải in từ 100 dpi lên 200 dpi thì kích thước bức ảnh in trên giấy sẽ to hơn hay nhỏ đi?',
        hints: ['Số điểm ảnh không đổi; mật độ điểm ảnh dày gấp đôi nên kích thước in trên giấy sẽ giảm đi một nửa.'],
        discoverySummary: 'Độ phân giải DPI càng cao thì hình ảnh in ra càng sắc nét, mịn màng và không bị vỡ hạt.',
      },
    ],
    knowledgeBox: [
      'Ảnh bitmap là tập hợp các điểm ảnh (pixel) xếp thành lưới; mỗi pixel có toạ độ (x, y) và một giá trị màu xác định.',
      'GIMP là phần mềm xử lý ảnh bitmap mã nguồn mở miễn phí rất mạnh mẽ, lưu tệp dự án định dạng .xcf.',
      'Các công cụ cơ bản: Crop (cắt xén - Shift+C), Rotate (xoay ảnh - Shift+R), Scale Image (thay đổi kích thước điểm ảnh).',
    ],
    practicalGuide: {
      title: 'Các bước cắt xén (Crop) và xoay ảnh trong GIMP',
      steps: [
        'Vào File -> Open để mở bức ảnh cần xử lý.',
        'Chọn công cụ Rotate (Shift+R), kéo chuột trên khung ảnh để xoay thẳng đường chân trời, nhấn nút Rotate.',
        'Chọn công cụ Crop (Shift+C), kéo thả khung chữ nhật bao quanh phần ảnh muốn giữ lại, nhấn phím Enter.',
        'Vào File -> Export As để xuất thành tệp định dạng .jpg hoặc .png.',
      ],
    },
    application: {
      question: 'Tại sao khi lưu tệp đang làm việc trong GIMP ta nên lưu dưới định dạng .xcf thay vì .jpg?',
      guidance: 'Định dạng .xcf giữ nguyên tất cả các lớp (layer), kênh màu, mặt nạ và lịch sử chỉnh sửa để có thể sửa lại sau này.',
    },
    defaultApp: {
      name: 'Photopea - Trình chỉnh sửa ảnh GIMP/Photoshop Trực tuyến',
      type: 'tool',
      url: 'https://www.photopea.com/',
      badge: 'Online Photo Editor',
      description: 'Chỉnh sửa ảnh chuyên nghiệp trên nền tảng web với đầy đủ các công cụ tương đương GIMP',
    },
  },
  {
    id: 26,
    topicId: 7,
    lessonNumber: 26,
    title: 'Công cụ tinh chỉnh màu sắc và công cụ chọn',
    pageRange: 'Trang 122 - 128',
    objectives: [
      'Sử dụng các công cụ điều chỉnh ánh sáng và màu sắc: Brightness-Contrast, Color Balance, Hue-Saturation, Levels.',
      'Sử dụng các công cụ chọn: Rectangle Select (chữ nhật - R), Ellipse Select (elip - E), Free Select (chọn tự do Lasso - F).',
      'Thực hiện các phép kết hợp vùng chọn (Shift: thêm vùng, Ctrl: bớt vùng chọn).',
    ],
    starter: {
      situation: 'Một bức ảnh chụp ngoài trời vào ngày âm u nên màu sắc bị xỉn, thiếu ánh sáng và hoa không tươi.',
      question: 'Làm thế nào để chỉ làm rực rỡ màu của những bông hoa mà không làm biến đổi màu nền trời?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Vai trò của Vùng chọn (Selection)',
        context: 'Khi tạo một vùng chọn, mọi thao tác chỉnh màu hay vẽ chỉ có hiệu lực bên trong vùng đó; vùng bên ngoài được bảo vệ tuyệt đối.',
        guidingQuestion: 'Để mở rộng thêm vùng chọn ta giữ phím nào, và để loại trừ bớt vùng chọn ta giữ phím nào?',
        hints: ['Giữ phím Shift để cộng thêm vùng chọn (+); giữ phím Ctrl để trừ bớt vùng chọn (-).'],
        discoverySummary: 'Vùng chọn giúp cô lập đối tượng cần chỉnh sửa cục bộ một cách tinh tế và chính xác.',
      },
    ],
    knowledgeBox: [
      'Công cụ Brightness-Contrast: tăng giảm độ sáng và độ tương phản của ảnh.',
      'Công cụ Color Balance: cân bằng sắc màu trên 3 dải độ sáng (Shadows - vùng tối, Midtones - vùng trung bình, Highlights - vùng sáng).',
      'Công cụ Hue-Saturation: điều chỉnh tông màu (Hue), độ bão hoà màu rực hay nhạt (Saturation), và độ sáng (Lightness).',
    ],
    application: {
      question: 'Muốn biến một bông hồng đỏ thành hoa hồng vàng trong GIMP, em sẽ sử dụng công cụ màu sắc nào?',
      guidance: 'Dùng công cụ chọn Free Select quanh bông hoa, sau đó mở Colors -> Hue-Saturation và kéo thanh trượt Hue đến khi sắc đỏ chuyển sang vàng.',
    },
    defaultApp: {
      name: 'Trình chỉnh màu & Bộ lọc Trực quan',
      type: 'tool',
      url: 'https://pinetools.com/colorize-image',
      badge: 'Color Balance Tool',
      description: 'Thử nghiệm tăng giảm độ sáng, tương phản và cân bằng màu sắc trên ảnh',
    },
  },
  {
    id: 27,
    topicId: 7,
    lessonNumber: 27,
    title: 'Công cụ vẽ và một số ứng dụng',
    pageRange: 'Trang 128 - 133',
    objectives: [
      'Hiểu khái niệm Lớp ảnh (Layer) và Kênh trong suốt (Alpha Channel).',
      'Sử dụng các công cụ vẽ: Paint Brush (cọ vẽ), Bucket Fill (đổ màu), Gradient (chuyển sắc), Eraser (tẩy).',
      'Thành thạo công cụ Clone (sao chép vùng ảnh) và Healing (sửa khuyết điểm, xoá dây điện thừa, tẩy mụn thâm).',
    ],
    starter: {
      situation: 'Bức ảnh phong cảnh tuyệt đẹp nhưng vô tình vướng một đường dây điện vắt ngang bầu trời.',
      question: 'Công cụ nào trong phần mềm đồ họa giúp xoá dây điện mà vẫn giữ được mây trời tự nhiên phía sau?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Sự khác biệt giữa Clone Stamp và Healing Tool',
        context: 'Clone sao chép nguyên văn mẫu từ vùng nguồn đè lên vùng đích. Healing sao chép mẫu đồng thời tự động hoà trộn màu sắc và độ sáng với xung quanh.',
        guidingQuestion: 'Để tẩy mụn trên da mặt hoặc xoá nếp nhăn, công cụ nào trong hai công cụ trên mang lại kết quả mịn màng tự nhiên hơn?',
        hints: ['Healing tool hoà trộn kết cấu nguồn với tông màu nền của da tại vị trí đích.'],
        discoverySummary: 'Healing là lựa chọn lý tưởng để phục chế chân dung và xoá chi tiết thừa mà không để lại vết chắp vá.',
      },
    ],
    knowledgeBox: [
      'Lớp ảnh (Layer) như những tấm kính trong suốt xếp chồng lên nhau; lớp trên che khuất lớp dưới.',
      'Kênh Alpha quyết định độ trong suốt của lớp; nếu không có kênh Alpha, khi tẩy sẽ lộ ra màu nền Background.',
      'Thao tác phục chế: Giữ Ctrl + nhấp chuột để chọn điểm gốc (vùng nguồn), sau đó quét chuột vào vùng cần xoá sửa.',
    ],
    practicalGuide: {
      title: 'Các bước xoá dây điện bằng Healing Tool',
      steps: [
        'Chọn công cụ Healing trong hộp công cụ (phím H).',
        'Chọn kích thước đầu cọ tròn mềm phù hợp với độ dày dây điện.',
        'Giữ phím Ctrl và nhấp chuột vào vùng trời trong xanh gần dây điện để lấy mẫu nguồn.',
        'Thả phím Ctrl, nhấp và rê chuột dọc theo sợi dây điện để hoà trộn xoá sạch chi tiết thừa.',
      ],
    },
    application: {
      question: 'Khi ghép một bức tranh gồm hoa sen trên nền trời xanh, ta cần sắp xếp thứ tự các layer trong bảng Layers thế nào?',
      guidance: 'Layer "hoa sen" (đã tách nền trong suốt) phải nằm ở phía trên, layer "bầu trời" nằm ở phía dưới cùng.',
    },
    defaultApp: {
      name: 'Cleanup Pictures - Trình xoá vật thể thông minh',
      type: 'tool',
      url: 'https://cleanup.pictures/',
      badge: 'Inpainting Tool',
      description: 'Trải nghiệm xoá dây điện, khuyết điểm và vật thể thừa tức thời trên nền web',
    },
  },
  {
    id: 28,
    topicId: 7,
    lessonNumber: 28,
    title: 'Tạo ảnh động',
    pageRange: 'Trang 133 - 137',
    objectives: [
      'Hiểu nguyên lý hoạt động của ảnh động định dạng GIF (mỗi layer là một khung hình chuyển động).',
      'Biết cách đặt tên layer kèm thời gian xuất hiện (ví dụ: Frame 1 (500ms)).',
      'Sử dụng bộ lọc Filters -> Animation -> Playback để xem trước chuyển động và xuất file .gif dạng hoạt hình.',
    ],
    starter: {
      situation: 'Biểu tượng xoay tròn chờ tải trang (Loading spinner) trên các website thực chất là một chuỗi hình ảnh liên tiếp.',
      question: 'Làm thế nào để tạo ra một tệp ảnh động GIF có vòng lặp vô tận từ các lớp ảnh tĩnh trong GIMP?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Cơ chế tạo ảnh động từ các Layer trong GIMP',
        context: 'GIMP phát các layer theo thứ tự từ dưới lên trên. Có thể thêm thông số thời gian trễ vào tên layer: (100ms), (500ms).',
        guidingQuestion: 'Nếu muốn một khung hình dừng lại lâu hơn các khung hình khác, ta phải đặt tên cho layer đó như thế nào?',
        hints: ['Thêm chuỗi "(Xms)" vào sau tên layer, với X là số mili-giây (ví dụ: Frame 3 (1500ms)).'],
        discoverySummary: 'Tên layer trong GIMP cho phép tuỳ biến thời gian hiển thị riêng biệt cho từng khung hình chuyển động.',
      },
    ],
    knowledgeBox: [
      'Ảnh động GIF tập hợp các lớp ảnh hiển thị tuần tự tạo ảo giác chuyển động (hiện tượng lưu ảnh trên võng mạc).',
      'Để xem trước ảnh động: Filters -> Animation -> Playback.',
      'Khi xuất tệp: File -> Export As -> đổi đuôi thành .gif -> tích chọn "As animation" và chọn "Loop forever".',
    ],
    practicalGuide: {
      title: 'Tạo ảnh động quả bóng nảy hoặc đồng hồ cát',
      steps: [
        'Tạo tệp mới, vẽ đối tượng ở vị trí ban đầu (Layer 1).',
        'Nhân đôi layer (Duplicate Layer), dịch chuyển đối tượng sang vị trí tiếp theo (Layer 2).',
        'Lặp lại để tạo chuỗi 5 - 8 layer mô tả các trạng thái chuyển động liên tiếp.',
        'Mở Filters -> Animation -> Playback để xem thử.',
        'Vào File -> Export As, chọn định dạng GIF Image, tích chọn "As animation", đặt độ trễ 200ms -> Export.',
      ],
    },
    application: {
      question: 'Tính xem một ảnh động gồm 10 khung hình, mỗi khung hình hiển thị 200ms thì một chu kỳ chuyển động kéo dài bao nhiêu giây?',
      guidance: 'Tổng thời gian = 10 x 200ms = 2000ms = 2 giây.',
    },
    defaultApp: {
      name: 'EZGIF - Tạo & Tối ưu hoá Ảnh động GIF',
      type: 'tool',
      url: 'https://ezgif.com/maker',
      badge: 'GIF Maker',
      description: 'Ghép chuỗi ảnh tĩnh thành ảnh động GIF, tuỳ chỉnh độ trễ khung hình và vòng lặp',
    },
  },
  {
    id: 29,
    topicId: 7,
    lessonNumber: 29,
    title: 'Khám phá phần mềm làm phim',
    pageRange: 'Trang 137 - 143',
    objectives: [
      'Hiểu cấu trúc chung của phần mềm biên tập video (VideoPad): Thanh công cụ, Ngăn tư liệu, Ngăn xem trước (Preview), Ngăn tiến trình.',
      'Phân biệt hai chế độ hiển thị tiến trình: Phân cảnh (Storyboard) và Dòng thời gian (Timeline).',
      'Sử dụng thuật sĩ Video Wizard để tạo nhanh đoạn phim ngắn từ ảnh, video clip và nhạc nền.',
    ],
    starter: {
      situation: 'Sau chuyến tham quan dã ngoại hè, học sinh có nhiều ảnh chụp và video ngắn trên điện thoại.',
      question: 'Làm thế nào để ghép chúng lại thành một video hoàn chỉnh có nhạc nền và chữ mở đầu ấn tượng?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Chế độ Storyboard vs Dòng thời gian Timeline',
        context: 'Storyboard hiển thị từng khối cảnh vuông trực quan dễ sắp xếp thứ tự. Timeline hiển thị các rãnh Video track và Audio track theo trục thời gian chi tiết.',
        guidingQuestion: 'Khi cần lồng ghép chính xác lời thoại hoặc nhạc nền khớp với từng giây cử chỉ của nhân vật, chế độ nào vượt trội hơn?',
        hints: ['Chế độ Dòng thời gian (Timeline) cho phép căn chỉnh độ dài rãnh âm thanh và hình ảnh theo từng mili-giây.'],
        discoverySummary: 'Storyboard thuận tiện cho dựng phác thảo kịch bản, Timeline tối ưu cho chỉnh sửa tinh chỉnh đa rãnh.',
      },
    ],
    knowledgeBox: [
      'Một đoạn phim hoàn chỉnh gồm: Phim mở đầu (Intro), Nội dung chính các phân cảnh, Phim kết thúc (Outro), Nhạc nền và Phụ đề.',
      'Ngăn tiến trình chứa các rãnh: Video Track (băng hình) và Audio Track (băng âm thanh).',
      'Định dạng video xuất bản thông dụng nhất là MP4 vì dung lượng gọn nhẹ và tương thích mọi thiết bị.',
    ],
    application: {
      question: 'Hãy lập dàn ý kịch bản cho một video dài 1 phút giới thiệu câu lạc bộ Tin học của trường em?',
      guidance: 'Intro (5s): Logo và tên CLB; Cảnh 1 (20s): Hoạt động lập trình; Cảnh 2 (20s): Thiết kế đồ hoạ; Cảnh 3 (10s): Lời mời tham gia; Outro (5s): Fanpage và liên hệ.',
    },
    defaultApp: {
      name: 'Clipchamp - Trình làm phim trực tuyến',
      type: 'tool',
      url: 'https://app.clipchamp.com/',
      badge: 'Video Editor Web',
      description: 'Biên tập video trực quan với Storyboard, Timeline đa rãnh và hiệu ứng chuyển cảnh',
    },
  },
  {
    id: 30,
    topicId: 7,
    lessonNumber: 30,
    title: 'Biên tập phim',
    pageRange: 'Trang 143 - 148',
    objectives: [
      'Biết cách điều chỉnh thời lượng hiển thị của từng phân cảnh trên Timeline.',
      'Thiết lập hiệu ứng chuyển cảnh (Transition) mượt mà giữa các clip (Fade, Dissolve, Slide).',
      'Chỉnh sửa âm thanh: hiệu ứng Fade out (nhỏ dần âm thanh về cuối phim).',
      'Thêm phụ đề và tiêu đề chú thích (Subtitles / Titles).',
    ],
    starter: {
      situation: 'Nếu đoạn phim kết thúc đột ngột khi bài nhạc nền đang phát to thì người xem sẽ có cảm giác giật mình khó chịu.',
      question: 'Hiệu ứng âm thanh nào giúp tiếng nhạc nhỏ dần êm ái trước khi màn hình chuyển sang màu đen kết thúc?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Hiệu ứng Chuyển cảnh (Transition) và Fade âm thanh',
        context: 'Nút chữ X nằm giữa 2 phân cảnh dùng để chọn hiệu ứng chuyển cảnh. Fade Out âm thanh làm giảm dần âm lượng.',
        guidingQuestion: 'Thời lượng chuyển cảnh lý tưởng giữa các phân cảnh thông thường là khoảng bao nhiêu giây?',
        hints: ['Khoảng 0.5 đến 1.5 giây để tạo sự liền mạch mà không làm chậm nhịp phim.'],
        discoverySummary: 'Hiệu ứng chuyển cảnh và âm thanh tinh tế giúp video trở nên chuyên nghiệp, cuốn hút.',
      },
    ],
    knowledgeBox: [
      'Chỉnh thời lượng phân cảnh: nhập số giây vào ô Duration hoặc kéo mép khung hình trên rãnh Timeline.',
      'Hiệu ứng Fade Out âm thanh: nhấp chuột phải vào rãnh Audio -> chọn Fade Out -> thiết lập thời gian giảm âm (thường từ 2 - 3 giây cuối).',
      'Phụ đề (Subtitles) giúp người xem nắm bắt thông tin rõ ràng ngay cả khi không bật tiếng.',
    ],
    practicalGuide: {
      title: 'Các bước thêm hiệu ứng Fade Out cho nhạc nền',
      steps: [
        'Trên rãnh Audio Track 1, nhấp chuột phải vào phần âm thanh ở cuối đoạn clip.',
        'Chọn Fade -> chọn Fade out.',
        'Tích chọn "From the end of the clip" và nhập thời lượng làm nhỏ dần (ví dụ: 3.000 giây).',
        'Nhấn OK và nhấn nút Play để nghe kiểm tra lại.',
      ],
    },
    application: {
      question: 'Khi làm video có người thuyết minh trên nền nhạc, ta cần xử lý âm lượng nhạc nền thế nào để tiếng nói không bị át?',
      guidance: 'Hạ âm lượng nhạc nền xuống khoảng 20% - 30% trong suốt thời gian người thuyết minh đang nói (kỹ thuật Audio Ducking).',
    },
    defaultApp: {
      name: 'Kapwing - Biên tập Phim & Phụ đề Đa phương tiện',
      type: 'tool',
      url: 'https://www.kapwing.com/studio/editor',
      badge: 'Video & Subtitles',
      description: 'Chèn phụ đề tự động, cắt ghép video, chuyển cảnh và fade nhạc nền chuyên nghiệp',
    },
  },
  {
    id: 31,
    topicId: 7,
    lessonNumber: 31,
    title: 'Thực hành tạo phim hoạt hình',
    pageRange: 'Trang 148 - 151',
    objectives: [
      'Xây dựng kịch bản chi tiết cho phim hoạt hình ngắn: phân cảnh, hình ảnh nhân vật, lời thoại/âm thanh, phụ đề.',
      'Sử dụng công cụ Record Narration để thu âm trực tiếp lời thoại nhân vật qua micro máy tính.',
      'Đồng bộ hoá chính xác lời thoại, bóng thoại (speech bubble) và thời lượng xuất hiện của các phân cảnh.',
      'Xuất bản sản phẩm phim hoạt hình hoàn chỉnh định dạng MP4.',
    ],
    starter: {
      situation: 'Để làm một bộ phim hoạt hình ngắn về chủ đề "Giao thông an toàn" hoặc "Bảo vệ môi trường".',
      question: 'Trước khi mở phần mềm biên tập, bước chuẩn bị quan trọng nhất của nhà làm phim là gì?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Bảng kịch bản phân cảnh chi tiết (Storyboard Script)',
        context: 'Bảng kịch bản gồm các cột: Phân cảnh, Hình ảnh, Lời thoại/Âm thanh, Phụ đề, Thời lượng dự kiến.',
        guidingQuestion: 'Vì sao không nên vừa làm phim vừa nghĩ lời thoại mà bắt buộc phải có kịch bản trước?',
        hints: ['Có kịch bản giúp phân vai lồng tiếng chuẩn xác, chuẩn bị đủ tư liệu hình ảnh và không bị thiếu thời lượng.'],
        discoverySummary: 'Kịch bản là kim chỉ nam đảm bảo tính logic, mạch lạc và hiệu quả truyền thông của bộ phim.',
      },
    ],
    knowledgeBox: [
      'Quy trình làm phim hoạt hình: 1) Lên ý tưởng và viết kịch bản; 2) Chuẩn bị tư liệu tranh vẽ nhân vật; 3) Thu âm lời thoại (Record Narration); 4) Căn chỉnh đồng bộ hình ảnh và phụ đề trên Timeline; 5) Xuất bản video hoàn chỉnh.',
      'Thu âm lời thoại qua lệnh Record -> Record Narration, đặt tên tệp âm thanh tương ứng từng phân cảnh.',
    ],
    practicalGuide: {
      title: 'Thu âm lời thoại cho nhân vật trong phim hoạt hình',
      steps: [
        'Chọn lệnh Record trên thanh công cụ -> chọn Record Narration.',
        'Chọn điểm dừng ghi âm (At the end of sequence) và đặt tên cho tệp âm thanh (ví dụ: Loi_thoai_canh1).',
        'Nhấn nút tròn đỏ để bắt đầu đọc lời thoại trong khi quan sát màn hình xem trước.',
        'Nhấn nút vuông để kết thúc thu âm; đoạn âm thanh sẽ tự động được chèn khớp vào rãnh Audio.',
      ],
    },
    application: {
      question: 'Em hãy cùng nhóm bạn thực hiện một phim hoạt hình ngắn 1 phút tuyên truyền "Nói không với bạo lực học đường"?',
      guidance: 'Phân công 1 bạn vẽ/tìm ảnh nhân vật hoạt hình, 2 bạn lồng tiếng cho 2 nhân vật, 1 bạn dựng phim và làm phụ đề trên phần mềm.',
    },
    defaultApp: {
      name: 'Toontastic / Animaker - Làm phim Hoạt hình Trực quan',
      type: 'tool',
      url: 'https://www.animaker.com/',
      badge: 'Animation Studio',
      description: 'Tạo phim hoạt hình ngắn với nhân vật hoạt hoạ, lồng tiếng thoại và kịch bản phân cảnh',
    },
  },
];
