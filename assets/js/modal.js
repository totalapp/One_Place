function clique(img){
    var modal=document.getElementById('janelaModal');
    var modalImg=document.getElementById("imgModal");
    var captionTexto=document.getElementById("txtImg");
    var btFechar=document.getElementsByClassName("fechar")[0];

    modal.style.display="block";
    modalImg.src=img.src;
    modalImg.alt=img.alt;
    captionTexto.innerHTML=img.alt;

    btFechar.onclick=function(){
          modal.style.display="none";
    }}


    function local(){
	
	var otherCheckbox = document.querySelector ('entrada [valor = "outro"]');
var otherText = document.querySelector ('input [id = "otherValue"]');
otherText.style.visibility = 'oculto';

otherCheckbox.onchange = function () {
  if (otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
    otherText.value = '';
  } else {
    otherText.style.visibility = 'hidden';
  }
};
    }