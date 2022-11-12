const ds = $('.product-info')
let nodeclick;
ds.onclick = function (e) {
    console.log('lang nghe hanh vi nhap san pham ')
    nodeclick = e.target.closest('.detail-product');
    localStorage.setItem('test', nodeclick.dataset.index);
    window.open('web-product.html','_parent');
    // console.log(Number(localStorage.getItem('test')));
}