const add = require('add.js');
const edit = require('edit.js');
const read = require('read.js');
const remove = require('remove.js');

let pokemon
console.log("Sanity Check: JS is working!");

$(document).ready(add, function(){
  $("button").click(function {
    $(this).append(pokemon)
  })
});

$(document).ready(edit, function() {
  $("button").click(function() {
    $(this).html(pokemon)
  })
})

$(document).ready(read, function() {
  $("button").alert(function() {
    $(*).html(pokemon)
  })
})

$(document).ready(remove, function() {
  $("button").click(function() {
    $(this).html(pokemon)
  })
})
