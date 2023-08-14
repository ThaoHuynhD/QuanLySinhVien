var studentList = [];
var jsonvalue = localStorage.getItem("studentList");
if (jsonvalue != null) {
    studentList = JSON.parse(jsonvalue);
    renderStudentList(studentList);
}
function addTag() {
    var student = getFormInformation();
    console.log("student: ", student);
    studentList.push(student);
    jsonvalue = JSON.stringify(studentList);
    localStorage.setItem("studentList", jsonvalue);
    renderStudentList(studentList);
}
function resetStudentList() {
    studentList = [];
    jsonvalue = JSON.stringify(studentList);
    localStorage.setItem("studentList", jsonvalue);
    renderStudentList(studentList);
}
function updateTag() {
    var student = getFormInformation();
    var index = getIndex(student.maSV, studentList);
    studentList[index] = student;
    jsonvalue = JSON.stringify(studentList);
    localStorage.setItem("studentList", jsonvalue);
    renderStudentList(studentList);
}
function showTagOnForm(id) {
    var index = getIndex(id, studentList);
    document.getElementById("txtMaSV").disabled = true;
    document.getElementById("txtMaSV").value = studentList[index].maSV;
    document.getElementById("txtTenSV").value = studentList[index].tenSV;
    document.getElementById("txtEmail").value = studentList[index].emailSV;
    document.getElementById("txtPass").value = studentList[index].matKhauSV;
    document.getElementById("txtNgaySinh").value = studentList[index].ngaySinhSV;
    document.getElementById("khSV").value = studentList[index].khoaHocSV;
    document.getElementById("txtDiemToan").value = studentList[index].diemToan;
    document.getElementById("txtDiemLy").value = studentList[index].diemLy;
    document.getElementById("txtDiemHoa").value = studentList[index].diemHoa;
}
function deleteTag(id) {
    var index = getIndex(id, studentList);
    studentList.splice(index, 1);
    jsonvalue = JSON.stringify(studentList);
    localStorage.setItem("studentList", jsonvalue);
    renderStudentList(studentList);
}
function searchTag() {
    var input = document.getElementById("txtSearch").value;
    var searchList = [];
    for (i = 0; i < studentList.length; i++) {
        if (studentList[i].tenSV.match(input)) {
            searchList.push(studentList[i]);
        }
    }
    renderStudentList(searchList);
}