var count = 3;
while (count <= 20) {
  if (count % 9 === 0) {
    count++;
    continue;
  }
  console.log(count);
  count++;
}
