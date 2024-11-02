const span = document.getElementById('currentyear')
const lastModifiedSpan = document.getElementById('lastModified')
span.innerText = (new Date().getFullYear())
lastModifiedSpan.innerText = `Last Modification: ${document.lastModified}`
