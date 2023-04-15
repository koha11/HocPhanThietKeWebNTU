const app = {

  handleEvent: function() {
    _this = app 

    let a = document.getElementById('gta')
    let b = document.getElementById('gtb')
    const result = document.getElementById('result')

    const btn = document.getElementsByTagName("button")

    for (let i = 0; i < btn.length; i++) { 
      btn[i].onclick = function() {
        let aValue = parseInt(a.value)
        let bValue = parseInt(b.value)
        let x = _this.validate(aValue,bValue)     
        console.log(_this.validate(aValue,bValue)  ) 
        if(x == true)
          {
            let type = btn[i].getAttribute('id')

            switch(type){
              case 'plus': 
              result.value = aValue + bValue
              break
              case 'minus': 
              result.value = aValue - bValue
              break
              case 'multiply': 
              result.value = aValue * bValue
              break
              case 'divide': 
              result.value = aValue / bValue
              break;
              case 'reset':
                _this.reset(a,b)
            }
          } 
        else
          {
            document.querySelector('.error').innerText  = `Vui long nhap ${x} o dang so`
            setTimeout(() => {
              _this.reset(a,b)
            }, 1000);
          } 
      }
    }

  },
  validate: (a,b) => {
    if(!a) 
      return 'a'
    if(!b) 
      return 'b'
    else
      return true    
  },
  reset: (a,b) => {
    a.value = ''
    b.value = ''
    document.getElementById('result').value = ''
  },
  start: () => {
    app.handleEvent()
  }
}

app.start()