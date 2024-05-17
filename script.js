const types = ['type1', 'type2', 'type3']
const dimensions = ['small', 'medium', 'large']
const styles = ['abc','def','jqk','123','456','789']
// fold and unfold item
function addFoldFunction(element){
    const btn = element.querySelector(".room-header img")
    btn.addEventListener('click', ()=>{
        const parent = btn.parentNode.parentNode
        parent.classList.toggle('fold')
    })
    
}
// add span function
function addSelectSpan(element){
    const spans = element.querySelectorAll(".list-style span")
    const selects = element.querySelectorAll('.select-style span')
    const style = element.querySelector('.styles')

    spans.forEach(span => {
        span.addEventListener('click',()=>{
            if (!style.value||!style.value.includes(span.innerHTML)){
                span.classList.add('hidden')
                style.value += `|${span.innerHTML}`
                selects.forEach(select => {
                    if (select.innerHTML === span.innerHTML){
                        select.classList.remove('hidden')
                    }
                })
            }
        })
    });

    selects.forEach(select => {
        select.addEventListener('click',()=>{
            if (style.value.includes(select.innerHTML)){
                select.classList.add('hidden')
                style.value = style.value.replace (`|${select.innerHTML}`,'')
                spans.forEach(span => {
                    if (span.innerHTML === select.innerHTML){
                        span.classList.remove('hidden')
                    }
                })
            }
        })
    });

}

// add new room

document.querySelector('.newRoom').addEventListener('click', () =>{
    const newRoom = document.createElement('div')
    const roomNum = document.querySelectorAll('.room-infor').length + 1
    newRoom.classList.add('room-infor')
    const itemTypes = types.reduce((text, type,index)=> { return ` ${text} <option value="${index}">${type}</option>`},'<option value="#" ></option>')
    const itemDimensions = dimensions.reduce((text, type,index)=> { return ` ${text} <option value="${index}">${type}</option>`},'<option value="#" ></option>')
    const itemStyles = styles.reduce((text, type,index)=> { return ` ${text} <span >${type}</span>`},'')
    const itemSelecteds = styles.reduce((text, type,index)=> { return ` ${text} <span class="hidden">${type}</span>`},'')
    newRoom.innerHTML = `
    <div class="room-header">
        <p class="room-name">Room ${roomNum}</p>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADn5+ff399gYGCHh4f19fX5+fn8/PyRkZGFhYWenp6hoaHr6+tmZmbl5eXx8fEUFBRhYWFbW1t8fHyWlpZubm52dnba2trNzc0VFRXGxsaTk5NxcXGnp6cMDAzS0tK0tLQ6OjpMTExVVVU0NDQgICCysrIGbtmHAAAD10lEQVR4nO3ci17aMBzFcbKJLRcviEzwUkTcfP83HGyKDT0F2qZJw+f3fYCsZ2n/hwa11wMAAAAAAAAAAAAAAAAAAAAAAAAAAAA6Ir28dLhaMl8sFq83Dlds6uYpG/ZXr7eOlpvP3owxy+nK5f9aI6up+Wc4d7Lc09p8GnZkG7Pl1xWtFw6WW7yZnZdORBxPvq/ovfku3j6YnJcfDq6woewxf0WjtOl6K2s98+vKxUU2kVnXY9aNN3FkL2iuw+5iuhfQmKeGK94O91cMuovFgM0T3heWDBlxXLiaxgmT5+KaD8EiFnfQTBr3xUdxUfMQ6FkcL4vXctG4wObvKmKQXRw/ikvJmq+7P0z/R3T1ibACcYtuhoKLC+nLlX3vYiqGjDF3bi5DRnzxG1HUxDagq4FQ6ERn98fJZMCps4mXDtT69x53Ue+gw/eASxnR30SVz+D1T5f/RNiIsibcBtx8tpHP4r2XZzETRW+mjgP2wk1UXRMXbXysChNR10QrAcsitnyj+gxYErHdcaMDtnZclHjvRQ81YdOl0V5ELzVhS+SN2lZpZBPxj120GrBX8iy2EtHrFM3zFTEJFdBXxGA7uOUlopyi7l6XDtOlMXQa0XtN2HRpuIw4VlPUX8BNRHmjuosoA955DLiZA61G1EcWvr/Za2/cJPL80tMUzWsrYqKPDUMcs+u3/sbf9csdnAY5ZG+nNPQOeh0y39oojZE6k/FZEzYdsd/gRh2FrwmbPoGrH1F/VAsYsFcyUWveqLomHH35Up+M2K8TUddEgB7cJ2/UYY0bVddE+IAlH+AGlSPqmujED2E5maip3MFwNWFzEDGVNdGVgGWlMUhOX6GLNWHTE/XUXezM28QhTUqjszVhq7+Lesh0LmBJxFNKQwfsRE3Y9MvU0XHT7Zqw6dI4EjHt2OvSYfprm8MRZcDWv3ypr+qzWDJkOvgM7lSLGEUP7qsSMZqasFV4Fjv7unSYLo3nYsSYasJ2YmnEVRM2/bXN/i7GVhMW/dZvRdS3qPcvX+o7NlGjrAmb3sWviGcQsOQEbvD5e2aR1oRNl8ZsG1E/gyGP7uvRpTFLIu7BfTLicpbImohvB7fkCdzktzo2jKgmbHKiCpFN0bzTIkYc8LSIsdWETX+As3cw1mfwky6NnBhrwnYkYvwBy07gvp7BMwjYOzRuop6ieWURzyZgWcQzCqgjxl4TNvEydQ5TNK9QGucWsFAasZyqVZKPeF7P4E5/93ta4f+OT0uy9z+beJN1lZ9DiczVx2g2y9z8CTIAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6K6/y1MpcDO73rYAAAAASUVORK5CYII=" alt="" class="expand">
    </div>
    <div class="room-item">
        <label for="">Room type</label>
        <select name="" id="">
            ${itemTypes}
        </select>
    </div>
    <div class="room-item">
        <label for="">Room dimension</label>
        <select name="" id="">
            ${itemDimensions}
        </select>
    </div>
    <div class="room-item room-style">
        <label for="">Select room style</label>
        <input type="text" class="styles" hidden>
        <div class="select-style">
            ${itemSelecteds} 
        </div>
        <div class="list-style">
            ${itemStyles}
        </div>
    </div>
    
    `

    document.querySelector('.container').appendChild(newRoom)
    addFoldFunction(newRoom)
    addSelectSpan(newRoom)
})