//utility.js

const request = require("request-promise");
const EXTERNAL_API = "https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzA5MTExLCJleHAiOjE2NjE3MTI3MTEsIm5iZiI6MTY2MTcwOTExMSwianRpIjoieUg4RlhwVTF0VDBBb2t6QSIsInN1YiI6NTUsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.6wQnwV_KVIZQYjVCvlczu5tSkgWpD73OwBu4_MGCSlA"; // put access token
const student = {
    name: '', // replace with your full name.
    age: 19, // put your age.
    gender: '', // replace with your gender
    department: 'CPE'
};


exports.findStudentbyId = function(student_id, cb) {
    //-- call external api 
    request({
        method: "GET",
        uri: EXTERNAL_API + student_id,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then((response) => {
        console.log('Sent');
        console.log({
            "request": student_id,
            "response": response
        });

        cb(response);

    }).catch((err) => {
        console.log('Error:', err.message);
        console.log({
            "Error": err.message
        });
    });
}