var pinyin_dict = new Object();
var jyutping_dict = new Object();


function dictFromFile(path) {
  var out = new Object();
  fetch(chrome.runtime.getURL(path))
    .then(response => response.text())
    .then((data) => {
      let lines = data.split("\n");
      
      for (let i = 0; i < lines.length; i++) {
        let j = lines[i].indexOf(' ');
        let hanzi = lines[i].slice(0,j);
        if (out[hanzi] == undefined) {
          out[hanzi] = lines[i].slice(j+1);
        }
      }
  });
  
  return out;
}


function romanize(selection, dict) {
  if (!selection) return "";
  
  let pinyin = "";
  let start = 0;
  
  while (start < selection.length) {
    let len = 1;
    let prev = selection.charAt(start);
    let query = selection.charAt(start);
    
    while (dict[query] && start + len < selection.length) {
      prev = query;
      query += selection.charAt(start + len);
      ++len;
    }
    
    let temp = dict[prev];
    
    if (temp) {
      if (!pinyin.endsWith(" ")) {
        pinyin += " ";
      }
      pinyin += temp + " ";
    } else {
      pinyin += prev;
    }
    
    start += prev.length;
  }
  
  return pinyin.trim();
}


function displayRomanized(selection) {
  alert(selection + "\n" + romanize(selection, pinyin_dict) + "\n" + romanize(selection, jyutping_dict));
}


chrome.runtime.onMessage.addListener(function (request) {
  if (request.type == "fromButton") {
    let selection = window.getSelection().toString();
    displayRomanized(selection);
  } else if (request.type == "fromMenu") {
    displayRomanized(request.data);
  }
  return true;
})

pinyin_dict = dictFromFile("pinyin.txt");
jyutping_dict = dictFromFile("jyutping.txt");
