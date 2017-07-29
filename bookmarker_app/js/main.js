document.getElementById("myForm").addEventListener("submit",saveBookmark);

function saveBookmark(e){
  // Get form values
  var siteName = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteUrl").value;
  console.log(siteName);

  var bookmark = {
    name:siteName,
    url:siteUrl
  }

  // Prevent form from submitting
  e.preventDefault();
}
