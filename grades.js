/*
Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
Use console.log to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?
*/

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

scores.sort();

var grades = ['A','B','C','D','F'];
var values=[];

var low = 100, high = 0;

var a=0, b=0, c=0, d=0, f=0;

var n;

for(var i = 0; i < scores.length; i++){
	//console.log(scores[i]);
	//find highest score
	if(scores[i] > high){
		high = scores[i];
	}
	//find lowest score
	if(scores[i] < low){
		low = scores[i];
	}


		n = scores[i];


	switch (true) {

		case ( n< 60):
			f++;
			break;
		case (n > 60 && n < 70):
			d++;
			break;
		case (n > 70 && n <80):
			c++;
			break;
		case (n > 80 && n < 90):
			b++;
			break;
		case (n > 90 && n < 100):
			a++;
			break;
		default:
			break;
		}
		
	}


values.push(a, b, c, d, f);


console.log(high);
console.log(low);
console.log(grades);
console.log(values);




	








