const scripts = [
  'demoFileA.js',
  'demoFileB.js',
  './nested/nestedFile.js'
];

let reference = document.getElementsByClassName('scripts')[0];

function addScripts(scripts, reference) {
  scripts.forEach(title => {
    let script = document.createElement('script');
    script.src = title;
    document.body.insertBefore(script, reference);
  });
}

addScripts(scripts, reference);
