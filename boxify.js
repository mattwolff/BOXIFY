// Here's the JavaScript, prettier, less inline.
// This is what runs when you click the bookmarklet.

(function(){

  // Select EVERYTHING!
	let all = document.querySelectorAll(`*`);

	for (let i = 0; i < all.length; i++) {
    // Just an array of colors... Could be anything
	  let colors = [`red`, `blue`, `lime`, `pink`, `yellow`, `black`, `cyan`, `magenta`, `blueviolet`];

    // Random Color from that aray for each element!
	  let randomColor = Math.floor(Math.random() * colors.length);
	  let chosenColor = colors[randomColor];

    // Give it a border, so that we can see the box.
	  all[i].style.border =  `2px solid ${chosenColor}`;
	}
})();
