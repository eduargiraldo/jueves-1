import { LitElement,html, render } from "lit-element";
import styleScss from "./formularioStyle";


export class Formulario extends LitElement{
    static get styles (){return [styleScss]}


    render () {
        return html`

        <h2> formulario </h2>
        <div class"color">
        <h3>
        <form >
        <label for="fname">nombre </label><br>
        <input type="text" id="fname" name="fname" value=""><br>
        <label for="fname">apellido </label><br>
        <input type="text" id="fname" name="fname" value=""><br>
        <label for="lname">contraseña:</label><br>
        <input type="password" id="password" name="contraseña"><br><br>

        <input type="submit" value="Submit"><br>
        </form> 
        </h3>
        </div>
        `;
    }
}


customElements.define('formulario-envia', Formulario);