
function MiFieldSet(props){
    const {titulo,tx1,txt2} = props
 return(
    <>
        <fieldset>
            <legend>(titulo)</legend>
            <label htmlFor=(tx1)>(tx1): </label>
            <input> typle="text" id=(txt1)>
        </fieldset>
    </>
 )
}

export default MiFieldSet
