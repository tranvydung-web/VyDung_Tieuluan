const spkm = product.filter(item => item.loai === "khuyenmai");

for (let i = 0; i < spkm.length; i++) {
    let indexGoc = product.indexOf(spkm[i]);

    document.getElementById("spkm").innerHTML += `
            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="./images/${spkm[i].hinh}" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">${spkm[i].ten}</h4>
                            <p class="card-text">${spkm[i].mota}</p>
                            <h4 class="card-title text-danger">${spkm[i].giaban}</h4>
                            <button class="btn btn-primary" onclick='detail(${indexGoc})'>Chi tiết</button>
                            <button class="btn" style="background-color:#a65f2b; color:white;" onclick="addCart(this)">Thêm vào giỏ hàng</button>
                        </div>
                </div>
            </div>
    `;
}

function detail(i){
    window.location.href=`detail.html?id=${i}` // chuyển sang trang detail.html
}