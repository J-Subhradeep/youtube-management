[
  {
    title: "Tech Storm 2.23",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image:
      "./src/static/images/comments/316283970_450570717221604_8751096789457175564_n.jpg",
  },
  {
    title: "Tech Storm 2.23",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image:
      "./src/static/images/comments/316283970_450570717221604_8751096789457175564_n.jpg",
  },
  {
    title: "Tech Storm 2.23",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image:
      "./src/static/images/comments/316283970_450570717221604_8751096789457175564_n.jpg",
  },
  {
    title: "Tech Storm 2.23",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    image:
      "./src/static/images/comments/316283970_450570717221604_8751096789457175564_n.jpg",
  },
].map((value) => {
  document.getElementById("video-items").insertAdjacentHTML(
    "beforeend",
    `<div class="video-item">
    <div class="video-thumbnail">
        <img src=${value.image}
            class="video-thumbnail-image" alt="" srcset="">
    </div>
    <div class="video-details">
        <div class="video-title">${value.title}</div>
        <div class="video-description">${value.description}</div>
        <div class="video-reactions">
            <div class="likes">
                <span class="material-icons">
                    thumb_up_off_alt
                </span>
                <span>13k</span>
            </div>
            <div class="dislikes">
                <span class="material-icons">
                    thumb_down_off_alt
                </span>
                <span>623</span>
            </div>
            <div class="comments">
                <span class="material-icons">
                    chat
                </span>
    
                <span>1k</span>
            </div>
        </div>
    </div>
    </div>`
  );
});
