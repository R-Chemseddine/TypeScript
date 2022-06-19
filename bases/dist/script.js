// Vars
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hello = 'world';
// Functions
var getFullName = function (nom, prenom) {
    return nom + " " + prenom;
};
// Objects
var user = {
    name: "chemsou",
    age: 22,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user1 = {
    name: "amine",
    getMessage: function () {
        return "Hi" + name;
    }
};
// Choix de type (Union)
var pageName = "1";
var errorMessage = null;
/* on peut avoir un message d'erreur a un certain moment, mais par defaut on en a pas (null) */
var user2 = null; // on peut uriliser les interfaces aussi
var id = "2232";
var popularTags = ["ola", "soy", "Dora"];
/*Types*/
// Void
var doSomething = function () {
    console.log("do Something");
};
// Any : turns off TypeScript check
// Never
// Unknown 
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown; //ERROR sans le as
// Type assertion
var s = "1";
var n = s;
/*
    DOM
*/
// Element is the highest class in hierarhy
var someElement = document.querySelector('.foo'); // pour pouvoir faire someElement.value on doit ajouter as HTMLInputElement
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log("event ", target.value);
});
var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.unchangableName = firstname;
    }
    User.prototype.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };
    User.maxAge = 50;
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(User));
var u = new User("chemsou", "amine");
var a = new Admin("test", "test");
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user3 = {
    name: "a"
};
var result = addId(user3);
