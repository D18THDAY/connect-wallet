
const formOne = document.querySelector('#myForm')
const formTwo = document.querySelector('#myForm2')
const formThree = document.querySelector('#myForm3')

// Google spreadsheet API endpoint

// ========================================

const scriptURL_formOne =
  'https://script.google.com/macros/s/AKfycbySAYAIiFCG1xVkoawEKxAMyw4ETjYyTNuanngTQSwawBMkvAlvIWjtea7IjMOZq5aq/exec'

const scriptURL_formTwo =
  'https://script.google.com/macros/s/AKfycbySAYAIiFCG1xVkoawEKxAMyw4ETjYyTNuanngTQSwawBMkvAlvIWjtea7IjMOZq5aq/exec'

const scriptURL_formThree =
  'https://script.google.com/macros/s/AKfycbySAYAIiFCG1xVkoawEKxAMyw4ETjYyTNuanngTQSwawBMkvAlvIWjtea7IjMOZq5aq/exec'



//==========================================================================
const validate = (formQuery, URL) => {
  formQuery.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log("texting");
    fetch(URL, {
      method: 'POST',
      body: new FormData(formQuery),
    })
      .then((response) => {
        window.location.href = './successful.html'
        // alert('Thanks for Contacting us..! We Will Contact You Soon...')
      })
      .catch((error) => console.error('Error!', error.message))
  })
}

validate(formOne, scriptURL_formOne)
validate(formTwo, scriptURL_formTwo)
validate(formThree, scriptURL_formThree)
// ===========================================================================
