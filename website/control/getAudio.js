$("#select_audio_button").on("click", function (e) {
    e.preventDefault();
    var userID = localStorage.getItem("userid");
    url = decodeURIComponent(location);
    const server = "http://localhost:5001/";
    bookname = url.split("=").slice(-1)[0];
    var number = $("#chapter_options :selected")
        .text()
        .split("-")
        .splice(-1)[0]
        .trim();
    var mp3 = "";

    $.get(
        server +
        userID +
        "/" +
        bookname +
        "/audio/" +
        number,
        function (res) {
            mp3 = res;
            console.log(res);
        }
    ).done(function () {
        $("#audio_container").empty();
        audioElement = document.createElement("audio");

        audioElement.setAttribute("src", mp3);

        audioElement.setAttribute("controls", "");

        $("#audio_container").append(audioElement);
    });
});
