const arr = [1,2,3,4,5];

//map
const mapArr = arr.map((ele)=> {return ele*4});
console.log(mapArr)

//reduce
const sum = arr.reduce((acc, ele)=>{return acc += ele}, 0);
console.log(sum)

//filter
const filterData = arr.filter((ele)=> ele % 4 === 0)
console.log(filterData)


const data = [
  {
    productID: 1,
    productName: "A",
    price: 499,
    manufacturingDate: "22-09-2025",
    color: "red"
  },
  {
    productID: 2,
    productName: "B",
    price: 599,
    manufacturingDate: "23-09-2025",
    color: "green"
  },
  {
    productID: 3,
    productName: "C",
    price: 699,
    manufacturingDate: "24-09-2025",
    color: "blue"
  },
  {
    productID: 4,
    productName: "D",
    price: 799,
    manufacturingDate: "25-09-2025",
    color: "orange"
  }
]

const mapData = data.map((ele) => ele.productName);
console.log(mapData);

const filterDat = data.filter((ele)=> ele.price < 600)
console.log(filterDat)