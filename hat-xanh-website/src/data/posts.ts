import { BlogPost } from "@/types/blog";

export const blogCategories = [
    { id: 'kien-thuc', name: 'Kiến thức nông sản', slug: 'kien-thuc-nong-san' },
    { id: 'suc-khoe', name: 'Sức khỏe & Đời sống', slug: 'suc-khoe-doi-song' },
    { id: 'am-thuc', name: 'Ẩm thực Tây Nguyên', slug: 'am-thuc-tay-nguyen' },
];

export const blogPosts: BlogPost[] = [
    {
        id: "post-1",
        title: "5 Lợi ích tuyệt vời của hạt Mắc Ca đối với sức khỏe tim mạch",
        slug: "loi-ich-hat-mac-ca-tim-mach",
        excerpt: "Hạt Mắc Ca không chỉ ngon miệng mà còn chứa nhiều dưỡng chất quý giá giúp bảo vệ trái tim của bạn. Cùng tìm hiểu chi tiết trong bài viết này.",
        content: `
      <p>Hạt mắc ca (Macadamia) được mệnh danh là "nữ hoàng của các loại hạt khô" không chỉ bởi hương vị thơm ngon béo ngậy mà còn vì giá trị dinh dưỡng vượt trội.</p>
      <h2>1. Giàu chất béo không bão hòa đơn</h2>
      <p>Hạt mắc ca chứa lượng lớn chất béo không bão hòa đơn, giúp giảm lượng cholesterol xấu (LDL) và tăng cholesterol tốt (HDL), từ đó giảm nguy cơ mắc các bệnh tim mạch.</p>
      <h2>2. Chứa nhiều chất chống oxy hóa</h2>
      <p>Hợp chất flavonoid trong hạt mắc ca có khả năng chống oxy hóa mạnh mẽ, ngăn ngừa tổn thương tế bào và giảm viêm.</p>
      <h2>3. Hỗ trợ kiểm soát cân nặng</h2>
      <p>Mặc dù giàu chất béo, nhưng hạt mắc ca lại chứa nhiều chất xơ và protein giúp bạn no lâu hơn, hạn chế cảm giác thèm ăn vặt.</p>
      <p>Hãy bổ sung hạt mắc ca vào thực đơn hàng ngày để có một trái tim khỏe mạnh!</p>
    `,
        coverImage: "/images/blog/mac-ca-tim-mach.jpg",
        date: "2024-05-15",
        author: {
            name: "Nguyễn Văn A",
            avatar: "/images/avatars/user-1.jpg",
        },
        category: blogCategories[1], // Sức khỏe
        readTime: 5,
        featured: true,
    },
    {
        id: "post-2",
        title: "Cách làm Khoai Lang Sấy Dẻo tại nhà ngon như ngoài hàng",
        slug: "cach-lam-khoai-lang-say-deo",
        excerpt: "Bạn muốn tự tay làm món khoai lang sấy dẻo thơm ngon, an toàn vệ sinh? Xem ngay công thức đơn giản này nhé!",
        content: `
      <p>Khoai lang sấy dẻo là món ăn vặt yêu thích của nhiều người. Thay vì mua ngoài hàng, bạn hoàn toàn có thể tự làm tại nhà với công thức đơn giản sau.</p>
      <h3>Nguyên liệu cần chuẩn bị:</h3>
      <ul>
        <li>Khoai lang mật: 1kg</li>
        <li>Muối: 1 muỗng cà phê</li>
      </ul>
      <h3>Cách thực hiện:</h3>
      <p><strong>Bước 1:</strong> Rửa sạch khoai, luộc chín mềm.</p>
      <p><strong>Bước 2:</strong> Gọt vỏ, cắt khoai thành từng lát dày khoảng 0.5cm - 1cm.</p>
      <p><strong>Bước 3:</strong> Xếp khoai lên khay, phơi nắng khoảng 2-3 tiếng cho se mặt hoặc sấy trong lò nướng ở 100 độ C.</p>
      <p>Chúc các bạn thành công!</p>
    `,
        coverImage: "/images/blog/khoai-lang-say.jpg",
        date: "2024-06-02",
        author: {
            name: "Trần Thị B",
            avatar: "/images/avatars/user-2.jpg",
        },
        category: blogCategories[2], // Ẩm thực
        readTime: 4,
        featured: false,
    },
    {
        id: "post-3",
        title: "Mùa thu hoạch cà phê Tây Nguyên bắt đầu khi nào?",
        slug: "mua-thu-hoach-ca-phe-tay-nguyen",
        excerpt: "Khám phá vẻ đẹp của đại ngàn Tây Nguyên vào mùa thu hoạch cà phê chín đỏ rực cả một vùng đồi.",
        content: `
      <p>Mỗi độ cuối năm, khi những cơn mưa rào thưa dần và cái lạnh se se bắt đầu tràn về, cũng là lúc Tây Nguyên bước vào mùa hội lớn nhất trong năm: Mùa thu hoạch cà phê.</p>
      <p>Thông thường, mùa thu hoạch cà phê bắt đầu từ tháng 10 và kéo dài đến tháng 1 năm sau. Đây là thời điểm nhộn nhịp nhất của bà con nông dân.</p>
      <p>Du khách đến Tây Nguyên dịp này sẽ được chiêm ngưỡng những đồi cà phê bạt ngàn chín đỏ, trải nghiệm văn hóa cồng chiêng và thưởng thức ly cà phê ban mê chính hiệu.</p>
    `,
        coverImage: "/images/blog/mua-ca-phe.jpg",
        date: "2024-10-20",
        author: {
            name: "Lê Văn C",
            avatar: "/images/avatars/user-3.jpg",
        },
        category: blogCategories[0], // Kiến thức
        readTime: 3,
        featured: true,
    },
];
