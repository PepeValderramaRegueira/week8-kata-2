const isBalanced = (s, caps) => {
  caps = caps.split("")
  let capsSplitted = []
  let capsPosition = []
  for (let i = 0; i < caps.length; i+=2) {
    let capOne = caps[i]
    let capTwo = caps[i+1]
    capsSplitted.push([capOne, capTwo])

    let capOnePosition = s.indexOf(capOne)
    let capTwoPosition = s.lastIndexOf(capTwo)
    capsPosition.push([capOnePosition, capTwoPosition])
  }

  console.log("CAPS SPLITED", capsSplitted)
  console.log("CAPS POSITION", capsPosition)

  let allCapsClosed = true
  capsPosition.forEach(capsPair => {
    allCapsClosed = !capsPair.some(position => position < 0)
  })

  let capsPositionCopy = [...capsPosition]

  let allButFirst = capsPositionCopy.splice(0, 1)
  
  capsPositionCopy = capsPositionCopy.sort((a, b) => {
    
  })
  
  for (let i = 0; i < capsPosition.length; i++) {
    
  }
  
  return allCapsClosed ? true : false
}

// console.log(isBalanced("(Sensei says yes!)", "()"))
// console.log(isBalanced("(Sensei says no!", "()"))

// console.log(isBalanced("Sensei says -yes-!", "--"))
// console.log(isBalanced("Sensei -says no!", "--"))

// console.log(isBalanced("Sensei says 'yes'!", "''"))
// console.log(isBalanced("Sensei say's no!", "''"))

console.log(isBalanced("(Sensei [says] -yes-!)", "()[]--"))
// console.log(isBalanced("(Sensei [says) no!]", "()[]"))

// Test.assertEquals(isBalanced("(Sensei says yes!)", "()"), true);
// Test.assertEquals(isBalanced("(Sensei says no!", "()"), false);

// Test.assertEquals(isBalanced("(Sensei [says] yes!)", "()[]"), true);
// Test.assertEquals(isBalanced("(Sensei [says) no!]", "()[]"), false);

// Test.assertEquals(isBalanced("Sensei says -yes-!", "--"), true);
// Test.assertEquals(isBalanced("Sensei -says no!", "--"), false);
