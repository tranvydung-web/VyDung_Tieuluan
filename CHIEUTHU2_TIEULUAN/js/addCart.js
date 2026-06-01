let giohang = JSON.parse(localStorage.getItem("luugiohang")) || [];


function addCart(x) {
    let ten = x.parentElement.children[0].innerText;
    console.log(ten);

    let hinh = x.parentElement.previousElementSibling.src;

    let giaban = x.parentElement.children[2].innerText;
    console.log(giaban);

    let soluong = 1;
    console.log(soluong);

    // Tạo đối tượng
    let item = {
        name: ten,
        image: hinh,
        count: soluong,
        price: giaban,
    }

    console.log(item);

    // Nếu giỏ hàng rỗng
    if (giohang.length == 0) {

        giohang.push(item);

    } else {

        var foundIndex = -1;

        for (var i = 0; i < giohang.length; i++) {

            if (giohang[i].name === ten) {
                foundIndex = i;
                break;
            }
        }

        // Nếu sản phẩm đã tồn tại
        if (foundIndex > -1) {

            giohang[foundIndex].count++;

        } else {

            giohang.push(item);
        }
    }

    // Hiển thị lại cart
    //viewcart();

    // Lưu localStorage
    localStorage.setItem(
        'luugiohang',
        JSON.stringify(giohang)
    );

}

console.log(giohang);

function viewcart() {

    var kq =
        `
        `

    var tongtien = 0;

    for (let i = 0; i < giohang.length; i++) {

        let stt = i + 1;

        let thanhtien =
            giohang[i].giasp * giohang[i].soluong;

        tongtien += thanhtien;

        kq += `
           
       `;
    }

    kq +=
        `
       
`;

    document.getElementById('hienthigiohang').style.display = 'block';

    document.getElementById('chuachonsanpham').style.display = 'none';

    document.getElementById('hienthigiohang').innerHTML = kq;

}

function xoa(obj, i) {

    // Xóa khỏi mảng
    giohang.splice(i, 1);

    // Cập nhật giao diện
    viewcart();

    // Lưu lại localStorage
    localStorage.setItem(
        'luugiohang',
        JSON.stringify(giohang)
    );

    // Nếu cart rỗng
    if (giohang.length === 0) {

        document.getElementById('hienthigiohang').style.display = 'none';

        document.getElementById('chuachonsanpham').style.display = 'block';
    }
}


