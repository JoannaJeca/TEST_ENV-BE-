
const miniDB = [
    { id: 100, name: "Adisa Habeeb", subjectsTotalScore: 75 },
    { id: 101, name: "Odiri Jemima", subjectsTotalScore: 85 },
    { id: 102, name: "Rufai Ahmed", subjectsTotalScore: 45 },
    { id: 103, name: "Joan Chikki", subjectsTotalScore: 65 },

]

let val: { id: number, name: string, subjectsTotalScore: number } = {
    id: miniDB.length + 100,
    name: "Peter Oti",
    subjectsTotalScore: 50
}

export const createAStudentLogic = (
    data: Array<{ id: Number, name: String, subjectsTotalScore: Number }>,
    value: { id: Number, name: String, subjectsTotalScore: Number }) => {

    data.push(val)

    return value
}

export const viewAllStudentLogic = (
    data: Array<{ id: Number, name: String, subjectsTotalScore: Number }>): Array<{ id: Number, name: String, subjectsTotalScore: Number }> => {

    return data
}

export const viewAStudentLogic = (
    data: Array<{ id: Number, name: String, subjectsTotalScore: Number }>,
    id: number): { id: Number, name: String, subjectsTotalScore: Number } => {

    let getStudent = data.find((el: any) => {
        return el.id === id
    })!
    return getStudent
}

console.log(createAStudentLogic(miniDB, val));
