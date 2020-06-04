// document.ready
$(function() {
  console.log( "ready!" );
  $.ajax({
    url: '',
    method: 'GET'
  })
    .then(res => {
      console.log(res);
    })
    .catch(e => console.log(e))
});