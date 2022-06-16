const ul = document.querySelector('ul')

document.querySelector('.getJokes').addEventListener('click',getJokes)

function getJokes(e){
    const number = document.querySelector('input').value

    const xhr = new XMLHttpRequest()


    xhr.open('Get',`http://api.icndb.com/jokes/random/${number}`,true)

    xhr.onload = ()=>{
       if(xhr.status = 200){
        const response = JSON.parse(xhr.responseText)
        
        console.log(response.value);
        output = ''

        if(response.type == 'success'){
        response.value.forEach((object)=>{
            output += `<li> ${object.joke} </li>
        `
        })} else {
            output = 'Something went wrong!'
        }



        ul.innerHTML = output

       } 
    }
    xhr.send()
    e.preventDefault();
}