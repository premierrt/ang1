import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
});

describe ('Todo contstructor', () => {
   it('test konstruktora', ()=>{
      let todo = new Todo ({
          title: 'tytuł',
          complete: true
      });
      expect(todo.title).toEqual('tytuł');
      expect(todo.complete).toEqual(true);
   }
   ) ;
});