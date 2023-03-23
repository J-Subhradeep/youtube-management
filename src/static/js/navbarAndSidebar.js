document.getElementById("nav-main").insertAdjacentHTML(
  "afterBegin",
  `<div class="icon-title">

<img src="../static/images/homepage/unnamed.webp" class="nav-icon" alt="" srcset="">
<span class="nav-title">Youtube Manager</span>
</div>
<div class="nav-routes" >
<div class="revenue">Manage Revenue</div>
<div class="viewers">Manage Viewers</div>
<div class="videos">Analyze Videos</div>
<div class="subscribers">Subscribers</div>
</div>
<div class="message-icon">
<span class="material-icons"
    style="color:#1a73e8;font-size: 2rem;text-shadow: 2px 2px 3px rgb(209, 209, 209);cursor: pointer;">
    chat_bubble_outline
</span>
</div>`
);
[
  { icon: "manage_accounts", text: "Manage Account" },
  { icon: "search", text: "Subscribers" },
  { icon: "logout", text: "Logout" },
].map((value) => {
  document.getElementById("sidebar-main").insertAdjacentHTML(
    "beforeend",
    `<div>
  <span class="material-icons">
      ${value.icon}
  </span>
  <h6>${value.text}</h6>
</div>`
  );
});
