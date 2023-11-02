var mobailTriger = document.getElementById('mobailTrigger');


mobailTriger.addEventListener('click', menuOpen)
function menuOpen(eventtt){
    document.getElementById("mobailTrigger").classList.toggle("menuOpen");
    document.getElementById("contenerHeader").classList.toggle("menuOpen");            
    document.removeEventListener('click', checkMenu);
    setTimeout(dilayCheker,100)


    
}
function dilayCheker(){
    document.addEventListener('click', checkMenu);
}   
function checkMenu(eventx){
        
    if(eventx.target.classList.contains('menuMobail') == true){
        console.log('')
    }else if(eventx.target.classList.contains('menuMobail') == false){
        document.removeEventListener('click', checkMenu);
        console.log('');
        document.getElementById("contenerHeader").classList.remove('menuOpen');
        document.getElementById("mobailTrigger").classList.remove("menuOpen")
    }
 }

document.getElementById('marker1').addEventListener('mouseover', sliderMove);
document.getElementById('marker2').addEventListener('mouseover', sliderMove);
document.getElementById('marker3').addEventListener('mouseover', sliderMove);
document.getElementById('marker4').addEventListener('mouseover', sliderMove);
document.getElementById('marker5').addEventListener('mouseover', sliderMove);
document.getElementById('marker6').addEventListener('mouseover', sliderMove);
document.getElementById('marker1').addEventListener('mouseout', sliderOut);
document.getElementById('marker2').addEventListener('mouseout', sliderOut);
document.getElementById('marker3').addEventListener('mouseout', sliderOut);
document.getElementById('marker4').addEventListener('mouseout', sliderOut);
document.getElementById('marker5').addEventListener('mouseout', sliderOut);
document.getElementById('marker6').addEventListener('mouseout', sliderOut);

var slider = document.getElementById('slider');
var sliderRels = document.getElementById('sliderRels')
var  dilay = 4
document.getElementById('marker2').addEventListener('click',menuOpen);
document.getElementById('marker3').addEventListener('click',menuOpen);
sliderOutDilay()
function sliderMove(){
        clearTimeout(dilay)
        slider.style.marginLeft = `${Math.abs(this.offsetLeft) - Math.abs(sliderRels.offsetLeft)}px`;
        
        slider.style.width = `${this.offsetWidth}px`;            
        
    
}
function sliderOut(){    
    dilay = setTimeout(sliderOutDilay,1000)
    
}
function sliderOutDilay(){       
    slider.style.marginLeft = `${Math.abs(document.getElementById('marker1').offsetLeft) - Math.abs(sliderRels.offsetLeft)}px`
    slider.style.width =`${document.getElementById('marker1').offsetWidth}px`

}
document.addEventListener('DOMContentLoaded',startWidthSlider) ;

function startWidthSlider(){
    slider.style.width = `${document.getElementById('marker1').offsetWidth}px`;
}

var callBackMenu = document.getElementById('triggerCallBack');
callBackMenu.addEventListener('click', openCallBackMenu)

var triggerCallBack = document.getElementById('triggerCallBack');
triggerCallBack.addEventListener('click',openCallBackMenu);
document.getElementById('imgBack').addEventListener('click',openCallBackMenu);
function openCallBackMenu(){
    
    document.getElementById("contenerBordCall").classList.toggle('openCallBack');
    setTimeout(closeBord, 100)
    function closeBord(){
        window.addEventListener('click',closeOkno)
    }
    function closeOkno(eve){
        console.log(eve.target)
        if(eve.target.classList.contains('bordCall') == false){
        document.getElementById("contenerBordCall").classList.toggle('openCallBack');        
        removeEventListener('click',closeOkno)
        }
    }
    }
    document.getElementById('marker1').addEventListener('click',opendeliveryTop)
/*Моно окно*/
document.getElementById('delivery').addEventListener('click',openDelivery);


