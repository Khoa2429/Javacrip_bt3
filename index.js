//Đề 1: 
document.getElementById('btnThutuso').onclick = function () {
    var soA = Number(document.getElementById('soA').value);
    var soB = Number(document.getElementById('soB').value);
    var soC = Number(document.getElementById('soC').value);
    var thuNhat = 0;
    var thuHai = 0;
    var thuBa = 0;
    if (soA > soB && soB > soC) {
        thuNhat = soC;
        thuHai = soB;
        thuBa = soA;

    }
    else if (soA > soC && soB < soC) {
        thuNhat = soB;
        thuHai = soC;
        thuBa = soA;
    }
    else if (soB > soA && soA > soC) {
        thuNhat = soC;
        thuHai = soA;
        thuBa = soB;
    }
    else if (soB > soC && soC > soA) {
        thuNhat = soA;
        thuHai = soC;
        thuBa = soB;
    }
    else if (soC > soB && soB > soA) {
        thuNhat = soA;
        thuHai = soB;
        thuBa = soC;
    }
    else {
        thuNhat = soB;
        thuHai = soA;
        thuBa = soC;
    }
    document.getElementById('ketQua1').innerHTML = thuNhat + '<' + thuHai + '<' + thuBa;
}
// Bài tập 2:
document.getElementById('btnChao').onclick = function () {
    var wHo = document.getElementById('chon').value;
    var guiLoichao = 'Xin chào người lạ';
    if (wHo === 'B') {
        guiLoichao = 'Xin chào Bố';
    } else if (wHo === 'M') {
        guiLoichao = 'Xin chào Mẹ';
    }
    else if (wHo === 'A') {
        guiLoichao = 'Xin chào Anh';
    }
    else if (wHo === 'E') {
        guiLoichao = 'Xin chào Em';
    }
    document.getElementById('ketQua2').innerHTML = guiLoichao;
}
// Bài tập 3
document.getElementById('btnLechan').onclick = function () {
    var soMot = Number(document.getElementById('so1').value);
    var soHai = Number(document.getElementById('so2').value);
    var soBa = Number(document.getElementById('so3').value);
    var soChan = 0;
    var soLe = 0;
    if (soMot % 2 == 0) {
        soChan++;
    } else {
        soLe++;
    }
    if (soHai % 2 == 0) {
        soChan++;
    } else {
        soLe++;
    }
    if (soBa % 2 == 0) {
        soChan++;
    } else {
        soLe++;
    }
    document.getElementById('ketQua3').innerHTML = `Số chẵn: ${soChan} <br/> Số lẻ: ${soLe}`;
}
//Bài tập 4: 
document.getElementById('btnLoaiTamgiac').onclick = function () {
    var a = Number(document.getElementById('canhA').value);
    var b = Number(document.getElementById('canhB').value);
    var c = Number(document.getElementById('canhC').value);
    var ketQuahinh = '';
    if (a < b + c && c < a + b && b < a + c) {
        if (a * a == b * b + c * c || b *b  == a * a + c * c || c * c == a * a + b * b) {
            ketQuahinh = 'Hình tam giác vuông';
        } else if (a == b && b == c) {
            ketQuahinh = 'Hình tam giác cân';
        }else if (a == b == c) {
            ketQuahinh = 'Hình tam giác đều';
        } else {
            ketQuahinh = 'Hình tam giác thường';
        }
    }
    else {
        ketQuahinh = 'Không phải tam giác';
    }
    document.getElementById('ketQua4').innerHTML= ketQuahinh;
}