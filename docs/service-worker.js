/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "40a3aceb36ac715bd79dd10bc74a1a25"
  },
  {
    "url": "api/cli.html",
    "revision": "095b848596727880b08a4cfbe62a1759"
  },
  {
    "url": "api/node.html",
    "revision": "f2633a3272f57470d87e3d5eebf46089"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/1.9-lang.png",
    "revision": "9a95306985d4954fe54bc8de5512d3ba"
  },
  {
    "url": "assets/1.9-official-plugin-options.png",
    "revision": "55243b507656a5c36b45b7d4b27c1cab"
  },
  {
    "url": "assets/1.9-official-plugin-tuple-usage.png",
    "revision": "252870643841d8bac56aac10d1a9d91f"
  },
  {
    "url": "assets/1.9-overview.png",
    "revision": "f3534cdf12b0474265fd296bdc82c225"
  },
  {
    "url": "assets/css/0.styles.3fdd1483.css",
    "revision": "90eb51c21499bd899d1bbd5ce923f27e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c723112e.js",
    "revision": "0426774b4165b4f20a2538b3caf5ac63"
  },
  {
    "url": "assets/js/100.5d9fd5e2.js",
    "revision": "e55b96cc79c2ebebdbfea1858a8128cf"
  },
  {
    "url": "assets/js/101.7e0b9e1d.js",
    "revision": "c2a9984d417870151b4a9b9d5e67e352"
  },
  {
    "url": "assets/js/102.b89d1311.js",
    "revision": "6158f54f44ae3521c67439507d8356e5"
  },
  {
    "url": "assets/js/103.3620e13b.js",
    "revision": "80043aacb0fd50d1e7a866feeebedc45"
  },
  {
    "url": "assets/js/104.9418db12.js",
    "revision": "77cec25338ff8042852da25a913cd11c"
  },
  {
    "url": "assets/js/105.0601db7a.js",
    "revision": "ca7e07e29b5eb8d928a6b23c71c8b32b"
  },
  {
    "url": "assets/js/106.9f61a19d.js",
    "revision": "123e750800d041f47eefd183aaddeddf"
  },
  {
    "url": "assets/js/107.b92a7cde.js",
    "revision": "a3fb0affe8e940d8b1d20527fb8d9df3"
  },
  {
    "url": "assets/js/108.124e7478.js",
    "revision": "5c7daa5c510549470e07d8490fef09e5"
  },
  {
    "url": "assets/js/109.0f35bbc5.js",
    "revision": "2ef31f1a806c6ed9690e3be1b305b86d"
  },
  {
    "url": "assets/js/11.acc03b19.js",
    "revision": "5716dfea8a3cc72828af0c91b937e8b2"
  },
  {
    "url": "assets/js/12.ebe816f8.js",
    "revision": "829b4bac5ba524326492fa5610e91c5c"
  },
  {
    "url": "assets/js/13.9ccb5208.js",
    "revision": "b8d8158a549031791f01af7584338c72"
  },
  {
    "url": "assets/js/14.3a1bcdb2.js",
    "revision": "0087ebbe2b9c210b056d32a0fbdd3bf2"
  },
  {
    "url": "assets/js/15.1cbbfbba.js",
    "revision": "85253ca6957a17c62ae2565c818c2c30"
  },
  {
    "url": "assets/js/16.b729e678.js",
    "revision": "de112004b1e6367080f0d4f5fb42aec7"
  },
  {
    "url": "assets/js/17.6480b94f.js",
    "revision": "9d995d17c039da66155272aee62cda3e"
  },
  {
    "url": "assets/js/18.edded53b.js",
    "revision": "4ae1fce516b47a52abc5b36717743c7b"
  },
  {
    "url": "assets/js/19.ee59c02b.js",
    "revision": "4d544718422263eb9836e6d0a50ba63f"
  },
  {
    "url": "assets/js/20.3f50908b.js",
    "revision": "354df8dd1993e24c6b9f58594e3faae3"
  },
  {
    "url": "assets/js/21.ffe0eb4a.js",
    "revision": "dbc149583177d2c968c9a0fb7b8b939f"
  },
  {
    "url": "assets/js/22.20f405e9.js",
    "revision": "d542f0addf3cace6d44db0da3a3bf4cc"
  },
  {
    "url": "assets/js/23.9442e1d1.js",
    "revision": "a38b165acc9960d43b923de42942d303"
  },
  {
    "url": "assets/js/24.3b03a08b.js",
    "revision": "abb74644996d9a40ae1d02b6a90138d8"
  },
  {
    "url": "assets/js/25.be519be9.js",
    "revision": "5ebbf4ea90b31b567fb167de342d13ce"
  },
  {
    "url": "assets/js/26.4b1f65fe.js",
    "revision": "d3dbf79c6bd99704dea40550979b9fcf"
  },
  {
    "url": "assets/js/27.b06f2f27.js",
    "revision": "7379884f1635b8e61710af51fdaa307d"
  },
  {
    "url": "assets/js/28.6ac32789.js",
    "revision": "cbc2fb47d4c03b349b92ed88471c9ac9"
  },
  {
    "url": "assets/js/29.c75c0ca8.js",
    "revision": "553e534ba9e9db54a83f67cd467c4e6e"
  },
  {
    "url": "assets/js/30.384ed879.js",
    "revision": "f3f6f4caf5b7eb00fa2a20c756368023"
  },
  {
    "url": "assets/js/31.eadb12e3.js",
    "revision": "ea388b9880da95eb2d5e4da03e70c678"
  },
  {
    "url": "assets/js/32.5acf4fa1.js",
    "revision": "3f7cd1f69101561883cad805ba2fe300"
  },
  {
    "url": "assets/js/33.62528f14.js",
    "revision": "d03a7601ab5a109a3b24b43dee772e30"
  },
  {
    "url": "assets/js/34.10700b98.js",
    "revision": "c1397d984d8b63b3f87718efe01937c8"
  },
  {
    "url": "assets/js/35.2ce9b906.js",
    "revision": "b7f9859a06941f1a6155760271cd44ab"
  },
  {
    "url": "assets/js/36.98ab37bf.js",
    "revision": "21085c58191300dd1a58e82cb46ba309"
  },
  {
    "url": "assets/js/37.dc014c5e.js",
    "revision": "cebf8de5f1b23a7ce861efaca6647aae"
  },
  {
    "url": "assets/js/38.1cafb8b3.js",
    "revision": "20b5044ab20e0e5b037a44c142e8859f"
  },
  {
    "url": "assets/js/39.b8779de9.js",
    "revision": "07f8ba0338619030c934ad454dcc5627"
  },
  {
    "url": "assets/js/40.4f067ae2.js",
    "revision": "81ec06b4566504a3c273b8b8fbc521f1"
  },
  {
    "url": "assets/js/41.071170da.js",
    "revision": "bf6b7992ca1b0f9a4a99c4cb2936d09e"
  },
  {
    "url": "assets/js/42.a4cd6979.js",
    "revision": "91c5bb237c91a1b4ebc7fbe52cfd6bfa"
  },
  {
    "url": "assets/js/43.cf57f8c6.js",
    "revision": "a981161161d3d6c223e38c9e11463c24"
  },
  {
    "url": "assets/js/44.44c9d6a4.js",
    "revision": "21c5d58ef2814de15b8d4cdcd2a4ed23"
  },
  {
    "url": "assets/js/45.09e5bfe7.js",
    "revision": "b3794402c78f9fb5e40d950721009a5f"
  },
  {
    "url": "assets/js/46.06eb4018.js",
    "revision": "ed40af218c2b0e502099377ca10e610a"
  },
  {
    "url": "assets/js/47.217b9ead.js",
    "revision": "5213455d6e2d43fd1e4bc64b6c88876d"
  },
  {
    "url": "assets/js/48.b63cbe7a.js",
    "revision": "5b245bce06b7d46571f9f0e9b068c79d"
  },
  {
    "url": "assets/js/49.60b14cf8.js",
    "revision": "3d725385bd9c002270bdc62b148504c5"
  },
  {
    "url": "assets/js/5.b9cb997c.js",
    "revision": "27126563b3a7b1764f485a8fd38899e1"
  },
  {
    "url": "assets/js/50.e184c6b4.js",
    "revision": "ed667c2db5deee5ce3b58556c8b6f459"
  },
  {
    "url": "assets/js/51.d957081f.js",
    "revision": "f6e905147c3c00d12f5e601fd34e3649"
  },
  {
    "url": "assets/js/52.587a994e.js",
    "revision": "41d877cfe4fc6253a0e6bdcd0e876d94"
  },
  {
    "url": "assets/js/53.deacac84.js",
    "revision": "9410bc15c8747cc998c419a24543fd77"
  },
  {
    "url": "assets/js/54.b269daa8.js",
    "revision": "ea421c8c5f4aa9af572ffe165cf9c647"
  },
  {
    "url": "assets/js/55.f1632d7c.js",
    "revision": "1d3bddca36b5b7328e6472c39ad5bf81"
  },
  {
    "url": "assets/js/56.d9416d54.js",
    "revision": "51dc631e93a17d4f3295b33870d67626"
  },
  {
    "url": "assets/js/57.a2de6a35.js",
    "revision": "b73f538a92dea9ec20cf763fc4149034"
  },
  {
    "url": "assets/js/58.6be4a843.js",
    "revision": "6c0f74370644c6fdafbf77eed232ac1a"
  },
  {
    "url": "assets/js/59.541cb15e.js",
    "revision": "391fad2b42a32ee05a2790c9ffc50b5a"
  },
  {
    "url": "assets/js/6.65a56371.js",
    "revision": "a385eb01c13569c07f53bf09c131bf36"
  },
  {
    "url": "assets/js/60.00a38f55.js",
    "revision": "78e01642b9a80d85fa08708d093a4d9f"
  },
  {
    "url": "assets/js/61.9275d6ad.js",
    "revision": "c222d0dad3c2d4e5af2da229a6360158"
  },
  {
    "url": "assets/js/62.44f35a82.js",
    "revision": "3520291e84bddf65940801a92480948e"
  },
  {
    "url": "assets/js/63.17765bef.js",
    "revision": "f73d98b9e15c6f8fa031b6743d09e295"
  },
  {
    "url": "assets/js/64.da777a5f.js",
    "revision": "d56ea8c523fef6635b08ca1e320a704f"
  },
  {
    "url": "assets/js/65.bd5e02ec.js",
    "revision": "f4a1441daf76f6f8ad85764c4b177d05"
  },
  {
    "url": "assets/js/66.800a379f.js",
    "revision": "24ac83e575c265faa571202b9878eac7"
  },
  {
    "url": "assets/js/67.8d6b6dec.js",
    "revision": "f03fd38587f785ca828c9a1aa59cf211"
  },
  {
    "url": "assets/js/68.b7ad4b04.js",
    "revision": "e214520cfd1fe96a6e9ef588a6e57a75"
  },
  {
    "url": "assets/js/69.d99359b8.js",
    "revision": "ad622ad14ee2a5ffb5828a2f8f930166"
  },
  {
    "url": "assets/js/7.700c65e0.js",
    "revision": "5f637f247edd169240f4533cfdaff04e"
  },
  {
    "url": "assets/js/70.8c6ad6ed.js",
    "revision": "cd39630e5f22ce6d4c5eb8e3f0cb6094"
  },
  {
    "url": "assets/js/71.72302229.js",
    "revision": "d9542e3f214cbcf26aa54e2823a546ae"
  },
  {
    "url": "assets/js/72.d360842b.js",
    "revision": "822212190a7552897e2368e4519cb7f9"
  },
  {
    "url": "assets/js/73.43433b50.js",
    "revision": "cc45992946624c3b3ebe0362e21b086f"
  },
  {
    "url": "assets/js/74.7a417e8b.js",
    "revision": "1ba13cd485536b30b750dd7adb96dc39"
  },
  {
    "url": "assets/js/75.35f5b5b0.js",
    "revision": "6b696960a15e7ac5974b0f3e95c62dae"
  },
  {
    "url": "assets/js/76.1195b6f1.js",
    "revision": "6551fe8087b1901f1cd00bbc55c4dbcb"
  },
  {
    "url": "assets/js/77.18fbbf1e.js",
    "revision": "d337236f880c249c09a9fb844af56197"
  },
  {
    "url": "assets/js/78.6e57ca84.js",
    "revision": "225d2084ff9e61a46b6678c88b3c6bee"
  },
  {
    "url": "assets/js/79.7fe8393b.js",
    "revision": "9c7a15034d0fec78755c69e845a96204"
  },
  {
    "url": "assets/js/8.de361483.js",
    "revision": "c4daa1dc82eef0214b2d3e30fc343d9e"
  },
  {
    "url": "assets/js/80.80e18de6.js",
    "revision": "c2786262beab5b154889c21669f2795e"
  },
  {
    "url": "assets/js/81.0b169f1c.js",
    "revision": "ac5e38903ffb3ef55cf947fbb1c8e46d"
  },
  {
    "url": "assets/js/82.ca0b18ae.js",
    "revision": "096909bfc294cf4daae3a472f718aafa"
  },
  {
    "url": "assets/js/83.62c4cdbe.js",
    "revision": "636bca0bdce6588bd02ae33048988e6c"
  },
  {
    "url": "assets/js/84.6fb1de10.js",
    "revision": "41a3ae51090574ebe867c40d95f42c73"
  },
  {
    "url": "assets/js/85.494a7c19.js",
    "revision": "56cc3417a49dc7337735ab0bd11518dd"
  },
  {
    "url": "assets/js/86.062b0dfe.js",
    "revision": "5870636170fe21f6980046ba720d1a4e"
  },
  {
    "url": "assets/js/87.c10e3b4f.js",
    "revision": "50529695362515ade425773859e070ab"
  },
  {
    "url": "assets/js/88.dd875a82.js",
    "revision": "319ebf7df945981f63cacfc48f99a9fb"
  },
  {
    "url": "assets/js/89.6ace336c.js",
    "revision": "41519591a5f3159dd4fb5a04632fe465"
  },
  {
    "url": "assets/js/9.be1d2bd0.js",
    "revision": "1dd043624d58e321716bafe0eb1bdfe7"
  },
  {
    "url": "assets/js/90.db204ce7.js",
    "revision": "b3a432d6927c3fb3abaa5434edce50f0"
  },
  {
    "url": "assets/js/91.0a71a68e.js",
    "revision": "f64aef3d3d43fa4023fcaeb7c888c6d9"
  },
  {
    "url": "assets/js/92.fa98b44d.js",
    "revision": "9d0ae00a2c10537a4a3bf0774a94a226"
  },
  {
    "url": "assets/js/93.3e587ae4.js",
    "revision": "23cc52416700694bf5025aa07b2d866a"
  },
  {
    "url": "assets/js/94.fe352758.js",
    "revision": "b519be81ffac01f67328089a42ed5e80"
  },
  {
    "url": "assets/js/95.d9fab72e.js",
    "revision": "fa458dbea6198397e53b29d119bc183c"
  },
  {
    "url": "assets/js/96.8f792d4c.js",
    "revision": "018665be3901c79be378886108b35a2f"
  },
  {
    "url": "assets/js/97.ed9df9bd.js",
    "revision": "ee9c5cc72217771d685691552c43e1b7"
  },
  {
    "url": "assets/js/98.d4120e5f.js",
    "revision": "ed62e6060c5c3f5f8ee15ad2d0387a94"
  },
  {
    "url": "assets/js/99.7a587103.js",
    "revision": "35bed5a4b1a8e829686cf21d1fdf5220"
  },
  {
    "url": "assets/js/app.03725834.js",
    "revision": "33f80cd09549fec80a05e0181354572a"
  },
  {
    "url": "assets/js/vendors~docsearch.9c4efb48.js",
    "revision": "c821cf7948a87bf755ccb16386b5a3ca"
  },
  {
    "url": "assets/js/vendors~flowchart.c67ae52d.js",
    "revision": "6187d08c4b528af85ae21f40c6277899"
  },
  {
    "url": "assets/js/vendors~notification.5d3fa8a6.js",
    "revision": "6ee4db04b3a67337c338f347c08800f7"
  },
  {
    "url": "config/index.html",
    "revision": "a81545beb55fbdf7f62045138fcfe19b"
  },
  {
    "url": "faq/index.html",
    "revision": "cf3798c39864708638b7852c85224515"
  },
  {
    "url": "guide/assets.html",
    "revision": "6f1b124bc9e3e6a837d49c62fa114799"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "5452f10090f888274003d7d5f9a111a0"
  },
  {
    "url": "guide/deploy.html",
    "revision": "ae29f5a87808157956aad9f020e1e3c2"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "798d83ea1d022ea73fe06309d7e9e2e5"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "3cb5187609bfdbde3f33f4fe3160f395"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1b05d11e96ee96fa501eace296aa5938"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "e6b169019e4a1ac3f90cf403dd84e874"
  },
  {
    "url": "guide/i18n.html",
    "revision": "97a4e86d072448e5cc1644a01cacc748"
  },
  {
    "url": "guide/index.html",
    "revision": "2d99545554e07683b0ec0a7962bdb0e8"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "d2fa1a3e83f2ce138a07884484dc84f8"
  },
  {
    "url": "guide/markdown.html",
    "revision": "6c381d9d2bac6dbd44f8c496a224539c"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "474e32be4840b8891db844a7942f892b"
  },
  {
    "url": "guide/typescript-as-config.html",
    "revision": "4c2f548a00c1593e79410a41d78c749d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "0afa851cd494b31845446315ef96b04a"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "90ad25a50b5e936ea1982fa1a996053a"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "0068d766712355366aac9f5f7b849d8a"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "25a886465f6169314279d4315933c7a2"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "00cbff37d4c148fa48398e130c33ee54"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "1310a4b542ca37f18ae0d86c4a076429"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "1932456de6b2ef3c5c1a45791a12abfa"
  },
  {
    "url": "plugin/index.html",
    "revision": "1dde790edfb225dabd8b5c37c2c66702"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "c346a635b74316ae6594c590f3725b0b"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "22e81769896984356af786c7f5f31859"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "a25bd75af1845eadb4342f9f8104fa51"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "f7d702d4c2b4057287c96689b484460a"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "a0c54111b83b02f271fe4ec69878c11d"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "d5db6949165e69681328b6a478d214d2"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "fd455beb76009c0ccdd2055ee99a0b10"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "85b7c8329012549fbb49257ed19942ab"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "57d40cd392addbfcc663eaae4a6689f3"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "a3746ad390e88e1af83e46c1d2937ee8"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "727e17e524c7e1e5fcd555171d6733b2"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "5158e3e34f6bfcd5b34b8edc171e39b6"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "336486e8fd6917bfc59659ba2f9b9d58"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "d26fd6595f9a45d99a4b4aa4535e7e19"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "bc2a1b7e56740c7c98087a0aa84b3422"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "1512182fb496f7b1353f0fc48a164cf5"
  },
  {
    "url": "theme/index.html",
    "revision": "d81341c5465f54f3808da6d673b8731b"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "d482ae0fff28875981e03f7c57524d90"
  },
  {
    "url": "theme/option-api.html",
    "revision": "04a50acfa0449efcdd8e8e9b036b0856"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "9534f8bf67252b55f9e59bcf6397ac92"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "4deda908e06c8384935d1dcfd5d90a39"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "8c79918d154470ea02c8c5b3fd7b6434"
  },
  {
    "url": "zh/api/node.html",
    "revision": "02887be69f3d615c5cb8caff6b02b357"
  },
  {
    "url": "zh/config/index.html",
    "revision": "9d40b8a57f61fd379fae3fcac3196a22"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "13ba4e5143b95bfa140da7a82e833ffd"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "190785379ec10fe27f0567908c37e7cb"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "b13dcf521457f20324a26d7acc7c8ea0"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "09819a8c5e50a12e8e2b01c05c0e9e2c"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "f58ed8213e4eb7b30339787c431155b4"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "7c893e6612812235f0478bdaac6b33fd"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "955a68574577df5c37bd8e995927e5cf"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "c66556b13b68cbcb12e3b26b7349f762"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "5c21254a3cd25f281aed4a5d9b012588"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "90c557dad21f45b189a172ff9cbe3256"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "f5c6cc18cad58180a31a5ffbfafbea32"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "064794d7587ed8b083e6d676019c4f3a"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "daa63ae5922201cf35ca9c74950c00ef"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "8ae0b5e4bd14174286c4030d3b4a022c"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "2b817fce5a4b7c75e830112afcc74bc1"
  },
  {
    "url": "zh/index.html",
    "revision": "45fbb39357a9b2cf251431a9b3e42a4e"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "cbf26f81593c0c24360e2312c0c71c6f"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "c1888f8c99d46f64e6685add8eefdbda"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "ab0a3eac2fe9a1864f0b46855014b561"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "1d4f45dc4870aad3277b1f96c03891fa"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "4c0fd712660985ac3528d5d734f3f024"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "d00d0030235d5bfb7b79e965e503ce64"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "e14557fa0132ce5efb2ad82ac22753ed"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "f0baec88068e739031e8edbedfd9b86b"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "781004771c1604a85f4e63cd6a5aa13f"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "6cd3aff37c618ecf145d4f70a91f4b3e"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "90ecbe60ae53c0bbb09a3fd2d105fb63"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "a87ea4e29182849393b14a98c7feef10"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "3567552b2b848caa575837759e841c69"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "afd3b58d9da26021c722276ced7a1687"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "bcc14ef8b8558727a023ab49c99460f7"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "8bc8d4adf31e02b595af9d50b74c084c"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "ae069c47fbba680bc85dcf88977e3961"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "bcae5719be06703c8908f42cd2c8d5e8"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "03e77a625595d7805cdb7d859343df28"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "12aeaff3eedb13cf43799046775218a5"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "51c449bff1dd64bd575c4798ef27dfe2"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "6a360cb964cc5c70aa8ad2e3580c788f"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "a854e9556597e1ce3ea9f120769dc032"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "c09e1695261a3d4061fa5f17319f622d"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "f95b7c4cfc9efff894b04acdbee2756e"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "c04e2d6d35106ea2d68103b4d0a00cf6"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "78d5735a42cfdb1db79f18cd57f1bba4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
