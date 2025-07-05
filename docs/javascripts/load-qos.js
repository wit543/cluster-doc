document.addEventListener('DOMContentLoaded', function () {
  const pre = document.getElementById('qos-data');
  if (!pre) return;

  const url = pre.dataset.url || 'qos-policy-data.txt';

  fetch(url)
    .then(resp => resp.text())
    .then(text => {
      pre.textContent = text;
    })
    .catch(err => console.error('Failed to load QOS data:', err));
});
