//myFilter
Array.prototype.myFilter = function (callback, myThis) {
  if (this === null) {
    throw new Error("error");
  }
  let result = [];
  let cont = this;
  let object = Object(this);
  if (arguments.length > 1) {
    cont = myThis;
  }
  for (let i = 0; i < object.length; i++) {
    if (i in object) {
      if (callback.call(cont, this[i], i, object)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

//myMap
Array.prototype.myMap = function (callback, myThis) {
  if (this === null) {
    throw new Error("error");
  }
  let result2 = [];
  let cont2 = this;
  let object2 = Object(this);
  if (arguments.length > 1) {
    cont2 = myThis;
  }
  for (let i = 0; i < object2.length; i++)
    if (i in object2) {
      result2[i] = callback.call(cont2, this[i], i, object2);
    }
  return result2;
};

//myReduce
Array.prototype.myReduce = function (callback, myVal) {
  if (this === null) {
    throw new Error("error");
  }
  let i = 0;
  let object3 = Object(this);
  if (arguments.length < 2) {
    i = 1;
    myVal = object3[0];
  }
  for (; i < this.length; i++) {
    if (i in object3) {
      myVal = callback(myVal, object3[i], i, object3);
    }
  }
  return myVal;
};

arr = [1, 2, 3, 4, 5, 6, , 8, 9];

moreThenThree = (a) => a > 3;
console.log(arr.myFilter(moreThenThree));

twoTimesBigger = (a) => a * 2;
console.log(arr.myMap(twoTimesBigger));

sum = (a, b) => a + b;
mult = (a, b) => a * b;
console.log(arr.myReduce(sum));
console.log(arr.myReduce(sum, 10));
console.log(arr.myReduce(mult));

console.log(
  arr.myFilter(moreThenThree).myMap(twoTimesBigger).myReduce(sum, 10)
);

// task 1 part a
console.log(
  JSON.stringify(
    [1, 2, 3].map(function (x) {
      return x + 1;
    })
  ) === "[2,3,4]"
);

console.log(
  JSON.stringify(
    [1, 2, 3].myMap(function (x) {
      return x + 1;
    })
  ) === "[2,3,4]"
);

// task 1 part b
let newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

let newReleases2 = newReleases.myMap((a) => ({
  id: a.id,
  title: a.title,
}));
console.log(newReleases2);

//task 1 part v
console.log(
  JSON.stringify(
    [1, 2, 3].filter(function (x) {
      return x > 2;
    })
  ) === "[3]"
);

console.log(
  JSON.stringify(
    [1, 2, 3].myFilter(function (x) {
      return x > 2;
    })
  ) === "[3]"
);

//task 1 part g
ids = newReleases.myFilter((e) => e.rating == 5);
console.log(ids);

//task 1 part d ???
let movieLists = [
  {
    name: "Instant Queue",
    videos: [
      {
        id: 70111470,
        title: "Die Hard",
        boxarts: [
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg",
          },
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 654356453,
        title: "Bad Boys",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
          },
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg",
          },
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ],
  },
  {
    name: "New Releases",
    videos: [
      {
        id: 65432445,
        title: "The Chamber",
        boxarts: [
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg",
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg",
          },
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 675465,
        title: "Fracture",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
          },
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
          },
          {
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
          },
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ],
  },
];

// task Reduce??? абсолютное равенство дает false (и в reduce)
console.log(
  [1, 2, 3].myReduce(function (memo, item) {
    return memo + item;
  }) == [6]
);

console.log(
  [1, 2, 3].reduce(function (memo, item) {
    return memo + item;
  }, 10) === [16]
);

console.log(
  [1, 2, 3].myReduce(function (memo, item) {
    return memo + item;
  }, 10) == [16]
);

//task 1 part e
let ratings = [2, 3, 1, 4, 5];

let max = ratings.reduce((a, b) => {
  return Math.max(a, b);
});
console.log(max);

//task 1 part j
var boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];

let boxarts2 = boxarts.map((a) => ({
  sq: a.width * a.height,
  url: a.url,
}));
console.log(boxarts2);

//доделать!!!
let maxIndex = items.reduce(
  (acc, curr, i) => (items[acc].b > curr.b ? acc : i),
  0
);
