/**
 * Input:
 * 5 Số vừa nhập
 * 
 * Thực hiện:
 * B1: Tạo biến USD và gán giá trị.
 * B2: Tạo sự kiến click vào biến btn và gọi giá trị id của thẻ input
 * B3: Tính giá trị change : giá trị của thẻ input * biến USD
 * B4: In kết quả của giá trị change ra màn hình
 * 
 * Output:
 * Số tiền sau khi quy đổi
 */

const btn = document.querySelector("button");
const USD = 23500;
btn.addEventListener("click", function() {
    const yourUSD = parseFloat(document.getElementById("myNumber").value);
    const change = parseFloat(yourUSD * USD);
    document.getElementById("txt").innerHTML = "Số tiền sau khi quy đổi của bạn : " + change +" VND";
})
