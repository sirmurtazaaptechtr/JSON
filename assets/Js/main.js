const resBox = document.getElementById('resBox');

fetch("assets/data/students.json")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        // console.log(data);
        // console.log(data.students);
        let students = data.students;
        students.forEach(function (element,index) {
            //console.log(`${element.name} | ${element.gender} | ${element.email}`);
            resBox.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${element.name}</td>
                <td>${element.gender}</td>
                <td>${element.email}</td>
            </tr>
            `;
        });
    });