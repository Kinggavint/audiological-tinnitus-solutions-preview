// Mobile nav toggle
(function(){
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  if (!header || !toggle) return;
  toggle.addEventListener('click', function(){
    var open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Close on link click
  header.querySelectorAll('.primary-nav a').forEach(function(a){
    a.addEventListener('click', function(){
      header.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
