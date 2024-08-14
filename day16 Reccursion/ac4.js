// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const itemManager = (function() {
    // Private collection array
    let items = [];

    return {
        print: console.log("hi"),
        // Method to add an item to the collection
        addItem: function(item) {
            items.push(item);
            console.log(`${item} has been added `)
        },
        // Method to remove an item from the collection
        removeItem: function(item) {
            const index = items.indexOf(item); // This line finds the index of the item in the items array. If the item is not found, index will be -1
            if (index !== -1) {
                items.splice(index, 1); //(from startIndex, to number of elements to delete) delete it (splice it);
                console.log(`${item} has been removed.`);
            } else {
                console.log(`${item} not found in the collection.`); 
            }
        }, 
        // Method to list all items in the collection 
        listItems: function() { 
            console.log("Items in the collection:");
            items.forEach((item, index) => { // item - value, index - i
                console.log(`${index + 1}: ${item}`);
            });
        }
    };
})(); // () is added to immediately invoke the function. 

itemManager.print; 
// Example usage:
itemManager.addItem("Book1"); // Logs: Book has been added.
itemManager.addItem("Book2"); // Logs: Book has been added.
itemManager.addItem("Book3"); // Logs: Book has been added.
itemManager.addItem("Book4"); // Logs: Book has been added.
itemManager.addItem("Book5"); // Logs: Book has been added.
itemManager.addItem("Book6"); // Logs: Book has been added.
itemManager.addItem("Pen1");  // Logs: Pen has been added.
// itemManager.listItems();     // Logs: 1: Book, 2: Pen
itemManager.removeItem("Book2"); // Logs: Pen has been removed.
itemManager.listItems();       // Logs: 1: Book

