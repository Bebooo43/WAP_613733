const nums = {
    "3,1,4,1,5":9,
    "1,1,2,3,5": 8,
    "1,4,9,16,25": 36,
    "2,3,5,7,11": 13,
    "1,2,4,8,16": 32
};

const keys = Object.keys(nums);
let sequence = keys[0];

function checkAnswer(req, res) {
    var isQuizComplete = false;

    if (parseInt(req.body.answerText) === nums[keys[req.body.count]]) {
        req.body.score = parseInt(req.body.score) + 1;
    }
    if (parseInt(req.body.count) + 1 === 5) {
        isQuizComplete = true;
    } else {
        sequence = keys[req.body.count];
    }
    res.render("number_quiz.pug", {
        score: req.body.score,
        sequence: keys[parseInt(req.body.count) + 1],
        isQuizComplete: isQuizComplete,
        count: parseInt(req.body.count) + 1
    });
}


module.exports = {
    sequence,
    checkAnswer
}