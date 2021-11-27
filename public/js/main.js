const selectEl = document.getElementById('mail-select');
const url = 'http://127.0.0.1:3000/cabinet/'


selectEl.addEventListener('change', (event) => {
  // console.log(event.target.value);
  window.location.replace(`${url}?q=${event.target.value}`)
  // const newSelectEl = document.getElementById('mail-select');
});

