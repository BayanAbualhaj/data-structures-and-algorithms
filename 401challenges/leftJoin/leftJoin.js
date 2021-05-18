function leftJoin(hash1, hash2) {
    if(hash1&& hash2){
        
        let joinedTable = [];
    
        for (let i = 0; i < Object.keys(hash1.table).length; i++) {
    
            let leftKey = Object.values(hash1.table)[i].head.value.key;
            let leftValue = Object.values(hash1.table)[i].head.value.value;
    
            for (let j = 0; j < Object.keys(hash2.table).length; j++) {

                let rightKey = Object.values(hash2.table)[j].head.value.key;
                let rightValue = Object.values(hash2.table)[j].head.value.value;

                if (leftKey === rightKey) {
                    joinedTable.push([leftKey, leftValue, rightValue?rightValue:null]);
                }
            }
        }
        return joinedTable;
    }else{
        return "There is undefined hash table";
    }

}

module.exports = leftJoin;