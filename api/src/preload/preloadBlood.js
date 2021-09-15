const {Blood} = require("../db")

function preloadBloo() {
  const data = [{
    name: "O",
    Rh: "positive",
  },{
    name: "O",
    Rh: "negative",
  },{
    name: "A",
    Rh: "positive",
  },{
    name: "A",
    Rh: "negative",
  },{
    name: "B",
    Rh: "positive",
  },{
    name: "B",
    Rh: "negative",
  },{
    name: "AB",
    Rh: "positive",
  },{
    name: "AB",
    Rh: "negative",
  }]

  data.map( async(group) => {
    await Blood.create({
      name: group.name,
      Rh: group.Rh
    })
  })

  Promise.all(data)
    .then(() => {
      return console.log("Grupos sanguíneos cargados")
    })
}

module.exports = preloadBloo