function moveFocus(current, next) {
    if (document.getElementById('otp' + current).value.length == 1) {
        if (next > 0) {
            document.getElementById('otp' + next).focus();
        } else {
            // 最后一个输入框输入完成后的逻辑
            alert('OTP Completed: ' + getOtpValue());
        }
    }
}

function getOtpValue() {
    let otp = '';
    for (let i = 1; i <= 6; i++) {
        otp += document.getElementById('otp' + i).value;
    }
    return otp;
}
