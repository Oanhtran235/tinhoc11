import { Lesson } from '../types';

export const LESSONS_PART_2: Lesson[] = [
  // =========================================================================
  // BÀI 10: LƯU TRỮ DỮ LIỆU VÀ KHAI THÁC THÔNG TIN PHỤC VỤ QUẢN LÍ
  // =========================================================================
  {
    id: 10,
    topicId: 4,
    lessonNumber: 10,
    title: 'Lưu trữ dữ liệu và khai thác thông tin phục vụ quản lí',
    pageRange: 'Trang 49 - 52',
    objectives: [
      'Trình bày được sự cần thiết của việc lưu trữ dữ liệu và khai thác thông tin phục vụ các bài toán quản lí trong đời sống;',
      'Chỉ ra và thực hiện được các thao tác cập nhật dữ liệu: thêm mới, chỉnh sửa và xoá dữ liệu khi có sự thay đổi;',
      'Phân biệt được hoạt động truy xuất dữ liệu (tìm kiếm, sắp xếp, lọc) và hoạt động khai thác thông tin (tính toán, thống kê, tổng hợp);',
      'Nêu được ví dụ và giải thích được lợi ích to lớn của việc thu thập dữ liệu tự động (mã vạch siêu thị, công tơ điện tử, trạm bán xăng dầu).',
    ],
    starter: {
      situation: 'Để quản lí kết quả học tập của học sinh, giáo viên phải quản lí điểm của từng môn học bao gồm điểm đánh giá thường xuyên, đánh giá giữa kì, đánh giá cuối kì. Tại các bệnh viện, siêu thị, ngân hàng cũng luôn diễn ra hoạt động quản lí hồ sơ, hóa đơn và hàng hóa.',
      question: 'Theo em, hoạt động quản lí này có cần lưu trữ dữ liệu thường xuyên không? Nếu không thu thập và lưu trữ dữ liệu thì công tác quản lí có thể thực hiện được không?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Cập nhật dữ liệu trong bài toán quản lí',
        context: 'Giáo viên dạy môn Toán dùng cuốn sổ điểm môn học để ghi lại điểm của từng học sinh lớp 11A. Từ sổ điểm môn học, giáo viên có thể khai thác được: học sinh nào có điểm cao nhất; học sinh nào có kết quả học tập ổn định; so sánh kết quả học tập giữa các tổ hay nhóm học sinh nam và nữ. Khi có học sinh mới chuyển đến, học sinh chuyển trường hoặc giáo viên chấm lại bài kiểm tra, sổ điểm cần được cập nhật.',
        guidingQuestion: 'Việc ghi điểm vào sổ điểm có cần thực hiện thường xuyên không? Ngoài việc ghi điểm, trong công tác quản lí có những thao tác cơ bản nào đối với dữ liệu?',
        hints: [
          'Việc ghi điểm vào sổ điểm cần được thực hiện thường xuyên trong suốt năm học gọi là lưu trữ dữ liệu.',
          'Các thao tác cập nhật dữ liệu cơ bản gồm: thêm dữ liệu mới (học sinh mới chuyển đến), xóa dữ liệu (học sinh chuyển đi) và chỉnh sửa dữ liệu (sửa điểm khi chấm phúc khảo).',
          'Dữ liệu cần được cập nhật chính xác, kịp thời và thường xuyên để đảm bảo thông tin quản lý luôn đúng với thực tế.'
        ],
        discoverySummary: 'Lưu trữ dữ liệu là việc ghi chép dữ liệu thường xuyên phục vụ quản lí. Cập nhật dữ liệu bao gồm ba thao tác cơ bản: thêm mới, chỉnh sửa và xóa dữ liệu khi có sự biến động.',
      },
      {
        id: 2,
        title: 'Truy xuất dữ liệu và khai thác thông tin',
        context: 'Từ dữ liệu điểm các môn học riêng lẻ, giáo viên chủ nhiệm tổng hợp thành Bảng điểm đánh giá các môn học cuối kì I của cả lớp 11A. Từ bảng tổng hợp này, nhà trường có thể lọc ra danh sách học sinh đạt danh hiệu học sinh xuất sắc, thống kê tỉ lệ học sinh khá giỏi hoặc vẽ biểu đồ so sánh kết quả học tập.',
        guidingQuestion: 'Thế nào là truy xuất dữ liệu? Phân biệt giữa truy xuất dữ liệu và khai thác thông tin từ dữ liệu đã có?',
        hints: [
          'Truy xuất dữ liệu là việc tìm kiếm, sắp xếp hay lọc ra các dữ liệu theo những tiêu chí xác định từ dữ liệu gốc đã lưu trữ.',
          'Khai thác thông tin là việc tính toán, thống kê hay tổng hợp từ dữ liệu đã có để tạo ra thông tin mới có giá trị cho việc chỉ đạo, ra quyết định quản lí.',
          'Ví dụ: Lọc ra điểm môn Toán của học sinh lớp 11A là truy xuất dữ liệu; Tính điểm trung bình học tập của lớp và xếp loại học lực là khai thác thông tin.'
        ],
        discoverySummary: 'Dữ liệu lưu trữ được truy xuất theo nhiều tiêu chí khác nhau để thu được dữ liệu cần thiết. Việc tính toán, thống kê hay tổng hợp từ dữ liệu đã có để rút ra tri thức mới được gọi là khai thác thông tin.',
      },
      {
        id: 3,
        title: 'Thu thập dữ liệu tự động trong đời sống hiện đại',
        context: 'Tại các siêu thị lớn, hàng hóa được gắn mã vạch mang thông tin sản phẩm. Nhân viên thu ngân chỉ cần quét đầu đọc mã vạch qua sản phẩm, máy tính sẽ tự động lập đơn hàng, ghi nhận doanh thu và trừ lượng hàng tồn kho. Trong ngành điện, công tơ điện tử truyền trực tiếp chỉ số tiêu thụ điện về trung tâm dữ liệu. Tại các cây xăng, cột bơm tự động đo đếm lượng xăng bơm và tính tiền.',
        guidingQuestion: 'Ở các siêu thị, ngành điện và trạm xăng, người ta thu thập dữ liệu tự động bằng cách nào? Việc thu thập tự động đem lại những lợi ích gì so với làm thủ công?',
        hints: [
          'Tại siêu thị: Quét mã vạch trên bao bì bằng máy quét laser, tự động gửi mã về máy tính để tra cứu giá và lưu hóa đơn.',
          'Trong ngành điện: Sử dụng công tơ điện tử có kết nối mạng viễn thông, tự động truyền chỉ số điện hàng giờ về máy chủ.',
          'Lợi ích: Giảm bớt công sức ghi chép thủ công, loại bỏ hoàn toàn sai sót do con người, cung cấp dữ liệu tức thời và hỗ trợ phân tích quản lí kỹ thuật.'
        ],
        discoverySummary: 'Thu thập dữ liệu tự động qua mã vạch, cảm biến thông minh và công tơ điện tử giúp quá trình lưu trữ diễn ra liên tục, chính xác, tiết kiệm nhân lực và phục vụ đắc lực cho công tác quản lí hiện đại.',
      },
    ],
    knowledgeBox: [
      'Bài toán quản lí là bài toán phổ biến trong thực tế. Cần phải tổ chức lưu trữ dữ liệu để phục vụ các yêu cầu quản lí đa dạng;',
      'Dữ liệu lưu trữ có thể được cập nhật thường xuyên (thêm mới, chỉnh sửa, xóa dữ liệu) để phản ánh đúng thực tế khách quan;',
      'Dữ liệu lưu trữ được truy xuất theo nhiều tiêu chí khác nhau (tìm kiếm, sắp xếp, lọc) để thu được các thông tin hữu ích;',
      'Khai thác thông tin là việc tính toán, thống kê hay tổng hợp từ dữ liệu đã có để tạo ra thông tin mới phục vụ điều hành và ra quyết định;',
      'Thu thập dữ liệu tự động bằng các thiết bị số (mã vạch, cảm biến, công tơ điện tử) giúp giảm công sức, hạn chế tối đa sai sót và nâng cao hiệu quả quản trị.'
    ],
    practicalGuide: {
      title: 'Khảo sát và thực hành các thao tác cập nhật, truy xuất dữ liệu trên bảng tính điện tử',
      steps: [
        'Mở bảng tính quản lý điểm lớp học hoặc bảng quản lý bán hàng mẫu trên máy tính.',
        'Thực hiện thao tác cập nhật: Thêm một bản ghi mới ở cuối bảng, chỉnh sửa một ô dữ liệu và xóa một dòng dữ liệu theo yêu cầu.',
        'Thực hiện truy xuất dữ liệu: Sử dụng tính năng Tìm kiếm (Find & Replace), tính năng Lọc (Filter) để lọc ra các học sinh có điểm môn Tin học từ 8.0 trở lên.',
        'Thực hiện khai thác thông tin: Dùng hàm AVERAGE tính điểm trung bình môn, dùng hàm COUNTIF thống kê số lượng học sinh khá, giỏi và vẽ biểu đồ hình cột so sánh.'
      ],
    },
    exerciseReview: [
      {
        question: 'Bài 1 (SGK tr.52): Quản lí điểm chỉ là một ứng dụng quản lí trong trường học. Hãy tìm thêm các nhu cầu quản lí khác trong nhà trường và chỉ ra hoạt động quản lí đó cần những dữ liệu nào?',
        answer: 'Các nhu cầu quản lí khác trong nhà trường gồm: 1) Quản lí hồ sơ học sinh (dữ liệu: Ngày sinh, giới tính, nơi sinh, họ tên cha mẹ, địa chỉ thường trú, số CCCD); 2) Quản lí nhân sự giáo viên (dữ liệu: Họ tên, ngày sinh, trình độ chuyên môn, tổ bộ môn, quá trình công tác, mức lương, khen thưởng, kỷ luật); 3) Quản lí thiết bị và cơ sở vật chất (dữ liệu: Tên thiết bị, chủng loại, số seri, ngày mua, giá trị, phòng học đang sử dụng, tình trạng hoạt động); 4) Quản lí thư viện (dữ liệu: Mã sách, tên sách, tác giả, nhà xuất bản, năm xuất bản, số lượng, tên người mượn, ngày mượn, ngày hẹn trả).'
      },
      {
        question: 'Bài 2 (SGK tr.52): Người ta thường nói: "Ở bất cứ nơi nào có một tổ chức là nơi ấy có nhu cầu quản lí". Hãy kể tên một vài bài toán quản lí mà em biết?',
        answer: 'Một số bài toán quản lí tiêu biểu trong xã hội: 1) Trong lĩnh vực kinh doanh bán lẻ: Quản lí kho hàng, quản lí doanh thu bán hàng, theo dõi đơn hàng trực tuyến; 2) Trong lĩnh vực y tế: Quản lí hồ sơ bệnh án, quản lí kho thuốc và vật tư y tế, quản lí viện phí; 3) Trong lĩnh vực giao thông vận tải: Quản lí phương tiện xe buýt, quản lí bán vé tàu xe và máy bay, theo dõi hành trình GPS; 4) Trong lĩnh vực tài chính - ngân hàng: Quản lí tài khoản khách hàng, quản lí lịch sử giao dịch và số dư tiền gửi.'
      },
    ],
    application: {
      question: 'Vận dụng 1 & 2 (SGK tr.52): Hãy cho một ví dụ về một bài toán quản lí tại cửa hàng tạp hóa và giải thích cách thu thập dữ liệu tự động tại các trạm bán xăng dầu?',
      guidance: '1) Tại cửa hàng tạp hóa: Hằng ngày cần ghi chép dữ liệu nhập hàng (tên mặt hàng, đơn vị tính, số lượng, đơn giá nhập) và dữ liệu bán lẻ (tên mặt hàng, số lượng bán, đơn giá bán, thời gian). 2) Tại trạm bán xăng dầu: Dữ liệu được ghi nhận tự động tức thời qua máy tính gắn tại cột bơm xăng gồm: loại xăng dầu, đơn giá, thời gian, lượng xăng bơm ra và thành tiền. Các cột bơm kết nối mạng nội bộ với máy tính trung tâm của trạm để lập hóa đơn điện tử tự động và đối soát tồn kho bồn chứa mà không cần đong đếm thủ công.'
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 10',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-10-luu-tru-du-lieu-va-khai-thac-thong-tin-phuc',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 10 Tin học 11',
    },
  },

  // =========================================================================
  // BÀI 11: CƠ SỞ DỮ LIỆU
  // =========================================================================
  {
    id: 11,
    topicId: 4,
    lessonNumber: 11,
    title: 'Cơ sở dữ liệu',
    pageRange: 'Trang 53 - 57',
    objectives: [
      'Hiểu được khái niệm Cơ sở dữ liệu (CSDL) và phân biệt được CSDL với tệp văn bản thông thường;',
      'Giải thích được các yêu cầu tổ chức lưu trữ dữ liệu khoa học: hạn chế dư thừa dữ liệu và đảm bảo dữ liệu độc lập với phần mềm;',
      'Nêu và phân tích được 6 thuộc tính cơ bản của CSDL: tính cấu trúc, tính không dư thừa, tính độc lập dữ liệu, tính toàn vẹn, tính nhất quán, tính bảo mật và an toàn;',
      'Đề xuất được cấu trúc lưu trữ dữ liệu dạng bảng cho một bài toán quản lí cụ thể trong thực tế.',
    ],
    starter: {
      situation: 'Theo em, việc lưu trữ dữ liệu phục vụ các bài toán quản lí có phải chỉ là việc chuyển các ghi chép trên giấy thành văn bản trên máy tính không? Nếu mỗi giáo viên tự lưu trữ một tệp văn bản riêng thì điều gì sẽ xảy ra khi cần tổng hợp dữ liệu toàn trường?',
      question: 'Vì sao cần phải tổ chức lưu trữ dữ liệu một cách khoa học? Cần đáp ứng những yêu cầu cốt lõi nào?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Yêu cầu tổ chức lưu trữ dữ liệu khoa học',
        context: 'Giáo viên dạy mỗi môn học bắt buộc phải có một sổ điểm môn học. Một bản sao của bảng điểm môn học được gửi cho giáo viên chủ nhiệm lớp để lập bảng điểm lớp học. Nếu bảng điểm lớp học cũng được lưu trữ riêng biệt như một tệp độc lập, khi một giáo viên bộ môn sửa điểm của học sinh (ví dụ: điểm Toán cuối kì của Nguyễn Kì Duyên từ 8 sửa thành 9) nhưng bảng điểm lớp học chưa kịp sửa thì sẽ dẫn tới sự mâu thuẫn dữ liệu.',
        guidingQuestion: 'Có cần lưu trữ bảng điểm lớp học không? Tại sao việc lưu trữ dữ liệu cần phải hạn chế dư thừa dữ liệu?',
        hints: [
          'Không cần lưu trữ bảng điểm lớp học như một bảng dữ liệu gốc, vì bảng này chỉ là một khung nhìn (view) tổng hợp từ các bảng điểm môn học.',
          'Hạn chế trùng lặp làm dư thừa dữ liệu là yêu cầu sống còn để tránh lãng phí dung lượng bộ nhớ.',
          'Khắc phục nguy cơ gây ra mâu thuẫn dữ liệu, đảm bảo tính nhất quán của dữ liệu khi cập nhật.'
        ],
        discoverySummary: 'Lưu trữ dữ liệu khoa học đòi hỏi phải hạn chế tối đa việc trùng lặp gây dư thừa dữ liệu, từ đó ngăn chặn những sai lệch và mâu thuẫn thông tin khi cập nhật.',
      },
      {
        id: 2,
        title: 'Sự phụ thuộc giữa phần mềm và dữ liệu',
        context: 'Xét cách lưu điểm dưới dạng tệp văn bản thuần tuý diem.txt: mỗi dòng ghi thông tin một học sinh ngăn cách bằng dấu phẩy: "11A, 1, Dương Hoàng Anh, 8, 7, 7, 9, 8". Phần mềm viết ra phải đọc từng dòng và tách các thành phần theo dấu phẩy. Nếu tệp thay đổi dấu phẩy thành dấu chấm phẩy ";" thì toàn bộ phần mềm phải viết lại mã nguồn để tách theo ký tự mới.',
        guidingQuestion: 'Vì sao dữ liệu cần được tổ chức độc lập với phần mềm khai thác dữ liệu?',
        hints: [
          'Nếu dữ liệu phụ thuộc vào phần mềm thì mỗi khi thay đổi cấu trúc tệp dữ liệu, lập trình viên buộc phải sửa đổi và biên dịch lại phần mềm, gây tốn kém rất nhiều công sức và chi phí.',
          'Dữ liệu tổ chức độc lập cho phép nhiều phần mềm khác nhau (ví dụ: phần mềm điểm, cổng tra cứu trực tuyến phụ huynh, ứng dụng di động) có thể cùng truy cập vào một nguồn CSDL chung.',
          'Tổ chức dữ liệu dưới dạng bảng (hàng và cột) là giải pháp tối ưu giúp tách biệt dữ liệu khỏi mã lệnh phần mềm.'
        ],
        discoverySummary: 'Dữ liệu cần được tổ chức lưu trữ một cách độc lập với việc xây dựng phát triển phần mềm, đảm bảo dễ dàng chia sẻ, bảo trì và phát triển ứng dụng lâu dài.',
      },
      {
        id: 3,
        title: 'Khái niệm và 6 thuộc tính cơ bản của Cơ sở dữ liệu',
        context: 'Khi dữ liệu được tổ chức lưu trữ một cách khoa học trên hệ thống máy tính, nó tạo thành Cơ sở dữ liệu (CSDL). Một CSDL chuyên nghiệp phải thỏa mãn đồng thời 6 thuộc tính kỹ thuật nghiêm ngặt.',
        guidingQuestion: 'CSDL là gì? Em hãy nêu và giải thích 6 thuộc tính cơ bản của một CSDL?',
        hints: [
          'Khái niệm: CSDL là một tập hợp các dữ liệu có liên quan với nhau, được lưu trữ một cách có tổ chức trên hệ thống máy tính.',
          '1) Tính cấu trúc: Dữ liệu được lưu trữ dưới dạng bảng gồm các hàng (bản ghi) và cột (trường).',
          '2) Tính không dư thừa: Hạn chế trùng lặp dữ liệu và không lưu trữ các dữ liệu có thể dễ dàng tính toán từ dữ liệu gốc.',
          '3) Tính độc lập dữ liệu: Các mô đun phần mềm không cần phải cập nhật khi thay đổi cách thức tổ chức hoặc lưu trữ vật lý của dữ liệu.',
          '4) Tính toàn vẹn: Giá trị dữ liệu thỏa mãn các ràng buộc logic thực tế (ví dụ: điểm số phải từ 0 đến 10; đơn giá bán phải là số nguyên dương).',
          '5) Tính nhất quán: Dữ liệu đảm bảo đúng đắn và không mâu thuẫn sau các thao tác cập nhật, kể cả khi xảy ra sự cố đột ngột.',
          '6) Tính bảo mật và an toàn: Dữ liệu được bảo vệ an toàn, ngăn chặn truy xuất trái phép và chống việc sao chép bất hợp pháp.'
        ],
        discoverySummary: 'CSDL là tập hợp dữ liệu có liên quan, lưu trữ có tổ chức trên máy tính. CSDL sở hữu 6 thuộc tính cơ bản: Tính cấu trúc, Tính không dư thừa, Tính độc lập dữ liệu, Tính toàn vẹn, Tính nhất quán, Tính bảo mật và an toàn.',
      },
    ],
    knowledgeBox: [
      'Cơ sở dữ liệu (CSDL) là một tập hợp các dữ liệu có liên quan với nhau, được lưu trữ một cách có tổ chức trên hệ thống máy tính;',
      'Dữ liệu cần được tổ chức lưu trữ một cách độc lập với việc xây dựng phát triển phần mềm, đảm bảo dễ dàng chia sẻ, bảo trì và mở rộng;',
      'Tính cấu trúc: Dữ liệu được tổ chức dưới dạng bảng gồm các hàng và cột theo một mô hình xác định;',
      'Tính không dư thừa: Hạn chế tối đa việc lưu trữ lặp lại và không lưu các dữ liệu phái sinh có thể tính toán từ dữ liệu đã có;',
      'Tính độc lập dữ liệu: Phần mềm ứng dụng không bị ảnh hưởng khi có sự thay đổi về phương thức tổ chức lưu trữ CSDL bên dưới;',
      'Tính toàn vẹn: Đảm bảo dữ liệu thỏa mãn các ràng buộc logic thực tế của bài toán quản lí;',
      'Tính nhất quán: Không gây ra mâu thuẫn dữ liệu sau bất kỳ thao tác cập nhật nào;',
      'Tính bảo mật và an toàn: Ngăn chặn truy cập trái phép và bảo toàn dữ liệu khi có sự cố kỹ thuật.'
    ],
    practicalGuide: {
      title: 'Thiết kế cấu trúc bảng dữ liệu và kiểm tra các ràng buộc toàn vẹn',
      steps: [
        'Xác định danh sách các đối tượng cần quản lí trong bài toán thực tế (ví dụ: Học sinh, Khách hàng, Sản phẩm).',
        'Xác định các trường (cột) cho mỗi đối tượng: tên trường, kiểu dữ liệu phù hợp (số nguyên, văn bản, ngày tháng).',
        'Thiết lập ràng buộc toàn vẹn cho các trường: Không để trống (Not Null), miền giá trị hợp lệ (Check), giá trị duy nhất (Unique).',
        'Kiểm tra tính không dư thừa: Rà soát loại bỏ các cột có thể tính toán tự động (như Thành tiền = Đơn giá * Số lượng, Điểm trung bình).'
      ],
    },
    exerciseReview: [
      {
        question: 'Bài 1 (SGK tr.57): Khi lưu trữ trên máy tính, theo em có cần lưu trữ cột Điểm trung bình trong bảng điểm môn học không? Vì sao?',
        answer: 'Không cần lưu trữ cột Điểm trung bình môn học. Vì Điểm trung bình môn học là dữ liệu phái sinh, được tính toán tự động theo công thức quy định từ các điểm thành phần đã có (điểm thường xuyên, giữa kì, cuối kì). Nếu lưu trữ sẽ gây dư thừa dữ liệu và khi điểm thành phần thay đổi, nếu không cập nhật kịp thời sẽ làm sai lệch tính nhất quán của dữ liệu.'
      },
      {
        question: 'Bài 2 (SGK tr.57): Hãy lấy một ví dụ minh họa cho sự cần thiết của việc lưu trữ dữ liệu độc lập với phần mềm khai thác dữ liệu?',
        answer: 'Ví dụ trong hệ thống ngân hàng: CSDL lưu trữ số dư tài khoản của khách hàng được tổ chức độc lập trên máy chủ CSDL. Nhờ đó, ngân hàng có thể triển khai đồng thời nhiều phần mềm khai thác khác nhau: Ứng dụng Mobile Banking trên điện thoại, Cổng Internet Banking trên trình duyệt web, Hệ thống rút tiền tự động tại cây ATM và Phần mềm quản lí nghiệp vụ tại quầy giao dịch. Khi ngân hàng nâng cấp máy chủ CSDL hoặc đổi định dạng lưu trữ, tất cả các phần mềm trên vẫn hoạt động bình thường mà không cần lập trình lại từ đầu.'
      },
    ],
    application: {
      question: 'Vận dụng (SGK tr.57): Thư viện là nơi em có thể đến để đọc hay mượn sách. Hãy đề xuất các dữ liệu cần quản lí của một thư viện?',
      guidance: 'Dữ liệu cần quản lí của thư viện gồm: 1) Nhóm dữ liệu về sách: Mã số sách, Tên sách, Tên tác giả, Thể loại, Nhà xuất bản, Năm xuất bản, Số lượng bản in hiện có; 2) Nhóm dữ liệu về độc giả: Mã số thẻ thư viện, Họ và tên độc giả, Ngày sinh, Lớp học/Khoa, Số điện thoại liên hệ; 3) Nhóm dữ liệu về mượn trả: Mã phiếu mượn, Mã số thẻ độc giả, Mã số sách mượn, Ngày mượn, Ngày hẹn trả, Ngày trả thực tế, Tình trạng sách khi trả, Tiền phạt quá hạn (nếu có).'
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 11',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-11-co-so-du-lieu',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 11 Tin học 11',
    },
  },

  // =========================================================================
  // BÀI 12: HỆ QUẢN TRỊ CƠ SỞ DỮ LIỆU VÀ HỆ CƠ SỞ DỮ LIỆU
  // =========================================================================
  {
    id: 12,
    topicId: 4,
    lessonNumber: 12,
    title: 'Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu',
    pageRange: 'Trang 58 - 63',
    objectives: [
      'Phát biểu được khái niệm Hệ quản trị cơ sở dữ liệu (hệ QTCSDL) và phân tích được 3 nhóm chức năng chính của nó;',
      'Hiểu được vai trò của Giao diện lập trình ứng dụng (API) trong việc kết nối phần mềm ứng dụng với hệ QTCSDL;',
      'Phân biệt được Hệ QTCSDL và Hệ CSDL (gồm 3 thành phần: CSDL, hệ QTCSDL, phần mềm ứng dụng CSDL);',
      'So sánh được ưu điểm và nhược điểm của Hệ CSDL tập trung và Hệ CSDL phân tán.',
    ],
    starter: {
      situation: 'Để tạo ra và sửa đổi một văn bản trên máy tính chúng ta cần một phần mềm soạn thảo văn bản. Để tạo ra và cập nhật bảng tính điện tử ta cần phần mềm bảng tính. Khi cần làm việc với các CSDL lớn gồm hàng triệu bản ghi và phục vụ nhiều người dùng đồng thời, ta cần công cụ phần mềm nào?',
      question: 'Phần mềm hỗ trợ làm việc với các CSDL cần thực hiện những yêu cầu gì? Hệ QTCSDL và Hệ CSDL khác nhau như thế nào?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Khái niệm và 3 nhóm chức năng chính của Hệ QTCSDL',
        context: 'Để hỗ trợ làm việc với các CSDL, người ta xây dựng những bộ phần mềm chuyên dụng gọi là Hệ quản trị cơ sở dữ liệu (Database Management System - DBMS). Một hệ QTCSDL đảm nhận ba nhóm chức năng trụ cột: định nghĩa dữ liệu, cập nhật/truy xuất dữ liệu, bảo mật và an toàn CSDL.',
        guidingQuestion: 'Hệ QTCSDL là gì? Phân tích nội dung và nhiệm vụ của 3 nhóm chức năng chính?',
        hints: [
          'Khái niệm: Hệ QTCSDL là phần mềm cung cấp phương thức để lưu trữ, cập nhật và truy xuất dữ liệu của CSDL, bảo mật và an toàn dữ liệu.',
          'a) Nhóm chức năng định nghĩa dữ liệu (DDL): Khai báo CSDL với tên gọi xác định; Tạo lập, sửa đổi kiến trúc bên trong CSDL; Cài đặt các ràng buộc toàn vẹn dữ liệu.',
          'b) Nhóm chức năng cập nhật và truy xuất dữ liệu (DML): Cung cấp các thao tác thêm mới, xóa, sửa bản ghi; Truy xuất dữ liệu theo các tiêu chí khác nhau.',
          'c) Nhóm chức năng bảo mật, an toàn CSDL: Kiểm soát quyền truy cập dữ liệu; Kiểm soát các giao dịch đảm bảo tính nhất quán; Cung cấp công cụ sao lưu dự phòng (backup) và khôi phục dữ liệu (recovery).'
        ],
        discoverySummary: 'Hệ QTCSDL là phần mềm trung gian giúp người dùng và ứng dụng lưu trữ, cập nhật, truy xuất, bảo mật và bảo toàn CSDL. Nó cung cấp giao diện lập trình ứng dụng (API) để kết nối phần mềm.',
      },
      {
        id: 2,
        title: 'Mô hình hai thành phần và Cấu trúc của Hệ CSDL',
        context: 'Khi lên mạng tra cứu điểm thi vào lớp 10, thí sinh chỉ cần nhập số báo danh trên trình duyệt là nhận được đầy đủ kết quả điểm thi. Để làm được điều đó, hệ thống cần có phần mềm ứng dụng tra cứu với giao diện thân thiện, hệ QTCSDL để thực thi lệnh tìm kiếm và CSDL chứa dữ liệu điểm thi.',
        guidingQuestion: 'Hệ CSDL gồm những thành phần nào? Phân biệt giữa Hệ QTCSDL và Hệ CSDL?',
        hints: [
          'Mô hình hai thành phần: Thành phần "chủ" (Server - thực hiện tính toán, quản lí dữ liệu) và Thành phần "khách" (Client - tổ chức giao diện tương tác với người dùng).',
          'Một hệ thống gồm ba thành phần: 1) CSDL; 2) Hệ QTCSDL; 3) Các phần mềm ứng dụng CSDL được gọi là một Hệ CSDL.',
          'Khác nhau: Hệ QTCSDL chỉ là một bộ phần mềm công cụ hỗ trợ (khi mới cài đặt thì chưa có dữ liệu); Hệ CSDL bao hàm cả phần mềm hệ QTCSDL, toàn bộ dữ liệu CSDL được lưu trữ và các phần mềm ứng dụng khai thác dữ liệu đó.'
        ],
        discoverySummary: 'Hệ CSDL là hệ thống hoàn chỉnh gồm ba thành phần hữu cơ: CSDL lưu trữ, Hệ QTCSDL quản trị và các Phần mềm ứng dụng CSDL giao tiếp với người dùng.',
      },
      {
        id: 3,
        title: 'Hệ CSDL tập trung và Hệ CSDL phân tán',
        context: 'Xét hai mô hình triển khai: 1) Hệ CSDL tập trung: Toàn bộ CSDL được lưu trữ tập trung trên một máy tính máy chủ duy nhất; 2) Hệ CSDL phân tán: Một doanh nghiệp có trụ sở chính tại Hà Nội và các chi nhánh tại Đà Nẵng, TP. Hồ Chí Minh, Cần Thơ. CSDL được phân chia và lưu trữ tại các trạm máy chủ địa phương, kết nối qua mạng Internet (như CSDL công dân quốc gia).',
        guidingQuestion: 'So sánh ưu điểm và nhược điểm của Hệ CSDL phân tán so với Hệ CSDL tập trung?',
        hints: [
          'Hệ CSDL tập trung: Ưu điểm là dễ bảo trì, dễ đảm bảo an ninh và nhất quán dữ liệu; Nhược điểm là phụ thuộc hoàn toàn vào đường truyền mạng và máy chủ trung tâm dễ bị nghẽn.',
          'Hệ CSDL phân tán: Ưu điểm là tính sẵn sàng cao, dễ dàng mở rộng quy mô bằng cách thêm trạm mới, tăng độ tin cậy; Nhược điểm là kiến trúc phức tạp, chi phí bảo trì cao và rất khó đồng bộ dữ liệu nhất quán.',
          'Hệ QTCSDL phân tán hỗ trợ người dùng làm việc thông suốt mà không cần biết dữ liệu đang nằm ở máy chủ địa phương nào.'
        ],
        discoverySummary: 'Hệ CSDL tập trung lưu trữ dữ liệu tại một máy chủ duy nhất, dễ quản lý; Hệ CSDL phân tán lưu trữ tại nhiều trạm cục bộ trong mạng, có tính sẵn sàng cao nhưng đòi hỏi kỹ thuật đồng bộ phức tạp.',
      },
    ],
    knowledgeBox: [
      'Hệ QTCSDL là phần mềm cung cấp phương thức để lưu trữ, cập nhật và truy xuất dữ liệu của CSDL, bảo mật và an toàn dữ liệu;',
      'Ba nhóm chức năng chính của hệ QTCSDL gồm: Định nghĩa dữ liệu (DDL), Cập nhật và truy xuất dữ liệu (DML), Bảo mật và an toàn CSDL;',
      'Hệ QTCSDL cung cấp Giao diện lập trình ứng dụng (API) để các nhà phát triển phần mềm kết nối mô đun chương trình với CSDL;',
      'Một hệ thống gồm ba thành phần: CSDL, hệ QTCSDL và các phần mềm ứng dụng CSDL được gọi là một Hệ CSDL;',
      'Hệ CSDL tập trung: CSDL được lưu trữ tập trung trên một máy tính, dễ quản lí và bảo mật nhưng phụ thuộc mạng;',
      'Hệ CSDL phân tán: Các thành phần CSDL lưu trữ phân tán trên các máy tính khác nhau (trạm cục bộ) trong mạng máy tính, có tính sẵn sàng cao và dễ mở rộng.'
    ],
    practicalGuide: {
      title: 'Khảo sát mô hình kiến trúc Hệ CSDL máy chủ - máy khách (Client - Server)',
      steps: [
        'Quan sát sơ đồ cấu trúc của một hệ thống CSDL trực tuyến (như hệ thống quản lý học sinh VnEdu, SMAS hoặc Cổng dịch vụ công).',
        'Chỉ rõ máy chủ cơ sở dữ liệu (Database Server) nơi cài đặt hệ QTCSDL (MySQL, SQL Server, Oracle).',
        'Chỉ rõ máy chủ ứng dụng web/app và các máy trạm khách của giáo viên, học sinh, phụ huynh truy cập.',
        'Mô tả đường đi của một yêu cầu tra cứu dữ liệu từ giao diện máy khách gửi qua API đến hệ QTCSDL và trả kết quả về màn hình.'
      ],
    },
    exerciseReview: [
      {
        question: 'Bài 1 (SGK tr.63): Hãy lập danh sách các chức năng của hệ QTCSDL trong từng nhóm chức năng của hệ QTCSDL?',
        answer: 'Các chức năng được phân loại như sau: 1) Nhóm chức năng Định nghĩa dữ liệu: Khai báo CSDL với tên gọi xác định, tạo lập và sửa đổi cấu trúc bảng, cài đặt các ràng buộc toàn vẹn dữ liệu; 2) Nhóm chức năng Cập nhật và truy xuất dữ liệu: Thêm mới bản ghi, chỉnh sửa bản ghi, xóa bản ghi, tìm kiếm và lọc dữ liệu theo nhiều tiêu chí, kết xuất báo cáo; 3) Nhóm chức năng Bảo mật và an toàn CSDL: Phân quyền truy cập cho từng nhóm tài khoản, kiểm soát giao dịch đảm bảo nhất quán, tự động sao lưu dự phòng định kỳ và khôi phục dữ liệu khi gặp sự cố.'
      },
      {
        question: 'Bài 2 (SGK tr.63): Hãy phân tích điểm mạnh và điểm yếu của hệ CSDL phân tán so với hệ CSDL tập trung?',
        answer: '1) Điểm mạnh của hệ CSDL phân tán: Tính sẵn sàng cao và mở rộng nhanh chóng (khi mở thêm chi nhánh chỉ cần bổ sung thêm trạm cục bộ); Độ tin cậy và an toàn cao (sự cố ở một trạm không làm tê liệt toàn bộ hệ thống vì có bản sao lưu cục bộ); Giảm tải đường truyền mạng diện rộng. 2) Điểm yếu của hệ CSDL phân tán: Kiến trúc mạng và phần mềm rất phức tạp, đòi hỏi chi phí đầu tư và bảo trì cao; Rất khó khăn trong việc đảm bảo tính nhất quán dữ liệu nếu hệ QTCSDL không thực hiện đồng bộ hóa dữ liệu tức thời và chính xác giữa các trạm.'
      },
    ],
    application: {
      question: 'Vận dụng 1 & 2 (SGK tr.63): Cho ví dụ về một hệ CSDL trên thực tế và kể tên một số hệ QTCSDL quan hệ phổ biến hàng đầu thế giới?',
      guidance: '1) Ví dụ hệ CSDL thực tế: Hệ CSDL quản lí bệnh viện gồm: CSDL bệnh viện (bảng bệnh nhân, hồ sơ bệnh án, kho thuốc, viện phí), Hệ QTCSDL (như Oracle hoặc Microsoft SQL Server) và Phần mềm ứng dụng bệnh viện HIS/LIS cho bác sĩ, y tá, dược sĩ sử dụng tại các khoa phòng. 2) Các hệ QTCSDL quan hệ phổ biến hàng đầu thế giới theo bảng xếp hạng DB-Engines gồm: Oracle, MySQL, Microsoft SQL Server, PostgreSQL, IBM Db2, MariaDB và SQLite.'
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 12',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-12-he-quan-tri-co-so-du-lieu-va-he-co-so-du-lieu',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 12 Tin học 11',
    },
  },

  // =========================================================================
  // BÀI 13: CƠ SỞ DỮ LIỆU QUAN HỆ
  // =========================================================================
  {
    id: 13,
    topicId: 4,
    lessonNumber: 13,
    title: 'Cơ sở dữ liệu quan hệ',
    pageRange: 'Trang 64 - 68',
    objectives: [
      'Hiểu được khái niệm CSDL quan hệ là CSDL lưu trữ dữ liệu dưới dạng các bảng có quan hệ với nhau;',
      'Nắm vững các khái niệm cơ bản: bản ghi (hàng), trường (cột), khóa, khóa chính và khóa ngoài;',
      'Hiểu được cơ chế liên kết dữ liệu giữa các bảng thông qua khóa ngoài trỏ đến khóa chính;',
      'Giải thích được vì sao cần tách dữ liệu thành nhiều bảng liên kết thay vì gom vào một bảng duy nhất (hạn chế dư thừa, đảm bảo nhất quán).',
    ],
    starter: {
      situation: 'Quan sát CSDL âm nhạc trên một website trực tuyến gồm danh sách các nhạc sĩ, ca sĩ, bản nhạc và bản thu âm. Một bản nhạc có thể do nhiều ca sĩ khác nhau thể hiện, và một nhạc sĩ có thể sáng tác nhiều bản nhạc.',
      question: 'Mô hình CSDL quan hệ là gì? Vì sao người ta không gom tất cả thông tin vào một bảng duy nhất mà phải chia thành nhiều bảng có liên kết với nhau?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Khái niệm CSDL quan hệ qua ví dụ CSDL âm nhạc',
        context: 'Khảo sát CSDL âm nhạc Hình 13.1 SGK gồm 4 bảng: a) Nhạc sĩ (gồm mã nhạc sĩ Aid, tên nhạc sĩ TenNS); b) Ca sĩ (mã ca sĩ Sid, tên ca sĩ TenCS); c) Bản nhạc (mã bản nhạc Mid, mã nhạc sĩ sáng tác Aid, tên bản nhạc TenBN); d) Bản thu âm (mã bản nhạc Mid, mã ca sĩ biểu diễn Sid).',
        guidingQuestion: 'Nhạc sĩ sáng tác bản nhạc "Trường ca sông Lô" là ai? Bản thu âm tương ứng với dòng Mid="0005", Sid="TN" là bài hát nào do ca sĩ nào thể hiện?',
        hints: [
          'Từ bảng Bản nhạc: Bản nhạc "Trường ca Sông Lô" có mã Mid=0002, Aid=2. Đối chiếu sang bảng Nhạc sĩ với Aid=2 ta tìm được tác giả là nhạc sĩ Văn Cao.',
          'Bản nhạc "Xa khơi" có Aid=4, đối chiếu bảng Nhạc sĩ là nhạc sĩ Nguyễn Tài Tuệ.',
          'Dòng Mid="0005", Sid="TN" trong bảng Bản thu âm: Mid=0005 là bài "Việt Nam quê hương tôi" (nhạc sĩ Đỗ Nhuận), Sid="TN" là ca sĩ Tân Nhân thể hiện.',
          'Các bảng này liên kết chặt chẽ với nhau thông qua các trường mã định danh chung Aid, Sid, Mid.'
        ],
        discoverySummary: 'CSDL quan hệ là CSDL lưu trữ dữ liệu dưới dạng các bảng có quan hệ với nhau. Người dùng có thể kết hợp dữ liệu giữa các bảng dựa trên các trường chung để tìm kiếm thông tin mong muốn.',
      },
      {
        id: 2,
        title: 'Bản ghi, trường, khóa và khóa chính trong bảng dữ liệu',
        context: 'Trong bảng dữ liệu quan hệ, mỗi thành phần đều có vai trò cụ thể: a) Bản ghi (record) tương ứng với mỗi hàng, thể hiện một đối tượng cụ thể; b) Trường (field) tương ứng với mỗi cột, thể hiện một thuộc tính của đối tượng; c) Khóa là tập hợp các trường giúp phân biệt các bản ghi.',
        guidingQuestion: 'Thế nào là khóa và khóa chính? Tại sao người ta thường chọn khóa có ít trường nhất làm khóa chính?',
        hints: [
          'Bản ghi: Mỗi hàng trong bảng là một bản ghi chép dữ liệu cho một đối tượng (ví dụ: một ca sĩ cụ thể).',
          'Trường: Mỗi cột là một trường, ví dụ bảng Ca sĩ có 2 trường: Sid (mã ca sĩ) và TenCS (tên ca sĩ).',
          'Khóa: Là một hay một nhóm trường mà giá trị của chúng không trùng nhau tại các bản ghi, xác định duy nhất một bản ghi trong bảng.',
          'Khóa chính (Primary Key): Là khóa được chọn để đại diện phân biệt các bản ghi trong bảng. Người ta thường chọn khóa có số trường ít nhất (thường là 1 trường mã số) để việc tìm kiếm, lập chỉ mục và liên kết diễn ra đơn giản, nhanh chóng.'
        ],
        discoverySummary: 'Mỗi hàng là một bản ghi, mỗi cột là một trường. Khóa chính là khóa định danh duy nhất của bảng, thường có số trường ít nhất để tối ưu tốc độ xử lý.',
      },
      {
        id: 3,
        title: 'Khóa ngoài và Cơ chế liên kết dữ liệu tránh dư thừa',
        context: 'Trong bảng Bản nhạc có trường Aid; trường này đồng thời là khóa chính của bảng Nhạc sĩ. Ta gọi Aid trong bảng Bản nhạc là Khóa ngoài (Foreign Key). Khi cần thông tin tổng hợp, hệ thống dùng khóa ngoài để ghép nối hai bảng tạo ra bảng kết quả mới. Nếu gộp tất cả thông tin vào một bảng duy nhất (bảng NBC) thì tên nhạc sĩ, tên ca sĩ sẽ bị lặp lại hàng nghìn lần.',
        guidingQuestion: 'Khóa ngoài là gì? Nêu lí do vì sao người ta không thiết lập CSDL gồm một bảng duy nhất mà phải chia thành nhiều bảng liên kết?',
        hints: [
          'Khái niệm: Khóa ngoài của một bảng là trường hay nhóm trường làm khóa chính ở một bảng khác.',
          'Khóa ngoài của bảng Bản nhạc là Aid; Khóa ngoài của bảng Bản thu âm là Mid và Sid.',
          'Lí do phân tách nhiều bảng liên kết: 1) Hạn chế tối đa dư thừa dữ liệu lưu trữ; 2) Đảm bảo tính toàn vẹn và tính nhất quán của dữ liệu khi cập nhật (chỉ cần sửa tên nhạc sĩ một lần ở bảng Nhạc sĩ, mọi bản nhạc liên quan đều đúng).'
        ],
        discoverySummary: 'Khóa ngoài là khóa chính của bảng khác được đưa vào để liên kết dữ liệu. Việc chia bảng và liên kết bằng khóa ngoài giúp loại bỏ trùng lặp dữ liệu và bảo đảm tính toàn vẹn khi cập nhật.',
      },
    ],
    knowledgeBox: [
      'CSDL quan hệ là CSDL lưu trữ dữ liệu dưới dạng các bảng có quan hệ với nhau;',
      'Bản ghi (record): Tương ứng với mỗi hàng của bảng, là tập hợp các thông tin về một đối tượng cụ thể được quản lí;',
      'Trường (field): Tương ứng với mỗi cột trong bảng, thể hiện thuộc tính của đối tượng được quản lí trong bảng;',
      'Khóa: Là một hay một nhóm trường mà giá trị của chúng tại các bản ghi không trùng nhau, xác định duy nhất một bản ghi. Khóa chính thường là khóa có số trường ít nhất;',
      'Khóa ngoài: Khóa ngoài của một bảng là trường hay nhóm trường làm khóa chính ở một bảng khác;',
      'Liên kết dữ liệu theo khóa: Là việc dùng khóa ngoài để liên kết hai bảng, giúp hạn chế dư thừa dữ liệu và đảm bảo tính nhất quán khi cập nhật;',
      'Kiểu dữ liệu của trường: Quy định mỗi trường có các dữ liệu cùng một kiểu nhằm hạn chế lãng phí dung lượng và kiểm soát tính đúng đắn logic.'
    ],
    practicalGuide: {
      title: 'Các bước xác định khóa chính, khóa ngoài và thiết lập quan hệ giữa các bảng',
      steps: [
        'Bước 1: Rà soát danh sách các cột trong bảng để tìm ra các trường có giá trị không bao giờ trùng lặp (ví dụ: Số thẻ học sinh, Mã môn, Mã sản phẩm).',
        'Bước 2: Chọn trường ngắn gọn, tối ưu nhất làm Khóa chính (Primary Key).',
        'Bước 3: Nhận diện Khóa ngoài (Foreign Key) bằng cách tìm các cột trong bảng hiện tại có vai trò tham chiếu đến Khóa chính của bảng khác.',
        'Bước 4: Vẽ sơ đồ liên kết thực thể quan hệ (ERD) nối từ Khóa ngoài trỏ sang Khóa chính tương ứng.'
      ],
    },
    exerciseReview: [
      {
        question: 'Nhiệm vụ 2 (SGK tr.68): Cho CSDL học tập có các bảng: Hocsinh (họ tên, số CCCD, số thẻ học sinh, ngày sinh, địa chỉ), monhoc (tên môn, mã môn), Diem (số thẻ học sinh, mã môn, năm, học kì, loại điểm, điểm). Hãy xác định khóa chính và khóa ngoài của từng bảng? Có thể lấy số CCCD làm khóa chính bảng Hocsinh được không?',
        answer: '1) Xác định khóa chính: Bảng Hocsinh có khóa chính là trường "Số thẻ học sinh"; Bảng monhoc có khóa chính là trường "Mã môn"; Bảng Diem có khóa chính là nhóm trường tổ hợp: {Số thẻ học sinh, Mã môn, Năm, Học kì, Loại điểm}. 2) Xác định khóa ngoài: Trong bảng Diem có 2 khóa ngoài là: "Số thẻ học sinh" (trỏ tới khóa chính bảng Hocsinh) và "Mã môn" (trỏ tới khóa chính bảng monhoc). 3) Có thể lấy số CCCD làm khóa chính bảng Hocsinh được không? Về mặt lý thuyết, số CCCD không trùng nhau nên có thể làm một khóa; Tuy nhiên nếu dùng số CCCD làm khóa chính thì bảng Diem cũng phải lưu số CCCD (12 chữ số) thay cho số thẻ học sinh, làm bảng Diem dài hơn và việc liên kết cồng kềnh hơn, do đó chọn "Số thẻ học sinh" làm khóa chính là tối ưu hơn.'
      },
    ],
    application: {
      question: 'Vận dụng (SGK tr.68): Trong kì thi tốt nghiệp THPT, học sinh được đánh số báo danh, có thể thi một số môn, được chia vào các phòng thi đánh số, sau khi chấm sẽ có điểm thi với các môn đăng kí dự thi. Em hãy đề xuất một số bảng dữ liệu và các trường làm khóa chính, khóa ngoài cho các bảng đó?',
      guidance: 'Đề xuất mô hình CSDL kỳ thi THPT gồm 3 bảng: 1) Bảng Danh sách thí sinh DSHS (SBD, Họ và tên, Ngày sinh, Phòng thi) với khóa chính là SBD; 2) Bảng Danh sách môn thi DSMT (Mã môn, Tên môn, Thời gian thi, Hình thức thi) với khóa chính là Mã môn; 3) Bảng Điểm thi Diem (SBD, Mã môn, Điểm thi) với khóa chính tổ hợp là {SBD, Mã môn}. Trong bảng Diem: SBD là khóa ngoài trỏ đến bảng DSHS, Mã môn là khóa ngoài trỏ đến bảng DSMT. Thiết kế này tránh dư thừa thông tin cá nhân của thí sinh khi thi nhiều môn.'
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 13',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-13-co-so-du-lieu-quan-he',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 13 Tin học 11',
    },
  },

  // =========================================================================
  // BÀI 14: SQL – NGÔN NGỮ TRUY VẤN CÓ CẤU TRÚC
  // =========================================================================
  {
    id: 14,
    topicId: 4,
    lessonNumber: 14,
    title: 'SQL – Ngôn ngữ truy vấn có cấu trúc',
    pageRange: 'Trang 69 - 73',
    objectives: [
      'Hiểu được vai trò, lợi ích của ngôn ngữ truy vấn có cấu trúc SQL và nắm được 3 thành phần chính: DDL, DML, DCL;',
      'Viết được các câu lệnh DDL để khởi tạo CSDL, tạo bảng, khai báo khóa chính và khóa ngoài;',
      'Viết được các câu lệnh DML để truy xuất dữ liệu (SELECT, WHERE, ORDER BY, INNER JOIN) và cập nhật dữ liệu (INSERT, DELETE, UPDATE);',
      'Hiểu và viết được các câu lệnh DCL cơ bản (GRANT, REVOKE) để kiểm soát quyền người dùng.',
    ],
    starter: {
      situation: 'Ở các bài trước các em đã biết hệ QTCSDL hỗ trợ khởi tạo, cập nhật, truy xuất CSDL. Ngày nay người ta thực hiện công việc đó chủ yếu thông qua ngôn ngữ truy vấn có cấu trúc SQL.',
      question: 'Sự khác biệt của việc sử dụng ngôn ngữ SQL so với việc truy xuất dữ liệu bằng ngôn ngữ lập trình truyền thống là gì?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Lợi ích của ngôn ngữ truy vấn SQL và 3 thành phần chính',
        context: 'Để lấy danh sách bản nhạc của nhạc sĩ Văn Cao (Aid=1): Cách 1 dùng ngôn ngữ lập trình, người viết phải tự mở tệp, duyệt từng dòng, viết thuật toán tách trường kiểm tra điều kiện; Cách 2 dùng SQL chỉ cần viết: "SELECT TenBN FROM bannhac WHERE Aid = 1;".',
        guidingQuestion: 'SQL là gì? SQL gồm những thành phần nào và sự khác biệt cơ bản so với lập trình trực tiếp?',
        hints: [
          'Khái niệm: SQL (Structured Query Language) là ngôn ngữ truy vấn định chuẩn quốc tế cho việc định nghĩa, cập nhật, truy xuất và điều khiển dữ liệu từ các CSDL quan hệ.',
          'Khác biệt: Lập trình truyền thống đòi hỏi hiểu chi tiết cấu trúc tệp dữ liệu và tự xây dựng thuật toán; Trong khi SQL cung cấp các câu lệnh truy vấn khái quát (chỉ cần nêu cần lấy dữ liệu gì, thỏa mãn điều kiện nào) và gửi yêu cầu cho hệ QTCSDL tự động tối ưu hóa thực thi.',
          'SQL gồm 3 thành phần: 1) DDL (Data Definition Language - Ngôn ngữ định nghĩa dữ liệu); 2) DML (Data Manipulation Language - Ngôn ngữ thao tác dữ liệu); 3) DCL (Data Control Language - Ngôn ngữ kiểm soát dữ liệu).'
        ],
        discoverySummary: 'SQL là ngôn ngữ chuẩn hóa giúp tương tác với CSDL một cách khái quát, trực quan và hiệu quả. SQL gồm 3 nhóm lệnh: DDL (định nghĩa cấu trúc), DML (cập nhật & truy xuất), DCL (kiểm soát quyền).',
      },
      {
        id: 2,
        title: 'Khởi tạo CSDL và Định nghĩa bảng với DDL',
        context: 'Thành phần DDL của SQL cung cấp các câu lệnh tạo lập CSDL, tạo bảng, sửa đổi cấu trúc và thiết lập các khóa. Các kiểu dữ liệu phổ biến gồm: CHAR(n), VARCHAR(n), INT, REAL, BOOLEAN, DATE, TIME.',
        guidingQuestion: 'Cú pháp câu lệnh CREATE DATABASE, CREATE TABLE, ALTER TABLE thêm khóa chính và khóa ngoài được viết như thế nào?',
        hints: [
          'Tạo CSDL: CREATE DATABASE tên_CSDL;',
          'Tạo bảng: CREATE TABLE tên_bảng (tên_trường kiểu_dữ_liệu, ...); Ví dụ: CREATE TABLE nhacsi (Aid INT, TenNS VARCHAR(64));',
          'Thêm khóa chính: ALTER TABLE tên_bảng ADD PRIMARY KEY (tên_trường); Ví dụ: ALTER TABLE bannhac ADD PRIMARY KEY (Mid);',
          'Thêm khóa ngoài: ALTER TABLE tên_bảng ADD FOREIGN KEY (khóa_ngoài) REFERENCES bảng_tham_chiếu (khóa_chính);',
          'Quy tắc đặt tên: Chỉ gồm các ký tự La-tinh, chữ số và dấu gạch dưới, không chứa ký tự trống và ký tự đặc biệt. Kết thúc câu lệnh luôn bằng dấu chấm phẩy ";".'
        ],
        discoverySummary: 'DDL cung cấp các lệnh CREATE, ALTER để khai báo CSDL, tạo bảng, quy định kiểu dữ liệu và thiết lập các ràng buộc khóa chính, khóa ngoài.',
      },
      {
        id: 3,
        title: 'Cập nhật và Truy xuất dữ liệu với DML',
        context: 'Thành phần DML cung cấp các câu lệnh truy xuất (SELECT) và cập nhật dữ liệu (INSERT INTO, DELETE FROM, UPDATE). Mệnh đề INNER JOIN cho phép liên kết dữ liệu giữa các bảng.',
        guidingQuestion: 'Trình bày cú pháp các câu lệnh SELECT, INSERT, DELETE, UPDATE và cách liên kết bảng bằng mệnh đề JOIN?',
        hints: [
          'Truy xuất: SELECT <dữ liệu cần lấy> FROM <tên bảng> WHERE <điều kiện> ORDER BY <tên trường>;',
          'Liên kết bảng JOIN: SELECT bảng1.cột, bảng2.cột FROM bảng1 INNER JOIN bảng2 ON bảng1.khóa_ngoài = bảng2.khóa_chính;',
          'Thêm mới dữ liệu: INSERT INTO <tên bảng> VALUES (giá_trị_1, giá_trị_2, ...);',
          'Xóa dữ liệu: DELETE FROM <tên bảng> WHERE <điều kiện>;',
          'Sửa dữ liệu: UPDATE <tên bảng> SET <tên trường> = <giá trị mới> WHERE <điều kiện>;'
        ],
        discoverySummary: 'DML hỗ trợ truy xuất linh hoạt qua SELECT và liên kết bảng JOIN, đồng thời hỗ trợ cập nhật dữ liệu chuẩn xác qua INSERT, UPDATE, DELETE.',
      },
      {
        id: 4,
        title: 'Kiểm soát quyền truy cập với DCL',
        context: 'Thành phần DCL cung cấp các câu lệnh cấp quyền (GRANT) và thu hồi quyền (REVOKE) của người dùng đối với các bảng trong CSDL nhằm đảm bảo an ninh hệ thống.',
        guidingQuestion: 'Cú pháp câu lệnh GRANT và REVOKE được viết như thế nào?',
        hints: [
          'Cấp quyền: GRANT danh_sách_quyền ON tên_CSDL.tên_bảng TO tài_khoản_người_dùng;',
          'Thu hồi quyền: REVOKE danh_sách_quyền ON tên_CSDL.tên_bảng FROM tài_khoản_người_dùng;',
          'Các quyền có thể cấp: SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER... Dùng dấu sao "*" để đại diện cho tất cả các bảng (ví dụ: music.*).'
        ],
        discoverySummary: 'DCL kiểm soát quyền người dùng qua GRANT và REVOKE, là công cụ then chốt thực thi chính sách bảo mật trong hệ QTCSDL.',
      },
    ],
    knowledgeBox: [
      'SQL (Structured Query Language) là ngôn ngữ truy vấn định chuẩn cho việc định nghĩa, cập nhật, truy xuất và điều khiển dữ liệu từ các CSDL quan hệ;',
      'SQL gồm 3 thành phần chính: 1) DDL (Ngôn ngữ định nghĩa dữ liệu); 2) DML (Ngôn ngữ thao tác dữ liệu); 3) DCL (Ngôn ngữ kiểm soát dữ liệu);',
      'Lệnh DDL: CREATE DATABASE tên_CSDL; CREATE TABLE tên_bảng (danh sách tên trường và kiểu dữ liệu); ALTER TABLE tên_bảng Yêu cầu thay đổi;',
      'Lệnh DML truy xuất: SELECT <dữ liệu cần lấy> FROM <tên bảng> WHERE <điều kiện> ORDER BY <tên trường>;',
      'Mệnh đề JOIN liên kết các bảng theo khóa: SELECT danh sách trường FROM bảng1 INNER JOIN bảng2 ON điều kiện bằng;',
      'Lệnh DML cập nhật: INSERT INTO <bảng> VALUES (...); DELETE FROM <bảng> WHERE <điều kiện>; UPDATE <bảng> SET <trường> = <giá trị> WHERE <điều kiện>;',
      'Lệnh DCL kiểm soát quyền: GRANT danh sách quyền ON CSDL.bảng TO người_dùng; REVOKE danh sách quyền ON CSDL.bảng FROM người_dùng.'
    ],
    practicalGuide: {
      title: 'Thực hành viết và chạy các câu lệnh SQL cơ bản trên CSDL âm nhạc',
      steps: [
        'Bước 1: Mở môi trường thực thi SQL, viết lệnh tạo CSDL: CREATE DATABASE music;',
        'Bước 2: Viết câu lệnh tạo bảng ca sĩ: CREATE TABLE casi (Sid VARCHAR(10), TenCS VARCHAR(128));',
        'Bước 3: Thiết lập khóa chính: ALTER TABLE casi ADD PRIMARY KEY (Sid);',
        'Bước 4: Chèn bản ghi mới: INSERT INTO casi VALUES ("TK", "Trần Khánh"), ("LD", "Lê Dung");',
        'Bước 5: Truy vấn kiểm tra: SELECT * FROM casi;'
      ],
    },
    exerciseReview: [
      {
        question: 'Nhiệm vụ 2 (SGK tr.73): Viết câu truy vấn tạo bảng Bản thu âm (banthuam), tạo khóa ngoài Mid và Sid, và liên kết bảng banthuam với bannhac?',
        answer: '1) Tạo bảng banthuam: CREATE TABLE banthuam (Mid CHAR(4), Sid INT); 2) Tạo khóa ngoài: ALTER TABLE banthuam ADD FOREIGN KEY (Mid) REFERENCES bannhac (Mid); ALTER TABLE banthuam ADD FOREIGN KEY (Sid) REFERENCES casi (Sid); 3) Truy vấn liên kết bảng lấy tên bản nhạc: SELECT banthuam.Mid, banthuam.Sid, bannhac.TenBN FROM banthuam INNER JOIN bannhac ON banthuam.Mid = bannhac.Mid;'
      },
    ],
    application: {
      question: 'Vận dụng (SGK tr.73): Viết câu truy vấn lấy ra tất cả các dòng trong liên kết bảng banthuam với bảng bannhac và bảng casi, mỗi dòng lấy các cột: Mid, Sid của bảng banthuam, cột TenBN của bảng bannhac và TenCS của bảng casi?',
      guidance: 'Câu lệnh SQL kết hợp 3 bảng bằng mệnh đề LEFT JOIN: SELECT a.Mid, a.Sid, b.TenBN, c.TenCS FROM banthuam a LEFT JOIN bannhac b ON a.Mid = b.Mid LEFT JOIN casi c ON a.Sid = c.Sid;'
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 14',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-14-sql-ngon-ngu-truy-van-co-cau-truc',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 14 Tin học 11',
    },
  },

  // =========================================================================
  // BÀI 15: BẢO MẬT VÀ AN TOÀN HỆ CƠ SỞ DỮ LIỆU
  // =========================================================================
  {
    id: 15,
    topicId: 4,
    lessonNumber: 15,
    title: 'Bảo mật và an toàn hệ cơ sở dữ liệu',
    pageRange: 'Trang 74 - 77',
    objectives: [
      'Phân biệt được khái niệm bảo mật CSDL (ngăn chặn truy cập trái phép) và an toàn dữ liệu (ngăn ngừa sai lệch, mất mát do sự cố);',
      'Trình bày được 4 trụ cột của chính sách bảo mật toàn diện: ý thức người dùng, an ninh mạng phần cứng/phần mềm, phân quyền tài khoản, giám sát nhật ký (log);',
      'Phân tích được các nguy cơ đe dọa an toàn dữ liệu (nguồn điện, thiết bị lưu trữ, phần mềm) và các giải pháp phòng ngừa, khắc phục;',
      'Hiểu được tầm quan trọng sống còn của việc sao lưu định kỳ (backup) và khả năng phục hồi dữ liệu (recovery).',
    ],
    starter: {
      situation: 'Mỗi hệ CSDL đều được xây dựng nhằm phục vụ một hệ thống quản lí như bán vé máy bay, bệnh án bệnh viện, quản lí điểm học tập, mạng xã hội. Từng có nhiều thông tin về việc những khối lượng lớn dữ liệu bị đánh cắp, tài khoản bị xâm nhập do CSDL chưa được bảo vệ đủ tốt.',
      question: 'Cần phải làm gì để đảm bảo an ninh, an toàn cho các hệ CSDL? Làm sao để dữ liệu không bị sai lệch, mất mát khi hệ thống gặp sự cố mất điện hay hỏng ổ cứng?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Bảo mật hệ CSDL và Phân quyền theo nhóm người dùng',
        context: 'Xét website âm nhạc: Tất cả người dùng Internet đều có thể tìm kiếm, nghe nhạc và xem danh sách bản nhạc mà không cần đăng nhập. Tuy nhiên chỉ những người dùng được phân quyền mới có thể thêm mới bản nhạc, và chỉ biên tập viên hoặc quản trị viên mới được quyền chỉnh sửa hoặc xóa dữ liệu.',
        guidingQuestion: 'Việc lập danh sách và phân quyền nhóm người dùng có ý nghĩa gì? Phân biệt quyền hạn của các nhóm người dùng trong hệ thống?',
        hints: [
          'Việc lập danh sách và xác định quyền hạn các nhóm người dùng đối với hệ CSDL là công việc đầu tiên để xây dựng chính sách bảo mật.',
          'Phân chia 4 nhóm người dùng: Nhóm 1 (chỉ tìm kiếm, xem dữ liệu công khai); Nhóm 2 (thêm mới dữ liệu, không được xóa sửa); Nhóm 3 (sửa, xóa dữ liệu nhưng không sửa cấu trúc bảng); Nhóm 4 (toàn quyền quản trị hệ thống).',
          'Nếu tất cả người dùng đều có quyền xóa sửa thì CSDL sẽ nhanh chóng bị xóa sạch hoặc dữ liệu không còn đáng tin cậy.',
          'Tài khoản moderator có quyền cập nhật dữ liệu; Tài khoản admin có toàn quyền với CSDL được phân công nhưng không can thiệp sang CSDL khác.'
        ],
        discoverySummary: 'Bảo mật CSDL bắt đầu từ việc phân quyền truy cập chặt chẽ theo nhóm người dùng, đảm bảo mỗi người chỉ được thao tác đúng phạm vi quyền hạn được cấp.',
      },
      {
        id: 2,
        title: 'Chính sách bảo mật CSDL toàn diện',
        context: 'Bảo mật CSDL không chỉ đơn thuần là cài đặt mật khẩu cho tài khoản, mà phải là một hệ thống chính sách tổng thể bao gồm cả con người, quy trình và giải pháp công nghệ.',
        guidingQuestion: 'Một chính sách bảo mật CSDL toàn diện bao gồm những nội dung cốt lõi nào?',
        hints: [
          '1) Quy định liên quan đến ý thức và trách nhiệm của người dùng đối với tài khoản của mình và dữ liệu trong CSDL.',
          '2) Quy định về tổ chức đảm bảo an ninh mạng cùng với hệ thống phần cứng và phần mềm cụ thể (tường lửa, máy chủ proxy HTTPS, tránh dùng cổng mặc định, triển khai bảo mật vật lý phòng máy chủ).',
          '3) Danh sách các nhóm người dùng và danh sách tài khoản truy xuất CSDL với quyền hạn tương ứng.',
          '4) Biện pháp giám sát trạng thái hoạt động của hệ thống và người dùng (làm biên bản ghi nhận nhật ký lưu vết hoạt động - log, xây dựng kế hoạch ứng phó sự cố).'
        ],
        discoverySummary: 'Chính sách bảo mật toàn diện bao gồm: nâng cao ý thức trách nhiệm con người, hạ tầng an ninh mạng phần cứng/phần mềm, kiểm soát phân quyền tài khoản và hệ thống giám sát nhật ký.',
      },
      {
        id: 3,
        title: 'Đảm bảo an toàn dữ liệu và Cơ chế Sao lưu - Phục hồi',
        context: 'Bảo đảm an toàn dữ liệu là việc đảm bảo để dữ liệu trong CSDL không bị sai lệch, mất mát khi hệ thống phần cứng, phần mềm gặp sự cố rủi ro.',
        guidingQuestion: 'Nêu các sự cố rủi ro có thể xảy ra đối với hệ thống CSDL và các giải pháp phòng tránh, khắc phục?',
        hints: [
          'Sự cố về nguồn điện: Hệ thống cấp điện không đủ công suất (xây dựng nguồn điện đủ tải); Quá tải (thường xuyên kiểm tra định kỳ); Mất điện đột ngột (dùng bộ lưu điện UPS và máy phát điện tự động cấp điện tức thời).',
          'Hư hỏng thiết bị lưu trữ: Ổ cứng hỏng vì quá tuổi thọ (quản lý thời gian sử dụng, thay thế trước khi hư hỏng); Thiết bị lưu trữ hư hỏng đột ngột do thiên tai, chập cháy.',
          'Giải pháp căn cơ nhất: Tất cả các hệ QTCSDL đều hỗ trợ chức năng sao lưu dự phòng định kì (backup) và phục hồi dữ liệu (recovery) từ bản sao lưu gần nhất khi có sự cố xảy ra.'
        ],
        discoverySummary: 'An toàn dữ liệu đòi hỏi phòng tránh sự cố nguồn điện và phần cứng, kết hợp quy trình bắt buộc sao lưu dự phòng định kỳ để khôi phục dữ liệu nguyên vẹn sau thảm họa.',
      },
    ],
    knowledgeBox: [
      'Công tác bảo mật CSDL cần được thực hiện với một chính sách bảo mật toàn diện bao gồm: Quy định về ý thức trách nhiệm của người dùng; Quy định an ninh mạng phần cứng/phần mềm; Danh sách nhóm người dùng và phân quyền tài khoản; Biện pháp giám sát nhật ký (log) và kế hoạch xử lí sự cố;',
      'Bảo đảm an toàn dữ liệu là việc đảm bảo để dữ liệu trong CSDL không bị sai lệch, mất mát khi hệ thống phần cứng, phần mềm gặp sự cố rủi ro;',
      'Để đảm bảo an toàn dữ liệu cần xây dựng chính sách an toàn dữ liệu cùng kế hoạch xử lí các sự cố có thể xảy ra và giải pháp hạn chế, khắc phục;',
      'Tất cả các hệ QTCSDL đều hỗ trợ chức năng sao lưu định kì (backup) và phục hồi dữ liệu (recovery) từ bản sao lưu gần nhất.'
    ],
    practicalGuide: {
      title: 'Thiết lập mật khẩu an toàn và thực hành sao lưu (backup) cơ sở dữ liệu',
      steps: [
        'Bước 1: Đặt mật khẩu tài khoản người dùng theo tiêu chuẩn an toàn (tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt).',
        'Bước 2: Mở công cụ quản trị CSDL, chọn CSDL cần bảo vệ và mở tính năng Xuất dữ liệu / Sao lưu (Export / Dump / Backup).',
        'Bước 3: Chọn vị trí lưu tệp sao lưu trên thiết bị lưu trữ ngoài hoặc dịch vụ lưu trữ đám mây an toàn.',
        'Bước 4: Thiết lập lịch tự động sao lưu định kỳ hàng ngày vào khung giờ thấp điểm (đêm muộn).'
      ],
    },
    exerciseReview: [
      {
        question: 'Bài 1 (SGK tr.77): Tại sao cần phải có những quy định về ý thức và trách nhiệm của người dùng đối với tài khoản của mình và dữ liệu trong CSDL?',
        answer: 'Nếu người dùng không có ý thức bảo vệ tài khoản của mình (như đặt mật khẩu quá đơn giản, ghi mật khẩu nơi công cộng, chia sẻ tài khoản cho người khác dùng chung, không đăng xuất sau khi sử dụng) thì các biện pháp bảo mật kỹ thuật dù hiện đại đến đâu cũng trở nên vô tác dụng. Những quy định về ý thức trách nhiệm là yêu cầu bắt buộc người dùng phải chấp hành nghiêm túc để tự bảo vệ tài khoản và dữ liệu chung của cả hệ thống.'
      },
      {
        question: 'Bài 2 (SGK tr.77): Tại sao cần có những quy định về ý thức trách nhiệm của những người vận hành hệ thống?',
        answer: 'Những người vận hành hệ thống là những người được cấp quyền hạn rất cao (quyền quản trị admin, truy cập trực tiếp vào máy chủ CSDL và tệp sao lưu). Cần phải có những quy định cụ thể, chặt chẽ về quy trình nghiệp vụ và trách nhiệm pháp lý của họ để kiểm soát quyền lực, ngăn ngừa sự cố bất cẩn và đảm bảo các chính sách an ninh, an toàn dữ liệu được thực thi một cách trung thực, đúng đắn.'
      },
    ],
    application: {
      question: 'Vận dụng (SGK tr.77): Ở một trung tâm dạy tiếng Anh có 4 giáo viên dạy 4 kĩ năng: luyện nghe, luyện nói, luyện đọc, luyện viết. CSDL quản lí điểm học tập có các bảng diemnghe, diemnoi, diemdoc, diemviet. Học viên chỉ xem bảng điểm; giáo viên được thêm, sửa, xóa điểm môn mình dạy; chỉ một quản trị viên có toàn quyền. Hãy xây dựng mô hình phân nhóm người dùng?',
      guidance: 'Xây dựng mô hình 3 nhóm tài khoản: 1) Nhóm Học viên: Chỉ được cấp quyền SELECT trên các bảng điểm để tra cứu kết quả của mình, không được thay đổi dữ liệu; 2) Nhóm Giáo viên (chia theo 4 bộ môn): Giáo viên dạy môn nào chỉ được cấp quyền SELECT, INSERT, UPDATE, DELETE trên bảng điểm của môn đó (ví dụ giáo viên dạy nghe chỉ thao tác trên bảng diemnghe), không được sửa điểm môn khác; 3) Nhóm Quản trị viên (Admin): Một người dùng duy nhất được cấp toàn quyền (ALL PRIVILEGES) trên toàn bộ CSDL trung tâm để quản lý tài khoản, phân quyền và sao lưu dữ liệu.'
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 15',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-15-bao-mat-va-toan-he-co-so-du-lieu',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 15 Tin học 11',
    },
  },

  // =========================================================================
  // BÀI 16: CÔNG VIỆC QUẢN TRỊ CƠ SỞ DỮ LIỆU
  // =========================================================================
  {
    id: 16,
    topicId: 5,
    lessonNumber: 16,
    title: 'Công việc quản trị cơ sở dữ liệu',
    pageRange: 'Trang 78 - 81',
    objectives: [
      'Trình bày được khái niệm nghề quản trị CSDL (DBA) và 4 nhóm nhiệm vụ chính của nhà quản trị CSDL;',
      'Phân biệt rõ trách nhiệm giữa 3 nhóm đối tượng: người sử dụng phần mềm, người làm phần mềm và người quản trị CSDL;',
      'Nêu được các phẩm chất, năng lực cần có và các con đường đào tạo, chứng chỉ nghề nghiệp về CSDL;',
      'Giải thích được lý do vì sao nghề quản trị CSDL ngày càng được trọng dụng và có cơ hội việc làm rộng mở trong thời đại chuyển đổi số.',
    ],
    starter: {
      situation: 'Làm thế nào để có thể vận hành, duy trì cho các CSDL của ngân hàng, bệnh viện, trường học hoạt động thông suốt 24/7, luôn sẵn sàng đáp ứng nhu cầu khai thác dữ liệu của hàng triệu người dùng?',
      question: 'Có cần những cán bộ chuyên trách quản lí CSDL không? Công việc của họ gồm những nhiệm vụ cụ thể nào và đòi hỏi những phẩm chất gì?',
    },
    discoveryActivities: [
      {
        id: 1,
        title: 'Nhà quản trị cơ sở dữ liệu và 4 nhiệm vụ cốt lõi',
        context: 'Quản trị là hoạt động hỗ trợ song song với một hoạt động cơ bản để thực hiện tốt nhất hoạt động cơ bản đó. Nếu hoạt động cơ bản là khai thác các CSDL phục vụ ứng dụng tin học, thì hoạt động quản trị CSDL là tất cả những gì cần làm để khai thác tốt nhất CSDL.',
        guidingQuestion: 'Quản trị CSDL là gì? Kể tên 4 nhiệm vụ chính của nhà quản trị CSDL và phân biệt trách nhiệm với người làm phần mềm, người sử dụng?',
        hints: [
          'Khái niệm: Quản trị CSDL là hoạt động nhằm đảm bảo cho việc sử dụng CSDL thông suốt và hiệu quả.',
          '4 nhiệm vụ chính: 1) Cài đặt và nâng cao các hệ QTCSDL; 2) Tạo lập, điều chỉnh CSDL; 3) Đảm bảo tài nguyên cho các hoạt động CSDL; 4) Đảm bảo an toàn và bảo mật cho dữ liệu.',
          'Phân biệt trách nhiệm: Người sử dụng phần mềm chịu trách nhiệm Cập nhật dữ liệu; Người làm phần mềm chịu trách nhiệm Thiết kế dữ liệu; Người quản trị CSDL chịu trách nhiệm Sao lưu, duy trì và bảo mật dữ liệu.'
        ],
        discoverySummary: 'Nhà quản trị CSDL (DBA) giữ vai trò then chốt bảo đảm CSDL vận hành ổn định, an toàn và tối ưu tài nguyên phần cứng, mạng.',
      },
      {
        id: 2,
        title: 'Phẩm chất và năng lực của nhà quản trị CSDL',
        context: 'Để trở thành một nhà quản trị CSDL giỏi, người làm nghề cần hội tụ đầy đủ cả năng lực chuyên môn và phẩm chất nghề nghiệp đặc thù.',
        guidingQuestion: 'Nhà quản trị CSDL cần có những kiến thức, kĩ năng và phẩm chất gì? Có thể học tập và lấy chứng chỉ nghề nghiệp ở đâu?',
        hints: [
          'Về kiến thức: Có kiến thức bài bản về mô hình CSDL, biết thiết kế CSDL và sử dụng thành thạo ít nhất một hệ QTCSDL cụ thể (Oracle, SQL Server, MySQL, PostgreSQL).',
          'Về kĩ năng & phẩm chất: Tính cách cẩn thận, tỉ mỉ, kiên nhẫn, năng lực phân tích dữ liệu, trung thực và khả năng tự học suốt đời.',
          'Con đường học tập: 1) Học bài bản tại các trường đại học chuyên ngành CNTT (ĐH Bách Khoa Hà Nội, ĐH Bách Khoa TP.HCM, Học viện Bưu chính Viễn thông, ĐH Công nghệ - ĐHQGHN...); 2) Tham gia các khóa đào tạo nghề nghiệp và thi chứng chỉ quốc tế (Microsoft, Oracle, IBM); 3) Rèn luyện trong công việc thực tế.'
        ],
        discoverySummary: 'Nhà quản trị CSDL cần năng lực kỹ thuật vững vàng, tính cẩn thận tỉ mỉ và tinh thần học hỏi liên tục qua các chương trình đại học và chứng chỉ quốc tế.',
      },
      {
        id: 3,
        title: 'Cơ hội việc làm của nghề quản trị CSDL',
        context: 'Trong bối cảnh chuyển đổi số đang diễn ra mạnh mẽ, dữ liệu được ví như "mỏ dầu mới" của nền kinh tế số. Các tổ chức, doanh nghiệp đều đẩy mạnh tin học hóa các quy trình quản lý.',
        guidingQuestion: 'Tại sao nghề quản trị CSDL ngày càng được trọng dụng và có nhu cầu nhân lực lớn?',
        hints: [
          'Các hệ thống thông tin phục vụ số lượng người dùng khổng lồ (ngân hàng điện tử, sàn thương mại điện tử, dịch vụ công trực tuyến) đòi hỏi tính tin cậy và tính sẵn sàng hoạt động 24/7 cực cao.',
          'Quy mô tin học hóa ngày càng lớn, nhu cầu nhân lực quản trị CSDL tăng theo cấp số nhân cùng với sự phát triển của các ứng dụng dữ liệu lớn (Big Data).',
          'Sinh viên tốt nghiệp có cơ hội việc làm rộng mở tại các ngân hàng, tập đoàn viễn thông, công ty phần mềm, bệnh viện và cơ quan nhà nước.'
        ],
        discoverySummary: 'Nghề quản trị CSDL là nghề nghiệp hấp dẫn, thu nhập cao và cơ hội phát triển bền vững nhờ làn sóng chuyển đổi số toàn cầu.',
      },
    ],
    knowledgeBox: [
      'Quản trị CSDL là hoạt động nhằm đảm bảo cho việc sử dụng CSDL thông suốt và hiệu quả cao nhất;',
      'Bốn nhiệm vụ chính của nhà quản trị CSDL: 1) Cài đặt và nâng cao các hệ QTCSDL; 2) Tạo lập, điều chỉnh CSDL; 3) Đảm bảo tài nguyên cho các hoạt động CSDL; 4) Đảm bảo an toàn và bảo mật cho dữ liệu;',
      'Phân biệt trách nhiệm: Người sử dụng chịu trách nhiệm Cập nhật dữ liệu; Người làm phần mềm chịu trách nhiệm Thiết kế dữ liệu; Người quản trị CSDL chịu trách nhiệm Sao lưu và vận hành hệ thống;',
      'Năng lực chỉ khả năng thực hiện công việc qua hiểu biết và kĩ năng thành thạo; Phẩm chất cần có gồm: tính cẩn thận, tỉ mỉ, kiên trì, khả năng phân tích, ham hiểu biết và học tập suốt đời;',
      'Nhu cầu nhân lực quản trị CSDL tăng theo nhu cầu phát triển các ứng dụng tin học sử dụng CSDL trong công cuộc chuyển đổi số.'
    ],
    practicalGuide: {
      title: 'Tìm kiếm và phân tích yêu cầu tuyển dụng nhà quản trị CSDL (DBA)',
      steps: [
        'Bước 1: Truy cập Internet, sử dụng công cụ tìm kiếm với cụm từ khóa "tuyển dụng quản trị cơ sở dữ liệu" hoặc "Database Administrator job".',
        'Bước 2: Chọn một tin tuyển dụng của ngân hàng hoặc công ty công nghệ lớn, đọc kỹ phần mô tả công việc (Job Description).',
        'Bước 3: Ghi chép lại các yêu cầu về bằng cấp, chứng chỉ nghề nghiệp (Oracle OCP, Microsoft Azure Database, AWS Certified).',
        'Bước 4: Đối chiếu với năng lực hiện tại và lập kế hoạch học tập phát triển kỹ năng bản thân.'
      ],
    },
    exerciseReview: [
      {
        question: 'Bài 1 (SGK tr.80): Hãy tìm danh sách ít nhất 5 trường đại học có đào tạo quản trị CSDL hay tin học quản lí ở nước ta?',
        answer: 'Danh sách các trường đại học uy tín đào tạo ngành Công nghệ thông tin, Hệ thống thông tin và Quản trị CSDL: 1) Đại học Bách khoa Hà Nội; 2) Đại học Bách khoa TP. Hồ Chí Minh; 3) Trường Đại học Công nghệ (Đại học Quốc gia Hà Nội); 4) Học viện Công nghệ Bưu chính Viễn thông; 5) Học viện Ngân hàng; 6) Học viện Tài chính; 7) Trường Đại học Công nghệ Thông tin (Đại học Quốc gia TP.HCM).'
      },
      {
        question: 'Bài 2 (SGK tr.80): Hãy tìm một số địa chỉ cung cấp các dịch vụ đào tạo để cấp chứng chỉ về CSDL của các công ty công nghệ hàng đầu như IBM, Oracle, Microsoft?',
        answer: 'Các chứng chỉ CSDL quốc tế uy tín: 1) Hãng Microsoft: Chứng chỉ Microsoft Certified: Azure Database Administrator Associate; 2) Hãng Oracle: Chứng chỉ Oracle Database Administration Certified Professional (OCP); 3) Hãng IBM: Chứng chỉ IBM Data Science Professional Certificate, IBM Certified Database Administrator (DB2). Các khóa học có thể tìm kiếm và học tập trực tuyến trên nền tảng Coursera, edX hoặc các trung tâm khảo thí ủy quyền tại Việt Nam.'
      },
    ],
    application: {
      question: 'Vận dụng 1 & 2 (SGK tr.80): Hãy tìm ba địa chỉ tuyển dụng nhà quản trị CSDL trong ngành ngân hàng và ba địa chỉ tuyển dụng trong các công ty tin học?',
      guidance: '1) Ba địa chỉ tuyển dụng trong ngành ngân hàng: Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank), Ngân hàng TMCP Kỹ thương Việt Nam (Techcombank), Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV). 2) Ba địa chỉ tuyển dụng trong các công ty tin học: Tập đoàn Công nghệ FPT (FPT Software / FPT IS), Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel Telecom / Viettel Solutions), Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT IT).'
    },
    defaultApp: {
      name: 'kenhhoctap.edu.vn - Trắc nghiệm Bài 16',
      type: 'external',
      url: 'https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-16-cong-viec-quan-tri-co-so-du-lieu',
      badge: 'Trắc nghiệm online',
      description: 'Luyện tập trắc nghiệm trực tuyến chuẩn nội dung Bài 16 Tin học 11',
    },
  },
];
