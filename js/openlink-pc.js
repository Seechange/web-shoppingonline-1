const ds = $('.product-info')
let nodeclick;
ds.onclick = function (e) {
    console.log('lang nghe hanh vi nhap san pham ')
    nodeclick = e.target.closest('.detail-product');
    localStorage.setItem('test',Number(nodeclick.dataset.index)+19);
    // console.log(Number(localStorage.getItem('test')));
    window.open('web-product.html','_parent');
}