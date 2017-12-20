const add = require('add.js');
const edit = require('edit.js');
const read = require('read.js');
const remove = require('remove.js');

let pokemon
console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $("button").click(add, function {
    $(this).append(pokemon)
  })
});

$(document).ready(function() {
  $("button").click(edit, function() {
    $(this).html(pokemon)
  })
})

$(document).ready(function() {
  $("button").alert(read, function() {
    $(*).html(pokemon)
  })
})

$(document).ready(function() {
  $("button").click(remove, function() {
    $(this).html(pokemon)
  })
})
