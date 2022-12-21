import axios from 'axios';

let url = 'http://localhost:8080/api/productos';
let data;
let result;

async function addData(url, data) {
    try {
        await axios.post(url, data);
    } catch (err) {
        console.log(err);
    }
};

async function getData(url) {
    try {
        const result = await axios.get(url);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

async function updateData(url, data) {
    try {
        await axios.put(url, data);
    } catch (err) {
        console.log(err);
    }
};

async function delData(url) {
    try {
        await axios.delete(url);
    } catch (err) {
        console.log(err);
    }
};

data = {
    name: "Harina",
    price: 85,
    image: "https://tito.uy/wp-content/uploads/cañuelas-5.jpg"
};
await addData(url, data);
result = await getData(url);
console.log(result);

url = `http://localhost:8080/api/productos/6382121127ba4d9bda7bc777`;
data = {
    name: "Harina",
    price: 115,
    image: "https://quesur.com.uy/wp-content/uploads/2018/12/New-Project-35-1.png"
};
await updateData(url, data);
result = await getData(url);
console.log(result);

await delData(url);
result = await getData(url);
console.log(result);