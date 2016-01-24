$(function() {
  $('.viewZoo').on('click', function (e) {
    var dataUrl = $(this).data('url');
    window.location.href = dataUrl;
  });

  $('.editZoo').on('click', function (e) {
    var dataUrl = $(this).data('url');
    window.location.href = dataUrl;
  });

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

  $('.zooHome').on('click', function (e) {
    window.location.href = '/zoos';
  });

  $('.thisZoo').on('click', function (e) {
    var dataUrl = $(this).data('url');
    window.location.href = dataUrl;
  });

  $('.newZoo').on('click', function (e) {
    window.location.href = '/zoos/new';
  });

  $('.newAnimal').on('click', function (e) {
    var dataUrl = $(this).data('url');
    window.location.href = dataUrl;
  });

  $('.viewZoosAnimals').on('click', function (e) {
    var dataUrl = $(this).data('url');
    window.location.href = dataUrl;
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

  $('.editAnimal').on('click', function (e) {
    var dataUrl = $(this).data('url');
    window.location.href = dataUrl;
  });

  $('.deleteAnimal').on('click', function (e) {
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
});