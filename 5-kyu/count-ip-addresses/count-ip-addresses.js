function ipsBetween(start, end){
    start = start.split('.').reduce((acc, octet) => (acc << 8) + (+octet), 0) >>> 0;
    end = end.split('.').reduce((acc, octet) => (acc << 8) + (+octet), 0) >>> 0;
    return end - start
​
}