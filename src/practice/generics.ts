type addIdReturnType<T> = T & { id: number };

function addId<T>(obj: T): addIdReturnType<T> {
    let id = Math.random() * 1000;

    return { ...obj, id }
}


const user = addId({
    name: "Joy",
    age: 20,
})

user.age;