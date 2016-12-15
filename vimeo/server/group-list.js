// lib
// https://github.com/vimeo/vimeo.js
// app
// https://developer.vimeo.com/apps/28917

const [node, filepath, group_id, ...argv] = process.argv;
if (!group_id) {
  console.warn("Usage: echo $group_id; node server/group-list.js $_ > data/$_.json");
  return;
}

const CLIENT_ID = "20415bfd5eb64d52b26487ef89fa01d314832a19";
const CLIENT_SECRET = "3602a5f3456a4444163bb06fa2091efb12549730";
const ACCESS_CODE = "ee1665a7c61040ae9dab44e31a33331a";

const Vimeo = require("vimeo").Vimeo;
const lib = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_CODE);

// example
// ../node_modules/vimeo/example/example.js
if (!ACCESS_CODE) {
  const lib_dev = new Vimeo(CLIENT_ID, CLIENT_SECRET);
  lib_dev.generateClientCredentials(["private", "public"], (error, access_token) => {
    console.error(error);
    lib.access_token = access_token.token;
    // next…
  });
}

//
// group listの取得
//
lib.request({
  path: `/groups/${group_id}/videos`,
}, function(error, body, status_code, headers) {
  var json = JSON.stringify(body, null, "\t");  // value, replacer, space
  console.error("標準エラー出力");  // リダイレクトしてもファイル書き出しには反映されない。
  // console.log("標準出力");
  console.log(json);
  // console.log(error);
  // console.log(bodey);
  // console.log(status_code);  // 200
  // console.log(headers);
})
