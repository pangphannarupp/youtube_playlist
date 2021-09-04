'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5346b361b5de429ff0c89a43bb7e65e0",
".git/config": "82aa3de45bd47404458b53c0977c8456",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "769c71a86686fab03533aaa1f963def5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb3a9bdd34cd61351fdc1676a76f675f",
".git/logs/refs/heads/main": "989d5e7f08cefc252904b8ddf9e54a49",
".git/logs/refs/remotes/origin/main": "526469a1c2e0d3d43f1fa87a23e2a01d",
".git/objects/00/cea764325dbe8fcc79d26fa6fbc3c9d277cf41": "34fa012ba53e986049a3ac65e472a4f5",
".git/objects/02/702efbc3ce452462f8fff83d960102e30bbb34": "0117bdb6552198becc70e1c1cb319e91",
".git/objects/06/859d82a40a384cfcb08e6b92afcfec3a35eb1c": "d30f02fac4bfbd3fd41d3871d71f46c5",
".git/objects/07/1bdfadfb6fdad08c7e80b6e2c075b037c825ad": "02ffad719ba398d22422c628660fb4e7",
".git/objects/07/e4163c6b482df82305f89a9550c2327da1985c": "466455a9e830090ccc57fb72fc5c3bbe",
".git/objects/0b/7b07e6d2e2d9cb36121ebc14770f79b940bfd0": "a4aaf2c29ea0744c196ac269fabac52f",
".git/objects/19/793594a94c90d75da840079cb8b82c5937bc2f": "e5931548b9e75c99670e5c04842bc82a",
".git/objects/22/01756717fb786166a6ecdc85e8f6a53ebf7f8f": "76a4991b10d62aeff5be5a9b23e30066",
".git/objects/25/754fcd319a5b1013b9bef01e51935b89eb9c4e": "076b9d1184448d7044991a4909613877",
".git/objects/27/e86a8f5d4e4be424a8fa77625088b420c3bb8d": "91bd0990b6518c0026ec1bc6afef9ba9",
".git/objects/29/6091c957f2de398ea584a324fbb241d3d120f5": "a6a20dd7619bc767302da90346cd1fd8",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/29/d58011e16b62cfe1d54724fcec88969e3da407": "6c7252e7ef9d6e228f168d6eeea77290",
".git/objects/2b/47e2ad12d44469c035aaae082d536cd0b2e78f": "2afec324307d53bd9f84577ca76170f5",
".git/objects/2b/86cba5edbd2b64dacfd56ead855c0fd937b5c3": "e3cbab1265a2e9a5b0a59096d4574690",
".git/objects/30/04bcdd6534a5876aca16d48c7b16778c8b353d": "da80fe9bdc00753837b2a67f0b5b055e",
".git/objects/30/f1e6acfdeee9573df494ebe2fdab06128d11b7": "b2052d358a98ff1a2be60c9c71152bfc",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/10500786e15786a57d68aa30ce885e9480f819": "9add3f592c136980213772a9bdd69ed2",
".git/objects/33/7ccb005d66da4ba67fe5301da3fb366b83c99b": "89f07b758d225e0237722d0d68435b0a",
".git/objects/36/2ea072c7818cbe01d424db918189c0515a7692": "2059e4ad54571a0d3bd0563c4eabf0b4",
".git/objects/37/11ad30feda759dd17ddf82eac6f0ac011c63e1": "b2ef9e4ad74aed37e464385fb3ea1d16",
".git/objects/39/8745a60d7d3599cb7c3d58c38580fbe6959b0a": "630718908d708df00d370d625cc3bd88",
".git/objects/3d/a217a7559bc4920430638db75aebfc72eaceca": "2f670a8af5855d34e3494c7455e395d1",
".git/objects/40/e5a3d57d5a6849e4e608b64eae0a93385ad336": "7357a9101c8754e7cb012d7bc8df9368",
".git/objects/43/c407d4684edb2180811939a97b1b9b5363353a": "53d39607fdf5f4a763d2a0c6594f666e",
".git/objects/44/b165b520b811767b3e86104ae4d6f99401353a": "f5821e3fd01dc7e0d10343eda390ea3c",
".git/objects/45/60f5f28ef4c6b08b295bd5d9451997274313bf": "f2b5566e84969a97f27f1ecc259a53c9",
".git/objects/47/83def8d93c89659eac5f5c5b67b26e09f496fb": "4619993ed08ae1524a4cfb8db5cf833c",
".git/objects/48/2ca8efca63d2f52b9d73068534fe2e3f4ab558": "75bf99af6da466cac2f4f40a5e9f996f",
".git/objects/4b/ff848e899aa8a6a17f5b8528a9c23932d4ad8a": "5d9532ca305a8e6a6ad9c203b852373e",
".git/objects/4c/24a95092ed7fd31ed6a9ca55566fa86210286e": "8c5785a656ca83c6cd26236af573b7f9",
".git/objects/52/c401553fc3327c8f8993706c3081020165d0dc": "a4901d71d7c7274b3d649db3ae17bfb0",
".git/objects/5b/93d500b9e5bb6ca1ac3b29160eb0b06902657e": "47530d4c7705356a7b6798a3efc49edf",
".git/objects/60/0921a24c3eadf20115e7058672d2610ea9253e": "daa105086d034d03e3e559666589e4af",
".git/objects/70/aa77eb24b8682a018737513b3c05046fc0f741": "9c3a4095810aa9619ab8210652179009",
".git/objects/73/a265e8c5754b8cdb9e354d5e57a5e762cbff7c": "8a2e17c12be0c9dfa8ee86cfaaa86a6d",
".git/objects/78/6ab136e2ee558622cad49e9c0442f62b872e6b": "f4680d497db116337afc5e8cfebfbdeb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/bebe4fce68743f027d3464c58f73b348a1cfd1": "c3f8d9543c48a578ebfe1bd883307f9f",
".git/objects/81/12ef0aadeace368c2e22841418f17d3f506774": "627e8f392bba0fd9536d4cb8d12092c6",
".git/objects/85/6154d1605bdebc9d342448f91b46b7d48a53fe": "f70d7f9373c8a1af92f6f17140426a9a",
".git/objects/86/75c5a095b48d2548c9573c36ba9fe11bf0152e": "6e199f918b4f95755a504f8049255ab3",
".git/objects/90/ba5bb35fbdc0cbce3a8b86b73d98c3552fb5b3": "252e07d813d73fcf66a7ed1cb0153625",
".git/objects/91/027be8810924fa23b47ea79e00db6a8249a891": "4eb2ac03b1977e68cf3dff7ac95db74d",
".git/objects/93/abc987998d48558ff27d19faf56377b0a7a591": "dd2107f339896d825ecdd35767510bb6",
".git/objects/9a/02bc6d2a62b235485000b02fd03fa1b92498c2": "7ec2f0ce62219c8c7795cbe73c806e4b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/c8dff56da0a696ab53892a8002a5179684a756": "91ab98d4d7f0a1a6c188866849994210",
".git/objects/a6/4f85d30c1c8c4a566bcbacd5e3e71ffca6bb5e": "4e82e176a1f8c1d6c363025ee6bbaf4b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/c2caf8f302b4f658a7207c0665f30e1f2b3e6d": "5b7f63d4321915d42368dd3d84c0bdfb",
".git/objects/bb/867e166af074217eb8f33ffeba580f06da93ef": "53af677fd18ed2f5c462c38d0baca613",
".git/objects/bc/12341432f0d86b548b86f566ddc4a9d17aa0ec": "79ea11978adc1090949379c5367af61b",
".git/objects/c1/1ce66d800c2edda8435540141fde6b988f5dcf": "87c82f7b871a6c11765cf371dafcce4c",
".git/objects/c3/72a8e3e8d32989d72db0281c37f2b737f4b970": "13cfb824032693ee3a21ff622fc297cd",
".git/objects/c6/4a6a3c919b9d4a53c4038c4067d93067449166": "15b8bda66c8cc22cb47f831abdd9f775",
".git/objects/d2/969e157847851765fbe4bff3b00847474d6a2b": "657fa475e4e323b2dca10498f8cd1854",
".git/objects/d5/3992514b2696ce7b3d14a4996ee3b8769a4c28": "46abb7ea3d2bf876246ab6b2415415e4",
".git/objects/d8/e9999a07a7dc3cc4a46ff8de43b85312706fec": "2a61a7f54328c4acff2c2e7525312a71",
".git/objects/d9/8a56a130bbf9a40f0d72e0a22ea82b5a10728f": "4cbf6794e95177a5b6d49db576e4bb34",
".git/objects/db/46bb688e9ee316f6dcbde8735c9b1ed2814b79": "8cc6dbb95c0ceb3da67c332398c9f32e",
".git/objects/dc/6b0eab4b00ebd6ac04f4101224347c5cccf171": "016b3731be9ccec538a86615b51fbd52",
".git/objects/dc/6e46f8d3aad2ccbf0dd18d73f3255ec02a9d72": "1a3d8e0e0d8e6a7b6af454618f728e0e",
".git/objects/de/2588b153be009dbe99c0dedf3768b97b1a5e21": "9558d1428e84b90e54faaef4d9bab4ea",
".git/objects/df/245f79dd7a78b06b7984319910aaa2c70ae366": "5e19b739734806946901ce00102d9654",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/da0adb56ef50b074673b65cec842ab80ba966f": "c0b3165916a8cf01a9950c6223881594",
".git/objects/e8/0c5bcf8f87cec6733070152f13f3efe056cd87": "41b7f74796ca19a876e2a2535903865b",
".git/objects/f3/e91f6188a4f182cb43b031b4705250c88d4c64": "47c311084a6193a7c886bb11dc58d7e2",
".git/objects/f3/f19952bab1ed6ec4535137d63f67cee90359ae": "c2c2aa75f7fd0cbf7f87d1ea0647b37a",
".git/objects/f4/2fae0ab40340036a1b214f09d0fac63484451a": "14be533dc2516acfb8fca70eb341ec50",
".git/objects/f5/36123356b234233abc73b972c3feb29df9a0d5": "155805f6bacffd18a74882cfc39a0342",
".git/objects/f8/807fdc056b119815e5a7700b2f1e0b4d94add1": "6d88ff7fd6061b72fe3f791804f8a43f",
".git/objects/fa/7cb6814e1c4dbd081860ca3dc32862eb7c9e2e": "ab39201b29fd41b2b550124a68f644eb",
".git/objects/fd/06b0ee653b0fa14aebd2324be3a6eb0337c22e": "e71a62e5de9cf5be8292776151665a8d",
".git/objects/fe/83b1bc58dd378a1ffa23f08d970918e1441224": "ee4bc883101e4f53b3884bdc322c76af",
".git/refs/heads/main": "831a6914a9c49893d978f6cb2ab09eeb",
".git/refs/remotes/origin/main": "831a6914a9c49893d978f6cb2ab09eeb",
"32518329485bf78ad0a46a3841e20802.html": "f0bec49ad53c33e24ff6b0de2914bef2",
"assets/AssetManifest.json": "65493dcf0163a561d7b2cff4d9f933c2",
"assets/assets/fonts/KHMMOOL1.ttf": "2bdfb26ca7c50733b046a58739fce996",
"assets/assets/fonts/OpenSans.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/Siemreap.ttf": "01a09003da4063952afa7734f4f393af",
"assets/assets/images/example.png": "9e718c6394ea643b9c3659c45eb4b60f",
"assets/assets/images/facebook.jpg": "e78b8801fec15b36530841424b13057d",
"assets/assets/images/flag-english.png": "7329dc1b4637cffb56a1c3033f18778b",
"assets/assets/images/flag-khmer.png": "948a0fe85ddd04f3dd1309a7a483738d",
"assets/assets/images/google.jpg": "d0991539b51f1520c42d1dee04ba0faa",
"assets/assets/images/icon.png": "fbfe90f885ce28edfa37961b85f24eca",
"assets/assets/images/image-not-found.png": "0de1b5aaad52d2881b6c20a5102cfe5d",
"assets/FontManifest.json": "450e14af9f5ddc3a81ed2947b3f61d65",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "73c8a3cd63cf611695c88d96f616c48f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "f1095919ecb180593583f42bfdd705fc",
"icons/Icon-192.png": "a0cf893020aa0f39e86cb1ee23155309",
"icons/Icon-512.png": "8fa337c6863dc6490fdb5e5a1c48b21a",
"index.html": "33e65096ad7ed92a084582bcd42f6632",
"/": "33e65096ad7ed92a084582bcd42f6632",
"main.dart.js": "6a3ca3b17986d5a2e5d6bd0e7ceee8c2",
"manifest.json": "385c569a9e1b26853d9d8a2491841759",
"version.json": "169300a737cdfc6f9ef8e25b16cb072a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
