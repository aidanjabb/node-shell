process.stdout.write("prompt > ");

const done = output => {
  console.log(output);
  process.stdout.write("\nprompt > ");
}

var output;

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    const pwdFunc = require("./pwd.js");
    output = pwdFunc(done);
  } else if (cmd == "ls") {
    const lsFunc = require("./ls.js");
    output = lsFunc(done);
  } else if (cmd.substring(0, 3) == "cat") {
    const catFunc = require("./cat.js");
    const file = cmd.substring(4);
    output = catFunc(file, done);
  } else if (cmd.substring(0, 4) === "curl") {
    const curlFunc = require("./curl.js");
    const link = cmd.substring(5);
    output = curlFunc(link, done);
  }
});