function openDelivery(){

    document.getElementById('modalFonDelivery').classList.toggle('modalActivDelivery');
    document.getElementById('deliveryContener').classList.toggle('modalActivDelivery');   
    document.getElementById('modalFonDelivery').addEventListener('click',openDelivery);
    document.getElementById('imgBackMonoD').classList.toggle('modalActivDelivery');
    document.getElementById('imgBackMonoD').addEventListener('click',openDelivery);
}


/*Слайдер фото*/
/*document.getElementById('buttonRight').addEventListener('click',slideRight);
document.getElementById('buttonLeft').addEventListener('click',slideLeft);*/
var step = 0;
var classPhoto = document.getElementsByClassName('slidsPhoto');
var arr = new Array;
var photo = document.getElementsByClassName('slidsPhoto');
var contenerTovarov = document.querySelector('#contenerTovarov');

function openMono(){
    step = 0;
    document.getElementById('monoFon').classList.toggle('monoActiv');
    document.getElementById('monoWindow').classList.toggle('monoActiv');
}
function photoActiv(startActiv){ 
    for(let i = startActiv;i<  startActiv+3; i++){
            photo[i].classList.toggle('photoActiv');
    }
}

var counterPrice = 0
var counterPrices = []

contenerTovarov.addEventListener('click',basket);

var timerTextCheck = false

function basket(event) {
    if(event.target.closest("button.inBasket")){
        var namePos = event.target.parentElement.childNodes[0].innerText;
        var mnojitel = event.target.id
        var div = document.createElement("div");
        document.querySelector('#basketTovars').append(div);
        var price = event.target.parentElement.childNodes[2].childNodes[1].innerText;
        price = Number(price)
        mnojitel = Number(mnojitel)
       
        counterPrice += price
        counterTovarov += 1;
        div.innerText = `${namePos}`;
        textGetElement()
        div.className = "positionTovars legal";
        document.getElementById('priceTotal').innerText = counterPrice +" р.";
        document.getElementById('counterTovarov').innerText = `${counterTovarov}`;
        var divUbratTovar = document.createElement("div");
        div.style.position = 'relative';
        div.style.width = '100%';        
        divUbratTovar.style.position = 'absolute';
        divUbratTovar.style.cursor = 'pointer';
        divUbratTovar.style.right = '0';
        divUbratTovar.style.bottom = '0';
        divUbratTovar.style.width = '20px';
        divUbratTovar.style.height = '20px';
        divUbratTovar.style.borderRadius = '12px';
        divUbratTovar.style.lineHeight = '20px'
        divUbratTovar.innerText = '−';
        divUbratTovar.style.textAlign = 'center';
        divUbratTovar.style.backgroundColor = '#FCAE1E';
        divUbratTovar.addEventListener('click',deletePos);
        divUbratTovar.id = `${price}`;
        divUbratTovar.className = 'legal';
        
        function deletePos(event){
            var priceMinus = Number(divUbratTovar.id)
            console.log(priceMinus)
            counterPrice -= priceMinus
            document.getElementById('priceTotal').innerText = counterPrice +" р.";
            counterTovarov -= 1;
            document.getElementById('counterTovarov').innerText = '✖';
            this.parentElement.remove()
            console.log(this.parentElement);
        }
        div.append(divUbratTovar);
        function textGetElement(){
            if(timerTextCheck == true){
                clearTimeout(timerText)
                timerTextCheck = false
            }else{
                timerText = setTimeout(closeText, 2000);
                timerTextCheck = true
            } 
            if(timerTextCheck == false){
                timerText = setTimeout(closeText, 2000);
                timerTextCheck = true;
            }          
            document.getElementById('textBee').classList.remove('closeText');
            document.getElementById('textBee').classList.add('beeActiv');      
            document.getElementById('textBee').style.padding = '5px';
            document.getElementById('textBee').style.border = '1px solid black';
            document.getElementById('textBee').textContent = `${namePos}`+'добавлен в вашу корзину'
            Bee.removeEventListener('click', openBasketBegin);            
            function closeText(){                
                document.getElementById('textBee').classList.add('closeText');
                document.getElementById('counterTovarov').classList.add('closeText');
                document.getElementById('counterTovarov').innerText = `${counterTovarov}`;
                Bee.addEventListener('click', openBasket);
            }
        }
    }
    if(event.target.closest("button.more")){           
        var startActiv = event.target.id;
        startActiv = Number(startActiv);
        step = 0;
        for(let x = startActiv; x <  startActiv+3; x++){
            arr.push(classPhoto[x]);
            classPhoto[x].style.opacity = '0';
        }
        arr[0].style.opacity = '1';
        arr[0].style.display = 'block';
        openMono();
        photoActiv(startActiv);
        document.addEventListener('click',checkMono)

        function checkMono(event){
            if(event.target.closest('#imgBackMono')||event.target.closest('#monoFon')){
                closeMono(startActiv);                
                arr[0].style.opacity = '0';
                arr[0].style.display = 'none';
                arr = []
                openMono(); 
                document.removeEventListener('click',checkMono)          
            }
            if(event.target.closest('#buttonLeft')){
                slideLeft();
                function slideLeft(){
                    arr.at(step).style.opacity = '0';
                    if(step == -(arr.length-1)){
                        step = 0;
                        arr.at(-step).style.opacity = '1';
                    }else{
                    step--;
                    arr.at(step).style.opacity = '1';
                    }
                    
                }
            }
            if(event.target.closest('#buttonRight')){
                slideRight();
                function slideRight(){
                    console.log(step)
                    if(step < 0){
                        step += arr.length
                    }
                    arr[step].style.opacity = '0';
                    if(step == arr.length-1){
                        step = 0;
                        arr[step].style.opacity = '1';
                    }else{
                        step++;
                        arr[step].style.opacity = '1';
                    }
                }
            }
        }
    }

}
 function closeMono(startActiv){
            for(let i = startActiv;i<  startActiv+3; i++){
                photo[i].classList.toggle('photoActiv');
        }
            
        }




