pragma solidity ^0.4.2;

contract ToDoList {

    address owner;

    /**
     * Constructor
     */
    function ToDo() {
      	owner = msg.sender;
    }

}
