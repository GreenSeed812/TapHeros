
var Ruler = {
		Ary : 1000,											// 进制(final)
		Accuracy : 3,										// 除法精度位数(final)
		StageBloodBase : [1,1,1],							
		TapInterval : 50,									// 点击间隔毫秒(final)
		BossInterval : 11,									// boss 间隔
		BossTime : 3,										// boss 击杀时间(final)
		Unit : ["","k", "m", "b", "t",
				 "aa", "bb", "cc", "dd", "ee", "ff", "gg",
				 "hh", "ii", "jj", "kk", "ll", "mm", "nn",
				 "oo", "pp", "qq", "rr", "ss", "tt", "uu",
				 "vv", "ww", "xx", "yy", "zz", "∞"],		// 单位(final)
		TimeEarningsInterval : 30000,						// 离线收益最小时间间隔
};

function GetRandomNum(Min,Max)
{   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}   


function GetShowNumFromArray (arr)
{
	var _arr = arr.slice(0);

	var showMoney;
	if (ArrayIsZero(_arr)) {
		showMoney = "0";
	} else {
		if (_arr[_arr.length - 1] > 0) {
			_arr[_arr.length] = 0;
		}
		var a = _arr.length;
		if (_arr.length >= 3) {
			var re = /([0-9]+\.[0-9]{2})[0-9]*/;
			var num = (Number(_arr[_arr.length-2]) + Number(_arr[_arr.length-3] * (1/Ruler.Ary))).toString();
			num = num.replace(re,"$1");
			showMoney = num + Ruler.Unit[_arr.length-2];
		} else {
			showMoney = _arr[_arr.length-2];
		}
	}
	return showMoney;
}

function ArrayMulNumber(arr, multiplier)
{
	var _arr = arr.slice(0);
	if (_arr[_arr.length - 1] > 0) {
		_arr[_arr.length] = 0;
	}

	var retArray = new Array(_arr.length);
	var tempHigh = 0;

	for (var i = 0; ; i++) {

		var mul = _arr[i] * multiplier + tempHigh;
		tempHigh = 0;
		var lave = Math.floor(mul / Ruler.Ary);
		var result = mul - Ruler.Ary * lave;
		if (lave == 0) {
			result = mul;
			retArray[i] = result;
		} else if(lave){
			retArray[i] = result;
			tempHigh = lave;
		} else if(retArray[i - 1] > 0){
			retArray[i] = 0;
			tempHigh = 0;
		}

		if (_arr.length == i) {
			break;
		}
	}

	// 退位进位,末尾补0

	if (retArray[retArray.length - 1] > 0) {
		retArray[retArray.length] = 0;
	}

	for (var j = retArray.length - 1; j >= 0; j--) {
		if (retArray[j] > 0) {
			var Integer = (parseFloat(retArray[j]) < 1 ? 0 : parseInt(retArray[j]));
			var Decimal = parseFloat(retArray[j]) - Integer;
			retArray[j] = Integer;
			if (Decimal > 0) {
				var Back = Decimal * Ruler.Ary;
				if (j == 0) {
					retArray[j] = parseInt(retArray[j]);
				} else {
					retArray[j - 1] += Back; 
				}
			}
		}
	}

	// 格式化
	var popCount = 0;
	for (var x = retArray.length - 1; x >= 0; x--) {
		if (retArray[x - 1] == 0) {
			popCount += 1;
		} else {
			break;
		}
	}
	for (var c = 0; c < popCount; c++) {
		retArray.pop();
	}

	return retArray;
}

function ArraySumArray(arr1, arr2)
{
	var _arr1 = arr1.slice(0);
	var _arr2 = arr2.slice(0);
	if (_arr1[_arr1.length - 1] > 0) {
		_arr1[_arr1.length] = 0;
	}
	if (_arr2[_arr2.length - 1] > 0) {
		_arr2[_arr2.length] = 0;
	}

	var LonglengthArr = (_arr1.length > _arr2.length) ? _arr1 : _arr2;
	var shortlengthArr = (_arr2.length < _arr1.length) ? _arr2 : _arr1;

	var retArray = new Array(LonglengthArr.length);
	var tempHigh = 0;

	for (var i = 0; i < LonglengthArr.length; i++) {

		if (i < shortlengthArr.length) {
			var sum = _arr1[i] + _arr2[i] + tempHigh;
			tempHigh = 0;
			var lave = Math.floor(sum / Ruler.Ary);
			var result = sum - Ruler.Ary * lave;
			if (lave == 0) {
				result = sum;
				retArray[i] = result;
			} else {
				retArray[i] = result;
				tempHigh = lave;
			}
		} else {
			retArray[i] = LonglengthArr[i] + tempHigh;
			tempHigh = 0;
		}
	}

	// 格式化
	if (retArray[retArray.length - 1] > 0) {
		retArray[retArray.length] = 0;
	}
	var popCount = 0;
	for (var x = retArray.length - 1; x >= 0; x--) {
		if (retArray[x - 1] == 0) {
			popCount += 1;
		} else {
			break;
		}
	}
	for (var c = 0; c < popCount; c++) {
		retArray.pop();
	}
	return retArray;
}

