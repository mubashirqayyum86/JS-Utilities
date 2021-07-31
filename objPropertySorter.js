
        let obj = {
            z : 234,
            a : 123,
            l : 234,
            b : 234,
        }
        
        for(key in obj){
           
           if(key in obj)
            console.log(`${key} = ${obj[key]}`)
        }

        

        let objPropertySorter = obj => {
            let objPropertyArray = []
            
            for(key in obj){
                objPropertyArray.push(key);
            }

            console.log(objPropertyArray)

            for(i = 0; i<objPropertyArray.length; i++){
                for(j=i+1; j<objPropertyArray.length;j++){
                    if(objPropertyArray[i] > objPropertyArray[j]){
                        temp = objPropertyArray[i]
                        objPropertyArray[i] = objPropertyArray[j]
                        objPropertyArray[j] = temp 
                    }
                }
            }

            console.log(objPropertyArray)

            let sortedPropertiesObj = {}
            for(i = 0; i<objPropertyArray.length; i++){
                sortedPropertiesObj[objPropertyArray[i]] = obj[objPropertyArray[i]]
            }

            return sortedPropertiesObj
        }

        let newSortedObject = objPropertySorter(obj)

        for(key in newSortedObject){
            console.log(`${key} = ${newSortedObject[key]}`)
        }
    
