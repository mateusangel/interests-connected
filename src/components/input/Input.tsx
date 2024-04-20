
// import L from "leaflet";
// import { MapControl, withLeaflet } from "react-leaflet";

// import "./styles/input.sass";

// class Input extends MapControl {
//   container: any;
//     state: { inputValue: string; };
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: ""
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ inputValue: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // Aqui você pode fazer algo com o valor do input, como passar para outro componente ou realizar alguma ação no mapa
//     console.log("Valor do input:", this.state.inputValue);
//   };

//   createLeafletElement(opts) {
//     const InputControl = L.Control.extend({
//       onAdd: (map) => {
//         this.container = L.DomUtil.create("div", "leaflet-control leaflet-bar");
//         const form = document.createElement("form");
//         form.addEventListener("submit", this.handleSubmit);

//         const input = document.createElement("input");
//         input.type = "text";
//         input.placeholder = "Digite algo";
//         input.value = this.state.inputValue;
//         input.addEventListener("input", this.handleChange);

//         form.appendChild(input);
//         this.container.appendChild(form);

//         return this.container;
//       },

//       onRemove: function (map) {
//         // Método necessário para remover o controle do mapa quando não for mais necessário
//       }
//     });

//     return new InputControl({ position: "bottomleft" });
//   }
// }

// export default withLeaflet(Input);
