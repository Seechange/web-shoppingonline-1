const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const box_pc = $('.product-info');
let listsmartwatch =  [
    {name:"Samsung Galaxy Watch 4 40mm dây silicone", price:"3.990.000", gift: "1.880.000", vote: "4.0", countvote:"32", img: "./assets/img/smartwatch/samsung-galaxy-watch-4-40mm-1-2-600x600.jpg"},
    {name:"Apple Watch SE 40mm viền nhôm dây silicone", price:"6.990.000", gift: "1.880.000", vote: "4.5", countvote:"144", img: "./assets/img/smartwatch/se-40mm-vien-nhom-day-cao-su-xanh-den-thumb-1-600x600.jpg"},
    {name:"Xiaomi Watch S1 46.5mm dây da", price:"5.190.000", gift: "1.880.000", vote: "4.7", countvote:"62", img: "./assets/img/smartwatch/dong-ho-thong-minh-xiaomi-watch-s1-thumbn-600x600.jpg"},
    {name:"Samsung Galaxy Watch 4 Classic 42mm dây silicone", price:"5.690.000", gift: "1.880.000", vote: "4.2", countvote:"12", img: "./assets/img/smartwatch/samsung-galaxy-watch-4-classic-42mm-600x600.jpg"},
    {name:"BeFit BeU B3 44mm dây silicone", price:"1.090.000", gift: "300.000", vote: "4.0", countvote:"20", img: "./assets/img/smartwatch/befit-b3-vang-thumbnew-1-600x600.jpeg"},
    {name:"Honor Watch GS3 45.9mm dây da", price:"4.990.000", gift: "1.880.000", vote: "4.0", countvote:"56", img: "./assets/img/smartwatch/honor-watch-gs-3-day-da-vang-tb-1-2-600x600.jpg"},
    {name:"Apple Watch Series 7 GPS 41mm viền nhôm dây silicone", price:"9.990.000", gift: "1.880.000", vote: "4.5", countvote:"98", img: "./assets/img/smartwatch/249906-1-600x600.jpg"},
    {name:"Garmin Fenix 6 Pro Solar 47mm dây silicone", price:"15.043.000", gift: "1.880.000", vote: "5.0", countvote:"164", img: "./assets/img/smartwatch/garmin-fenix-6-pro-solar-day-silicone-thumb-1-600x600.jpg"},
    {name:"Xiaomi Mi Band 6 dây TPU", price:"790.000", gift: "500.000", vote: "4.0", countvote:"32", img: "./assets/img/smartwatch/mi-band-6-1-2-3-600x600.jpg"},
    {name:"Apple Watch S5 LTE 40mm viền thép dây thép", price:"16.990.000", gift: "1.880.000", vote: "4.0", countvote:"32", img: "./assets/img/smartwatch/s5-lte-40mm-vien-thep-day-thep-vang-bac-600x600.jpg"},
];
function render(){
    const htmls = listsmartwatch.map((pc, index) => {
        return `
        <div class="detail-product noshadow">
        <p style="background-color: #EB5757;" class="tragop" >Trả góp 0%</p>
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
        <p style="background:linear-gradient(to right,#af63cf,#3327a7) ;" class="result-lable"><img src="./assets/img/icon6-50x50.png" alt=""><span>VNPAY GIẢM ${pc.gift}</span></p>
        <h3>${pc.name}</h3>
        <p style="visibility: hidden; font-size:14px ; color: #666666; margin: 0px 0px 8px;" class="txt-note">Online giá rẻ</p>
        <p  class="price">${pc.price} VND <small>-38%</small></p>
        <p class="vote"><b>${pc.vote}</b> <i class="ti-star"></i>( ${pc.countvote} )</p>
    </div>
        `
    })
    box_pc.innerHTML = htmls.join("");
}
render();