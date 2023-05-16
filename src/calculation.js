import Stack from "./Stack"

//multiply first, addition later
function multiply(equation) {
    let result = ""
    const myArray = equation.split("")
    const newArray = []

    let multiplymode = false
    let dividemode = false

    let left = ''
    let right = ''
    for (let i = 0; i <= myArray.length; i++) {
        if (i == myArray.length) {

            if (multiplymode) {
                newArray.push((parseFloat(left) * parseFloat(right)).toString())
            } else if (dividemode) {
                newArray.push((parseFloat(left) / parseFloat(right)).toString())
            } else {
                newArray.push(left)
            }
        }
        else if (myArray[i].valueOf() == '+' || myArray[i].valueOf() == '-' || myArray[i].valueOf() == 'X' || myArray[i].valueOf() == '/') {

            if (myArray[i].valueOf() == '/') {
                if (dividemode == true) {
                    left = (parseFloat(left) / parseFloat(right)).toString()
                    right = ''
                    dividemode = false
                } else if (multiplymode == true) {
                    left = (parseFloat(left) * parseFloat(right)).toString()
                    right = ''
                    multiplymode = false
                }
                dividemode = true
            } else if (myArray[i].valueOf() == 'X') {
                if (multiplymode == true) {
                    left = (parseFloat(left) * parseFloat(right)).toString()
                    right = ''
                    multiplymode = false
                } else if (dividemode == true) {
                    left = (parseFloat(left) / parseFloat(right)).toString()
                    right = ''
                    dividemode = false
                }
                multiplymode = true
            }
            else if (multiplymode == true) {
                newArray.push((parseFloat(left) * parseFloat(right)).toString() + myArray[i])
                multiplymode = false
                left = ''
                right = ''
            } else if (dividemode == true) {
                newArray.push((parseFloat(left) / parseFloat(right)).toString() + myArray[i])
                dividemode = false
                left = ''
                right = ''


            } else {
                left = left + myArray[i]
                newArray.push(left)
                left = ''
            }
        }
        //if currently in the process of multiplying, calculate the right hand side
        else if (multiplymode == true || dividemode == true) {
            right = right + myArray[i]
        }
        //keep moving on if all fails
        else {
            left = left + myArray[i]
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        result += newArray[i]
    }
    return result
}

//multiply first, addition later
function addition(equation) {
    let result = ""
    const myArray = multiply(equation).split("")
    const newArray = []

    let subtractmode = false
    let plusmode = false

    let left = ''
    let right = ''
    for (let i = 0; i <= myArray.length; i++) {
        if (i == myArray.length) {

            if (subtractmode) {
                newArray.push((parseFloat(left) - parseFloat(right)).toString())
            } else if (plusmode) {
                newArray.push((parseFloat(left) + parseFloat(right)).toString())
            } else {
                newArray.push(left)
            }
        }
        else if (myArray[i].valueOf() == '+' || myArray[i].valueOf() == '-') {

            if (myArray[i].valueOf() == '+') {
                if (plusmode) {
                    left = (parseFloat(left) + parseFloat(right)).toString()
                    right = ''
                    plusmode = false
                } else if (subtractmode) {
                    left = (parseFloat(left) - parseFloat(right)).toString()
                    right = ''
                    subtractmode = false
                }
                plusmode = true
            } else if (myArray[i].valueOf() == '-') {
                if (plusmode) {
                    left = (parseFloat(left) + parseFloat(right)).toString()
                    right = ''
                    plusmode = false
                } else if (subtractmode) {
                    left = (parseFloat(left) - parseFloat(right)).toString()
                    right = ''
                    subtractmode = false
                }
                subtractmode = true
            }
            else if (plusmode) {
                newArray.push((parseFloat(left) + parseFloat(right)).toString() + myArray[i])
                plusmode = false
                left = ''
                right = ''
            } else if (subtractmode == true) {
                newArray.push((parseFloat(left) - parseFloat(right)).toString() + myArray[i])
                subtractmode = false
                left = ''
                right = ''


            } else {
                left = left + myArray[i]
                newArray.push(left)
                left = ''
            }
        }
        //if currently in the process of multiplying, calculate the right hand side
        else if (plusmode == true || subtractmode == true) {
            right = right + myArray[i]
        }
        //keep moving on if all fails
        else {
            left = left + myArray[i]
        }
    }
    for (let i = 0; i < newArray.length; i++) {
        result += newArray[i]
    }
    return result
}

function calculate(equation) {
    const myArray = equation.split("")
    const s = new Stack()
    for (let i = 0; i < equation.length; i++) {
        let temp = ''
        if (myArray[i].valueOf() == ')') {
            //if we hit a ) go back until you see a (
            while (s.peek() != '(') {
                temp = temp + s.pop()

            }
            //delete the (
            s.pop()

            s.push(addition(temp.split("").reverse().join("")))




        } else {
            s.push(myArray[i])
        }
    }

    return addition(s.printStack())
}

export default calculate