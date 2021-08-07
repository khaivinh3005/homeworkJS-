/**
 * Input:
 * số 2 chữ nhập người dùn nhập
 * 
 * 
 * Thực hiện:
 * B1: Tạo sự kiện onclick cho thẻ button
 * B2: tạo biến number và gán value cho biến number
 * B3: Tính
 * tạo biến hangChuc tính : const hangChuc = Math.floor(number / 10);
 * tạo biến hangDu : const hangDu = number % 10;
 * tạo biến tong : const tong = hangChuc + hangDu;
 * Tìm thẻ p và gán biến tổng cho thẻ p in ra màn hình
 * 
 * Output:
 * Tổng 2 số vừa nhập
 */

document.querySelector("button").onclick = function() {
    const number =parseInt(document.getElementById("inputNumber").value);
    const tong = Math.floor(number / 10) + (number % 10);
    document.getElementById("txt").innerHTML = "Tổng 2 số bạn vừa nhập : " +  tong;
}


