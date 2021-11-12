function Press(val)
{
    document.getElementById("result").value+=val
}
  

function Calculate()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
