// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach(  (item) => {
//     console.log(item);
    
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter(  (num) => {
//     return num > 4  
// })
// console.log(newNums);

// const newNums = []

// myNums.forEach(  (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book One', genre: 'Non-Fiction', publish: 1991, edition: 2005
    },
    {
        title: 'Book Two', genre: 'History', publish: 2000, edition: 2008
    },
    {
        title: 'Book Three', genre: 'Non-Fiction', publish: 1985, edition: 2002
    },
    {
        title: 'Book Four', genre: 'History', publish: 1989, edition: 2009
    },
    {
        title: 'Book Five', genre: 'Fiction', publish: 1988, edition: 2010
    },
    {
        title: 'Book Six', genre: 'History', publish: 1995, edition: 2000
    },
    {
        title: 'Book Seven', genre: 'Non-Fiction', publish: 1996, edition: 2001
    },
    {
        title: 'Book Eight', genre: 'History', publish: 1999, edition: 2003
    }
]

let userBooks = books.filter(  (bk) => bk.genre === 'History')

userBooks = books.filter(  (bk) => { 
    return bk.publish <= 2000  && bk.genre === 'History'
})

console.log(userBooks);




