// fetch('https://api.escuelajs.co/api/v1/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


// ! async await

const row = document.querySelector('.row')
let sepet =[]

async function fetchData(){
    try{
        let responce = await fetch('https://fakestoreapi.com/products')
        let data = await responce.json()
        return data
    }catch(error){
        console.log(error)
    }
}

fetchData()

.then(data => {
    
    console.log(data)
    // for(let i = 0; i < data.length; i++)
    //     console.log(data[i].title);
    // }
    // let sepet =[]


    data.forEach((urun) => {
        // console.log(urun.title)
        const col = document.createElement('div')
        col.classList.add('col')
        col.style.width ='250px'
        // col.style.height ='400px'

        const card = document.createElement('div')
        card.style.width ='100%'
        card.style.height ='100%'
        card.style.border ='1px solid black'
        card.style.background ='white'

        const imgDiv = document.createElement('div')
        imgDiv.style.width ='100%'
        imgDiv.style.height ='250px'

        const img = document.createElement('img')

        img.src = urun.image
        img.style.width='100%'
        img.style.height='100%'


        const cardBody = document.createElement('div')
        cardBody.style.width='100%'
        cardBody.style.height='250px'

        const baslik = document.createElement('h5')
        baslik.textContent = urun.title 

        const aciklama = document.createElement('p')
        aciklama.textContent = ` - ${urun.price} $`

        const btn = document.createElement('button')
        btn.classList.add('btn', 'btn-warning')
        btn.textContent = "Sepete Ekle"


        btn.addEventListener('click', () => {
            console.log(urun)

            sepet.push(urun)

            let sepetJSON = JSON.stringify(sepet)
            console.log(sepetJSON)

            localStorage.setItem('sepet', sepetJSON)

            console.log(sepet)
        })

        cardBody.append(baslik)
        cardBody.append(aciklama)
        cardBody.append(btn)

        imgDiv.append(img)

        card.append(imgDiv)
        card.append(cardBody)


        col.appendChild(card)


        row.append(col)
        
    })
    
})



// localStorage.clear()


// ! Shopping cartı çekiyoruz
const cartİcon = document.querySelector('.fa-cart-shopping')
const cart = document.querySelector('#sepet')
cartİcon.addEventListener('click', () =>{
    cart.classList.toggle('aktif')


})

sepet.forEach(urun => {
    const urunAdi = document.createElement('p')
    urunAdi.textContent = urun.title

    card.append(urunAdi)

})

// ! Shopping cart bitiş