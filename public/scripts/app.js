"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name, surname, age) {
  _classCallCheck(this, Person);

  this.name = name;
  this.surname = surname;
  this.age = age;
};

var Student = /*#__PURE__*/function (_Person) {
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  function Student(name, surname, age, studentNumber) {
    var _this;

    _classCallCheck(this, Student);

    _this = _super.call(this, name, surname, age);
    _this.studentNumber = studentNumber;
    return _this;
  }

  _createClass(Student, [{
    key: "greeting",
    value: function greeting(text) {
      return "".concat(text, ", My name is ").concat(this.name);
    }
  }, {
    key: "calculateAge",
    value: function calculateAge() {
      return new Date().getFullYear();
    }
  }]);

  return Student;
}(Person);

var Teacher = /*#__PURE__*/function (_Person2) {
  _inherits(Teacher, _Person2);

  var _super2 = _createSuper(Teacher);

  function Teacher(name, surname, age, department) {
    var _this2;

    _classCallCheck(this, Teacher);

    _this2 = _super2.call(this, name, surname, age);
    _this2.department = department;
    return _this2;
  }

  return Teacher;
}(Person);

var phones = [{
  price: 1000,
  model: 'Samsung'
}, {
  price: 2000,
  model: 'Iphone'
}]; // let telefon = phones.map(phone => phone.price);
// let telefon = phones.map((phone) =>{
//     return phone.price;
// });
// filtreleme yapmak için map yerine filter metodu kullanılabilir.

var telefon = phones.map(function (phone) {
  if (phone.price == 1000) {
    return /*#__PURE__*/React.createElement("text", null, "Telefon : ", phone.model, " ", /*#__PURE__*/React.createElement("br", null), " Fiyat :", phone.price);
  }
});
var p1 = new Student('kemal', 'bekcan', 21, 190716041);
var p2 = new Teacher('Mahmut', 'Dumlu', 40, 'Bilgisayar Programcılığı');
console.log(p1);
console.log(p2);
console.log(p1.greeting('Hello'));
console.log(p1.calculateAge());
console.log(telefon);

var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\xD6\u011Frenci"), /*#__PURE__*/React.createElement("p", null, "Ad : ", p1.name), /*#__PURE__*/React.createElement("p", null, "Soyad : ", p1.surname), /*#__PURE__*/React.createElement("p", null, "Ya\u015F : ", p1.age), /*#__PURE__*/React.createElement("p", null, "Okul Numaras\u0131 : ", p1.studentNumber), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, "\xD6\u011Fretmen"), /*#__PURE__*/React.createElement("p", null, "Ad : ", p2.name), /*#__PURE__*/React.createElement("p", null, "Soyad : ", p2.surname), /*#__PURE__*/React.createElement("p", null, "Ya\u015F : ", p2.age), /*#__PURE__*/React.createElement("p", null, "B\xF6l\xFCm : ", p2.department), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, "Fiyat Performans"), /*#__PURE__*/React.createElement("p", null, telefon), /*#__PURE__*/React.createElement("hr", null));
  ReactDOM.render(template, root);
};

render();
