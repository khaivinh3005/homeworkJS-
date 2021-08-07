/**
 * Input:
 * chieu dai và chiều rộng
 * 
 * 
 * 
 * Thực hiện:
 * B1: Tạo biến btn
 * B2: tao sự kiện click vào biến btn
 * B3: tạo biến height , width và lấy giá trị của từng thẻ input gán vào biến.
 * B4: tính diện tích và chu vi 
 * B5: gán giá trị dienTich và chuVi cho thẻ có id là span1 và span 2
 * B6: In giá trị ra màn hình
 *
 * 
 * Output:
 * Diện tích và chu vi hình chữ nhật
 */

document.querySelector("button").onclick = function() {
    var height = parseFloat(document.getElementById("myHeight").value);
    var width = parseFloat(document.getElementById("myWidth").value);
    var dienTich = (height * width).toFixed(2);
    var chuVi = ((height +width) * 2).toFixed(2);
    document.getElementById("span1").innerHTML = ": " + dienTich;
    document.getElementById("span2").innerHTML = ": " + chuVi;
    console.log(dienTich);
    console.log(chuVi);
}
