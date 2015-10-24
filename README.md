# object-sort
Returns new object with sorted keys order.

## Usage
```
npm install object-sort
```

```
var objectSort = require('object-sort');
var obj = {b: 3, c: 5, a: 1};

objectSort(obj); // {a: 1, b: 3, c: 5}
objectSort(obj, true); // {c: 5, b: 3, a: 1}
```