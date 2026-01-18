const fetch = require("node-fetch");

async function test() {
  const res = await fetch("https://portfolio-loki.onrender.com/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Jitesh",
      email: "jitesh@example.com",
      message: "Testing backend from VSCode!"
    })
  });

  const data = await res.json();
  console.log(data);
}

test();
