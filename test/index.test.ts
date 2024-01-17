// test("just a test", () => {

// import { started } from ".."


//     expect(0).toBe(0);
// });

//boolean, string, number, object, array

// test("just a simple test", () => {
//     expect(true).toBe(true)
// })

// describe("testing for boolean", () => {
//     test("bool", () => {
//         expect(true).toBe(true)
//         expect(true).not.toBe(false)
//         expect(true).not.toBeNaN()
//         expect(true).not.toBeUndefined()
//     })
// })

// describe("testing for number", () => {
//     test("numb", () => {
//         let val = (a: number, b: number): number => {
//             return a + b
//         }
//         expect(val(1, 1)).toBe(2)
//         expect(started(1, 1)).not.toBe(0)
//         expect(started(1, 0)).toBe(0)
//     })
// })


// describe("Items of string", () => {
//     test("test if a letter exists", () => {
//         let name = "Joan"

//         expect(name).toMatch(/j/i)
//     })
// })

// describe("Items of array", () => {
//     test("test if a name exists in an array", () => {
//         let name = ["Joan", "peter", "Tobi", "Regina"]

//         name.push("Wisdom")
//         // expect(name).toContain("Peter")
//         expect(name[1]).toMatch(/Peter/i)
//         expect(name.length).toBe(name.length)
//     })
// })

// describe("working with objects", () => {
//     test("test if a name exists in an object", () => {
//         let name = ["Joan", "peter", "Tobi", "Regina"]

//         let obj: { name: string; score: number } = {
//             name: "Peter", score: 49
//         }

//         expect(obj).toEqual({ name: "Peter", score: 49 })
//         expect(obj).toEqual({
//             name: expect.any(String),
//             score: expect.any(Number)
//         })
//     })
// let arrObj:Array<any> = [
// {name:"Peter", score:48},
// {name:"James", score:78},
// {name:"Jemima", score:68},
// ]

//     expect(obj).toEqual({ name: "Peter", score: 49 })
//     expect(obj).toEqual({
//         name: expect.any(String),
//         score: expect.any(Number)
//     })
// })

// })



// test("read my index function", ()=>{
//     expect(started(2, 8)).toBe(16)
// })


//toMatch takes a string or regular expression.
//toContain helps out in an array

import { createLogic, viewAllUserLogic, viewOneUserLogic } from "../index"


describe("checking our index logic", () => {
    test("checing our create logic", () => {
        let data = Array.from({ length: 6 }, () => {
            return {
                id: Math.floor(Math.random() * 100),
                name: Math.ceil(Math.random() * 1000).toString(),
                score: Math.ceil(Math.random() * 1000)

            }
        })

        let value = {
            id: Math.floor(Math.random() * 100),
            name: Math.ceil(Math.random() * 1000).toString(),
            score: Math.ceil(Math.random() * 1000)

        }

        expect(createLogic(data, value)).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                score: expect.any(Number)
            })
        )
    })

    test("checing our view-all0users-logic", () => {
        let data = Array.from({ length: 6 }, () => {
            return {
                id: Math.floor(Math.random() * 100),
                name: Math.ceil(Math.random() * 1000).toString(),
                score: Math.ceil(Math.random() * 1000)

            }
        })

        let value = {
            id: Math.floor(Math.random() * 100),
            name: Math.ceil(Math.random() * 1000).toString(),
            score: Math.ceil(Math.random() * 1000)

        }

        expect(viewAllUserLogic(data)).toEqual(
            expect.arrayContaining([{
                id: expect.any(Number),
                name: expect.any(String),
                score: expect.any(Number)
            }])
        )
    })

    test("checing one user logic", () => {
        let count = 0
        let data = Array.from({ length: 6 }, () => {
            count++
            return {
                id: count,
                name: Math.ceil(Math.random() * 1000).toString(),
                score: Math.ceil(Math.random() * 1000)

            }
        })



        expect(viewOneUserLogic(data, 1)).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                score: expect.any(Number)
            })
        )
    })
})

