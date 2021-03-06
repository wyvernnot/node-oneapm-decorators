/**
 * Created by yan on 16-1-20.
 */
export default function (type, method, desc) {
  var old = desc.value;
  desc.value = function () {
    console.log(`${method} is called`);
    return old.apply(this, arguments);
  }
}