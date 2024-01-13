// Create a chunkArray function that splits an array into sub-arrays (chunks) of a specified size. 
// ex. chunkArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  3) should give [[0, 1, 2], [3, 4 ,5], [6, 7, 8]. [9]]

const chunkArray = (arr, n) => {
    const segmentedArray = [];
    for (let element of arr) {
        let lastArray = segmentedArray[segmentedArray.length - 1];
        console.log("🚀 ~ chunkedArray ~ lastArray:", lastArray)
        
        if (!lastArray || lastArray.length === n) {
            segmentedArray.push([element])
        }
        else {
            lastArray.push(element);
        }
    }
    return segmentedArray;
}

console.log(chunkArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  3));

// A simpler and better way using splice method

const succinctChunkArray = (arr, size) => {
    let chunkedArray = [];
    let copyArray = [...arr];

    while( copyArray.length > 0) {
        let chunk = copyArray.splice(0, size);
        chunkedArray.push(chunk);
    }
    return chunkedArray;
}

console.log('succinctChunkArray result:', succinctChunkArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  3));