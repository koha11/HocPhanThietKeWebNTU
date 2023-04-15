

document.querySelector('.submit').onclick = () => {
    let a = parseInt(document.querySelector('#gta').value)
    let b = parseInt(document.querySelector('#gtb').value)
    document.querySelector('#result').value = a + b
  }
  
  document.querySelector('.reset').onclick = (e) => {
    a = 0
    b = 0  
    document.querySelector('#result').value = 0
  }


