
class ArrayList {
  constructor() {
    this.data = {};
    this.length = 0;
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop(idx) {
    const ans = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return ans;
  }
  get(idx) {
    return this.data[idx];
  }
  delete(idx){
    const ans = this.data[idx];
    this._collapseTo(idx);
    return ans;
  }
  _collapseTo(idx){
    for (let i = idx; i < this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

describe('Array List push', () => {
  beforeEach( () => {
    list = new ArrayList();
  })

  it('constructor', () => {
    expect(list).toEqual(expect.any(ArrayList));
  });

  it('push', () => {
    list.push(5);
    expect(list.length).toEqual(1);
  });

  it('pop', () => {
    list.push(5);
    list.pop(1);
    expect(list.length).toEqual(0);
  });

  it('delete', () => {
    list.push(5);
    list.delete(0);
    expect(list.length).toEqual(0);
  });
});
