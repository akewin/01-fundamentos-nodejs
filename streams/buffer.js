// buffer é uma maneira de baixo nível de tratar dados

// cria um buffer com a str hello
const buf = Buffer.from("hello")

// loga esse buffer, uqe no caso é em hexadecimal, por isso é muito mais eficiente tratar dessa maneira
console.log(buf);
// printa em binário
console.log(buf.toJSON());