# Spring Ville / Persa Place Landing Page

Landing page giới thiệu dự án căn hộ Spring Ville, phân khu Persa Place của Gamuda Land, định vị quanh lợi thế kết nối sân bay quốc tế Long Thành, tuyến metro Thủ Thiêm - Long Thành, Spring Market và khu shophouse.

Tài liệu này giúp người xem source hiểu mục tiêu trang, cấu trúc file, cách chạy, cách chỉnh nội dung và các lưu ý quan trọng trước khi đưa landing page vào sử dụng thực tế.

## Mục tiêu landing page

Trang được thiết kế cho nhóm khách hàng quan tâm căn hộ tại khu vực kết nối sân bay Long Thành, gồm nhà đầu tư, chuyên gia, nhân sự hàng không, người mua ở thật và người mua để khai thác cho thuê.

Các mục tiêu chính:

- Tạo ấn tượng cao cấp, hiện đại và đáng tin cậy cho dự án bất động sản đô thị.
- Làm nổi bật lợi thế vị trí mặt tiền Tôn Đức Thắng và khả năng kết nối sân bay Long Thành.
- Trình bày tiềm năng cho thuê từ cộng đồng chuyên gia, kỹ sư và nhân sự hàng không.
- Thu thập thông tin khách hàng qua form đăng ký nhận bảng giá, tư vấn dòng tiền và booking vị trí đẹp.
- Giữ ngôn ngữ thận trọng, không cam kết lợi nhuận chắc chắn.

## Nội dung chính của trang

Landing page gồm các phần sau:

| Khu vực | Mục đích |
|---|---|
| Hero section | Giới thiệu Persa Place, CTA chính và thông tin nhanh về vị trí, loại căn, giá tham khảo, tiềm năng cho thuê. |
| Điểm nổi bật | Nhấn mạnh sân bay Long Thành, cộng đồng chuyên gia hàng không, mặt tiền Tôn Đức Thắng và tuyến metro Thủ Thiêm - Long Thành. |
| Sản phẩm căn hộ | Trình bày căn 1PN và 2PN, diện tích, giá tham khảo và nhóm khách phù hợp. |
| Tiềm năng đầu tư | Phân tích cho thuê chuyên gia, tăng giá theo hạ tầng và thanh khoản theo vị trí. |
| Chính sách tài chính | Nêu thanh toán giãn tiến độ, hỗ trợ lãi suất vay ngân hàng và lời mời nhận bảng tính dòng tiền. |
| Thư viện ảnh | Hiển thị phối cảnh, sa bàn và hình ảnh dự án từ thư mục `src/assets`. |
| Form đăng ký | Thu họ tên, số điện thoại và nhu cầu tư vấn. Form hiện chưa kết nối backend. |
| FAQ | Trả lời câu hỏi thường gặp về giá, đầu tư cho thuê, vay ngân hàng và booking. |
| Footer | Hiển thị thông tin liên hệ, hotline, Zalo và lưu ý pháp lý. |

## Cấu trúc thư mục

```text
LP-batdongsan/
├── index.html
├── styles.css
├── script.js
├── README.md
└── src/
    └── assets/
        ├── im1.jpg
        ├── im2.jpg
        ├── im3.jpg
        └── im4.jpg
```

Vai trò từng file:

- `index.html`: chứa cấu trúc HTML, nội dung landing page, thẻ SEO cơ bản và liên kết tới CSS/JS.
- `styles.css`: chứa toàn bộ giao diện, màu sắc, responsive layout, hiệu ứng hover, reveal khi cuộn và biến đường dẫn ảnh.
- `script.js`: chứa logic cuộn navbar, hiệu ứng reveal, FAQ accordion và thông báo khi submit form.
- `src/assets/`: chứa hình ảnh dự án đang dùng cho hero và thư viện ảnh.

## Cách chạy

Vì dự án dùng HTML, CSS và JavaScript thuần, không cần cài package hoặc framework.

Cách đơn giản nhất:

1. Mở file `index.html` bằng trình duyệt.
2. Kiểm tra giao diện trên desktop, tablet và mobile.
3. Chỉnh nội dung trong `index.html`, `styles.css` hoặc `script.js` nếu cần.

Nếu muốn chạy qua local server để kiểm tra giống môi trường web hơn, có thể dùng một trong các cách sau:

```bash
python -m http.server 5500
```

Sau đó mở:

```text
http://localhost:5500
```

## Cách thay ảnh

Các ảnh đang được khai báo trong `styles.css` bằng biến CSS:

```css
--hero-image: url("src/assets/im1.jpg");
--aerial-image: url("src/assets/im4.jpg");
--market-image: url("src/assets/im3.jpg");
--interior-image: url("src/assets/im2.jpg");
```

Ý nghĩa ảnh hiện tại:

| Biến | File hiện tại | Vị trí sử dụng |
|---|---|---|
| `--hero-image` | `src/assets/im1.jpg` | Ảnh nền hero, nhấn mạnh kết nối sân bay, metro và tổng thể dự án. |
| `--aerial-image` | `src/assets/im4.jpg` | Ảnh gallery thứ nhất. |
| `--market-image` | `src/assets/im3.jpg` | Ảnh gallery thứ hai. |
| `--interior-image` | `src/assets/im2.jpg` | Ảnh gallery thứ ba. |

Khi có ảnh thật chất lượng cao, hãy thay file trong `src/assets/` hoặc đổi đường dẫn trong các biến trên. Nên ưu tiên ảnh `.jpg`, `.webp` hoặc `.avif` đã nén để trang tải nhanh.

