/**
 * Input:
 * Tiền một ngày : 100000
 * Số ngày làm : Người dùng nhập
 * 
 * 
 * Thực hiện:
 * B1: Tạo biến luong,days ,total,btn
 * B2: tao sự kiện click vào biến btn
 * B3: Lấy giá trị value từ thẻ input gán vào biến days
 * B4: Gán vào biến total = biến days * luong
 * B5: Tạo thẻ mới span và tạo nội dung cho thẻ txt và gán cho txt biến total
 * B6: Cho thẻ span lấy thẻ txt là thẻ con
 * B7: Tìm giá trị thẻ div có id: myDIV và cho thẻ span làm thẻ con
 * 
 * Output:
 * Tiền lương
 */

const luong = 100000;
const btn = document.querySelector("button");
btn.addEventListener("click" , function() {
    const days = parseFloat(document.getElementById("days").value);
    const total = days * luong;
    var span =  document.createElement("span");
    var txt = document.createTextNode("Tiền lương của bạn là: "+total + "VND" );
    span.appendChild(txt);
    document.getElementById("myDIV").appendChild(span);
})
