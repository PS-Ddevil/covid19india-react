if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"617cf490d2b2d93802c9bc605a8fc52c","url":"404.html"},{"revision":"d7e31151dcd23401679d39e494612d6f","url":"blog/index.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"e1f0cf91c3c19dc35580d13ad3e01aa7","url":"fonts/Archia/archia-light-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"02155d96e4a3f18305ab944925389c77","url":"fonts/Archia/archia-regular-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e88f1cf30180bd74b3201844b0c03c69","url":"fonts/Archia/archia-thin-webfont.woff2"},{"revision":"617cf490d2b2d93802c9bc605a8fc52c","url":"index.html"},{"revision":"8b0f18538864712b498f4d7fcfa2cf4c","url":"precache-manifest.8b0f18538864712b498f4d7fcfa2cf4c.js"},{"revision":"8bf9f4a04624df685c16c7a85dabc32b","url":"static/css/11.93b3b32d.chunk.css"},{"revision":"86547ce84d7a4021c6930b8d6be7237f","url":"static/css/main.5518569f.chunk.css"},{"revision":"f623dd4cf13bf582c2a859ef6548abfd","url":"static/js/0.600b8344.chunk.js"},{"revision":"d3a2efe9377ff0dada0b1e6e1aab28d3","url":"static/js/1.655d34ae.chunk.js"},{"revision":"bc6518b4feacb03bd7e9b7d5e4c99ad0","url":"static/js/10.df31250d.chunk.js"},{"revision":"24ccf5eaa7359b44a3c0bbf42dfa5e61","url":"static/js/11.a7d3d8c8.chunk.js"},{"revision":"a7ccdb840f992ae3c5f69f3540419d6c","url":"static/js/12.22968508.chunk.js"},{"revision":"e589e243e05b3f3c4146d8ec7d33b23b","url":"static/js/13.26076852.chunk.js"},{"revision":"77dd99578b8154c3d8c98301b9040ed4","url":"static/js/2.d596e359.chunk.js"},{"revision":"70207e8178abd8c62b228b8f995c25eb","url":"static/js/About.19126428.chunk.js"},{"revision":"66b1b27da2ad0073414372dd1cebbdee","url":"static/js/Demographics.37105321.chunk.js"},{"revision":"5eaec77ff01568b89778a69b7793f3e2","url":"static/js/Essentials.c2b1f9f7.chunk.js"},{"revision":"6ff46f7520f55283791b271ef3f4cbea","url":"static/js/Home.40f54018.chunk.js"},{"revision":"ec1c482bee7907752fa8a5fc82251a3b","url":"static/js/main.11ad37d7.chunk.js"},{"revision":"104bd6fb30147652901b7295db821724","url":"static/js/runtime-main.a089bbab.js"},{"revision":"697b04e81b88e64b5c99c589d82ce624","url":"static/js/State.5c28af5a.chunk.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
