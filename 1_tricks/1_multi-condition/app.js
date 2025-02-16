/**  
 * Trong JavaScript, khi so sánh một object với một giá trị nguyên thủy (primitive value) như số hoặc chuỗi,
 * JavaScript sẽ chuyển đổi object đó thành một giá trị nguyên thủy bằng cách gọi phương thức valueOf() hoặc toString() trên object đó.
 * 
 * Trong trường hợp này, việc sử dụng phương thức valueOf() chỉ đơn giản là một cách GHI ĐÈ thương thức để trả về một số // #2
 * 
 * Việc sử dụng biến currentValue bên trong phương thức valueOf() là một ví dụ của closure (#1)
 */

let a = {
  currentValue: 1,
  valueOf: () => {
    const result = a.currentValue++; // #1
    return result;
  },
};

console.log(a.valueOf()); // #2
if (a == 1 && a == 2 && a == 3) {
  console.log("Hello Tips Javascript");
}