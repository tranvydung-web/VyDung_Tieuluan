const sinhnhat = product.filter(item => item.loai === "sinhnhat");

for (let i = 0; i < sinhnhat.length; i++) {
    let indexGoc = product.indexOf(sinhnhat[i]);

    document.getElementById("sinhnhat").innerHTML += `
            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="./images/${sinhnhat[i].hinh}" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">${sinhnhat[i].ten}</h4>
                            <p class="card-text">${sinhnhat[i].mota}</p>
                            <h4 class="card-title text-danger">${sinhnhat[i].giaban}</h4>
                            <button class="btn btn-primary" onclick='detail(${indexGoc})' }>Chi tiết</button>
                            <button class="btn" style="background-color:#a65f2b; color:white;" onclick="addCart(this)">Thêm vào giỏ hàng</button>
                        </div>
                </div>
            </div>
    `;
}

function detail(i){
    window.location.href=`detail.html?id=${i}` // chuyển sang trang detail.html
}