const listproduct = document.querySelector('.containner-product')
 listproduct.innerHTML = `
 <div class="thumnail">
 <img src="${listapp[Number(localStorage.getItem('test'))].img}" alt="">
</div>
<div class="title">
 <h2 style="color: rgb(234, 91, 91);">${listapp[Number(localStorage.getItem('test'))].price}</h2>
 <h1>${listapp[Number(localStorage.getItem('test'))].name}</h1>
 <h3>giảm Mạnh Đến ${listapp[Number(localStorage.getItem('test'))].gift} VND</h3>
 <div class="containner-item">
     <div class="botton-muahang">
         <h4>Mua Hàng</h4>
         <p>(Giao tận nơi hoặc lấy tại cửa hàng)</p>
     </div>
     <div class="box-cart"><i style="font-size: 50px; color: rgb(232, 89, 89);" class="fa-solid fa-cart-plus"></i></div>
 </div>
 <div class="containner-item">
     <div class="box-tragop">
         <h4>Mua trả góp</h4>
         <p>(Xét duyệt qua điện thoại)</p>
     </div>
     <div class="box-tragop" style="margin-left: 50px;">
         <h4>Mua qua Thẻ</h4>
         <p>(Visa, Mastercard, JCB)</p>
     </div>
 </div>
</div>
<div class="title" style="width: 400px;">
 <h1>Thông tin sản phẩm</h1>
 <div class="containner-item">
     <i class="fa-solid fa-mobile"></i>
     <p>Nguyên hộp, đầy đủ phụ kiện từ nhà sản xuất</p>
 </div>
 <div class="containner-item">
     <i class="fa-solid fa-box-open"></i>
     <p>Máy, Sách hướng dẫn, Cây lấy sim, Ốp lưng, Cáp Type C, Củ sạc nhanh rời đầu Type A 67W</p>
 </div>
 <div class="containner-item">
     <i class="fa-solid fa-shield-halved"></i>
     <p>Bảo hành 18 tháng tại trung tâm bảo hành Chính hãng. 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng từ nhà sản xuất.</p>
 </div>
</div>
 `