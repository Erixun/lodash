
const _ = {
  clamp(num, min, max) {
    return num < min? min : 
    num > max? max : 
    num;
  },
  inRange(num, start = 0, end) {
    if(!end) {
      end = start;
      start = 0;
    }
    if(start > end) {
      let temp = start;
      start = end;
      end = temp;
    }
    return start <= num && num < end;
  },
  words(str = '', pattern = ' ') {
    return str.split(pattern)
  },
  pad(str, width) {
    if(width < str.length) {
      return str;
    }
    const padding = width - str.length;
    const padsLeft = Math.floor(padding / 2);
    const padsRight = padding - padsLeft;
    return `${' '.repeat(padsLeft)}${str}${' '.repeat(padsRight)}`
  },
  has(obj, key) {
    return Object.keys(obj).includes(key);
  },
  invert(obj) {
    for (const [key, value] of Object.entries(obj)) {
      }
    Object.entries(obj).forEach(([key, value]) => {
        obj[value] = key;
        delete obj[key];
    })
      return obj;
  },
  findKey(obj, predicate) {
    let output;
    for(const key in obj) {
        if(predicate(obj[key])) {
          output = key;
          break;
        }
    }
    return output;
  },
  drop(arr, count = 1) {
    return arr.slice(count)
  },
  dropWhile(arr, predicate) {
    let index = 0;
    while(index < arr.length && predicate(arr[index], index)) {
      index++;
    }
    return this.drop(arr, index);
  },
  chunk(arr, size = 1) {
    const chunks = [];
    while(arr.length > 0) {
      chunks.push(arr.splice(0, size))
    }
    return chunks;
  }
}

module.exports = _;