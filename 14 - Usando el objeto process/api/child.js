const calculo = (cant) => {
    let sum = 0;
    for (let i = 0; i < cant; i++) {
        sum += i;
    };
    return sum;
};

process.on('message', msg => {
    const sum = calculo(cant);
    process.send(sum);
});