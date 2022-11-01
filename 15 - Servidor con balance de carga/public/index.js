var socket = io();

var data = [];

var messages = document.getElementById("messages");

var msgCenter = document.getElementById("msg-center");
var email = document.getElementById("email")
var msg = document.getElementById("msg");

var form = document.getElementById("form");
var title = document.getElementById("title")
var price = document.getElementById("price");
var thumbnail = document.getElementById("thumbnail");

fetch("/api/mensajes", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
})
    .then(response => data = response.json())
    .then(n => {
        n.forEach(element => {
            var item = document.createElement("li");
            var p = document.createElement("p");
            var span1 = document.createElement("span");
            var span2 = document.createElement("span");
            var span3 = document.createElement("span");
            span1.className = "email";
            span2.className = "date";
            span3.className = "msg";
            span1.textContent = `${element.author.id} `;
            var d = new Date();
            var date = d.toLocaleString();
            span2.textContent = `[${date}]: `;
            span3.textContent = element.text;
            p.appendChild(span1);
            p.appendChild(span2);
            p.appendChild(span3);
            item.appendChild(p);
            messages.appendChild(item);
        });
    })

fetch("/api/productos", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
})
    .then(response => data = response.json())
    .then(n => {
        n.forEach(element => {
            var tbody = document.getElementById("tbody");
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var img = document.createElement("img");
            td1.textContent = element.name;
            td2.textContent = element.price;
            img.alt = element.name;
            img.src = element.image;
            td3.appendChild(img);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tbody.appendChild(tr);
        });
    })

if(msgCenter && email && msg){
    msgCenter.addEventListener("submit", function(e) {
        e.preventDefault();
        var urlencoded = new URLSearchParams();
        urlencoded.append("email", email.value);
        urlencoded.append("msg", msg.value);
        fetch("/api/mensajes", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: urlencoded,
            redirect: "manual"
        })
            .then(response => response.text())

        var d = new Date();
        var date = d.toLocaleString();
        socket.emit("chat message", [email.value, date, msg.value]);
        email.value = "";
        msg.value = "";
    });
}

if(form && title && price && thumbnail) {
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        var urlencoded = new URLSearchParams();
        urlencoded.append("name", title.value);
        urlencoded.append("price", Number(price.value));
        urlencoded.append("image", thumbnail.value);
        fetch("/api/productos", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: urlencoded,
            redirect: "manual"
        })
            .then(response => response.text())

        socket.emit("add item", [title.value, Number(price.value), thumbnail.value]);
        title.value = "";
        price.value = "";
        thumbnail.value = "";
    });
}

socket.on("chat message", function(res) {
    var item = document.createElement("li");
    var p = document.createElement("p");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    span1.className = "email";
    span2.className = "date";
    span3.className = "msg";
    span1.textContent = `${res[0]} `;
    span2.textContent = `[${res[1]}]: `;
    span3.textContent = res[2];
    p.appendChild(span1);
    p.appendChild(span2);
    p.appendChild(span3);
    item.appendChild(p);
    messages.appendChild(item);
});

socket.on("add item", function(res) {
    var tbody = document.getElementById("tbody");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var img = document.createElement("img");
    td1.textContent = res[0];
    td2.textContent = res[1];
    img.alt = res[0];
    img.src = res[2];
    td3.appendChild(img);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
});