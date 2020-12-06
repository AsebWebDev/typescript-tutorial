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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Andre',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
