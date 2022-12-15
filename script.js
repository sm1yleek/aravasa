// Global class = Date(), new Array, new Object, NodeList(fake massive)
// class bu globaL OBEKT

// Class Js = invented in 2015 

// class  =  key word || take  heritation
// class name { constructor = parametr }    

// class Human {
//     constructor(data) {
//         console.log(Human);
//     }
// }

// const human = new Human('Salom dunyo')
// const human1 = new Human('Salom odam')
// const human2 = new Human('Salom erkak')
// const human3 = new Human('Salom ayol')
// const human4 = new Human('Salom bola')

// new === instanse || инстанс = obyektni ekzemplyari(nusxa)

// class Human {
//     constructor(data) {
//         console.log(data);
//     }
// }

// const human = new Human('Salom dunyo')


// class Human {
//     constructor(data) {
//         this.hi = 1
//         console.log(this)
//     }
// }


// OOP/oop = obyektga yonaltirilgan dasturlash 
// new = new class adder  


// const human = new Human('Salom dunyo') classni chaqirish 


// function Human () {


// }

// const h = new Human()



// Inheritance^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



// class Human {
//     constructor(data) {

//         this.name = data.name
//         this.gender = data.gender

//     }
// }

// const human = new Human({
//     name: 'Ismoil',
//     gender: 'Male'

// })

// // 2^^^^^^^^^^^^^^^^^2

// class Women extends Human {
//     constructor(data) {
//         super(data)
//         this.gender = 'Female'
//     }
// }

// const women = new Women({
//     name: 'Madina'

// })

// // 3^^^^^^^^^^^^^^^^^^^^^^^^3


// class Men extends Human {
//     constructor(data) {
//         super(data)
//         this.gender = 'Male'
//     }
// }

// const men = new Men({
//     name: 'Ali'
// })


// // 4^^^^^^^^^^^^^^^^^^^^^^^^^^^^^4


// class Child extends Women {
//     constructor(data) {
//         super(data)
//         this.mother = data.mother
//         this.gender = data.gender /* ! important */
//         // this.gender = 'male' /* ! important */ ozgaruvchi qattiy ozgarmas
//         // this.gender = data.gender /* ! important */ ozgaruvchi qattiy ozgarmas

//         this.child = `mening onam ${this.mother} va mening ismim ${this.name} va men ${this.gender}`
//     }
// }

// const child = new Child({
//     name: 'Neymar',
//     gender: 'Men',
//     mother: 'Marfusha'
// })





class ElementQuery {
    constructor(data) {
        if (typeof data.el === 'string')
            this.el = document.querySelector(data.el)
        else if (data.el instanceof HTMLElement)
            this.el === data.el
    }
}

new ElementQuery({
    el: '.header'
})

class Scroll extends ElementQuery {
    constructor(data) {
        super(data)
        this.top = data.top
        this.unit = data.unit
        this.el.style.top = this.scroll()


    }  /* metod */

    scroll() {

    }

    scrollUnit() {

    }

    calc() {

    }

}

const scroll = new Scroll({
    el: '.header__nav',
    top: 100,
    unit: '%',


})