class Exercise1{

    rules (number) {
        let result = "";
    
        if (number % 3 === 0)
            result = "Visual";
    
        if (number % 5 === 0)
            result += " Nuts";
    
            return result ? result.trim() : number;
     };

     print (initialNumber = 1, finalNumber = 100, printLog = true)  {
        for (let number = initialNumber; number <= finalNumber; number++) {
            let result= this.rules(number);

            if (printLog)
                console.log(result);   
        }
    };

}

const exercise1 = new Exercise1();

exercise1.print();

export {exercise1};
