const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const box_pc = $('.product-info');
let listphone =  [
    {name:"Iphone 11", price:"11.790.000", gift: "880.000", vote: "4.1", countvote:"1797", img: "./assets/img/iphone-11-trang-600x600.jpg"},
    {name:"Iphone 13 Pro Max", price:"28.290.000", gift: "880.000", vote: "5.0", countvote:"1000", img: "./assets/img/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"},
    {name:"Iphone 14 Pro Max", price:"49.490.000", gift: "380.000", vote: "5.0", countvote:"897", img: "./assets/img/iphone-14-pro-max-den-thumb-600x600.jpg"},
    {name:"Iphone 14 Pro", price:"30.490.000", gift: "880.000", vote: "5.0", countvote:"1797", img: "./assets/img/iphone-14-pro-bac-thumb-600x600.jpg"},
    {name:"Iphone 14 Plus", price:"26.490.000", gift: "880.000", vote: "3.1", countvote:"792", img: "./assets/img/iPhone-14-plus-thumb-den-600x600.jpg"},
    {name:"Iphone 13 Pro", price:"25.490.000", gift: "580.000", vote: "4.5", countvote:"1797", img: "./assets/img/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"},
    {name:"Iphone 14", price:"23.490.000", gift: "880.000", vote: "5.2", countvote:"431", img: "./assets/img/iPhone-14-thumb-tim-1-600x600.jpg"},
    {name:"Iphone 13", price:"20.090.000", gift: "880.000", vote: "4.3", countvote:"1797", img: "./assets/img/iphone-13-blue-1-600x600.jpg"},
    {name:"Iphone 12 mini", price:"18.990.000", gift: "880.000", vote: "3.3", countvote:"597", img: "./assets/img/iphone-12-mini-do-4-600x600.jpg"},
    {name:"Iphone 13 mini", price:"16.990.000", gift: "680.000", vote: "4.6", countvote:"337", img: "./assets/img/iphone-13-mini-blue-2-600x600.jpg"},
    {name:"Samsung Galaxy Z Flip4 5G", price:"20.990.000", gift: "480.000", vote: "5.2", countvote:"2797", img: "./assets/img/samsung-galaxy-z-flip4-5g-128gb-thumb-tim-600x600.jpg"},
    {name:"Samsung Galaxy S22 Ultra 5G", price:"25.990.000", gift: "180.000", vote: "5.2", countvote:"2797", img: "./assets/img/Galaxy-S22-Ultra-Burgundy-600x600 (1).jpg"},
    {name:"Samsung Galaxy Z Fold4 5G", price:"37.990.000", gift: "380.000", vote: "5.2", countvote:"1036", img: "./assets/img/samsung-galaxy-z-fold4-kem-256gb-600x600.jpg"},
    {name:"Samsung Galaxy A23", price:"5.690.000", gift: "380.000", vote: "3.2", countvote:"8036", img: "./assets/img/sam-sung-galaxy-a23-5g-xanh-thumb-600x600.jpg"},
    {name:"Samsung Galaxy S22+ 5G", price:"21.990.000", gift: "780.000", vote: "3.7", countvote:"286", img: "./assets/img/Galaxy-S22-Plus-White-600x600.jpg"},
    {name:"Samsung Galaxy S22 5G", price:"17.990.000", gift: "380.000", vote: "4.8", countvote:"1286", img: "./assets/img/Galaxy-S22-Black-600x600.jpg"},
    {name:"Samsung Galaxy Z Flip3 5G", price:"16.990.000", gift: "980.000", vote: "3.9", countvote:"1286", img: "./assets/img/samsung-galaxy-z-flip-3-black-1-600x600.jpg"},
    {name:"Samsung Galaxy S21 FE 5G", price:"12.990.000", gift: "580.000", vote: "4.8", countvote:"1286", img: "./assets/img/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg"},
    {name:"Samsung Galaxy M53", price:"12.490.000", gift: "380.000", vote: "4.1", countvote:"1286", img: "./assets/img/samsung-galaxy-m53-nau-thumb-600x600.jpg"},
    {name:"Iphone 11", price:"11.790.000", gift: "880.000", vote: "4.1", countvote:"1797", img: "./assets/img/iphone-11-trang-600x600.jpg"},
    {name:"Iphone 13 Pro Max", price:"28.290.000", gift: "880.000", vote: "5.0", countvote:"1000", img: "./assets/img/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"},
    {name:"Iphone 14 Pro Max", price:"49.490.000", gift: "380.000", vote: "5.0", countvote:"897", img: "./assets/img/iphone-14-pro-max-den-thumb-600x600.jpg"},
    {name:"Iphone 14 Pro", price:"30.490.000", gift: "880.000", vote: "5.0", countvote:"1797", img: "./assets/img/iphone-14-pro-bac-thumb-600x600.jpg"},
    {name:"Iphone 14 Plus", price:"26.490.000", gift: "880.000", vote: "3.1", countvote:"792", img: "./assets/img/iPhone-14-plus-thumb-den-600x600.jpg"},
    {name:"Iphone 13 Pro", price:"25.490.000", gift: "580.000", vote: "4.5", countvote:"1797", img: "./assets/img/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"},
    {name:"Iphone 14", price:"23.490.000", gift: "880.000", vote: "5.2", countvote:"431", img: "./assets/img/iPhone-14-thumb-tim-1-600x600.jpg"},
    {name:"Iphone 13", price:"20.090.000", gift: "880.000", vote: "4.3", countvote:"1797", img: "./assets/img/iphone-13-blue-1-600x600.jpg"},
    {name:"Iphone 12 mini", price:"18.990.000", gift: "880.000", vote: "3.3", countvote:"597", img: "./assets/img/iphone-12-mini-do-4-600x600.jpg"},
    {name:"Iphone 13 mini", price:"16.990.000", gift: "680.000", vote: "4.6", countvote:"337", img: "./assets/img/iphone-13-mini-blue-2-600x600.jpg"},
    {name:"Samsung Galaxy Z Flip4 5G", price:"20.990.000", gift: "480.000", vote: "5.2", countvote:"2797", img: "./assets/img/samsung-galaxy-z-flip4-5g-128gb-thumb-tim-600x600.jpg"},
    {name:"Samsung Galaxy S22 Ultra 5G", price:"25.990.000", gift: "180.000", vote: "5.2", countvote:"2797", img: "./assets/img/Galaxy-S22-Ultra-Burgundy-600x600 (1).jpg"},
    {name:"Samsung Galaxy Z Fold4 5G", price:"37.990.000", gift: "380.000", vote: "5.2", countvote:"1036", img: "./assets/img/samsung-galaxy-z-fold4-kem-256gb-600x600.jpg"},
    {name:"Samsung Galaxy A23", price:"5.690.000", gift: "380.000", vote: "3.2", countvote:"8036", img: "./assets/img/sam-sung-galaxy-a23-5g-xanh-thumb-600x600.jpg"},
    {name:"Samsung Galaxy S22+ 5G", price:"21.990.000", gift: "780.000", vote: "3.7", countvote:"286", img: "./assets/img/Galaxy-S22-Plus-White-600x600.jpg"},
    {name:"Samsung Galaxy S22 5G", price:"17.990.000", gift: "380.000", vote: "4.8", countvote:"1286", img: "./assets/img/Galaxy-S22-Black-600x600.jpg"},
    {name:"Samsung Galaxy Z Flip3 5G", price:"16.990.000", gift: "980.000", vote: "3.9", countvote:"1286", img: "./assets/img/samsung-galaxy-z-flip-3-black-1-600x600.jpg"},
    {name:"Samsung Galaxy S21 FE 5G", price:"12.990.000", gift: "580.000", vote: "4.8", countvote:"1286", img: "./assets/img/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg"},
    {name:"Samsung Galaxy M53", price:"12.490.000", gift: "380.000", vote: "4.1", countvote:"1286", img: "./assets/img/samsung-galaxy-m53-nau-thumb-600x600.jpg"},
    {name:"Iphone 11", price:"11.790.000", gift: "880.000", vote: "4.1", countvote:"1797", img: "./assets/img/iphone-11-trang-600x600.jpg"},
    {name:"Iphone 13 Pro Max", price:"28.290.000", gift: "880.000", vote: "5.0", countvote:"1000", img: "./assets/img/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"},
    {name:"Iphone 14 Pro Max", price:"49.490.000", gift: "380.000", vote: "5.0", countvote:"897", img: "./assets/img/iphone-14-pro-max-den-thumb-600x600.jpg"},
    {name:"Iphone 14 Pro", price:"30.490.000", gift: "880.000", vote: "5.0", countvote:"1797", img: "./assets/img/iphone-14-pro-bac-thumb-600x600.jpg"},
    {name:"Iphone 14 Plus", price:"26.490.000", gift: "880.000", vote: "3.1", countvote:"792", img: "./assets/img/iPhone-14-plus-thumb-den-600x600.jpg"},
    {name:"Iphone 13 Pro", price:"25.490.000", gift: "580.000", vote: "4.5", countvote:"1797", img: "./assets/img/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"},
    {name:"Iphone 14", price:"23.490.000", gift: "880.000", vote: "5.2", countvote:"431", img: "./assets/img/iPhone-14-thumb-tim-1-600x600.jpg"},
    {name:"Iphone 13", price:"20.090.000", gift: "880.000", vote: "4.3", countvote:"1797", img: "./assets/img/iphone-13-blue-1-600x600.jpg"},
    {name:"Iphone 12 mini", price:"18.990.000", gift: "880.000", vote: "3.3", countvote:"597", img: "./assets/img/iphone-12-mini-do-4-600x600.jpg"},
    {name:"Iphone 13 mini", price:"16.990.000", gift: "680.000", vote: "4.6", countvote:"337", img: "./assets/img/iphone-13-mini-blue-2-600x600.jpg"},
    {name:"Samsung Galaxy Z Flip4 5G", price:"20.990.000", gift: "480.000", vote: "5.2", countvote:"2797", img: "./assets/img/samsung-galaxy-z-flip4-5g-128gb-thumb-tim-600x600.jpg"},
    {name:"Samsung Galaxy S22 Ultra 5G", price:"25.990.000", gift: "180.000", vote: "5.2", countvote:"2797", img: "./assets/img/Galaxy-S22-Ultra-Burgundy-600x600 (1).jpg"},
    {name:"Samsung Galaxy Z Fold4 5G", price:"37.990.000", gift: "380.000", vote: "5.2", countvote:"1036", img: "./assets/img/samsung-galaxy-z-fold4-kem-256gb-600x600.jpg"},
    {name:"Samsung Galaxy A23", price:"5.690.000", gift: "380.000", vote: "3.2", countvote:"8036", img: "./assets/img/sam-sung-galaxy-a23-5g-xanh-thumb-600x600.jpg"},
    {name:"Samsung Galaxy S22+ 5G", price:"21.990.000", gift: "780.000", vote: "3.7", countvote:"286", img: "./assets/img/Galaxy-S22-Plus-White-600x600.jpg"},
    {name:"Samsung Galaxy S22 5G", price:"17.990.000", gift: "380.000", vote: "4.8", countvote:"1286", img: "./assets/img/Galaxy-S22-Black-600x600.jpg"},
    {name:"Samsung Galaxy Z Flip3 5G", price:"16.990.000", gift: "980.000", vote: "3.9", countvote:"1286", img: "./assets/img/samsung-galaxy-z-flip-3-black-1-600x600.jpg"},
    {name:"Samsung Galaxy S21 FE 5G", price:"12.990.000", gift: "580.000", vote: "4.8", countvote:"1286", img: "./assets/img/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg"},
    {name:"Samsung Galaxy M53", price:"12.490.000", gift: "380.000", vote: "4.1", countvote:"1286", img: "./assets/img/samsung-galaxy-m53-nau-thumb-600x600.jpg"},
    {name:"Iphone 11", price:"11.790.000", gift: "880.000", vote: "4.1", countvote:"1797", img: "./assets/img/iphone-11-trang-600x600.jpg"},
    {name:"Iphone 13 Pro Max", price:"28.290.000", gift: "880.000", vote: "5.0", countvote:"1000", img: "./assets/img/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"},
    {name:"Iphone 14 Pro Max", price:"49.490.000", gift: "380.000", vote: "5.0", countvote:"897", img: "./assets/img/iphone-14-pro-max-den-thumb-600x600.jpg"},
    {name:"Iphone 14 Pro", price:"30.490.000", gift: "880.000", vote: "5.0", countvote:"1797", img: "./assets/img/iphone-14-pro-bac-thumb-600x600.jpg"},
    {name:"Iphone 14 Plus", price:"26.490.000", gift: "880.000", vote: "3.1", countvote:"792", img: "./assets/img/iPhone-14-plus-thumb-den-600x600.jpg"},
    {name:"Iphone 13 Pro", price:"25.490.000", gift: "580.000", vote: "4.5", countvote:"1797", img: "./assets/img/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"},
    {name:"Iphone 14", price:"23.490.000", gift: "880.000", vote: "5.2", countvote:"431", img: "./assets/img/iPhone-14-thumb-tim-1-600x600.jpg"},
    {name:"Iphone 13", price:"20.090.000", gift: "880.000", vote: "4.3", countvote:"1797", img: "./assets/img/iphone-13-blue-1-600x600.jpg"},
    {name:"Iphone 12 mini", price:"18.990.000", gift: "880.000", vote: "3.3", countvote:"597", img: "./assets/img/iphone-12-mini-do-4-600x600.jpg"},
    {name:"Iphone 13 mini", price:"16.990.000", gift: "680.000", vote: "4.6", countvote:"337", img: "./assets/img/iphone-13-mini-blue-2-600x600.jpg"},
    {name:"Samsung Galaxy Z Flip4 5G", price:"20.990.000", gift: "480.000", vote: "5.2", countvote:"2797", img: "./assets/img/samsung-galaxy-z-flip4-5g-128gb-thumb-tim-600x600.jpg"},
    {name:"Samsung Galaxy S22 Ultra 5G", price:"25.990.000", gift: "180.000", vote: "5.2", countvote:"2797", img: "./assets/img/Galaxy-S22-Ultra-Burgundy-600x600 (1).jpg"},
    {name:"Samsung Galaxy Z Fold4 5G", price:"37.990.000", gift: "380.000", vote: "5.2", countvote:"1036", img: "./assets/img/samsung-galaxy-z-fold4-kem-256gb-600x600.jpg"},
    {name:"Samsung Galaxy A23", price:"5.690.000", gift: "380.000", vote: "3.2", countvote:"8036", img: "./assets/img/sam-sung-galaxy-a23-5g-xanh-thumb-600x600.jpg"},
    {name:"Samsung Galaxy S22+ 5G", price:"21.990.000", gift: "780.000", vote: "3.7", countvote:"286", img: "./assets/img/Galaxy-S22-Plus-White-600x600.jpg"},
    {name:"Samsung Galaxy S22 5G", price:"17.990.000", gift: "380.000", vote: "4.8", countvote:"1286", img: "./assets/img/Galaxy-S22-Black-600x600.jpg"},
    {name:"Samsung Galaxy Z Flip3 5G", price:"16.990.000", gift: "980.000", vote: "3.9", countvote:"1286", img: "./assets/img/samsung-galaxy-z-flip-3-black-1-600x600.jpg"},
    {name:"Samsung Galaxy S21 FE 5G", price:"12.990.000", gift: "580.000", vote: "4.8", countvote:"1286", img: "./assets/img/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg"},
    {name:"Samsung Galaxy M53", price:"12.490.000", gift: "380.000", vote: "4.1", countvote:"1286", img: "./assets/img/samsung-galaxy-m53-nau-thumb-600x600.jpg"},
    {name:"Iphone 11", price:"11.790.000", gift: "880.000", vote: "4.1", countvote:"1797", img: "./assets/img/iphone-11-trang-600x600.jpg"},
    {name:"Iphone 13 Pro Max", price:"28.290.000", gift: "880.000", vote: "5.0", countvote:"1000", img: "./assets/img/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"},
    {name:"Iphone 14 Pro Max", price:"49.490.000", gift: "380.000", vote: "5.0", countvote:"897", img: "./assets/img/iphone-14-pro-max-den-thumb-600x600.jpg"},
    {name:"Iphone 14 Pro", price:"30.490.000", gift: "880.000", vote: "5.0", countvote:"1797", img: "./assets/img/iphone-14-pro-bac-thumb-600x600.jpg"},
    {name:"Iphone 14 Plus", price:"26.490.000", gift: "880.000", vote: "3.1", countvote:"792", img: "./assets/img/iPhone-14-plus-thumb-den-600x600.jpg"},
    {name:"Iphone 13 Pro", price:"25.490.000", gift: "580.000", vote: "4.5", countvote:"1797", img: "./assets/img/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"},
    {name:"Iphone 14", price:"23.490.000", gift: "880.000", vote: "5.2", countvote:"431", img: "./assets/img/iPhone-14-thumb-tim-1-600x600.jpg"},
    {name:"Iphone 13", price:"20.090.000", gift: "880.000", vote: "4.3", countvote:"1797", img: "./assets/img/iphone-13-blue-1-600x600.jpg"},
    {name:"Iphone 12 mini", price:"18.990.000", gift: "880.000", vote: "3.3", countvote:"597", img: "./assets/img/iphone-12-mini-do-4-600x600.jpg"},
    {name:"Iphone 13 mini", price:"16.990.000", gift: "680.000", vote: "4.6", countvote:"337", img: "./assets/img/iphone-13-mini-blue-2-600x600.jpg"},
    {name:"Samsung Galaxy Z Flip4 5G", price:"20.990.000", gift: "480.000", vote: "5.2", countvote:"2797", img: "./assets/img/samsung-galaxy-z-flip4-5g-128gb-thumb-tim-600x600.jpg"},
    {name:"Samsung Galaxy S22 Ultra 5G", price:"25.990.000", gift: "180.000", vote: "5.2", countvote:"2797", img: "./assets/img/Galaxy-S22-Ultra-Burgundy-600x600 (1).jpg"},
    {name:"Samsung Galaxy Z Fold4 5G", price:"37.990.000", gift: "380.000", vote: "5.2", countvote:"1036", img: "./assets/img/samsung-galaxy-z-fold4-kem-256gb-600x600.jpg"},
    {name:"Samsung Galaxy A23", price:"5.690.000", gift: "380.000", vote: "3.2", countvote:"8036", img: "./assets/img/sam-sung-galaxy-a23-5g-xanh-thumb-600x600.jpg"},
    {name:"Samsung Galaxy S22+ 5G", price:"21.990.000", gift: "780.000", vote: "3.7", countvote:"286", img: "./assets/img/Galaxy-S22-Plus-White-600x600.jpg"},
    {name:"Samsung Galaxy S22 5G", price:"17.990.000", gift: "380.000", vote: "4.8", countvote:"1286", img: "./assets/img/Galaxy-S22-Black-600x600.jpg"},
    {name:"Samsung Galaxy Z Flip3 5G", price:"16.990.000", gift: "980.000", vote: "3.9", countvote:"1286", img: "./assets/img/samsung-galaxy-z-flip-3-black-1-600x600.jpg"},
    {name:"Samsung Galaxy S21 FE 5G", price:"12.990.000", gift: "580.000", vote: "4.8", countvote:"1286", img: "./assets/img/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg"},
    {name:"Samsung Galaxy M53", price:"12.490.000", gift: "380.000", vote: "4.1", countvote:"1286", img: "./assets/img/samsung-galaxy-m53-nau-thumb-600x600.jpg"},
];
function render(){
    const htmls = perUser.map((pc, index) => {
        return `
        <div class=" detail-product noshadow" data-index ="${index}">
        <p class="tragop" style="visibility: hidden;">Trả góp 0%</p>
        <div class="loadpicture">
            <img src="${pc.img}" alt="">
            <div class="box-show-like">
                <div class="container-icon">
                    <i class="ti-plus"></i>
                    <i class="ti-shopping-cart"></i>
                    <i class="ti-heart"></i>
                </div>
            </div>
        </div>
        <p class="result-lable"><img src="./assets/img/icon6-50x50.png" alt=""><span>VNPAY GIẢM ${pc.gift}</span></p>
        <h3 id="name">${pc.name}</h3>
        <p style="font-size:14px ; color: #666666; margin: 0px 0px 8px;" class="txt-note">Online giá rẻ</p>
        <p  class="price">${pc.price} VND <small>-21%</small></p>
        <p class="vote"><b>${pc.vote}</b> <i class="ti-star"></i>( ${pc.countvote} )</p>
    </div>
        `
    })
    box_pc.innerHTML = htmls.join("");
}
let curentPage = 1; //page bat dau trong load lai trang
let perPage = 20;
let totalPage = listphone.length/20;
let perUser = [];
async function getUser(){
    try{
        perUser = listphone.slice(
            (curentPage -1)*perPage,
            (curentPage -1) *perPage + perPage,
        )
        render();
        render_page();
    }catch(e){
        console.log(e)}
}
function handlePage(num){
    curentPage = num;
    perUser = listphone.slice(
        (curentPage -1)*perPage,
        (curentPage -1) *perPage + perPage,
    )
    render();
}
function render_page(){
    totalPage = listphone.length / perPage;
    for(let i = 1; i<= totalPage;i++){
        document.querySelector('.containner-numPage').innerHTML += '<li onclick ="handlePage('+i+')">'+i+'</li>'
    }
}
getUser();