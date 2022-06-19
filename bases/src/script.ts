// Vars

const hello: string = 'world';

// Functions

const getFullName = (nom: string, prenom: string): string =>{
    return nom + " " + prenom;
};

// Interfaces (Used for types)

interface ObjInterface {
    name : string,
    age? : number, // le "?" veut dire que age est oprionnel
    getMessage(): string,
}

// Objects

const user: ObjInterface = {
    name : "chemsou",
    age : 22,
    getMessage() {
        return "Hello" + name;
    },
}

const user1: ObjInterface = {
    name : "amine",
    getMessage() {
        return "Hi" + name;
    },
}

// Choix de type (Union)
let pageName: string | number = "1";

let errorMessage: string | null = null;
/* on peut avoir un message d'erreur a un certain moment, mais par defaut on en a pas (null) */

let user2: ObjInterface | null = null; // on peut uriliser les interfaces aussi

// Type aliases
type ID = String;
type popularTag = string;
type maybePopularTag = popularTag |  null; // on peut combiner les deux (alias + union)

let id: ID = "2232";

const popularTags: popularTag[] = ["ola", "soy", "Dora"];

/*Types*/

// Void
const doSomething = (): void => {
    console.log("do Something");
}

// Any : turns off TypeScript check
// Never
// Unknown 
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1:  string = vAny;
let s2:  string = vUnknown as string; //ERROR sans le as

// Type assertion
let s: string = "1";
let n: number = (s as unknown) as number;

/*
    DOM
*/

// Element is the highest class in hierarhy
const someElement = document.querySelector('.foo'); // pour pouvoir faire someElement.value on doit ajouter as HTMLInputElement
someElement.addEventListener('blur', (event) =>{
    const target = event.target as HTMLInputElement;
    console.log("event ",target.value);
});

/*
    Classes
*/

interface UserInterface{
    name?: string,
    getFullName?(): string;
}

class User implements UserInterface{
    private firstname: string; // comme java
    private lastname: string;
    readonly unchangableName : string; // on ne peut pas le changer plus tard
    static readonly maxAge = 50;

    constructor(firstname: string, lastname:string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.unchangableName = firstname;
    }

    getFullName(): string {
        return this.firstname + " " + this.lastname;
    }
}

class Admin extends User{

}

const u = new User("chemsou", "amine");
const a = new Admin("test", "test");


const addId = <T extends object> (obj: T) => { // on dit que le T (type generique) doit être un objet
    const id = Math.random().toString(16);
    return{
        ...obj,
        id,
    };
};

const user3: UserInterface = {
    name : "a",
};

const result = addId <UserInterface>(user3);