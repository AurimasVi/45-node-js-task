const http = require("http");
const fs = require("fs");

const cars = [
  {
    model: "Toyota",
  },
  {
    model: "BMW",
  },
  {
    model: "Opel",
  },
];

const owners = [
  {
    name: "bob",
  },
  {
    owner: "Dorean",
  },
  {
    owner: "Ash Ketcup",
  },
];

const server = http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/html",
  };
  res.writeHead(200, headers);
  let viewToDisplay = "./views/";
  switch (req.url) {
    case "home":
      viewToDisplay += "/home.html";
      break;
    case "contact":
      viewToDisplay += "/contact.html";
      break;
    case "/cars":
      res.end(JSON.stringify(cars));

      break;
    case "/owners":
      res.end(JSON.stringify(owners));
      break;
    default:
      res.end("Page not found");
  }
  res.end();

  fs.readFile(viewToDisplay, (err, data) => {
    if (err) {
      res.end("Server error");
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log(`listening to port 3000`);
});
