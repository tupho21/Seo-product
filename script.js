document.addEventListener('DOMContentLoaded', function () {
    
    // --- 1. XỬ LÝ CHUYỂN ĐỔI ẢNH CHÍNH KHI CLICK THUMBNAIL ---
    const mainImage = document.getElementById('main-image');
    const thumbButtons = document.querySelectorAll('.thumb-btn');

    thumbButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Lấy đường dẫn ảnh từ thuộc tính data-src của button
            const newSrc = this.getAttribute('data-src');
            
            // Lấy text alt từ ảnh nhỏ bên trong
            const newAlt = this.querySelector('img').getAttribute('alt');

            // Cập nhật ảnh chính với hiệu ứng mờ chuyển tiếp nhẹ nhàng
            mainImage.style.opacity = '0.3';
            
            setTimeout(() => {
                mainImage.setAttribute('src', newSrc);
                mainImage.setAttribute('alt', newAlt);
                mainImage.style.opacity = '1';
            }, 150);

            // Cập nhật trạng thái active của thumbnail
            thumbButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });


    // --- 2. XỬ LÝ TAB CHUYỂN ĐỔI (MÔ TẢ SẢN PHẨM / CHỌN SIZE) ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTabId = this.getAttribute('data-tab');

            // Xóa class active ở tất cả các button tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Xóa class active ở tất cả các panel nội dung
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Thêm class active vào tab được chọn và panel tương ứng
            this.classList.add('active');
            document.getElementById(targetTabId).classList.add('active');
        });
    });


    // --- 3. BẮT SỰ KIỆN CLICK NÚT THÊM VÀO GIỎ HÀNG ---
    const addToCartBtn = document.getElementById('add-to-cart-btn');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function () {
            // Hiển thị alert thông báo thành công cho khách hàng
            alert("Đã thêm Giày Nike Air Max Moto 2K Wolf Grey vào giỏ hàng thành công!");
        });
    }
});