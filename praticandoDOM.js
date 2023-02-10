function addContact(){
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = "Contato"

    const ul = document.createElement('ul')

    //include Name
    const nameLi = document.createElement('li')
    nameLi.innerText = "nome: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullName'

    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)

    //Input Phonenumber
    const phoneLi = document.createElement('li')
    phoneLi.innerText = "Telefone:  "
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phoneNumber'
    ul.appendChild(document.createElement('br'))

    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    //input Adrress
    const addressLi = document.createElement('li')
    addressLi.innerText = "Endereço:  "
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'

    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    //include elements
    contactSection.append(h3,ul)
}

function removeContact(){
    const contactSection = document.getElementById('contacts-list')
    
    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length -1])
    contactSection.removeChild(contacts[contacts.length -1])

}