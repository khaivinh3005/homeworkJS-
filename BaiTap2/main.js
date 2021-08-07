/**
 * Input:
 * 5 Số vừa nhập
 * 
 * Thực hiện:
 * B1: Tạo biến btn và gán giá trị thẻ button vào biến.
 * B2: Tạo sự kiến click vào biến btn và gọi giá trị id của 5 thẻ input
 * B3: Tính giá trị TB :  tổng 5 số vừa nhập / 5;
 * B4: In kết quả ra màn hình
 * 
 * Output:
 * Giá trị trung bình
 */

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
    const num1 =parseFloat(document.getElementById("num1").value);
    const num2 =parseFloat(document.getElementById("num2").value);
    const num3 =parseFloat(document.getElementById("num3").value);
    const num4 =parseFloat(document.getElementById("num4").value);
    const num5 =parseFloat(document.getElementById("num5").value);
    const giaTriTB = parseFloat((num1 + num2 + num3 + num4 + num5) / 5);
    document.getElementById("txt").innerHTML = "Gía trị trung bình của của 5 số vừa nhập là : " + giaTriTB;
})
