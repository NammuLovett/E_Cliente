let ul = document.getElementsByTagName('li');
for (let li of ul) {
  if (li.getAttribute('class') == 'carne') {
    li.style.color = 'red';
  } else if (li.getAttribute('class') == 'verdura') {
    li.style.color = 'green';
  } else if (li.getAttribute('class') == 'legumbre') {
    li.style.color = 'brown';
  }

  if (li.textContent == 'Remolacha' || li.textContent == 'Tomates') {
    li.style.fontWeight = 'bold';
  }
}
