describe('LinkedList', function() {
  var list;

  beforeEach(function() {
    list = new LinkedList();
  });

  describe('new', function() {
    it('returns an instance', function() {
      expect(list).toNotEqual(null);
    });

    it('is empty', function() {
      expect(list.toArray()).toEqual([]);
    });
  });

  describe('add', function() {
    beforeEach(function() {
      list.add(1);
      list.add(2);
      list.add(3);
    });
    it('adds element to the front of the collection', function() {
      expect(list.toArray()).toEqual([3, 2, 1]);
    });
  });

  describe('remove by value', function() {
      describe('when list has only 1 element', function() {
        beforeEach(function() {
        list.add(1);
        list.remove(1);
      });

      it('is empty', function() {
        expect(list.toArray()).toEqual([]);
      });
    });

    describe('when list has many elements', function() {
      beforeEach(function() {
        list.add(1);
        list.add(2);
        list.add(3);
      });

      describe('from front of list', function() {
        beforeEach(function() {
          list.remove(1);
        });

        it('no longer contains the element', function() {
          expect(list.toArray()).toEqual([3,2])
        });
      });

      describe('from mid list', function() {
        beforeEach(function() {
          list.remove(2);
        });

        it('no longer contains the element', function() {
          expect(list.toArray()).toEqual([3,1])
        });
      });

      describe('from end of list', function() {
        beforeEach(function() {
          list.remove(1);
        });

        it('no longer contains the element', function() {
          expect(list.toArray()).toEqual([3,2])
        });
      });
    });
  });
});