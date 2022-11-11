const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const box_pc = $('.product-info');
let listpc =  [
    {name:"Acer Nitro 5 Gaming AN515 45 R6EV R5 5600H", price:"19.490.000", gift: "1.880.000", vote: "4.0", countvote:"32", img: "./assets/img/laptop/accernitro5.jpg"},
    {name:"Acer Aspire 7 Gaming A715 42G R4XX R5 5500U", price:"14.990.000", gift: "1.880.000", vote: "4.5", countvote:"78", img: "./assets/img/laptop/aceraspire7.jpg"},
    {name:"Asus TUF Gaming FX506LHB i5 10300H", price:"18.190.000", gift: "1.880.000", vote: "4.2", countvote:"132", img: "./assets/img/laptop/asusTufgaming.jpg"},
    {name:"Asus TUF Gaming FX517Z i7 12650H", price:"36.790.000", gift: "380.000", vote: "5.0", countvote:"12", img: "./assets/img/laptop/asustufgaming2.jpg"},
    {name:"Lenovo Ideapad Gaming 3 15IAH7 i5 12500", price:"24.190.000", gift: "1.230.000", vote: "4.6", countvote:"11", img: "./assets/img/laptop/accernitro5.jpg"},
    {name:"MSI Creator Z16P B12UGST i7 12700H", price:"79.990.000", gift: "980.000", vote: "5.0", countvote:"8", img: "./assets/img/laptop/msicreator.jpg"},
    {name:"MSI Gaming Bravo 15 B5DD R5 5600H (279VN)", price:"18.490.000", gift: "1.560.000", vote: "4.0", countvote:"76", img: "./assets/img/laptop/msibravo.jpg"},
    {name:"MSI Gaming Alpha 15 B5EEK R7 5800H", price:"32.490.000", gift: "6.060.000", vote: "4.4", countvote:"31", img: "./assets/img/laptop/msialpha.jpg"},
    {name:"MSI Gaming GF65 Thin 10UE i5 10500H", price:"24.290.000", gift: "1.270.000", vote: "4.0", countvote:"5", img: "./assets/img/laptop/msigaminggf65.jpg"},
    {name:"Acer Nitro 5 Gaming AN515 45 R6EV R5 5600H", price:"19.490.000", gift: "1.880.000", vote: "4.0", countvote:"32", img: "./assets/img/laptop/accernitro5.jpg"},
    {name:"Acer Aspire 7 Gaming A715 42G R4XX R5 5500U", price:"14.990.000", gift: "1.880.000", vote: "4.5", countvote:"78", img: "./assets/img/laptop/aceraspire7.jpg"},
    {name:"Asus TUF Gaming FX506LHB i5 10300H", price:"18.190.000", gift: "1.880.000", vote: "4.2", countvote:"132", img: "./assets/img/laptop/asusTufgaming.jpg"},
    {name:"Asus TUF Gaming FX517Z i7 12650H", price:"36.790.000", gift: "380.000", vote: "5.0", countvote:"12", img: "./assets/img/laptop/asustufgaming2.jpg"},
    {name:"Lenovo Ideapad Gaming 3 15IAH7 i5 12500", price:"24.190.000", gift: "1.230.000", vote: "4.6", countvote:"11", img: "./assets/img/laptop/accernitro5.jpg"},
    {name:"MSI Creator Z16P B12UGST i7 12700H", price:"79.990.000", gift: "980.000", vote: "5.0", countvote:"8", img: "./assets/img/laptop/msicreator.jpg"},
    {name:"MSI Gaming Bravo 15 B5DD R5 5600H (279VN)", price:"18.490.000", gift: "1.560.000", vote: "4.0", countvote:"76", img: "./assets/img/laptop/msibravo.jpg"},
    {name:"MSI Gaming Alpha 15 B5EEK R7 5800H", price:"32.490.000", gift: "6.060.000", vote: "4.4", countvote:"31", img: "./assets/img/laptop/msialpha.jpg"},
    {name:"MSI Gaming GF65 Thin 10UE i5 10500H", price:"24.290.000", gift: "1.270.000", vote: "4.0", countvote:"5", img: "./assets/img/laptop/msigaminggf65.jpg"},
    {name:"Acer Nitro 5 Gaming AN515 45 R6EV R5 5600H", price:"19.490.000", gift: "1.880.000", vote: "4.0", countvote:"32", img: "./assets/img/laptop/accernitro5.jpg"},
    {name:"Acer Aspire 7 Gaming A715 42G R4XX R5 5500U", price:"14.990.000", gift: "1.880.000", vote: "4.5", countvote:"78", img: "./assets/img/laptop/aceraspire7.jpg"},
    {name:"Asus TUF Gaming FX506LHB i5 10300H", price:"18.190.000", gift: "1.880.000", vote: "4.2", countvote:"132", img: "./assets/img/laptop/asusTufgaming.jpg"},
    {name:"Asus TUF Gaming FX517Z i7 12650H", price:"36.790.000", gift: "380.000", vote: "5.0", countvote:"12", img: "./assets/img/laptop/asustufgaming2.jpg"},
    {name:"Lenovo Ideapad Gaming 3 15IAH7 i5 12500", price:"24.190.000", gift: "1.230.000", vote: "4.6", countvote:"11", img: "./assets/img/laptop/accernitro5.jpg"},
    {name:"MSI Creator Z16P B12UGST i7 12700H", price:"79.990.000", gift: "980.000", vote: "5.0", countvote:"8", img: "./assets/img/laptop/msicreator.jpg"},
    {name:"MSI Gaming Bravo 15 B5DD R5 5600H (279VN)", price:"18.490.000", gift: "1.560.000", vote: "4.0", countvote:"76", img: "./assets/img/laptop/msibravo.jpg"},
    {name:"MSI Gaming Alpha 15 B5EEK R7 5800H", price:"32.490.000", gift: "6.060.000", vote: "4.4", countvote:"31", img: "./assets/img/laptop/msialpha.jpg"},
    {name:"MSI Gaming GF65 Thin 10UE i5 10500H", price:"24.290.000", gift: "1.270.000", vote: "4.0", countvote:"5", img: "./assets/img/laptop/msigaminggf65.jpg"},
    {name:"Acer Nitro 5 Gaming AN515 45 R6EV R5 5600H", price:"19.490.000", gift: "1.880.000", vote: "4.0", countvote:"32", img: "./assets/img/laptop/accernitro5.jpg"},
    {name:"Acer Aspire 7 Gaming A715 42G R4XX R5 5500U", price:"14.990.000", gift: "1.880.000", vote: "4.5", countvote:"78", img: "./assets/img/laptop/aceraspire7.jpg"},
    {name:"Asus TUF Gaming FX506LHB i5 10300H", price:"18.190.000", gift: "1.880.000", vote: "4.2", countvote:"132", img: "./assets/img/laptop/asusTufgaming.jpg"},
    {name:"Asus TUF Gaming FX517Z i7 12650H", price:"36.790.000", gift: "380.000", vote: "5.0", countvote:"12", img: "./assets/img/laptop/asustufgaming2.jpg"},
    {name:"Lenovo Ideapad Gaming 3 15IAH7 i5 12500", price:"24.190.000", gift: "1.230.000", vote: "4.6", countvote:"11", img: "./assets/img/laptop/accernitro5.jpg"},
    {name:"MSI Creator Z16P B12UGST i7 12700H", price:"79.990.000", gift: "980.000", vote: "5.0", countvote:"8", img: "./assets/img/laptop/msicreator.jpg"},
    {name:"MSI Gaming Bravo 15 B5DD R5 5600H (279VN)", price:"18.490.000", gift: "1.560.000", vote: "4.0", countvote:"76", img: "./assets/img/laptop/msibravo.jpg"},
    {name:"MSI Gaming Alpha 15 B5EEK R7 5800H", price:"32.490.000", gift: "6.060.000", vote: "4.4", countvote:"31", img: "./assets/img/laptop/msialpha.jpg"},
    {name:"MSI Gaming GF65 Thin 10UE i5 10500H", price:"24.290.000", gift: "1.270.000", vote: "4.0", countvote:"5", img: "./assets/img/laptop/msigaminggf65.jpg"},
    {name:"Acer Nitro 5 Gaming AN515 45 R6EV R5 5600H", price:"19.490.000", gift: "1.880.000", vote: "4.0", countvote:"32", img: "./assets/img/laptop/accernitro5.jpg"},
    {name:"Acer Aspire 7 Gaming A715 42G R4XX R5 5500U", price:"14.990.000", gift: "1.880.000", vote: "4.5", countvote:"78", img: "./assets/img/laptop/aceraspire7.jpg"},
    {name:"Asus TUF Gaming FX506LHB i5 10300H", price:"18.190.000", gift: "1.880.000", vote: "4.2", countvote:"132", img: "./assets/img/laptop/asusTufgaming.jpg"},
    {name:"Asus TUF Gaming FX517Z i7 12650H", price:"36.790.000", gift: "380.000", vote: "5.0", countvote:"12", img: "./assets/img/laptop/asustufgaming2.jpg"},
    {name:"Lenovo Ideapad Gaming 3 15IAH7 i5 12500", price:"24.190.000", gift: "1.230.000", vote: "4.6", countvote:"11", img: "./assets/img/laptop/accernitro5.jpg"},
    {name:"MSI Creator Z16P B12UGST i7 12700H", price:"79.990.000", gift: "980.000", vote: "5.0", countvote:"8", img: "./assets/img/laptop/msicreator.jpg"},
    {name:"MSI Gaming Bravo 15 B5DD R5 5600H (279VN)", price:"18.490.000", gift: "1.560.000", vote: "4.0", countvote:"76", img: "./assets/img/laptop/msibravo.jpg"},
    {name:"MSI Gaming Alpha 15 B5EEK R7 5800H", price:"32.490.000", gift: "6.060.000", vote: "4.4", countvote:"31", img: "./assets/img/laptop/msialpha.jpg"},
    {name:"MSI Gaming GF65 Thin 10UE i5 10500H", price:"24.290.000", gift: "1.270.000", vote: "4.0", countvote:"5", img: "./assets/img/laptop/msigaminggf65.jpg"},
];
function render(){
    const htmls = listpc.map((pc, index) => {
        return `
        <div class="detail-product noshadow" data-index="${index}">
        <p style="visibility: hidden; background-color: #f1f1f1;" class="tragop" >Trả góp 0%</p>
        <div class="loadpicture laptop">
            <img src="${pc.img}" alt="">
            <div class="box-show-like">
                <div class="container-icon">
                    <i class="ti-plus"></i>
                    <i class="ti-shopping-cart"></i>
                    <i class="ti-heart"></i>
                </div>
            </div>
        </div>
        <p style="background:linear-gradient(to right,#3bacf0,#1b6dc1) ;" class="result-lable"><img src="./assets/img/icon2.png" alt=""><span>BỘ QUÀ GAMING</span></p>
        <h3>${pc.name}</h3>
        <p style="visibility: none; font-size:14px ; color: #666666; margin: 0px 0px 8px;" class="txt-note">Quà ${pc.gift} vnd</p>
        <p  class="price">${pc.price}<small>-13%</small></p>
        <p class="vote"><b>${pc.vote}</b> <i class="ti-star"></i>( ${pc.countvote} )</p>
    </div>
        `
    })
    box_pc.innerHTML = htmls.join("");
}
render();