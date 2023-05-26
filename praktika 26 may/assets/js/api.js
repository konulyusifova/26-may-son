document.querySelector('.btn').addEventListener('click', function(){
    const fetched=fetch('https://6469da9c03bb12ac2093f7d4.mockapi.io/furnish', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            icon: document.querySelector('#icon').value,
            name: document.querySelector('#name').value,
            about: document.querySelector('#about').value
        })
    })
    fetched.then(res=>{
        (res.ok == true)
        {
            document.querySelector('#icon').value='',
            document.querySelector('#name').value='',
            document.querySelector('#about').value=''
        }
    }).catch(err => console.log(err))
})