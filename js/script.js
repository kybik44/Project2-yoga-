window.addEventListener('DOMContentLoaded', function(){
'use strict';
//new DIV
class Options{
    constructor(height, width, bg, fontSize, textAlign){
    this.height,
    this.width,
    this.bg,
    this.fontSize,
    this.textAlign
    }

    createDiv(){
        let div = document.querySelector('div');
        document.body.appendChild(div);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        div.style.cssText = param;
    }
}
const item = new Options(300, 350, "red", 14, "center");

item.createDiv();





let infoTab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");
    



    function hideTabContent(a){
        for(let i = a; i < tabContent.length; i++){
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
        }
    }
    hideTabContent(1);

    function showTabContent(b){
            if( tabContent[b].classList.contains("hide")){
                tabContent[b].classList.remove("hide");
                tabContent[b].classList.add("show");
            }
    }

        info.addEventListener('click', function(event){
            let target = event.target;
            if(target && target.classList.contains("info-header-tab")){
            for(let i = 0; i < infoTab.length; i++){
                if(target == infoTab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                    }
                }
            }
        });



        let deadLine = "2020-11-21";

        function getTimeRemaining(endtime){
            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60)));

                return {
                    'total' : t,
                    'hours' : hours,
                    'minutes' : minutes,
                    'seconds' : seconds
                                };
        }

        function setClock(id, endtime){
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector(".minutes"),
                seconds = timer.querySelector(".seconds"),
                timeInterval = setInterval(updateClock, 1000);

                function updateClock() {
                    let t = getTimeRemaining(endtime);
        
                    function addZero(num){
                                if(num <= 9) {
                                    return '0' + num;
                                } else return num;
                            };
        
                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);
        
                    if (t.total <= 0) {
                        clearInterval(timeInterval);
                        hours.textContent = '00';
                        minutes.textContent = '00';
                        seconds.textContent = '00';
                    }
                }
            }


        setClock('timer', deadLine);

            //Modal

let popup = document.querySelector(".overlay"),
    close_button =  document.querySelector(".popup-close"),
    more = document.querySelector(".more");

            more.addEventListener('click', function(){
                popup.style.display = 'block';
                this.classList.add("more-splash");
                document.body.style.overflow = 'hidden';
            });

            close_button.addEventListener('click', function(){
                popup.style.display = '';
                more.classList.remove("more-splash");
                document.body.style.overflow = '';


            });

});

// Второе задание

// let age = document.getElementById('age');
 
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
 
// showUser.apply(age, ["Горький","Максим"]);