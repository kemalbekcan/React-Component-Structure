class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, surname, age, studentNumber) {
        super(name, surname, age);
        this.studentNumber = studentNumber;
    }
    greeting(text) {
        return `${text}, My name is ${this.name}`;
    }
    calculateAge() {
        return new Date().getFullYear();
    }
}

class Teacher extends Person {
    constructor(name, surname, age, department) {
        super(name, surname, age);
        this.department = department;
    }
}

const phones = [
    { price: 1000, model: 'Samsung' },
    { price: 2000, model: 'Iphone' },
];

// let telefon = phones.map(phone => phone.price);

// let telefon = phones.map((phone) =>{
//     return phone.price;
// });

// filtreleme yapmak için map yerine filter metodu kullanılabilir.
let telefon = phones.map((phone) => {
    if (phone.price == 1000) {
        return <text>Telefon : {phone.model} <br></br> Fiyat :{phone.price}</text>;
    }
});


const p1 = new Student('kemal', 'bekcan', 21, 190716041);
const p2 = new Teacher('Mahmut', 'Dumlu', 40, 'Bilgisayar Programcılığı')
console.log(p1);
console.log(p2);
console.log(p1.greeting('Hello'));
console.log(p1.calculateAge());
console.log(telefon);

const render = () => {
    let template = (
        <div>
            <h2>Öğrenci</h2>
            <p>
                Ad : {p1.name}
            </p>
            <p>
                Soyad : {p1.surname}
            </p>
            <p>
                Yaş : {p1.age}
            </p>
            <p>
                Okul Numarası : {p1.studentNumber}
            </p>
            <hr></hr>
            <h2>Öğretmen</h2>
            <p>
                Ad : {p2.name}
            </p>
            <p>
                Soyad : {p2.surname}
            </p>
            <p>
                Yaş : {p2.age}
            </p>
            <p>
                Bölüm : {p2.department}
            </p>
            <hr></hr>
            <h2>Fiyat Performans</h2>
            <p>
                {telefon}
            </p>
            <hr></hr>
        </div>
    );

    ReactDOM.render(template, root);
}
render();
