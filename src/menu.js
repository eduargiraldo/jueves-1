import { LitElement,html, render } from "lit-element";
import styleScss from "./menuStyle";


export class Menu extends LitElement{

    static get styles (){return [styleScss]}

    render () {
        return html`
        <h2> menu </h2>
        
        <nav>
            <ul>
                <li><a href="">casa</a></li>
                <li><a href=""> servicios</a></li>
                <li><a href="">contacto</a></li>
                <li><a href="">usuarios</a></li>

            </ul>
        </nav>
    
                
        `;
    }
}



customElements.define('menu-menu', Menu);



