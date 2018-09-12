
    // калькулятор
function calc(){
	    let size = document.getElementById('size'),
	        material = document.getElementById('material'),
	        options = document.getElementById('options'),
	        coupon = document.getElementsByClassName('promocode')[0],
	        totalValue = document.getElementsByClassName('calc-price')[0],
            total = 0;
			let reg = /IWANTPOPART/;

           

    size.addEventListener('change', function() {
        total = ((size.value * material.value) + options.value);
        if (size.value ==0 || material.value == 0) {
            totalValue.innerHTML = '';
        } else {
            if (coupon.value.match(reg)) {
                totalValue.innerHTML = total - (total*0.3);
            } else {
                totalValue.innerHTML = total;
            }
        }
    });

    material.addEventListener('change', function() {
        total = ((size.value * material.value) + options.value);
        if (size.value ==0 || material.value == 0) {
            totalValue.innerHTML = '';
        } else {
            if (coupon.value.match(reg)) {
                totalValue.innerHTML = total - (total*0.3);
            } else {
                totalValue.innerHTML = total;
            }
        }
    });

    options.addEventListener('change', function() {
        total = ((size.value * material.value) + options.value);
        if (size.value == '' || material.value == '') {
            totalValue.innerHTML = '';
        } else {
            if (coupon.value.match(reg)) {
                totalValue.innerHTML = total - (total*0.3);
            } else {
                totalValue.innerHTML = total;
            }
        }
    });


    coupon.addEventListener('change', function() {
        total = ((size.value * material.value) + options.value);

        if (size.value == '' || material.value == ''){
            totalValue.innerHTML = '';
        } else {
            if (coupon.value.match(reg)) {
                totalValue.innerHTML = total - (total*0.3);
            } else {
                totalValue.innerHTML = total;
            }
        }

    });
}
module.exports = calc;