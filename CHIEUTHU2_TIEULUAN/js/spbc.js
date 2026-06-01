const spbc = product.filter(item => item.loai === "banchay");

for (let i = 0; i < spbc.length; i++) {
    document.getElementById("spbc").innerHTML += `
            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="./images/${spbc[i].hinh}" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">${spbc[i].ten}</h4>
                            <p class="card-text">${spbc[i].mota}</p>
                            <h4 class="card-title text-danger">${spbc[i].giaban}</h4>
                            <button class="btn" style="background-color:#c89b6d; color:white;" onclick='detail(${i})' }>Chi tiết</button>
                            <button class="btn" style="background-color:#a65f2b; color:white;" onclick="addCart(this)">Thêm vào giỏ hàng</button>
                        </div>
                </div>
            </div>
    `;
}

function detail(i){
    window.location.href=`detail.html?id=${i}` // chuyển sang trang detail.html
}