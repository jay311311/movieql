export const people = [
    {
        id:"0",
        name:"kim",
        age:18,
        gender:"female"
    },{
        id:"1",
        name:"E",
        age:19,
        gender:"male"
    },
    {
        id:"2",
        name:"D",
        age:38,
        gender:"male"
    },
    {
        id:"3",
        name:"C",
        age:28,
        gender:"female"
    },{
        id:"4",
        name:"B",
        age:16,
        gender:"male"
    },{
        id:"5",
        name:"A",
        age:17,
        gender:"female"
    }


];


export const getById = id=>{
    const filteredPeople = people.filter(person=> String(id) === person.id);
    return filteredPeople[0]
}