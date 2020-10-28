const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const user_location = document.getElementById("location");
const keyword = document.getElementById("keyword");
const form = document.getElementById("upload-form");
const sharing = document.getElementById("sharing-list");
const upload = document.getElementById("upload-link");
const id = document.getElementById("user-id");
const description = document.getElementById("description");
const message = document.getElementById("post-message");

// show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// close modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// hide modal on outside click
window.addEventListener("click", e => (e.target == modal ? modal.classList.remove("show-modal") : false));

function uploadMessage(link, description, userKeyword, userId, userLocation, sharingType) {
  if (link && description && userKeyword && userId && userLocation && sharingType) {
    message.innerText = "Your post was successfully submitted";
    message.style.color = "#4267b2";
    form.reset();
    return true;
  } else {
    message.innerText = "Your post was NOT successful";
    message.style.color = "#ff0000";
    return false;
  }
}

//  event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const sharingType = sharing.options[sharing.selectedIndex].value;
  const userId = id.getAttribute("name");
  const post_description = description.value;
  const link = upload.getAttribute("src");
  const userKeyword = keyword.value;
  const userLocation = user_location.value;

  uploadMessage(link, userKeyword, post_description, userLocation, userId, sharingType);

  console.log("user id: " + userId);
  console.log("sharing type: " + sharingType);
  console.log("description: " + post_description);
  console.log("link: " + link);
  console.log("keyword: " + userKeyword);
  console.log("location: " + userLocation);
});
