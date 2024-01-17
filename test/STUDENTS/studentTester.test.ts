import { createAStudentLogic, viewAStudentLogic, viewAllStudentLogic } from "./studentLogic"


describe("checking out our student logic", () => {
    test("check out our create-student logic", () => {
        let data = Array.from({ length: 6 }, () => {
            return {
                id: Math.floor(Math.random() * 1000),
                name: Math.ceil(Math.random() * 1000).toString(),
                subjectsTotalScore: Math.floor(Math.random() * 100)
            }
        })

        let value = {

            id: Math.floor(Math.random() * 1000),
            name: Math.ceil(Math.random() * 1000).toString(),
            subjectsTotalScore: Math.floor(Math.random() * 100)
        }

        expect(createAStudentLogic(data, value)).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                subjectsTotalScore: expect.any(Number)
            })
        )
    })

    test("check out our view-one-student logic", () => {
        let count = 0
        let data = Array.from({ length: 6 }, () => {
            count++
            return {
                id: count,
                name: Math.ceil(Math.random() * 1000).toString(),
                subjectsTotalScore: Math.floor(Math.random() * 100)
            }
        })

        expect(viewAStudentLogic(data, 102)).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                subjectsTotalScore: expect.any(Number)
            })
        )
    })

    test("check out our create-student logic", () => {
        let data = Array.from({ length: 6 }, () => {
            return {
                id: Math.floor(Math.random() * 1000),
                name: Math.ceil(Math.random() * 1000).toString(),
                subjectsTotalScore: Math.floor(Math.random() * 100)
            }
        })

        expect(viewAllStudentLogic(data)).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                subjectsTotalScore: expect.any(Number)
            })
        )
    })

})

