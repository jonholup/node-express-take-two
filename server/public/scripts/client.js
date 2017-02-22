console.log('sourced');
$(document).ready(function(){
  console.log('jquery here');
  $.ajax({
    type: 'GET',
    url: '/fish',
    success: function(response){
      console.log('response: ', response);
    }
  })
});
