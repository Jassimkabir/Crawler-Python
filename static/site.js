function main() {
  $.get({
    url: 'http://127.0.0.1:5000/artists',
    success: (data) => {
      list = '';
      data.forEach((element) => {
        list +=
          `<li class="artistbox" value=${element.id}>` + element.name + `</li>`;
      });
      tag = `<ul type="none">${list}</ul>`;
      $('div.artist_list').html(tag);
      // console.log(data);
    },
  });
  $(document).on('click', 'li.artistbox', function () {
    $.get({
      url: `http://127.0.0.1:5000/songs/${this.value}`,
      success: (data) => {
        list = '';
        data.forEach((element) => {
          list +=
            `<li class="songbox" id=${element.id}>` + element.name + `</li>`;
        });
        tag = `<ul type="none">${list}</ul>`;
        $('div.song_list').html(tag);
        // console.log(data);
      },
    });
  });
  $(document).on('click', 'li.songbox', function () {
    $.get({
      url: `http://127.0.0.1:5000/songs/${this.value}/lyrics/${this.id}`,
      success: (data) => {
        lyrics = `<pre><p>${data}</p></pre>`;
        $('div.lyrics').html(lyrics);
        // console.log(data);
      },
    });
  });
}
$(main);
