process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    const pwdFunc = require("./pwd.js");
    pwdFunc();
  } else if (cmd == "ls") {
    const lsFunc = require("./ls.js");
    console.log(lsFunc);
  }
});
