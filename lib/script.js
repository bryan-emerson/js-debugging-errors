//console.log("Test your code here!");


let obj = {
  oompa: [
    {
      loompa: {
        doopati: [
          [
            {
              do: ["good by cruel world", "hello world", "goodnight moon"]
            }
          ]
        ]
      }
    }
  ]
};

let message = obj[0].oompa.loompa[0].doopati.do[2];
console.log(message);