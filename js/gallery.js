/*Name this external file gallery.js*/

function upDate(previewPic){  
    // Log the event trigger
    console.log("Mouseover event triggered!");

    // Log the alt and src attributes of the previewPic
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // 1. Change the background image of the div with id = "image" to the source file of the preview image
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // 2. Change the text of the div with id = "image" to the alt text of the preview image
    imageDiv.innerHTML = previewPic.alt;
}
   
function unDo(){
    // Log the event trigger
    console.log("Mouseout event triggered!");

    // 1. Reset the background image of the div with id = "image" back to the original value
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";

    // 2. Reset the text of the div with id = "image" back to the original text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}