/*Скрол подгрузка пчелы  И корзина*/
var pointsSkroll = 0;
var counterTovarov = 0;
var Bee = document.getElementById('Bee');
Bee.addEventListener('click', openBasketBegin)

window.addEventListener('scroll',cheakSkroll);
cheakSkroll()
function cheakSkroll(){
    pointsSkroll = window.pageYOffset;
    if(pointsSkroll >= 500){
        document.getElementById('basket').classList.remove("basketActivBegin");
        document.getElementById('animationContenerBee').style.right = '-10%';
        document.getElementById('animationContenerBee').classList.add('beeActiv');
        document.getElementById('textBee').classList.add('beeActiv');
        window.removeEventListener('scroll',cheakSkroll);
        setTimeout(textHelp, 2000)
        function textHelp(){
            
            document.getElementById('textBee').style.padding = '5px';
            document.getElementById('textBee').style.border = '1px solid black';
            document.getElementById('textBee').textContent = 'Я помогу вам собрать товары. Когда закончите выбирать, просто нажмите на меня.';
            Bee.removeEventListener('click', openBasketBegin);
            setTimeout(closeText, 5000);
            function closeText(){                
                document.getElementById('textBee').classList.add('closeText');
                document.getElementById('counterTovarov').classList.add('closeText');
                document.getElementById('counterTovarov').innerText = `${counterTovarov}`;
                Bee.addEventListener('click', openBasket);
            }
        }      
    }    
  };


