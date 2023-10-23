// Your code here
class polygon{
    constructor(array){
        this.array = array
    }
    get countSides(){
      if(this.array >= 4){
        console.log('This is a 4 sided polygon')
      } 
    }
    get perimeter(){
        a + b +c
    }
}

class triangle extends polygon{
    constructor(...args){
        super(...args)
    }
    get isValid(){
        if(this.array === 3){
            console.log('This is a triangle')
        }
    }
}

class sq extends polygon{
    constructor(...args){
        super(...args)
    }
    get isValid(){
        if(this.array === 4){
            console.log('Its a valid square')
        }
    }

    get area(){
        console.log(this.array * this.array)
    }
}
let square = new polygon([3,4,5,6])
square.area