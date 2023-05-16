// complete the given function

function palindrome(str){
let ispalindrome=true;
	let i=0,j=str.length-1;
	while(i<=j && ispalindrome==true){
		if(str[i]!=str[j]){
			ispalindrome=false;
			break;
		}
		i++;
		j--;
	}
	return ispalindrome;
}
module.exports = palindrome
