let listapp =  [
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
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const box_seach = $('.box_seacher');
const box_return_seach = $('.containner-seach')
let cost_timkiem;
function seacher(){
    let seach_value = box_seach.value
    if(seach_value == ""){
        box_return_seach.innerHTML = "";
    }
    else {
        cost_timkiem = listapp.filter(value =>{
            return value.name.toLowerCase().includes(seach_value.toLowerCase())
          })
          const htmls = cost_timkiem.map((pc, index) => {
              return `
              <div class="product" data-index="${index}">
              <div class="thumb">
                  <img class="thumnal_seach" src="${pc.img}" alt="">
              </div>
              <div class="title-seach">
                  <h4>${pc.name}</h4>
                  <h3 style="color: red;">${pc.price}</h3>
              </div>
          </div>
              `
          })
          console.log(cost_timkiem)
          box_return_seach.innerHTML = htmls.join("");
    }
}