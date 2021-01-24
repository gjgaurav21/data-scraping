function data(){
var arr =[];
var publication_date = document.getElementsByClassName("col-sm-6 lbl-licitacao")[0].innerText;
var bidding_date = document.getElementsByClassName("col-sm-6 lbl-licitacao")[3].innerText;
var object_data = document.getElementsByTagName("p")[0].outerText;
var links = document.getElementsByTagName("tbody")[0].getElementsByClassName("field field--name-field-icone field--type-image field--label-hidden field__item")[0].children[0].href;
arr.push(publication_date);
arr.push(bidding_date);
arr.push(object_data);
arr.push(links);
return arr;
}

var arrays = data();
arrays;
