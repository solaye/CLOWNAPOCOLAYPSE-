$(".delete").on("click",function(){

  var id = $(this).parents("tr").data("id");
  
  $.ajax({
  
  method: "DELETE",
  url: `/api/carts/${id}`
  
  }).then(function(){
  
  location.reload();
  
  });
  
  });
  