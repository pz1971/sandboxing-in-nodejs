const { exec, spawn } = require("child_process");
const fs = require("fs");
const { stdin } = require("process");

exports.judgeCpp = async (filename) => {
    // compile the code
    await exec("g++ " + filename + " -o ./OJ/a", async (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
    
      const child = await spawn("./OJ/a"); //where a is the exe file generated on compiling the code.
      
        //   send the input to the code
        await fs.readFile("./OJ/inp.txt", "utf8", async (err, data) => {
            if (err) throw err;
            await child.stdin.write(data);
            await child.stdin.end();
        });
        
        // compare the output with the expected output and give verdict
        await fs.readFile("./OJ/ac.txt", "utf8", async (err, acData) => {
            if (err) throw err;
            await child.stdout.on("data", (outputData) => {
                if(outputData == acData)
                    console.log("verdict: AC");
                else
                {
                    console.log("verdict: WA");
                    console.log("expected output:\n" + acData);
                    console.log("your output:\n" + outputData);
                }
            });
    
        });
    });
}
