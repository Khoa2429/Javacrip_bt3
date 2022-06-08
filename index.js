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
//  Bài thêm
//Bài tập 5:

document.getElementById('btnBT1').onclick = function () {
    var day = Number(document.getElementById('soNgay').value);
    var month = Number(document.getElementById('soThang').value);
    var year = Number(document.getElementById('soNam').value);
    var addDate = new Date(year, month - 1, day);
    var addDayAfter = new Date(
        addDate.getFullYear(),
        addDate.getMonth(),
        addDate.getDate() + 1
    );
    var addDayBefore = new Date(
        addDate.getFullYear(),
        addDate.getMonth(),
        addDate.getDate() - 1
    );
    var dayAfter = `Ngày hôm sau: ${addDayAfter.getDate()} / ${addDayAfter.getMonth() + 1
        } / ${addDayAfter.getFullYear()}`;
    var dayBefore = `Ngày hôm trước: ${addDayBefore.getDate()} / ${addDayBefore.getMonth() + 1
        } / ${addDayBefore.getFullYear()}`;
    var result = `${dayBefore} <br> ${dayAfter}`;
    document.getElementById('ketQua_1').innerHTML = result;
    return true;
}
//Bài 6:
document.getElementById('btnBT2').onclick = function () {
    var month = Number(document.getElementById('soThang1').value);
    var year = Number(document.getElementById('soNam1').value);
    var ketQua_2 = 0;
    if (year % 4 == 0 && month === 2) {
        ketQua_2 = 29;
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        ketQua_2 = 31;
    } else if (month == 2) {
        ketQua_2 = 28;
    } else {
        ketQua_2 = 30;
    }
    document.getElementById('ketQua_2').innerHTML = ' Số ngày: ' + ketQua_2 + ' ngày';
}
// Bài 7:
document.getElementById('btnBT3').onclick = function () {
    var soBachu = Number(document.getElementById('soBachuso').value);
    var soHangtram = Math.floor(soBachu / 100);
    var soHangchuc = Math.floor((soBachu % 100) / 10);
    var soHangDV = soBachu % 10 ;
    var docSoHangtram = '';
    var docSoChuc = '';
    var docSoDV = '';
    if (soBachu>=100 && soBachu<=999) {
        if (soHangtram === 1) {
            docSoHangtram = 'Một trăm';
        } else if (soHangtram === 2) {
            docSoHangtram = 'Hai trăm';
        } else if (soHangtram === 3) {
            docSoHangtram = 'Ba trăm';
        } else if (soHangtram === 4) {
            docSoHangtram = 'Bốn trăm';
        } else if (soHangtram === 5) {
            docSoHangtram = 'Năm trăm';
        } else if (soHangtram === 6) {
            docSoHangtram = 'Sáu trăm';
        } else if (soHangtram === 7) {
            docSoHangtram = 'Bảy trăm';
        } else if (soHangtram === 8) {
            docSoHangtram = 'Tám trăm';
        } else {
            docSoHangtram = 'Chín trăm';
        }
        if (soHangchuc === 1) {
            docSoChuc = 'Mười';
        } else if (soHangchuc === 2) {
            docSoChuc = 'Hai mươi';
        } else if (soHangchuc === 3) {
            docSoChuc = 'Ba mươi';
        } else if (soHangchuc === 4) {
            docSoChuc = 'Bốn mươi';
        } else if (soHangchuc === 5) {
            docSoChuc = 'Năm mươi';
        } else if (soHangchuc === 6) {
            docSoChuc = 'Sáu mươi';
        } else if (soHangchuc === 7) {
            docSoChuc = 'Bảy mươi';
        } else if (soHangchuc === 8) {
            docSoChuc = 'Tám mươi';
        } else if (soHangchuc === 9) {
            docSoChuc = 'Chín mươi';
        } else {
            docSoChuc = 'linh'
        }
        if (docSoDV === 1) {
            docSoDV = 'Một';
        } else if (soHangchuc === 2) {
            docSoDV = 'Hai';
        } else if (soHangchuc === 3) {
            docSoDV = 'Ba';
        } else if (soHangchuc === 4) {
            docSoDV = 'Bốn';
        } else if (soHangchuc === 5) {
            docSoDV = 'Năm';
        } else if (soHangchuc === 6) {
            docSoDV = 'Sáu';
        } else if (soHangchuc === 7) {
            docSoDV = 'Bảy';
        } else if (soHangchuc === 8) {
            docSoDV = 'Tám';
        } else if (soHangchuc === 9) {
            docSoDV = 'Chín';
        } else {''}

    } else { 'Không phải 3 chữ số' }
    document.getElementById('ketQua_3').innerHTML= docSoHangtram+' '+docSoChuc+' '+docSoDV;
}