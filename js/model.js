function Student(maSV, tenSV, emailSV, matKhauSV, ngaySinhSV, khoaHocSV,diemToan, diemLy, diemHoa) {
    this.maSV = document.getElementById("txtMaSV").value,
    this.tenSV = document.getElementById("txtTenSV").value,
    this.emailSV = document.getElementById("txtEmail").value,
    this.matKhauSV = document.getElementById("txtPass").value,
    this.ngaySinhSV = document.getElementById("txtNgaySinh").value,
    this.khoaHocSV = khoaHocSelected(),
    this.diemToan = document.getElementById("txtDiemToan").value * 1,
    this.diemLy = document.getElementById("txtDiemLy").value * 1,
    this.diemHoa = document.getElementById("txtDiemHoa").value * 1
}
