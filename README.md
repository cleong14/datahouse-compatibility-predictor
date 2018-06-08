Datahouse Consulting
Compatibility Predictor
OVERVIEW
We need your help! Datahouse is looking to add new members to its team but needs your amazing development skills to make the right decision. Your task, should you choose to accept it, will be to build an application that takes an input: an array of applicants and an array of team members, and produces an output: an array of applicants with their respective compatibility score. How the compatibility score is generated is up to you. Help us make the right decision!
SPECIFICATIONS

-   Input and Output must be in JSON
-   Compatibility score for each applicant should fall in a range from [0, 1]
-   Use any programming language you wish to develop in.
    INSTRUCTIONS
-   Upload completed project code to a public Github/Gitlab/Bitbucket repository
-   Provide instructions on how your solution takes input/generates output in the
    README.md of the repo
-   Notify Datahouse by email when completed
    NOTES
-   This assignment is deliberately open-ended. Feel free to score the applicants however you’d like -- just be prepared to answer questions about the hows and whys!
-   Ideally, we don’t want you to spend a ton of time on this -- we’d prefer if you limited this exercise to a maximum of 2-3 hours. We’re not looking for a  complete  solution -- with the open-ended nature of this exercise, that’s not really possible. Instead, whatever you’re able to get working in that time period, we’ll be happy to go over with you.
-   Please keep best-practices (your version of them) in mind while coding up your solution. We’re just as interested in the whys behind your code structure as we are the whys behind the applicant scores.
-   Regardless of outcome, we’ll schedule a time to sit down and go over the assignment together
-   Questions? Feel free to reach out to us at either michael_endo@datahouse.com or will_reppun@datahouse.com
    Sample Data Input:
    {
    “team” : [
                {
                      “name” : “Eddie”,
                      “attributes” {
                            “intelligence” : 1,
    } }, {
    “strength” : 5,
    “endurance” : 3,
    “spicyFoodTolerance” : 1
    } }, {
    “intelligence” : 9,
    “strength” : 4,
    “endurance” : 1,
    “spicyFoodTolerance” : 6
    } }
    ],
    “applicants” : [
    “intelligence” : 3,
    “strength” : 2,
    “endurance” : 9,
    “spicyFoodTolerance” : 5
    } }, {
    “strength” : 5,
    “endurance” : 2,
    “spicyFoodTolerance” : 1
    “name” : “Will”,
    “attributes”: {
    “name” : “Mike”,
    “attributes”: {
    {
          “name” : “John”,
          “attributes”: {
                “intelligence” : 4,
    “name” : “Jane”
    “attributes”: {,
    “intelligence” : 7,
    ] }
    Output:
    } }, {
    “strength” : 4,
    “endurance” : 3,
    “spicyFoodTolerance” : 2
    } }
    “intelligence” : 1,
    “strength” : 1,
    “endurance” : 1,
    “spicyFoodTolerance” : 10
    {
          “scoredApplicants” : [
    ] }
    “name” : “Joe”,
    “attributes”: {
    {
          “name” : “John”,
          “score” : 0.2
    }, {
          “name” : “Jane”,
          “score” : 0.4
    },  {
          “name” : “Joe”,
          “score” : 0.9
    }
