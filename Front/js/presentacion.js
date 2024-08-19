function doGTranslate(langPair) {
    if (langPair.value) langPair = langPair.value;
    var lang = langPair.split('|')[1];
    var select = document.querySelector('select.goog-te-combo');
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
    } else {
      console.error('Element with class goog-te-combo not found.');
    }
  }
  