E-commerce Education Platform
Nền tảng thương mại điện tử cho các khóa học trực tuyến, hỗ trợ tính năng yêu thích, gợi ý, và lịch sử xem.

YÊU CẦU HỆ THỐNG

- Node.js v20.
- npm 9+.
- json-server dùng giả lập API.

CÀI ĐẶT MÔI TRƯỜNG, BUILD VÀ DEPLOY

1.  Cài đặt Node.js & npm
    - Tải và cài đặt Node.js LTS tại: https://nodejs.org/en
    - Kiểm tra cài đặt: node -v, npm -v
2.  Cài đặt dự án
    - Bước 1: Tại thư mục cần lưu dự án, mở terminal
    - Bước 2: git clone https://github.com/nguyenvanbao1310/E_Learning.git
    - Bước 3: cd education
    - Bước 4: npm install
3.  Cài Json Server (dùng API giả lập)
    - npm install -g json-server
4.  Chạy dự án
    - Chạy JSON Server: npm run server
    - Chạy Reactjs: npm start
5.  Build project React
    - npm run build
    - khi chạy sẽ tạo ra thư mục /build dùng để deploy lên hosting.
6.  Deploy trên Netlify
    - Truy cập vào: https://app.netlify.com
    - upload thư mục /build lên và deploy
