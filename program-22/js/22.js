var num, i, c=0;
num=20;
for(i=2; i<num; i++)
{
  if(num%2==0)
  {
    c++;
    break;
  }
}
if(c==0)
  document.write(num + " is a Prime Number");
else
	document.write(num + " is not a Prime Number");