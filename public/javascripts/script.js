$(function() {

  $('.deleteZoo').on('click', function (e) {
    var dataUrl = $(this).data('url');
    $.ajax({
      url: dataUrl,
      method: "DELETE",
      success: function (e) {
        $(this).parent().remove();
        window.location.reload();
      }
    });
  });

  $('.viewZoo').on('click', function (e) {
    var dataUrl = $(this).data('url');
    window.location.href = dataUrl;
  })

  $('.editZoo').on('click', function (e) {
    var dataUrl = $(this).data('url');
    window.location.href = dataUrl;
  });

  $('.zooHome').on('click', function (e) {
    window.location.href = '/zoos'
  });

  $('.newZoo').on('click', function (e) {
    window.location.href = '/zoos/new';
  });

  $('#deleteButton').on('click', function (e) {
    var dataUrl = $(this).data('url');
    $.ajax({
      url: dataUrl,
      method: "DELETE",
      success: function (e) {
         window.location.href = "/zoos";
      }
    });
  });


})