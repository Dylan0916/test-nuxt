export default function () {
  return useState('counter', () => Math.round(Math.random() * 1000));
  // const count = ref(20);
  // const increment = () => {
  //   count.value++;
  // };

  // return {
  //   count,
  //   increment,
  // };
}
