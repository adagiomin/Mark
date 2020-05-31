an output directory');
program.option('--file-ext <text>', 'Specify an extension to be read, ex: html');
var content;
program.arguments('[files...]').action(function(files) {
  content = files.map(readFile).join('');
}).parse(process.argv);

function createOptions() {
  var options = {};
  mainOptionKeys.forEach(function(key) {
    var param = program[key === 'minifyURLs' ? 'minifyUrls' : camelCase(key)];
    if (typeof param !== 'undefined') {
      options[key] = param;
    }
    else if (key in config) {
      options[key] = config[key];
    }
  });
  return options;
}

function mkdir(outputDir, callback) {
  fs.mkdir(outputDir, function(err) {
    if (err) {
      switch (err.code) {
        case 'ENOENT':
          return mkdir(path.join(outputDir, '..'), function() {
            mkdir(outputDir, callback);
          });
        case 'EEXIST':
          break;
        default:
          fatal('Cannot create directory ' + outputDir