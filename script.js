const extendHex = (shortHex) => {
  // write your code here
	shortHex = shortHex.replace("#", "");

  // Split the short hex code into color components
  const red = shortHex[0];
  const green = shortHex[1];
  const blue = shortHex[2];

  // Create the full hex code by repeating each color component
  const fullHex = `#${red}${red}${green}${green}${blue}${blue}`;

  // Return the full hex code
  return fullHex;
	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
