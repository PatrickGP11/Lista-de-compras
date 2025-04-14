var listaCompra = []
var input = document.querySelector("#item")
var btn = document.querySelector("#btn")
var res = document.querySelector(".res")

function addItem() {
    res.innerHTML = ""
    var valueItem = input.value

    listaCompra.push(valueItem)
    listaCompra.map((item) => {
       const li = document.createElement("li")
       li.innerHTML = item

    res.appendChild(li)

})
input.value = ""

}

btn.addEventListener("click", addItem)