const fs = require('fs');
const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    
});
const data = JSON.parse(fs.readFileSync('student.json', 'utf8'));


function getStudent(rollno) {
    return data.students.find(student => student.rollno === rollno);
}
server.listen(9000,()=>{
    console.log("Server is running on port 9000");
})

function addStudent(newStudent) {
    data.students.push(newStudent);
    fs.writeFileSync('student.json', JSON.stringify(data, null, 2));
}

const student = getStudent(1);
console.log(student);

const newStudent = {
    rollno: 4,
    name: 'Rishabh Singh',
    class: '10th',
    section: 'A'
};
addStudent(newStudent);