var a =[10];
var Bobby=parseInt(Math.random()*(100-1)+1);
var rand=Math.random()*(100-1)+1;
var max;
var min;

for(var i=0;i<10;i++)
{
    a[i]=parseInt(rand);
    rand=Math.random()*(100-1)+1;
    console.log(a[i]);
}
for(var i;i<10;i++)
{
    if(Bobby==a[i])
    {
        console.log('Bobby vs gamer #'+i+'\n'+Bobby+'_____'+a[i]+'\n');
        break;
    }
    else if(Bobby<a[i])
    {

    }
}