function openBasketBegin(){
    document.getElementById('counterTovarov').classList.add('closeText');
    document.getElementById('basket').classList.toggle('basketActivBegin');
    if(document.getElementById('basket').className == 'basketActivBegin'){
        
        document.getElementById('counterTovarov').innerText = "✖";
    }else{
        document.getElementById('counterTovarov').innerText = `${counterTovarov}`;
    }
}
function openBasket(){
    document.getElementById('counterTovarov').classList.add('closeText');
    document.getElementById('basket').classList.toggle('basketActiv');
    if(document.getElementById('basket').classList.contains('basketActiv') == true){
        
        document.getElementById('counterTovarov').innerText = "✖";
    }else{
        document.getElementById('counterTovarov').innerText = `${counterTovarov}`;
    }
}
/*ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ МАГАЗИНА*/
var med = document.getElementById('positionMed');
var pil = document.getElementById('positionPilca');
var beeeCard = document.getElementById('positionPchels');
var optMed = document.getElementById('positionPodarok');

var medCard = document.getElementById('medCard');
var pilcaCard = document.getElementById('pilcaCard');
var beeCard = document.getElementById('beeCard');
var optCard = document.getElementById('optCard');

var cards = document.getElementsByClassName('cards');
cards = Array.from(cards);
console.log(cards);
for(var i = 0; i<cards.length; i++){
    console.log(cards[i] == medCard);
}

med.addEventListener('click', openCard);
pil.addEventListener('click', openCard);
beeeCard.addEventListener('click', openCard);
function openCard(event){
    /*222*/
    var offsetTopScroll = document.querySelector('#contenerTovarov').offsetTop;
    window.scrollTo(0, offsetTopScroll)
    var parent = event.target.parentElement.parentElement
    if(parent == med){
        for(var i = 0; i<cards.length; i++){
            if(cards[i] == medCard){
                cards[i].style.opacity = '1';
                cards[i].style.display = 'block';
            }else{
                cards[i].style.opacity = '0';
                cards[i].style.display = 'none';
            }
        }
    }else if(parent == pil){
        for(var i = 0; i<cards.length; i++){
            
            if(cards[i] == pilcaCard){
                
                cards[i].style.opacity = '1';
                cards[i].style.display = 'block';
            }else{
                cards[i].style.opacity = '0';
                cards[i].style.display = 'none';
            }
        }

    }else if(parent == beeeCard){
        for(var i = 0; i<cards.length; i++){
            if(cards[i] == beeCard){
                
                cards[i].style.opacity = '1';
                cards[i].style.display = 'block';
            }else{
                cards[i].style.opacity = '0';
                cards[i].style.display = 'none';
            }
        }

    }else if(parent == optMed){
        for(var i = 0; i<cards.length; i++){
            if(cards[i] == optCard){
                cards[i].style.opacity = '1';
                cards[i].style.display = 'block';
            }else{
                cards[i].style.opacity = '0';
                cards[i].style.display = 'none';
            }
        }
        
    }
}

document.getElementById('marker5').addEventListener('click',openCallBackMenu)
document.getElementById('marker5').addEventListener('click',menuOpen)
/*333*/

var sliderPhotoArray = document.getElementsByClassName('sliderAboutPgotos');
var firstSlideMargin =  1400;
setInterval(slidersMove,10000);
function slidersMove(){  
    console.log(firstSlideMargin)
    sliderPhotoArray[0].style.marginLeft = `${firstSlideMargin}`+"px"; 
    if(firstSlideMargin < 0){
        firstSlideMargin = 1400;
        sliderPhotoArray[0].style.marginLeft = `${firstSlideMargin}`+"px"
    }else{
        firstSlideMargin -= 740;
        sliderPhotoArray[0].style.marginLeft = `${firstSlideMargin}`+"px"
    }
}

document.getElementById('marker4').addEventListener('click', opendeliveryTop);
function opendeliveryTop(){
    window.scrollTo(0, 0);
    menuOpen()
}

var elems = document.body.getElementsByTagName("*");

for(let i=0;i<elems.length;i++){
    elems[i].classList.add('legal');
}
setInterval(deletEnemy,2500);
function deletEnemy(){
    for(let i=0;i<elems.length;i++){
        if(elems[i].classList.contains('legal') == false){
            elems[i].remove()
        }
}
}

document.querySelector('#contenerTovarov')