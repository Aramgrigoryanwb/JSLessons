let age = document.getElementById('age');
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.age.value);
}
 
showUser("Иванов", "Иван");