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
    "revision": "eca62c4ca127e8aafe4be4bb8f183aa1"
  },
  {
    "url": "api/cli.html",
    "revision": "c858e6879984092e9193fc268ed17b38"
  },
  {
    "url": "api/node.html",
    "revision": "88cc7890749a06ee886c5e98e0a0d639"
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
    "url": "assets/css/0.styles.04203b60.css",
    "revision": "a6a6e9b0142d85f239b9e4de1deeb08a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e8cab031.js",
    "revision": "bca82489bac5c10c52dfc5bafedaff1b"
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
    "url": "assets/js/102.42e7c26d.js",
    "revision": "6a8e157d399b105f7697b09809ec8f04"
  },
  {
    "url": "assets/js/103.834c4986.js",
    "revision": "a69b66767a64d727cf6a3c78b14d0480"
  },
  {
    "url": "assets/js/104.1e56579a.js",
    "revision": "ab260390fd48c6e9399c09f7f3fca7ad"
  },
  {
    "url": "assets/js/105.41ec0333.js",
    "revision": "7408c5071cfa8b6b7ceff2feb774799a"
  },
  {
    "url": "assets/js/106.bf5af0e6.js",
    "revision": "9e42ed1bee72705a3063f02606e843b2"
  },
  {
    "url": "assets/js/107.b92a7cde.js",
    "revision": "a3fb0affe8e940d8b1d20527fb8d9df3"
  },
  {
    "url": "assets/js/108.eb3bf157.js",
    "revision": "556439e2e84878eba63ff66fd41f10d1"
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
    "url": "assets/js/12.35043fa6.js",
    "revision": "45693afdec960b8b4b79082221c77c97"
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
    "url": "assets/js/18.0179bbc0.js",
    "revision": "f11bad8ac795da4fc63965b516394112"
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
    "url": "assets/js/23.36d03f3a.js",
    "revision": "edb59838acef34f91ca7ba4155c96238"
  },
  {
    "url": "assets/js/24.3b03a08b.js",
    "revision": "abb74644996d9a40ae1d02b6a90138d8"
  },
  {
    "url": "assets/js/25.1952a8a4.js",
    "revision": "85b1c387dbe24923661192d2a426fad8"
  },
  {
    "url": "assets/js/26.1032c1a3.js",
    "revision": "47de4e51e8d99ad775978034127968b7"
  },
  {
    "url": "assets/js/27.fb1e6ac0.js",
    "revision": "57ba02a74d34d9c50ebe7d38d3145089"
  },
  {
    "url": "assets/js/28.5fb916f6.js",
    "revision": "8ffae60b742685981a863431ce4b5a81"
  },
  {
    "url": "assets/js/29.c75c0ca8.js",
    "revision": "553e534ba9e9db54a83f67cd467c4e6e"
  },
  {
    "url": "assets/js/30.0221f337.js",
    "revision": "7d11aacb95754d0f51807e0e0e58665c"
  },
  {
    "url": "assets/js/31.eadb12e3.js",
    "revision": "ea388b9880da95eb2d5e4da03e70c678"
  },
  {
    "url": "assets/js/32.ed2375c7.js",
    "revision": "65b73b85d99efefa46f19ebb55d53d67"
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
    "url": "assets/js/35.1aa22eee.js",
    "revision": "bdbf9fcae44362bbbb1bc2f81351dc4e"
  },
  {
    "url": "assets/js/36.1a181b31.js",
    "revision": "06af801a95ab81ef2414c9f566ae6560"
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
    "url": "assets/js/46.5d391206.js",
    "revision": "92b5da30970c9daa7ed07796d5e9cc78"
  },
  {
    "url": "assets/js/47.217b9ead.js",
    "revision": "5213455d6e2d43fd1e4bc64b6c88876d"
  },
  {
    "url": "assets/js/48.f519d38c.js",
    "revision": "ef32be68f740240bd6fd994d62a0e92d"
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
    "url": "assets/js/50.e86f828f.js",
    "revision": "a2cd101d211d741dca4e15597f37bafa"
  },
  {
    "url": "assets/js/51.b8636891.js",
    "revision": "d4bd0e64ccafb191b372906b8ba68cb6"
  },
  {
    "url": "assets/js/52.587a994e.js",
    "revision": "41d877cfe4fc6253a0e6bdcd0e876d94"
  },
  {
    "url": "assets/js/53.754b1c9a.js",
    "revision": "4e2ab131c7cb44436c5b85512e040aaa"
  },
  {
    "url": "assets/js/54.04e8307f.js",
    "revision": "56a1efab18952f2aae73bfe93bf234e5"
  },
  {
    "url": "assets/js/55.b2840cb5.js",
    "revision": "1a3ea56fc2c73f1de89b197e7d878669"
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
    "url": "assets/js/58.6695a15e.js",
    "revision": "c4695727dfef2eee212b2c80186a5a9a"
  },
  {
    "url": "assets/js/59.2ab756e6.js",
    "revision": "e65f670655447756eeb0f2310dedede5"
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
    "url": "assets/js/61.7b0ca683.js",
    "revision": "d253a68d689b159a8e6b95b8fedf2c05"
  },
  {
    "url": "assets/js/62.44f35a82.js",
    "revision": "3520291e84bddf65940801a92480948e"
  },
  {
    "url": "assets/js/63.6d431e37.js",
    "revision": "2e2c0139652ec5a0f8db6f963b6c96e3"
  },
  {
    "url": "assets/js/64.53295d8d.js",
    "revision": "999c8056432a1896c17e6d0327e5ce5e"
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
    "url": "assets/js/68.a099694e.js",
    "revision": "e708e24b865e697bcf4a2184224b85f4"
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
    "url": "assets/js/70.b8742de8.js",
    "revision": "9eb3ba31cce2bd62364078455e8a1cb6"
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
    "url": "assets/js/73.8c592ae6.js",
    "revision": "c7ce41ec87c2c5014a24fcb9eb371c24"
  },
  {
    "url": "assets/js/74.573c27aa.js",
    "revision": "1d12afad85f88adb8ef0c9d717b2ffbb"
  },
  {
    "url": "assets/js/75.35f5b5b0.js",
    "revision": "6b696960a15e7ac5974b0f3e95c62dae"
  },
  {
    "url": "assets/js/76.13e9454e.js",
    "revision": "0d6f38af457556763f5a6eb55620be8b"
  },
  {
    "url": "assets/js/77.d57f4e04.js",
    "revision": "855f38f985a267982163cab835ed3024"
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
    "url": "assets/js/80.3f3553d9.js",
    "revision": "bffbd5ea331da77934d5e19c00dad121"
  },
  {
    "url": "assets/js/81.d9c5495e.js",
    "revision": "2a8e905801b24cbb65e411f04730a47c"
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
    "url": "assets/js/89.a2eb69fa.js",
    "revision": "fcb43a7535b3693e1f3d886156781052"
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
    "url": "assets/js/91.5cde9fca.js",
    "revision": "76912fd586d9ebae58f956404a8b6a8f"
  },
  {
    "url": "assets/js/92.fa98b44d.js",
    "revision": "9d0ae00a2c10537a4a3bf0774a94a226"
  },
  {
    "url": "assets/js/93.1be2779b.js",
    "revision": "bb5fd34f358f3a8957380b4a5d17c0f7"
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
    "url": "assets/js/97.0ae5fe32.js",
    "revision": "4e72859e6e09c22f8f5ba5822ac8310d"
  },
  {
    "url": "assets/js/98.331f0f09.js",
    "revision": "1dd07820cb26e9fc68888149cbfd49d3"
  },
  {
    "url": "assets/js/99.3c57eec4.js",
    "revision": "3513f8a7e64057010bfb5d7b4cf71b43"
  },
  {
    "url": "assets/js/app.16582a7e.js",
    "revision": "a152c8bb9ee1bb82ee6775ab3d48f078"
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
    "revision": "5887084c4968cb01d0b9b25fb2852b7f"
  },
  {
    "url": "faq/index.html",
    "revision": "60ebcfa295001e80156837f56d8ae18e"
  },
  {
    "url": "guide/assets.html",
    "revision": "15a0458f5c6d6655f294f04bfa5091a9"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "8fe030f3f9dd3bc994827fdc0e315e06"
  },
  {
    "url": "guide/deploy.html",
    "revision": "5ed7e5b61c1d8ad6492cf296991e867e"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "1bf8dab5354f890ed322caeed7554697"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "10d8e94a09d9eb74d534170193269e7c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "791c48c3d52944b597532816746763fa"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "dbef14c3a2978847f0160fb8f830e2a7"
  },
  {
    "url": "guide/i18n.html",
    "revision": "e321919f556d6017f350345c7dc0304f"
  },
  {
    "url": "guide/index.html",
    "revision": "ee51c14859ba07dc5c7c5e596531d9f8"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "9f7a84f5550e83ae3ec89b448ff4d331"
  },
  {
    "url": "guide/markdown.html",
    "revision": "f7e5c8037e45b8a68d5ac398d6754fba"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "6bdd19a3f3182eaf3772ef0788a0e8d8"
  },
  {
    "url": "guide/typescript-as-config.html",
    "revision": "c09676cd1f9ff6dca4d32f8045302894"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "d100fb129474fbbfe4d357315e1b68b3"
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
    "revision": "c76ade20fc951a541efd1c8f38d2fea7"
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
    "revision": "e8f1ea7cb07ecb402dab62d871729302"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "157c9d1987126dc7ee1ffcb64ed44bc6"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "2e776a9664ec46bea85d0f5541f110f1"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "b9e803dfb513be80268f757d90496550"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "ab8a466dad8c480814306ba930f735ca"
  },
  {
    "url": "plugin/index.html",
    "revision": "587d47d48fe4658ac3b5b3eab1dd7175"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "70d5b474a34caafd6aac357a7ce69009"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "dc3c4cf5c2765bfc0dfa652c40833797"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "7fdab8ef9fc54612639ab0b5e07b4007"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "311426a972839db744e18970575b5fb1"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "20d7943fd7c4600fd294387b5bc7f70c"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "e54c6a5c37e6d129c3521356bdb08e9d"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "198eed89b86a2adb86f795a086f34f44"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "8023f94d85870de9f5ff83e0e2a88edb"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "04dc3bea68db8a34f1f827231d8df245"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "bc17c89d669aace91a78ad285989f2d2"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "eb5961fed7fbe5175a0e43cc6d76d069"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "4a248a4bdbe2f025925d69468f4a409d"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "42b0981bf7ca293e4db3aa0fb5f92948"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "fa73b1a268773c8de97f4f037c4a99ee"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "d8e6449b8b407fd059151b879b4a3ebf"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "5f37fea1bf4af9296f2e1767fa16b8e3"
  },
  {
    "url": "theme/index.html",
    "revision": "4f2533a6a77df400033ca01c900252e6"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "42ef959427d5f6741eecc71384d0ea99"
  },
  {
    "url": "theme/option-api.html",
    "revision": "3517c391d182cb691c8cbf562d5a4776"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "00acf9c62b4714f7189d9aa671040548"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "bc1a57b534a059d9dadc87679c38dd0e"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "9f93330e66e88b1e260cc85daaeac0dd"
  },
  {
    "url": "zh/api/node.html",
    "revision": "6dda31177fcf0fb817cb36e59be558ab"
  },
  {
    "url": "zh/config/index.html",
    "revision": "e28097827e533499671f995e016c1c29"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "176655d888ca441ba200de6b1ec8235b"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "b698d1cd23fd227d1dfef9ed6836eb3d"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "d7fa55660ab8850d675744bf2b66796a"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "82209f4b617e21eae6c5f0f27a23316f"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "24fe5e70db26441cc641ac21fb70193a"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "2b64faa7462fdc26a675d54768c134a9"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "7c1b8ab7b17bf8494d063d2244751df7"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "2b3199f1ca0bea77fecbf2a3118979ff"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "177ab42dc1453f4a98c653de9085eea7"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7da78e93199e49db7eac7e82e7c957ac"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "4b9096dd47867514cee715142e6750b0"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "f4b2b5b68b2884f46e5008f66f7202cc"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "cfd4add2a8b9230006d220b829690c79"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "e0838bb34982fdbeeec112f4400e3469"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "3e4cbd1f0447553bb5f120ad3821f395"
  },
  {
    "url": "zh/index.html",
    "revision": "94c2de85176043e5b46ad086fc7f96d4"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "123c6c891c4f40cb2397c974bee65447"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "6e36f5fa6924f8acb13aa92ee1cf5aa4"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "e821b3d00a28afd6b396704156baa0d9"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "fdc15128b369d40259e475b11e5d5e2f"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "32556c98b87980deed336fafc6fc096f"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "58cce3f44a4e449ca5d39ca3f857ae68"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "7629a386497f8910a5096c744928f15a"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "35554d8e46091fc113f639c65ad903be"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "e54ec3e41485143477a0edb7f29187a5"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "e0232dfc8fdf0e10262bb086f1a99cf1"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "cd91e040e332f407d1715fb9716c14e6"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "f5490c136f41642441cf7f4399ecc23e"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "a62ba88346b625fd9aeca419f96f0f07"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "6fe558de03c8359ea0f46bb24529523e"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "1ed161cbfbafb0410d2d7486566a3149"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "683a0d6675b058c60850bd0fdcc6bad3"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "679139237cfffcf41185688ab835e19b"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "33dc85b6c132566cf4f4ffa5f64e6963"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "197c5a9c4f4ce81d5e2addc792c374e6"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "ce61a4e91db6754ae45cf5a9501ad446"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "cb5d68e654db7083b8c82d444bf03edb"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "743214207537f8005f077062219f9dc4"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "92f27c3f99ae0930f2a3b6fd75d3a616"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "32cc244c348617c37d29dffb0926fb1a"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "819931914caf78981a772fc31c04e23f"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "5debc223a4e0c6678d3bfe2b53561385"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "abfe2dedb6a5d74063903b5d39beac9f"
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