## Cách thay số điện thoại và Zalo

Các vị trí cần chỉnh nằm trong `index.html`:

- Nút gọi điện cố định:

```html
<a class="float-btn float-phone" href="tel:0900000000" aria-label="Gọi điện">☎</a>
```

- Nút Zalo cố định:

```html
<a class="float-btn float-zalo" href="https://zalo.me/0900000000" target="_blank" rel="noopener" aria-label="Chat Zalo">Z</a>
```

- Thông tin footer:

```html
<p><strong>Hotline:</strong> 0900 000 000</p>
<p><strong>Zalo:</strong> https://zalo.me/0900000000</p>
```

Hãy thay `0900000000`, `0900 000 000` và link Zalo bằng thông tin tư vấn thật.

## Cách chỉnh giá và chính sách

Các thông tin giá đang là nội dung tham khảo trong `index.html`:

- Căn 1PN: 33-38m², khoảng 2-2,3 tỷ.
- Căn 2PN: 60-68m², khoảng 3,6-4 tỷ.
- Chính sách: thanh toán giãn tiến độ, hỗ trợ lãi suất vay ngân hàng.

Khi cập nhật giá, cần giữ các cụm từ thận trọng như:

- "dự kiến"
- "tham khảo"
- "có thể thay đổi theo chính sách chủ đầu tư"
- "cần xác nhận tại thời điểm tư vấn"

Không nên viết các câu cam kết như "chắc chắn sinh lời", "lợi nhuận đảm bảo" hoặc "cam kết tăng giá".

## Form đăng ký

Form hiện tại chỉ xử lý ở frontend:

- Người dùng nhập họ tên, số điện thoại và nhu cầu.
- Khi bấm gửi, trang hiển thị thông báo thành công.
- Dữ liệu chưa được gửi về CRM, Google Sheet, email hoặc backend.

Logic nằm trong `script.js`:

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3600);
});
```

Nếu muốn thu lead thật, cần kết nối form với một trong các phương án sau:

- Backend API riêng.
- Google Apps Script để ghi vào Google Sheet.
- CRM hoặc webhook marketing automation.
- Form service như Formspree, Getform hoặc Netlify Forms.

## Tối ưu SEO hiện có

Trang đã có các phần SEO cơ bản trong `index.html`:

- Thẻ `title` mô tả dự án và vị trí.
- Thẻ `meta description` phục vụ mô tả trên công cụ tìm kiếm.
- Heading hierarchy bắt đầu bằng `h1` ở hero.
- Nội dung có các cụm từ liên quan: Spring Ville, Persa Place, Gamuda Land, sân bay Long Thành, căn hộ, đầu tư, cho thuê.
- Ảnh hero được preload để cải thiện tốc độ hiển thị ban đầu.

Nếu triển khai public, có thể bổ sung thêm:

- Open Graph meta tags cho Facebook/Zalo.
- Favicon.
- Schema markup cho dự án bất động sản hoặc doanh nghiệp tư vấn.
- File `robots.txt` và `sitemap.xml` nếu website có nhiều trang.

## Responsive và hiệu ứng

Giao diện đã có responsive cho:

- Desktop.
- Tablet.
- Mobile.

Các hiệu ứng hiện có:

- Navbar đổi nền khi cuộn.
- Card có hover lift nhẹ.
- Nội dung reveal khi đi vào viewport.
- FAQ accordion.
- Toast thông báo sau khi gửi form.

Trang cũng có xử lý `prefers-reduced-motion` để giảm chuyển động với người dùng nhạy cảm với animation.

## Lưu ý pháp lý và truyền thông

Landing page dùng cho mục đích giới thiệu và thu lead tư vấn. Trước khi chạy quảng cáo hoặc công bố rộng rãi, cần đối chiếu lại toàn bộ thông tin với tài liệu chính thức từ chủ đầu tư hoặc đơn vị phân phối.

Cần đặc biệt kiểm tra:

- Tên dự án, phân khu và chủ đầu tư.
- Quy hoạch, pháp lý, tiến độ và chính sách bán hàng.
- Giá bán, diện tích, phương thức thanh toán và hỗ trợ lãi suất.
- Hình ảnh phối cảnh, sa bàn, tiện ích và quyền sử dụng hình ảnh.
- Nội dung liên quan đến tiềm năng cho thuê và dòng tiền.

Nên giữ disclaimer ở footer:

```text
Thông tin trên website chỉ nhằm mục đích tham khảo, không phải cam kết bán hàng hay cam kết lợi nhuận. Giá, chính sách và pháp lý cần đối chiếu văn bản chính thức của chủ đầu tư.
```

## Gợi ý cải tiến tiếp theo

- Kết nối form với Google Sheet hoặc CRM để lưu lead thật.
- Thêm tracking chuyển đổi cho Google Ads, Facebook Pixel hoặc Zalo Ads.
- Bổ sung ảnh nhà mẫu, mặt bằng tầng, mặt bằng căn 1PN và 2PN.
- Thêm section bản đồ kết nối về sân bay Long Thành, TP.HCM và các khu công nghiệp lân cận.
- Thêm nút tải brochure hoặc nhận bảng tính dòng tiền qua Zalo.
- Tối ưu ảnh sang `.webp` để cải thiện tốc độ tải trang.

## Trạng thái hiện tại

Landing page hiện là bản frontend tĩnh, có thể mở trực tiếp bằng trình duyệt. Dự án chưa có backend, chưa có hệ thống lưu lead và chưa có cấu hình deploy riêng.
