
const miniDB = [
    { id: 100, task: "Brush teeth", time: "10:30am" },
    { id: 101, task: "Sweep the full house", time: "9:30pm" },
    { id: 102, task: "Start preparing lunch", time: "12:00am" },
    { id: 103, task: "Watch your favorite TV show", time: "1pm" },

]

let val: { id: number, task: string, time: string } = {
    id: miniDB.length + 100,
    task: "Help Mrs Puff cook dinner",
    time: "8:30pm"
}

export const createATaskLogic = (
    data: Array<{ id: Number, task: String, time: string }>,
    value: { id: Number, task: String, time: string }) => {

    data.push(val)

    return value
}

export const viewAllTaskLogic = (
    data: Array<{ id: Number, task: String, time: string }>): Array<{ id: Number, task: String, time: string }> => {

    return data
}

export const viewATaskLogic = (
    data: Array<{ id: Number, task: String, time: string }>,
    id: number): { id: Number, task: String, time: string } => {

    let getTask = data.find((el: any) => {
        return el.id === id
    })!
    return getTask
}

console.log(createATaskLogic(miniDB, val));
