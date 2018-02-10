

function TodoRed(state, action) {
    switch (action.type) {
        case 'add':
            return {
                todos: [...state.todos, action.payload]
            }
        case 'deleteAndEdit': 
        return {
            todos : action.payload
        }

        default:
            return state
    }
}
let store = Redux.createStore(TodoRed, { todos: [] });
let maindiv = document.getElementById('maindiv');

AddTodo = () => {

    let inputfield = document.getElementById('inputfield').value;
    if(inputfield){
        if (maindiv.hasChildNodes()) {
            document.getElementById('list').remove()
    
        }
        store.dispatch({ type: "add", payload: inputfield })
        document.getElementById('inputfield').value=''
        let state = store.getState().todos;
    
        let ul = document.createElement('ul');
        ul.setAttribute('id', 'list')
    
    
        store.getState().todos.map((value, index) => {
            let li = document.createElement('li');
            li.setAttribute('id', index)
    
            let deletebtn = document.createElement('button')
            let deletebtnText = document.createTextNode('Delete')
            deletebtn.appendChild(deletebtnText)
            deletebtn.setAttribute('onClick', `deletefunc(${index})`)
    
            let editbtn = document.createElement('button')
            let editbtnText = document.createTextNode('Edit')
            editbtn.appendChild(editbtnText)
            editbtn.setAttribute('onClick', `editfunc(${index})`)
    
            let liTextNode = document.createTextNode(value)
            li.appendChild(liTextNode)
            li.appendChild(deletebtn)
            li.appendChild(editbtn)
    
            ul.appendChild(li)
            maindiv.appendChild(ul)
        })
    }
    else{
        alert("Please enter valid value")
    }
   
}

function deletefunc(index) {
let state = store.getState().todos;
state.splice(index,1)
let deletedstate=state
store.dispatch({ type: "deleteAndEdit", payload: deletedstate })
if (maindiv.hasChildNodes()) {
    document.getElementById('list').remove()
}

let ul = document.createElement('ul');
ul.setAttribute('id', 'list')


store.getState().todos.map((value, index) => {
    let li = document.createElement('li');
    li.setAttribute('id', index)

    let deletebtn = document.createElement('button')
    let deletebtnText = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtnText)
    deletebtn.setAttribute('onClick', `deletefunc(${index})`)

    let editbtn = document.createElement('button')
    let editbtnText = document.createTextNode('Edit')
    editbtn.appendChild(editbtnText)
    editbtn.setAttribute('onClick', `editfunc(${index})`)

    let liTextNode = document.createTextNode(value)
    li.appendChild(liTextNode)
    li.appendChild(deletebtn)
    li.appendChild(editbtn)

    ul.appendChild(li)
    maindiv.appendChild(ul)
})
}

function editfunc(index) {
    let editedvalue=prompt('Enter value to edit');
    if(editedvalue){
        let state = store.getState().todos;
        state.splice(index,1,editedvalue)
        let deletedstate=state
        store.dispatch({ type: "deleteAndEdit", payload: deletedstate })
        if (maindiv.hasChildNodes()) {
            document.getElementById('list').remove()
        }
        
        let ul = document.createElement('ul');
        ul.setAttribute('id', 'list')
        
        
        store.getState().todos.map((value, index) => {
            let li = document.createElement('li');
            li.setAttribute('id', index)
        
            let deletebtn = document.createElement('button')
            let deletebtnText = document.createTextNode('Delete')
            deletebtn.appendChild(deletebtnText)
            deletebtn.setAttribute('onClick', `deletefunc(${index})`)
            
        
            let editbtn = document.createElement('button')
            let editbtnText = document.createTextNode('Edit')
            editbtn.appendChild(editbtnText)
            editbtn.setAttribute('onClick', `editfunc(${index})`)
        
            let liTextNode = document.createTextNode(value)
            li.appendChild(liTextNode)
            li.appendChild(deletebtn)
            li.appendChild(editbtn)
        
            ul.appendChild(li)
            maindiv.appendChild(ul)
        })
    }
    else{
        alert("Please enter valid value")
    }
   }
