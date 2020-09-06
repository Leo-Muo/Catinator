let filename = [
  "cat0.jpg",
  "cat1.jpg",
  "cat2.jpg",
  "cat3.jpg",
  "cat4.jpg",
  "cat5.jpg",
];

let imgs = document.getElementsByTagName("img");

for (imgElt of imgs) {
  let ran = Math.floor(Math.random() * filename.length);
  let file = "kittens/" + filename[ran];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
}
