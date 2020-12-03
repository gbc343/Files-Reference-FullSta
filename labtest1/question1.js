var mixedArray = ['PIZZA',10, true,25,false,'Wings']

  //console.log(filter_list([1,2,'a','b']))
  //array.filter(e => typeof e === 'string' && e !== '')

function fil (a){
    console.log(
        a.filter(e => typeof e === 'string' && e !== '')
      )
}

fil(mixedArray)


  console.log(filter(mixedArray))

console.log("the end");