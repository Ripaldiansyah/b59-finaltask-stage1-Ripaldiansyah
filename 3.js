/**
 *
 * @param {number[]} arr
 */
function sortArray(arr) {
  if (!Array.isArray(arr) || !arr.every((item) => typeof item === "number")) {
    console.log("Input harus berupa array yang berisi angka");
    return;
  }

  const arrSort = recursiveBubbleSort(arr, arr.length).toString();
  const { odd, even } = splitNumber(arr);

  console.log("Array : ", arrSort);
  console.log("Ganjil : ", odd);
  console.log("Genap : ", even);
}

function recursiveBubbleSort(arr, length) {
  if (length === 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  // console.log(arr);

  return recursiveBubbleSort(arr, length - 1);
}

function splitNumber(arr) {
  let even = [];
  let odd = [];

  arr.forEach((item) => {
    if (item % 2 === 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  });

  even = even.toString();
  odd = odd.toString();

  return { odd, even };
}
sortArray([2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11]);