function ArraySubArray(arr1, arr2)
{
	var _arr1 = arr1.slice(0);
	var _arr2 = arr2.slice(0);
	if (_arr1[_arr1.length - 1] > 0) {
		_arr1[_arr1.length] = 0;
	}
	if (_arr2[_arr2.length - 1] > 0) {
		_arr2[_arr2.length] = 0;
	}
	var LonglengthArr = (_arr1.length > _arr2.length) ? _arr1 : _arr2;
	var shortlengthArr = (_arr2.length < _arr1.length) ? _arr2 : _arr1;

	var retArray = new Array(LonglengthArr.length);
	var tempHigh = 0;

	for (var i = 0; i < LonglengthArr.length; i++) {

		var sub =  _arr1[i] - (_arr2.length > i ? _arr2[i] : 0);

		if (sub < 0) {
			sub = Ruler.Ary + sub;
			if (_arr1.length <= i + 1) {
				retArray = [0,0];
				return retArray;
			} else {
				_arr1[i + 1] -= 1;
			}
		}
		retArray[i] = sub;
	}

	// 格式化
	if (retArray[retArray.length - 1] > 0) {
		retArray[retArray.length] = 0;
	}
	var popCount = 0;
	for (var x = retArray.length - 1; x >= 0; x--) {
		if (retArray[x - 1] == 0) {
			popCount += 1;
		} else {
			break;
		}
	}
	for (var c = 0; c < popCount; c++) {
		retArray.pop();
	}

	return retArray;
}

function ArrayScaleArray(arr1, arr2)
{
	var _arr1 = arr1.slice(0);
	var _arr2 = arr2.slice(0);
	if (_arr1[_arr1.length - 1] > 0) {
		_arr1[_arr1.length] = 0;
	}
	if (_arr2[_arr2.length - 1] > 0) {
		_arr2[_arr2.length] = 0;
	}
	var LonglengthArr = (_arr1.length > _arr2.length) ? _arr1 : _arr2;
	var shortlengthArr = (_arr2.length < _arr1.length) ? _arr2 : _arr1;

	var retPct = 0;
	
	// 如果精度不够取舍，就不进行取舍
	var _Accuracy = Ruler.Accuracy;
	if (shortlengthArr.length <= _Accuracy + 1) {
		_Accuracy = shortlengthArr.length;
	}

	if (_arr2.length - _arr1.length >= _Accuracy) {
		retPct = 0;
	} else {
		var _arr1Temp = new Array(Ruler.Accuracy);
		var _arr2Temp = new Array(Ruler.Accuracy);
		
		for (var i = 0; i < Ruler.Accuracy; i++) {
			_arr1Temp[i] = 0;
			_arr2Temp[i] = 0;
		}
		
		var index = 0;

		for (var i = (_arr2.length - _Accuracy); i < _arr2.length; i++) {
			_arr2Temp[index] = _arr2[i];
			if (_arr1.length > i) {
				_arr1Temp[index] = _arr1[i];
			} else {
				_arr1Temp[index] = 0;
			}
			index += 1;
		}

		// 转换int
		var num1 = _arr1Temp[0] + _arr1Temp[1] * Ruler.Ary + _arr1Temp[2] * Ruler.Ary * Ruler.Ary;
		var num2 = _arr2Temp[0] + _arr2Temp[1] * Ruler.Ary + _arr2Temp[2] * Ruler.Ary * Ruler.Ary;
		retPct = parseFloat(num1 / num2);
	}

	return retPct;
}

function ArrayIsZero(arr)
{
	var _arr = arr.slice(0);
	var retBool = true;

	for (var i = 0; i < _arr.length; i++) {
		if (_arr[i] > 0) {
			retBool = false;
			break;
		}
	}

	return retBool;
}

function timeToString(msd,showMsd)
{
    var time = parseFloat(msd) / 1000;

    if (showMsd) {
		var _msd = parseInt((time - parseInt(time)).toFixed(2)*100);
	}
    if (null != time && "" != time) {
        if (time > 60 && time < 60 * 60) {
            time = parseInt(time / 60.0) + ":" + parseInt((parseFloat(time / 60.0) -
                parseInt(time / 60.0)) * 60) + "";
        }
        else if (time >= 60 * 60 && time < 60 * 60 * 24) {
            time = parseInt(time / 3600.0) + ":" + parseInt((parseFloat(time / 3600.0) -
                parseInt(time / 3600.0)) * 60) + ":" +
                parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "";
        }
        else {
            time = parseInt(time) + "";
        }
    }
    
    return _msd == null ? time : (time + ":" + (_msd < 10 ? "0" + _msd : _msd));
}

function Timestamp()
{
	return (new Date()).valueOf();
}











