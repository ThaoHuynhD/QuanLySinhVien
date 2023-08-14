function renderStudentList(studentList) {
    var contentHTML = '';
    for (i = 0; i < studentList.length; i++) {
        var dtb = average(studentList[i].diemToan, studentList[i].diemLy, studentList[i].diemHoa);
        contentHTML = contentHTML +
            `<tr>
        <td class="maSV">${studentList[i].maSV}</td>
        <td class="tenSV">${studentList[i].tenSV}</td>
        <td class="emailSV">${studentList[i].emailSV}</td>
        <td class="ngaySinhSV">${studentList[i].ngaySinhSV}</td>
        <td class="khoaHocSV">${studentList[i].khoaHocSV}</td>
        <td class="diemTB">${dtb}</td>
        <td class="btn-justify">
            <button class="btn btn-warning" onclick="showTagOnForm(${studentList[i].maSV})">Sửa</button>
            <button class="btn btn-danger" onclick="deleteTag(${studentList[i].maSV})">Xóa</button>
        </td>
            </tr>`
    }
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
function getIndex(id, studentList) {
    var index;
    for (i = 0; i < studentList.length; i++) {
        if (studentList[i].maSV == id) {
            index = i;
        }
    }
    return index;
}
function khoaHocSelected() {
    var index = document.getElementById("khSV").selectedIndex;
    return document.getElementsByTagName("option")[index].value;
}
function average(diemToan, diemLy, diemHoa) {
    return Math.round((diemToan * 1 + diemLy * 1 + diemHoa * 1) / 3 * 100) / 100;
}
function getFormInformation() {
    var maSV, tenSV, emailSV, matKhauSV, ngaySinhSV, khoaHocSV, diemToan, diemLy, diemHoa;
    var student = new Student(maSV, tenSV, emailSV, matKhauSV, ngaySinhSV, khoaHocSV, diemToan, diemLy, diemHoa);
    return student;
}

