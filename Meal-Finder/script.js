const search=document.getElementById('search'),
      submit=document.getElementById('submit'),
      random=document.getElementById('random'),
      mealsEl=document.getElementById('meals')
      resultHeading=document.getElementById('result-heading'),
      single_mealEl=document.getElementById('single-meal');

    //   search meal and fetch from API
    function searchMeal(e){
        e.preventDefault();
        // clear single meal
        single_mealEl.innerHTML="";
        // Get search term
        const term =search.value;
        console.log(term);
        // check for empty
        if(term.trim()){
            fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res=>{
                res.json();
                console.log(res.json());
            })
            .then(data=>{
                console.log(data);
                resultHeading.innerHTML=`<h2>Search result for ${term}</h2>`;
                if(data.meals===null){
                    resultHeading.innerHTML=`There are no search results.Try again!`;
                }
                else{
                    mealsEl.inneHTML=data.meals.map(meal=>`
                        <div class="meal>
                           <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                           <div class="meal-info" data-mealId="${meal.idMeal}">
                               <h3>${meal.strMeal}
                           </div>
                        </div>
                    
                    
                    `)
                    .join('');
                }
            });
            // clearSearchText;
            search.value="";
        }
        else{
               alert("Please enter a search value")
        }

    }
    //   Event Listeners
    submit.addEventListener('submit',searchMeal)