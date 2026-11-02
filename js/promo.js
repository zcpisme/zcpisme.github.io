/* 首页 banner 上的视频入口：只在首页注入 */
(function () {
  function inject() {
    var info = document.getElementById('site-info');
    if (!info || info.querySelector('.hero-promo')) return;

    var a = document.createElement('a');
    a.className = 'hero-promo';
    a.href = '/video/';
    a.title = '一分钟，看看这个博客在写什么';
    a.innerHTML = '<span class="hero-promo-play"></span><span>一分钟</span>';

    var social = document.getElementById('site_social_icons');
    if (social && social.parentNode === info) {
      info.insertBefore(a, social);
    } else {
      info.appendChild(a);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
  document.addEventListener('pjax:complete', inject);
})();
