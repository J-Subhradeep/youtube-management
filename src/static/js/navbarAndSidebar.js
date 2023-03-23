document.getElementById("nav-main").insertAdjacentHTML(
"afterBegin",

/*html*/ `<div class="icon-title">


  <img src="./src/static/images/homepage/unnamed.webp" class="nav-icon" alt="" srcset="">
  <span class="nav-title">Youtube Manager</span>
</div>
<div class="nav-routes">
  <div class="revenue">Manage Revenue</div>
  <div class="viewers">Manage Viewers</div>
  <a href="./comments.html" class="comments3">Analyze Comments</a>
  <a href="./subscribers.html" class="subscribers">Subscribers
</a>
</div>
<div class="nav-routes2">


  <span class="material-icons">
    attach_money
  </span>
  <span class="material-icons">
    preview
  </span>
  <span class="material-icons">
    play_circle_filled
  </span>
  <span class="material-icons">
    groups
  </span>


</div>
<div class="message-icon">
  <span class="material-icons" style="color:#1a73e8;text-shadow: 2px 2px 3px rgb(209, 209, 209);cursor: pointer;">
    chat_bubble_outline
  </span>
</div>`
);
[
{ icon: "manage_accounts", text: "Manage Account" },
{ icon: "search", text: "Subscribers" },
{ icon: "logout", text: "Logout" },
].map((value) => {
if (document.getElementById("sidebar-main"))
document.getElementById("sidebar-main").insertAdjacentHTML(
"beforeend",
`<div>
  <span class="material-icons">
    ${value.icon}
  </span>
  <h6>${value.text}</h6>
</div>`
);
if (document.getElementById("footer-main"))
document.getElementById("footer-main").insertAdjacentHTML(
"beforeend",
`<div>
  <span class="material-icons">
    ${value.icon}
  </span>
  <h6>${value.text}</h6>
</div>`
);

});
