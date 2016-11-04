/**
 * Created by oksanka on 29.10.16.
 */
function Tamagochi(name, age){
    this.name = name || 'Невідомий';
    this.age = age || 'Без віку';
    this.eatParametr = 75; // [0..100]
    this.drinkParametr = 75; // [0..100]
    this.health = 80; // [0..100]
    this.happiness = 85; // [0..100]
    this.hygiene = 70; // [0..100]
}

Tamagochi.prototype.sport = function () {
    this.health < 100 ? this.health += 5 : this.health = 100;
    this.happiness < 100 ? this.happiness += 5 : this.happiness = 100;
    this.eatParametr -= 5;
    this.drinkParametr -= 10;
    this.hygiene -= 10;
    this.checkParameters();
    this.checkIfDie();
}

Tamagochi.prototype.sleep = function (hours) {
    this.health < 100 ? this.health += hours : this.health = 100;
    this.hygiene--;
    this.drinkParametr--;
    this.eatParametr--;
    this.happiness++;
    setTimeout(function () {
        alert('Привіт, я проснувся!');
    }, hours*1000);
    this.checkParameters();
}

Tamagochi.prototype.wash = function () {
    this.hygiene = 100;
    this.checkParameters();
}

Tamagochi.prototype.eat = function(food){
    this.eatParametr < 100 ? this.eatParametr += food : this.eatParametr = 100;
    this.drinkParametr -= 5;
    this.checkParameters();
    this.checkIfDie();
}

Tamagochi.prototype.drink = function (water) {
    this.drinkParametr < 100 ? this.drinkParametr += water : this.drinkParametr = 100;
    this.eatParametr -= 5;
    this.checkParameters();
    this.checkIfDie();
}

Tamagochi.prototype.play = function () {
    this.happiness < 100 ? this.happiness += 5 : this.happiness = 100;
    this.eatParametr -= 5;
    this.drinkParametr -= 5;
    this.checkParameters();
    this.checkIfDie();
}

Tamagochi.prototype.checkParameters = function () {
    if (this.eatParametr < 40) {
        alert('Я голодний. Погодуй мене!!!')
    }
    if (this.drinkParametr < 50) {
        alert('Хочу пити. Дай води!!!')
    }
    if (this.happiness < 60) {
        alert('Мені сумно! Пограй зі мною!')
    }
    if (this.hygiene < 60) {
        alert('Хочу в душ!');
    }
    if (this.health < 40) {
        alert('Треба зайнятись спортом!')
    }
    console.info({
        'Їжа': this.eatParametr,
        'Вода': this.drinkParametr,
        'Здоров*я': this.health,
        'Щастя': this.happiness,
        'Гігієна': this.hygiene
    });
}

Tamagochi.prototype.checkIfDie = function () {
    if (this.eatParametr === 0 || this.drinkParametr === 0 || this.hygiene === 0 ||
        this.health === 0 || this.happiness === 0) {
        alert('Ти мене не доглядав! Я йду від тебе! Пока!');
    }
}

setInterval(function () {
    this.eatParametr--;
    this.drinkParametr--;
    this.happiness--;
    this.health--;
    this.hygiene--;
}, 20000);

setTimeout(function () {
    alert('Я втомився. Хочу спати!');
}, 60000);

var cat = new Tamagochi('Butters', '1');
