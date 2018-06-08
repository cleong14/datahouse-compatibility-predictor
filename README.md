# Datahouse Consulting - Compatibility Predictor

1. I created a JSON file to act as a mock database to use for my inputs.
2. I imported the DB, rendered the applicants and team members to the page.
3. I created a CompatibilityChecker button component where I passed down the DB, checker method, and scoredApplicants through props
4. When you click the CompatibilityChecker button, it triggers the method in the parent component which has access to *BOTH INPUTS*, the applicants and team members
5. In this method, it calculates the total average score of each applicant (xx/40)
6. I based each category on a 10/10 scale, hence the 40 total possible points
7. I then pushed each applicant object into a new array, which became *THE ARRAY OF APPLICANTS WITH THEIR RESPECTIVE SCORE*, which I was going to use to render to the page.
8. If you open your console, you can verify that the calculations are within [0, 1]
