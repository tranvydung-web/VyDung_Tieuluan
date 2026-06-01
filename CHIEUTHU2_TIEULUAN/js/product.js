const product = [
    {
        id: 1, ten: "Bánh Dâu Ngọt", hinh: "1.jpg", giaban: 20000, loai: "banchay", danhmuc: "Bánh ngọt", mota: "Đậm vị dâu tươi, kem dâu ngọt dịu.", mota_chitiet: `
    Bánh Dâu Ngọt là loại bánh bông lan mềm mịn kết hợp với lớp kem tươi béo nhẹ và dâu tây tươi. Bánh có vị ngọt thanh, không quá gắt, phù hợp cho mọi lứa tuổi. Phần cốt bánh được nướng từ bột mì, trứng gà và sữa tươi tạo nên độ mềm xốp tự nhiên, khi ăn có cảm giác nhẹ và tan trong miệng.
    
    Dâu tây tươi được trang trí trên mặt bánh giúp tăng thêm hương vị chua nhẹ, cân bằng vị ngọt của kem. Lớp kem được đánh bông mịn, tạo độ béo vừa phải nhưng không gây cảm giác ngấy. Sự kết hợp giữa cốt bánh mềm, kem tươi và dâu tây mang lại hương vị hài hòa và hấp dẫn.
    
    Ngoài ra, bánh còn được trang trí đẹp mắt với màu sắc tươi sáng từ dâu tây và kem, giúp chiếc bánh trở nên nổi bật và thích hợp làm quà tặng. Bánh Dâu Ngọt thường được lựa chọn trong các dịp sinh nhật, tiệc nhỏ, họp mặt gia đình hoặc làm món tráng miệng sau bữa ăn.
    
    Nhờ sử dụng nguyên liệu tươi ngon và quy trình chế biến cẩn thận, bánh luôn giữ được độ mềm, thơm và hương vị tự nhiên. Đây là một lựa chọn lý tưởng dành cho những ai yêu thích các loại bánh ngọt nhẹ nhàng và tinh tế.
    `, hinhphu: ["1.jpg", "2.jpg", "17.jpg", "18.jpg"]
    },

    {
        id: 2, ten: "Bánh Cuộn Matcha", hinh: "3.jpg", giaban: 22000, loai: "banchay", danhmuc: "Bánh ngọt", mota: "Trà xanh thanh nhẹ, kem béo dịu.", mota_chitiet: `
    Bánh Matcha Cuộn Kem là sự kết hợp tinh tế giữa hương vị trà xanh Nhật Bản và lớp kem tươi béo nhẹ. Phần cốt bánh được làm từ bột mì, trứng gà và bột matcha nguyên chất, mang đến màu xanh tự nhiên cùng hương thơm dịu nhẹ đặc trưng. Khi thưởng thức, bạn sẽ cảm nhận được độ mềm mịn và xốp nhẹ của bánh, tan dần trong miệng.
    
    Lớp kem bên trong được đánh bông mịn, không quá ngọt, giúp cân bằng vị đắng nhẹ của matcha. Nhờ đó, bánh mang lại cảm giác thanh mát và dễ ăn, không gây ngấy. Đây là lựa chọn lý tưởng cho những ai yêu thích hương vị nhẹ nhàng, tinh tế.
    
    Bánh thường được dùng trong các buổi trà chiều, gặp gỡ bạn bè hoặc làm món tráng miệng sau bữa ăn. Với thiết kế cuộn đẹp mắt và màu sắc hài hòa, sản phẩm còn thích hợp làm quà tặng trong những dịp đặc biệt.
    
    Nhờ sử dụng nguyên liệu chất lượng và quy trình chế biến cẩn thận, bánh luôn giữ được độ tươi ngon và hương vị tự nhiên. Đây chắc chắn là món bánh đáng thử dành cho những người yêu thích sự mới lạ và thanh tao.
    `, hinhphu: ["3.jpg", "15.jpg", "3.jpg", "15.jpg"]
    },

    {
        id: 3, ten: "Bánh Dâu Trái Tim", hinh: "4.jpg", giaban: 25000, loai: "banchay", danhmuc: "Bánh ngọt", mota: "Socola đậm vị, kết hợp với dâu tươi.", mota_chitiet: `
    Bánh Socola Dâu Trái Tim là sự kết hợp hoàn hảo giữa vị socola đậm đà và dâu tây tươi chua nhẹ. Phần cốt bánh mềm mịn, được làm từ bột cacao nguyên chất tạo nên màu sắc hấp dẫn và hương thơm đặc trưng.
    
    Lớp kem bên trong béo nhẹ, không quá ngọt, giúp cân bằng vị đắng nhẹ của socola. Dâu tây tươi được đặt ở trung tâm bánh, tạo điểm nhấn cả về hương vị lẫn hình thức.
    
    Bánh có thiết kế hình trái tim xinh xắn, rất phù hợp cho các dịp đặc biệt như sinh nhật, kỷ niệm hoặc làm quà tặng. Khi thưởng thức, bạn sẽ cảm nhận được sự hòa quyện tinh tế giữa vị ngọt, đắng nhẹ và chua dịu.
    
    Nhờ nguyên liệu tươi ngon và quy trình chế biến cẩn thận, bánh luôn giữ được độ mềm mịn và hương vị hấp dẫn. Đây là lựa chọn lý tưởng cho những ai yêu thích socola nhưng vẫn muốn có sự cân bằng nhẹ nhàng.
    `, hinhphu: ["4.jpg", "15.jpg", "4.jpg", "15.jpg"]
    },

    {
        id: 4, ten: "Bánh Mặn Phô Mai Gà", hinh: "8.jpg", giaban: 24000, loai: "banchay", danhmuc: "Bánh mặn", mota: "Bánh mặn phủ gà xé và phô mai béo.", mota_chitiet: `
    Bánh Mặn Phô Mai Gà Xé là món bánh mềm mịn kết hợp cùng lớp nhân mặn đậm đà, phù hợp cho những ai không thích vị ngọt. Phần vỏ bánh được nướng vàng đều, có độ mềm xốp vừa phải.
    
    Bên trên bánh được phủ lớp gà xé tơi, kết hợp với phô mai béo thơm tạo nên hương vị hấp dẫn. Khi ăn, bạn sẽ cảm nhận được sự hòa quyện giữa vị mặn nhẹ, béo và thơm.
    
    Bánh thích hợp dùng làm bữa ăn nhẹ, ăn sáng hoặc mang theo khi đi học, đi làm. Kích thước nhỏ gọn, tiện lợi và dễ ăn.
    
    Nhờ sử dụng nguyên liệu tươi và chế biến trong ngày, bánh luôn giữ được độ ngon và không bị khô. Đây là lựa chọn hoàn hảo cho những ai muốn đổi vị với bánh mặn.
    `, hinhphu: ["8.jpg", "10.jpg", "13.jpg", "14.jpg"]
    },

    {
        id: 5, ten: "Bánh Vanilla Phủ Socola", hinh: "2.jpg", giaban: 26000, loai: "khuyenmai", danhmuc: "Bánh ngọt", mota: "Vanilla thơm dịu, phủ socola đậm vị.", mota_chitiet: `
    Bánh Vanilla Phủ Socola mang đến sự kết hợp hài hòa giữa vị vanilla nhẹ nhàng và lớp socola đậm đà bên ngoài. Phần cốt bánh mềm xốp, thơm dịu mùi vanilla tự nhiên.
    
    Lớp socola phủ bên trên có vị đắng nhẹ, giúp cân bằng độ ngọt của bánh và tạo nên hương vị tròn đầy. Khi thưởng thức, bạn sẽ cảm nhận được sự tan chảy nhẹ của lớp socola kết hợp với bánh mềm.
    
    Bánh có thiết kế đơn giản nhưng tinh tế, phù hợp cho nhiều dịp như ăn tráng miệng, uống trà hoặc làm quà tặng.
    
    Với nguyên liệu chất lượng và quy trình chế biến kỹ lưỡng, bánh luôn giữ được độ mềm, thơm và không bị ngấy. Đây là lựa chọn quen thuộc nhưng không bao giờ lỗi thời.
    `, hinhphu: ["2.jpg", "1.jpg", "17.jpg", "18.jpg"]
    },

    {
        id: 6, ten: "Bánh Kem Xoài Tươi", hinh: "5.jpg", giaban: 150000, loai: "khuyenmai", danhmuc: "Bánh đặc biệt", mota: "Kem béo nhẹ, kết hợp xoài tươi.", mota_chitiet: `
    Bánh Kem Xoài Tươi là sự kết hợp giữa lớp bánh mềm mịn và xoài chín ngọt thanh. Phần cốt bánh được nướng xốp nhẹ, giúp giữ được độ mềm và không bị khô.
    
    Lớp kem tươi béo nhẹ được phủ đều, kết hợp với xoài tươi cắt nhỏ tạo nên vị ngọt tự nhiên và thanh mát. Mỗi miếng bánh mang lại cảm giác tươi mới và dễ chịu.
    
    Bánh có màu sắc bắt mắt với sắc vàng của xoài, rất phù hợp cho các buổi tiệc hoặc làm quà tặng. Hương vị nhẹ nhàng nên phù hợp với nhiều đối tượng.
    
    Nhờ nguyên liệu tươi ngon và quy trình bảo quản tốt, bánh luôn giữ được độ tươi và hương vị tự nhiên. Đây là lựa chọn lý tưởng cho những ai yêu thích trái cây.
    `, hinhphu: ["5.jpg", "11.jpg", "12.jpg", "23.jpg"]
    },

    {
        id: 7, ten: "Bánh Sinh Nhật Trái Cây", hinh: "6.jpg", giaban: 320000, loai: "khuyenmai", danhmuc: "Bánh đặc biệt", mota: "Trang trí trái cây tươi, ngọt nhẹ.", mota_chitiet: `
    Bánh Sinh Nhật Trái Cây là loại bánh kem được trang trí đẹp mắt với nhiều loại trái cây tươi. Phần cốt bánh mềm mịn, kết hợp với lớp kem tươi béo nhẹ.
    
    Trái cây như dâu, kiwi, nho được sắp xếp hài hòa trên bề mặt, tạo nên hương vị đa dạng và hấp dẫn. Vị ngọt của kem hòa quyện với vị chua nhẹ của trái cây giúp bánh không bị ngấy.
    
    Bánh thường được lựa chọn trong các dịp sinh nhật, lễ kỷ niệm hoặc họp mặt gia đình. Thiết kế sang trọng, bắt mắt giúp tạo điểm nhấn cho bữa tiệc.
    
    Với nguyên liệu tươi và cách trang trí tinh tế, bánh không chỉ ngon mà còn đẹp mắt. Đây là lựa chọn hoàn hảo cho những dịp đặc biệt.
    `, hinhphu: ["6.jpg", "11.jpg", "5.jpg", "23.jpg"]
    },

    {
        id: 8, ten: "Bánh Sừng Bò Kem Xoài", hinh: "7.jpg", giaban: 32000, loai: "khuyenmai", danhmuc: "Bánh mặn", mota: "Vỏ giòn nhẹ, nhân kem xoài thơm mát.", mota_chitiet: `
    Bánh Sừng Bò Kem Xoài là sự kết hợp giữa lớp vỏ bánh giòn nhẹ và nhân kem xoài thơm mát. Vỏ bánh được nướng nhiều lớp tạo độ xốp và giòn đặc trưng.
    
    Bên trong là lớp kem xoài béo nhẹ, mang hương vị ngọt thanh tự nhiên. Khi ăn, bạn sẽ cảm nhận được sự tương phản thú vị giữa lớp vỏ giòn và nhân mềm.
    
    Bánh thích hợp dùng cho bữa sáng hoặc ăn nhẹ trong ngày. Thiết kế nhỏ gọn, tiện lợi để mang theo.
    
    Nhờ nguyên liệu tươi và cách chế biến kỹ lưỡng, bánh luôn giữ được độ giòn bên ngoài và mềm mịn bên trong. Đây là món bánh vừa ngon vừa tiện lợi.
    `, hinhphu: ["7.jpg", "7.jpg", "7.jpg", "7.jpg"]
    },

    {
        id: 9, ten: "Bánh Dâu Trái Tim", hinh: "4.jpg", giaban: 34000, loai: "hot", danhmuc: "Bánh đặc biệt", mota: "Socola đậm vị, kết hợp với dâu tươi.", mota_chitiet: `
    Bánh Socola Dâu Trái Tim là sự kết hợp hoàn hảo giữa vị socola đậm đà và dâu tây tươi chua nhẹ. Phần cốt bánh mềm mịn, được làm từ bột cacao nguyên chất tạo nên màu sắc hấp dẫn và hương thơm đặc trưng.
    
    Lớp kem bên trong béo nhẹ, không quá ngọt, giúp cân bằng vị đắng nhẹ của socola. Dâu tây tươi được đặt ở trung tâm bánh, tạo điểm nhấn cả về hương vị lẫn hình thức.
    
    Bánh có thiết kế hình trái tim xinh xắn, rất phù hợp cho các dịp đặc biệt như sinh nhật, kỷ niệm hoặc làm quà tặng. Khi thưởng thức, bạn sẽ cảm nhận được sự hòa quyện tinh tế giữa vị ngọt, đắng nhẹ và chua dịu.
    
    Nhờ nguyên liệu tươi ngon và quy trình chế biến cẩn thận, bánh luôn giữ được độ mềm mịn và hương vị hấp dẫn. Đây là lựa chọn lý tưởng cho những ai yêu thích socola nhưng vẫn muốn có sự cân bằng nhẹ nhàng.
    `, hinhphu: ["4.jpg", "15.jpg", "4.jpg", "15.jpg"]
    },

    {
        id: 10, ten: "Phô Mai Viên Nướng", hinh: "9.jpg", giaban: 36000, loai: "hot", danhmuc: "Bánh mặn", mota: "Giòn bên ngoài, mềm béo bên trong.", mota_chitiet: `
    Bánh Phô Mai Viên Nướng là món bánh nhỏ xinh với lớp vỏ vàng giòn nhẹ bên ngoài và phần ruột mềm mịn bên trong. Bánh được làm từ bột mì kết hợp với phô mai, tạo nên hương thơm béo đặc trưng.
    
    Khi thưởng thức, bạn sẽ cảm nhận được lớp vỏ hơi giòn, bên trong mềm và có vị béo nhẹ của phô mai. Kích thước nhỏ gọn giúp bánh dễ ăn và không gây ngấy.
    
    Bánh thường được dùng làm món ăn vặt, ăn nhẹ trong ngày hoặc dùng kèm trà. Với hình dạng viên nhỏ xinh, bánh rất phù hợp để chia sẻ cùng bạn bè.
    
    Nhờ được nướng trong ngày và sử dụng nguyên liệu tươi, bánh luôn giữ được độ ngon và hương vị hấp dẫn. Đây là lựa chọn lý tưởng cho những ai yêu thích bánh phô mai.
        `, hinhphu: ["9.jpg", "10.jpg", "14.jpg", "8.jpg"]
    },

    {
        id: 11, ten: "Bánh Bông Lan Phủ Dừa", hinh: "15.jpg", giaban: 38000, loai: "hot", danhmuc: "Bánh ngọt", mota: "Mềm mịn, phủ dừa thơm nhẹ.", mota_chitiet: `
    Bánh Bông Lan Phủ Dừa là loại bánh mềm mịn được phủ lớp dừa bào bên ngoài tạo nên hương vị đặc trưng. Phần cốt bánh xốp nhẹ, có màu vàng nhạt và hương thơm dịu.
    
    Lớp dừa bên ngoài giúp tăng thêm độ béo và tạo cảm giác thú vị khi ăn. Bên trong bánh có lớp kem nhẹ, giúp bánh không bị khô và dễ thưởng thức.
    
    Bánh có kích thước nhỏ gọn, phù hợp để ăn tráng miệng hoặc dùng trong các buổi trà chiều. Hình thức đơn giản nhưng tinh tế, dễ dàng thu hút người nhìn.
    
    Nhờ nguyên liệu tươi và quy trình chế biến cẩn thận, bánh luôn giữ được độ mềm và hương vị tự nhiên. Đây là món bánh nhẹ nhàng, dễ ăn cho mọi lứa tuổi.
        `, hinhphu: ["15.jpg", "15.jpg", "15.jpg", "15.jpg"]
    },

    {
        id: 12, ten: "Set Bánh Giáng Sinh", hinh: "25.jpg", giaban: 40000, loai: "hot", danhmuc: "Bánh đặc biệt", mota: "Set bánh xinh xắn, dễ thương, thơm ngon.", mota_chitiet: `
    Set Bánh Ngọt Mini Tặng Quà là sự kết hợp của nhiều loại bánh nhỏ được đóng gói trong hộp xinh xắn. Set bao gồm bánh bông lan mini và các loại bánh quy trang trí đáng yêu.
    
    Mỗi chiếc bánh đều có hương vị ngọt nhẹ, dễ ăn và phù hợp với nhiều đối tượng. Thiết kế đáng yêu với các hình trang trí giúp set bánh trở nên đặc biệt và thu hút.
    
    Sản phẩm rất thích hợp để làm quà tặng trong các dịp sinh nhật, lễ hoặc đơn giản là dành tặng người thân. Hộp bánh được đóng gói cẩn thận, tiện lợi và đẹp mắt.
    
    Nhờ sử dụng nguyên liệu chất lượng và chế biến trong ngày, bánh luôn giữ được độ tươi ngon. Đây là lựa chọn hoàn hảo cho những ai muốn tìm một món quà vừa ngon vừa xinh.
        `, hinhphu: ["25.jpg", "26.jpg", "27.jpg", "28.jpg"]
    },

    {
        id: 13, ten: "Bánh Sinh Nhật Trái Cây", hinh: "6.jpg", giaban: 320000, loai: "sinhnhat", danhmuc: "Bánh đặc biệt", mota: "Trang trí trái cây tươi, ngọt nhẹ.", mota_chitiet: `
    Bánh Sinh Nhật Trái Cây là loại bánh kem được trang trí đẹp mắt với nhiều loại trái cây tươi. Phần cốt bánh mềm mịn, kết hợp với lớp kem tươi béo nhẹ.
    
    Trái cây như dâu, kiwi, nho được sắp xếp hài hòa trên bề mặt, tạo nên hương vị đa dạng và hấp dẫn. Vị ngọt của kem hòa quyện với vị chua nhẹ của trái cây giúp bánh không bị ngấy.
    
    Bánh thường được lựa chọn trong các dịp sinh nhật, lễ kỷ niệm hoặc họp mặt gia đình. Thiết kế sang trọng, bắt mắt giúp tạo điểm nhấn cho bữa tiệc.
    
    Với nguyên liệu tươi và cách trang trí tinh tế, bánh không chỉ ngon mà còn đẹp mắt. Đây là lựa chọn hoàn hảo cho những dịp đặc biệt.
    `, hinhphu: ["6.jpg", "11.jpg", "5.jpg", "23.jpg"]
    },

    {
        id: 14, ten: "Bánh Kem Dâu Hồng", hinh: "11.jpg", giaban: 110000, loai: "sinhnhat", danhmuc: "Bánh đặc biệt", mota: "Mềm mịn, vị dâu nhẹ nhàng.", mota_chitiet: `
    Bánh Kem Dâu Hồng Ngọt Ngào là chiếc bánh mang tông màu hồng dễ thương, phù hợp với những ai yêu thích sự nhẹ nhàng. Phần cốt bánh mềm mịn, kết hợp với lớp kem dâu thơm dịu.
    
    Lớp kem bên ngoài được phủ đều, có vị ngọt nhẹ và không gây ngấy. Trang trí bánh bằng bánh quy nhỏ và dâu giúp tăng thêm phần đáng yêu và hấp dẫn.
    
    Bánh phù hợp cho sinh nhật, tặng bạn bè hoặc những dịp đặc biệt. Thiết kế xinh xắn giúp chiếc bánh trở nên nổi bật trên bàn tiệc.
    
    Nhờ nguyên liệu tươi và cách chế biến tỉ mỉ, bánh luôn giữ được độ mềm và hương vị tự nhiên. Đây là lựa chọn lý tưởng cho những ai thích bánh nhẹ nhàng, dễ thương.
        `, hinhphu: ["11.jpg", "12.jpg", "23.jpg", "5.jpg"]
    },

    {
        id: 15, ten: "Bánh Kem Socola Dâu", hinh: "12.jpg", giaban: 135000, loai: "sinhnhat", danhmuc: "Bánh đặc biệt", mota: "Socola đậm, dâu tươi chua nhẹ.", mota_chitiet: `
    Bánh Kem Socola Dâu là sự kết hợp giữa lớp bánh socola đậm vị và dâu tây tươi. Phần cốt bánh mềm mịn, mang hương cacao đặc trưng.
    
    Lớp socola phủ bên ngoài có độ bóng đẹp, vị đậm và hơi đắng nhẹ. Dâu tây tươi được đặt trên mặt bánh giúp cân bằng hương vị và tạo điểm nhấn.
    
    Bánh phù hợp cho các dịp sinh nhật hoặc làm quà tặng. Thiết kế đẹp mắt với màu sắc hài hòa giữa socola và dâu.
    
    Nhờ sử dụng nguyên liệu chất lượng và chế biến kỹ lưỡng, bánh luôn giữ được độ ngon và hương vị hấp dẫn. Đây là lựa chọn hoàn hảo cho người yêu socola.
        `, hinhphu: ["12.jpg", "23.jpg", "5.jpg", "6.jpg"]
    },

    {
        id: 16, ten: "Bánh Kem Sinh Nhật", hinh: "23.jpg", giaban: 310000, loai: "sinhnhat", danhmuc: "Bánh đặc biệt", mota: "Kem mịn, ngọt nhẹ, trang trí bắt mắt.", mota_chitiet: `
    Bánh Sinh Nhật Kem Xanh là chiếc bánh nổi bật với lớp kem màu xanh dịu mắt. Phần cốt bánh mềm mịn, kết hợp với lớp kem tươi béo nhẹ.
    
    Kem được tạo hình uốn lượn xung quanh bánh, kết hợp với cherry đỏ tạo điểm nhấn nổi bật. Hương vị ngọt vừa phải, dễ ăn và không gây ngấy.
    
    Bánh phù hợp cho các dịp sinh nhật hoặc tiệc nhỏ. Thiết kế đẹp mắt giúp chiếc bánh trở thành trung tâm của bữa tiệc.
    
    Nhờ nguyên liệu tươi ngon và quy trình chế biến cẩn thận, bánh luôn giữ được độ mềm và hương vị tự nhiên. Đây là lựa chọn phù hợp cho mọi lứa tuổi.
        `, hinhphu: ["23.jpg", "11.jpg", "12.jpg", "6.jpg"]
    }
];