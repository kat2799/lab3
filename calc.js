var Fcalc = document.calc;
var Flag = false;
var Now = 0;
var PendingOp = "";

// нажатие кнопки
function NumPressed (Num) 
{
		if (Flag) 
		{
			Fcalc.ReadOut.value = Num; 
			Flag = false;
		}	
		else 
		{
			if (Fcalc.ReadOut.value == "0")
				Fcalc.ReadOut.value = Num;
			else
				Fcalc.ReadOut.value += Num;
		}
}
// обработчик нажатия кнопки действия
function Operation (Op) 
{
		var Readout = Fcalc.ReadOut.value;
		if (Flag && PendingOp != "=")
		{
			Fcalc.ReadOut.value = Currents;
		}
		else
		{
			 Flag = true;
			if ( '+' == PendingOp )
				Now += parseFloat(Readout);
			else if ( '-' == PendingOp )
				Now -= Readout;
			else if ( '/' == PendingOp )
				Now /= Readout;
			else if ( '*' == PendingOp )
				Now *= Readout;
			else
				Now = parseFloat(Readout); 
           
			Fcalc.ReadOut.value = Now;
			PendingOp = Op;
		}
}
	
// удаление последнего числа 
function ClearEntry () 
{
 var curReadOut = Fcalc.ReadOut.value;
		curReadOut = curReadOut.toString().slice(0,-1);
        Fcalc.ReadOut.value=curReadOut;
		Flag = true;
}
	
// Полная очистка всех результатов
function Clear () 
{
		Now= 0;
		PendingOp = "";
		Fcalc.ReadOut.value = "0";
		FlagNewNum = true;

}
