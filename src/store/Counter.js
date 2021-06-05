let _counter = 1;

const Counter = {
  increment(){
    return `id-${_counter++}`;
  }
};

export default Counter;