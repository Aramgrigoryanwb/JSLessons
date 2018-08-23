class Option {
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;

	} 
	createDiv(text){
		let res = document.createElement("div");
		 res.textContent = text;
		 res.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg};  font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
		 div.appendChild(res);
	
		
		}
}
		
	let newDiv = new Option("30px","130px","red","14px","center");
	newDiv.createDiv("Работает"); 
