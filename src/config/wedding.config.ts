import { title } from 'process';
import { WeddingConfig } from '../models/config.model';

export const weddingConfig: WeddingConfig = {
    galleryTitle: {
      greeting: 'WE ARE GETTING MARRIED',
      countdownTitle:'The Big Day',
      countdownDes:'Cùng đếm ngược tới thời điểm thiêng liêng',
      title: "Kho ảnh",
      wedding: "Váy cưới",
      daily: "Thường ngày",
      weddingDetail:"Thông tin tổ chức"
    },
    slideImages: [
    'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1457439067824-c1787c934333?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542042161-d10f8a84d872?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723a996f6ea?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?q=80&w=1920&auto=format&fit=crop'
  ],
  couple: {
    groom: {
      name: 'Đình Mạnh',
      description: 'Người đàn ông hạnh phúc nhất trên đời.',
      wittyDescription: 'Yêu code hơn cả giấc ngủ, nhưng yêu Hường hơn cả code. Chuyên gia tìm bug và cũng chuyên tìm quán ăn vỉa hè ngon nhất.',
      image: 'https://i.pinimg.com/564x/01/f9/be/01f9be244a2c416196a603c623a3d548.jpg',
      parents: 'Con ông Nguyễn Văn A & bà Trần Thị B',
      homeLocation: {
        name: "Nhà trai",
        des: "Điền Lư - Thanh Hóa",
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.631024925016!2d105.8222163148829!3d21.0073849860099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8113262b95%3A0x7d94411135a8289a!2sRoyal%20City!5e0!3m2!1sen!2s!4v1628886981240!5m2!1sen!2s',
      },
    },
    bride: {
      name: 'Nguyễn Hường',
      description: 'Người phụ nữ may mắn nhất trên đời.',
      wittyDescription: 'Bậc thầy về kế hoạch và tổ chức, người đã lên kế hoạch thành công để chiếm trọn trái tim Mạnh. Nguồn năng lượng từ trà sữa và phim tình cảm.',
      image: 'https://i.pinimg.com/564x/e3/37/10/e337107292a833b3a3721ddf1e00344d.jpg',
      parents: 'Con ông Trần Văn C & bà Lê Thị D',
      homeLocation: {
        name: "Nhà gái",
        des: "Nghi Sơn - Thanh Hóa",
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.098416042456!2d105.78311181488313!3d21.02809598600001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab88535031d3%3A0x35624e5485b46e3a!2sKeangnam%20Hanoi%20Landmark%20Tower!5e0!3m2!1sen!2s!4v1628887038753!5m2!1sen!2s',
      },
    },
  },
  loveQuote: {
    text: "Trên đời này, không có trái tim nào dành cho em như trái tim anh. Trên đời này, không có tình yêu nào dành cho anh như tình yêu của em.",
    author: "Maya Angelou"
  },
  mainEvent: {
    name: 'Lễ Cưới & Tiệc Chúc Mừng',
    date: '2025-12-15T10:00:00',
    venue: 'Cung Trống Đồng',
    address: '22 P. Thành Công, Thành Công, Ba Đình, Hà Nội',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.357494458992!2d105.81745421533869!3d21.01859608600466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab725893d56d%3A0x33b8a6a6839b28a2!2zVHLhu5FuZyDEkOG7k25nIFBhbGFjZQ!5e0!3m2!1sen!2s!4v1676451392687!5m2!1sen!2s',
    visit: false
  },
  loveStory: {
    title: 'Chuyện Tình Yêu Của Chúng Mình',
    milestones: [
      {
        date: '01-01-2022',
        image: 'https://picsum.photos/id/1015/800/600',
        content: 'Tất cả bắt đầu vào một ngày thứ Ba mưa tầm tã tại một quán cà phê nhỏ. Không ai trong chúng mình ngờ rằng một cuộc trò chuyện đơn giản sẽ là khởi đầu cho mãi mãi của hai ta.'
      },
      {
        date: '02-10-2025',
        image: 'https://picsum.photos/id/1016/800/600',
        content: 'Từ những buổi hẹn hò cà phê đến việc cùng nhau chu du thế giới, mỗi khoảnh khắc đều là một cuộc phiêu lưu. Chúng mình đã cùng nhau trưởng thành, hỗ trợ ước mơ của nhau, và xây dựng một tình yêu mạnh mẽ hơn bất cứ điều gì chúng mình từng tưởng tượng.'
      },
      {
        date: '04-10-2025',
        image: 'https://picsum.photos/id/1018/800/600',
        content: 'Giờ đây, chúng mình đang tiến bước tiếp theo và bắt đầu chương mới với tư cách là vợ chồng. Chúng mình rất phấn khởi được chia sẻ tình yêu này cùng các bạn, những người bạn và gia đình thân yêu nhất.'
      }
    ]
  },

  receptionDetails: {
    backgroundImg: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1920&auto=format&fit=crop'
  },
  thankYou: {
    title: 'Lời Cảm Ơn',
    message: 'Cảm ơn bạn đã là một phần trong ngày đặc biệt của chúng mình và vì tình yêu cũng như sự hỗ trợ của bạn. Thật ý nghĩa với chúng mình khi có bạn cùng ăn mừng khi chúng mình bắt đầu hành trình mới.'
  },
  gifting: {
    title: "Mừng Cưới",
    intro: "Sự hiện diện của bạn tại đám cưới của chúng mình là món quà lớn nhất. Tuy nhiên, nếu bạn muốn tặng chúng mình một món quà, một khoản đóng góp cho quỹ tuần trăng mật sẽ được đánh giá cao.",
    groom: {
      accountHolder: "NGUYEN DINH MANH",
      accountNumber: "123456789",
      bankName: "Vietcombank",
      qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=NGUYEN%20DINH%20MANH%20123456789%20VCB"
    },
    bride: {
      accountHolder: "NGUYEN THI HUONG",
      accountNumber: "987654321",
      bankName: "Techcombank",
      qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=NGUYEN%20THI%20HUONG%20987654321%20TCB"
    }
  },
  guestbook: {
    title: "Sổ Lưu Bút",
    intro: "Hãy để lại lời nhắn cho chúng mình! Chúng mình rất muốn nghe những kỷ niệm, lời chúc và lời khuyên của bạn cho hành trình mới của hai đứa."
  },
  miniGame: {
    title: "Bạn Hiểu Chúng Mình Đến Đâu?",
    intro: "Làm bài quiz nhỏ này để xem bạn hiểu cô dâu chú rể đến mức nào nhé. Có thể sẽ có một bất ngờ nhỏ cho những người đạt điểm cao nhất tại đám cưới đấy!",
    prizeNotice: "Đừng quên chụp màn hình điểm số của bạn! Một món quà đặc biệt đang chờ những bậc thầy quiz của chúng mình tại tiệc cưới.",
    questions: [
      {
        question: "Buổi hẹn đầu tiên của chúng mình ở đâu?",
        options: ["Rạp chiếu phim", "Quán cà phê", "Công viên", "Nhà hàng sang trọng"],
        correctAnswer: "Quán cà phê"
      },
      {
        question: "Sở thích yêu thích của chú rể là gì?",
        options: ["Chơi game", "Leo núi", "Viết code", "Chơi guitar"],
        correctAnswer: "Viết code"
      },
      {
        question: "Đồ uống yêu thích của cô dâu là gì?",
        options: ["Cà phê", "Sinh tố", "Trà sữa", "Rượu vang"],
        correctAnswer: "Trà sữa"
      }
    ],
    results: [
      { minScore: 0, message: "Đáng khen cho sự cố gắng! Chúng mình rất vui vì bạn là một phần trong cuộc sống của hai đứa, và giờ bạn đã biết thêm về chúng mình rồi!" },
      { minScore: 2, message: "Không tệ chút nào! Bạn chắc chắn biết vài điều về câu chuyện của chúng mình đấy." },
      { minScore: 3, message: "Wow, bạn là chuyên gia thực thụ về chúng mình! Chúng mình rất ấn tượng và cảm động vì bạn hiểu hai đứa đến vậy." }
    ]
  },
  footer: {
    authorName: 'AI Studio Developer',
    authorLink: '#'
  },
  galleryImages: {
    wedding: [
      'https://picsum.photos/id/10/800/600',
      'https://picsum.photos/id/20/800/600',
      'https://picsum.photos/id/30/600/800',
      'https://picsum.photos/id/40/800/600',
      'https://picsum.photos/id/50/600/800',
      'https://picsum.photos/id/60/800/600',
    ],
    daily: [
      'https://picsum.photos/id/70/800/600',
      'https://picsum.photos/id/80/600/800',
      'https://picsum.photos/id/90/800/800',
      'https://picsum.photos/id/100/600/800'
    ]
  },
  templates: {
    'template-1': {
      name: 'Sang Trọng Cổ Điển',
      description: 'Thiết kế vượt thời gian với chút hiện đại tinh tế.',
      heroImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1920&auto=format&fit=crop',
      previewImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&auto=format&fit=crop',
    },
    'template-2': {
      name: 'Tối Giản Hiện Đại',
      description: 'Đường nét tinh gọn và tập trung vào typography đẹp mắt.',
      heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1920&auto=format&fit=crop',
      previewImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop',
    },
    'template-3': {
      name: 'Vườn Lãng Mạn',
      description: 'Chủ đề mơ màng và kỳ ảo với điểm nhấn hoa.',
      heroImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1920&auto=format&fit=crop',
      previewImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=400&auto=format&fit=crop',
    },
    'template-4': {
      name: 'Đêm Sao Trời',
      description: 'Chủ đề kỳ diệu và lãng mạn dưới bầu trời đầy sao.',
      heroImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1920&auto=format&fit=crop',
      previewImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=400&auto=format&fit=crop',
    },
    'template-5': {
      name: 'Art Deco Cổ Điển',
      description: 'Tinh tế và quyến rũ với nét của thập niên 20.',
      heroImage: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1920&auto=format&fit=crop',
      previewImage: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=400&auto=format&fit=crop',
    },
    'template-6': {
      name: 'Biển Nhiệt Đới',
      description: 'Thiết kế tươi mới và thoáng đãng cho cảm giác đám cưới bãi biển.',
      heroImage: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1920&auto=format&fit=crop',
      previewImage: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=400&auto=format&fit=crop',
    },
    'template-7': {
      name: 'Màu Nước Nghệ Thuật',
      description: 'Chủ đề mềm mại, cá nhân và nghệ thuật với nét vẽ.',
      heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop',
      previewImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop',
    },
    'template-8': {
      name: 'Rừng Thần Tiên',
      description: 'Chủ đề kỳ ảo và ma thuật trong khu rừng cổ tích.',
      heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920&auto=format&fit=crop',
      previewImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&auto=format&fit=crop',
    }
  },
  sectionVisibility: {
    countdown: true,
    couple: true,
    story: true,
    gallery: true,
    event: true,
    gifting: true,
    guestbook: true,
    thankYou: true,
    miniGame: true,
  },
  advancedFeatures: {
    fallingEffects: true,
  }
};