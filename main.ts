// const person: {
//     name: String, 
//     age: Number,
//     hobbies: String [],
//     role: [Number, String],
    
// } = {
//     name: 'Andre', 
//     age: 30, 
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, "String"]
// }

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
    name: 'Andre', 
    age: 30, 
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}