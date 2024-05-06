const CACHE_NAME = "my-site-cache-v1";
const urlsToCache = ["/"];
const staticAssets = [
  "/", // Initial page
  "/app",
  "/create",
  "/entries",
  "/static/styles.css",
  // Add other static assets
];
self.addEventListener("install", (event) => {
  console.log(event.request);
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache:", cache);
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log(event.request.url);
  console.log(matcher);
  const matcher = event.request.url.split(":")[1].split("/");
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log(response);
        return response; // Serve from cache if available
      }
      return fetch(event.request); // Fallback to network
    })
  );
});
