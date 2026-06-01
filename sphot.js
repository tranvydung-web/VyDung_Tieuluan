const sphot = product.filter(item => item.loai === "hot");

for (let i = 0; i < sphot.length; i++) {
    let indexGoc = product.indexOf(sphot[i]);
    document.getElementById("sphot").innerHTML += `
            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="./images/${sphot[i].hinh}" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">${sphot[i].ten}</h4>
                            <p class="card-text">${sphot[i].mota}</p>
                            <h4 class="card-title text-danger">${sphot[i].giaban}</h4>
                            <button class="btn" style="background-color:#c89b6d; color:white;" onclick='detail(${indexGoc})' }>Chi tiết</button>
                            <button class="btn" style="background-color:#a65f2b; color:white;" onclick="addCart(this)">Thêm vào giỏ hàng</button>
                        </div>
                </div>
            </div>
    `;
}

function detail(i){
    window.location.href=`detail.html?id=${i}` // chuyển sang trang detail.html
}