function bmi()
{
    var w = parseFloat(document.getElementById("weight").value);  
    var h = parseFloat(document.getElementById("height").value)/100; 
    var b = w/(h*h);  
    document.getElementById("ans").value = String(b.toPrecision(3)); 
    if (b < 18.5)
    {
        document.getElementById("category").value = "Underweight";
    }
    else if (b >= 18.5 && b <= 25)
    {
        document.getElementById("category").value = "Healthy";
    }
    else if (b > 25 && b <= 30)
    {
        document.getElementById("category").value = "Overweight";
    }
    else if (b > 30 && b <= 35)
    {
        document.getElementById("category").value = "Obese Class 1";
    }
    else if(b > 35 && b <= 40)
    {
        document.getElementById("category").value = "Obese Class 2";
    }
    else
    {
        document.getElementById("category").value = "Obese Class 3";
    }
}
    