

/******
*  Funktion zum Display der beliebtesten Produkten. Sie wird automatisch mit dem Aufrufen der Webseite ausgeführt. 
*  Ziel der Funktion ist, die  beliebtesten (Rating > 4.9)  Produkten auf der Haupseite darzustellen. 
*  
*  Die beliebtesten Produkten werden gefetched und Produkte divs werden für alle Produkte dynamisch erstellt. Die Produkte werden anfangs in anchor <a>
*  gekapselt und als Attribute href bekommen Sie => #/id(produkt.id). Danach werden Sie in der Sektion ProduktDesplaySeite gekapselt.
*  Da jedes Produkt ein eindeutiges href hat, kann der Router erkennen, dass auf das Produkt geklickt worden ist und die entsprechenden Produktinformationen 
*  mithilfe der displayProduktDetails() Funktion darstellen.     
*/
displayMainSeite();


function displayMainSeite(){
    const mainSection = document.getElementById('startSeite');
    
    const beliebteProdukte = document.createElement('div');
    beliebteProdukte.id = 'beliebte_produkte';
    beliebteProdukte.className='Container_for_Products';

     fetch('https://dummyjson.com/products?limit=0')
                        .then(res => res.json())
                        .then(produkte =>{
                            
                            
                            produkte = produkte.products
                            produkte.forEach(element => {
                            if (element.rating > 4.9){
                                
                                
                               
                                produkt = document.createElement('div');
                                produkt.className='produkt';
                                produkt.id= element.id;
                                
                               
      
                                title = document.createElement('div');
                                title.className = 'produktTitle';
                                title.innerHTML = ''+element.title;

                                imgDiv = document.createElement('div');
                                imgDiv.className= 'produktImageSmall';
                                
                                
                                                               
                                
                                
                                img= document.createElement('img');
                                img.src= element.images[1];
                                imgDiv.appendChild(img);

                                produktPrice = document.createElement('div');
                                produktPrice.className='produktPrice';
                                produktPrice.innerHTML=element.price + "€";
                                
                                if(element.discountPercentage >= 15){
                                    produktPrice.innerHTML = " <span style='font-size:14px; text-decoration: line-through;' ><b> " +element.price + "€ </span> <span style='color:red;'>  " +(element.price-(element.price*element.discountPercentage/100)).toFixed(2) + " € </span";
                                }else{
                                    produktPrice.innerHTML = '<b> ' +element.price + '€ </b>';
                                }
                                
                                produkt.appendChild(imgDiv);
                                produkt.appendChild(title);
                                produkt.appendChild(produktPrice);
                                
                                rootIdentifier = document.createElement('a');
                                rootIdentifier.href= `#/id=${element.id}`;
                                
                                rootIdentifier.appendChild(produkt);
                                beliebteProdukte.appendChild(rootIdentifier);
                                
                                
                                mainSection.appendChild(beliebteProdukte);

                                
                               
                            }
                        })
                    });

                }

                        
                           
                       
    

   
       
  

                       
