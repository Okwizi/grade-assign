### Grade Calculator *V 1.0*
#### By Okwizi
This is a site that accepts the calculations of 8 subjects, calculates the average, and displays the results of the average.
This repo contains the `.html`,`.css`, and `.js` files used to create the site which can be accessed [HERE](https://okwizi-grade-calculator.netlify.app).

### Pre-requisites
1. To clone this repo, __*git*__ needs to be installed on the destination machine. ([*Learn how*](https://github.com/git-guides/install-git)).
2. To access the `.html`,`.css`, and `.js` files, it is recommended to have an __*integrated development environment*__ (IDE) Like [VS Code](https://code.visualstudio.com/download).
4. To deploy the site, use __*Netlify*__ (must have Netlify installed). ([*Learn how*](https://docs.netlify.com/cli/get-started/)). You also need to create an account or login into __*Netlify*__.
5. To view the site, a web browser on the machine with a network connection is needed. Download Chrome Browser [HERE](https://www.google.com/chrome/)

### Breakdown of `.html`
This is the site's *skeletons* where the titles, paragraphs, body, form, footer etc are defined.

### Breakdown of `.css`
This is where the styling comes in (there is also some styling under `<style>` in the `.html` file).

### Breakdown of `.js`
This is the logic of the site where the calculator does the necessary calculation and gives the correct output.

### Flow of the functionality
Once the [site](https://okwizi-grade-calculator.netlify.app) has loaded, the user is prompted to enter 8 marks for 8 subjects separating them with a comma.
If the user enters a non-numeric character, a numeric character greater than 100 or a numeric character less than 0, the site will reject the input showing an *error id* (ERR03) with a message asking the user to only enter numerics between 0 and 100.
If the user enters marks whose count is less than 8, an *error id* (ERR01) will appear meaning the input is less than the desired count.
If the user enters marks whose count is more than 8, an *error id* (ERR02) will appear meaning the input is more than the required count.
All errors are caught using the `try-catch` statement.
Once the user gives a correct input, the site will calculate the average of the 8 subjects which is used to determine the grade using `if statements`.
After determining the grade, the site will go through a `switch` statement where a comment will be displayed inline with what average was given.
The `.html`,`.css`, and `.js` files all have comments for further understanding on the site's functionality.

### Issues
There has been no issue/exceptions when building this site. If there are issues with your instance of this site, let me know by creating an issue under this repo.
