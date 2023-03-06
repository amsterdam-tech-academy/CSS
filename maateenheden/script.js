const bodyGrootte = document.getElementById('bodyGrootte');
const sizebody = document.getElementsByName("sizebody");
let gekozenGrootte='1em';
const wrapperSlider = document.getElementById('wrpr');
let sliderWaarde = wrapperSlider.value;
const wrapper = document.getElementById('wrapper');
const schaalUitvoer = document.getElementById('factor');
const herstel = document.getElementById('herstel');

veranderBody = () => {
  for(var i = 0; i < sizebody.length; i++) {
   if(sizebody[i].checked == true) {
       gekozenGrootte = sizebody[i].value;
       console.log(gekozenGrootte);
       document.body.style.fontSize = gekozenGrootte;
    }
  }

}
bodyGrootte.addEventListener('click', veranderBody);

schaalUitvoer.innerHTML = wrapperSlider.value;
var schalen = () => {
  sliderWaarde = wrapperSlider.value;
  schaalUitvoer.innerHTML = sliderWaarde;
  wrapper.style.fontSize = sliderWaarde+'em';
}
wrapperSlider.addEventListener('change', schalen);

var herstellen = () => {
  wrapperSlider.value = 1;
  schalen();
}
herstel.addEventListener('click', herstellen);
