import { QuizQuestion, MultipleChoiceQuestion, TrueFalseQuestion, Difficulty } from '../types';
import { ALL_LESSONS, getLessonById } from './lessons';

// Helper to generate 10 rigorous, differentiated questions for any lesson
export const createLessonTenQuestions = (lessonId: number): QuizQuestion[] => {
  const lesson = getLessonById(lessonId);
  if (!lesson) return [];

  const topicId = lesson.topicId;
  const num = lesson.lessonNumber;
  const title = lesson.title;
  const kb = lesson.knowledgeBox;
  const obj = lesson.objectives;

  const q1: MultipleChoiceQuestion = {
    id: `l${lessonId}_q1_nb`,
    lessonId,
    topicId,
    type: 'multiple_choice',
    difficulty: 'nhan_biet',
    question: `Nội dung cốt lõi của Bài ${num} (${title}) tập trung vào vấn đề nào sau đây?`,
    options: [
      obj[0] || `Khái niệm và đặc điểm cơ bản của ${title}`,
      'Phương pháp lập trình game 3D trực tuyến',
      'Kỹ thuật lắp ráp vi mạch bán dẫn vật lý',
      'Lịch sử ngành điện tử thế kỷ 19',
    ],
    correctAnswer: 0,
    explanation: `Căn cứ theo Yêu cầu cần đạt SGK Bài ${num}: ${obj[0] || kb[0]}`,
  };

  const q2: MultipleChoiceQuestion = {
    id: `l${lessonId}_q2_nb`,
    lessonId,
    topicId,
    type: 'multiple_choice',
    difficulty: 'nhan_biet',
    question: `Theo Hộp kiến thức SGK Bài ${num}, nhận định nào sau đây là chuẩn xác nhất?`,
    options: [
      kb[0] || `Kiến thức nền tảng về ${title}`,
      'Dữ liệu luôn được lưu trữ tự do không theo quy tắc cấu trúc nào',
      'Mọi thao tác máy tính đều không cần có phần mềm hỗ trợ',
      'Mã nguồn đóng luôn cho phép người dùng tự do sửa đổi và bán lại',
    ],
    correctAnswer: 0,
    explanation: `Hộp kiến thức SGK Bài ${num}: "${kb[0]}"`,
  };

  const q3: MultipleChoiceQuestion = {
    id: `l${lessonId}_q3_th`,
    lessonId,
    topicId,
    type: 'multiple_choice',
    difficulty: 'thong_hieu',
    question: `Tại sao trong nội dung Bài ${num} (${title}), việc hiểu và tuân thủ các nguyên tắc kỹ thuật lại có ý nghĩa quyết định?`,
    options: [
      'Vì giúp tránh sai sót dữ liệu, nâng cao hiệu suất làm việc và đảm bảo tính an toàn hệ thống',
      'Vì hệ điều hành sẽ tự động khóa máy nếu người dùng không làm theo',
      'Vì chỉ có một phần mềm duy nhất trên thế giới thực hiện được',
      'Vì để máy tính không cần tiêu thụ điện năng khi vận hành',
    ],
    correctAnswer: 0,
    explanation: `Phân tích Bài ${num}: Hiểu rõ bản chất kỹ thuật giúp khai thác công cụ hiệu quả, phòng tránh dị thường và bảo mật hệ thống.`,
  };

  const q4: MultipleChoiceQuestion = {
    id: `l${lessonId}_q4_vd`,
    lessonId,
    topicId,
    type: 'multiple_choice',
    difficulty: 'van_dung',
    question: `Trong tình huống thực hành của Bài ${num}, thao tác nào sau đây là hợp lý và đúng quy trình kỹ thuật nhất?`,
    options: [
      lesson.practicalGuide?.steps[0] || `Thực hiện tuần tự theo quy trình hướng dẫn trong SGK Bài ${num}`,
      'Bỏ qua các bước kiểm tra và xóa toàn bộ dữ liệu gốc ngay từ đầu',
      'Không cần lưu tệp dự án mà xuất thẳng sang định dạng nén',
      'Tắt nguồn điện máy tính ngay khi đang cập nhật dữ liệu',
    ],
    correctAnswer: 0,
    explanation: lesson.practicalGuide?.steps[0] 
      ? `Hướng dẫn thực hành SGK Bài ${num}: ${lesson.practicalGuide.steps[0]}`
      : `Quy trình kỹ thuật yêu cầu thực hiện chuẩn xác từng bước để bảo toàn dữ liệu.`,
  };

  const q5: MultipleChoiceQuestion = {
    id: `l${lessonId}_q5_vdc`,
    lessonId,
    topicId,
    type: 'multiple_choice',
    difficulty: 'van_dung_cao',
    question: `Khi ứng dụng kiến thức Bài ${num} (${title}) vào giải quyết bài toán thực tế trong trường học hoặc doanh nghiệp, yếu tố nào cần được ưu tiên hàng đầu?`,
    options: [
      'Tính toàn vẹn, bảo mật thông tin và khả năng mở rộng lâu dài của giải pháp',
      'Chỉ chọn phương án rẻ nhất mà không quan tâm đến an toàn dữ liệu',
      'Sử dụng các phần mềm bẻ khóa không rõ nguồn gốc để tiết kiệm chi phí',
      'Lưu trữ toàn bộ mật khẩu quản trị công khai trên mạng xã hội',
    ],
    correctAnswer: 0,
    explanation: `Vận dụng cao: Giải pháp công nghệ thực tế đòi hỏi tính khả thi, bảo mật, tính nhất quán và bảo vệ dữ liệu theo pháp luật.`,
  };

  const q6: TrueFalseQuestion = {
    id: `l${lessonId}_q6_tf_nb`,
    lessonId,
    topicId,
    type: 'true_false',
    difficulty: 'nhan_biet',
    prompt: `Xét tính Đúng / Sai của các nhận định cơ bản về nội dung Bài ${num} (${title}):`,
    items: [
      {
        id: 'a',
        statement: `Yêu cầu cần đạt của bài học là: "${obj[0] || title}".`,
        isTrue: true,
        explanation: 'Đúng theo mục tiêu cần đạt đầu bài học SGK.',
      },
      {
        id: 'b',
        statement: `Hộp kiến thức chốt ghi nhận: "${kb[kb.length - 1] || kb[0]}".`,
        isTrue: true,
        explanation: 'Đúng theo Hộp kiến thức đóng khung chuẩn SGK.',
      },
      {
        id: 'c',
        statement: 'Kiến thức trong bài hoàn toàn là lý thuyết trừu tượng, không có bất kỳ ứng dụng thực tế nào.',
        isTrue: false,
        explanation: 'Sai, toàn bộ chương trình Tin học 11 bám sát bài toán thực tế đời sống và chuyển đổi số.',
      },
      {
        id: 'd',
        statement: 'Học sinh có thể tự học, thực hành và kiểm tra kết quả ngay trên máy tính.',
        isTrue: true,
        explanation: 'Đúng theo định hướng phát triển phẩm chất, năng lực của SGK GDPT 2018.',
      },
    ],
  };

  const q7: TrueFalseQuestion = {
    id: `l${lessonId}_q7_tf_th`,
    lessonId,
    topicId,
    type: 'true_false',
    difficulty: 'thong_hieu',
    prompt: `Về các hoạt động khám phá và phát hiện tri thức trong Bài ${num}:`,
    items: [
      {
        id: 'a',
        statement: lesson.discoveryActivities[0] 
          ? `Hoạt động "${lesson.discoveryActivities[0].title}" giúp học sinh phát hiện ra bản chất kỹ thuật của vấn đề.`
          : `Các hoạt động khám phá giúp học sinh tự hình thành kiến thức mới.`,
        isTrue: true,
        explanation: 'Đúng theo cấu trúc sư phạm hoạt động học.',
      },
      {
        id: 'b',
        statement: 'Các quy tắc kỹ thuật trong bài được đặt ra một cách ngẫu nhiên và không có cơ sở khoa học.',
        isTrue: false,
        explanation: 'Sai, các quy chuẩn CNTT được chuẩn hóa quốc tế (ISO, W3C, ANSI...).',
      },
      {
        id: 'c',
        statement: 'Phần mềm và công cụ ứng dụng trong bài giúp tối ưu hóa thời gian và công sức con người.',
        isTrue: true,
        explanation: 'Đúng, đây là mục tiêu cốt lõi của tin học ứng dụng.',
      },
      {
        id: 'd',
        statement: 'Khi gặp lỗi kỹ thuật trong thực tế, việc đọc kỹ thông báo lỗi là bước không cần thiết.',
        isTrue: false,
        explanation: 'Sai, đọc thông báo lỗi giúp định vị chính xác nguyên nhân và cách khắc phục.',
      },
    ],
  };

  const q8: TrueFalseQuestion = {
    id: `l${lessonId}_q8_tf_vd`,
    lessonId,
    topicId,
    type: 'true_false',
    difficulty: 'van_dung',
    prompt: `Khi vận dụng kiến thức Bài ${num} vào tình huống cụ thể: "${lesson.application.question}":`,
    items: [
      {
        id: 'a',
        statement: 'Cần phân tích rõ các yếu tố đầu vào, dữ liệu hiện có và yêu cầu đầu ra trước khi thực hiện.',
        isTrue: true,
        explanation: 'Đúng theo tư duy phân tích hệ thống tin học.',
      },
      {
        id: 'b',
        statement: `Hướng giải quyết phù hợp là: ${lesson.application.guidance}`,
        isTrue: true,
        explanation: 'Đúng theo định hướng vận dụng SGK.',
      },
      {
        id: 'c',
        statement: 'Chỉ cần một người làm và không cần phối hợp hay phân quyền cho các thành viên trong nhóm.',
        isTrue: false,
        explanation: 'Sai, làm việc với hệ thống thông tin đòi hỏi sự cộng tác và phân chia vai trò rõ ràng.',
      },
      {
        id: 'd',
        statement: 'Sau khi hoàn thành, cần kiểm thử lại kết quả trên các dữ liệu mẫu khác nhau.',
        isTrue: true,
        explanation: 'Đúng, kiểm thử là bước bắt buộc để khẳng định tính chính xác của giải pháp.',
      },
    ],
  };

  const q9: MultipleChoiceQuestion = {
    id: `l${lessonId}_q9_th`,
    lessonId,
    topicId,
    type: 'multiple_choice',
    difficulty: 'thong_hieu',
    question: `Trong quá trình tự học Bài ${num}, để ghi nhớ sâu sắc các thao tác và khái niệm, phương pháp nào sau đây là tối ưu nhất?`,
    options: [
      'Vừa đọc lý thuyết vừa thực hành thao tác trên máy tính và trả lời các câu hỏi phát hiện kiến thức',
      'Học thuộc lòng từng câu từng chữ mà không cần hiểu ý nghĩa hay mở phần mềm',
      'Chỉ xem tranh ảnh minh họa mà bỏ qua các bước thực hành',
      'Nhờ người khác làm hộ tất cả các bài tập',
    ],
    correctAnswer: 0,
    explanation: 'Học tập tin học hiệu quả nhất thông qua thực hành "learning by doing", gắn liền với tự phát hiện kiến thức.',
  };

  const q10: TrueFalseQuestion = {
    id: `l${lessonId}_q10_tf_vdc`,
    lessonId,
    topicId,
    type: 'true_false',
    difficulty: 'van_dung_cao',
    prompt: `Xét các vấn đề liên môn và thực tiễn liên quan đến nội dung Bài ${num} (${title}):`,
    items: [
      {
        id: 'a',
        statement: 'Kiến thức bài học có mối liên hệ mật thiết với các ngành nghề công nghệ cao như kỹ sư dữ liệu, đồ họa đa phương tiện và quản trị mạng.',
        isTrue: true,
        explanation: 'Đúng theo định hướng giáo dục hướng nghiệp của SGK Tin học 11.',
      },
      {
        id: 'b',
        statement: 'Người sử dụng công nghệ số không cần có ý thức đạo đức hay tuân thủ pháp luật an ninh mạng.',
        isTrue: false,
        explanation: 'Sai, chuẩn mực đạo đức, pháp luật và văn hóa ứng xử là yếu tố cốt lõi trong kỷ nguyên số.',
      },
      {
        id: 'c',
        statement: 'Kỹ năng tự học và thích ứng với các phiên bản phần mềm mới là năng lực quan trọng suốt đời.',
        isTrue: true,
        explanation: 'Đúng, công nghệ biến đổi nhanh chóng đòi hỏi khả năng tự nghiên cứu và cập nhật liên tục.',
      },
      {
        id: 'd',
        statement: 'Các dữ liệu quan trọng luôn cần được định kỳ sao lưu để dự phòng rủi ro phần cứng hoặc phần mềm.',
        isTrue: true,
        explanation: 'Đúng theo nguyên tắc an toàn dữ liệu cơ bản.',
      },
    ],
  };

  return [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
};
