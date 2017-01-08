(function(){
  function load(url){
    var el = document.createElement('script');
    el.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(el);
  }

  function init(){
    var tag = document.querySelector('[data-bl-src]');
    if(tag){
      var hash = tag.getAttribute('data-bl-hash');
      var hashChange = window.onhashchange;
      window.onhashchange = function(){
        if(document.location.hash === '#' + hash){
          load(tag.getAttribute('data-bl-src'));
        }
        if(typeof hashChange === 'function'){
          hashChange();
        }
      }
    }
    console.log("tag", tag);
  }

  init();
})();
