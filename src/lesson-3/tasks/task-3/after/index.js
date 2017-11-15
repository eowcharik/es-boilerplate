export default () => {
    let sum = 0;
    return (x) => {

        console.log(sum + x);
         return sum += x;
    };
}
