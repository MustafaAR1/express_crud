import express from 'express';
const router = express.Router();


let students = [

    {
        id: 1,
        name: "Mustafa Ahmed Raza",
    },
    {
        id: 2,
        name: " Ahmed Raza",
    },
    {
        id: 3,
        name: "Raza",
    },
    {
        id: 4,
        name: "Mustafa Ahmed ",
    },

]

router.get('/s', (req, res) => {
    res.send({
        status: true,
        students: students
    })
})
router.get('/about', (req, res) => {
    res.status(200).send({
        message: "This is about page"
    })
})

router.post('/',(req,res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name
    };
    if(!newStudent.name) {
     return  res.status(400).send({
            status: false,
            message: "Please enter a valid name"
        });
    } else {
        students.push(newStudent);
        res.send({
            status: true,
            message: `${req.body.name} Student added successfully`,
            students: students
        })
    }
})
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const checkIfStudentExist = students.find((student) => student.id == id)
    if (checkIfStudentExist) {
        res.send({
            status: true,
            students: students.filter((student) => student.id == id)
        })
    }
    // res.json(students.filter((student) => student.id == id));
});

router.put('/update/:id',(req,res)=> {
    const id = parseInt(req.params.id);
    const studentIndex = students.findIndex((student)=> student.id == id);
   console.log(studentIndex);
   
    if(studentIndex===-1) {  
      return  res.status(400).send({
            status: false,
            message: "Student not found"
        });
    } 
    const updateStudent = {
        id: id,
        name: req.body.name
    };



   console.log(req.body);

    
    // // const index = students.findIndex((student)=> student.id == id);
    // console.log(`index: ${index}`);
    // console.log(`student: ${JSON.stringify(updateStudent)}`);
     students[studentIndex] = updateStudent;
    res.send({
        status: true,
        message: "Student updated successfully",
        students: students
    })  


})

router.delete('/delete/:id',(req,res)=> {
    const id = parseInt(req.params.id);
    const studentIndex = students.findIndex((student)=> student.id == id);
    console.log(studentIndex);
    if(studentIndex===-1) {
      return  res.status(400).send({
            status: false,
            message: "Student not found"
        });
    }
    students.splice(studentIndex,1);
    res.send({
        status: true,
        message: "Student deleted successfully",
        students: students
    })});



router.get('/', (req, res) => {
    res.status(400)
        res.send({
            status: false,
            message: "Please enter a valid limit"
        });
  
    // const limit = req.query.limit;
    // console.log(limit)
    // if (!isNaN(limit) && limit > 0) {
    //     res.json(students.slice(0, limit));
    // } else {
    //     res.status(400)
    //     res.send({
    //         status: false,
    //         message: "Please enter a valid limit"
    //     });
    // }
});


export default router;