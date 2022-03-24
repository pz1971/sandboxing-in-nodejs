// const {judgeCpp} = require("./judge.js")
// judgeCpp("./OJ/solution.cpp")
// judgeCpp("./OJ/WA_solution.cpp")
// judgeCpp("./OJ/TLE_solution.cpp")
// judgeCpp("./OJ/MLE_solution.cpp")

const {VM, NodeVM, VMScript} = require('vm2');

const vm = new NodeVM({
  console: 'inherit',
    sandbox: {},
    require: {
        external: true,
        builtin: ['fs', 'path'],
        root: './'
    }
});
const script = new VMScript('const {judgeCpp} = require("./judge.js"); module.exports = judgeCpp("./OJ/solution.cpp");');
// console.log(vm.run(script));
vm.run(script);