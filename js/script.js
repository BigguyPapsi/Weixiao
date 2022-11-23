var dl_mod = document.getElementById("download")
var url = document.getElementById("url-link")
var btn = [
    'https://cdn.discordapp.com/attachments/1044628437916192849/1044642556333539368/unknown.png',
    'https://cdn.discordapp.com/attachments/1044628437916192849/1044642650483085362/unknown.png'
]
dl_mod.addEventListener('mouseover', (event) => {dl_mod.src=btn[1]});
dl_mod.addEventListener('mouseout', (event) => {dl_mod.src=btn[0]});




// update link------------------------------------>

url.href = "https://cdn.discordapp.com/attachments/1031956188490911934/1043931122263920710/TS4LAO_NOTOSANLAO_BY_WEIXIAO.package";



$(function(){
    $("#fter").load("../component/footer.html"); 
  });

  $(function(){
    $("#progess").load("../component/progress.html"); 
  });

  $(function(){
    $("#about").load("../component/about.html"); 
  });

  $(function(){
    $("#install").load("../component/install.html"); 
  });