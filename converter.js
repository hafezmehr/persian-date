//converts dates to Jalali (class="persian-date")
//the date should be styled as 2001, 11, 22 and placed in inner HTML part (inside the tag)
elements = document.getElementsByClassName("persian-date");
for (var i = 0; i < elements.length; i++) {
  item = elements[i];
  const date = new Date(item.innerHTML);
  item.innerHTML = Intl.DateTimeFormat("fa-u-ca-persian", {
    dateStyle: "short",
  }).format(date);
}

//converts numbers to Farsi (class="persian-digits")
elements = document.getElementsByClassName('persian-digits');
for (var i = 0; i < elements.length; i++) {
  elements[i].innerHTML = e2p(elements[i].innerHTML);
}
