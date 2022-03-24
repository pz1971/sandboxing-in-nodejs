# sandboxing-in-nodejs
Used a dummy Online Judge for this task.

[This](https://github.com/pz1971/sandboxing-in-nodejs/blob/46b466ab76bba0c1f66d110725c8c0bb7540e911/app.js#L18) Script is run inside a [vm2 sandbox](https://github.com/patriksimek/vm2). This works fine while judging 'solution.cpp' and 'WA_solution.cpp'. However, I couln't limit resources of the solution (time limit, memory limit) using vm2.

[Firejail](https://wiki.archlinux.org/title/Firejail) was used to limit resources for the program.
[These](https://github.com/pz1971/sandboxing-in-nodejs/blob/46b466ab76bba0c1f66d110725c8c0bb7540e911/judge.js#L6) options were used to [run the executable](https://github.com/pz1971/sandboxing-in-nodejs/blob/46b466ab76bba0c1f66d110725c8c0bb7540e911/judge.js#L20).

use command ``` man firejail ``` for all the available options for firejail.
