/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFTs you have created
*/

// Variable to store NFTs
let nftCollection = [];

// Function to create an NFT object with given metadata and store it
function createNFT(name, shirtType, accessory, eyeColor) {
    const nftMetadata = {
        name: name,
        shirtType: shirtType,
        accessory: accessory,
        eyeColor: eyeColor
    };
    nftCollection.push(nftMetadata);
}

// Function to list all NFTs and their metadata
function displayNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Shirt Type: ${nft.shirtType}`);
        console.log(`Accessory: ${nft.accessory}`);
        console.log(`Eye Color: ${nft.eyeColor}`);        
        console.log("--------------------");
    });
}

// Function to return the total number of minted NFTs
function getTotalNFTs() {
    return nftCollection.length;
}

// Calling the functions with updated values
createNFT("Luna", "Hoodie", "Diamond Ring", "Hazel");
createNFT("Sol", "AmberT-Shirt", "Platinum Watch", "Amber");
createNFT("Nova", "Tank Top", "Ruby Pendant", "Grey");

// Display all NFTs
displayNFTs();

// Print the total number of NFTs
console.log(`Total NFTs Minted: ${getTotalNFTs()}`);
