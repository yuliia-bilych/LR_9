class Fridge{
    constructor(color, brand, model, price){
        this.color=color;
        this.brand=brand;
        this.model=model;
        this.price=price;
    }

    show(){
        let html = "";
		html += "<tr>";
		html += "<td>" + this.color + "</td>";
		html += "<td>" + this.brand + "</td>";
		html += "<td>" + this.model + "</td>";
        html += "<td>" + this.price + "</td>";
		html += "</tr>";
		return html;
    }
}

let array = [
    new Fridge('pink', 'Whirlpool', 'HT670-N',23999),
    new Fridge('black','Samsung', 'RB38T676FB1', 26999),
    new Fridge('white', 'Vestfront', 'CMR085W', 6999),
    new Fridge('silver', 'Samsung', 'RB38T676FSA', 26399)
]

function run(){

	var html = "<table class='b-table'>";
	html += "<tr class='b-table__th'><td>Колір</td><td>Марка</td><td>Модель</td><td>Ціна</td></tr>"
	for (i=0;i<array.length;i++){
		html += array[i].show();
	}
	html += "</table>";
	document.getElementById("result").innerHTML = html;
}