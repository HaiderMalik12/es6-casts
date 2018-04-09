const persons = [];
const person = {
    create(person) {
        persons.push(person);
    },
    update(person) {
        //
    },
    delete(person) {
        //
    },
    find() {
        return persons;
    }
}
export default person;
