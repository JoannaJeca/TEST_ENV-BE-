
// export const started = (a, b) => {
//   return a * b;
// };


let db: any = [
  { id: 0, name: "Jemima", score: 25 },
  { id: 2, name: "Prince", score: 75 },
  { id: 3, name: "Joan", score: 15 },
]

//create logic
let val = {
  id: db.length + 1,
  name: "CeeJay",
  score: 55
}

export const createLogic = (data: Array<{ id: number, name: string, score: number }>, value: { id: number, name: string, score: number }) => {
  data.push(value)

  return value
}

createLogic(db, val)


export const viewAllUserLogic = (data: Array<{ id: number, name: string, score: number }>): Array<{ id: number, name: string, score: number }> => {

  return data
}

console.log(viewAllUserLogic(db));
viewAllUserLogic(db)

export const viewOneUserLogic = (
  data: Array<{ id: number, name: string, score: number }>,
  id: number
): { id: number, name: string, score: number } => {

  let getUser = data.find((el: any) => { return el.id === id })!

  return getUser
}



console.log(viewOneUserLogic(db, 2));
viewOneUserLogic(db, 2)