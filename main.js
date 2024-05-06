const Box = document.querySelector('#box');
const addBtn = document.querySelector('#add');
const inputDiv = document.querySelector('#inputDiv');
const inputContent = document.querySelector('#inputContent');

addBtn.addEventListener('click',()=>{
  const divLi = document.createElement('li');
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  const btnRemove = document.createElement('button');
  const p = document.createElement('p');



  divLi.className = 'divLi';

  Box.appendChild(divLi);
  divLi.appendChild(checkbox)
  divLi.appendChild(p);
  p.textContent = inputContent.value; 
  
  if(inputContent.value == ''){
    alert('ton input est VIDE !!!!!!!');
    divLi.remove();
  }

  inputContent.value = '';

  divLi.appendChild(btnRemove);
  btnRemove.textContent = 'Remove';

  btnRemove.addEventListener('click',()=>{
    divLi.remove();
  });

  checkbox.addEventListener('click', ()=>{
   
    if(checkbox.checked == true){
       p.className = 'strike';
    }
    if (checkbox.checked == false) {
      p.className = 'nostrike';
    }
  });

  p.addEventListener('click', ()=>{
    const input = document.createElement('input');
    const submit = document.createElement('button');
    
    btnRemove.remove();
    divLi.appendChild(input);
    divLi.appendChild(submit);
    divLi.appendChild(btnRemove);

    submit.textContent = 'Submit';
    input.value = p.textContent;
    p.remove();

    submit.addEventListener('click', ()=>{
      divLi.appendChild(p);
      p.textContent = input.value;
      input.remove();
      submit.remove();
      btnRemove.remove();
      divLi.appendChild(btnRemove);
    });

  });
});



