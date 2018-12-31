// My attempt (wrong):
let num = 0;
let hash = '#';

while (num < 7) {
  console.log(hash += '#');
  num += 1;
};

// Solution:
for (let line = '#'; line.length < 8; line += '#') {
  console.log(line);
};