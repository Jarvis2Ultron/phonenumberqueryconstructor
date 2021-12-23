function generateVariants()
{


    var phone = document.getElementById("phonenumber").value;
    searchQuery = "\"+"+phone+"\" | ";
    searchQuery = searchQuery+"\""+phone.substr(2, 9)+"\" | ";
    searchQuery = searchQuery+"\""+phone.substr(2, 3)+" "+phone.substr(5, 3)+" "+phone.substr(8, 3)+"\" | ";
    searchQuery = searchQuery+"\""+phone.substr(2, 3)+" "+phone.substr(5, 2)+" "+phone.substr(7, 2)+" "+phone.substr(9, 2)+"\" | ";
    searchQuery = searchQuery+"\""+phone.substr(2, 3)+"."+phone.substr(5, 3)+"."+phone.substr(8, 3)+"\" | ";
    searchQuery = searchQuery+"\""+phone.substr(2, 3)+"."+phone.substr(5, 2)+"."+phone.substr(7, 2)+"."+phone.substr(9, 2)+"\" | ";
    searchQuery = searchQuery+"\""+"("+"+"+phone.substr(0, 2)+") "+phone.substr(2, 3)+" "+phone.substr(5, 2)+" "+phone.substr(7, 2)+" "+phone.substr(9, 2)+"\" | ";
    searchQuery = searchQuery+"\""+"("+"+"+phone.substr(0, 2)+") "+phone.substr(2, 3)+"."+phone.substr(5, 2)+"."+phone.substr(7, 2)+"."+phone.substr(9, 2)+"\"";
    document.getElementById("result").innerHTML = searchQuery;

}


function openQuery(buttonValue)

{

	 searchquery = document.getElementById("result").innerHTML;
	 const links = [];
	 links['Google']="https://www.google.com/search?q="+searchquery;
         links['Bing']="https://www.bing.com/search?q="+searchquery;
	 links['Yandex']="https://yandex.com/search/?text="+searchquery;
	

	 window.open(links[buttonValue]);

}
