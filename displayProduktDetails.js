

function displayProduktDetails(matches){
    

        id= matches[1];


    let pDS = document.getElementById('ProduktDesplaySeite');
    pDS.innerHTML = '';

    let produktDetails = document.createElement('div');
    produktDetails.className = 'produktDetails';

    let commentThread = document.createElement('div');

    
    

fetch('https://dummyjson.com/product/' + id)
                .then(res => res.json())
                .then(response =>{
                    
                    x=response.title;
                    
                    produktTitle = document.createElement('h1');
                    produktTitle.className='title';
                    produktTitle.innerHTML= response.title;

                    imgDiv = document.createElement('div');
                    imgDiv.className='imgDiv';
                    imgDiv.style=`background-image: url(${response.images[1]});`
                    
                    img= document.createElement('img');
                    img.src=response.images[1];
                    if(response.discountPercentage >= 15){
                        discount = document.createElement('div')
                        discount.className="discount";
                        discount.innerHTML= response.discountPercentage + ` %`;
                        imgDiv.appendChild(discount);
                    }
                    
                   //imgDiv.appendChild(img);
                    descriptionDiv = document.createElement('div');
                    descriptionDiv.className='descriptionDiv';
                    
                    price = document.createElement('div');
                    price.id='price';
                   
                    

                    if(response.discountPercentage >= 15){
                        price.innerHTML = "<b> " +(response.price-(response.price*response.discountPercentage/100)).toFixed(2) + "€ </b> <br> <span style='font-size:10px'; >Normalerpreis: "+ response.price + " €</span>";
                    }else{
                        price.innerHTML = '<b>Preis: ' +response.price + '€ </b>';
                    }


                    description = document.createElement('div');
                    description.innerHTML= `<span style='font-size:15px;'> Kategorie: ${response.category} </span> <br> <br> <b>Produkt Beschreibung: </b> <br> <br>  ${response.description}`;
                    description.id='description';
                    

                    rating = document.createElement('div');
                    rating.id='rating';
                    rating.className= 'Stars';
                    rating.style.setProperty('--rating', response.rating);
                    rating.innerHTML="<span style='font-size: 10px;'> (" + response.rating + " / 5)</span>"; 
                    
                    
                    ratingPriceDiv= document.createElement('div');
                    ratingPriceDiv.className='ratingPriceDiv';
                    
                    actions = document.createElement('div');
                    actions.className='actions';

                    buyButton = document.createElement('button');
                    buyButton.textContent= `In dem Warenkorb einlegen`;
                    buyButton.className="buyButton";

                    loveButton = document.createElement('button');
                    loveButton.textContent= `Wünschliste`;
                    loveButton.className="loveButton";

                    actions.appendChild(loveButton);
                    actions.appendChild(buyButton);
                
                    produktDetails.appendChild(actions);
                    
                    produktDetails.appendChild(rating);
                    produktDetails.appendChild(price);
                    produktDetails.appendChild(description);
                    produktDetails.appendChild(imgDiv);
                    produktDetails.appendChild(produktTitle);

                    
                    commentSection = document. createElement('button');
                    commentSection.innerHTML="<div class='text' style='width:50%; text-align:left;'><b>Bewertungen </b> </div> <div class='indikator' style='text-align: right; width:50%;'><span><b> > </b></span> </div>";
                    commentSection.className="commentSectionButton";

                    commentSection.addEventListener("click" ,() => {
                        indikator =  document.querySelector('.indikator');
                        textContent = indikator.querySelector('span').textContent;
                        commentThread.innerHTML="";

                        if(textContent.trim() === ">"){
                        
                        showComments();
                        commentSection.style.borderBottom= "none";

                        indikator.innerHTML="<span><b> ˅ </b></span>";
                        
                        
                        }else if(textContent.trim() === "˅"){
                            indikator.innerHTML="<span><b> > </b></span>";
                            commentSection.style.borderBottom= "2px solid lightgray";
                            
                        }
                    })
                   


                    
                    pDS.appendChild(produktDetails);
                    pDS.appendChild(commentSection);
            });
            
        
            function showComments(){
                fetch('https://dummyjson.com/comments/post/' + id)
                .then(res => res.json())
                .then(data =>{
                        comments = data.comments
                        
                        commentNumber=data.limit;

                        comments.forEach(commentData => {
                            
                            let comment = document.createElement('div');
                                comment.className = 'comment';
                            
    
                            userName = document.createElement('div');
                            userName.className='userName';
                            userName.textContent =commentData.user.username;
                            
    
                            commentBody = document.createElement('div');
                            commentBody.className='commentBody';
                            commentBody.textContent = commentData.body;
    
                            comment.appendChild(userName);
                            comment.appendChild(commentBody);
                            commentThread.appendChild(comment);
    
                            pDS.appendChild(commentThread);
                            
                        })
                }) 
            }
        
        }

        