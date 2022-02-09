var group=[];
function submitform(){
    var prId=document.getElementById('product_Id').value;
    var prName=document.getElementById('product_name').value;
    var prPrice=document.getElementById('product_price').value;
    


    var object={};
    object.prId=prId;
    object.prName=prName;
    object.prPrice=prPrice;

    group.push(object);

    display();
    console.log("Group".group);
}

function display(){
    var html='';
    for(i=0;i<group.length;i++){
        html+='<tr><td>'+group[i].prId+'</td><td>'+group[i].prName + '</td> <td>' +group[i].prPrice +'</td></tr>';
        html +='</table>';
        document.getElementById('table_body').innerHTML=html;
    }
}


