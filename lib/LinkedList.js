var LinkedList = function() {
  var head = null;
  LinkedList.prototype.toArray = function() {

    if(head == null)
      return [];

    var array = [];

    current = head;
    while(current != null) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }

  LinkedList.prototype.add = function(value) {
    node = { value:value, next:head};
    head = node;
  }

  LinkedList.prototype.remove = function(value) {
    prev = head;
    current = head;

    while(current != null && current.value != value) {
      prev = current;
      current = current.next;
    }

    if(current == head)
      head = head.next;
    else
      prev.next = current.next;
  }
};