var p=new Array(10,20,30,40,50);
console.log(p.length);

 var sum=0;

for(var i=0;i<p.length;i++)
{
	sum=sum+p[i];
	if(p[i]==60)
	{
		console.log("found at "+i+"position");
	}
}

console.log("sum::"+sum);


