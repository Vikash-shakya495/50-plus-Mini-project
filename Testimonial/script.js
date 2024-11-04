const data = [
    {
      image: "https://previews.123rf.com/images/jemastock/jemastock1906/jemastock190611071/124192516-young-brunette-woman-profile-picture-avatar-cartoon-character-vector-illustration-graphic-design.jpg",
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      name: "John Doe",
      city: "New York"
    },
    {
      image: "https://previews.123rf.com/images/yupiramos/yupiramos1704/yupiramos170413645/76356600-cartoon-man-icon-face-isolated-vector-illustration.jpg",
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      name: "Jane Smith",
      city: "Los Angeles"
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/009/380/330/non_2x/woman-face-expression-clipart-design-illustration-free-png.png",
      quote: "The best way to predict the future is to invent it.",
      name: "Alice Johnson",
      city: "Chicago"
    },
    {
      image: "https://st3.depositphotos.com/8230070/15915/v/450/depositphotos_159158828-stock-illustration-face-expression-of-a-man.jpg",
      quote: "You miss 100% of the shots you don't take.",
      name: "Michael Brown",
      city: "Houston"
    },
    {
      image: "https://img.freepik.com/premium-vector/young-woman-face-cartoon_18591-44462.jpg",
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      name: "Emily Davis",
      city: "Phoenix"
    },
    {
      image: "https://thumbs.dreamstime.com/b/face-expression-handsome-man-tired-male-emotion-young-guy-cartoon-character-vector-illustration-isolated-white-background-166318430.jpg",
      quote: "The journey of a thousand miles begins with one step.",
      name: "Daniel Martinez",
      city: "Philadelphia"
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/009/380/330/non_2x/woman-face-expression-clipart-design-illustration-free-png.png",
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      name: "Sophia Taylor",
      city: "San Antonio"
    },
    {
      image: "https://img.freepik.com/premium-vector/young-man-face-cartoon_18591-44460.jpg",
      quote: "The only way to do great work is to love what you do.",
      name: "James Anderson",
      city: "San Diego"
    },
    {
      image: "https://st4.depositphotos.com/5934840/28204/v/450/depositphotos_282040380-stock-illustration-woman-face-cartoon.jpg",
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      name: "Charlotte Wilson",
      city: "Dallas"
    }
  ];
  
  let count = 0;
  const quote = document.querySelector('.quote');
  const name = document.querySelector('.name');
  const city = document.querySelector('.city');
  const image = document.querySelector("img");
  const bar = document.querySelector('.bar');
  
  const changeQuote = () => {

    
    // Update the content
    quote.innerHTML = data[count].quote;
    name.innerHTML = data[count].name;
    city.innerHTML = data[count].city;
    image.src = data[count].image;
    
    count = (count + 1) % data.length;
    
    bar.style.animation = 'none'; 
    setTimeout(() => {
      bar.style.animation = ''; 
    }, 10);
    
    setTimeout(changeQuote, 5000); 
  };
  

  changeQuote();
  