// require('./course-info.js')('history') -> { dir, course, config, name, saveKey, teacherCode }
// One place that knows each game folder: game/ is Worldwalker (no course file); any other folder (history/, gov/…)
// has its own course.js (loaded before the engine) and config.js. Tools and tests use this instead of game names.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const run = (file, box) => { if (fs.existsSync(file)) vm.runInContext(fs.readFileSync(file, 'utf8'), box); };
module.exports = function info(dir) {
  dir = dir || 'game';
  const box = { window: {} }; vm.createContext(box);
  run(path.join(ROOT, dir, 'course.js'), box); run(path.join(ROOT, dir, 'config.js'), box);
  const course = box.window.WW_COURSE || null, config = box.window.WW_CONFIG || {};
  const title = (course && course.title) || 'WORLDWALKER';
  return {
    dir, course, config, isCourse: !!course,
    name: (course && course.name) || title[0] + title.slice(1).toLowerCase(), // 'TIMEWALKER' -> 'Timewalker'
    saveKey: (course && course.saveKey) || 'worldwalker.save.v1',
    teacherCode: String(config.TEACHER_CODE || '').toLowerCase()
  };
};
