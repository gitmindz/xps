const studentsData = [
    {
        rollNo: "1001",
        mobile: "8023625445",
        name: "Aman Sharma",
        fatherName: "Rakesh Sharma",
        class: "10A",
        subjects: {
            "Mathematics": 92,
            "Science": 88,
            "English": 95,
            "Hindi": 90,
            "Social Studies": 87
        },
        totalMarks: 452 // Out of 500
    },
    {
        rollNo: "1002",
        mobile: "8765432108",
        name: "Priya Singh",
        fatherName: "Vikram Singh",
        class: "10B",
        subjects: {
            "Mathematics": 85,
            "Science": 82,
            "English": 90,
            "Hindi": 88,
            "Social Studies": 83
        },
        totalMarks: 428 // Out of 500
    },
    {
        rollNo: "1003",
        mobile: "7654321098",
        name: "Rahul Verma",
        fatherName: "Manoj Verma",
        class: "10C",
        subjects: {
            "Mathematics": 78,
            "Science": 75,
            "English": 80,
            "Hindi": 76,
            "Social Studies": 79
        },
        totalMarks: 388 // Out of 500
    }
];

document.getElementById('resultForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const rollNo = document.getElementById('rollNo').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const resultOutput = document.getElementById('resultOutput');

    // Reset previous result
    resultOutput.style.display = 'none';
    resultOutput.innerHTML = '';

    // Find student
    const student = studentsData.find(s => s.rollNo === rollNo && s.mobile === mobile);

    if (student) {
        // Calculate division
        let division = "";
        if (student.totalMarks >= 300) {
            division = "First Division";
        } else if (student.totalMarks >= 225) {
            division = "Second Division";
        } else {
            division = "Pass";
        }

        resultOutput.innerHTML = `
            <h3>Result for ${student.name}</h3>
            <h4>Personal Details</h4>
            <table class="personal-grid">
                <tr><th>Name</th><td>${student.name}</td></tr>
                <tr><th>Father's Name</th><td>${student.fatherName}</td></tr>
                <tr><th>Class</th><td>${student.class}</td></tr>
                <tr><th>Roll No</th><td>${student.rollNo}</td></tr>
                <tr><th>Mobile Number</th><td>${student.mobile}</td></tr>
                <tr><th>Total Marks</th><td>${student.totalMarks} / 500</td></tr>
                <tr><th>Result</th><td>${division}</td></tr>
            </table>
            <h4>Subject Marks</h4>
            <table class="subjects-grid">
                <tr><th>Mathematics</th><td>${student.subjects["Mathematics"]}</td></tr>
                <tr><th>Science</th><td>${student.subjects["Science"]}</td></tr>
                <tr><th>English</th><td>${student.subjects["English"]}</td></tr>
                <tr><th>Hindi</th><td>${student.subjects["Hindi"]}</td></tr>
                <tr><th>Social Studies</th><td>${student.subjects["Social Studies"]}</td></tr>
            </table>
        `;
        resultOutput.style.display = 'block';
    } else {
        resultOutput.innerHTML = `<p class="error">No result found! Please check your Roll Number and Mobile Number.</p>`;
        resultOutput.style.display = 'block';
    }
});