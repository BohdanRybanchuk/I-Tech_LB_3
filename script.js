var studentsName = ['Рибанчук', 'Жуков', 'Іванов', 'Дегтярьова', 'Шпигало',
                     'Чолко', 'Франческо', 'Рогач', 'Девять', 'Десять'];
var baly = [50];
for(i=0;i<50;i++)
{
    baly[i]=Math.floor(Math.random() * (6-2)) + 2;
}

for(i=0;i<50;i+=10)//100% отличник
{
    baly[i+9]=5;
}

var otl=0;
var hor=0;
var ots=0;

var bal4=0;//
var bal3=0;//
var bal2=0;//проверка на оценку
for(i=0;i<10;i++)
{
for(j=0;j<5;j++)
{
    if(baly[j*10+i]==4)
    bal4=1
    if(baly[j*10+i]==3)
    bal3=1
    if(baly[j*10+i]==2)
    bal2=1
}
if(bal2==0&&bal3==0&&bal4==0)
otl++;
if(bal2==0&&bal3==0&&bal4==1)
hor++;
if(bal2==1)
ots++

bal2=0;
bal3=0;
bal4=0;
}


function Show(){
   
    document.getElementById("show").innerHTML = "";

    document.getElementById("show").innerHTML += "<h2> " + studentsName[0]+" "+ baly[0]+ "  "+ baly[10]+ "  "+ baly[20]+ "  "+ baly[30]+ "  "+ baly[40]+ " </h2>";
    document.getElementById("show").innerHTML += "<h2> " + studentsName[1]+" "+ baly[1]+ "  "+ baly[11]+ "  "+ baly[21]+ "  "+ baly[31]+ "  "+ baly[41]+ " </h2>";
    document.getElementById("show").innerHTML += "<h2> " + studentsName[2]+" "+ baly[2]+ "  "+ baly[12]+ "  "+ baly[22]+ "  "+ baly[32]+ "  "+ baly[42]+ " </h2>";
    document.getElementById("show").innerHTML += "<h2> " + studentsName[3]+" "+ baly[3]+ "  "+ baly[13]+ "  "+ baly[23]+ "  "+ baly[33]+ "  "+ baly[43]+ " </h2>";
    document.getElementById("show").innerHTML += "<h2> " + studentsName[4]+" "+ baly[4]+ "  "+ baly[14]+ "  "+ baly[24]+ "  "+ baly[34]+ "  "+ baly[44]+ " </h2>";
    document.getElementById("show").innerHTML += "<h2> " + studentsName[5]+" "+ baly[5]+ "  "+ baly[15]+ "  "+ baly[25]+ "  "+ baly[35]+ "  "+ baly[45]+ " </h2>";
    document.getElementById("show").innerHTML += "<h2> " + studentsName[6]+" "+ baly[6]+ "  "+ baly[16]+ "  "+ baly[26]+ "  "+ baly[36]+ "  "+ baly[46]+ " </h2>";
    document.getElementById("show").innerHTML += "<h2> " + studentsName[7]+" "+ baly[7]+ "  "+ baly[17]+ "  "+ baly[27]+ "  "+ baly[37]+ "  "+ baly[47]+ " </h2>";
    document.getElementById("show").innerHTML += "<h2> " + studentsName[8]+" "+ baly[8]+ "  "+ baly[18]+ "  "+ baly[28]+ "  "+ baly[38]+ "  "+ baly[48]+ " </h2>";
    document.getElementById("show").innerHTML += "<h2> " + studentsName[9]+" "+ baly[9]+ "  "+ baly[19]+ "  "+ baly[29]+ "  "+ baly[39]+ "  "+ baly[49]+ " </h2>";

    document.getElementById("show").innerHTML += "<h2>Отличников (" + otl+")</h2>";
    document.getElementById("show").innerHTML += "<h2>Хорошистов (" + hor+")</h2>";
    document.getElementById("show").innerHTML += "<h2>Двоечников (" + ots+")</h2>";
}