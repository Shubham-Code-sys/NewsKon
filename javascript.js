/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

/* image preview */

const inpFile = document.getElementById("inpfile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");

inpFile.addEventListener("change", function() {
    const file = this.files[0];

    if(file) {
        const reader = new FileReader();

        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";

        reader.addEventListener("load", function() {
            console.log(this);
            previewImage.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    } else{
        previewDefaultText.style.display = null;
        previewImage.style.display = null;
        previewImage.setAttribute("src", "");
    }
});

//radio buttons
var items = ["For You","Trending", "Local", "National", "International", "Sports", "Entertainment", "Health", "Financial", "Economy", "Tech", "Education"];
var items_group = document.getElementById("items-group");
var items_html = "";
for(var i=0;i<items.length;i++){
    items_html = items_html + "<input type = \"radio\" id=\"category\" name=\"category\" class =\"col-md-1 col-2 text-nowrap radio\">" +"<span class=\"col-md-3 col-10 radio\">" +items[i]+ "</span>";
}
items_group.innerHTML =items_html;