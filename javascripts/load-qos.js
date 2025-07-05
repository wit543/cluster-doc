document.addEventListener('DOMContentLoaded', function(){
  fetch('qos-policy-data.txt')
    .then(resp => resp.text())
    .then(text => {
      const pre = document.getElementById('qos-data');
      if(pre) pre.textContent = text;
    })
    .catch(err => console.error('Failed to load QOS data:', err));
});
