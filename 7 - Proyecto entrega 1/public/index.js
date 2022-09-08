var socket = io();

// var msgCenter = document.getElementById('msg-center');
// var email = document.getElementById('email')
// var msg = document.getElementById('msg');

var form = document.getElementById('form');
var title = document.getElementById('title')
var price = document.getElementById('price');
var thumbnail = document.getElementById('thumbnail');

// msgCenter.addEventListener('submit', function(e) {
//     e.preventDefault();
//     if (msg.value && email.value) {
//         var d = new Date();
//         var date = d.toLocaleString();
//         socket.emit('chat message', [email.value, date, msg.value]);
//         email.value = '';
//         msg.value = '';
//     }
// });

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (title.value && price.value && thumbnail.value) {
        socket.emit('add item', [title.value, price.value, thumbnail.value]);
        title.value = '';
        price.value = '';
        thumbnail.value = '';
    }
});

// socket.on('chat message', function(res) {
//     var messages = document.getElementById('messages');
//     var item = document.createElement('li');
//     var p = document.createElement('p');
//     var span1 = document.createElement('span');
//     var span2 = document.createElement('span');
//     var span3 = document.createElement('span');
//     span1.className = 'email';
//     span2.className = 'date';
//     span3.className = 'msg';
//     span1.textContent = `${res[0]} `;
//     span2.textContent = `[${res[1]}]: `;
//     span3.textContent = res[2];
//     p.appendChild(span1);
//     p.appendChild(span2);
//     p.appendChild(span3);
//     item.appendChild(p);
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight);
// });

socket.on('add item', function(res) {
    var table = document.getElementById('table');
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var img = document.createElement('img');
    td1.textContent = res[0];
    td2.textContent = res[1];
    img.alt = res[0];
    img.src = res[2];
    td3.appendChild(img);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
    table.appendChild(tbody);

    
    
    window.scrollTo(0, document.body.scrollHeight);
});