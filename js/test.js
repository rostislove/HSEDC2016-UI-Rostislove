$(function() {
  var h1 = $("h1").first()
  var h2 = $("h2").first()

  if (h1.lenght && h2.lenght == 0) {

    console.log("h1 exist, h2 not exist");

  } else if (h2.lenght && h1>lenght == 0) {

    console.log('h2 exist, h1 not exist')

  } else if(h2.lenght && h1.lenght){

    console.log("h1 not exist")

  } else {
    console.log('elements not exist')
  }

});
