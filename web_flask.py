import crawler
from flask import Flask

app = Flask(__name__)

@app.route("/songs")
def list_all_songs(artist="A"):
    songs = crawler.get_all_songs(artist)
    output = []
    output.append(f"<h1>{artist}</h1>")
    output.append("<ul>")
    for i in songs:
        output.append(f"<li>{i[0]}</li>")
    output.append("</ul>")
    return "".join(output)

if __name__ == "__main__":
    app.run(port=6500) 