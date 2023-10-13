import { LitElement,html, render } from "lit-element";
import styleScss from "./my-elementStyle";


export class MyElement extends LitElement{

    static get styles (){return [styleScss]}

    render () {
        return html`
        <h1> hola mundo </h1>
        `;
    }
}


customElements.define('my-element', MyElement);