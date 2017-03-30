//MILAN SINGH 
//Partitions a list into two lists based off of the argument function (which should take in a type which is the same as the list elements, and return a boolean)
function partition(list){


	function loop(list2,fn){ //'iterates' through list
			if (fn(car(list2))){ //if item in list clears function add it to sublist

				if (cdr(list2) == null || cdr(list2) === undefined){
					return cons(car(list2),null); // for last element in list
				} else {
					return cons(car(list2), loop(cdr(list2),fn)); 
					// Construct list ITEM + (iterative list = ITEM2 + iterative list etc.)
				}
			} else {
				if (cdr(list2) == null || cdr(list2) === undefined){
					return null // for last element in list
				} else {
					return loop(cdr(list2),fn);
			}
		}
	}
		
	
	function fnLoop(n,args,l){ //loops through passed fns
	
		
		
		if (args[n] == null || args[n] === undefined){ //base case ends 'loop'
			return null;
		} else {
			
			return cons(loop(l,args[n]),fnLoop(n+1,args,l)) // iterates recursive 'loop'
		}
	}
	
	return fnLoop(1,arguments,list);
}