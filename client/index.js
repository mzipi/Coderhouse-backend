if(window.location.pathname === "/") {
    let msgCenter = document.getElementById("msg-center");
    let addProduct = document.getElementById("add-product");
    let listDiv = document.getElementById("products-list");

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let trHead = document.createElement("tr");
    let thName = document.createElement("th");
    let thPrice = document.createElement("th");
    let thImg = document.createElement("th");
    let tbody = document.createElement("tbody");

    msgCenter.addEventListener("submit", msgEventHandler);
    addProduct.addEventListener("submit", productsEventHandler);

    thName.textContent = "Producto";
    thPrice.textContent = "Precio";
    thImg.textContent = "Imágen";
    tbody.id = "tbody";
    
    trHead.appendChild(thName);
    trHead.appendChild(thPrice);
    trHead.appendChild(thImg);
    thead.appendChild(trHead);
    table.appendChild(thead);
    table.appendChild(tbody);
    listDiv.appendChild(table);
    
    getMsg();
    getProducts();
}

async function getMsg() {
    const data = await fetch("/api/messages", { method: "GET" });
    const msgs = await data.json();
    msgs.forEach(element => { displayMsg(element) });
}

async function msgEventHandler(e) {
    let socket = io();

    let email = document.getElementById("email");
    let text = document.getElementById("msg");

    e.preventDefault();

    let data = {
        author: {
            email: email.value
        },
        text: text.value
    }

    await fetch("/api/messages", { 
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });

    socket.emit("chat message", [email.value, text.value]);
    email.value = "";
    text.value = "";

    socket.on("chat message", function(res) {
        let obj = {
            author: {
                email: res[0]
            },
            text: res[1],
        };
        getMsg();
    });
}

function displayMsg(msgs) {
    let itemDiv = document.createElement("div");

    let mailDiv = document.createElement("div");
    let dateDiv = document.createElement("div");
    let msgDiv = document.createElement("div");
    let avatarDiv = document.createElement("div");
    
    mailDiv.id = "email";
    dateDiv.id = "date";
    msgDiv.id = "msg";
    avatarDiv.id = "avatar";

    let mailP = document.createElement("p")
    let dateP = document.createElement("p")
    let msgP = document.createElement("p")
    let avatarImg = document.createElement("img")
    
    mailP.textContent = `${msgs.author.email} `;
    dateP.textContent = `[${msgs.createdAt}]: `;
    msgP.textContent = msgs.text;
    avatarImg.src = msgs.author.avatar;

    mailDiv.appendChild(mailP);
    dateDiv.appendChild(dateP);
    msgDiv.appendChild(msgP);
    avatarDiv.appendChild(avatarImg);

    itemDiv.appendChild(mailDiv);
    itemDiv.appendChild(dateDiv);
    itemDiv.appendChild(msgDiv);
    itemDiv.appendChild(avatarDiv);

    messages.appendChild(itemDiv);
}

async function getProducts() {
    const data = await fetch("/api/products", { method: "GET" });
    const products = await data.json();
    products.forEach(element => { displayProducts(element) });
}

async function productsEventHandler(e) {
    let socket = io();

    let title = document.getElementById("title");
    let price = document.getElementById("price");
    let thumbnail = document.getElementById("thumbnail");

    e.preventDefault();

    price = Number(price.value);

    let data = {
        name: title.value,
        price: price,
        image: thumbnail.value
    }

    await fetch("/api/products", { 
        method: "POST", 
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });

    socket.emit("add item", [title.value, Number(price.value), thumbnail.value]);

    title.value = "";
    price.value = "";
    thumbnail.value = "";
    
    socket.on("add item", res => { 
        let obj = {
            name: res[0],
            price: res[1],
            image: res[2]
        };
        getProducts();
    });
};

function displayProducts(products) {
    let item = document.createElement("tr");

    let itemName = document.createElement("td");
    let itemPrice = document.createElement("td");
    let itemImg = document.createElement("td");

    let img = document.createElement("img");
    img.src = products.image;
    img.alt = products.name;

    itemName.textContent = products.name;
    itemPrice.textContent = products.price;
    itemImg.appendChild(img);

    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemImg);

    tbody.appendChild(item);
}