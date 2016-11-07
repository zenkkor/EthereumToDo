pragma solidity ^0.4.2;

contract ToDoList {

    address owner;
	uint num_items = 0;

	/**
	 * Base struct for a single List Item
	 */
    struct ListItem {
    	string name;
     	bool state;
    }

	/**
	 * A struct for items
	 */
    struct Items {
      	mapping(uint => ListItem) ListItems;
    }

	/**
	 * A mapping of several items
	 */
    mapping(address => Items) list_items;

    /**
     * Constructor
     */
    function ToDoList() {
      	owner = msg.sender;
    }

	/**
	 * Returns list items for index
	 * @param index The index of the item
	 * @return string, bool
	 */
	function getItemForIndex(uint index) constant returns (string, bool) {
		return (list_items[msg.sender].ListItems[index].name, list_items[msg.sender].ListItems[index].state);
	}

	/**
	 * Sets a single list item for index
	 * @param index The index of the item
	 */
	function setItemForIndex(uint index, string _name, bool _state) {

		list_items[msg.sender].ListItems[index].name  = _name;
		list_items[msg.sender].ListItems[index].state = _state;

		// Increment the number of items counter
		num_items++;
	}

	/**
	 * Returns the number if items
	 * @return uint
	 */
	function returnNumItems() constant returns (uint) {
		return num_items;
	}

	/**
	 * Kills the List, yo.
	 * Only allows this for the owner
	 */
	function killList() {
	  	if ( msg.sender == owner )
	    	suicide(owner);
	}

}
