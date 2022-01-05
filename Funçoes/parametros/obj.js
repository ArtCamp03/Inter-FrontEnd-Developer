// object destructuring

const user = {
    id: 12,
    displayName: 'Jdoe',
    fullName: {
        firstName: 'Joe',
        lastName: "Doe"
    }

}

function userId({id}){
    return id;
}

function getFullName({fullName: {firstName: first , lastName: last}}){
    return `${first} ${last}`;
}

userId(user);
getFullName(user);