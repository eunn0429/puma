var $ham = document.querySelector("#header .mypage ul li:nth-child(4)");
var $menu = document.querySelector("#header .menu");

$ham.addEventListener("click", function(e){
  e.preventDefault();
  
  var activeMenu = $menu.classList.contains("active");
  if(!activeMenu == true){
    $menu.classList.add("active");
  }else{
    $menu.classList.remove("active");
  }
});


var product = document.querySelector("#new ul");

var prod_arr = [
    ["newArrivalBg.jpg", "Products Launch", "Stay in the know with the latest drops and upcoming launches, plus early access to PUMA exclusives. Catch it here first."],
    ["new_01_01.jpg", "KING Platinum 21 FG/AG", "Men's Soccer Cleats"],
    ["new_02_01.jpg", "FUSE", "Training Shoes"],
    ["new_03_01.jpg", "Suede RE.GEN", "Sneakers"],
    ["new_04_01.jpg", "Leadcat", "G Sandals"],
    ["new_05_01.jpg", "COOLADAPT", "Women’s Running Tank Top"],
    ["new_06_01.jpg", "Sonora Waist", "BAG 2.0"],
    ["new_07_01.jpg", "High Court Regal Mid", "Women's Sneakers"],
    ["new_08_01.jpg", "Cali Star Rainbow", "Women's Sneakers"],
    ["new_09_01.jpg", "RS-Z Red", "CAMPUS"],
    ["new_10_01.jpg", "MB.01", "BUZZ CITY"],
];

var insert = "";

for( v of prod_arr ){
    insert += `
    <li>
        <img src="./img/products/${v[0]}" alt="">
        <div class="bg"></div>
        <div class="txt">
            <h3>${v[1]}</h3>
            <p>${v[2]}</p>
            <span>More</span>
        </div>
    </li>
  `;
}



product.innerHTML = insert;

var product2 = document.querySelector("#match ul")

var prod_arr2 = [
    ["category_01.jpg", "EVERYDAY", "BEST FOR: A RUN HERE AND THERE."],
    ["category_02.jpg", "COMPETITIVE", "BEST FOR: CHASING THE NEXT RACE."],
    ["category_03.jpg", "LONG DISTANCE", "BEST FOR: RACKING UP THE MILES."]
];

var insert2 = "";

for(v of prod_arr2){
    insert2 += `
        <li>
            <div class="img">
                <img src="./img/${v[0]}" alt="">  
            </div>
            <div class="txt_box">
                <div class="txt">
                    <h3>${v[1]}</h3>
                    <p>${v[2]}</p>
                    <span>Shop Now</span>
                </div>
            </div>
        </li>
    `;
}

product2.innerHTML = insert2;


var product3 = document.querySelector("#col ul")

var prod_arr3 = [
    ["collection_01.jpg", "SOFT ON ANOTHER LEVEL", "CLOUDSPUN"],
    ["collection_02.jpg", "ESCAPE FROM ROUTINE", "BPUMA x HELLY HANSEN"],
    ["collection_03.jpg", "EMPOWERED PEOPLE. CLEANER PLANET.", "PUMA x FIRST MILE"]
];

var insert3 = "";

for(v of prod_arr3){
    insert3 += `
        <li>
            <div class="img">
                <img src="./img/${v[0]}" alt="">  
            </div>
            <div class="txt_box">
                <div class="txt">
                    <h3>${v[1]}</h3>
                    <p>${v[2]}</p>
                    <span>Shop Now</span>
                </div>
            </div>
        </li>
    `;
}

product3.innerHTML = insert3;
