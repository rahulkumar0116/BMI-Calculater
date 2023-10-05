const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const weightguide = document.querySelector('#weight-guide')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML =`Please give a valid Height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML =`Please give a valid Weight ${weight}`;
    } else{
        const bmi = (weight /((height*height)/10000)).toFixed(2);

        results.innerHTML = `<span>${bmi}</span>`
        if(bmi > 24.9){
            weightguide.innerHTML = `Overweight pls loss some weight`
        }else if(bmi < 18.6){
            weightguide.innerHTML = `Underweight pls gain some weight`
        }else{
            weightguide.innerHTML = `Congrets Your BMI is perfect`

        }
    }


})