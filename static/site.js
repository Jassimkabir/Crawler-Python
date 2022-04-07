function main() {
  $.get({
    url: 'http://127.0.0.1:5000/artists',
    success: (data) => $('div.artist_list').html(data),
  });
}

$(main);
