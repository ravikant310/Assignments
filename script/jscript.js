/*var name="ravi";
console.log(name);*/
/*function scream(name)
{
	var i=0;
	alert("your name is  " +name);
	while(i<500)
	{
		console.log("name :" +name)
		i++;
	}
}*/
/*String x="somestring";*/
function sbstring(s)
{
	    var i;
	    var j;
   	    /*String temp;
*/
            for ( i = 0;  i < s.length - 1;  i++ )
            {
                for ( j = i + 1;  j < s.length;  j++ )
                {  
                         /*if ( s [ i ].compareTo( s [ j ] ) > 0 )*/
                         if ( s [ i ]!=s [ j ] )
                          	{                                            
                            alert("Square Free");                   
                           	} 
						 else
							{
							alert("Not Square Free");
							}
					break;
                } 
                break;
             } 
}