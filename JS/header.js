let header = document.querySelector("#header");
let rannum = Math.floor(Math.random()*4);
let imglist1 = ["배경 이미지0.jpg","배경 이미지1.jpg","배경 이미지2.jpg","배경 이미지3.jpg","배경 이미지4.jpg"];
header.style.backgroundImage = `url('./IMG/배경\ 이미지${rannum}.jpg')`;
// let nav = document.querySelector("#nav");
// nav.style.backgroundImage = `url('./IMG/배경\ 이미지${rannum}.jpg')`;