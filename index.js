class GradeCalculator {
    constructor() {
        // initializing the result of the calculations and the array to store marks
        this.resultElement = document.getElementById("result");
        this.marksElement = document.getElementById("marks");
    }

    calculateGrade() {
        try {
            const marksInput = this.marksElement.value.trim().split(",");
            // check if values are < 8
            if (marksInput.length > 0 && marksInput.length < 8) {
                // Error identified by "ERR01"
                throw new Error("ERR01: You have entered less marks than the required for 8 subjects.");
            }
            // check if values are > 8
            if (marksInput.length > 8) {
                // Error identified by "ERR02"
                throw new Error("ERR02: You have entered more marks than the required for 8 subjects.");
            }

            const marks = marksInput.map(mark => parseFloat(mark));

            // check if values are not numeric, less than zero and greater than 100
            const invalidInput = marks.some(mark => isNaN(mark) || mark < 0 || mark > 100);
            if (invalidInput) {
                // Error identified by "ERR03"
                throw new Error("ERR03: Invalid input. Marks must be numeric and between 0 and 100.");
            }

            // average then assign grade
            const average = marks.reduce((sum, mark) => sum + mark, 0) / 8;
            let grade;
            if (average >= 90) {
                grade = 'A+';
            } else if (average >= 80) {
                grade = 'A';
            } else if (average >= 70) {
                grade = 'B';
            } else if (average >= 60) {
                grade = 'C';
            } else if (average >= 50) {
                grade = 'D';
            } else {
                grade = 'F';
            }

            // give comments based of the average
            let comment = "";
            switch (true) {
                case average >= 67 && average <= 100:
                    comment = 'Great';
                    break;
                case average >= 34 && average < 67:
                    comment = 'Fair';
                    break;
                case average >= 0 && average < 34:
                    comment = 'Bad';
                    break;
                default:
                    comment = 'Invalid!'; // Unlikely to display since the average is only calculated with the correct marks input.
                    
            }


            this.resultElement.innerHTML = `Average marks: ${average.toFixed(2)}<br>Grade: ${grade}<br>Comments: ${comment}`;
        
        // all errors (if any above) are caught here
        } catch (error) {
            this.resultElement.innerHTML = `<span style="color: red;">Error: ${error.message}</span>`;
        }
    }
}

// export the calculator class
module.exports = GradeCalculator;