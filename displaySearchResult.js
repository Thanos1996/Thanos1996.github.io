
 


function executeSearch(matches){
    
    document.getElementById('SuchErgebnisDisplay').innerHTML="";

    fetch('https://dummyjson.com/products/category/' + matches[1] ) 
             .then(res => res.json())
             .then(data => {

                    if (data.total == 0){

                    parargraphMissingProdukt = document.createElement('p');
                    parargraphMissingProdukt.innerHTML = 'Das gesuchte Produkt existiert leider nicht. Klicken Sie auf das Unternehmens Logo bzw. Name um auf die Hauptseite zu landen';
                    document.getElementById('SuchErgebnisDisplay').appendChild(parargraphMissingProdukt);
                    
                    }else{
                    
                
                    const response = data.products;
                    
                    let productsContainer = document.createElement('div');
                    productsContainer.id='productsContainer';
                    productsContainer.className='Container_for_Products';

                    
                    
                    category = document.createElement('h1');
                    category.className='bodyHeader';
                    category.innerHTML= response[0].category;

                    response.forEach(element => {
                        
                        const imgDiv = document.createElement('div')
                        imgDiv.className = 'produktImageSmall';

                        const title = document.createElement('div');
                        title.className = 'produktTitle';
                        title.innerHTML = element.title;
                        
                        const img = document.createElement('img');
                        img.src= element.images[1];
                        imgDiv.appendChild(img);

                        

                        const produkt = document.createElement('div');
                        produkt.className='produkt';
                        produkt.id = element.id;

                        
                        produktPrice = document.createElement('div');
                        produktPrice.className='produktPrice';
                        produktPrice.innerHTML=element.price + "€";
                        
                        produkt.appendChild(imgDiv);
                        produkt.appendChild(title);
                        produkt.appendChild(produktPrice);
                        
                        
                        rootIdentifier = document.createElement('a');
                        rootIdentifier.href= `#/id=${element.id}`;
                        rootIdentifier.appendChild(produkt);
                        

                        productsContainer.appendChild(rootIdentifier);
                        
                        document.getElementById('SuchErgebnisDisplay').appendChild(category);
                        document.getElementById('SuchErgebnisDisplay').appendChild(productsContainer);
                     
                          
                    })
                    
                }
                   
                });
                
}

